import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import bindAll from 'lodash.bindall';
import {defineMessages, FormattedMessage, intlShape, injectIntl} from 'react-intl';
import {
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ChevronRight,
    Download,
    FilePlus2,
    FolderOpen,
    FolderPlus,
    Home,
    LayoutGrid,
    List,
    PanelRight,
    Pencil,
    Search,
    Trash2,
    X
} from 'lucide-react';
import Modal from '../../containers/windowed-modal.jsx';
import AssetList, {readDraggedIndices} from './asset-list.jsx';
import AssetPreview from './asset-preview.jsx';
import {formatBytes} from '../../lib/utils/bytes';
import styles from './assets-modal.css';

const messages = defineMessages({
    title: {
        defaultMessage: 'Assets',
        description: 'Title of custom asset management modal',
        id: 'mw.assets.title'
    },
    delete: {
        defaultMessage: 'Are you sure you want to delete "{asset}"? Blocks that use it will stop working.',
        description: 'Confirmation shown before deleting a custom asset. {asset} is the asset path',
        id: 'mw.assets.delete'
    },
    deleteMultiple: {
        defaultMessage: 'Are you sure you want to delete {count} assets? Blocks that use them will stop working.',
        description: 'Confirmation shown before deleting several custom assets',
        id: 'mw.assets.deleteMultiple'
    },
    deleteFolder: {
        defaultMessage: 'Delete folder "{folder}" and the {count} assets inside it?',
        description: 'Confirmation shown before deleting a folder with assets',
        id: 'mw.assets.deleteFolder'
    },
    deleteFolderEmpty: {
        defaultMessage: 'Delete folder "{folder}"?',
        description: 'Confirmation shown before deleting an empty folder',
        id: 'mw.assets.deleteFolderEmpty'
    },
    newFolderPlaceholder: {
        defaultMessage: 'Folder name',
        description: 'Placeholder for the inline new folder name input',
        id: 'mw.assets.newFolderPlaceholder'
    }
});

const MENU_WIDTH = 216;
const MENU_ROW_HEIGHT = 34;
const MENU_SEPARATOR_HEIGHT = 9;

class AssetsModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'closeMenu',
            'runAction',
            'buildMenuItems',
            'handleOpenMenu',
            'handleSearchInput',
            'handleSearchKeyDown',
            'handleClearSearch',
            'handleCrumbClick',
            'handleCrumbDragOver',
            'handleCrumbDrop',
            'handleViewList',
            'handleViewGrid',
            'handleMenuBackdropMouseDown',
            'handleMenuBackdropContextMenu',
            'handleMenuMouseDown',
            'handleMenuItemClick',
            'handlePreviewRename',
            'handlePreviewExport',
            'handlePreviewDelete'
        ]);
        this.state = {menu: null};
        this.bodyRef = React.createRef();
    }

    closeMenu () {
        this.setState({menu: null});
    }

    runAction (action) {
        this.setState({menu: null});
        action();
    }

    buildMenuItems (target, effectiveSelection) {
        const items = [];
        if (target.type === 'file') {
            if (effectiveSelection.length > 1) {
                items.push({
                    icon: Download,
                    label: (
                        <FormattedMessage
                            defaultMessage="Export {count} assets"
                            description="Context menu item to export several assets"
                            id="mw.assets.exportMultiple"
                            values={{count: effectiveSelection.length}}
                        />
                    ),
                    action: () => this.props.onExport(effectiveSelection)
                });
                items.push({separator: true});
                items.push({
                    icon: Trash2,
                    danger: true,
                    label: (
                        <FormattedMessage
                            defaultMessage="Delete {count} assets"
                            description="Context menu item to delete several assets"
                            id="mw.assets.deleteMultipleMenu"
                            values={{count: effectiveSelection.length}}
                        />
                    ),
                    action: () => this.props.onDelete(effectiveSelection)
                });
            } else {
                items.push({
                    icon: Pencil,
                    label: (
                        <FormattedMessage
                            defaultMessage="Rename"
                            description="Context menu item to rename an asset"
                            id="mw.assets.renameMenu"
                        />
                    ),
                    action: () => this.props.onRenameStart(target.index)
                });
                items.push({
                    icon: Download,
                    label: (
                        <FormattedMessage
                            defaultMessage="Export"
                            description="Context menu item to download an asset"
                            id="mw.assets.exportMenu"
                        />
                    ),
                    action: () => this.props.onExport([target.index])
                });
                items.push({separator: true});
                items.push({
                    icon: Trash2,
                    danger: true,
                    label: (
                        <FormattedMessage
                            defaultMessage="Delete"
                            description="Context menu item to delete an asset"
                            id="mw.assets.deleteMenu"
                        />
                    ),
                    action: () => this.props.onDelete([target.index])
                });
            }
        } else if (target.type === 'folder') {
            items.push({
                icon: FolderOpen,
                label: (
                    <FormattedMessage
                        defaultMessage="Open"
                        description="Context menu item to open an asset folder"
                        id="mw.assets.openFolder"
                    />
                ),
                action: () => this.props.onNavigate(target.path)
            });
            items.push({separator: true});
            items.push({
                icon: Trash2,
                danger: true,
                label: (
                    <FormattedMessage
                        defaultMessage="Delete folder"
                        description="Context menu item to delete an asset folder"
                        id="mw.assets.deleteFolderMenu"
                    />
                ),
                action: () => this.props.onDeleteFolder(target.path)
            });
        } else {
            items.push({
                icon: FilePlus2,
                label: (
                    <FormattedMessage
                        defaultMessage="Add files"
                        description="Context menu item to add custom assets"
                        id="mw.assets.addMenu"
                    />
                ),
                action: this.props.onClickAdd
            });
            items.push({
                icon: FolderPlus,
                label: (
                    <FormattedMessage
                        defaultMessage="New folder"
                        description="Context menu item to create an asset folder"
                        id="mw.assets.newFolderMenu"
                    />
                ),
                action: this.props.onNewFolderStart
            });
            items.push({separator: true});
            items.push({
                label: (
                    <FormattedMessage
                        defaultMessage="Select all"
                        description="Context menu item to select every asset in the current folder"
                        id="mw.assets.selectAll"
                    />
                ),
                action: this.props.onSelectAll
            });
        }
        return items;
    }

    handleOpenMenu (event, target) {
        event.preventDefault();
        event.stopPropagation();

        let effectiveSelection = [];
        if (target.type === 'file') {
            effectiveSelection = this.props.selection.includes(target.index) ?
                this.props.selection :
                [target.index];
            if (!this.props.selection.includes(target.index)) {
                this.props.onSelectFile({
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false
                }, target.index);
            }
        }

        const items = this.buildMenuItems(target, effectiveSelection);
        const rect = this.bodyRef.current ?
            this.bodyRef.current.getBoundingClientRect() :
            {left: 0, top: 0, width: 0, height: 0};
        const menuHeight = items.reduce((total, item) =>
            total + (item.separator ? MENU_SEPARATOR_HEIGHT : MENU_ROW_HEIGHT), 14);

        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        x = Math.max(8, Math.min(x, rect.width - MENU_WIDTH - 8));
        y = Math.max(8, Math.min(y, rect.height - menuHeight - 8));

        this.setState({menu: {x, y, items}});
    }

    handleSearchInput (e) {
        this.props.onSearchChange(e.target.value);
    }

    handleSearchKeyDown (e) {
        if (e.key === 'Escape') {
            e.stopPropagation();
            this.props.onClearSearch();
        }
    }

    handleClearSearch () {
        this.props.onClearSearch();
    }

    handleCrumbClick (e) {
        this.props.onNavigate(e.currentTarget.dataset.path || '');
    }

    handleCrumbDragOver (e) {
        e.preventDefault();
    }

    handleCrumbDrop (e) {
        e.preventDefault();
        e.stopPropagation();
        const path = e.currentTarget.dataset.path || '';
        const indices = readDraggedIndices(e.dataTransfer);
        if (indices && indices.length) {
            this.props.onMove(indices, path);
        } else if (e.dataTransfer.files && e.dataTransfer.files.length) {
            this.props.onDropFiles(e.dataTransfer.files, path);
        }
    }

    handleViewList () {
        this.props.onViewModeChange('list');
    }

    handleViewGrid () {
        this.props.onViewModeChange('grid');
    }

    handleMenuBackdropMouseDown () {
        this.closeMenu();
    }

    handleMenuBackdropContextMenu (e) {
        e.preventDefault();
        this.closeMenu();
    }

    handleMenuMouseDown (e) {
        e.stopPropagation();
    }

    handleMenuItemClick (e) {
        const index = Number(e.currentTarget.dataset.index);
        const menu = this.state.menu;
        if (!menu || !menu.items[index] || menu.items[index].separator) {
            return;
        }
        this.runAction(menu.items[index].action);
    }

    handlePreviewRename () {
        if (this.props.preview && !this.props.preview.multiple) {
            this.props.onRenameStart(this.props.preview.index);
        }
    }

    handlePreviewExport () {
        this.props.onExport(this.props.selection);
    }

    handlePreviewDelete () {
        this.props.onDelete(this.props.selection);
    }

    render () {
        const props = this.props;
        const searchActive = props.search.trim() !== '';
        const viewCount = searchActive ? (props.searchResults || []).length : props.files.length;
        const folderCount = searchActive ? 0 : props.folders.length;

        return (
            <Modal
                className={styles.modalContent}
                onRequestClose={props.onClose}
                contentLabel={props.intl.formatMessage(messages.title)}
                id="assetsModal"
                width={960}
                height={640}
                minWidth={560}
                minHeight={400}
                resizable
                maximizable
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
                                disabled={!props.canGoBack}
                                onClick={props.onBack}
                                title={props.intl.formatMessage({
                                    defaultMessage: 'Back',
                                    id: 'mw.assets.back'
                                })}
                            >
                                <ArrowLeft size={16} />
                            </button>
                            <button
                                type="button"
                                className={styles.iconButton}
                                disabled={!props.canGoForward}
                                onClick={props.onForward}
                                title={props.intl.formatMessage({
                                    defaultMessage: 'Forward',
                                    id: 'mw.assets.forward'
                                })}
                            >
                                <ArrowRight size={16} />
                            </button>
                            <button
                                type="button"
                                className={styles.iconButton}
                                disabled={!props.canGoUp}
                                onClick={props.onUp}
                                title={props.intl.formatMessage({
                                    defaultMessage: 'Up one level',
                                    id: 'mw.assets.up'
                                })}
                            >
                                <ArrowUp size={16} />
                            </button>
                        </div>

                        <nav className={styles.breadcrumbs}>
                            {props.breadcrumbs.map((crumb, index) => {
                                const isLast = index === props.breadcrumbs.length - 1;
                                return (
                                    <React.Fragment key={crumb.path || 'root'}>
                                        {index > 0 ? (
                                            <ChevronRight
                                                className={styles.breadcrumbSeparator}
                                                size={13}
                                            />
                                        ) : null}
                                        <button
                                            type="button"
                                            className={classNames(styles.crumb, {
                                                [styles.crumbActive]: isLast
                                            })}
                                            data-path={crumb.path}
                                            onClick={this.handleCrumbClick}
                                            onDragOver={this.handleCrumbDragOver}
                                            onDrop={this.handleCrumbDrop}
                                            disabled={isLast}
                                            title={crumb.name}
                                        >
                                            {index === 0 ? <Home size={13} /> : null}
                                            <span className={styles.crumbText}>
                                                {index === 0 ? (
                                                    <FormattedMessage
                                                        defaultMessage="All assets"
                                                        description="Label for the root folder of custom assets"
                                                        id="mw.assets.root"
                                                    />
                                                ) : crumb.name}
                                            </span>
                                        </button>
                                    </React.Fragment>
                                );
                            })}
                        </nav>

                        <div className={styles.search}>
                            <Search
                                className={styles.searchIcon}
                                size={14}
                            />
                            <input
                                className={styles.searchInput}
                                value={props.search}
                                placeholder={props.intl.formatMessage({
                                    defaultMessage: 'Search assets',
                                    id: 'mw.assets.searchPlaceholder'
                                })}
                                onChange={this.handleSearchInput}
                                onKeyDown={this.handleSearchKeyDown}
                            />
                            {searchActive ? (
                                <button
                                    type="button"
                                    className={styles.searchClear}
                                    onClick={this.handleClearSearch}
                                    title={props.intl.formatMessage({
                                        defaultMessage: 'Clear search',
                                        id: 'mw.assets.clearSearch'
                                    })}
                                >
                                    <X size={13} />
                                </button>
                            ) : null}
                        </div>
                    </div>

                    <div className={styles.toolBar}>
                        <button
                            type="button"
                            className={styles.primaryButton}
                            onClick={props.onClickAdd}
                        >
                            <FilePlus2 size={15} />
                            <FormattedMessage
                                defaultMessage="Add files"
                                description="Button to add custom assets"
                                id="mw.assets.add"
                            />
                        </button>
                        <button
                            type="button"
                            className={styles.secondaryButton}
                            onClick={props.onNewFolderStart}
                        >
                            <FolderPlus size={15} />
                            <FormattedMessage
                                defaultMessage="New folder"
                                description="Button to create a folder for custom assets"
                                id="mw.assets.newFolder"
                            />
                        </button>
                        <input
                            className={styles.fileInput}
                            type="file"
                            multiple
                            ref={props.fileInputRef}
                            onChange={props.onFileChange}
                        />

                        <div className={styles.toolbarSpacer} />

                        <span className={styles.metaText}>
                            {searchActive ? (
                                <FormattedMessage
                                    defaultMessage="{count} results"
                                    description="Number of search results for custom assets"
                                    id="mw.assets.resultCount"
                                    values={{count: viewCount}}
                                />
                            ) : (
                                <FormattedMessage
                                    defaultMessage="{folders} folders · {files} files"
                                    description="Number of folders and files in the current asset folder"
                                    id="mw.assets.itemCount"
                                    values={{folders: folderCount, files: viewCount}}
                                />
                            )}
                        </span>

                        <div className={styles.viewToggle}>
                            <button
                                type="button"
                                className={classNames(styles.viewButton, {
                                    [styles.viewButtonActive]: props.viewMode === 'list'
                                })}
                                onClick={this.handleViewList}
                                title={props.intl.formatMessage({
                                    defaultMessage: 'Details view',
                                    id: 'mw.assets.detailsView'
                                })}
                            >
                                <List size={15} />
                            </button>
                            <button
                                type="button"
                                className={classNames(styles.viewButton, {
                                    [styles.viewButtonActive]: props.viewMode === 'grid'
                                })}
                                onClick={this.handleViewGrid}
                                title={props.intl.formatMessage({
                                    defaultMessage: 'Grid view',
                                    id: 'mw.assets.gridView'
                                })}
                            >
                                <LayoutGrid size={15} />
                            </button>
                        </div>

                        <button
                            type="button"
                            className={classNames(styles.iconButton, {
                                [styles.iconButtonActive]: props.previewOpen
                            })}
                            onClick={props.onTogglePreview}
                            title={props.intl.formatMessage({
                                defaultMessage: 'Toggle preview panel',
                                id: 'mw.assets.togglePreview'
                            })}
                        >
                            <PanelRight size={16} />
                        </button>
                    </div>

                    <div className={styles.main}>
                        <AssetList
                            cwd={props.cwd}
                            files={props.files}
                            folders={props.folders}
                            searchActive={searchActive}
                            searchResults={props.searchResults || []}
                            viewMode={props.viewMode}
                            sortKey={props.sortKey}
                            sortDir={props.sortDir}
                            selection={props.selection}
                            renamingIndex={props.renamingIndex}
                            creatingFolder={props.creatingFolder}
                            newFolderPlaceholder={
                                props.intl.formatMessage(messages.newFolderPlaceholder)
                            }
                            onNavigate={props.onNavigate}
                            onOpenMenu={this.handleOpenMenu}
                            onSelectFile={props.onSelectFile}
                            onClearSelection={props.onClearSelection}
                            onSort={props.onSort}
                            onRenameCommit={props.onRenameCommit}
                            onRenameCancel={props.onRenameCancel}
                            onNewFolderCommit={props.onNewFolderCommit}
                            onNewFolderCancel={props.onNewFolderCancel}
                            onMove={props.onMove}
                            onDropFiles={props.onDropFiles}
                        />

                        {props.previewOpen ? (
                            <AssetPreview
                                preview={props.preview}
                                onRename={this.handlePreviewRename}
                                onExport={this.handlePreviewExport}
                                onDelete={this.handlePreviewDelete}
                            />
                        ) : null}
                    </div>

                    <div className={styles.statusBar}>
                        <span>
                            {searchActive ? (
                                <FormattedMessage
                                    defaultMessage="Search results"
                                    description="Status bar label while searching custom assets"
                                    id="mw.assets.statusSearch"
                                />
                            ) : (
                                <FormattedMessage
                                    defaultMessage="{count} files · {size}"
                                    description="Status bar showing the total number of custom assets and their size"
                                    id="mw.assets.total"
                                    values={{
                                        count: props.totalCount,
                                        size: formatBytes(props.totalSize)
                                    }}
                                />
                            )}
                        </span>
                        <span>
                            {props.selection.length > 0 ? (
                                <FormattedMessage
                                    defaultMessage="{count} selected"
                                    description="Status bar showing how many assets are selected"
                                    id="mw.assets.selectedCount"
                                    values={{count: props.selection.length}}
                                />
                            ) : null}
                        </span>
                    </div>

                    {this.state.menu ? (
                        <React.Fragment>
                            <div
                                className={styles.menuBackdrop}
                                onMouseDown={this.handleMenuBackdropMouseDown}
                                onContextMenu={this.handleMenuBackdropContextMenu}
                            />
                            <div
                                className={styles.contextMenu}
                                style={{
                                    left: this.state.menu.x,
                                    top: this.state.menu.y
                                }}
                                onMouseDown={this.handleMenuMouseDown}
                            >
                                {this.state.menu.items.map((item, index) => (
                                    item.separator ? (
                                        <div
                                            key={`separator:${index}`}
                                            className={styles.menuSeparator}
                                        />
                                    ) : (
                                        <button
                                            key={`item:${index}`}
                                            type="button"
                                            className={classNames(styles.menuItem, {
                                                [styles.menuItemDanger]: item.danger
                                            })}
                                            data-index={index}
                                            onClick={this.handleMenuItemClick}
                                        >
                                            {item.icon ? <item.icon size={14} /> : null}
                                            <span>{item.label}</span>
                                        </button>
                                    )
                                ))}
                            </div>
                        </React.Fragment>
                    ) : null}
                </div>
            </Modal>
        );
    }
}

