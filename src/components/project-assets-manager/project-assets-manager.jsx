import JSZip from '@turbowarp/jszip';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ChevronDown,
    ChevronRight,
    Download,
    Folder,
    FolderOpen,
    LayoutGrid,
    List,
    RefreshCw,
    Search,
    Trash2,
    Upload,
    X
} from 'lucide-react';

import Modal from '../../containers/windowed-modal.jsx';
import {costumeUpload, soundUpload} from '../../lib/file-uploader.js';
import downloadBlob from '../../lib/utils/download-blob.js';
import FileTypeIcon from './file-type-icon.jsx';

import styles from './project-assets-manager.css';

const messages = defineMessages({
    title: {
        id: 'mw.projectAssets.title',
        defaultMessage: 'Project Assets Manager'
    },
    costumes: {
        id: 'mw.projectAssets.costumes',
        defaultMessage: 'Costumes'
    },
    sounds: {
        id: 'mw.projectAssets.sounds',
        defaultMessage: 'Sounds'
    },
    extensions: {
        id: 'mw.projectAssets.extensions',
        defaultMessage: 'Extensions'
    },
    stage: {
        // 复用编辑器已有的「舞台」词条
        id: 'gui.stageSelector.stage',
        defaultMessage: 'Stage'
    },
    untitled: {
        id: 'mw.projectAssets.untitled',
        defaultMessage: 'Untitled project'
    },
    fonts: {
        id: 'mw.projectAssets.fonts',
        defaultMessage: 'Fonts'
    },
    back: {
        id: 'mw.projectAssets.back',
        defaultMessage: 'Back'
    },
    forward: {
        id: 'mw.projectAssets.forward',
        defaultMessage: 'Forward'
    },
    up: {
        id: 'mw.projectAssets.up',
        defaultMessage: 'Up one level'
    },
    searchPlaceholder: {
        id: 'mw.projectAssets.searchPlaceholder',
        defaultMessage: 'Search assets'
    },
    clearSearch: {
        id: 'mw.projectAssets.clearSearch',
        defaultMessage: 'Clear search'
    },
    itemCount: {
        id: 'mw.projectAssets.itemCount',
        defaultMessage: '{folders} folders · {files} files'
    },
    resultCount: {
        id: 'mw.projectAssets.resultCount',
        defaultMessage: '{count} results'
    },
    searchResults: {
        id: 'mw.projectAssets.searchResults',
        defaultMessage: 'Search results'
    },
    selectedItems: {
        id: 'mw.projectAssets.selectedItems',
        defaultMessage: '{count} selected'
    },
    downloadSelected: {
        id: 'mw.projectAssets.downloadSelected',
        defaultMessage: 'Download selected'
    },
    downloadAll: {
        id: 'mw.projectAssets.downloadAll',
        defaultMessage: 'Download all'
    },
    deleteSelected: {
        id: 'mw.projectAssets.deleteSelected',
        defaultMessage: 'Delete selected'
    },
    downloadItem: {
        id: 'mw.projectAssets.downloadItem',
        defaultMessage: 'Download'
    },
    deleteItem: {
        id: 'mw.projectAssets.deleteItem',
        defaultMessage: 'Delete'
    },
    confirmDelete: {
        id: 'mw.projectAssets.confirmDelete',
        defaultMessage: 'Delete {count, plural, one {# selected asset} other {# selected assets}}? ' +
            'This cannot be undone.'
    },
    deleteFailed: {
        id: 'mw.projectAssets.deleteFailed',
        defaultMessage: 'Could not delete {count, plural, one {# asset} other {# assets}}. ' +
            'The stage and each sprite must keep at least one costume.'
    },
    expandFolder: {
        id: 'mw.projectAssets.expandFolder',
        defaultMessage: 'Expand {name}'
    },
    collapseFolder: {
        id: 'mw.projectAssets.collapseFolder',
        defaultMessage: 'Collapse {name}'
    },
    openFolder: {
        id: 'mw.projectAssets.openFolder',
        defaultMessage: 'Open'
    },
    downloadFolder: {
        id: 'mw.projectAssets.downloadFolder',
        defaultMessage: 'Download folder'
    },
    selectAll: {
        id: 'mw.projectAssets.selectAll',
        defaultMessage: 'Select all'
    },
    refresh: {
        id: 'mw.projectAssets.refresh',
        defaultMessage: 'Refresh'
    },
    columnName: {
        id: 'mw.projectAssets.columnName',
        defaultMessage: 'Name'
    },
    columnLocation: {
        id: 'mw.projectAssets.columnLocation',
        defaultMessage: 'Location'
    },
    columnType: {
        id: 'mw.projectAssets.columnType',
        defaultMessage: 'Type'
    },
    folderType: {
        id: 'mw.projectAssets.folderType',
        defaultMessage: 'Folder'
    },
    fileTypeImage: {
        id: 'mw.projectAssets.fileTypeImage',
        defaultMessage: 'Image'
    },
    fileTypeAudio: {
        id: 'mw.projectAssets.fileTypeAudio',
        defaultMessage: 'Sound'
    },
    fileTypeFont: {
        id: 'mw.projectAssets.fileTypeFont',
        defaultMessage: 'Font'
    },
    fileTypeCode: {
        id: 'mw.projectAssets.fileTypeCode',
        defaultMessage: 'Code'
    },
    fileTypeFile: {
        id: 'mw.projectAssets.fileTypeFile',
        defaultMessage: 'File'
    },
    detailsView: {
        id: 'mw.projectAssets.detailsView',
        defaultMessage: 'Details view'
    },
    gridView: {
        id: 'mw.projectAssets.gridView',
        defaultMessage: 'Grid view'
    },
    empty: {
        id: 'mw.projectAssets.empty',
        defaultMessage: 'This project has no assets to export.'
    },
    emptyFolder: {
        id: 'mw.projectAssets.emptyFolder',
        defaultMessage: 'This folder is empty.'
    },
    emptyHint: {
        id: 'mw.projectAssets.emptyHint',
        defaultMessage: 'Import costumes or sounds, or download the whole project as a zip file.'
    },
    noSearchResults: {
        id: 'mw.projectAssets.noSearchResults',
        defaultMessage: 'No matching assets.'
    },
    busy: {
        id: 'mw.projectAssets.busy',
        defaultMessage: 'Preparing download…'
    },
    importHere: {
        id: 'mw.projectAssets.importHere',
        defaultMessage: 'Import assets'
    },
    importCostumes: {
        id: 'mw.projectAssets.importCostumes',
        defaultMessage: 'Import costumes into {name}'
    },
    importSounds: {
        id: 'mw.projectAssets.importSounds',
        defaultMessage: 'Import sounds into {name}'
    },
    importing: {
        id: 'mw.projectAssets.importing',
        defaultMessage: 'Importing assets…'
    },
    importFailed: {
        id: 'mw.projectAssets.importFailed',
        defaultMessage: 'Failed to import assets: {message}'
    },
    error: {
        id: 'mw.projectAssets.error',
        defaultMessage: 'Failed to read assets: {message}'
    }
});

