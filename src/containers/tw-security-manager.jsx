import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import log from '../lib/utils/log.js';
import bindAll from 'lodash.bindall';
import SecurityManagerModal from '../components/tw-security-manager-modal/security-manager-modal.jsx';
import SecurityModals from '../lib/constants/security-manager.js';
import {getPersistedUnsandboxed, setPersistedUnsandboxed} from '../lib/persistence/tw-unsandboxed.js';
import isTrustedExtensionUrl, {isGalleryExtensionUrl} from '../lib/trusted-extension.js';
import {getRememberedPlatformProjectState} from '../lib/community/publish.js';
import {extensionSourceUrl, hashExtensionUrl} from '../lib/community/api.js';

/* eslint-disable require-atomic-updates */

/**
 * Set of extension URLs that the user has manually trusted to load unsandboxed.
 */
const extensionsTrustedByUser = new Set();

const manuallyTrustExtension = url => {
    extensionsTrustedByUser.add(url);
};

/**
 * Set of extension URLs that are user-added custom extensions or from custom extension libraries.
 * These extensions should always prompt the user for sandbox permission, even if their URL
 * matches a trusted domain (e.g., gallery URLs).
 */
const customExtensionUrls = new Set();

/**
 * Mark an extension URL as a custom/user-added extension.
 * Custom extensions will always show a sandbox permission modal, regardless of URL origin.
 * @param {string} url The extension URL to mark as custom.
 */
const markExtensionAsCustom = url => {
    customExtensionUrls.add(url);
};

/**
 * Check if an extension URL is a custom/user-added extension.
 * @param {string} url The extension URL to check.
 * @returns {boolean} True if the extension was added by the user as a custom extension.
 */
const isCustomExtensionUrl = url => customExtensionUrls.has(url);

/**
 * Map of extension URL to its sandbox mode, populated when getSandboxMode is called.
 * This allows the UI to query the sandbox status of loaded extensions.
 * @type {Map<string, {mode: string, isCustom: boolean}>}
 */
const sandboxModeCache = new Map();

/**
 * Get the sandbox status label and color for a given extension URL.
 * @param {string} url The extension URL (or extensionId for built-in extensions).
 * @returns {{label: string, type: string}|null} The sandbox status, or null if unknown.
 *   - type: 'trusted' (green) - trusted default extension running unsandboxed
 *   - type: 'unsandboxed' (red) - custom extension running unsandboxed
 *   - type: 'sandboxed' (blue) - extension running in sandbox
 */
const getExtensionSandboxStatus = url => {
    const cached = sandboxModeCache.get(url);
    const isUnsandboxed = cached && cached.mode === 'unsandboxed';
    const isCustom = cached && cached.isCustom;

    if (isUnsandboxed && !isCustom) {
        return {label: '信任的', type: 'trusted'};
    }
    if (isUnsandboxed && isCustom) {
        return {label: '非沙盒', type: 'unsandboxed'};
    }
    if (cached && cached.mode !== 'unsandboxed') {
        return {label: '沙盒', type: 'sandboxed'};
    }
    return null;
};

const isPlatformProjectLoad = () => {
    try {
        const params = new URLSearchParams(location.search);
        return params.has('mw_assets') || params.has('platform_project') || /^#bl-/.test(location.hash);
    } catch (e) {
        return false;
    }
};

const isPlatformTrustedExtension = async url => {
    if (!isPlatformProjectLoad()) return false;
    const project = getRememberedPlatformProjectState();
    if (!project || !Array.isArray(project.trustedExtensions)) return false;
    return project.trustedExtensions.includes(await hashExtensionUrl(url));
};

/**
 * Trusted extensions are loaded automatically and without a sandbox.
 * @param {string} url URL as a string.
 * @returns {boolean} True if the extension can is trusted
 */
const isTrustedExtension = url => {
    const platformProject = isPlatformProjectLoad() && getRememberedPlatformProjectState();
    if (platformProject && Array.isArray(platformProject.trustedExtensions)) {
        return isGalleryExtensionUrl(url) || extensionsTrustedByUser.has(url);
    }
    return isTrustedExtensionUrl(url) || extensionsTrustedByUser.has(url);
};

const jsExecutionExtension = url => (/\/EvalPlus\.js$/i.test(url) ? 'EvalPlus' : null);

