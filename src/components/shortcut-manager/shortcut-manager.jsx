import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import bindAll from 'lodash.bindall';
import {connect} from 'react-redux';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import {
    Search,
    Keyboard,
    LayoutGrid,
    FileText,
    Pencil,
    Eye,
    Play,
    PanelsTopLeft,
    Library,
    Shapes,
    AppWindow,
    RotateCcw
} from 'lucide-react';

import {
    getDefaultShortcuts,
    getCategoryLabel,
    normalizeKey,
    SHORTCUT_CATEGORIES
} from '../../lib/shortcuts/registry.js';
import {updateShortcuts} from '../../lib/shortcuts/event-router.js';
import {closeShortcutManagerModal} from '../../reducers/modals';
import {setShortcut, resetShortcut, resetAllShortcuts} from '../../reducers/shortcuts';

import WindowedModal from '../../containers/windowed-modal.jsx';
import Input from '../forms/input.jsx';
import ShortcutCategory from './shortcut-category.jsx';
import {isMac} from './key-combo.jsx';

import styles from './shortcut-manager.css';

const CATEGORY_ICONS = {
    [SHORTCUT_CATEGORIES.FILE]: FileText,
    [SHORTCUT_CATEGORIES.EDIT]: Pencil,
    [SHORTCUT_CATEGORIES.VIEW]: Eye,
    [SHORTCUT_CATEGORIES.PROJECT_CONTROLS]: Play,
    [SHORTCUT_CATEGORIES.EDITOR_NAVIGATION]: PanelsTopLeft,
    [SHORTCUT_CATEGORIES.LIBRARY_ACCESS]: Library,
    [SHORTCUT_CATEGORIES.SPRITE_MANAGEMENT]: Shapes,
    [SHORTCUT_CATEGORIES.WINDOW_MANAGEMENT]: AppWindow
};

