/**
 * Compatibility fixes in the GUI for third-party (TurboWarp style) extensions.
 *
 * These patches intentionally live in the editor instead of the extensions so
 * that unmodified extensions keep working with this renderer fork.
 */

const patchedDrawableClasses = new WeakSet();

/**
 * Force deferred SVG skins to be materialized as soon as they are attached to
 * a drawable.
 *
 * scratch-render defers serializing an SVG costume until the skin is first
 * drawn (see SVGSkin#_materializeSVG), so `skin._svgImage.src` is an empty
 * string until then. Extensions such as Mouse Cursor read that property
 * directly to turn the current costume into a cursor, which makes the cursor
 * invisible for:
 *  - sprites that are hidden, because hidden drawables are never drawn, and
 *  - costumes switched to in the same tick, because drawing happens after the
 *    VM step that reads the skin.
 * Attaching a skin to a drawable means it is the current costume of a target,
 * so materializing it there keeps the optimization for unused costumes while
 * making the data extensions expect always available.
 * @param {object} renderer The renderer instance.
 */
const patchDrawableSkinMaterialization = renderer => {
    const Drawable = renderer.exports && renderer.exports.Drawable;
    if (!Drawable || patchedDrawableClasses.has(Drawable)) {
        return;
    }
    const descriptor = Object.getOwnPropertyDescriptor(Drawable.prototype, 'skin');
    if (!descriptor || !descriptor.get || !descriptor.set) {
        return;
    }
    patchedDrawableClasses.add(Drawable);
    Object.defineProperty(Drawable.prototype, 'skin', {
        configurable: true,
        enumerable: descriptor.enumerable,
        get: descriptor.get,
        set (skin) {
            descriptor.set.call(this, skin);
            const currentSkin = descriptor.get.call(this);
            if (currentSkin && typeof currentSkin._materializeSVG === 'function') {
                currentSkin._materializeSVG();
            }
        }
    });
};

/**
 * Materialize the skins of drawables that were attached before the patch was
 * installed (for example when a renderer is created outside of stage.jsx).
 * @param {object} renderer The renderer instance.
 */
const materializeAttachedSkins = renderer => {
    const drawables = renderer._allDrawables;
    if (!drawables) {
        return;
    }
    for (const drawable of drawables) {
        if (!drawable) {
            continue;
        }
        const skin = drawable.skin;
        if (skin && typeof skin._materializeSVG === 'function') {
            skin._materializeSVG();
        }
    }
};

/**
 * Install all renderer compatibility patches.
 * Safe to call multiple times.
 * @param {object} renderer The renderer instance.
 */
const installRendererCompatibility = renderer => {
    if (!renderer || !renderer.exports) {
        return;
    }
    patchDrawableSkinMaterialization(renderer);
    materializeAttachedSkins(renderer);
};

export default installRendererCompatibility;
