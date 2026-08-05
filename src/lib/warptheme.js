import {getRotur} from './rotur/client.js';

const API = 'https://theme.bilup.org/api';
const TOKEN_KEY = 'mw:warptheme-token';
const TOKEN_MANAGER = 'https://accounts.bilup.org/token-manager';

const needsValidatorPermission = (status, data = {}) => (
    status === 401 ||
    status === 403 ||
    /validators:generate|permission|scope/i.test(String(data.error || data.message || ''))
);

const readToken = () => {
    try {
        return localStorage.getItem(TOKEN_KEY);
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

const request = async (path, token, options = {}) => {
    const response = await fetch(`${API}${path}`, {
        ...options,
        headers: {
            ...(options.body ? {'Content-Type': 'application/json'} : {}),
            ...(token ? {Authorization: `Bearer ${token}`} : {}),
            ...options.headers
        }
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.ok === false) {
        throw new Error(data.error || `BilupTheme request failed (${response.status})`);
    }
    return data;
};

const openSession = async expectedUsername => {
    let token = readToken();
    if (token) {
        try {
            const account = await request('/user', token);
            if (account.user.username.toLowerCase() === expectedUsername.toLowerCase()) return {token, ...account};
        } catch (_) {
            storeToken(null);
        }
    }

    const rotur = getRotur();
    if (!rotur.loggedIn || !rotur.token) throw new Error('Sign in with Bilup Accounts first.');

    // The BilupTheme backend (Bilup/BilupTheme) signs you in with a Bilup
    // Accounts token: it exchanges the token for a validator, verifies it, and
    // creates a session. The session id is returned and used as a bearer token
    // for the rest of the API (the backend must return it as `token`).
    const auth = await request('/auth/login', null, {
        method: 'POST',
        body: JSON.stringify({token: rotur.token})
    });
    if (!auth || !auth.token) {
        throw new Error((auth && auth.error) || 'Bilup Accounts could not authorize BilupTheme.');
    }
    token = auth.token;
    storeToken(token);
    const account = await request('/user', token);
    return {token, ...account};
};

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
    const colors = theme && typeof theme.getGuiColors === 'function' ? theme.getGuiColors() : {};
    const exported = theme && typeof theme.export === 'function' ? theme.export() : null;
    if (exported && exported.accent && Array.isArray(exported.accent.colors)) return exported;
    return {
        ...exported,
        name: (exported && exported.name) || (theme && theme.name) || 'My Bilup Theme',
        description: (exported && exported.description) || '',
        accent: {
            colors: [
                {color: colors['looks-secondary'] || '#4c97ff', position: 0},
                {color: colors['looks-tertiary'] || '#9966ff', position: 100}
            ],
            direction: 135
        },
        gui: (theme && theme.gui) || 'light',
        blocks: (theme && theme.blocks) || 'three',
        menuBarAlign: (theme && theme.menuBarAlign) || 'center',
        wallpaper: (theme && theme.wallpaper) || {},
        fonts: (theme && theme.fonts) || {system: [], google: []}
    };
};

export {
    API,
    TOKEN_MANAGER,
    readToken,
    storeToken,
    request,
    openSession,
    gradientStyle,
    exportCurrentTheme,
    needsValidatorPermission
};