const messages = defineMessages({
    title: {
        defaultMessage: 'Keyboard Shortcuts',
        description: 'Title of keyboard shortcuts manager modal',
        id: 'shortcut-manager.title'
    },
    search: {
        defaultMessage: 'Search shortcuts',
        description: 'Placeholder text for search input',
        id: 'shortcut-manager.search'
    },
    noResults: {
        defaultMessage: 'No shortcuts found',
        description: 'Message when no shortcuts match search',
        id: 'shortcut-manager.noResults'
    },
    allShortcuts: {
        defaultMessage: 'All Shortcuts',
        description: 'Label for showing all shortcuts',
        id: 'shortcut-manager.allShortcuts'
    },
    resetAll: {
        defaultMessage: 'Reset all to defaults',
        description: 'Label for the button that resets every shortcut to its default',
        id: 'shortcut-manager.resetAll'
    },
    categoryFile: {
        defaultMessage: 'File',
        description: 'Shortcut category name',
        id: 'shortcut.category.file'
    },
    categoryEdit: {
        defaultMessage: 'Edit',
        description: 'Shortcut category name',
        id: 'shortcut.category.edit'
    },
    categoryView: {
        defaultMessage: 'View',
        description: 'Shortcut category name',
        id: 'shortcut.category.view'
    },
    categoryProjectControls: {
        defaultMessage: 'Project Controls',
        description: 'Shortcut category name',
        id: 'shortcut.category.projectControls'
    },
    categoryEditorNavigation: {
        defaultMessage: 'Editor Navigation',
        description: 'Shortcut category name',
        id: 'shortcut.category.editorNavigation'
    },
    categoryLibraryAccess: {
        defaultMessage: 'Library Access',
        description: 'Shortcut category name',
        id: 'shortcut.category.libraryAccess'
    },
    categorySpriteManagement: {
        defaultMessage: 'Sprite Management',
        description: 'Shortcut category name',
        id: 'shortcut.category.spriteManagement'
    },
    categoryWindowManagement: {
        defaultMessage: 'Windows',
        description: 'Shortcut category name',
        id: 'shortcut.category.windowManagement'
    },
    categoryCollaboration: {
        defaultMessage: 'Collaboration',
        description: 'Shortcut category name',
        id: 'shortcut.category.collaboration'
    },
    save: {
        defaultMessage: 'Save',
        description: 'Shortcut label',
        id: 'shortcut.save'
    },
    saveAsCopy: {
        defaultMessage: 'Save As Copy',
        description: 'Shortcut label',
        id: 'shortcut.saveAsCopy'
    },
    loadFromComputer: {
        defaultMessage: 'Load from Computer',
        description: 'Shortcut label',
        id: 'shortcut.loadFromComputer'
    },
    packageProject: {
        defaultMessage: 'Package Project',
        description: 'Shortcut label',
        id: 'shortcut.packageProject'
    },
    restorePoints: {
        defaultMessage: 'Restore Points',
        description: 'Shortcut label',
        id: 'shortcut.restorePoints'
    },
    settings: {
        defaultMessage: 'Settings',
        description: 'Shortcut label',
        id: 'shortcut.settings'
    },
    fullScreen: {
        defaultMessage: 'Toggle Fullscreen',
        description: 'Shortcut label',
        id: 'shortcut.fullScreen'
    },
    blocksTab: {
        defaultMessage: 'Blocks Tab',
        description: 'Shortcut label',
        id: 'shortcut.blocksTab'
    },
    costumesTab: {
        defaultMessage: 'Costumes Tab',
        description: 'Shortcut label',
        id: 'shortcut.costumesTab'
    },
    soundsTab: {
        defaultMessage: 'Sounds Tab',
        description: 'Shortcut label',
        id: 'shortcut.soundsTab'
    },
    greenFlag: {
        defaultMessage: 'Start Project (Green Flag)',
        description: 'Shortcut label',
        id: 'shortcut.greenFlag'
    },
    stopAll: {
        defaultMessage: 'Stop All',
        description: 'Shortcut label',
        id: 'shortcut.stopAll'
    },
    spriteLibrary: {
        defaultMessage: 'Open Sprite Library',
        description: 'Shortcut label',
        id: 'shortcut.spriteLibrary'
    },
    costumeLibrary: {
        defaultMessage: 'Open Costume Library',
        description: 'Shortcut label',
        id: 'shortcut.costumeLibrary'
    },
    soundLibrary: {
        defaultMessage: 'Open Sound Library',
        description: 'Shortcut label',
        id: 'shortcut.soundLibrary'
    },
    extensionLibrary: {
        defaultMessage: 'Open Extension Library',
        description: 'Shortcut label',
        id: 'shortcut.extensionLibrary'
    },
    extensionManager: {
        defaultMessage: 'Extension Manager',
        description: 'Shortcut label',
        id: 'shortcut.extensionManager'
    },
    duplicateSprite: {
        defaultMessage: 'Duplicate Sprite',
        description: 'Shortcut label',
        id: 'shortcut.duplicateSprite'
    },
    toggleBackpack: {
        defaultMessage: 'Toggle Backpack',
        description: 'Shortcut label',
        id: 'shortcut.toggleBackpack'
    },
    deleteSprite: {
        defaultMessage: 'Delete Sprite',
        description: 'Shortcut label',
        id: 'shortcut.deleteSprite'
    },
    stageFullScreen: {
        defaultMessage: 'Toggle Stage Fullscreen',
        description: 'Shortcut label',
        id: 'shortcut.stageFullScreen'
    },
    undo: {
        defaultMessage: 'Undo',
        description: 'Shortcut label',
        id: 'shortcut.undo'
    },
    redo: {
        defaultMessage: 'Redo',
        description: 'Shortcut label',
        id: 'shortcut.redo'
    },
    copy: {
        defaultMessage: 'Copy',
        description: 'Shortcut label',
        id: 'shortcut.copy'
    },
    paste: {
        defaultMessage: 'Paste',
        description: 'Shortcut label',
        id: 'shortcut.paste'
    },
    cut: {
        defaultMessage: 'Cut',
        description: 'Shortcut label',
        id: 'shortcut.cut'
    },
    closeWindow: {
        defaultMessage: 'Close Window',
        description: 'Shortcut label',
        id: 'shortcut.closeWindow'
    },
    toggleWindowFullScreen: {
        defaultMessage: 'Toggle Window Fullscreen',
        description: 'Shortcut label',
        id: 'shortcut.toggleWindowFullScreen'
    },
    collaborationChat: {
        defaultMessage: 'Collaboration Chat',
        description: 'Shortcut label',
        id: 'shortcut.collaborationChat'
    },
    edit: {
        defaultMessage: 'Edit',
        description: 'Button to edit a shortcut',
        id: 'shortcut-manager.edit'
    },
    pressNewShortcut: {
        defaultMessage: 'Press new shortcut',
        description: 'Placeholder text for shortcut input',
        id: 'shortcut-manager.pressNewShortcut'
    },
    shortcutConflict: {
        defaultMessage: 'This shortcut is already in use',
        description: 'Error message when shortcut conflicts',
        id: 'shortcut-manager.shortcutConflict'
    },
    categories: {
        defaultMessage: 'Categories',
        description: 'Label for categories sidebar',
        id: 'shortcut-manager.categories'
    },
    cancel: {
        defaultMessage: 'Cancel',
        description: 'Button to cancel editing a shortcut',
        id: 'shortcut-manager.cancel'
    }
});

