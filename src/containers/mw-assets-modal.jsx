import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {injectIntl, intlShape} from 'react-intl';
import bindAll from 'lodash.bindall';
import {closeAssetsModal} from '../reducers/modals';
import downloadBlob from '../lib/utils/download-blob';
import storage from '../lib/persistence/storage';
import log from '../lib/utils/log';
import AssetsModalComponent, {messages} from '../components/mw-assets-modal/assets-modal.jsx';

const IMAGE_FORMATS = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp', 'svg'];
const AUDIO_FORMATS = ['wav', 'mp3', 'ogg'];
const TEXT_FORMATS = ['txt', 'json', 'csv', 'html', 'md', 'xml', 'js', 'css', 'fractch'];

const PREVIEW_TEXT_LIMIT = 5000;

const getExtension = fileName => {
    const dot = fileName.lastIndexOf('.');
    if (dot <= 0 || dot === fileName.length - 1) {
        return 'bin';
    }
    return fileName.substring(dot + 1).toLowerCase();
};

const getBaseName = path => path.substring(path.lastIndexOf('/') + 1);

const getFolder = path => {
    const slash = path.lastIndexOf('/');
    return slash === -1 ? '' : path.substring(0, slash);
};

const joinPath = (folder, name) => (folder ? `${folder}/${name}` : name);

const sanitizeFolderName = name => String(name)
    .replace(/\\/g, '/')
    .split('/')
    .map(segment => segment.trim())
    .filter(segment => segment)
    .join('/');

// 构建从「路径」到「该目录下直接子目录 / 文件」的映射。
// 自定义素材的文件夹完全由素材路径推导而来，额外的空文件夹单独传入。
const buildDirectories = (assets, extraFolders) => {
    const directories = new Map();

    const ensure = path => {
        if (directories.has(path)) {
            return directories.get(path);
        }
        const directory = {folders: new Set(), files: []};
        directories.set(path, directory);
        if (path !== '') {
            const parent = getFolder(path);
            ensure(parent).folders.add(getBaseName(path));
        }
        return directory;
    };

    ensure('');

    for (const folder of extraFolders) {
        ensure(folder);
    }

    for (const asset of assets) {
        ensure(getFolder(asset.name)).files.push(asset);
    }

    return directories;
};

const sortFiles = (files, sortKey, sortDir) => {
    const direction = sortDir === 'desc' ? -1 : 1;
    return files.slice().sort((a, b) => {
        let result;
        if (sortKey === 'size') {
            result = a.size - b.size;
        } else if (sortKey === 'type') {
            result = a.dataFormat.localeCompare(b.dataFormat);
        } else {
            result = a.baseName.localeCompare(b.baseName);
        }
        if (result === 0) {
            result = a.baseName.localeCompare(b.baseName);
        }
        return result * direction;
    });
};

class MWAssetsModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleAssetsChanged',
            'handleClickAdd',
            'handleFileChange',
            'handlePaste',
            'handleDropFiles',
            'handleMove',
            'handleNavigate',
            'handleBack',
            'handleForward',
            'handleUp',
            'handleSearchChange',
            'handleClearSearch',
            'handleViewModeChange',
            'handleSort',
            'handleTogglePreview',
            'handleSelectFile',
            'handleSelectAll',
            'handleClearSelection',
            'handleRenameStart',
            'handleRenameCommit',
            'handleRenameCancel',
            'handleDelete',
            'handleExport',
            'handleNewFolderStart',
            'handleNewFolderCommit',
            'handleNewFolderCancel',
            'handleDeleteFolder',
            'handleKeyDown',
            'setFileInput'
        ]);
        this.state = {
            assets: this.getAssets(),
            extraFolders: [],
            history: [''],
            historyIndex: 0,
            cwd: '',
            selection: [],
            anchor: null,
            search: '',
            viewMode: 'list',
            sortKey: 'name',
            sortDir: 'asc',
            previewOpen: true,
            creatingFolder: false,
            renamingIndex: null
        };
    }

    componentDidMount () {
        this.assetManager.on('change', this.handleAssetsChanged);
        document.addEventListener('paste', this.handlePaste);
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount () {
        this.assetManager.off('change', this.handleAssetsChanged);
        document.removeEventListener('paste', this.handlePaste);
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    get assetManager () {
        return this.props.vm.runtime.assetManager;
    }

    getAssets () {
        return this.props.vm.runtime.assetManager.assets.map((entry, index) => ({
            index,
            name: entry.name,
            baseName: getBaseName(entry.name),
            folder: getFolder(entry.name),
            dataFormat: entry.asset.dataFormat,
            size: entry.asset.data.length,
            md5: entry.asset.assetId
        }));
    }

    getDirectories () {
        return buildDirectories(this.state.assets, this.state.extraFolders);
    }

    getListing () {
        const directories = this.getDirectories();
        const directory = directories.get(this.state.cwd);
        const folders = directory ?
            Array.from(directory.folders)
                .map(name => {
                    const path = joinPath(this.state.cwd, name);
                    const child = directories.get(path);
                    return {
                        name,
                        path,
                        count: child ? child.files.length + child.folders.size : 0
                    };
                })
                .sort((a, b) => a.name.localeCompare(b.name)) :
            [];
        const files = directory ?
            sortFiles(directory.files, this.state.sortKey, this.state.sortDir) :
            [];
        return {folders, files};
    }

    getSearchResults () {
        const query = this.state.search.trim().toLowerCase();
        if (!query) {
            return null;
        }
        const files = this.state.assets.filter(asset =>
            asset.name.toLowerCase().includes(query) ||
            asset.dataFormat.toLowerCase().includes(query)
        );
        return sortFiles(files, this.state.sortKey, this.state.sortDir);
    }

    getBreadcrumbs () {
        const segments = this.state.cwd ? this.state.cwd.split('/') : [];
        const crumbs = [{name: 'All assets', path: ''}];
        let path = '';
        for (const segment of segments) {
            path = joinPath(path, segment);
            crumbs.push({name: segment, path});
        }
        return crumbs;
    }

    getPreview () {
        const {selection} = this.state;
        if (selection.length === 0) {
            return null;
        }

        if (selection.length > 1) {
            let totalSize = 0;
            const items = selection.map(index => {
                const entry = this.assetManager.assets[index];
                const size = entry ? entry.asset.data.length : 0;
                totalSize += size;
                return {
                    name: entry ? entry.name : '',
                    dataFormat: entry ? entry.asset.dataFormat : '',
                    size
                };
            });
            return {
                multiple: true,
                count: selection.length,
                totalSize,
                items
            };
        }

        const index = selection[0];
        const entry = this.assetManager.assets[index];
        if (!entry) {
            return null;
        }

        const dataFormat = entry.asset.dataFormat;
        const preview = {
            index,
            name: entry.name,
            dataFormat,
            size: entry.asset.data.length,
            md5: entry.asset.assetId,
            kind: 'none'
        };

        if (IMAGE_FORMATS.includes(dataFormat)) {
            preview.kind = 'image';
            preview.url = this.assetManager.getObjectURL(entry.name);
        } else if (AUDIO_FORMATS.includes(dataFormat)) {
            preview.kind = 'audio';
            preview.url = this.assetManager.getObjectURL(entry.name);
        } else if (TEXT_FORMATS.includes(dataFormat)) {
            preview.kind = 'text';
            const text = entry.asset.decodeText();
            preview.text = text.length > PREVIEW_TEXT_LIMIT ?
                `${text.substring(0, PREVIEW_TEXT_LIMIT)}\n…` :
                text;
        }

        return preview;
    }

    getVisibleFiles () {
        return this.getSearchResults() || this.getListing().files;
    }

    handleAssetsChanged () {
        const assets = this.getAssets();
        const valid = new Set(assets.map(asset => asset.index));
        this.setState(state => ({
            assets,
            selection: state.selection.filter(index => valid.has(index)),
            renamingIndex: valid.has(state.renamingIndex) ? state.renamingIndex : null
        }));
        this.props.vm.emitWorkspaceUpdate();
    }

    setFileInput (input) {
        this.fileInput = input;
    }

    async addFiles (files, folder) {
        for (const file of Array.from(files)) {
            try {
                const buffer = await file.arrayBuffer();
                const asset = storage.createAsset(
                    storage.AssetType.CustomAsset,
                    getExtension(file.name),
                    new Uint8Array(buffer),
                    null,
                    true
                );
                const path = joinPath(folder, file.name);
                this.assetManager.addAsset(this.assetManager.getUnusedName(path), asset);
            } catch (e) {
                log.error(`could not add custom asset "${file.name}"`, e);
            }
        }
    }

    handleClickAdd () {
        this.fileInput.click();
    }

    handleFileChange (e) {
        const files = e.target.files;
        if (files && files.length) {
            this.addFiles(files, this.state.cwd);
        }
        e.target.value = null;
    }

    handlePaste (e) {
        const files = e.clipboardData && e.clipboardData.files;
        if (files && files.length) {
            e.preventDefault();
            this.addFiles(files, this.state.cwd);
        }
    }

    handleDropFiles (files, folder) {
        this.addFiles(files, folder);
    }

    handleMove (indices, folder) {
        for (const index of indices) {
            const entry = this.assetManager.assets[index];
            if (!entry) {
                continue;
            }
            const target = joinPath(folder, getBaseName(entry.name));
            if (target !== entry.name) {
                this.assetManager.renameAsset(index, target);
            }
        }
    }

    navigateTo (path) {
        if (path === this.state.cwd) {
            this.setState({selection: [], anchor: null, renamingIndex: null});
            return;
        }
        this.setState(state => {
            const history = state.history.slice(0, state.historyIndex + 1);
            if (history[history.length - 1] !== path) {
                history.push(path);
            }
            return {
                history,
                historyIndex: history.length - 1,
                cwd: path,
                selection: [],
                anchor: null,
                search: '',
                renamingIndex: null,
                creatingFolder: false
            };
        });
    }

    handleNavigate (path) {
        this.navigateTo(path);
    }

    handleBack () {
        this.setState(state => {
            if (state.historyIndex <= 0) {
                return null;
            }
            const historyIndex = state.historyIndex - 1;
            return {
                historyIndex,
                cwd: state.history[historyIndex],
                selection: [],
                anchor: null,
                search: '',
                renamingIndex: null,
                creatingFolder: false
            };
        });
    }

    handleForward () {
        this.setState(state => {
            if (state.historyIndex >= state.history.length - 1) {
                return null;
            }
            const historyIndex = state.historyIndex + 1;
            return {
                historyIndex,
                cwd: state.history[historyIndex],
                selection: [],
                anchor: null,
                search: '',
                renamingIndex: null,
                creatingFolder: false
            };
        });
    }

    handleUp () {
        const parent = getFolder(this.state.cwd);
        this.navigateTo(parent);
    }

    handleSearchChange (search) {
        this.setState({
            search,
            selection: [],
            anchor: null,
            renamingIndex: null
        });
    }

    handleClearSearch () {
        this.setState({search: ''});
    }

    handleViewModeChange (viewMode) {
        this.setState({viewMode});
    }

    handleSort (sortKey) {
        this.setState(state => ({
            sortKey,
            sortDir: state.sortKey === sortKey && state.sortDir === 'asc' ? 'desc' : 'asc'
        }));
    }

    handleTogglePreview () {
        this.setState(state => ({previewOpen: !state.previewOpen}));
    }

    handleSelectFile (event, index) {
        const order = this.getVisibleFiles().map(file => file.index);
        const isRange = event.shiftKey && this.state.anchor !== null;
        const isToggle = event.ctrlKey || event.metaKey;

        this.setState(state => {
            if (isRange) {
                const from = order.indexOf(state.anchor);
                const to = order.indexOf(index);
                if (from !== -1 && to !== -1) {
                    return {
                        selection: order.slice(Math.min(from, to), Math.max(from, to) + 1),
                        anchor: state.anchor
                    };
                }
            }
            if (isToggle) {
                const hasIndex = state.selection.includes(index);
                return {
                    selection: hasIndex ?
                        state.selection.filter(item => item !== index) :
                        state.selection.concat(index),
                    anchor: index
                };
            }
            return {selection: [index], anchor: index};
        });
    }

    handleSelectAll () {
        this.setState(state => ({
            selection: this.getVisibleFiles().map(file => file.index),
            anchor: null,
            renamingIndex: state.renamingIndex
        }));
    }

    handleClearSelection () {
        this.setState({selection: [], anchor: null});
    }

    handleRenameStart (index) {
        this.setState({
            renamingIndex: index,
            creatingFolder: false,
            selection: [index],
            anchor: index
        });
    }

    handleRenameCommit (index, name) {
        const entry = this.assetManager.assets[index];
        if (!entry) {
            this.setState({renamingIndex: null});
            return;
        }
        const base = name.trim();
        if (!base || base === getBaseName(entry.name)) {
            this.setState({renamingIndex: null});
            return;
        }
        this.assetManager.renameAsset(index, joinPath(getFolder(entry.name), base));
        this.setState({renamingIndex: null});
    }

    handleRenameCancel () {
        this.setState({renamingIndex: null});
    }

    handleDelete (indices) {
        const list = (indices || this.state.selection)
            .filter((index, position, arr) => arr.indexOf(index) === position)
            .filter(index => this.assetManager.assets[index])
            .sort((a, b) => b - a);
        if (list.length === 0) {
            return;
        }

        const message = list.length === 1 ?
            this.props.intl.formatMessage(messages.delete, {
                asset: this.assetManager.assets[list[0]].name
            }) :
            this.props.intl.formatMessage(messages.deleteMultiple, {count: list.length});

        // eslint-disable-next-line no-alert
        if (!confirm(message)) {
            return;
        }

        for (const index of list) {
            this.assetManager.deleteAsset(index);
        }
        this.setState({selection: [], anchor: null, renamingIndex: null});
    }

    handleExport (indices) {
        for (const index of (indices || this.state.selection)) {
            const entry = this.assetManager.assets[index];
            if (!entry) {
                continue;
            }
            downloadBlob(getBaseName(entry.name), new Blob([entry.asset.data]));
        }
    }

    handleNewFolderStart () {
        this.setState({creatingFolder: true, renamingIndex: null});
    }

    handleNewFolderCommit (name) {
        const cleaned = sanitizeFolderName(name);
        if (!cleaned) {
            this.setState({creatingFolder: false});
            return;
        }
        const path = joinPath(this.state.cwd, cleaned);
        this.setState(state => ({
            creatingFolder: false,
            extraFolders: state.extraFolders.includes(path) ?
                state.extraFolders :
                state.extraFolders.concat(path)
        }));
    }

    handleNewFolderCancel () {
        this.setState({creatingFolder: false});
    }

    handleDeleteFolder (path) {
        const prefix = `${path}/`;
        const indices = this.assetManager.assets
            .map((entry, index) => ({name: entry.name, index}))
            .filter(entry => entry.name === path || entry.name.startsWith(prefix))
            .map(entry => entry.index);

        const folderName = getBaseName(path);
        const message = indices.length === 0 ?
            this.props.intl.formatMessage(messages.deleteFolderEmpty, {folder: folderName}) :
            this.props.intl.formatMessage(messages.deleteFolder, {
                folder: folderName,
                count: indices.length
            });

        // eslint-disable-next-line no-alert
        if (!confirm(message)) {
            return;
        }

        indices.sort((a, b) => b - a).forEach(index => this.assetManager.deleteAsset(index));

        const parent = getFolder(path);
        const cwdInside = this.state.cwd === path || this.state.cwd.startsWith(prefix);

        this.setState(() => ({
            extraFolders: this.state.extraFolders.filter(folder =>
                folder !== path && !folder.startsWith(prefix)),
            selection: [],
            anchor: null,
            renamingIndex: null
        }));

        if (cwdInside) {
            this.navigateTo(parent);
        }
    }

    handleKeyDown (e) {
        const target = e.target;
        const tagName = target && target.tagName ? target.tagName.toUpperCase() : '';
        if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT' ||
            (target && target.isContentEditable)) {
            return;
        }

        if (e.key === 'Escape') {
            if (this.state.search) {
                this.handleClearSearch();
            }
            return;
        }

        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
            e.preventDefault();
            this.handleSelectAll();
            return;
        }

        if (e.altKey && e.key === 'ArrowLeft') {
            e.preventDefault();
            this.handleBack();
            return;
        }

        if (e.altKey && e.key === 'ArrowRight') {
            e.preventDefault();
            this.handleForward();
            return;
        }

        if (e.key === 'Backspace' && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            this.handleUp();
            return;
        }

        if (e.key === 'Delete' && this.state.selection.length > 0) {
            e.preventDefault();
            this.handleDelete();
            return;
        }

        if (e.key === 'F2' && this.state.selection.length === 1) {
            e.preventDefault();
            this.handleRenameStart(this.state.selection[0]);
        }
    }

    render () {
        const listing = this.getListing();
        const searchResults = this.getSearchResults();

        return (
            <AssetsModalComponent
                onClose={this.props.onClose}
                breadcrumbs={this.getBreadcrumbs()}
                canGoBack={this.state.historyIndex > 0}
                canGoForward={this.state.historyIndex < this.state.history.length - 1}
                canGoUp={this.state.cwd !== ''}
                cwd={this.state.cwd}
                folders={listing.folders}
                files={listing.files}
                search={this.state.search}
                searchResults={searchResults}
                totalCount={this.state.assets.length}
                totalSize={this.state.assets.reduce((total, asset) => total + asset.size, 0)}
                viewMode={this.state.viewMode}
                sortKey={this.state.sortKey}
                sortDir={this.state.sortDir}
                selection={this.state.selection}
                preview={this.getPreview()}
                previewOpen={this.state.previewOpen}
                creatingFolder={this.state.creatingFolder}
                renamingIndex={this.state.renamingIndex}
                fileInputRef={this.setFileInput}
                onClickAdd={this.handleClickAdd}
                onFileChange={this.handleFileChange}
                onBack={this.handleBack}
                onForward={this.handleForward}
                onUp={this.handleUp}
                onNavigate={this.handleNavigate}
                onSearchChange={this.handleSearchChange}
                onClearSearch={this.handleClearSearch}
                onViewModeChange={this.handleViewModeChange}
                onSort={this.handleSort}
                onTogglePreview={this.handleTogglePreview}
                onSelectFile={this.handleSelectFile}
                onSelectAll={this.handleSelectAll}
                onClearSelection={this.handleClearSelection}
                onRenameStart={this.handleRenameStart}
                onRenameCommit={this.handleRenameCommit}
                onRenameCancel={this.handleRenameCancel}
                onDelete={this.handleDelete}
                onExport={this.handleExport}
                onNewFolderStart={this.handleNewFolderStart}
                onNewFolderCommit={this.handleNewFolderCommit}
                onNewFolderCancel={this.handleNewFolderCancel}
                onDeleteFolder={this.handleDeleteFolder}
                onDropFiles={this.handleDropFiles}
                onMove={this.handleMove}
            />
        );
    }
}

MWAssetsModal.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func.isRequired,
    vm: PropTypes.shape({
        emitWorkspaceUpdate: PropTypes.func,
        runtime: PropTypes.shape({
            assetManager: PropTypes.shape({
                assets: PropTypes.array,
                addAsset: PropTypes.func,
                deleteAsset: PropTypes.func,
                renameAsset: PropTypes.func,
                getUnusedName: PropTypes.func,
                getObjectURL: PropTypes.func,
                on: PropTypes.func,
                off: PropTypes.func
            })
        })
    })
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(closeAssetsModal())
});

export default injectIntl(connect(
    mapStateToProps,
    mapDispatchToProps
)(MWAssetsModal));
