/**
 * @file Renders block previews by building real ScratchBlocks blocks and cloning their SVG,
 * instead of drawing simplified approximations. Doing it this way means C blocks, nested stacks,
 * fields, fonts and theme colours are identical to what the editor renders.
 *
 * Two features share this module:
 * - the middle click popup (spotlight), which previews block *types* from the palette;
 * - the find bar, which previews blocks that already exist in the project.
 *
 * Rendering a block the real way is not cheap, so two things keep it fast:
 * - {@link beginPreviewBatch} suspends the workspace resize for the whole batch of previews.
 *   Every created and disposed block would otherwise re-measure the bounding box of the entire
 *   project (O(blocks)), which costs far more than rendering the previews themselves.
 * - Finished previews are cached, so only the rows that actually changed are built again.
 */

import {BlockInstance} from '../spotlight/BlockTypeInfo.js';

const SVG_NS = 'http://www.w3.org/2000/svg';

/**
 * Extra vertical padding, in block units, added above and below a rendered block.
 * @type {number}
 */
const BLOCK_ROW_INSET = 6;

/**
 * How many rendered previews to keep for reuse.
 * @type {number}
 */
const CACHE_LIMIT = 64;

/**
 * Rendered previews, keyed by {@link getPreviewKey} or {@link getWorkspacePreviewKey},
 * oldest entry first. Values are `{node, width, height, top, rowHeight}` where `node` is a
 * detached clone.
 * @type {Map<string, object>}
 */
const previewCache = new Map();

/**
 * Stable identity per block type. Block *ids* are not unique enough (every custom block call
 * is a `procedures_call`), so the key has to identify the type instead.
 * @type {WeakMap<object, number>}
 */
const typeKeys = new WeakMap();
let nextTypeKey = 0;

/**
 * The block colours the cache was rendered with, see {@link getThemeSignature}.
 * @type {string|null}
 */
let themeSignature = null;

let batchDepth = 0;
let batchWorkspace = null;

/**
 * Creates an SVG element.
 * @param {string} name The tag name.
 * @returns {SVGElement} The element.
 */
const createSvgElement = name => document.createElementNS(SVG_NS, name);

/**
 * Gets a stable key for a block type.
 * @param {object} typeInfo The block type info.
 * @returns {number} The key.
 */
const getTypeKey = typeInfo => {
    let key = typeKeys.get(typeInfo);
    if (typeof key !== 'number') {
        nextTypeKey++;
        key = nextTypeKey;
        typeKeys.set(typeInfo, key);
    }
    return key;
};

/**
 * Appends everything that changes how a block looks, apart from its type, to `parts`.
 * @param {BlockInstance} blockInstance The block to describe.
 * @param {Array<string|number>} parts The array to append to.
 */
const appendInstanceKey = (blockInstance, parts) => {
    parts.push(getTypeKey(blockInstance.typeInfo));
    const inputs = blockInstance.inputs || [];
    parts.push(inputs.length);
    for (let i = 0; i < inputs.length; i++) {
        const value = inputs[i];
        if (value instanceof BlockInstance) {
            appendInstanceKey(value, parts);
        } else if (value && typeof value === 'object' && 'value' in value) {
            // Dropdown values may be passed as `{value, string}` options or as the value itself.
            parts.push(String(value.value));
        } else if (value && typeof value === 'object') {
            parts.push(JSON.stringify(value));
        } else {
            parts.push(String(value));
        }
    }
};

/**
 * Gets a key describing exactly what a preview of a block type will look like.
 * @param {BlockInstance} blockInstance The block to describe.
 * @returns {string} The cache key.
 */
const getPreviewKey = blockInstance => {
    const parts = [themeSignature ?? ''];
    try {
        appendInstanceKey(blockInstance, parts);
    } catch (error) {
        // Anything that can not be described gets its own key, so it is never served stale.
        nextTypeKey++;
        parts.push(`unknown-${nextTypeKey}`);
    }
    return parts.join('\u0001');
};