class ShortcutManager extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleSearchChange',
            'handleClose',
            'handleSidebarClick',
            'handleSaveShortcut',
            'handleResetShortcut',
            'handleResetAll',
            'getConflict'
        ]);

        this.state = {
            searchQuery: '',
            selectedCategory: null
        };
    }

    handleSearchChange (e) {
        this.setState({searchQuery: e.target.value});
    }

    handleClose () {
        this.props.onRequestClose();
    }

    handleSaveShortcut (id, key) {
        const defaultKey = this.getDefaultKey(id);
        const nextCustom = {...this.props.customShortcuts};

        if (normalizeKey(key) === normalizeKey(defaultKey)) {
            delete nextCustom[id];
            this.props.onResetShortcut(id);
        } else {
            nextCustom[id] = key;
            this.props.onSetShortcut(id, key);
        }

        updateShortcuts(nextCustom);
    }

    handleResetShortcut (id) {
        const nextCustom = {...this.props.customShortcuts};
        delete nextCustom[id];
        this.props.onResetShortcut(id);
        updateShortcuts(nextCustom);
    }

    handleResetAll () {
        this.props.onResetAllShortcuts();
        updateShortcuts({});
    }

    getDefaultKey (id) {
        const match = getDefaultShortcuts().find(shortcut => shortcut.id === id);
        return match ? match.defaultKey : '';
    }

    getConflict (key, selfId) {
        const normalized = normalizeKey(key);
        const match = this.getAllShortcuts().find(shortcut =>
            shortcut.id !== selfId && normalizeKey(shortcut.key) === normalized
        );
        return match ? match.label : null;
    }

    handleSidebarClick (e) {
        const categoryId = e.currentTarget.dataset.category || null;
        this.setState({
            selectedCategory: categoryId,
            searchQuery: ''
        });
    }

    getAllShortcuts () {
        const defaultShortcuts = getDefaultShortcuts();
        const customShortcuts = this.props.customShortcuts || {};
        const {intl} = this.props;

        const shortcutMessages = {
            'save': messages.save,
            'saveAsCopy': messages.saveAsCopy,
            'loadFromComputer': messages.loadFromComputer,
            'packageProject': messages.packageProject,
            'restorePoints': messages.restorePoints,
            'settings': messages.settings,
            'fullScreen': messages.fullScreen,
            'blocksTab': messages.blocksTab,
            'costumesTab': messages.costumesTab,
            'soundsTab': messages.soundsTab,
            'greenFlag': messages.greenFlag,
            'stopAll': messages.stopAll,
            'spriteLibrary': messages.spriteLibrary,
            'costumeLibrary': messages.costumeLibrary,
            'soundLibrary': messages.soundLibrary,
            'extensionLibrary': messages.extensionLibrary,
            'extensionManager': messages.extensionManager,
            'duplicateSprite': messages.duplicateSprite,
            'toggleBackpack': messages.toggleBackpack,
            'deleteSprite': messages.deleteSprite,
            'stageFullScreen': messages.stageFullScreen,
            'undo': messages.undo,
            'redo': messages.redo,
            'copy': messages.copy,
            'paste': messages.paste,
            'cut': messages.cut,
            'closeWindow': messages.closeWindow,
            'toggleWindowFullScreen': messages.toggleWindowFullScreen,
            'collaborationChat': messages.collaborationChat
        };

        return defaultShortcuts.map(shortcut => {
            const label = intl.formatMessage(shortcutMessages[shortcut.id]);
            if (customShortcuts[shortcut.id]) {
                return {
                    ...shortcut,
                    key: customShortcuts[shortcut.id],
                    label
                };
            }
            return {
                ...shortcut,
                label
            };
        });
    }

    getFilteredShortcuts () {
        const allShortcuts = this.getAllShortcuts();
        const {searchQuery, selectedCategory} = this.state;

        return allShortcuts.filter(shortcut => {
            if (selectedCategory && shortcut.category !== selectedCategory) {
                return false;
            }

            if (!searchQuery) return true;

            const query = searchQuery.toLowerCase();
            return shortcut.label.toLowerCase().includes(query) ||
                   shortcut.key.toLowerCase().includes(query);
        });
    }

    getCategoriesWithCounts () {
        const allShortcuts = this.getAllShortcuts();
        const categories = {};
        const {intl} = this.props;

        const categoryMessages = {
            'file': messages.categoryFile,
            'edit': messages.categoryEdit,
            'view': messages.categoryView,
            'projectControls': messages.categoryProjectControls,
            'editorNavigation': messages.categoryEditorNavigation,
            'libraryAccess': messages.categoryLibraryAccess,
            'spriteManagement': messages.categorySpriteManagement,
            'windowManagement': messages.categoryWindowManagement,
            'collaboration': messages.categoryCollaboration
        };

        allShortcuts.forEach(shortcut => {
            if (!categories[shortcut.category]) {
                categories[shortcut.category] = {
                    label: intl.formatMessage(categoryMessages[shortcut.category]),
                    count: 0
                };
            }
            categories[shortcut.category].count++;
        });

        return Object.entries(categories)
            .sort(([, a], [, b]) => a.label.localeCompare(b.label))
            .map(([id, {label, count}]) => ({id, label, count}));
    }

    renderSidebarItem (id, label, Icon, count, isSelected) {
        return (
            <div
                key={id || 'all'}
                className={classNames(styles.sidebarItem, {[styles.selected]: isSelected})}
                data-category={id || ''}
                onClick={this.handleSidebarClick}
                title={label}
            >
                <Icon className={styles.sidebarIcon} />
                <span className={styles.sidebarLabel}>{label}</span>
                <span className={styles.categoryCount}>{count}</span>
            </div>
        );
    }

    render () {
        const {searchQuery, selectedCategory} = this.state;
        const categories = this.getCategoriesWithCounts();
        const shortcuts = this.getFilteredShortcuts();
        const allShortcuts = this.getAllShortcuts();

        const groupedShortcuts = shortcuts.reduce((groups, shortcut) => {
            if (!groups[shortcut.category]) {
                groups[shortcut.category] = [];
            }
            groups[shortcut.category].push(shortcut);
            return groups;
        }, {});

        const hasResults = shortcuts.length > 0;
        const showAllSelected = !selectedCategory && !searchQuery;
        const hasCustom = Object.keys(this.props.customShortcuts || {}).length > 0;

        return (
            <WindowedModal
                id="shortcut-manager-modal"
                contentLabel={this.props.intl.formatMessage(messages.title)}
                visible={this.props.visible}
                onRequestClose={this.handleClose}
                width={880}
                height={550}
            >
                <div className={styles.container}>
                    <div className={styles.sidebar}>
                        <div className={styles.searchContainer}>
                            <Search
                                size={15}
                                className={styles.searchIcon}
                            />
                            <Input
                                type="text"
                                placeholder={this.props.intl.formatMessage(messages.search)}
                                value={searchQuery}
                                onChange={this.handleSearchChange}
                                className={styles.searchInput}
                            />
                        </div>

                        <div className={styles.sidebarItems}>
                            {this.renderSidebarItem(
                                null,
                                this.props.intl.formatMessage(messages.allShortcuts),
                                LayoutGrid,
                                allShortcuts.length,
                                showAllSelected
                            )}

                            {categories.map(category => this.renderSidebarItem(
                                category.id,
                                category.label,
                                CATEGORY_ICONS[category.id] || Keyboard,
                                category.count,
                                selectedCategory === category.id
                            ))}
                        </div>

                        {hasCustom && (
                            <div className={styles.sidebarFooter}>
                                <button
                                    className={styles.resetAllButton}
                                    onClick={this.handleResetAll}
                                >
                                    <RotateCcw size={14} />
                                    <FormattedMessage {...messages.resetAll} />
                                </button>
                            </div>
                        )}
                    </div>

                    <div className={styles.content}>
                        {isMac && (
                            <div className={styles.hint}>
                                <FormattedMessage
                                    defaultMessage="On macOS, {cmd} is Command, {opt} is Option and {shift} is Shift."
                                    description="Explains what the macOS modifier key symbols mean"
                                    id="shortcut-manager.macHint"
                                    values={{
                                        cmd: <kbd className={styles.hintKey}>{'⌘'}</kbd>,
                                        opt: <kbd className={styles.hintKey}>{'⌥'}</kbd>,
                                        shift: <kbd className={styles.hintKey}>{'⇧'}</kbd>
                                    }}
                                />
                            </div>
                        )}

                        {hasResults ? (
                            Object.entries(groupedShortcuts).map(([categoryId, categoryShortcuts]) => (
                                <ShortcutCategory
                                    key={categoryId}
                                    category={this.props.intl.formatMessage(messages[`category${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`])}
                                    icon={CATEGORY_ICONS[categoryId] || Keyboard}
                                    shortcuts={categoryShortcuts}
                                    onSave={this.handleSaveShortcut}
                                    onReset={this.handleResetShortcut}
                                    getConflict={this.getConflict}
                                />
                            ))
                        ) : (
                            <div className={styles.noResults}>
                                <Search size={28} />
                                <FormattedMessage {...messages.noResults} />
                            </div>
                        )}
                    </div>
                </div>
            </WindowedModal>
        );
    }
}

ShortcutManager.propTypes = {
    visible: PropTypes.bool.isRequired,
    customShortcuts: PropTypes.object,
    onRequestClose: PropTypes.func.isRequired,
    onSetShortcut: PropTypes.func.isRequired,
    onResetShortcut: PropTypes.func.isRequired,
    onResetAllShortcuts: PropTypes.func.isRequired,
    intl: PropTypes.shape({
        formatMessage: PropTypes.func
    }).isRequired
};

const mapStateToProps = state => ({
    customShortcuts: state.scratchGui.shortcuts.customShortcuts
});

const mapDispatchToProps = dispatch => ({
    onRequestClose: () => dispatch(closeShortcutManagerModal()),
    onSetShortcut: (id, key) => dispatch(setShortcut(id, key)),
    onResetShortcut: id => dispatch(resetShortcut(id)),
    onResetAllShortcuts: () => dispatch(resetAllShortcuts())
});

export default injectIntl(connect(
    mapStateToProps,
    mapDispatchToProps
)(ShortcutManager));
