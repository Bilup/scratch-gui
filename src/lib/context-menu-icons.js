import React from 'react';
import ReactDOM from 'react-dom';
import {
    ArrowDownToLine,
    ArrowLeftRight,
    ArrowUpRight,
    ArrowUpToLine,
    Backpack,
    Brush,
    ChevronsDownUp,
    ChevronsUpDown,
    CircleHelp,
    ClipboardPaste,
    Copy,
    CopyPlus,
    Dot,
    Download,
    EyeOff,
    FolderInput,
    FolderOutput,
    FolderPlus,
    FolderX,
    Frame,
    Globe,
    ImageDown,
    List,
    Maximize2,
    MessageSquarePlus,
    MessageSquareX,
    Minus,
    Pencil,
    Plus,
    RectangleHorizontal,
    Redo2,
    Replace,
    RotateCcw,
    Ruler,
    ScanSearch,
    Scissors,
    SlidersHorizontal,
    SquarePlus,
    Trash2,
    Undo2,
    UnfoldVertical,
    Upload,
    User,
    Variable
} from 'lucide-react';
// 这个对象和 addons/api.js 里的是同一个模块实例：api.js 启动时会把当前语言的
// 译文 Object.assign 进来，所以这里读到的就是本地化之后的 addon 文案。
// 用它反查图标，addon 源码里就不必再写 icon 字段（那些文件由 pull.js 生成，会被覆盖）。
import addonMessages from '../addons/addons-l10n/en.json';
import styles from './context-menu-icons.css';

const ICON_SIZE = 16;
const ICON_STROKE = 1.75;

/**
 * 语义 key -> lucide 图标。react-contextmenu 一侧直接 `<MenuItem icon="delete">`，
 * Blockly 一侧由 blocklyMessageIcons 把菜单文案翻译成这里的 key。
 */
const contextMenuIcons = {
    addComment: MessageSquarePlus,
    addFrame: Frame,
    addInput: Plus,
    addToFolder: FolderInput,
    backpack: Backpack,
    cleanUp: Brush,
    collapse: ChevronsDownUp,
    copy: Copy,
    createFolder: FolderPlus,
    cut: Scissors,
    default: Dot,
    delete: Trash2,
    duplicate: CopyPlus,
    edit: Pencil,
    expand: ChevronsUpDown,
    export: Download,
    exportImage: ImageDown,
    goToDefinition: ArrowUpRight,
    help: CircleHelp,
    hide: EyeOff,
    import: Upload,
    insert: SquarePlus,
    inspect: ScanSearch,
    largeReadout: Maximize2,
    list: List,
    local: User,
    global: Globe,
    makeSpace: UnfoldVertical,
    moveToBottom: ArrowDownToLine,
    moveToTop: ArrowUpToLine,
    normalReadout: RectangleHorizontal,
    paste: ClipboardPaste,
    redo: Redo2,
    removeComment: MessageSquareX,
    removeFolder: FolderX,
    removeFromFolder: FolderOutput,
    removeInput: Minus,
    rename: Pencil,
    reset: RotateCcw,
    slider: SlidersHorizontal,
    sliderRange: Ruler,
    swap: Replace,
    switch: ArrowLeftRight,
    undo: Undo2,
    variable: Variable
};

/**
 * Blockly.Msg 的 key -> 语义 key。
 *
 * 注意：菜单文案本身是由 ScratchMsgs.setLocale() 换过的本地化文本，所以匹配
 * 必须在菜单弹出时**实时**读 Blockly.Msg，不能在建表时缓存。带 %1 的模板
 * （DELETE_X_BLOCKS 之类）用 templateToRegExp 做通配。
 */
