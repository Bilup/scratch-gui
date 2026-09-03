import {getItem as getStorageItem} from './utils/safe-storage.js';

const storageKey = id => `mw:${id}`;

const safeGetItem = key => {
    try {
        return getStorageItem(key);
    } catch (err) {
        return null;
    }
};

// Static CSS presets for the simple toggles (square corners, hidden buttons, etc.).
// `frosted-glass` has no static CSS — its style block is generated at runtime by
// `applyFrostedGlass()` so the slider parameters can take effect.
const APPEARANCE_SETTINGS = [
    {
        id: 'square-stage-corners',
        css: '[class*="stage_section"],[class*="stage_green-flag-overlay-wrapper"]{border-radius:0 !important;}'
    },
    {
        id: 'hide-delete-button',
        css: '[data-tabs] > :nth-child(3) div[class*="delete-button_delete-button_"],' +
            '[data-tabs] > :nth-child(4) div[class*="delete-button_delete-button_"],' +
            'div[class*="sprite-selector_sprite-wrapper_"] div[class*="delete-button_delete-button_"]{display:none;}'
    },
    {
        id: 'hide-extension-button',
        css: '[class*="extension-button-container"]{display:none !important;}'
    },
    {
        id: 'hide-backpack',
        css: '[class^="uppack_backpack-container"]{display:none;}'
    },
    {
        id: 'unclip-palette',
        default: true,
        css: '.injectionDiv:has(> .blocklyToolboxDiv:hover, > svg.blocklyFlyout:not(.sa-flyoutClose):hover)' +
            ' > svg.blocklyFlyout:not(.sa-flyoutClose){overflow:visible;}' +
            '.injectionDiv:has(> .blocklyToolboxDiv:hover, > svg.blocklyFlyout:not(.sa-flyoutClose):hover)' +
            ' #blocklyBlockMenuClipRect{width:100000px;}'
    },
    {
        id: 'frosted-glass',
        css: ''
    }
];

const elementId = id => `mw-appearance-${id}`;

const defaultValue = id => {
    const setting = APPEARANCE_SETTINGS.find(s => s.id === id);
    return !!(setting && setting.default);
};

const getAppearanceSetting = id => {
    const stored = safeGetItem(storageKey(id));
    return stored === null ? defaultValue(id) : stored === 'true';
};

// Frosted glass parameter storage. Each parameter has its own localStorage key
// so individual sliders don't wipe unrelated settings.
const FROSTED_GLASS_PARAMS = {
    blur: {storageKey: 'mw:fg-blur', default: 16, min: 0, max: 40},
    saturation: {storageKey: 'mw:fg-saturation', default: 180, min: 0, max: 300},
    border: {storageKey: 'mw:fg-border', default: 35, min: 0, max: 100},
    alpha: {storageKey: 'mw:fg-alpha', default: 15, min: 0, max: 100}
};

// In-memory cache so slider changes apply immediately even when localStorage
// is unavailable (privacy mode / disabled storage in embedded webviews). The
// cached object is the single source of truth while the app is running;
// localStorage is only best-effort persistence on top of it.
let frostedGlassCache = null;

const readNumberParam = param => {
    const stored = safeGetItem(param.storageKey);
    if (stored === null) {
        return param.default;
    }
    const n = parseFloat(stored);
    if (!Number.isFinite(n)) {
        return param.default;
    }
    return Math.max(param.min, Math.min(param.max, n));
};

const loadFrostedGlassCache = () => {
    frostedGlassCache = {
        enabled: getAppearanceSetting('frosted-glass'),
        blur: readNumberParam(FROSTED_GLASS_PARAMS.blur),
        saturation: readNumberParam(FROSTED_GLASS_PARAMS.saturation),
        border: readNumberParam(FROSTED_GLASS_PARAMS.border),
        alpha: readNumberParam(FROSTED_GLASS_PARAMS.alpha)
    };
};

const getFrostedGlassParams = () => {
    if (!frostedGlassCache) {
        loadFrostedGlassCache();
    }
    // Return a shallow copy: consumers (React state) use the return value as a
    // new reference so shallow comparison detects the change and re-renders.
    return {...frostedGlassCache};
};

const clampNumber = (value, param) =>
    Math.max(param.min, Math.min(param.max, Number.isFinite(value) ? value : param.default));