/**
 * Gets a key describing exactly what a preview of an existing block will look like. Unlike
 * {@link getPreviewKey} this describes the text the block currently reads as, which is all that
 * changes its appearance once the block itself exists.
 * @param {Array<object>} blocks The blocks that go into the preview, as returned by
 *   {@link collectVisibleParts}.
 * @param {string} theme The theme the preview was rendered with.
 * @returns {string} The cache key.
 */
const getWorkspacePreviewKey = (blocks, theme) => {
    const parts = [theme || ''];
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        try {
            parts.push(block.type);
            const inputList = block.inputList || [];
            for (let j = 0; j < inputList.length; j++) {
                const fieldRow = inputList[j].fieldRow || [];
                for (let k = 0; k < fieldRow.length; k++) {
                    const field = fieldRow[k];
                    parts.push(typeof field.getText === 'function' ? String(field.getText()) : '');
                }
            }
        } catch (error) {
            // Anything that can not be described gets its own key, so it is never served stale.
            nextTypeKey++;
            parts.push(`unknown-${nextTypeKey}`);
        }
    }
    return parts.join('\u0001');
};

/**
 * Describes the block colours currently in use. The theme is applied by overwriting
 * `Blockly.Colours` in place, so the values have to be compared instead of the object.
 * @param {*} Blockly The Blockly instance.
 * @returns {string} A signature of the current block colours.
 */
const getThemeSignature = Blockly => {
    const colours = Blockly && Blockly.Colours;
    if (!colours) return '';
    const parts = [];
    for (const name of Object.keys(colours)) {
        const value = colours[name];
        if (value && typeof value === 'object') {
            const keys = Object.keys(value);
            const values = [];
            for (let i = 0; i < keys.length; i++) {
                values.push(value[keys[i]]);
            }
            parts.push(`${name}=${values.join(',')}`);
        } else {
            parts.push(`${name}=${value}`);
        }
    }
    return parts.join(';');
};

/**
 * Drops every cached preview. Called when the block colours change and once the fonts the
 * editor uses have finished loading, as both change how big the rendered blocks are.
 */
const clearPreviewCache = () => {
    previewCache.clear();
};

/**
 * Refreshes {@link themeSignature} and drops the cached previews when the block colours changed
 * since the last render. Called by every entry point so that a cache consumer never serves
 * previews rendered with the previous theme.
 * @param {*} Blockly The Blockly instance.
 */
const refreshPreviewTheme = Blockly => {
    const signature = getThemeSignature(Blockly);
    if (signature !== themeSignature) {
        themeSignature = signature;
        clearPreviewCache();
    }
};

/**
 * Suspends the workspace resize for a batch of previews and re-measures it once at the end.
 * Creating or disposing a block normally makes ScratchBlocks recompute the bounding box of
 * every top level block in the project, which is much more expensive than the preview itself.
 * This is the same trick the block insert path uses in selectionUtils.js, applied to the whole
 * batch instead of a single block.
 * @param {*} Blockly The Blockly instance.
 * @returns {function(): void} Call once every preview of the batch has been rendered.
 */
const beginPreviewBatch = Blockly => {
    const workspace = Blockly && Blockly.getMainWorkspace && Blockly.getMainWorkspace();
    if (!workspace || typeof workspace.setResizesEnabled !== 'function') {
        return () => {};
    }

    const resume = () => {
        batchDepth--;
        if (batchDepth > 0 || !batchWorkspace) return;
        batchDepth = 0;
        const ended = batchWorkspace;
        batchWorkspace = null;
        ended.setResizesEnabled(true);
    };

    refreshPreviewTheme(Blockly);

    if (batchDepth === 0) {
        batchWorkspace = workspace;
        workspace.setResizesEnabled(false);
    }
    batchDepth++;
    return resume;
};

/**
 * Removes the Blockly block ids from a cloned SVG subtree. Without this the preview could be
 * picked up by code that looks blocks up in the DOM by their id (e.g. the debugger
 * highlighting), even though the block it refers to no longer exists. Selection and drag state
 * is cleared too, so a preview never shows the glow of a block that happens to be selected in
 * the editor.
 * @param {SVGElement} element The cloned element to clean up.
 */
