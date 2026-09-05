import {getItem as getStorageItem} from './utils/safe-storage.js';

const STORAGE_KEY = 'bl:frosted-glass';

const DEFAULT_SETTINGS = {
    enabled: false,
    blurRadius: 12,
    opacity: 0.25
};

// Style tag ID 前缀
const STYLE_ID_PREFIX = 'bl-frosted-glass-';

// MutationObserver 防抖间隔 (ms) — 避免频繁 DOM 变化(如 xterm 终端渲染)导致性能问题
const OBSERVER_DEBOUNCE_MS = 200;

// 缓存上一次应用时的参数，避免重复更新 style 标签
let _lastApplied = null;

// 缓存主题 RGB 值，避免频繁调用 getComputedStyle()
let _cachedRGB = null;

// Target elements
// CSS Module 类名格式: [name]_[local]_[hash:base64:5] (webpack config 配置)
// 因此必须使用属性选择器 [class*="..."] 来匹配 CSS Module 转换后的类名
const TARGETS = [
    // 窗口 — 编辑器内部弹出的窗口背景（如设置弹窗、扩展管理器等）
    // 覆盖两种窗口类型:
    //   1. windowed-modal (浮动窗口) → .modal-window-content
    //   2. react-modal (常规模态框) → [class*="modal-content"] (CSS Module)
    {
        id: 'window',
        labelId: 'bl.frostedGlass.target.window',
        defaultMessage: 'Window',
        css: (blur, alpha, r, g, b) => `
/* 所有 addon 窗口系统创建的外层容器 — backdrop-filter 必须放在最外层固定定位元素上，
			   才能正确模糊编辑器背景。如果放在内部子元素上，子元素与编辑器之间隔了窗口元素，
			   backdrop-filter 无法正确穿透。
			   使用 :not([class*="addon-window-"]) 排除子元素 (addon-window-header/btn/content 等)，
			   确保只匹配到窗口容器本身。
			   不限定 modal-window 类名，以覆盖所有插件窗口类型 (如 mw-alert-window 等)。 */
			[class*="addon-window"]:not([class*="addon-window-"]) {
			    background-color: transparent !important;
			    backdrop-filter: blur(${blur}px) saturate(150%) !important;
			    -webkit-backdrop-filter: blur(${blur}px) saturate(150%) !important;
			}
			/* addon 窗口标题栏 — 也有不透明背景 (var(--ui-primary))，需透明化让毛玻璃透过 */
			[class*="addon-window-header"] {
			    background-color: transparent !important;
			}
		/* React Modal 内容容器 — 直接渲染在 overlay 上，backdrop-filter 可直接放在这里 */
			/* 使用 .ReactModal__Content 限定到最外层 React Modal 内容元素，避免误匹配到
			   内部子元素的 CSS Module 类名（如 extension-manager-modal_modal-content_xxxxx），
			   这些内部元素不应有 backdrop-filter 和额外的半透明背景层。 */
			[class*="modal-content"].ReactModal__Content {
			    background-color: rgba(${r}, ${g}, ${b}, ${alpha}) !important;
			    backdrop-filter: blur(${blur}px) saturate(150%) !important;
			    -webkit-backdrop-filter: blur(${blur}px) saturate(150%) !important;
			    box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.15) !important;
			}
		/* WindowedModal 内容容器 — 只保留半透明背景，backdrop-filter 已由其父窗口元素负责 */
		.modal-window-content {
		    background-color: rgba(${r}, ${g}, ${b}, ${alpha}) !important;
		    box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.15) !important;
		}
/* 让窗口内部所有内容区域透明，使毛玻璃效果透出 */
		/* 同时覆盖两种窗口类型: windowed-modal (.modal-window-content) 和 react-modal ([class*="modal-content"]) */
		/* 使用基于模式的广泛选择器替代具体类名列表，确保覆盖所有模态框的布局容器:
			   - [class*="body"]: 几乎所有模态框的内容主体 (settings/connection/browser/telemetry/record/...)
			   - [class*="header"]: 模态框标题栏 (modal.css)
			   - [class*="layout"]: modal-sidebar 布局容器
			   - [class*="sidebar"]: modal-sidebar 侧边栏
			   - [class*="bottom-area"]: connection-modal 底部区域
			   - [class*="search-row"]: library 搜索栏
			   - [class*="root"]: 插件窗口内容根元素 (help-modal, share-window)
			   - [class*="page-content"]: project-metadata-modal 内容页 */
		[class*="modal-content"] [class*="body"],
			[class*="modal-content"] [class*="header"],
			[class*="modal-content"] [class*="layout"],
			[class*="modal-content"] [class*="sidebar"],
			[class*="modal-content"] [class*="bottom-area"],
			[class*="modal-content"] [class*="search-row"],
			[class*="modal-content"] [class*="root"],
			[class*="modal-content"] [class*="page-content"],
			.modal-window-content [class*="body"],
			.modal-window-content [class*="header"],
			.modal-window-content [class*="layout"],
			.modal-window-content [class*="sidebar"],
			.modal-window-content [class*="bottom-area"],
			.modal-window-content [class*="search-row"],
			.modal-window-content [class*="root"],
			.modal-window-content [class*="page-content"] {
		    background-color: transparent !important;
		}
		/* custom-procedures 的 .container 使用单独的 background 属性，用 background 简写覆盖 */
		[class*="modal-content"] [class*="custom-procedures_container"],
		.modal-window-content [class*="custom-procedures_container"] {
		    background: transparent !important;
		}`
    },
    // 弹窗通知 — CSS Module 类名: alert_alert_xxxxx
    // 注意: alert.css 中 .alert.warn 使用 background 简写(#FFF0DF)，需用 background 简写+!important 强制覆盖
    {
        id: 'alert',
        labelId: 'bl.frostedGlass.target.alert',
        defaultMessage: 'Alert',
        css: (blur, alpha, r, g, b) => `
[class*="alert_alert_"] {
    background: rgba(${r}, ${g}, ${b}, ${alpha}) !important;
    background-color: rgba(${r}, ${g}, ${b}, ${alpha}) !important;
    backdrop-filter: blur(${blur}px) saturate(150%) !important;
    -webkit-backdrop-filter: blur(${blur}px) saturate(150%) !important;
    box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.15) !important;
}`
    },
    // 右下角通知弹窗 — notification-system.jsx 使用 className="mw-glass-notification" + inline style
    // inline style 的 background: var(--ui-modal-background, #ffffff) 需用 !important 覆盖
    {
        id: 'notification',
        labelId: 'bl.frostedGlass.target.notification',
        defaultMessage: 'Notification',
        css: (blur, alpha, r, g, b) => `
.mw-glass-notification {
    background: rgba(${r}, ${g}, ${b}, ${alpha}) !important;
    background-color: rgba(${r}, ${g}, ${b}, ${alpha}) !important;
    backdrop-filter: blur(${blur}px) saturate(150%) !important;
    -webkit-backdrop-filter: blur(${blur}px) saturate(150%) !important;
    box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.15) !important;
}`
    },
    // Toast 通知 — CSS Module 类名: toast_notification_toast_xxxxx
    // toast-notification.css 中 .toast.success/.error/.info/.warning 使用 background-color 设置颜色，
    // 需用 background-color + !important 强制覆盖
    {
        id: 'toast',
        labelId: 'bl.frostedGlass.target.toast',
        defaultMessage: 'Toast',
        css: (blur, alpha, r, g, b) => `
[class*="toast-notification_toast"] {
    background-color: rgba(${r}, ${g}, ${b}, ${alpha}) !important;
    backdrop-filter: blur(${blur}px) saturate(150%) !important;
    -webkit-backdrop-filter: blur(${blur}px) saturate(150%) !important;
    box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.15) !important;
}`
    },
    // 顶部菜单栏下拉菜单 — CSS Module 类名: menu-bar_menu-bar-menu_xxxxx
    // 内部 .menu 来自 menu.css，CSS Module 类名: menu_menu_xxxxx
    // 毛玻璃背景直接加在 <ul> 上，同时增强菜单项 hover 背景的可见性
    // 因为毛玻璃背景降低了 <ul> 的不透明度，原始的 .menu-item:hover
    // background-color: rgba(255,255,255,0.15) 对比度太低几乎看不见
    {
        id: 'menu-bar-menu',
        labelId: 'bl.frostedGlass.target.menuBarMenu',
        defaultMessage: 'Menu Bar Dropdown',
        css: (blur, alpha, r, g, b) => {
            // 暗色模式(r=0,0,0)下 hover 用白色，亮色模式(r=255,255,255)下 hover 用黑色
            const isDark = r === 0 && g === 0 && b === 0;
            const hoverR = isDark ? 255 : 0;
            const hoverG = isDark ? 255 : 0;
            const hoverB = isDark ? 255 : 0;
            // 使用更高的不透明度(0.25)确保 hover 效果在毛玻璃背景下可见
            const hoverA = 0.25;
            return `
[class*="menu-bar-menu"] [class*="menu_menu"] {
    background: rgba(${r}, ${g}, ${b}, ${alpha});
    background-color: rgba(${r}, ${g}, ${b}, ${alpha});
}
[class*="menu-bar-menu"] [class*="menu_menu"] [class*="menu-item"]:hover,
[class*="menu-bar-menu"] [class*="menu_menu"] [class*="menu-item"].active,
[class*="menu-bar-menu"] [class*="menu_menu"] [class*="menu-item"].expanded {
    background-color: rgba(${hoverR}, ${hoverG}, ${hoverB}, ${hoverA});
}`;
        }
    },
];

