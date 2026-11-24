import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import bindAll from 'lodash.bindall';
import {FormattedMessage} from 'react-intl';
import {
    ArrowDown,
    ArrowUp,
    File,
    FileAudio,
    FileCode,
    FileImage,
    FileText,
    Folder,
    FolderOpen,
    Search
} from 'lucide-react';
import {formatBytes} from '../../lib/utils/bytes';
import RenameInput from './rename-input.jsx';
import styles from './assets-modal.css';

const DRAG_TYPE = 'application/x-bilup-asset';

const ICONS_BY_FORMAT = {
    png: FileImage,
    jpg: FileImage,
    jpeg: FileImage,
    gif: FileImage,
    bmp: FileImage,
    webp: FileImage,
    svg: FileImage,
    wav: FileAudio,
    mp3: FileAudio,
    ogg: FileAudio,
    json: FileCode,
    html: FileCode,
    xml: FileCode,
    js: FileCode,
    css: FileCode,
    txt: FileText,
    csv: FileText,
    md: FileText
};

const getFileIcon = dataFormat => ICONS_BY_FORMAT[dataFormat] || File;

const readDraggedIndices = dataTransfer => {
    const raw = dataTransfer.getData(DRAG_TYPE);
    if (!raw) {
        return null;
    }
    try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            return parsed.map(Number).filter(index => Number.isFinite(index));
        }
    } catch (e) {
        // Fall back to a plain index for safety.
    }
    const single = Number(raw);
    return Number.isFinite(single) ? [single] : null;
};

const getDropPayload = dataTransfer => ({
    indices: readDraggedIndices(dataTransfer),
    files: dataTransfer.files && dataTransfer.files.length ? dataTransfer.files : null
});

const getDraggedIndices = (index, selection) => {
    if (selection.includes(index) && selection.length > 1) {
        return selection;
    }
    return [index];
};

