/**
 * Forgejo OAuth2 (PKCE) client for git.bilup.org.
 *
 * Flow: 主窗口 startGitOAuth() 开 popup → git.bilup.org 授权 →
 * popup 回调到 com.bilup.org/oauth/callback → handleOAuthPopupCallback()
 * 用 PKCE verifier 换 token → postMessage 给主窗口 → popup 关闭。
 *
 * Token 端点：POST https://git.bilup.org/login/oauth/access_token
 * 用户端点：GET  https://git.bilup.org/api/v1/user
 */

const CLIENT_ID = 'e4ea667b-1cae-4e59-86fd-3f141d709474';
const AUTHORIZE_ENDPOINT = 'https://git.bilup.org/login/oauth/authorize';
const TOKEN_ENDPOINT = 'https://git.bilup.org/login/oauth/access_token';
const USER_ENDPOINT = 'https://git.bilup.org/api/v1/user';
const REDIRECT_URI = `${typeof window === 'undefined' ?
    'https://com.bilup.org' :
    window.location.origin}/oauth/callback`;
// read:user -> 读取用户信息；write:repository -> 创建/删除/push 仓库
const SCOPES = 'read:user write:repository';

const TOKEN_KEY = 'mw:git-oauth';
const POPUP_STATE_KEY = 'mw:git-oauth-state';
const POPUP_STATE_TTL = 10 * 60 * 1000; // 10 分钟
const POPUP_WIDTH = 600;
const POPUP_HEIGHT = 720;

// ============== 工具函数 ==============

const base64url = bytes => {
    let str = '';
    for (let i = 0; i < bytes.length; i++) str += String.fromCharCode(bytes[i]);
    return btoa(str)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/[=]+$/, '');
};

const randomBytes = len => {
    const arr = new Uint8Array(len);
    crypto.getRandomValues(arr);
    return arr;
};

const randomString = len => base64url(randomBytes(len));

const sha256 = async str => {
    const data = new TextEncoder().encode(str);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return base64url(new Uint8Array(digest));
};

const buildPkce = async () => {
    const verifier = randomString(32);
    const challenge = await sha256(verifier);
    return {verifier, challenge};
};

// ============== Token 存取 ==============

let cachedUsername = null;