// Each panel has a base blur/alpha; the slider values scale them proportionally
// so visual layering (more-opaque notification, less-opaque stage wrapper) is
// preserved no matter where the user moves the sliders. baseAlpha intentionally
// stays below 0.5 everywhere — the point of frosted glass is to see THROUGH
// the panel, so we keep them transparent enough that content behind shows.
const PANEL_TARGETS = [
    {selector: '.blocklyToolboxDiv', baseBlur: 24, baseAlpha: 0.30},
    {selector: '.blocklyFlyout', baseBlur: 24, baseAlpha: 0.22},
    {selector: '[class*="stage-wrapper_stage-wrapper_"]', baseBlur: 16, baseAlpha: 0.18},
    {selector: '[class*="asset-panel_wrapper_"]', baseBlur: 16, baseAlpha: 0.30},
    {selector: '[class*="sprite-selector_scroll-wrapper_"]', baseBlur: 16, baseAlpha: 0.30},
    {selector: '[class*="stage-header_stage-header-wrapper-overlay_"]', baseBlur: 16, baseAlpha: 0.30},
    {selector: '[class*="selector_wrapper_"]', baseBlur: 16, baseAlpha: 0.30},
    {selector: '.addon-window', baseBlur: 28, baseAlpha: 0.55},
    {selector: '.mw-glass-notification', baseBlur: 20, baseAlpha: 0.60},
    {selector: '[class*="menu-bar_menuBarMenu_"]', baseBlur: 24, baseAlpha: 0.45}
];

// Theme mode detection: the theme pipeline writes --color-scheme: light|dark
// onto :root (see src/lib/themes/guiHelpers.js). Fall back to ui-primary
// luminance if the variable is missing for some reason.
const detectDarkTheme = () => {
    try {
        const scheme = document.documentElement.style.getPropertyValue('--color-scheme').trim();
        if (scheme === 'dark') return true;
        if (scheme === 'light') return false;
        const computed = window.getComputedStyle(document.documentElement);
        const resolved = computed.getPropertyValue('--color-scheme').trim();
        if (resolved === 'dark') return true;
    } catch (err) {
        // ignore - fall through to luminance check
    }
    try {
        const rgb = window.getComputedStyle(document.documentElement)
            .getPropertyValue('--ui-primary-rgb')
            .trim();
        const channels = rgb.split(',').map(Number);
        if (channels.length === 3 && channels.every(Number.isFinite)) {
            return (channels[0] + channels[1] + channels[2]) / 3 < 128;
        }
    } catch (err) {
        // ignore
    }
    return false;
};

// Frosted glass needs something to blur. backdrop-filter over a flat solid
// color produces no visible effect, which is why plain translucent panels
// never read as "frosted glass". Instead of injecting colorful spots (rejected
// by the user), we paint a soft NEUTRAL light/dark shading on the workspace
// root behind the panels. It stays in the theme's own tone family (pure
// black/white washes, no hue), adapts to light/dark mode, and gives every
// glass panel a soft gradient to diffuse — so the default parameters already
// look like translucent frosted glass.
const buildFrostedBackdropCss = dark => {
    if (dark) {
        // Dark mode: deep corner vignettes + a faint cool highlight at the top.
        return '[class*="gui_body-wrapper_"],.gui_body-wrapper{background-color:var(--ui-primary,#20232d)!important;' +
            'background-image:' +
            'radial-gradient(1200px 700px at 18% -12%,rgba(255,255,255,0.10),transparent 60%),' +
            'radial-gradient(900px 900px at 88% 12%,rgba(255,255,255,0.05),transparent 55%),' +
            'radial-gradient(1400px 900px at 70% 108%,rgba(0,0,0,0.35),transparent 65%),' +
            'radial-gradient(1000px 700px at 8% 100%,rgba(0,0,0,0.25),transparent 60%)!important;' +
            'background-attachment:fixed!important;}';
    }
    return '[class*="gui_body-wrapper_"],.gui_body-wrapper{background-color:var(--ui-primary,#e5f0ff)!important;' +
        'background-image:' +
        'radial-gradient(1200px 700px at 15% -10%,rgba(255,255,255,0.9),transparent 60%),' +
        'radial-gradient(900px 900px at 90% 8%,rgba(255,255,255,0.65),transparent 55%),' +
        'radial-gradient(1500px 900px at 75% 110%,rgba(0,0,0,0.05),transparent 62%),' +
        'radial-gradient(1100px 800px at 5% 102%,rgba(0,0,0,0.05),transparent 58%)!important;' +
        'background-attachment:fixed!important;}';
};