AssetsModal.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func.isRequired,
    breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    })).isRequired,
    canGoBack: PropTypes.bool.isRequired,
    canGoForward: PropTypes.bool.isRequired,
    canGoUp: PropTypes.bool.isRequired,
    cwd: PropTypes.string.isRequired,
    files: PropTypes.array.isRequired,
    folders: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    searchResults: PropTypes.array,
    totalCount: PropTypes.number.isRequired,
    totalSize: PropTypes.number.isRequired,
    viewMode: PropTypes.oneOf(['list', 'grid']).isRequired,
    sortKey: PropTypes.oneOf(['name', 'type', 'size']).isRequired,
    sortDir: PropTypes.oneOf(['asc', 'desc']).isRequired,
    selection: PropTypes.arrayOf(PropTypes.number).isRequired,
    preview: PropTypes.shape({
        multiple: PropTypes.bool,
        count: PropTypes.number,
        totalSize: PropTypes.number,
        items: PropTypes.array,
        index: PropTypes.number,
        name: PropTypes.string,
        dataFormat: PropTypes.string,
        size: PropTypes.number,
        md5: PropTypes.string,
        kind: PropTypes.oneOf(['image', 'audio', 'text', 'none']),
        url: PropTypes.string,
        text: PropTypes.string
    }),
    previewOpen: PropTypes.bool.isRequired,
    creatingFolder: PropTypes.bool.isRequired,
    renamingIndex: PropTypes.number,
    fileInputRef: PropTypes.func.isRequired,
    onClickAdd: PropTypes.func.isRequired,
    onFileChange: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
    onForward: PropTypes.func.isRequired,
    onUp: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    onClearSearch: PropTypes.func.isRequired,
    onViewModeChange: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    onTogglePreview: PropTypes.func.isRequired,
    onSelectFile: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    onClearSelection: PropTypes.func.isRequired,
    onRenameStart: PropTypes.func.isRequired,
    onRenameCommit: PropTypes.func.isRequired,
    onRenameCancel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onExport: PropTypes.func.isRequired,
    onNewFolderStart: PropTypes.func.isRequired,
    onNewFolderCommit: PropTypes.func.isRequired,
    onNewFolderCancel: PropTypes.func.isRequired,
    onDeleteFolder: PropTypes.func.isRequired,
    onDropFiles: PropTypes.func.isRequired,
    onMove: PropTypes.func.isRequired
};

export {messages};
export default injectIntl(AssetsModal);