const MIME_TYPES = {
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    bmp: 'image/bmp',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    wav: 'audio/wav',
    mp3: 'audio/mpeg',
    ogg: 'audio/ogg',
    js: 'text/javascript',
    ttf: 'font/ttf',
    otf: 'font/otf',
    woff: 'font/woff',
    woff2: 'font/woff2'
};

// 文件名里不能出现的字符（Windows / macOS / Linux 取并集）+ 控制字符 + 结尾的点和空格
const toSafeFileName = name => {
    const safe = String(name)
        .replace(/[\\/:*?"<>|]/g, '_')
        // eslint-disable-next-line no-control-regex
        .replace(/[\u0000-\u001f\u007f]/g, '')
        .replace(/[. ]+$/, '')
        .trim();
    return safe || 'asset';
};

const toUniqueFileName = (fileName, used) => {
    if (!used.has(fileName)) {
        used.add(fileName);
        return fileName;
    }
    const dot = fileName.lastIndexOf('.');
    const base = dot === -1 ? fileName : fileName.slice(0, dot);
    const extension = dot === -1 ? '' : fileName.slice(dot);
    let index = 2;
    while (used.has(`${base} (${index})${extension}`)) {
        index += 1;
    }
    const unique = `${base} (${index})${extension}`;
    used.add(unique);
    return unique;
};

const readFileAsArrayBuffer = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error('Failed to read file'));
    reader.readAsArrayBuffer(file);
});

const stripFileExtension = name => String(name).replace(/\.[^.]+$/, '') || 'asset';