const buildFrostedGlassCss = params => {
    const blurScale = params.blur / 16;
    const alphaOffset = (params.alpha - 15) / 100;
    const sat = Math.round(params.saturation);
    const dark = detectDarkTheme();
    // The whole point of frosted glass is to see through, so the border is
    // intentionally a whisper-thin hairline. Default slider value (border=35)
    // maps to roughly 0.06-0.08 alpha — just enough to outline the panel
    // without making it feel solid.
    const borderFrac = params.border / 100;
    const borderColor = dark ?
        `rgba(255,255,255,${((borderFrac * 0.04) + 0.04).toFixed(2)})` :
        `rgba(0,0,0,${((borderFrac * 0.06) + 0.06).toFixed(2)})`;
    return PANEL_TARGETS.map(panel => {
        const finalBlur = Math.max(0, Math.min(40, Math.round(panel.baseBlur * blurScale)));
        const finalAlpha = Math.max(0.05, Math.min(0.9, panel.baseAlpha + alphaOffset)).toFixed(2);
        return `${panel.selector}{` +
            `background-color:rgba(var(--ui-primary-rgb,229,240,255),${finalAlpha})!important;` +
            `-webkit-backdrop-filter:blur(${finalBlur}px) saturate(${sat}%)!important;` +
            `backdrop-filter:blur(${finalBlur}px) saturate(${sat}%)!important;` +
            `border:1px solid ${borderColor}!important;` +
        `}`;
    }).join('');
};

const buildFrostedGlassFallback = params => {
    const alphaOffset = (params.alpha - 15) / 100;
    return PANEL_TARGETS.map(panel => {
        const finalAlpha = Math.max(0.6, Math.min(0.95, panel.baseAlpha + alphaOffset)).toFixed(2);
        return `${panel.selector}{` +
            `background-color:rgba(var(--ui-primary-rgb,229,240,255),${finalAlpha})!important;` +
        `}`;
    }).join('');
};

const FROSTED_GLASS_STYLE_ID = 'mw-appearance-frosted-glass-main';
const FROSTED_GLASS_FALLBACK_ID = 'mw-appearance-frosted-glass-fallback';

const ensureStyleEl = (id, parent) => {
    let el = document.getElementById(id);
    if (!el) {
        el = document.createElement('style');
        el.id = id;
        parent.appendChild(el);
    }
    return el;
};

const applyFrostedGlass = () => {
    const params = getFrostedGlassParams();
    const mainEl = ensureStyleEl(FROSTED_GLASS_STYLE_ID, document.head);
    const fallbackEl = ensureStyleEl(FROSTED_GLASS_FALLBACK_ID, document.head);

    if (!params.enabled) {
        mainEl.textContent = '';
        fallbackEl.textContent = '';
        return;
    }

    const supported = buildFrostedGlassCss(params);
    const fallback = buildFrostedGlassFallback(params);
    const backdrop = buildFrostedBackdropCss(detectDarkTheme());
    mainEl.textContent =
        `@supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)){${supported}${backdrop}}`;
    fallbackEl.textContent =
        `@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))){${fallback}${backdrop}}`;
};

const setFrostedGlassParam = (name, value) => {
    const param = FROSTED_GLASS_PARAMS[name];
    if (!param) return;
    const clamped = clampNumber(parseFloat(value), param);
    // Update the in-memory cache first so the change takes effect even when
    // localStorage writes fail (privacy mode / disabled storage).
    if (!frostedGlassCache) {
        loadFrostedGlassCache();
    }
    frostedGlassCache[name] = clamped;
    try {
        localStorage.setItem(param.storageKey, String(clamped));
    } catch (err) {
        // ignore
    }
    applyFrostedGlass();
};

const applyAppearanceSetting = (id, enabled) => {
    const setting = APPEARANCE_SETTINGS.find(s => s.id === id);
    if (!setting) return;
    if (id === 'frosted-glass') {
        // Keep the in-memory param cache in sync with the on/off toggle so
        // applyFrostedGlass sees the new state immediately even when
        // localStorage is unavailable.
        if (!frostedGlassCache) {
            loadFrostedGlassCache();
        }
        frostedGlassCache.enabled = enabled;
        applyFrostedGlass();
        return;
    }
    const existing = document.getElementById(elementId(id));
    if (enabled) {
        if (existing) return;
        const style = document.createElement('style');
        style.id = elementId(id);
        style.textContent = setting.css;
        document.head.appendChild(style);
    } else if (existing) {
        existing.remove();
    }
};

const setAppearanceSetting = (id, enabled) => {
    try {
        localStorage.setItem(storageKey(id), enabled);
    } catch (err) {
        // ignore
    }
    applyAppearanceSetting(id, enabled);
};

// Apply all appearance settings on initial load.
const initAppearanceSettings = () => {
    for (const setting of APPEARANCE_SETTINGS) {
        applyAppearanceSetting(setting.id, getAppearanceSetting(setting.id));
    }
    // Regenerate frosted glass whenever the theme (light/dark) changes, since
    // border colors are chosen based on --color-scheme at generation time.
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
        window.addEventListener('mw:theme-applied', applyFrostedGlass);
    }
};

export {
    APPEARANCE_SETTINGS,
    getAppearanceSetting,
    setAppearanceSetting,
    applyAppearanceSetting,
    initAppearanceSettings,
    getFrostedGlassParams,
    setFrostedGlassParam
};