/**
 * How long a security prompt waits for an answer before it is treated as a
 * refusal.
 *
 * The answer has to be a refusal and not a rejection: every caller reads a false
 * result as "the user said no" and carries on (the extension is skipped, the
 * fetch is denied), but a rejected promise means the question could not be asked
 * at all and travels up as a failed load. An unanswered prompt used to reject
 * after 60s, which took the whole project down with it -- and, because the
 * sandbox question is asked while the loading overlay is up, a user who simply
 * looked away long enough got "invalid project" instead of their project
 * without that extension.
 *
 * Timers are throttled in background tabs, so this is a lower bound on the real
 * wait rather than a guarantee.
 * @const {number}
 */
const MODAL_TIMEOUT_MS = 30000;

const isOwnedPlatformProject = () => {
    const project = getRememberedPlatformProjectState();
    return Boolean(isPlatformProjectLoad() && project && project.isOwner === true);
};

const isLocalProjectUrl = url => {
    try {
        const parsed = new URL(url);
        return ['http:', 'https:'].includes(parsed.protocol) &&
            ['127.0.0.1', 'localhost'].includes(parsed.hostname);
    } catch (e) {
        return false;
    }
};

const canTrustLoadedProject = vm => {
    const projectUrl = typeof location === 'undefined' ?
        null :
        new URLSearchParams(location.search).get('project_url');
    return isOwnedPlatformProject() || Boolean(vm._mwCanTrustProject) || isLocalProjectUrl(projectUrl);
};

const fetchHostsTrustedByUser = new Set();
const embedHostsTrustedByUser = new Set();

const isUntrustedPath = parsed => /^\/cdn-cgi\//i.test(parsed.pathname);

const isAlwaysTrustedForFetching = parsed => (
    isTrustedExtension(parsed.href) ||
    parsed.origin === 'https://turbowarp.org' ||
    parsed.origin.endsWith('.turbowarp.org') ||
    parsed.origin.endsWith('.turbowarp.xyz') ||
    parsed.origin === 'https://raw.githubusercontent.com' ||
    parsed.origin === 'https://gist.githubusercontent.com' ||
    parsed.origin === 'https://api.github.com' ||
    parsed.origin === 'https://gitlab.com' ||
    parsed.origin.endsWith('.srht.site') ||
    parsed.origin.endsWith('.itch.io') ||
    parsed.origin === 'https://api.gamejolt.com' ||
    parsed.origin === 'https://httpbin.org' ||
    parsed.origin === 'https://scratchdb.lefty.one'
);

const FETCHABLE_PROTOCOLS = ['http:', 'https:', 'data:', 'blob:', 'ws:', 'wss:'];
const VISITABLE_PROTOCOLS = ['http:', 'https:', 'data:', 'blob:', 'mailto:', 'steam:', 'calculator:'];

/**
 * @param {string} url Original URL string
 * @param {string[]} protocols Allowed protocols
 * @returns {URL|null} A URL object if it is valid and uses an allowed protocol, otherwise null.
 */
const parseURL = (url, protocols) => {
    let parsed;
    try {
        parsed = new URL(url);
    } catch (e) {
        return null;
    }
    if (!protocols.includes(parsed.protocol)) {
        return null;
    }
    return parsed;
};

let allowedAudio = false;
let allowedVideo = false;
let allowedReadClipboard = false;
let allowedNotify = false;
let allowedGeolocation = false;

const SECURITY_MANAGER_METHODS = [
    'getSandboxMode',
    'canLoadExtensionFromProject',
    'rewriteExtensionURL',
    'canFetch',
    'canOpenWindow',
    'canRedirect',
    'canRecordAudio',
    'canRecordVideo',
    'canReadClipboard',
    'canNotify',
    'canGeolocate',
    'canEmbed',
    'canDownload'
];

const withSecurityBypass = (method, implementation, allowAll) => (...args) => {
    if (method === 'rewriteExtensionURL') return implementation(...args);
    return allowAll() ? (method === 'getSandboxMode' ? 'unsandboxed' : true) : implementation(...args);
};