const stripBlockIds = element => {
    if (element.hasAttribute('data-id')) {
        element.removeAttribute('data-id');
    }
    if (element.classList) {
        element.classList.remove('blocklySelected', 'blocklyDragging');
    }
    const dirty = element.querySelectorAll('[data-id], .blocklySelected, .blocklyDragging');
    for (let i = 0; i < dirty.length; i++) {
        dirty[i].removeAttribute('data-id');
        dirty[i].classList.remove('blocklySelected', 'blocklyDragging');
    }
};

/**
 * The input a "define" block keeps its signature in. It is a statement input, but unlike a loop
 * body it reads as part of the define block instead of as a script of its own.
 * @type {string}
 */
const SIGNATURE_INPUT = 'custom_block';

/**
 * Collects the blocks that make up how `rootBlock` reads: the block itself, the literal inputs and
 * reporters plugged into its inputs, and the signature of a define block. Statements stacked
 * above, below or inside it belong to a script rather than to the block, so they are left out and
 * a preview shows a single block instead of a whole script.
 * @param {*} rootBlock The block to describe.
 * @param {*} Blockly The Blockly instance, used for its connection type constants.
 * @returns {Array<object>} The blocks that are part of the preview, root first.
 */
const collectVisibleParts = (rootBlock, Blockly) => {
    const parts = [rootBlock];
    const nextStatement = (Blockly && Blockly.NEXT_STATEMENT) || 3;

    const walk = block => {
        const inputList = block.inputList || [];
        for (let i = 0; i < inputList.length; i++) {
            const input = inputList[i];
            if (!input.connection) continue;
            const child = input.connection.targetBlock();
            if (!child) continue;
            // A body is a script of its own, the signature of a define block is not.
            if (input.connection.type === nextStatement && input.name !== SIGNATURE_INPUT) continue;
            parts.push(child);
            walk(child);
        }
    };

    walk(rootBlock);
    return parts;
};

/**
 * Maps every block of a tree to the SVG group it is drawn in. ScratchBlocks nests connected
 * blocks inside their parent's group, so this is how the nodes belonging to a nested block are
 * told apart from the drawing of the block they sit in.
 * @param {*} rootBlock The block to map.
 * @returns {Map<SVGElement, object>} The map.
 */
const mapNodesToBlocks = rootBlock => {
    const map = new Map();
    const blocks = typeof rootBlock.getDescendants === 'function' ?
        rootBlock.getDescendants(true) :
        [rootBlock];
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        const svgRoot = typeof block.getSvgRoot === 'function' ? block.getSvgRoot() : null;
        if (svgRoot) map.set(svgRoot, block);
    }
    return map;
};

/**
 * Drops the parts of a cloned block that belong to its script. A deep clone brings the whole
 * script along, because connected blocks are nested inside the block they are attached to; the
 * clone mirrors the original node for node, which is what makes the two walkable side by side.
 * @param {Node} original The original subtree.
 * @param {Node} clone The cloned subtree.
 * @param {Set<object>} visible The blocks that are part of the preview.
 * @param {Map<SVGElement, object>} nodeToBlock The block each nested group belongs to.
 */
const pruneScriptParts = (original, clone, visible, nodeToBlock) => {
    const originalChildren = original.childNodes;
    // Backwards, so removing a child does not shift the indices still to be visited.
    for (let i = originalChildren.length - 1; i >= 0; i--) {
        const node = originalChildren[i];
        const nodeClone = clone.childNodes[i];
        if (!nodeClone) continue;
        const block = nodeToBlock.get(node);
        if (block && !visible.has(block)) {
            clone.removeChild(nodeClone);
            continue;
        }
        if (node.childNodes.length) pruneScriptParts(node, nodeClone, visible, nodeToBlock);
    }
};

/**
 * Clones an existing block as one coherent subtree, without the script it belongs to.
 * @param {*} rootBlock The block to clone.
 * @param {Set<object>} visible The blocks that are part of the preview.
 * @returns {SVGElement|null} The clone, or null when the block has no SVG.
 */
