import {getItem as getStorageItem} from '../utils/safe-storage.js';
import {isGalleryExtensionUrl} from '../trusted-extension.js';

// Network access to api.bilup.org and accounts.bilup.org has been removed from
// this build. Everything below is either pure (storage / crypto) or a stub that
// fails fast, so callers keep their error-handling paths without ever
// contacting a Bilup host.

const SESSION_KEY = 'mw:mistwarp-session';

const OFFLINE_MESSAGE = 'Bilup API is unavailable: network access was removed from this build.';

const offlineError = () => {
    const error = new Error(OFFLINE_MESSAGE);
    error.code = 'OFFLINE';
    return error;
};

const loadSession = () => {
    try {
        return getStorageItem(SESSION_KEY) || null;
    } catch (e) {
        return null;
    }
};

const storeSession = token => {
    try {
        if (token) {
            localStorage.setItem(SESSION_KEY, token);
        } else {
            localStorage.removeItem(SESSION_KEY);
        }
    } catch (e) {
        // ignore
    }
};

// Kept for API compatibility: session lifecycle hooks still register, but no
// request can ever fire them now that the network layer is gone.
const onAuthInvalid = () => {};
const onBanned = () => {};

const exchangeValidator = () => Promise.reject(offlineError());

const runExchange = () => Promise.reject(offlineError());

const request = () => Promise.reject(offlineError());

const logout = () => {
    storeSession(null);
};

const createProject = () => Promise.reject(offlineError());

const uploadProject = () => Promise.reject(offlineError());

const publishProject = () => Promise.reject(offlineError());

const updateProject = () => Promise.reject(offlineError());

const checkProjectAssets = () => Promise.reject(offlineError());

const getProject = () => Promise.reject(offlineError());

const getEditorProject = () => Promise.reject(offlineError());

const remixProject = () => Promise.reject(offlineError());

const deleteProject = () => Promise.reject(offlineError());

const HANDOFF_KEY = 'mw:project-handoff';
const HANDOFF_MAX_AGE = 5 * 60 * 1000;

const stashProjectHandoff = project => {
    try {
        sessionStorage.setItem(HANDOFF_KEY, JSON.stringify({project, at: Date.now()}));
    } catch (e) {
        // ignore
    }
};

const takeProjectHandoff = id => {
    try {
        const raw = sessionStorage.getItem(HANDOFF_KEY);
        if (!raw) return null;
        sessionStorage.removeItem(HANDOFF_KEY);
        const {project, at} = JSON.parse(raw);
        if (!project || String(project.id) !== String(id)) return null;
        if (!at || Date.now() - at > HANDOFF_MAX_AGE) return null;
        return project;
    } catch (e) {
        return null;
    }
};

const getCustomExtensionUrls = project => {
    const urls = {...(project.extensionURLs || {})};
    for (const target of project.targets || []) {
        Object.assign(urls, (target && target.extensionURLs) || {});
    }
    return [...new Set(Object.values(urls).filter(url => typeof url === 'string' && !isGalleryExtensionUrl(url)))];
};

const hashExtensionUrl = async url => {
    const bytes = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(url)));
    return [...bytes].map(byte => byte.toString(16).padStart(2, '0')).join('');
};

export {
    loadSession,
    stashProjectHandoff,
    takeProjectHandoff,
    storeSession,
    exchangeValidator,
    runExchange,
    onAuthInvalid,
    onBanned,
    logout,
    createProject,
    uploadProject,
    publishProject,
    updateProject,
    checkProjectAssets,
    getProject,
    getEditorProject,
    remixProject,
    deleteProject,
    request,
    getCustomExtensionUrls,
    hashExtensionUrl
};