class TWSecurityManagerComponent extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleAllowed',
            'handleDenied',
            'handleLoadAll',
            'handleProjectLoading'
        ]);
        bindAll(this, SECURITY_MANAGER_METHODS);
        this.nextModalCallbacks = [];
        this.modalLocked = false;
        this.state = {
            type: null,
            data: null,
            callback: null,
            modalCount: 0
        };
    }

    componentDidMount () {
        const vmSecurityManager = this.props.vm.extensionManager.securityManager;
        const propsSecurityManager = this.props.securityManager;
        for (const method of SECURITY_MANAGER_METHODS) {
            vmSecurityManager[method] = withSecurityBypass(
                method,
                propsSecurityManager[method] || this[method],
                () => this.props.vm.runtime._mwProjectTrusted === true ||
                    (typeof window !== 'undefined' && window.__mwAllowAllSecurity === true)
            );
        }
        this.props.vm.on('LOAD_PROGRESS', this.handleProjectLoading);
    }

    componentWillUnmount () {
        this.props.vm.off('LOAD_PROGRESS', this.handleProjectLoading);
    }

    // eslint-disable-next-line valid-jsdoc
    /**
     * @returns {Promise<{showModal: (type: string, data?: object) => Promise<boolean>}>}
     * Resolves with a function that shows the modal and answers whether the
     * request was approved. An unanswered prompt answers false after
     * MODAL_TIMEOUT_MS rather than leaving the caller -- and the load it is part
     * of -- waiting.
     */
    async acquireModalLock () {
        // We need a two-step process for showing a modal so that we don't overwrite or overlap modals,
        // and so that multiple attempts to fetch resources from the same origin will all be allowed
        // with just one click. This means that some places have to wait until previous modals are
        // closed before it knows if it needs to display another modal.
        if (this.modalLocked) {
            await new Promise(resolve => {
                this.nextModalCallbacks.push(resolve);
            });
        } else {
            this.modalLocked = true;
        }

        const releaseLock = () => {
            if (this.nextModalCallbacks.length) {
                const nextModalCallback = this.nextModalCallbacks.shift();
                nextModalCallback();
            } else {
                this.modalLocked = false;
                this.setState({
                    // only clear type in case other data needs to be accessed
                    type: null
                });
            }
        };

        // Show the prompt and answer with the user's decision. `closeModal` is
        // only needed when nobody answered: releaseLock() already clears the
        // modal when the answer came from a button, but a timed-out prompt has to
        // take itself off screen, or it would sit there answering nothing.
        const showModal = (type, data) => new Promise(resolve => {
            let answered = false;
            let timeoutId = null;

            /**
             * @param {boolean} value The answer to report.
             * @param {boolean} closeModal Whether this settlement must close the modal.
             */
            const settle = (value, closeModal) => {
                if (answered) return;
                answered = true;
                if (timeoutId !== null) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                resolve(value);
                if (closeModal) this.setState({type: null});
            };

            timeoutId = setTimeout(() => {
                log.info(`No answer to the ${type} security prompt within ${MODAL_TIMEOUT_MS}ms; ` +
                    'treating it as refused');
                settle(false, true);
            }, MODAL_TIMEOUT_MS);

            this.setState(oldState => ({
                type,
                data: data || {},
                callback: value => settle(value, false),
                modalCount: oldState.modalCount + 1
            }));
        }).then(answer => {
            releaseLock();
            return answer;
        });

        return {
            showModal,
            releaseLock
        };
    }

    handleAllowed () {
        this.state.callback(true);
    }

    handleDenied () {
        this.state.callback(false);
    }

    handleLoadAll () {
        this.props.vm.runtime._mwProjectTrusted = true;
        this.state.callback(true);
    }

    handleProjectLoading ({stage}) {
        if (stage !== 'building') return;
        this.props.vm.runtime._mwProjectTrusted = false;
        extensionsTrustedByUser.clear();
        customExtensionUrls.clear();
        sandboxModeCache.clear();
        fetchHostsTrustedByUser.clear();
        embedHostsTrustedByUser.clear();
        allowedAudio = false;
        allowedVideo = false;
        allowedReadClipboard = false;
        allowedNotify = false;
        allowedGeolocation = false;
    }

    /**
     * @param {string} url The extension's URL
     * @returns {string} The VM worker mode to use
     */
    async getSandboxMode (url) {
        let mode;
        // Custom/user-added extensions: only trust if manually trusted by user,
        // NOT based on gallery URL matching. This ensures custom extensions
        // always prompt the user for sandbox permission.
        if (isCustomExtensionUrl(url)) {
            if (extensionsTrustedByUser.has(url)) {
                log.info(`Loading custom extension ${url} unsandboxed (manually trusted)`);
                mode = 'unsandboxed';
            } else {
                log.info(`Loading custom extension ${url} sandboxed`);
                mode = 'iframe';
            }
        } else if (await isPlatformTrustedExtension(url) || isTrustedExtension(url)) {
            // Default extensions (built-in or from default gallery sources):
            // run unsandboxed directly without asking.
            log.info(`Loading extension ${url} unsandboxed`);
            mode = 'unsandboxed';
        } else {
            mode = 'iframe';
        }
        // Cache the sandbox mode for UI queries
        sandboxModeCache.set(url, {
            mode,
            isCustom: isCustomExtensionUrl(url)
        });
        return mode;
    }

    async rewriteExtensionURL (url) {
        const project = isPlatformProjectLoad() && getRememberedPlatformProjectState();
        if (project && project.id && project.projectJsonUrl && !isGalleryExtensionUrl(url)) {
            const rewritten = await extensionSourceUrl(project, url);
            return rewritten;
        }
        return url;
    }

    handleChangeUnsandboxed (e) {
        const checked = e.target.checked;
        this.setState(oldState => ({
            data: {
                ...oldState.data,
                unsandboxed: checked
            }
        }));
    }

    /**
     * @param {string} url The extension's URL
     * @returns {Promise<boolean>} Whether the extension can be loaded
     */
    async canLoadExtensionFromProject (url) {
        const dangerousJs = jsExecutionExtension(url);
        if (await isPlatformTrustedExtension(url)) {
            log.info(`Loading extension ${url} automatically`);
            return true;
        }
        // Custom/user-added extensions always prompt the user for permission,
        // even if their URL matches a trusted domain (e.g., gallery URLs).
        // This ensures users are aware of and consent to loading custom extensions.
        if (!dangerousJs && !isCustomExtensionUrl(url) && isTrustedExtension(url)) {
            log.info(`Loading extension ${url} automatically`);
            return true;
        }
        if (url === 'builtin:patching' || dangerousJs) {
            const {showModal} = await this.acquireModalLock();
            return showModal(SecurityModals.LoadExtension, {
                url,
                dangerousBuiltin: !dangerousJs,
                dangerousJs,
                unsandboxed: true
            });
        }
        if (this.props.vm.runtime._mwProjectTrusted === true) return true;
        const {showModal} = await this.acquireModalLock();
        let unsandboxed = getPersistedUnsandboxed();
        const allowed = await showModal(SecurityModals.LoadExtension, {
            url,
            unsandboxed,
            onChangeUnsandboxed: e => {
                unsandboxed = e.target.checked;
                this.handleChangeUnsandboxed(e);
            }
        });
        if (!allowed) return false;

        if (this.props.vm.runtime._mwProjectTrusted === true) {
            return true;
        }

        setPersistedUnsandboxed(unsandboxed);
        if (unsandboxed) {
            manuallyTrustExtension(url);
        }
        return true;
    }

    /**
     * @param {string} url The resource to fetch
     * @returns {Promise<boolean>} True if the resource is allowed to be fetched
     */
    async canFetch (url) {
        const parsed = parseURL(url, FETCHABLE_PROTOCOLS);
        if (!parsed) return false;
        if (isAlwaysTrustedForFetching(parsed)) return !isUntrustedPath(parsed);
        const {showModal, releaseLock} = await this.acquireModalLock();
        const host = ['http:', 'https:', 'ws:', 'wss:'].includes(parsed.protocol) ? parsed.host : null;
        if (host && fetchHostsTrustedByUser.has(host)) {
            releaseLock();
            return true;
        }
        const allowed = await showModal(SecurityModals.Fetch, {url});
        if (host && allowed) fetchHostsTrustedByUser.add(host);
        return allowed;
    }

    /**
     * @param {string} url The website to open
     * @returns {Promise<boolean>} True if the website can be opened
     */
    async canOpenWindow (url) {
        if (!parseURL(url, VISITABLE_PROTOCOLS)) return false;
        const {showModal} = await this.acquireModalLock();
        return showModal(SecurityModals.OpenWindow, {url});
    }

    /**
     * @param {string} url The website to redirect to
     * @returns {Promise<boolean>} True if the website can be redirected to
     */
    async canRedirect (url) {
        if (!parseURL(url, VISITABLE_PROTOCOLS)) return false;
        const {showModal} = await this.acquireModalLock();
        return showModal(SecurityModals.Redirect, {url});
    }

    /**
     * @returns {Promise<boolean>} True if audio can be recorded
     */
    async canRecordAudio () {
        if (!allowedAudio) {
            const {showModal} = await this.acquireModalLock();
            allowedAudio = await showModal(SecurityModals.RecordAudio);
        }
        return allowedAudio;
    }

    /**
     * @returns {Promise<boolean>} True if video can be recorded
     */
    async canRecordVideo () {
        if (!allowedVideo) {
            const {showModal} = await this.acquireModalLock();
            allowedVideo = await showModal(SecurityModals.RecordVideo);
        }
        return allowedVideo;
    }

    /**
     * @returns {Promise<boolean>} True if the clipboard can be read
     */
    async canReadClipboard () {
        if (!allowedReadClipboard) {
            const {showModal} = await this.acquireModalLock();
            allowedReadClipboard = await showModal(SecurityModals.ReadClipboard);
        }
        return allowedReadClipboard;
    }

    /**
     * @returns {Promise<boolean>} True if the notifications are allowed
     */
    async canNotify () {
        if (!allowedNotify) {
            const {showModal} = await this.acquireModalLock();
            allowedNotify = await showModal(SecurityModals.Notify);
        }
        return allowedNotify;
    }

    /**
     * @returns {Promise<boolean>} True if geolocation is allowed.
     */
    async canGeolocate () {
        if (!allowedGeolocation) {
            const {showModal} = await this.acquireModalLock();
            allowedGeolocation = await showModal(SecurityModals.Geolocate);
        }
        return allowedGeolocation;
    }

    /**
     * @param {string} url Frame URL
     * @returns {Promise<boolean>} True if embed is allowed.
     */
    async canEmbed (url) {
        const parsed = parseURL(url, FETCHABLE_PROTOCOLS);
        if (!parsed) return false;
        const host = ['http:', 'https:'].includes(parsed.protocol) ? parsed.host : null;
        const {showModal, releaseLock} = await this.acquireModalLock();
        if (host && embedHostsTrustedByUser.has(host)) {
            releaseLock();
            return true;
        }
        const allowed = await showModal(SecurityModals.Embed, {url});
        if (host && allowed) embedHostsTrustedByUser.add(host);
        return allowed;
    }

    /**
     * @param {string} url URL to download
     * @param {string} name Download filename
     * @returns {Promise<boolean>} Whether the download is allowed
     */
    async canDownload (url, name) {
        if (!parseURL(url, FETCHABLE_PROTOCOLS)) return false;
        const {showModal} = await this.acquireModalLock();
        return showModal(SecurityModals.Download, {url, name});
    }

    render () {
        if (this.state.type) {
            return (
                <SecurityManagerModal
                    type={this.state.type}
                    data={this.state.data}
                    showLoadAll={canTrustLoadedProject(this.props.vm)}
                    onAllowed={this.handleAllowed}
                    onDenied={this.handleDenied}
                    onLoadAll={this.handleLoadAll}
                    key={this.state.modalCount}
                />
            );
        }
        return null;
    }
}