const safeGetItem = key => {
    try {
        return getStorageItem(key);
    } catch (err) {
        return null;
    }
};

const getFrostedGlassSettings = () => {
    try {
        const stored = safeGetItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (err) {
        // ignore
    }
    return null;
};

const setFrostedGlassSettings = (settings) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (err) {
        // ignore
    }
};

const targetStyleId = (targetId) => `${STYLE_ID_PREFIX}${targetId}`;

const applyFrostedGlassForTarget = (targetId, blurRadius, opacity, r, g, b) => {
    const target = TARGETS.find(t => t.id === targetId);
    if (!target) return;
    const css = target.css(blurRadius, opacity, r, g, b);
    const existing = document.getElementById(targetStyleId(targetId));
    if (existing) {
        // 避免无意义的更新：只有当 CSS 内容真正变化时才更新
        if (existing.textContent !== css) {
            existing.textContent = css;
        }
    } else {
        const style = document.createElement('style');
        style.id = targetStyleId(targetId);
        style.textContent = css;
        document.head.appendChild(style);
    }
};

const removeFrostedGlassForTarget = (targetId) => {
    const existing = document.getElementById(targetStyleId(targetId));
    if (existing) {
        existing.remove();
    }
};

/**
 * 检测当前主题是否为深色模式。
 * 读取 document 根元素上的 --color-scheme CSS 变量（由主题系统设置）。
 */
