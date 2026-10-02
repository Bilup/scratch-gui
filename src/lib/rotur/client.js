// Bilup Accounts integration is disabled: no rotur-sdk dependency.
// All methods are stubbed to the "not logged in" path so downstream UI
// automatically degrades (no sessions, no notifications, no credits).

const ACTIVITY_ID = 'Bilup';
const APP_URL = 'https://com.bilup.org/';
const APP_IMAGE = 'https://raw.githubusercontent.com/Bilup/desktop/master/art/icon.png';

const createStubClient = () => ({
    loggedIn: false,
    token: null,
    socket: null,
    me: {},
    notifications: {},
    setToken: () => {},
    logout: () => {},
    connectSocket: async () => {},
    login: async () => {}
});

/** @type {ReturnType<typeof createStubClient>|null} */
let client = null;

const getClient = () => {
    if (!client) {
        client = createStubClient();
    }
    return client;
};

/**
 * Avatars used to be served from avatars.accounts.bilup.org. That host was
 * removed from this build, so there is no avatar URL to return.
 * @returns {null} Always null.
 */
const getAvatarUrl = () => null;

/**
 * Restore a previous session from localStorage.
 * @returns {Promise<null>} Always resolves to null.
 */
const restoreSession = () => Promise.resolve(null);

/**
 * The Bilup Accounts login flow was removed from this build, so there is no
 * auth URL to send the user to.
 * @returns {string} Empty string.
 */
const buildAuthUrl = () => '';

/**
 * Open the Bilup Accounts login flow (disabled).
 * @returns {Promise<never>} Always a rejected promise.
 */
const login = () => {
    const error = new Error('登录已禁用');
    error.needsReauth = true;
    return Promise.reject(error);
};

const clearActivity = () => {};

const logout = () => {
    getClient().logout();
};

/**
 * Whether the current token may publish status/activity over the status socket.
 * @returns {Promise<boolean>} Always false.
 */
const presenceSupported = () => Promise.resolve(false);

const subscribeNotifications = () => () => {};
const subscribeNotificationRemovals = () => () => {};

/**
 * Publish Bilup editing presence (disabled).
 */
const syncActivity = async () => {};

const isLoggedIn = () => getClient().loggedIn;
const getRotur = () => getClient();

const fetchNotifications = () => Promise.resolve([]);

const markNotificationsRead = () => Promise.resolve(false);

const ensureScopes = () => Promise.resolve(false);

const getBalance = () => Promise.resolve(null);

const getAccountSummary = () => Promise.resolve(null);

const payUser = () => {
    const error = new Error('Log in to send credits');
    error.needsReauth = true;
    return Promise.reject(error);
};

const claimDaily = () => {
    const error = new Error('Log in to claim daily credits');
    error.needsReauth = true;
    return Promise.reject(error);
};

const fetchCurrentUser = () => Promise.resolve(null);

export {
    ACTIVITY_ID,
    APP_URL,
    APP_IMAGE,
    getAvatarUrl,
    buildAuthUrl,
    restoreSession,
    login,
    logout,
    subscribeNotifications,
    subscribeNotificationRemovals,
    syncActivity,
    clearActivity,
    isLoggedIn,
    presenceSupported,
    getRotur,
    fetchCurrentUser,
    getBalance,
    getAccountSummary,
    payUser,
    claimDaily,
    ensureScopes,
    fetchNotifications,
    markNotificationsRead
};