TWSecurityManagerComponent.propTypes = {
    vm: PropTypes.shape({
        on: PropTypes.func.isRequired,
        off: PropTypes.func.isRequired,
        runtime: PropTypes.shape({
            on: PropTypes.func.isRequired,
            off: PropTypes.func.isRequired,
            _mwProjectTrusted: PropTypes.bool
        }).isRequired,
        extensionManager: PropTypes.shape({
            securityManager: PropTypes.shape(
                SECURITY_MANAGER_METHODS.reduce((obj, method) => {
                    obj[method] = PropTypes.func.isRequired;
                    return obj;
                }, {})
            ).isRequired
        }).isRequired
    }).isRequired,
    securityManager: PropTypes.shape(Object.fromEntries(SECURITY_MANAGER_METHODS.map(i => [i, PropTypes.func])))
};

TWSecurityManagerComponent.defaultProps = {
    securityManager: {}
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm
});

const mapDispatchToProps = () => ({});

const ConnectedSecurityManagerComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(TWSecurityManagerComponent);

export {
    ConnectedSecurityManagerComponent as default,
    manuallyTrustExtension,
    markExtensionAsCustom,
    isCustomExtensionUrl,
    getExtensionSandboxStatus,
    isTrustedExtension,
    isPlatformTrustedExtension,
    isOwnedPlatformProject,
    isLocalProjectUrl,
    canTrustLoadedProject
};