const isDarkMode = () => {
    const scheme = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-scheme')
        .trim()
        .toLowerCase();
    return scheme === 'dark';
};

/**
 * 获取当前主题下毛玻璃背景的 RGB 值。
 * 深色模式使用黑色底色，亮色模式使用白色底色。
 * 结果缓存，避免频繁调用 getComputedStyle()。
 */
const getThemeRGB = () => {
    if (_cachedRGB) return _cachedRGB;
    if (isDarkMode()) {
        _cachedRGB = {r: 0, g: 0, b: 0};
    } else {
        _cachedRGB = {r: 255, g: 255, b: 255};
    }
    return _cachedRGB;
};

/**
 * 清除主题 RGB 缓存，下次调用 getThemeRGB() 时会重新计算。
 * 在主题切换时调用。
 */
const clearThemeRGBCache = () => {
    _cachedRGB = null;
};

/**
 * 检查参数是否与上次应用的一致，避免重复更新 style 标签。
 */
const isSameAsLastApplied = (blurRadius, opacity, r, g, b) => {
    if (!_lastApplied) return false;
    return _lastApplied.blurRadius === blurRadius &&
        _lastApplied.opacity === opacity &&
        _lastApplied.r === r &&
        _lastApplied.g === g &&
        _lastApplied.b === b;
};

const applyFrostedGlass = (settings) => {
    if (!settings) {
        settings = DEFAULT_SETTINGS;
    }

    if (!settings.enabled) {
        // Remove all frosted glass styles
        for (const target of TARGETS) {
            removeFrostedGlassForTarget(target.id);
        }
        _lastApplied = null;
        return;
    }

    const blurRadius = settings.blurRadius || DEFAULT_SETTINGS.blurRadius;
    const opacity = settings.opacity || DEFAULT_SETTINGS.opacity;
    const {r, g, b} = getThemeRGB();

    // 如果参数没变，跳过更新以避免不必要的 style 重计算
    if (isSameAsLastApplied(blurRadius, opacity, r, g, b)) {
        return;
    }

    // Apply to all targets
    for (const target of TARGETS) {
        applyFrostedGlassForTarget(target.id, blurRadius, opacity, r, g, b);
    }

    _lastApplied = {blurRadius, opacity, r, g, b};
};

// 防抖 MutationObserver：DOM 变化频繁时（如 xterm 终端渲染），
// 只在变化停止后的一次性执行，避免性能问题
let _observerTimer = null;

const initFrostedGlass = () => {
    const settings = getFrostedGlassSettings();
    applyFrostedGlass(settings);

    // 监听主题切换以清除 RGB 缓存
    // themePersistance.js 的 applyTheme 会触发 DOM 属性变化，
    // 我们可以监听 document.documentElement 的 attribute 变化
    const themeObserver = new MutationObserver(() => {
        clearThemeRGBCache();
        // 重新应用毛玻璃以使用新的主题颜色
        const currentSettings = getFrostedGlassSettings();
        if (currentSettings && currentSettings.enabled) {
            applyFrostedGlass(currentSettings);
        }
    });
    themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['style']
    });

    // 防抖的 MutationObserver：检测动态 DOM 变化（如弹窗打开/关闭）
    // 使用防抖避免在频繁 DOM 变化（如 xterm 终端渲染）时反复更新 style
    const domObserver = new MutationObserver(() => {
        if (_observerTimer) {
            clearTimeout(_observerTimer);
        }
        _observerTimer = setTimeout(() => {
            _observerTimer = null;
            const currentSettings = getFrostedGlassSettings();
            if (currentSettings && currentSettings.enabled) {
                applyFrostedGlass(currentSettings);
            }
        }, OBSERVER_DEBOUNCE_MS);
    });

    domObserver.observe(document.body || document.documentElement, {
        childList: true,
        subtree: true,
        attributes: false
    });
};

export {
    TARGETS,
    DEFAULT_SETTINGS,
    getFrostedGlassSettings,
    setFrostedGlassSettings,
    applyFrostedGlass,
    initFrostedGlass
};