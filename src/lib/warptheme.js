import {getItem as getStorageItem} from './utils/safe-storage.js';

// Network access to the BilupTheme backend (theme.bilup.org) has been removed
// from this build. Everything below is either pure (storage / data shaping) or
// a stub that fails fast, so callers keep their error-handling paths without
// ever contacting a Bilup host.

const TOKEN_KEY = 'mw:warptheme-token';

const OFFLINE_MESSAGE = 'BilupTheme is unavailable: network access was removed from this build.';

const offlineError = () => {
    const error = new Error(OFFLINE_MESSAGE);
    error.code = 'OFFLINE';
    return error;
};

const needsValidatorPermission = (status, data = {}) => (
    status === 401 ||
    status === 403 ||
    /validators:generate|permission|scope/i.test(String(data.error || data.message || ''))
);

const readToken = () => {
    try {
        return getStorageItem(TOKEN_KEY);
    } catch (_) {
        return null;
    }
};

const storeToken = token => {
    try {
        if (token) localStorage.setItem(TOKEN_KEY, token);
        else localStorage.removeItem(TOKEN_KEY);
    } catch (_) {
        // Storage can be unavailable in private mode.
    }
};

const request = () => Promise.reject(offlineError());

/**
 * The BilupTheme sign-in flow used to exchange a Bilup Accounts token for a
 * validator-backed session. That backend was removed from this build, so there
 * is no session to open.
 * @returns {Promise<never>} Always a rejected promise.
 */
const openSession = () => Promise.reject(offlineError());

const gradientStyle = theme => {
    if (!theme) return {};
    const colors = (theme.colors && theme.colors.gradient) ||
        (theme.accent && theme.accent.colors);
    if (!Array.isArray(colors) || colors.length < 1) return {};
    const direction = (theme.colors && theme.colors.gradientDirection) ||
        (theme.accent && theme.accent.direction) ||
        135;
    const stops = [...colors]
        .sort((a, b) => Number(a.position) - Number(b.position))
        .map(color => `${color.color} ${color.position}%`)
        .join(', ');
    return {background: `linear-gradient(${direction}deg, ${stops})`};
};

const exportCurrentTheme = theme => {
    // CustomTheme (or anything with a full export): keep it lossless — the
    // gui/blocks names plus a full gradient accent round-trip through import().
    const exported = theme && typeof theme.export === 'function' ? theme.export() : null;
    if (exported && exported.accent && Array.isArray(exported.accent.colors) &&
        exported.gui && exported.blocks) {
        return exported;
    }
    // Standard tw Theme (or a CustomTheme with a standard accent): export the
    // accent *name* plus the gui/blocks names. Previously a two-colour gradient
    // was built here, which collapsed the accent to just two stops and made the
    // uploaded theme look different after re-import.
    const accent = (theme && theme.accent) || (exported && exported.accent);
    return {
        ...(exported || {}),
        name: (exported && exported.name) || (theme && theme.name) || 'My Bilup Theme',
        description: (exported && exported.description) || (theme && theme.description) || '',
        accent: accent && (typeof accent === 'string' ||
            (typeof accent === 'object' && Array.isArray(accent.colors))) ?
            accent :
            {colors: [{color: '#4c97ff', position: 0}, {color: '#9966ff', position: 100}], direction: 135},
        gui: (exported && exported.gui) || (theme && theme.gui) || 'light',
        blocks: (exported && exported.blocks) || (theme && theme.blocks) || 'three',
        menuBarAlign: (exported && exported.menuBarAlign) || (theme && theme.menuBarAlign) || 'center',
        wallpaper: (exported && exported.wallpaper) || (theme && theme.wallpaper) ||
            {url: '', opacity: 0.3, darkness: 0, gridVisible: true, history: []},
        fonts: (exported && exported.fonts) || (theme && theme.fonts) || {system: [], google: [], history: []}
    };
};

export {
    readToken,
    storeToken,
    request,
    openSession,
    gradientStyle,
    exportCurrentTheme,
    needsValidatorPermission
};