const cloneBlockTree = (rootBlock, visible) => {
    const svgRoot = typeof rootBlock.getSvgRoot === 'function' ? rootBlock.getSvgRoot() : null;
    if (!svgRoot) return null;

    const clone = svgRoot.cloneNode(true);
    pruneScriptParts(svgRoot, clone, visible, mapNodesToBlocks(rootBlock));
    // The editor hides top level blocks that are scrolled out of view. The preview is drawn in
    // the popup or the dropdown instead, so it has to be visible wherever the block sits.
    if (clone.style) clone.style.display = '';
    stripBlockIds(clone);
    return clone;
};

/**
 * Clones each of the given blocks into a fresh group inside `container`. Used for the block types
 * the popup previews, which do not exist in the project yet. The caller owns the group until
 * {@link finishPreview} has measured it.
 * @param {Array<object>} blocks The blocks to clone.
 * @param {SVGElement} container The SVG element to render into.
 * @returns {{holder: SVGElement, content: SVGElement}} The unmeasured preview.
 */
const startPreviewClone = (blocks, container) => {
    const holder = container.appendChild(createSvgElement('g'));
    const content = holder.appendChild(createSvgElement('g'));

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        const svgRoot = block && typeof block.getSvgRoot === 'function' ? block.getSvgRoot() : null;
        if (!svgRoot) continue;
        const clone = svgRoot.cloneNode(true);
        stripBlockIds(clone);
        content.appendChild(clone);
    }

    return {holder, content};
};

/**
 * Clones a block that exists in a workspace, without the script around it, into a fresh group
 * inside `container`.
 * @param {*} rootBlock The block to clone.
 * @param {SVGElement} container The SVG element to render into.
 * @param {Set<object>} visible The blocks that are part of the preview.
 * @returns {{holder: SVGElement, content: SVGElement}|null} The unmeasured preview, or null when
 *   the block has no SVG to clone.
 */
const startBlockClone = (rootBlock, container, visible) => {
    const clone = cloneBlockTree(rootBlock, visible);
    if (!clone) return null;

    const holder = container.appendChild(createSvgElement('g'));
    const content = holder.appendChild(createSvgElement('g'));
    content.appendChild(clone);
    return {holder, content};
};

/**
 * Measures a cloned preview and moves the block's own origin to (0, 0), so the caller only has to
 * position the group it got back.
 * @param {{holder: SVGElement, content: SVGElement}|null} draft The preview to measure.
 * @param {SVGElement} container The SVG element the preview was rendered into.
 * @returns {{dom: SVGElement, width: number, height: number, top: number, rowHeight: number}|null}
 *   The rendered block, or null if it could not be measured. `width`, `height`, `top` and
 *   `rowHeight` are in unscaled block units.
 */
const finishPreview = (draft, container) => {
    if (!draft) return null;
    const {holder, content} = draft;

    let bounds = null;
    try {
        bounds = holder.getBBox();
    } catch (error) {
        // getBBox throws when the container is not rendered, for example when the popup was
        // closed while the search was still running.
        container.removeChild(holder);
        return null;
    }

    if (!bounds.width || !bounds.height) {
        container.removeChild(holder);
        return null;
    }

    // The caller positions `holder`, so counter the block's own origin here.
    content.setAttribute('transform', `translate(${-bounds.x}, ${-bounds.y})`);

    return {
        dom: holder,
        width: bounds.width,
        height: bounds.height,
        top: BLOCK_ROW_INSET,
        rowHeight: bounds.height + (BLOCK_ROW_INSET * 2)
    };
};

/**
 * Stores a measured preview in the cache, evicting the oldest entry when it is full.
 * @param {string} key The cache key.
 * @param {object} rendered The measured preview.
 */
const cachePreview = (key, rendered) => {
    previewCache.set(key, {
        node: rendered.dom.cloneNode(true),
        width: rendered.width,
        height: rendered.height,
        top: rendered.top,
        rowHeight: rendered.rowHeight
    });
    if (previewCache.size > CACHE_LIMIT) {
        previewCache.delete(previewCache.keys().next().value);
    }
};

/**
 * Clones a cached preview out of the cache, marking it as recently used.
 * @param {string} key The cache key.
 * @param {SVGElement} container The SVG element to render into.
 * @returns {object|null} The rendered block, or null when it is not cached.
 */
