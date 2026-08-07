import {
    getGitAccessToken,
    getGitUsername,
    clearGitTokens,
    refreshGitToken
} from './git-oauth.js';

const GIT_HOST = 'https://git.bilup.org';
const API_BASE = `${GIT_HOST}/api/v1`;
const PAGE_SIZE = 50;
const MAX_PAGES = 10;

// 获取 Forgejo OAuth access_token。如果没有 token，抛出 GIT_AUTH_REQUIRED 错误，
// 上层可以捕获后调用 startGitOAuth() 触发 popup 授权。
const requireToken = () => {
    const token = getGitAccessToken();
    if (!token) {
        const error = new Error('Bilup Git 未授权，请连接 Bilup Accounts Git');
        error.code = 'GIT_AUTH_REQUIRED';
        throw error;
    }
    return token;
};

// 兼容旧 API：清缓存改成清 OAuth tokens。
const clearGitAuth = () => {
    clearGitTokens();
};

// 统一请求封装：自动注入 Bearer，401 时尝试 refresh 一次后重试。
const apiFetch = async (path, {method = 'GET', body, _retried = false} = {}) => {
    const token = requireToken();
    const headers = {Authorization: `token ${token}`};
    const init = {method, headers};
    if (body) {
        headers['Content-Type'] = 'application/json';
        init.body = JSON.stringify(body);
    }
    const response = await fetch(`${API_BASE}${path}`, init);
    // 401 → 尝试 refresh 后重试一次
    if (response.status === 401 && !_retried) {
        try {
            await refreshGitToken();
            return apiFetch(path, {method, body, _retried: true});
        } catch (_) {
            // refresh 失败，继续走原 401 错误流程
        }
    }
    if (!response.ok) {
        let message = `Bilup Git request failed (${response.status})`;
        try {
            const data = await response.json();
            if (data && data.message) {
                message = data.message;
            }
        } catch (e) {
            // ignore
        }
        const error = new Error(message);
        error.status = response.status;
        if (response.status === 401) {
            error.code = 'GIT_AUTH_REQUIRED';
        }
        throw error;
    }
    if (response.status === 204) {
        return null;
    }
    return response.json();
};

const normalizeRepo = repo => ({
    name: repo.name,
    fullName: repo.full_name,
    owner: repo.owner ? repo.owner.login : null,
    description: repo.description || '',
    isPrivate: Boolean(repo.private),
    defaultBranch: repo.default_branch || 'main',
    htmlUrl: repo.html_url || `${GIT_HOST}/${repo.full_name}`,
    cloneUrl: repo.clone_url || `${GIT_HOST}/${repo.full_name}.git`,
    updatedAt: repo.updated_at || null,
    isEmpty: Boolean(repo.empty)
});

const listMyRepos = async () => {
    const repos = [];
    for (let page = 1; page <= MAX_PAGES; page++) {
        const batch = await apiFetch(`/user/repos?page=${page}&limit=${PAGE_SIZE}`);
        if (!Array.isArray(batch) || batch.length === 0) {
            break;
        }
        repos.push(...batch);
        if (batch.length < PAGE_SIZE) {
            break;
        }
    }
    return repos.map(normalizeRepo);
};

const getRepo = async (owner, name) => {
    const repo = await apiFetch(`/repos/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`);
    return normalizeRepo(repo);
};

const createRepo = async ({name, description = '', isPrivate = false, defaultBranch = 'main'}) => {
    const repo = await apiFetch('/user/repos', {
        method: 'POST',
        body: {
            name,
            description,
            private: isPrivate,
            default_branch: defaultBranch,
            auto_init: false
        }
    });
    return normalizeRepo(repo);
};

const deleteRepo = (owner, name) => apiFetch(
    `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`,
    {method: 'DELETE'}
);

// 暴露给 isomorphic-git 等 Basic Auth 客户端使用。
// Forgejo 同时接受 token 当作 Basic Auth 的 password，
// 所以这里返回 {username, password: token} 仍可工作。
const getAuth = async () => {
    const token = requireToken();
    const username = (await getGitUsername()) || 'oauth2';
    return {username, password: token};
};

const getRemoteUrl = (owner, name) => `${GIT_HOST}/${encodeURIComponent(owner)}/${encodeURIComponent(name)}.git`;

const isRoturGitUrl = url => {
    try {
        return new URL(url).host === new URL(GIT_HOST).host;
    } catch (e) {
        return false;
    }
};

const parseRepoUrl = url => {
    if (!url || typeof url !== 'string') {
        return null;
    }
    if (isRoturGitUrl(url)) {
        try {
            const segments = new URL(url).pathname.split('/').filter(Boolean);
            if (segments.length >= 2) {
                const owner = decodeURIComponent(segments[0]);
                const name = decodeURIComponent(segments[1]).replace(/\.git$/i, '');
                if (owner && name) {
                    return {owner, name, fullName: `${owner}/${name}`};
                }
            }
        } catch (e) {
            return null;
        }
        return null;
    }
    const match = url.trim().match(/^([^/\s]+)\/([^/\s]+?)(?:\.git)?$/);
    if (match) {
        return {owner: match[1], name: match[2], fullName: `${match[1]}/${match[2]}`};
    }
    return null;
};

export {
    GIT_HOST,
    listMyRepos,
    getRepo,
    createRepo,
    deleteRepo,
    getAuth,
    getGitUsername,
    getRemoteUrl,
    isRoturGitUrl,
    parseRepoUrl,
    clearGitAuth
};