// 自定义扩展可能是 data URL 或远程地址，只在真正下载时才读取源码
const loadExtensionSource = async url => {
    if (/^data:/i.test(url)) {
        const comma = url.indexOf(',');
        if (comma === -1) throw new Error('Invalid data URL');
        const header = url.slice(5, comma);
        const payload = url.slice(comma + 1);
        if (header.includes(';base64')) {
            const binary = atob(payload);
            const bytes = new Uint8Array(binary.length);
            for (let index = 0; index < binary.length; index++) {
                bytes[index] = binary.charCodeAt(index);
            }
            return new TextDecoder().decode(bytes);
        }
        return decodeURIComponent(payload);
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.text();
};

const buildAssetTree = (vm, projectTitle, intl) => {
    const stageLabel = intl.formatMessage(messages.stage);
    const trimmedTitle = String(projectTitle || '').trim();
    const rootName = `${toSafeFileName(trimmedTitle || intl.formatMessage(messages.untitled))}.sb3`;

    const targets = ((vm && vm.runtime && vm.runtime.targets) || [])
        .filter(target => target && target.sprite && target.isOriginal !== false);
    const stage = targets.find(target => target.isStage);
    const orderedTargets = stage ? [stage, ...targets.filter(target => !target.isStage)] : targets;

    const makeTargetFolder = (target, category) => {
        const isSound = category === 'sounds';
        const items = (isSound ?
            (target.getSounds && target.getSounds()) :
            (target.getCostumes && target.getCostumes())) || [];
        const usedNames = new Set();
        const children = items.map((item, index) => {
            const asset = item.asset;
            const dataFormat = (asset && asset.dataFormat) || (isSound ? 'wav' : 'png');
            const name = toUniqueFileName(
                `${toSafeFileName(item.name || (isSound ? 'sound' : 'costume'))}.${dataFormat}`,
                usedNames
            );
            return {
                id: `${category}:${target.id}:${index}`,
                kind: 'file',
                name,
                fileType: isSound ? 'audio' : 'image',
                mime: MIME_TYPES[dataFormat.toLowerCase()] || 'application/octet-stream',
                targetId: target.id,
                category,
                item,
                index,
                deletable: true,
                getData: isSound ?
                    () => asset.data :
                    () => vm.getExportedCostume(item)
            };
        });
        return {
            id: `${category}-target:${target.id}`,
            kind: 'folder',
            name: target.isStage ? stageLabel : toSafeFileName(target.getName()),
            targetId: target.id,
            category,
            importable: true,
            children
        };
    };

    const costumesFolder = {
        id: 'costumes',
        kind: 'folder',
        name: intl.formatMessage(messages.costumes),
        children: orderedTargets.map(target => makeTargetFolder(target, 'costumes'))
    };
    const soundsFolder = {
        id: 'sounds',
        kind: 'folder',
        name: intl.formatMessage(messages.sounds),
        children: orderedTargets.map(target => makeTargetFolder(target, 'sounds'))
    };

    const extensionURLs = (vm && vm.extensionManager && typeof vm.extensionManager.getExtensionURLs === 'function') ?
        vm.extensionManager.getExtensionURLs() : {};
    const usedExtensionNames = new Set();
    const extensionChildren = Object.keys(extensionURLs)
        .sort((a, b) => a.localeCompare(b))
        .map(extensionId => {
            const url = extensionURLs[extensionId];
            return {
                id: `extension:${extensionId}`,
                kind: 'file',
                name: toUniqueFileName(`${toSafeFileName(extensionId)}.js`, usedExtensionNames),
                fileType: 'code',
                mime: MIME_TYPES.js,
                getData: () => loadExtensionSource(url)
            };
        });
    const extensionsFolder = {
        id: 'extensions',
        kind: 'folder',
        name: intl.formatMessage(messages.extensions),
        children: extensionChildren
    };

    const fontsFolder = (() => {
        const fontManager = vm && vm.runtime && vm.runtime.fontManager;
        if (!fontManager || typeof fontManager.getFonts !== 'function') return null;
        const customFonts = fontManager.getFonts().filter(font => !font.system && font.data);
        if (!customFonts.length) return null;
        const usedFontNames = new Set();
        return {
            id: 'fonts',
            kind: 'folder',
            name: intl.formatMessage(messages.fonts),
            children: customFonts.map((font, index) => {
                const format = String(font.format || 'ttf').toLowerCase();
                return {
                    id: `fonts:${index}`,
                    kind: 'file',
                    name: toUniqueFileName(
                        `${toSafeFileName(font.name || 'font')}.${format}`,
                        usedFontNames
                    ),
                    fileType: 'font',
                    mime: MIME_TYPES[format] || 'application/octet-stream',
                    getData: () => font.data
                };
            })
        };
    })();

    return {
        id: 'root',
        kind: 'folder',
        name: rootName,
        children: fontsFolder ?
            [costumesFolder, soundsFolder, extensionsFolder, fontsFolder] :
            [costumesFolder, soundsFolder, extensionsFolder]
    };
};

// 收集一个节点下所有文件；path 以该节点为起点，用于 zip 内的目录结构
const collectFiles = (node, prefix = '') => {
    if (node.kind === 'file') {
        return [{file: node, path: prefix ? `${prefix}/${node.name}` : node.name}];
    }
    // 根节点自身不进入 zip 路径
    const nextPrefix = node.id === 'root' ? prefix : (prefix ? `${prefix}/${node.name}` : node.name);
    return node.children.flatMap(child => collectFiles(child, nextPrefix));
};

const countFiles = node => (node.kind === 'file' ? 1 : node.children.reduce(
    (total, child) => total + countFiles(child), 0
));

// 建立 文件夹 id / 父级 / 文件 id 三张索引，供导航、面包屑与搜索复用
const buildFolderIndex = tree => {
    const folders = new Map();
    const parents = new Map();
    const files = new Map();
    const walk = (node, parentId) => {
        if (node.kind === 'file') {
            files.set(node.id, {file: node, folderId: parentId});
            return;
        }
        folders.set(node.id, node);
        if (parentId) parents.set(node.id, parentId);
        node.children.forEach(child => walk(child, node.id));
    };
    walk(tree, null);
    return {folders, parents, files};
};

const getTypeSortKey = item => (item.type === 'folder' ? 'folder' : (item.file.fileType || 'file'));

const NAME_COLLATOR = new Intl.Collator('en', {numeric: true, sensitivity: 'base'});

const sortViewItems = (items, sortBy, sortDir, searching) => items.slice().sort((a, b) => {
    if (!searching && a.type !== b.type) {
        return a.type === 'folder' ? -1 : 1;
    }
    let result = 0;
    if (sortBy === 'type') {
        result = getTypeSortKey(a).localeCompare(getTypeSortKey(b));
    }
    if (!result) {
        result = NAME_COLLATOR.compare(a.name, b.name);
    }
    return result * sortDir;
});

const MENU_WIDTH = 216;
const MENU_ROW_HEIGHT = 32;
const MENU_SEPARATOR_HEIGHT = 9;

class ProjectAssetsManager extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tree: buildAssetTree(props.vm, props.projectTitle, props.intl),
            currentId: 'root',
            history: ['root'],
            historyIndex: 0,
            expandedFolders: new Set(['root', 'costumes', 'sounds', 'extensions', 'fonts']),
            selected: new Set(),
            anchorIndex: null,
            focusedIndex: null,
            query: '',
            sortBy: 'name',
            sortDir: 1,
            viewMode: 'list',
            menu: null,
            draggingId: null,
            dragOverId: null,
            busy: false,
            importing: false,
            error: ''
        };

        this.bodyRef = React.createRef();
        this.listRef = React.createRef();
        this.searchRef = React.createRef();
        this.fileInputRef = React.createRef();
        this.draggedFile = null;
        this.importTarget = null;
        this.cachedTree = null;
        this.cachedIndex = null;

        [
            'focusList',
            'handleBack',
            'handleForward',
            'handleUp',
            'handleCrumbClick',
            'handleTreeRowClick',
            'handleTreeToggle',
            'handleSearchChange',
            'handleSearchKeyDown',
            'handleClearSearch',
            'handleSelectAll',
            'handleViewList',
            'handleViewGrid',
            'handleSortByName',
            'handleSortByType',
            'handleRefresh',
            'handleDownloadSelected',
            'handleDownloadAll',
            'handleDeleteSelected',
            'handleImportClick',
            'handleImport',
            'handleRowClick',
            'handleRowDoubleClick',
            'handleRowContextMenu',
            'handleRowDragStart',
            'handleRowDragEnd',
            'handleRowDragOver',
            'handleRowDrop',
            'handleBlankClick',
            'handleBlankContextMenu',
            'handleKeyDown',
            'handleMenuBackdrop',
            'handleMenuClick'
        ].forEach(method => {
            this[method] = this[method].bind(this);
        });
    }

    componentDidMount () {
        this.focusList();
    }

    getIndex () {
        if (this.cachedTree !== this.state.tree) {
            this.cachedTree = this.state.tree;
            this.cachedIndex = buildFolderIndex(this.state.tree);
        }
        return this.cachedIndex;
    }

    getTrail (folderId) {
        const {folders, parents} = this.getIndex();
        const trail = [];
        let id = folderId;
        while (id) {
            const folder = folders.get(id);
            if (folder) trail.unshift(folder);
            id = parents.get(id);
        }
        return trail;
    }

    getLocationLabel (folderId) {
        return this.getTrail(folderId)
            .slice(1)
            .map(folder => folder.name)
            .join(' / ');
    }

    // 当前视图：当前文件夹内容，或全项目搜索结果（资源管理器式）
    getView () {
        const {currentId, query, sortBy, sortDir} = this.state;
        const index = this.getIndex();
        const folder = index.folders.get(currentId) || this.state.tree;
        const needle = query.trim().toLowerCase();
        const searching = Boolean(needle);
        let items;

        if (searching) {
            items = [];
            index.files.forEach((record, fileId) => {
                if (!record.file.name.toLowerCase().includes(needle)) return;
                items.push({
                    key: `file:${fileId}`,
                    id: fileId,
                    type: 'file',
                    name: record.file.name,
                    file: record.file,
                    location: this.getLocationLabel(record.folderId)
                });
            });
        } else {
            items = [];
            folder.children.forEach(child => {
                if (child.kind === 'folder') {
                    items.push({
                        key: `folder:${child.id}`,
                        id: child.id,
                        type: 'folder',
                        name: child.name,
                        folder: child
                    });
                } else {
                    items.push({
                        key: `file:${child.id}`,
                        id: child.id,
                        type: 'file',
                        name: child.name,
                        file: child,
                        location: this.getLocationLabel(folder.id)
                    });
                }
            });
        }

        return {
            folder,
            trail: this.getTrail(folder.id),
            searching,
            items: sortViewItems(items, sortBy, sortDir, searching)
        };
    }

    getDeletableFiles () {
        const {files} = this.getIndex();
        const result = [];
        this.state.selected.forEach(id => {
            const record = files.get(id);
            if (record && record.file.deletable) result.push(record.file);
        });
        return result;
    }

    // 选中项对应的下载条目；选中文件夹时连同其内容一起打包
    getSelectionEntries () {
        const {files, folders} = this.getIndex();
        const entries = [];
        this.state.selected.forEach(id => {
            const record = files.get(id);
            if (record) {
                entries.push({file: record.file, path: record.file.name});
                return;
            }
            const folder = folders.get(id);
            if (folder) {
                collectFiles(folder, folder.name).forEach(entry => entries.push(entry));
            }
        });
        return entries;
    }

    getTypeLabel (item) {
        const {intl} = this.props;
        if (item.type === 'folder') return intl.formatMessage(messages.folderType);
        switch (item.file.fileType) {
        case 'image':
            return intl.formatMessage(messages.fileTypeImage);
        case 'audio':
            return intl.formatMessage(messages.fileTypeAudio);
        case 'font':
            return intl.formatMessage(messages.fileTypeFont);
        case 'code':
            return intl.formatMessage(messages.fileTypeCode);
        default:
            return intl.formatMessage(messages.fileTypeFile);
        }
    }

    focusList () {
        if (this.listRef.current) {
            this.listRef.current.focus({preventScroll: true});
        }
    }

    navigateTo (folderId) {
        if (this.state.currentId === folderId) {
            this.focusList();
            return;
        }
        const history = this.state.history.slice(0, this.state.historyIndex + 1);
        history.push(folderId);
        const expandedFolders = new Set(this.state.expandedFolders);
        this.getTrail(folderId).forEach(folder => expandedFolders.add(folder.id));
        this.setState({
            currentId: folderId,
            history,
            historyIndex: history.length - 1,
            expandedFolders,
            selected: new Set(),
            anchorIndex: null,
            focusedIndex: null,
            query: '',
            menu: null
        }, this.focusList);
    }

    handleBack () {
        const {history, historyIndex} = this.state;
        if (historyIndex <= 0) return;
        this.setState({
            currentId: history[historyIndex - 1],
            historyIndex: historyIndex - 1,
            selected: new Set(),
            anchorIndex: null,
            focusedIndex: null,
            query: '',
            menu: null
        }, this.focusList);
    }

    handleForward () {
        const {history, historyIndex} = this.state;
        if (historyIndex >= history.length - 1) return;
        this.setState({
            currentId: history[historyIndex + 1],
            historyIndex: historyIndex + 1,
            selected: new Set(),
            anchorIndex: null,
            focusedIndex: null,
            query: '',
            menu: null
        }, this.focusList);
    }

    handleUp () {
        const {parents} = this.getIndex();
        const parentId = parents.get(this.state.currentId);
        if (parentId) this.navigateTo(parentId);
    }

    handleCrumbClick (event) {
        this.navigateTo(event.currentTarget.dataset.folderId);
    }

    handleTreeRowClick (event) {
        this.navigateTo(event.currentTarget.dataset.folderId);
    }

    handleTreeToggle (event) {
        event.stopPropagation();
        const id = event.currentTarget.dataset.expandId;
        this.setState(current => {
            const expandedFolders = new Set(current.expandedFolders);
            if (expandedFolders.has(id)) expandedFolders.delete(id);
            else expandedFolders.add(id);
            return {expandedFolders};
        });
    }

    handleSearchChange (event) {
        this.setState({
            query: event.target.value,
            selected: new Set(),
            anchorIndex: null,
            focusedIndex: null
        });
    }

    handleSearchKeyDown (event) {
        if (event.key === 'Escape') {
            event.stopPropagation();
            this.handleClearSearch();
        } else if (event.key === 'Enter') {
            this.focusList();
        }
    }

    handleClearSearch () {
        this.setState({
            query: '',
            selected: new Set(),
            anchorIndex: null,
            focusedIndex: null
        }, this.focusList);
    }

    handleSelectAll () {
        const items = this.getView().items;
        this.setState({
            selected: new Set(items.map(item => item.id)),
            anchorIndex: items.length ? 0 : null,
            focusedIndex: items.length ? 0 : null
        });
    }

    handleViewList () {
        this.setState({viewMode: 'list'});
    }

    handleViewGrid () {
        this.setState({viewMode: 'grid'});
    }

    toggleSort (sortBy) {
        this.setState(current => ({
            sortBy,
            sortDir: current.sortBy === sortBy ? -current.sortDir : 1
        }));
    }

    handleSortByName () {
        this.toggleSort('name');
    }

    handleSortByType () {
        this.toggleSort('type');
    }

    rebuildTree () {
        const tree = buildAssetTree(this.props.vm, this.props.projectTitle, this.props.intl);
        const index = buildFolderIndex(tree);
        const currentId = index.folders.has(this.state.currentId) ? this.state.currentId : tree.id;
        this.cachedTree = tree;
        this.cachedIndex = index;
        this.setState({
            tree,
            currentId,
            selected: new Set(),
            anchorIndex: null,
            focusedIndex: null
        });
    }

    handleRefresh () {
        this.rebuildTree();
        this.setState({error: ''});
    }

    async runDownload (task) {
        if (this.state.busy) return;
        this.setState({busy: true, error: ''});
        try {
            await task();
        } catch (e) {
            console.error('project-assets-manager: download failed', e);
            this.setState({
                error: this.props.intl.formatMessage(messages.error, {
                    message: (e && e.message) || String(e)
                })
            });
        } finally {
            this.setState({busy: false});
        }
    }

    downloadFile (file) {
        this.runDownload(async () => {
            const data = await file.getData();
            const blob = data instanceof Blob ? data : new Blob([data], {type: file.mime});
            downloadBlob(file.name, blob);
        });
    }

    downloadZip (entries, zipName) {
        this.runDownload(async () => {
            const zip = new JSZip();
            for (const entry of entries) {
                zip.file(entry.path, await entry.file.getData());
            }
            const blob = await zip.generateAsync({type: 'blob'});
            downloadBlob(`${toSafeFileName(zipName)}.zip`, blob);
        });
    }

    downloadFolder (folder) {
        const entries = collectFiles(folder);
        if (!entries.length) return;
        this.downloadZip(entries, folder.name);
    }

    handleDownloadSelected () {
        const entries = this.getSelectionEntries();
        if (!entries.length) return;
        if (entries.length === 1) {
            this.downloadFile(entries[0].file);
            return;
        }
        this.downloadZip(entries, `${stripFileExtension(this.state.tree.name)}-selected`);
    }

    handleDownloadAll () {
        const entries = collectFiles(this.state.tree);
        if (!entries.length) return;
        this.downloadZip(entries, this.state.tree.name);
    }

    handleDeleteSelected () {
        const files = this.getDeletableFiles();
        if (!files.length) return;
        const {intl} = this.props;
        // eslint-disable-next-line no-alert
        const confirmed = window.confirm(
            intl.formatMessage(messages.confirmDelete, {count: files.length})
        );
        if (!confirmed) return;
        const {vm} = this.props;
        let deleted = 0;
        let failed = 0;
        files.forEach(file => {
            const target = vm.runtime.getTargetById(file.targetId);
            if (!target) return;
            const items = file.category === 'sounds' ? target.getSounds() : target.getCostumes();
            const index = items.indexOf(file.item);
            if (index === -1) return;
            const result = file.category === 'sounds' ?
                target.deleteSound(index) :
                target.deleteCostume(index);
            if (result) deleted += 1;
            else failed += 1;
        });
        if (deleted) vm.runtime.emitProjectChanged();
        this.rebuildTree();
        this.setState({
            error: failed ? intl.formatMessage(messages.deleteFailed, {count: failed}) : ''
        });
    }

    startImport (folder) {
        if (this.state.busy || !folder || !folder.importable) return;
        this.importTarget = {targetId: folder.targetId, category: folder.category};
        const input = this.fileInputRef.current;
        if (!input) return;
        input.value = null;
        input.accept = folder.category === 'sounds' ?
            'audio/*,.wav,.mp3,.ogg,.m4a,.aac' :
            'image/svg+xml,.svg,.png,.jpg,.jpeg,.bmp,.gif,.webp';
        input.click();
    }

    handleImportClick () {
        this.startImport(this.getView().folder);
    }

    async handleImport (event) {
        const files = Array.from(event.target.files || []);
        event.target.value = null;
        const target = this.importTarget;
        this.importTarget = null;
        if (!files.length || !target) return;
        const {vm, intl} = this.props;
        this.setState({busy: true, importing: true, error: ''});
        let failed = 0;
        let lastError = '';
        for (const file of files) {
            try {
                const buffer = await readFileAsArrayBuffer(file);
                const name = stripFileExtension(file.name);
                if (target.category === 'sounds') {
                    await this.addSoundFile(buffer, file.type, name, target.targetId);
                } else {
                    await this.addCostumeFile(buffer, file.type, name, target.targetId);
                }
            } catch (e) {
                console.error('project-assets-manager: import failed', e);
                failed += 1;
                lastError = (e && e.message) || String(e);
            }
        }
        vm.runtime.emitProjectChanged();
        if (vm.editingTarget) vm.runtime.requestTargetsUpdate(vm.editingTarget);
        this.rebuildTree();
        this.setState({
            busy: false,
            importing: false,
            error: failed ? intl.formatMessage(messages.importFailed, {message: lastError}) : ''
        });
    }

    addCostumeFile (buffer, fileType, name, targetId) {
        const {vm} = this.props;
        return new Promise((resolve, reject) => {
            costumeUpload(buffer, fileType, vm, costumes => {
                const additions = costumes.map((costume, index) => {
                    costume.name = `${name}${index ? index + 1 : ''}`;
                    return vm.addCostume(costume.md5, costume, targetId);
                });
                Promise.all(additions).then(resolve, reject);
            }, reject);
        });
    }

    addSoundFile (buffer, fileType, name, targetId) {
        const {vm} = this.props;
        return new Promise((resolve, reject) => {
            soundUpload(buffer, fileType, vm.runtime.storage, sound => {
                sound.name = name;
                vm.addSound(sound, targetId).then(resolve, reject);
            }, reject);
        });
    }

    applySelection (index, event) {
        const items = this.getView().items;
        const item = items[index];
        if (!item) return;
        const {ctrlKey, metaKey, shiftKey} = event;
        this.setState(current => {
            const selected = new Set(current.selected);
            const anchor = current.anchorIndex === null ? index : current.anchorIndex;
            if (shiftKey) {
                selected.clear();
                const start = Math.min(anchor, index);
                const end = Math.max(anchor, index);
                for (let i = start; i <= end; i++) {
                    if (items[i]) selected.add(items[i].id);
                }
            } else if (ctrlKey || metaKey) {
                if (selected.has(item.id)) selected.delete(item.id);
                else selected.add(item.id);
            } else {
                selected.clear();
                selected.add(item.id);
            }
            return {
                selected,
                anchorIndex: shiftKey ? anchor : index,
                focusedIndex: index
            };
        });
        this.focusList();
    }

    handleRowClick (event) {
        this.applySelection(Number(event.currentTarget.dataset.index), event);
    }

    handleRowDoubleClick (event) {
        const index = Number(event.currentTarget.dataset.index);
        const item = this.getView().items[index];
        if (!item) return;
        if (item.type === 'folder') {
            this.navigateTo(item.folder.id);
            return;
        }
        this.downloadFile(item.file);
    }

    selectOnly (item, index) {
        this.setState({
            selected: new Set([item.id]),
            anchorIndex: index,
            focusedIndex: index
        });
    }

    handleRowContextMenu (event) {
        event.preventDefault();
        const index = Number(event.currentTarget.dataset.index);
        const item = this.getView().items[index];
        if (!item) return;

        let menuSelection = this.state.selected;
        if (!menuSelection.has(item.id)) {
            menuSelection = new Set([item.id]);
            this.setState({
                selected: menuSelection,
                anchorIndex: index,
                focusedIndex: index
            });
        }
        this.openMenu(event, this.buildMenuItems(item, menuSelection));
    }

    handleBlankClick (event) {
        if (event.target !== event.currentTarget) return;
        this.setState({selected: new Set(), anchorIndex: null, focusedIndex: null});
    }

    handleBlankContextMenu (event) {
        event.preventDefault();
        this.openMenu(event, this.buildMenuItems(null, this.state.selected));
    }

    openMenu (event, items) {
        const rect = this.bodyRef.current ?
            this.bodyRef.current.getBoundingClientRect() :
            {left: 0, top: 0, width: 900, height: 620};
        const menuHeight = items.reduce((total, item) =>
            total + (item.separator ? MENU_SEPARATOR_HEIGHT : MENU_ROW_HEIGHT), 14);
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        x = Math.max(8, Math.min(x, rect.width - MENU_WIDTH - 8));
        y = Math.max(8, Math.min(y, rect.height - menuHeight - 8));
        this.setState({menu: {x, y, items}});
    }

    buildMenuItems (item, selection) {
        const {intl} = this.props;
        const items = [];

        if (!item) {
            items.push({
                icon: Download,
                label: intl.formatMessage(messages.downloadAll),
                action: this.handleDownloadAll
            });
            items.push({separator: true});
            items.push({
                icon: FolderOpen,
                label: intl.formatMessage(messages.selectAll),
                action: this.handleSelectAll
            });
            items.push({
                icon: RefreshCw,
                label: intl.formatMessage(messages.refresh),
                action: this.handleRefresh
            });
            return items;
        }

        if (item.type === 'folder') {
            const {folder} = item;
            items.push({
                icon: FolderOpen,
                label: intl.formatMessage(messages.openFolder),
                action: () => this.navigateTo(folder.id)
            });
            items.push({
                icon: Download,
                label: intl.formatMessage(messages.downloadFolder),
                action: () => this.downloadFolder(folder)
            });
            if (folder.importable) {
                items.push({separator: true});
                items.push({
                    icon: Upload,
                    label: intl.formatMessage(
                        folder.category === 'sounds' ? messages.importSounds : messages.importCostumes,
                        {name: folder.name}
                    ),
                    action: () => this.startImport(folder)
                });
            }
            return items;
        }

        const single = selection.size <= 1;
        const {files} = this.getIndex();
        let deletableSelected = 0;
        selection.forEach(id => {
            const record = files.get(id);
            if (record && record.file.deletable) deletableSelected += 1;
        });
        items.push({
            icon: Download,
            label: intl.formatMessage(single ? messages.downloadItem : messages.downloadSelected),
            action: this.handleDownloadSelected
        });
        if (deletableSelected) {
            items.push({separator: true});
            items.push({
                icon: Trash2,
                danger: true,
                label: intl.formatMessage(single ? messages.deleteItem : messages.deleteSelected),
                action: this.handleDeleteSelected
            });
        }
        return items;
    }

    handleMenuBackdrop () {
        this.setState({menu: null});
    }

    handleMenuClick (event) {
        const index = Number(event.currentTarget.dataset.menuIndex);
        const menu = this.state.menu;
        const item = menu && menu.items[index];
        this.setState({menu: null}, () => {
            if (item && item.action) item.action();
        });
    }

    handleRowDragStart (event) {
        const index = Number(event.currentTarget.dataset.index);
        const item = this.getView().items[index];
        if (!item || item.type !== 'file' || !item.file.deletable) {
            event.preventDefault();
            return;
        }
        this.draggedFile = item.file;
        if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', item.file.id);
        }
        this.setState({draggingId: item.id, dragOverId: null});
    }

    handleRowDragEnd () {
        this.draggedFile = null;
        this.setState({draggingId: null, dragOverId: null});
    }

    handleRowDragOver (event) {
        const index = Number(event.currentTarget.dataset.index);
        const item = this.getView().items[index];
        const dragged = this.draggedFile;
        if (!item || item.type !== 'file' || !dragged || dragged.id === item.file.id ||
            dragged.targetId !== item.file.targetId || dragged.category !== item.file.category) {
            return;
        }
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
        if (this.state.dragOverId !== item.id) this.setState({dragOverId: item.id});
    }

    handleRowDrop (event) {
        event.preventDefault();
        const index = Number(event.currentTarget.dataset.index);
        const item = this.getView().items[index];
        const dragged = this.draggedFile;
        this.draggedFile = null;
        this.setState({draggingId: null, dragOverId: null});
        if (!item || item.type !== 'file' || !dragged || dragged.id === item.file.id ||
            dragged.targetId !== item.file.targetId || dragged.category !== item.file.category) {
            return;
        }
        const {vm} = this.props;
        const target = vm.runtime.getTargetById(item.file.targetId);
        if (!target) return;
        const items = item.file.category === 'sounds' ? target.getSounds() : target.getCostumes();
        const from = items.indexOf(dragged.item);
        const to = items.indexOf(item.file.item);
        if (from === -1 || to === -1 || from === to) return;
        // 指针落在目标行的上半部分时插到它前面，下半部分时插到它后面
        const rect = event.currentTarget.getBoundingClientRect();
        const insertAfter = event.clientY > rect.top + (rect.height / 2);
        let newIndex = to + (insertAfter ? 1 : 0);
        if (from < newIndex) newIndex -= 1;
        if (newIndex === from) return;
        const moved = item.file.category === 'sounds' ?
            vm.reorderSound(item.file.targetId, from, newIndex) :
            vm.reorderCostume(item.file.targetId, from, newIndex);
        if (moved) {
            vm.runtime.requestTargetsUpdate(target);
            vm.emitTargetsUpdate();
            this.rebuildTree();
        }
    }

    handleKeyDown (event) {
        if (event.target && event.target.tagName === 'INPUT') return;
        const items = this.getView().items;
        const mod = event.ctrlKey || event.metaKey;

        if (mod && (event.key === 'a' || event.key === 'A')) {
            event.preventDefault();
            this.handleSelectAll();
            return;
        }
        if (mod && (event.key === 'f' || event.key === 'F')) {
            event.preventDefault();
            if (this.searchRef.current) this.searchRef.current.focus();
            return;
        }
        if (event.key === 'Delete') {
            event.preventDefault();
            this.handleDeleteSelected();
            return;
        }
        if (event.key === 'Backspace' || (event.altKey && event.key === 'ArrowLeft')) {
            event.preventDefault();
            this.handleUp();
            return;
        }
        if (event.altKey && event.key === 'ArrowRight') {
            event.preventDefault();
            this.handleForward();
            return;
        }

        const current = this.state.focusedIndex === null ? -1 : this.state.focusedIndex;
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            if (!items.length) return;
            event.preventDefault();
            const next = event.key === 'ArrowDown' ?
                Math.min(items.length - 1, current + 1) :
                Math.max(0, current <= 0 ? 0 : current - 1);
            if (event.shiftKey) {
                const anchor = this.state.anchorIndex === null ? Math.max(0, current) : this.state.anchorIndex;
                const selected = new Set();
                const start = Math.min(anchor, next);
                const end = Math.max(anchor, next);
                for (let i = start; i <= end; i++) {
                    if (items[i]) selected.add(items[i].id);
                }
                this.setState({
                    selected,
                    anchorIndex: anchor,
                    focusedIndex: next
                }, () => this.scrollFocusedIntoView(next));
            } else {
                this.setState({
                    selected: new Set([items[next].id]),
                    anchorIndex: next,
                    focusedIndex: next
                }, () => this.scrollFocusedIntoView(next));
            }
            return;
        }
        if (event.key === 'Enter') {
            const item = items[current];
            if (!item) return;
            event.preventDefault();
            if (item.type === 'folder') this.navigateTo(item.folder.id);
            else this.downloadFile(item.file);
            return;
        }
        if (event.key === ' ') {
            const item = items[current];
            if (!item) return;
            event.preventDefault();
            this.applySelection(current, {shiftKey: false, ctrlKey: true, metaKey: false});
        }
    }

    scrollFocusedIntoView (index) {
        if (!this.listRef.current) return;
        const element = this.listRef.current.querySelector(`[data-index="${index}"]`);
        if (element) element.scrollIntoView({block: 'nearest'});
    }

    renderCrumbs (trail) {
        return trail.map((folder, index) => {
            const isLast = index === trail.length - 1;
            return (
                <React.Fragment key={folder.id}>
                    {index > 0 && (
                        <ChevronRight
                            className={styles.breadcrumbSeparator}
                            size={13}
                        />
                    )}
                    <button
                        type="button"
                        className={classNames(styles.crumb, isLast && styles.crumbActive)}
                        data-folder-id={folder.id}
                        onClick={this.handleCrumbClick}
                    >
                        <span className={styles.crumbText}>{folder.name}</span>
                    </button>
                </React.Fragment>
            );
        });
    }

    renderSidebarNode (folder, depth) {
        const {intl} = this.props;
        const {currentId, expandedFolders} = this.state;
        const childFolders = folder.children.filter(child => child.kind === 'folder');
        const hasChildren = childFolders.length > 0;
        const isOpen = expandedFolders.has(folder.id);
        const isCurrent = currentId === folder.id;

        return (
            <div key={folder.id}>
                <div
                    className={classNames(styles.treeRow, isCurrent && styles.treeRowSelected)}
                    style={{paddingLeft: `${(depth * 14) + 4}px`}}
                    data-folder-id={folder.id}
                    onClick={this.handleTreeRowClick}
                >
                    {hasChildren ? (
                        <button
                            type="button"
                            className={styles.treeToggle}
                            aria-label={intl.formatMessage(
                                isOpen ? messages.collapseFolder : messages.expandFolder,
                                {name: folder.name}
                            )}
                            data-expand-id={folder.id}
                            onClick={this.handleTreeToggle}
                        >
                            {isOpen ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                        </button>
                    ) : (
                        <span className={styles.treeTogglePlaceholder} />
                    )}
                    {isOpen ? (
                        <FolderOpen
                            className={styles.treeIcon}
                            size={15}
                        />
                    ) : (
                        <Folder
                            className={styles.treeIcon}
                            size={15}
                        />
                    )}
                    <span className={styles.treeName}>{folder.name}</span>
                    <span className={styles.treeCount}>{countFiles(folder)}</span>
                </div>
                {hasChildren && isOpen && childFolders.map(child =>
                    this.renderSidebarNode(child, depth + 1)
                )}
            </div>
        );
    }

    renderHeader (view) {
        const {intl} = this.props;
        const {sortBy, sortDir} = this.state;
        return (
            <div className={classNames(styles.header, view.searching && styles.headerSearching)}>
                <button
                    type="button"
                    className={styles.headerCell}
                    onClick={this.handleSortByName}
                >
                    {intl.formatMessage(messages.columnName)}
                    {sortBy === 'name' && (
                        sortDir === 1 ?
                            <ArrowUp
                                className={styles.sortIcon}
                                size={11}
                            /> :
                            <ArrowDown
                                className={styles.sortIcon}
                                size={11}
                            />
                    )}
                </button>
                {view.searching && (
                    <span className={styles.headerCellStatic}>
                        {intl.formatMessage(messages.columnLocation)}
                    </span>
                )}
                <button
                    type="button"
                    className={styles.headerCell}
                    onClick={this.handleSortByType}
                >
                    {intl.formatMessage(messages.columnType)}
                    {sortBy === 'type' && (
                        sortDir === 1 ?
                            <ArrowUp
                                className={styles.sortIcon}
                                size={11}
                            /> :
                            <ArrowDown
                                className={styles.sortIcon}
                                size={11}
                            />
                    )}
                </button>
            </div>
        );
    }

    renderRow (item, index) {
        const {draggingId, dragOverId, selected, query} = this.state;
        const searching = Boolean(query.trim());
        const isSelected = selected.has(item.id);
        const rowClassName = classNames(
            styles.row,
            item.type === 'folder' ? styles.folderRow : styles.fileRow,
            searching && styles.rowSearching,
            isSelected && styles.rowSelected,
            item.id === draggingId && styles.dragging,
            item.id === dragOverId && styles.dragOver
        );

        return (
            <div
                key={item.key}
                className={rowClassName}
                data-index={index}
                draggable={item.type === 'file' && item.file.deletable}
                title={item.name}
                onClick={this.handleRowClick}
                onDoubleClick={this.handleRowDoubleClick}
                onContextMenu={this.handleRowContextMenu}
                onDragStart={this.handleRowDragStart}
                onDragEnd={this.handleRowDragEnd}
                onDragOver={this.handleRowDragOver}
                onDrop={this.handleRowDrop}
            >
                <div className={styles.nameCell}>
                    {item.type === 'folder' ? (
                        <Folder
                            className={classNames(styles.folderIcon, styles.rowIcon)}
                            size={16}
                        />
                    ) : (
                        <FileTypeIcon fileType={item.file.fileType} />
                    )}
                    <span className={styles.nameText}>{item.name}</span>
                </div>
                {searching && (
                    <span className={styles.locationCell}>{item.location}</span>
                )}
                <span className={styles.typeCell}>{this.getTypeLabel(item)}</span>
            </div>
        );
    }

    renderTile (item, index) {
        const {draggingId, dragOverId, selected} = this.state;
        const isSelected = selected.has(item.id);
        return (
            <div
                key={item.key}
                className={classNames(
                    styles.tile,
                    item.type === 'folder' && styles.tileFolder,
                    isSelected && styles.tileSelected,
                    item.id === draggingId && styles.dragging,
                    item.id === dragOverId && styles.dragOver
                )}
                data-index={index}
                draggable={item.type === 'file' && item.file.deletable}
                title={item.name}
                onClick={this.handleRowClick}
                onDoubleClick={this.handleRowDoubleClick}
                onContextMenu={this.handleRowContextMenu}
                onDragStart={this.handleRowDragStart}
                onDragEnd={this.handleRowDragEnd}
                onDragOver={this.handleRowDragOver}
                onDrop={this.handleRowDrop}
            >
                {item.type === 'folder' ? (
                    <Folder
                        className={classNames(styles.tileIcon, styles.folderIcon)}
                        size={30}
                    />
                ) : (
                    <FileTypeIcon
                        fileType={item.file.fileType}
                        size={30}
                    />
                )}
                <span className={styles.tileName}>{item.name}</span>
                <span className={styles.tileMeta}>{this.getTypeLabel(item)}</span>
            </div>
        );
    }

    renderEmpty (view) {
        const {intl} = this.props;
        let title = intl.formatMessage(messages.emptyFolder);
        let hint = '';
        if (view.searching) {
            title = intl.formatMessage(messages.noSearchResults);
        } else if (!collectFiles(this.state.tree).length) {
            title = intl.formatMessage(messages.empty);
            hint = intl.formatMessage(messages.emptyHint);
        }
        return (
            <div className={styles.empty}>
                <Folder
                    className={styles.emptyIcon}
                    size={30}
                />
                <span className={styles.emptyTitle}>{title}</span>
                {hint && <span className={styles.emptyHint}>{hint}</span>}
            </div>
        );
    }

    renderMenu () {
        const {menu} = this.state;
        if (!menu) return null;
        return (
            <React.Fragment>
                <div
                    className={styles.menuBackdrop}
                    onMouseDown={this.handleMenuBackdrop}
                    onContextMenu={this.handleMenuBackdrop}
                />
                <div
                    className={styles.contextMenu}
                    style={{left: `${menu.x}px`, top: `${menu.y}px`}}
                >
                    {menu.items.map((item, index) => {
                        if (item.separator) {
                            return (<div
                                key={`separator-${index}`}
                                className={styles.menuSeparator}
                            />);
                        }
                        const Icon = item.icon;
                        return (
                            <button
                                key={`item-${index}`}
                                type="button"
                                className={classNames(styles.menuItem, item.danger && styles.menuItemDanger)}
                                data-menu-index={index}
                                onClick={this.handleMenuClick}
                            >
                                <Icon size={14} />
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            </React.Fragment>
        );
    }

    render () {
        const {intl, onClose} = this.props;
        const {
            tree, currentId, history, historyIndex, selected,
            query, viewMode, busy, importing, error
        } = this.state;
        const view = this.getView();
        const {folder, items, searching} = view;
        const totalFiles = collectFiles(tree).length;
        const folderCount = items.filter(item => item.type === 'folder').length;
        const fileCount = items.length - folderCount;
        const deletableCount = this.getDeletableFiles().length;
        const canGoBack = historyIndex > 0;
        const canGoForward = historyIndex < history.length - 1;
        const canGoUp = currentId !== tree.id;
        const isGrid = viewMode === 'grid';

        return (
            <Modal
                className={styles.modalContent}
                contentLabel={intl.formatMessage(messages.title)}
                height={620}
                id="projectAssetsManagerModal"
                maximizable
                minHeight={380}
                minWidth={540}
                resizable
                width={920}
                onRequestClose={onClose}
            >
                <div
                    className={styles.body}
                    ref={this.bodyRef}
                >
                    <div className={styles.navBar}>
                        <div className={styles.navButtons}>
                            <button
                                type="button"
                                className={styles.iconButton}
                                aria-label={intl.formatMessage(messages.back)}
                                title={intl.formatMessage(messages.back)}
                                disabled={!canGoBack}
                                onClick={this.handleBack}
                            >
                                <ArrowLeft size={16} />
                            </button>
                            <button
                                type="button"
                                className={styles.iconButton}
                                aria-label={intl.formatMessage(messages.forward)}
                                title={intl.formatMessage(messages.forward)}
                                disabled={!canGoForward}
                                onClick={this.handleForward}
                            >
                                <ArrowRight size={16} />
                            </button>
                            <button
                                type="button"
                                className={styles.iconButton}
                                aria-label={intl.formatMessage(messages.up)}
                                title={intl.formatMessage(messages.up)}
                                disabled={!canGoUp}
                                onClick={this.handleUp}
                            >
                                <ArrowUp size={16} />
                            </button>
                        </div>
                        <div className={styles.breadcrumbs}>
                            {this.renderCrumbs(view.trail)}
                        </div>
                        <div className={styles.search}>
                            <Search
                                className={styles.searchIcon}
                                size={14}
                            />
                            <input
                                ref={this.searchRef}
                                type="text"
                                className={styles.searchInput}
                                value={query}
                                placeholder={intl.formatMessage(messages.searchPlaceholder)}
                                onChange={this.handleSearchChange}
                                onKeyDown={this.handleSearchKeyDown}
                            />
                            {query && (
                                <button
                                    type="button"
                                    className={styles.searchClear}
                                    aria-label={intl.formatMessage(messages.clearSearch)}
                                    title={intl.formatMessage(messages.clearSearch)}
                                    onClick={this.handleClearSearch}
                                >
                                    <X size={12} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className={styles.actionBar}>
                        {folder.importable && (
                            <button
                                type="button"
                                className={styles.primaryButton}
                                title={intl.formatMessage(
                                    folder.category === 'sounds' ? messages.importSounds : messages.importCostumes,
                                    {name: folder.name}
                                )}
                                disabled={busy}
                                onClick={this.handleImportClick}
                            >
                                <Upload size={15} />
                                {intl.formatMessage(messages.importHere)}
                            </button>
                        )}
                        <button
                            type="button"
                            className={styles.secondaryButton}
                            disabled={!selected.size || busy}
                            onClick={this.handleDownloadSelected}
                        >
                            <Download size={15} />
                            {intl.formatMessage(messages.downloadSelected)}
                        </button>
                        <button
                            type="button"
                            className={styles.secondaryButton}
                            disabled={!totalFiles || busy}
                            onClick={this.handleDownloadAll}
                        >
                            <Download size={15} />
                            {intl.formatMessage(messages.downloadAll)}
                        </button>
                        <button
                            type="button"
                            className={styles.dangerButton}
                            disabled={!deletableCount || busy}
                            onClick={this.handleDeleteSelected}
                        >
                            <Trash2 size={15} />
                            {intl.formatMessage(messages.deleteSelected)}
                        </button>
                        <div className={styles.toolbarSpacer} />
                        <div className={styles.viewToggle}>
                            <button
                                type="button"
                                className={classNames(styles.viewButton, !isGrid && styles.viewButtonActive)}
                                aria-label={intl.formatMessage(messages.detailsView)}
                                title={intl.formatMessage(messages.detailsView)}
                                onClick={this.handleViewList}
                            >
                                <List size={15} />
                            </button>
                            <button
                                type="button"
                                className={classNames(styles.viewButton, isGrid && styles.viewButtonActive)}
                                aria-label={intl.formatMessage(messages.gridView)}
                                title={intl.formatMessage(messages.gridView)}
                                onClick={this.handleViewGrid}
                            >
                                <LayoutGrid size={15} />
                            </button>
                        </div>
                        <button
                            type="button"
                            className={styles.iconButton}
                            aria-label={intl.formatMessage(messages.refresh)}
                            title={intl.formatMessage(messages.refresh)}
                            onClick={this.handleRefresh}
                        >
                            <RefreshCw size={16} />
                        </button>
                    </div>

                    {error && <div className={styles.error}>{error}</div>}

                    <input
                        ref={this.fileInputRef}
                        type="file"
                        multiple
                        className={styles.fileInput}
                        onChange={this.handleImport}
                    />

                    <div className={styles.main}>
                        <aside className={classNames(styles.sidebar, styles.tree)}>
                            {this.renderSidebarNode(tree, 0)}
                        </aside>
                        <div className={styles.listPanel}>
                            {!isGrid && this.renderHeader(view)}
                            <div
                                ref={this.listRef}
                                className={isGrid && items.length ? styles.grid : styles.scrollArea}
                                tabIndex={-1}
                                onClick={this.handleBlankClick}
                                onContextMenu={this.handleBlankContextMenu}
                                onKeyDown={this.handleKeyDown}
                            >
                                {items.length ? items.map((item, index) => (
                                    isGrid ?
                                        this.renderTile(item, index) :
                                        this.renderRow(item, index)
                                )) : this.renderEmpty(view)}
                            </div>
                        </div>
                    </div>

                    <div className={styles.statusBar}>
                        <span>
                            {busy ? intl.formatMessage(importing ? messages.importing : messages.busy) : (
                                searching ?
                                    intl.formatMessage(messages.resultCount, {count: items.length}) :
                                    intl.formatMessage(messages.itemCount, {folders: folderCount, files: fileCount})
                            )}
                        </span>
                        <span>
                            {selected.size ? intl.formatMessage(messages.selectedItems, {count: selected.size}) : (
                                searching ? intl.formatMessage(messages.searchResults) : ''
                            )}
                        </span>
                    </div>

                    {this.renderMenu()}
                </div>
            </Modal>
        );
    }
}

ProjectAssetsManager.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func.isRequired,
    projectTitle: PropTypes.string,
    vm: PropTypes.shape({
        addCostume: PropTypes.func,
        addSound: PropTypes.func,
        editingTarget: PropTypes.shape({
            id: PropTypes.string
        }),
        emitTargetsUpdate: PropTypes.func,
        extensionManager: PropTypes.shape({
            getExtensionURLs: PropTypes.func
        }),
        getExportedCostume: PropTypes.func.isRequired,
        reorderCostume: PropTypes.func,
        reorderSound: PropTypes.func,
        runtime: PropTypes.shape({
            emitProjectChanged: PropTypes.func,
            fontManager: PropTypes.shape({
                getFonts: PropTypes.func
            }),
            getTargetById: PropTypes.func,
            requestTargetsUpdate: PropTypes.func,
            storage: PropTypes.object,
            targets: PropTypes.array
        })
    }).isRequired
};

ProjectAssetsManager.defaultProps = {
    projectTitle: ''
};

export {messages, buildAssetTree};
export default injectIntl(ProjectAssetsManager);