class AssetList extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleSortName',
            'handleSortType',
            'handleSortSize',
            'handleContextMenuBlank',
            'handleClickBlank',
            'handleDragOver',
            'handleDrop',
            'handleFolderClick',
            'handleFolderContextMenu',
            'handleFolderDragOver',
            'handleFolderDragLeave',
            'handleFolderDrop',
            'handleFileClick',
            'handleFileContextMenu',
            'handleFileDragStart',
            'handleFileRenameCommit'
        ]);
        this.state = {overFolder: null};
    }

    handleSortName () {
        this.props.onSort('name');
    }

    handleSortType () {
        this.props.onSort('type');
    }

    handleSortSize () {
        this.props.onSort('size');
    }

    handleContextMenuBlank (e) {
        if (e.target === e.currentTarget) {
            this.props.onOpenMenu(e, {type: 'empty'});
        }
    }

    handleClickBlank (e) {
        if (e.target === e.currentTarget) {
            this.props.onClearSelection();
        }
    }

    handleDragOver (e) {
        e.preventDefault();
    }

    handleDrop (e) {
        e.preventDefault();
        const payload = getDropPayload(e.dataTransfer);
        if (payload.indices && payload.indices.length) {
            this.props.onMove(payload.indices, this.props.cwd);
        } else if (payload.files) {
            this.props.onDropFiles(payload.files, this.props.cwd);
        }
    }

    handleFolderClick (e) {
        this.props.onNavigate(e.currentTarget.dataset.path);
    }

    handleFolderContextMenu (e) {
        this.props.onOpenMenu(e, {
            type: 'folder',
            path: e.currentTarget.dataset.path,
            name: e.currentTarget.dataset.name
        });
    }

    handleFolderDragOver (e) {
        e.preventDefault();
        e.stopPropagation();
        const path = e.currentTarget.dataset.path;
        if (this.state.overFolder !== path) {
            this.setState({overFolder: path});
        }
    }

    handleFolderDragLeave (e) {
        e.stopPropagation();
        if (this.state.overFolder !== null) {
            this.setState({overFolder: null});
        }
    }

    handleFolderDrop (e) {
        e.preventDefault();
        e.stopPropagation();
        const path = e.currentTarget.dataset.path;
        this.setState({overFolder: null});
        const payload = getDropPayload(e.dataTransfer);
        if (payload.indices && payload.indices.length) {
            this.props.onMove(payload.indices, path);
        } else if (payload.files) {
            this.props.onDropFiles(payload.files, path);
        }
    }

    handleFileClick (e) {
        this.props.onSelectFile(e, Number(e.currentTarget.dataset.index));
    }

    handleFileContextMenu (e) {
        this.props.onOpenMenu(e, {
            type: 'file',
            index: Number(e.currentTarget.dataset.index)
        });
    }

    handleFileDragStart (e) {
        e.stopPropagation();
        const index = Number(e.currentTarget.dataset.index);
        e.dataTransfer.setData(DRAG_TYPE, JSON.stringify(
            getDraggedIndices(index, this.props.selection)
        ));
        e.dataTransfer.effectAllowed = 'move';
    }

    handleFileRenameCommit (value) {
        this.props.onRenameCommit(this.props.renamingIndex, value);
    }

    renderSortIcon (key) {
        if (this.props.sortKey !== key) {
            return null;
        }
        const Icon = this.props.sortDir === 'asc' ? ArrowUp : ArrowDown;
        return (
            <Icon
                className={styles.sortIcon}
                size={12}
            />
        );
    }

    renderNewFolderRow () {
        return (
            <div className={styles.row}>
                <span className={styles.nameCell}>
                    <Folder
                        className={classNames(styles.fileIcon, styles.folderIcon)}
                        size={16}
                    />
                    <RenameInput
                        initial=""
                        placeholder={this.props.newFolderPlaceholder}
                        onCommit={this.props.onNewFolderCommit}
                        onCancel={this.props.onNewFolderCancel}
                    />
                </span>
                <span className={styles.typeCell}>
                    <FormattedMessage
                        defaultMessage="Folder"
                        description="Type label for a folder in the asset list"
                        id="mw.assets.folderType"
                    />
                </span>
                <span className={styles.sizeCell} />
            </div>
        );
    }

    renderNewFolderTile () {
        return (
            <div className={styles.tile}>
                <Folder
                    className={classNames(styles.tileIcon, styles.folderIcon)}
                    size={34}
                />
                <RenameInput
                    initial=""
                    placeholder={this.props.newFolderPlaceholder}
                    onCommit={this.props.onNewFolderCommit}
                    onCancel={this.props.onNewFolderCancel}
                />
            </div>
        );
    }

    renderFolderRow (folder) {
        const isOver = this.state.overFolder === folder.path;
        return (
            <div
                key={`folder:${folder.path}`}
                className={classNames(styles.row, styles.rowFolder, {
                    [styles.rowDrop]: isOver
                })}
                data-path={folder.path}
                data-name={folder.name}
                onClick={this.handleFolderClick}
                onContextMenu={this.handleFolderContextMenu}
                onDragOver={this.handleFolderDragOver}
                onDragLeave={this.handleFolderDragLeave}
                onDrop={this.handleFolderDrop}
            >
                <span className={styles.nameCell}>
                    <FolderOpen
                        className={classNames(styles.fileIcon, styles.folderIcon)}
                        size={16}
                    />
                    <span
                        className={styles.nameText}
                        title={folder.path}
                    >
                        {folder.name}
                    </span>
                </span>
                <span className={styles.typeCell}>
                    <FormattedMessage
                        defaultMessage="Folder"
                        description="Type label for a folder in the asset list"
                        id="mw.assets.folderType"
                    />
                </span>
                <span className={styles.sizeCell}>
                    <FormattedMessage
                        defaultMessage="{count, plural, one {# item} other {# items}}"
                        description="Number of items inside a folder"
                        id="mw.assets.folderCount"
                        values={{count: folder.count}}
                    />
                </span>
            </div>
        );
    }

    renderFolderTile (folder) {
        const isOver = this.state.overFolder === folder.path;
        return (
            <div
                key={`folder:${folder.path}`}
                className={classNames(styles.tile, styles.tileFolder, {
                    [styles.rowDrop]: isOver
                })}
                data-path={folder.path}
                data-name={folder.name}
                onClick={this.handleFolderClick}
                onContextMenu={this.handleFolderContextMenu}
                onDragOver={this.handleFolderDragOver}
                onDragLeave={this.handleFolderDragLeave}
                onDrop={this.handleFolderDrop}
                title={folder.path}
            >
                <FolderOpen
                    className={styles.tileIcon}
                    size={34}
                />
                <span className={styles.tileName}>{folder.name}</span>
                <span className={styles.tileMeta}>
                    <FormattedMessage
                        defaultMessage="{count, plural, one {# item} other {# items}}"
                        description="Number of items inside a folder"
                        id="mw.assets.folderCount"
                        values={{count: folder.count}}
                    />
                </span>
            </div>
        );
    }

    renderFileRow (file) {
        const Icon = getFileIcon(file.dataFormat);
        const renaming = this.props.renamingIndex === file.index;
        const selected = this.props.selection.includes(file.index);
        const {searchActive} = this.props;

        return (
            <div
                key={`file:${file.name}`}
                className={classNames(styles.row, {
                    [styles.rowSearching]: searchActive,
                    [styles.rowSelected]: selected
                })}
                data-index={file.index}
                draggable={!renaming}
                onClick={this.handleFileClick}
                onContextMenu={this.handleFileContextMenu}
                onDragStart={this.handleFileDragStart}
            >
                <span className={styles.nameCell}>
                    <Icon
                        className={styles.fileIcon}
                        size={16}
                    />
                    {renaming ? (
                        <RenameInput
                            initial={file.baseName}
                            onCommit={this.handleFileRenameCommit}
                            onCancel={this.props.onRenameCancel}
                        />
                    ) : (
                        <span
                            className={styles.nameText}
                            title={file.name}
                        >
                            {file.baseName}
                        </span>
                    )}
                </span>

                {searchActive ? (
                    <span
                        className={styles.locationCell}
                        title={file.folder ? `/${file.folder}` : '/'}
                    >
                        {file.folder ? `/${file.folder}` : '/'}
                    </span>
                ) : null}

                <span className={styles.typeCell}>{file.dataFormat.toUpperCase()}</span>
                <span className={styles.sizeCell}>{formatBytes(file.size)}</span>
            </div>
        );
    }

    renderFileTile (file) {
        const Icon = getFileIcon(file.dataFormat);
        const renaming = this.props.renamingIndex === file.index;
        const selected = this.props.selection.includes(file.index);

        return (
            <div
                key={`file:${file.name}`}
                className={classNames(styles.tile, {
                    [styles.tileSelected]: selected
                })}
                data-index={file.index}
                draggable={!renaming}
                onClick={this.handleFileClick}
                onContextMenu={this.handleFileContextMenu}
                onDragStart={this.handleFileDragStart}
                title={file.name}
            >
                <Icon
                    className={styles.tileIcon}
                    size={34}
                />
                {renaming ? (
                    <RenameInput
                        initial={file.baseName}
                        onCommit={this.handleFileRenameCommit}
                        onCancel={this.props.onRenameCancel}
                    />
                ) : (
                    <span className={styles.tileName}>{file.baseName}</span>
                )}
                <span className={styles.tileMeta}>{formatBytes(file.size)}</span>
            </div>
        );
    }

    renderList () {
        const {files, folders, searchActive} = this.props;
        return (
            <React.Fragment>
                <div
                    className={classNames(styles.header, {
                        [styles.headerSearching]: searchActive
                    })}
                >
                    <button
                        className={styles.headerCell}
                        onClick={this.handleSortName}
                    >
                        <FormattedMessage
                            defaultMessage="Name"
                            description="Column header for the asset file name"
                            id="mw.assets.columnName"
                        />
                        {this.renderSortIcon('name')}
                    </button>
                    {searchActive ? (
                        <span className={styles.headerCellStatic}>
                            <FormattedMessage
                                defaultMessage="Location"
                                description="Column header for the asset folder location"
                                id="mw.assets.columnLocation"
                            />
                        </span>
                    ) : null}
                    <button
                        className={styles.headerCell}
                        onClick={this.handleSortType}
                    >
                        <FormattedMessage
                            defaultMessage="Type"
                            description="Column header for the asset file type"
                            id="mw.assets.columnType"
                        />
                        {this.renderSortIcon('type')}
                    </button>
                    <button
                        className={styles.headerCell}
                        onClick={this.handleSortSize}
                    >
                        <FormattedMessage
                            defaultMessage="Size"
                            description="Column header for the asset file size"
                            id="mw.assets.columnSize"
                        />
                        {this.renderSortIcon('size')}
                    </button>
                </div>

                <div
                    className={styles.scrollArea}
                    onContextMenu={this.handleContextMenuBlank}
                    onClick={this.handleClickBlank}
                >
                    {this.props.creatingFolder ? this.renderNewFolderRow() : null}
                    {folders.map(folder => this.renderFolderRow(folder))}
                    {files.map(file => this.renderFileRow(file))}
                </div>
            </React.Fragment>
        );
    }

    renderGrid () {
        const {files, folders} = this.props;
        return (
            <div
                className={styles.grid}
                onContextMenu={this.handleContextMenuBlank}
                onClick={this.handleClickBlank}
            >
                {this.props.creatingFolder ? this.renderNewFolderTile() : null}
                {folders.map(folder => this.renderFolderTile(folder))}
                {files.map(file => this.renderFileTile(file))}
            </div>
        );
    }

    render () {
        const files = this.props.searchActive ? this.props.searchResults : this.props.files;
        const folders = this.props.searchActive ? [] : this.props.folders;
        const isEmpty = files.length === 0 && folders.length === 0 && !this.props.creatingFolder;

        return (
            <div
                className={styles.listPanel}
                onContextMenu={this.handleContextMenuBlank}
                onDragOver={this.handleDragOver}
                onDrop={this.handleDrop}
                onClick={this.handleClickBlank}
            >
                {this.props.viewMode === 'list' ? this.renderList() : this.renderGrid()}

                {isEmpty ? (
                    <div className={styles.empty}>
                        {this.props.searchActive ? (
                            <Search
                                className={styles.emptyIcon}
                                size={30}
                            />
                        ) : (
                            <FolderOpen
                                className={styles.emptyIcon}
                                size={30}
                            />
                        )}
                        <span className={styles.emptyTitle}>
                            {this.props.searchActive ? (
                                <FormattedMessage
                                    defaultMessage="No matching assets"
                                    description="Shown when a search returns no custom assets"
                                    id="mw.assets.noSearchResults"
                                />
                            ) : (
                                <FormattedMessage
                                    defaultMessage="This folder is empty"
                                    description="Shown when a folder has no custom assets"
                                    id="mw.assets.emptyFolder"
                                />
                            )}
                        </span>
                        <span className={styles.emptyHint}>
                            <FormattedMessage
                                defaultMessage="Drop files here, paste them, or click Add files."
                                description="Hint shown in an empty asset folder"
                                id="mw.assets.emptyHint"
                            />
                        </span>
                    </div>
                ) : null}
            </div>
        );
    }
}