const loadTokens = () => {
    try {
        const raw = localStorage.getItem(TOKEN_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (_) {
        return null;
    }
};

const storeTokens = tokens => {
    try {
        if (tokens) {
            localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
        } else {
            localStorage.removeItem(TOKEN_KEY);
        }
    } catch (_) {
        // ignore
    }
};

export const getGitAccessToken = () => {
    const tokens = loadTokens();
    return tokens?.access_token || null;
};

export const clearGitTokens = () => {
    storeTokens(null);
    cachedUsername = null;
};

// ============== PKCE state（localStorage 共享给 popup）==============

const writePopupState = (state, verifier) => {
    try {
        localStorage.setItem(POPUP_STATE_KEY, JSON.stringify({
            state, verifier, at: Date.now()
        }));
    } catch (_) {
        // ignore
    }
};

const readPopupState = () => {
    try {
        const raw = localStorage.getItem(POPUP_STATE_KEY);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (!data || !data.at || Date.now() - data.at > POPUP_STATE_TTL) {
            return null;
        }
        return data;
    } catch (_) {
        return null;
    }
};

const clearPopupState = () => {
    try {
        localStorage.removeItem(POPUP_STATE_KEY);
    } catch (_) {
        // ignore
    }
};

// ============== 用户名缓存 ==============

export const getGitUsername = async () => {
    if (cachedUsername) return cachedUsername;
    const token = getGitAccessToken();
    if (!token) return null;
    try {
        const res = await fetch(USER_ENDPOINT, {
            headers: {Authorization: `token ${token}`}
        });
        if (res.ok) {
            const user = await res.json();
            // eslint-disable-next-line require-atomic-updates
            cachedUsername = user?.login || null;
        }
    } catch (_) {
        // ignore
    }
    return cachedUsername;
};

// ============== 启动 OAuth popup（主窗口调用）==============

let activeFlow = null;

export const startGitOAuth = () => new Promise((resolve, reject) => {
    if (activeFlow) {
        reject(new Error('Git OAuth popup already open'));
        return;
    }

    Promise.resolve()
        .then(async () => {
            const {verifier, challenge} = await buildPkce();
            const state = randomString(16);
            writePopupState(state, verifier);

            const params = new URLSearchParams({
                client_id: CLIENT_ID,
                redirect_uri: REDIRECT_URI,
                response_type: 'code',
                state,
                scope: SCOPES,
                code_challenge: challenge,
                code_challenge_method: 'S256'
            });
            const url = `${AUTHORIZE_ENDPOINT}?${params.toString()}`;

            const popup = window.open(
                url,
                'git-oauth',
                `width=${POPUP_WIDTH},height=${POPUP_HEIGHT},` +
                `left=${(window.screen.width - POPUP_WIDTH) / 2},` +
                `top=${(window.screen.height - POPUP_HEIGHT) / 2},` +
                'menubar=no,toolbar=no,location=no,status=no'
            );
            if (!popup) {
                clearPopupState();
                reject(new Error('Popup blocked. Allow popups for this site.'));
                return;
            }
            popup.focus();

            let pollTimer = null;
            const handleMessage = event => {
                if (event.origin !== window.location.origin) return;
                const payload = event.data;
                if (!payload || payload.type !== 'git-oauth-complete') return;
                window.removeEventListener('message', handleMessage);
                if (pollTimer) clearInterval(pollTimer);
                activeFlow = null;
                try {
                    popup.close();
                } catch (_) { // ignore
                }
                if (payload.error) {
                    reject(new Error(payload.error));
                } else if (payload.tokens) {
                    storeTokens(payload.tokens);
                    cachedUsername = null;
                    resolve(payload.tokens);
                } else {
                    reject(new Error('No tokens received from popup'));
                }
            };
            window.addEventListener('message', handleMessage);

            // 兜底：用户手动关 popup
            pollTimer = setInterval(() => {
                if (popup.closed) {
                    window.removeEventListener('message', handleMessage);
                    clearInterval(pollTimer);
                    activeFlow = null;
                    clearPopupState();
                    reject(new Error('OAuth popup closed by user'));
                }
            }, 500);

            activeFlow = {popup, pollTimer, handleMessage};
        })
        .catch(reject);
});

// ============== 在 popup 中处理 OAuth 回调 ==============

export const handleOAuthPopupCallback = async () => {
    // 只在 popup 中且 URL 是 /oauth/callback 时执行
    if (typeof window === 'undefined' || !window.opener) return false;
    const url = new URL(window.location.href);
    if (url.pathname !== '/oauth/callback') return false;

    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    const error = url.searchParams.get('error');
    const errorDescription = url.searchParams.get('error_description');

    const postToOpener = payload => {
        try {
            window.opener.postMessage(
                {type: 'git-oauth-complete', ...payload},
                window.location.origin
            );
        } catch (_) { // ignore
        }
        // 给 opener 100ms 处理消息再关窗
        setTimeout(() => {
            try {
                window.close();
            } catch (_) { // ignore
            }
        }, 100);
    };

    if (error) {
        postToOpener({error: errorDescription || error});
        return true;
    }
    if (!code) {
        postToOpener({error: 'No authorization code in callback'});
        return true;
    }

    const stored = readPopupState();
    if (!stored || stored.state !== state) {
        postToOpener({error: 'OAuth state mismatch'});
        return true;
    }

    try {
        const res = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                grant_type: 'authorization_code',
                code,
                redirect_uri: REDIRECT_URI,
                client_id: CLIENT_ID,
                code_verifier: stored.verifier
            })
        });
        if (!res.ok) {
            const text = await res.text().catch(() => '');
            throw new Error(`Token exchange failed (${res.status}): ${text}`);
        }
        const tokens = await res.json();
        if (!tokens.access_token) {
            throw new Error('No access_token in token response');
        }
        clearPopupState();
        postToOpener({tokens});
        return true;
    } catch (e) {
        postToOpener({error: e.message || 'Token exchange failed'});
        return true;
    }
};

// ============== 401 自动 refresh（如支持）==============

let refreshInFlight = null;

export const refreshGitToken = () => {
    if (refreshInFlight) return refreshInFlight;
    refreshInFlight = (async () => {
        const tokens = loadTokens();
        if (!tokens?.refresh_token) {
            throw new Error('Git OAuth token expired, reauthorization required');
        }
        const res = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                grant_type: 'refresh_token',
                refresh_token: tokens.refresh_token,
                client_id: CLIENT_ID
            })
        });
        if (!res.ok) {
            const text = await res.text().catch(() => '');
            throw new Error(`Token refresh failed (${res.status}): ${text}`);
        }
        const fresh = await res.json();
        if (!fresh.access_token) {
            throw new Error('No access_token in refresh response');
        }
        storeTokens({...tokens, ...fresh});
        cachedUsername = null;
        return fresh.access_token;
    })().finally(() => {
        refreshInFlight = null;
    });
    return refreshInFlight;
};

// ============== 便捷方法 ==============

export const isGitAuthenticated = () => Boolean(getGitAccessToken());

export {CLIENT_ID, REDIRECT_URI, SCOPES};
