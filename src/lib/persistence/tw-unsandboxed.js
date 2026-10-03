import {getItem as getStorageItem, setItem as setStorageItem} from '../utils/safe-storage.js';
// All we save is whether the box was checked last time, nothing more.
// User still has to manually confirm loading the extension and has
// every opportunity to uncheck the box.

const PERSISTED_UNSANDBOXED_KEY = 'tw:persisted_unsandboxed';
const PERSISTED_GALLERY_TRUST_KEY = 'tw:persisted_unsandboxed_urls';

/**
 * @returns {boolean} True if persistence enabled
 */
const getPersistedUnsandboxed = () => {
    try {
        return getStorageItem(PERSISTED_UNSANDBOXED_KEY) === 'true';
    } catch (e) {
        return false;
    }
};

/**
 * @param {boolean} persisted True if persistence enabled
 */
const setPersistedUnsandboxed = persisted => {
    try {
        localStorage.setItem(PERSISTED_UNSANDBOXED_KEY, persisted === true);
    } catch (e) {
        // ignore
    }
};

/**
 * Per-gallery standing authorisation to run extensions without the sandbox.
 *
 * This is deliberately NOT the same thing as the checkbox above. The checkbox
 * only remembers how to pre-tick the prompt; the user still has to click through
 * for every extension, every session. Turning on a custom gallery's "run without
 * the sandbox" switch is a decision about a whole source, so it has to survive
 * two things the in-memory trust set does not: a project load (the set is
 * cleared on every `LOAD_PROGRESS`/"building") and a page refresh.
 *
 * Stored as `{extensionURL: [galleryId, ...]}` rather than a flat list so a gallery
 * can revoke exactly its own entries when the switch is turned back off. An array
 * of ids (not a single id) because two galleries may legitimately serve the same
 * extension URL -- with a single value, switching one off would silently drop the
 * other's authorisation.
 * @returns {Object<string, string[]>} Map of extension URL to gallery ids.
 */
const getPersistedGalleryTrust = () => {
    try {
        const parsed = JSON.parse(getStorageItem(PERSISTED_GALLERY_TRUST_KEY, '{}'));
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
        const trust = {};
        for (const url of Object.keys(parsed)) {
            const sources = parsed[url];
            if (Array.isArray(sources)) {
                const ids = sources.filter(id => typeof id === 'string' && id);
                if (ids.length) trust[url] = ids;
            } else if (typeof sources === 'string' && sources) {
                // Tolerate the single-id shape an earlier build wrote.
                trust[url] = [sources];
            }
        }
        return trust;
    } catch (e) {
        return {};
    }
};

/**
 * @param {Object<string, string[]>} trust Map of extension URL to gallery ids
 */
const writePersistedGalleryTrust = trust => {
    setStorageItem(PERSISTED_GALLERY_TRUST_KEY, JSON.stringify(trust));
};

/**
 * @param {string} url Extension URL to authorise
 * @param {string} galleryId Id of the gallery whose switch was turned on
 */
const addPersistedGalleryTrust = (url, galleryId) => {
    if (!url || !galleryId) return;
    const trust = getPersistedGalleryTrust();
    const sources = trust[url] || [];
    if (sources.includes(galleryId)) return;
    trust[url] = [...sources, galleryId];
    writePersistedGalleryTrust(trust);
};

/**
 * @param {string} galleryId Gallery whose authorisations should be withdrawn
 */
const removePersistedGalleryTrustBySource = galleryId => {
    if (!galleryId) return;
    const trust = getPersistedGalleryTrust();
    let changed = false;
    for (const url of Object.keys(trust)) {
        const remaining = trust[url].filter(id => id !== galleryId);
        if (remaining.length === trust[url].length) continue;
        changed = true;
        if (remaining.length) {
            trust[url] = remaining;
        } else {
            delete trust[url];
        }
    }
    if (changed) writePersistedGalleryTrust(trust);
};

export {
    getPersistedUnsandboxed,
    setPersistedUnsandboxed,
    getPersistedGalleryTrust,
    addPersistedGalleryTrust,
    removePersistedGalleryTrustBySource
};