const blocklyMessageIcons = {
    DUPLICATE: 'duplicate',
    ADD_COMMENT: 'addComment',
    REMOVE_COMMENT: 'removeComment',
    DELETE_BLOCK: 'delete',
    DELETE_X_BLOCKS: 'delete',
    DELETE: 'delete',
    UNDO: 'undo',
    REDO: 'redo',
    CLEAN_UP: 'cleanUp',
    COLLAPSE_ALL: 'collapse',
    EXPAND_ALL: 'expand',
    COLLAPSE_BLOCK: 'collapse',
    EXPAND_BLOCK: 'expand',
    HELP: 'help',
    ADD_FRAME: 'addFrame',
    RENAME_FRAME: 'rename',
    DELETE_FRAME: 'delete',
    COLLAPSE_FRAME: 'collapse',
    EXPAND_FRAME: 'expand',
    EDIT_PROCEDURE: 'edit',
    SHOW_PROCEDURE_DEFINITION: 'goToDefinition',
    PROCEDURES_TO_REPORTER: 'switch',
    PROCEDURES_TO_STATEMENT: 'switch',
    RENAME_VARIABLE: 'rename',
    DELETE_VARIABLE: 'delete',
    RENAME_LIST: 'rename',
    DELETE_LIST: 'delete',
    OPERATORS_ADD_INPUT: 'addInput',
    OPERATORS_REMOVE_INPUT: 'removeInput'
};

/** 变量 / 列表 getter 的右键菜单文案是变量名本身，只能靠积木类型兜底。 */
const blockTypeFallbackIcons = {
    data_variable: 'variable',
    data_listcontents: 'list'
};

/**
 * addon 菜单文案（addons-l10n 的 message id）-> 语义 key。
 *
 * 这些项是 addon 通过 `tab.createBlockContextMenu` 插进来的，文案来自 addon l10n，
 * 对不上 `Blockly.Msg`，所以单独一张表。**改这里而不是改 addon 源码**：
 * `src/addons/addons/*` 是 pull.js 的生成目录，重新 pull 会把 addon 里的 icon 字段冲掉；
 * 而本表在 GUI 层，且文案从 addonMessages（已被本地化）实时读取，中英文都成立。
 *
 * 文案带 ICU 占位符（如 `Swap {var} in Sprite`）时走 templateToRegExp 通配。
 */
const addonMessageIcons = {
    'editor-devtools/paste': 'paste',
    'editor-devtools/clean-up-detached': 'cleanUp',
    'editor-devtools/make-space': 'makeSpace',
    'editor-devtools/copy-all': 'copy',
    'editor-devtools/copy-block': 'copy',
    'editor-devtools/cut-block': 'cut',
    'editor-devtools/swap': 'swap',
    'blocks2image/export_all_to_SVG': 'exportImage',
    'blocks2image/export_all_to_PNG': 'exportImage',
    'blocks2image/export_selected_to_SVG': 'exportImage',
    'blocks2image/export_selected_to_PNG': 'exportImage',
    'dev-inspector/inspect-block': 'inspect',
    'swap-local-global/to-global': 'global',
    'swap-local-global/to-local': 'local'
};

const resolveContextMenuIcon = icon => {
    if (typeof icon === 'string') {
        return contextMenuIcons[icon] || contextMenuIcons.default;
    }
    return icon || contextMenuIcons.default;
};

// 同一个图标只渲染一次，之后 cloneNode 复用（菜单每次右键都会重建）。
const markupCache = new Map();

const createContextMenuIconElement = icon => {
    const Icon = resolveContextMenuIcon(icon);
    if (!markupCache.has(Icon)) {
        const container = document.createElement('div');
        ReactDOM.render(React.createElement(Icon, {
            'size': ICON_SIZE,
            'strokeWidth': ICON_STROKE,
            'className': styles.icon,
            'aria-hidden': true
        }), container);
        markupCache.set(Icon, container.firstChild.cloneNode(true));
        ReactDOM.unmountComponentAtNode(container);
    }
    return markupCache.get(Icon).cloneNode(true);
};

const templateCache = new Map();

// Blockly 的 %1 和 addon 的 ICU {var} 都是占位符，统一当成“任意文本”来匹配。
const templateToRegExp = template => {
    if (!templateCache.has(template)) {
        const source = template
            .split(/%\d+|\{[^}]*\}/)
            .map(part => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .join('[\\s\\S]*');
        templateCache.set(template, new RegExp(`^${source}$`));
    }
    return templateCache.get(template);
};