const takeCachedPreview = (key, container) => {
    const cached = previewCache.get(key);
    if (!cached) return null;
    // Move the entry to the end of the cache so it is the last one to be evicted.
    previewCache.delete(key);
    previewCache.set(key, cached);
    const node = cached.node.cloneNode(true);
    container.appendChild(node);
    return {
        dom: node,
        width: cached.width,
        height: cached.height,
        top: cached.top,
        rowHeight: cached.rowHeight
    };
};

/**
 * Renders a block type, including everything nested inside it, as real ScratchBlocks SVG.
 * @param {BlockInstance} blockInstance The block to render.
 * @param {SVGElement} container The SVG element to render the block into.
 * @param {*} Blockly The Blockly instance.
 * @returns {object|null} The rendered block, or null if it could not be rendered.
 */
const createPreview = (blockInstance, container, Blockly) => {
    let block = null;
    let draft = null;

    // A preview is not part of the project, so it must never produce workspace events.
    // `createWorkspaceForm` builds the same block that clicking the result would insert.
    Blockly.Events.disable();
    try {
        block = blockInstance.createWorkspaceForm();
        draft = startPreviewClone(block.getDescendants(false), container);
    } catch (error) {
        console.warn(`Spotlight: Could not render a preview of "${blockInstance.typeInfo.id}"`, error);
        if (draft) container.removeChild(draft.holder);
        return null;
    } finally {
        // Takes the block (and its children) back out of the workspace.
        if (block && block.workspace) block.dispose(false, false);
        Blockly.Events.enable();
    }

    return finishPreview(draft, container);
};

/**
 * Renders a block for the popup preview, reusing a cached copy when the same block was already
 * rendered (with the same inputs and the same theme) during an earlier search.
 * @param {BlockInstance} blockInstance The block to render.
 * @param {SVGElement} container The SVG element to render the block into.
 * @param {*} Blockly The Blockly instance.
 * @returns {object|null} The rendered block, or null if it could not be rendered.
 */
const renderPreviewBlock = (blockInstance, container, Blockly) => {
    if (!Blockly || !blockInstance || !blockInstance.typeInfo) return null;

    const key = getPreviewKey(blockInstance);
    const cached = takeCachedPreview(key, container);
    if (cached) return cached;

    const rendered = createPreview(blockInstance, container, Blockly);
    if (!rendered) return null;

    cachePreview(key, rendered);
    return rendered;
};

/**
 * Renders a block that already exists in a workspace, reusing a cached copy when an identical
 * looking block was rendered before. Everything is read from the editor's own SVG, so the
 * preview matches the editor exactly without touching the project.
 * @param {object} workspaceBlock The Blockly block to render.
 * @param {SVGElement} container The SVG element to render the block into.
 * @param {*} Blockly The Blockly instance.
 * @returns {object|null} The rendered block, or null when the block is not rendered (deferred
 *   scripts), has no size, or the container is not visible.
 */
const renderWorkspaceBlockPreview = (workspaceBlock, container, Blockly) => {
    if (!Blockly || !workspaceBlock || !container || typeof container.appendChild !== 'function') {
        return null;
    }
    // Blocks the workspace has not rendered yet (virtualized scripts) have no SVG to clone.
    if (typeof workspaceBlock.getSvgRoot !== 'function' || !workspaceBlock.getSvgRoot()) return null;

    refreshPreviewTheme(Blockly);

    const parts = collectVisibleParts(workspaceBlock, Blockly);
    const key = getWorkspacePreviewKey(parts, themeSignature);

    const cached = takeCachedPreview(key, container);
    if (cached) return cached;

    const draft = startBlockClone(workspaceBlock, container, new Set(parts));
    const rendered = finishPreview(draft, container);
    if (!rendered) return null;

    cachePreview(key, rendered);
    return rendered;
};

if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
    // Block previews are sized from measured text, so anything rendered before the editor
    // fonts are ready is not trustworthy.
    document.fonts.ready.then(clearPreviewCache).catch(() => {});
}

export {
    renderPreviewBlock,
    renderWorkspaceBlockPreview,
    beginPreviewBatch,
    clearPreviewCache,
    BLOCK_ROW_INSET
};
