/**
 * @file Renders the block previews in the middle click popup (spotlight) by building real
 * ScratchBlocks blocks and cloning their SVG, instead of drawing simplified approximations.
 * Doing it this way means C blocks, nested stacks, fields, fonts and theme colours are
 * identical to what the editor renders.
 *
 * The preview block is created in the main workspace and disposed again in the same
 * synchronous block of code, so it is never visible and can not be observed by anything else.
 */

const SVG_NS = 'http://www.w3.org/2000/svg';

/**
 * Extra vertical padding, in block units, added above and below a rendered block.
 * @type {number}
 */
const BLOCK_ROW_INSET = 6;

/**
 * Removes the Blockly block ids from a cloned SVG subtree. Without this the preview could be
 * picked up by code that looks blocks up in the DOM by their id (e.g. the debugger
 * highlighting), even though the block it refers to no longer exists.
 * @param {SVGElement} element The cloned element to clean up.
 */
const stripBlockIds = element => {
    if (element.hasAttribute('data-id')) {
        element.removeAttribute('data-id');
    }
    const childrenWithIds = element.querySelectorAll('[data-id]');
    for (let i = 0; i < childrenWithIds.length; i++) {
        childrenWithIds[i].removeAttribute('data-id');
    }
};

/**
 * Renders a block, including everything nested inside it, as real ScratchBlocks SVG.
 * @param {BlockInstance} blockInstance The block to render.
 * @param {SVGElement} container The SVG element to render the block into.
 * @param {*} Blockly The Blockly instance.
 * @returns {{dom: SVGElement, width: number, height: number, top: number, rowHeight: number}|null}
 *   The rendered block, or null if it could not be rendered. `width`, `height`, `top` and
 *   `rowHeight` are in unscaled block units.
 */
const renderPreviewBlock = (blockInstance, container, Blockly) => {
    if (!Blockly || !blockInstance || !blockInstance.typeInfo) return null;

    const holder = container.appendChild(document.createElementNS(SVG_NS, 'g'));
    const content = holder.appendChild(document.createElementNS(SVG_NS, 'g'));

    let block = null;
    // A preview is not part of the project, so it must never produce workspace events.
    // `createWorkspaceForm` builds the same block that clicking the result would insert.
    Blockly.Events.disable();
    try {
        block = blockInstance.createWorkspaceForm();
        const parts = block.getDescendants(false);
        for (let i = 0; i < parts.length; i++) {
            const svgRoot = parts[i].getSvgRoot();
            if (!svgRoot) continue;
            const clone = svgRoot.cloneNode(true);
            stripBlockIds(clone);
            content.appendChild(clone);
        }
    } catch (error) {
        console.warn(`Spotlight: Could not render a preview of "${blockInstance.typeInfo.id}"`, error);
        container.removeChild(holder);
        return null;
    } finally {
        // Takes the block (and its children) back out of the workspace, and re-measures the
        // workspace contents so no stale scrollbar metrics are left behind.
        if (block && block.workspace) block.dispose(false, false);
        Blockly.Events.enable();
    }

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

export {
    renderPreviewBlock,
    BLOCK_ROW_INSET
};