const isTemplate = text => typeof text === 'string' && (text.includes('%') || text.includes('{'));

/**
 * 按 addon 文案反查图标（文案已由 addons/api.js 本地化）。
 * @param {string} text 菜单项文本。
 * @returns {?string} 语义 key，未命中返回 null。
 */
const iconForAddonMessage = text => {
    for (const key of Object.keys(addonMessageIcons)) {
        const template = addonMessages[key];
        if (typeof template !== 'string' || !template) continue;
        if (template === text || (isTemplate(template) && templateToRegExp(template).test(text))) {
            return addonMessageIcons[key];
        }
    }
    return null;
};

const getBlocklyMsg = ScratchBlocks => {
    if (ScratchBlocks.Msg) return ScratchBlocks.Msg;
    return (ScratchBlocks.ScratchBlocks && ScratchBlocks.ScratchBlocks.Msg) || {};
};

const iconForBlocklyOption = (option, ScratchBlocks, targetBlock) => {
    if (option.icon) {
        return option.icon;
    }
    const text = typeof option.text === 'string' ? option.text : String(option.text);
    const Msg = getBlocklyMsg(ScratchBlocks);
    for (const key of Object.keys(blocklyMessageIcons)) {
        const template = Msg[key];
        if (typeof template !== 'string' || !template) continue;
        if (template === text || (isTemplate(template) && templateToRegExp(template).test(text))) {
            return blocklyMessageIcons[key];
        }
    }
    // addon 插进来的项（工作区的粘贴 / 整理游离脚本、积木的复制剪切、导出图片…）
    const addonIcon = iconForAddonMessage(text);
    if (addonIcon) {
        return addonIcon;
    }
    if (targetBlock && blockTypeFallbackIcons[targetBlock.type]) {
        return blockTypeFallbackIcons[targetBlock.type];
    }
    return 'default';
};

/**
 * 给 Blockly 的右键菜单补图标。
 *
 * 为什么在 GUI 层 patch，而不是改 scratch-blocks：菜单 DOM 是 goog.ui.Menu
 * 生成的，populate_ 是唯一统一出口（工作区菜单、积木菜单、下拉都走它），
 * 在这里把每个 MenuItem 的内容换成 [图标, 文本] 就能一次覆盖全部菜单，
 * 而且不用改 fork 里的 core/contextmenu.js 再等远端构建。
 * @param {object} ScratchBlocks scratch-blocks 模块的 default 导出（Blockly 对象）。
 * @returns {void}
 */
const installBlocklyContextMenuIcons = ScratchBlocks => {
    const ContextMenu = ScratchBlocks && ScratchBlocks.ContextMenu;
    if (!ContextMenu || typeof ContextMenu.populate_ !== 'function' || ContextMenu.mwIconsInstalled) return;
    ContextMenu.mwIconsInstalled = true;
    const originalPopulate = ContextMenu.populate_;
    ContextMenu.populate_ = function (options, rtl) {
        const menu = originalPopulate.call(this, options, rtl);
        let targetBlock = null;
        try {
            const gesture = ScratchBlocks.mainWorkspace && ScratchBlocks.mainWorkspace.currentGesture_;
            targetBlock = gesture ? gesture.targetBlock_ : null;
        } catch (e) {
            targetBlock = null;
        }
        for (let i = 0; i < options.length; i++) {
            const item = menu.getChildAt(i);
            if (!item || typeof options[i].text === 'undefined') continue;
            const icon = createContextMenuIconElement(iconForBlocklyOption(options[i], ScratchBlocks, targetBlock));
            item.setContent([icon, document.createTextNode(String(options[i].text))]);
        }
        return menu;
    };
};

export {
    addonMessageIcons,
    contextMenuIcons,
    createContextMenuIconElement,
    iconForAddonMessage,
    iconForBlocklyOption,
    installBlocklyContextMenuIcons,
    resolveContextMenuIcon,
    ICON_SIZE,
    ICON_STROKE
};