AssetList.propTypes = {
    newFolderPlaceholder: PropTypes.string,
    cwd: PropTypes.string.isRequired,
    files: PropTypes.array,
    folders: PropTypes.array,
    searchActive: PropTypes.bool.isRequired,
    searchResults: PropTypes.array,
    viewMode: PropTypes.string.isRequired,
    sortKey: PropTypes.string.isRequired,
    sortDir: PropTypes.string.isRequired,
    selection: PropTypes.arrayOf(PropTypes.number).isRequired,
    renamingIndex: PropTypes.number,
    creatingFolder: PropTypes.bool.isRequired,
    onNavigate: PropTypes.func.isRequired,
    onOpenMenu: PropTypes.func.isRequired,
    onSelectFile: PropTypes.func.isRequired,
    onClearSelection: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    onRenameCommit: PropTypes.func.isRequired,
    onRenameCancel: PropTypes.func.isRequired,
    onNewFolderCommit: PropTypes.func.isRequired,
    onNewFolderCancel: PropTypes.func.isRequired,
    onMove: PropTypes.func.isRequired,
    onDropFiles: PropTypes.func.isRequired
};

AssetList.defaultProps = {
    newFolderPlaceholder: 'Folder name',
    files: [],
    folders: [],
    searchResults: []
};

export {DRAG_TYPE, readDraggedIndices};
export default AssetList;
