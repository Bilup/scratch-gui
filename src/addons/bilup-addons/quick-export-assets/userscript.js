/**
 * 快捷导出素材 / Quick export assets
 *
 * 在「造型 / 背景 / 声音」列表里右键任意素材，菜单中会多出一项
 * 「导出全部素材」，点击后把当前目标的这一类素材整体打包成一个 zip 下载：
 *   - 造型页（角色）→ 该角色的全部造型
 *   - 造型页（舞台）→ 舞台的全部背景
 *   - 声音页        → 该角色的全部声音
 *
 * 改动前请先看这三条（都是踩过的坑）：
 *
 * 1. 菜单用 createEditorContextMenu 的**动态**形式（传 (ctxType) => item 函数，
 *    而不是 options 对象）。原因：文案要按上下文分三种（造型 / 背景 / 声音），
 *    其中背景还得靠 target.isStage 判定；上游的静态形式只能写死一个 label。
 *    动态形式下 types 过滤要自己写 —— 不适用时返回 undefined
 *    （contextmenu.js 里是 `if (!item) continue`）。
 *
 * 2. 素材字节与 GUI 自带的「导出」菜单保持同源：
 *    造型走 vm.getExportedCostume()（会给 SVG 补上旋转中心元数据），
 *    声音直接取 sound.asset.data（vm 没有对应的导出包装，同 sound-tab）。
 *
 * 3. 文案不走上游 l10n 管线 —— `src/addons/addons-l10n/*.json` 是 pull.js
 *    从上游重建的，本地插件写进去下次重建就被覆盖。这里按
 *    document.documentElement.lang 实时选文案，取值方式与
 *    src/components/tw-settings-modal/settings-pages.jsx 一致。
 */
import JSZip from '@turbowarp/jszip';
import downloadBlob from '../../../lib/utils/download-blob';

const TEXT = {
    zh: {
        costume: '导出全部素材（造型）',
        backdrop: '导出全部素材（背景）',
        sound: '导出全部素材（声音）',
        costumeSuffix: '造型',
        backdropSuffix: '背景',
        soundSuffix: '声音',
        empty: '快捷导出素材：当前目标没有可导出的素材',
        done: count => `快捷导出素材：已导出 ${count} 个素材`,
        failed: '快捷导出素材：导出失败，详情见控制台'
    },
    en: {
        costume: 'Export all assets (costumes)',
        backdrop: 'Export all assets (backdrops)',
        sound: 'Export all assets (sounds)',
        costumeSuffix: 'costumes',
        backdropSuffix: 'backdrops',
        soundSuffix: 'sounds',
        empty: 'Quick export assets: nothing to export',
        done: count => `Quick export assets: exported ${count} assets`,
        failed: 'Quick export assets: export failed, see console for details'
    }
};

const getText = () => {
    const locale = (document.documentElement.lang || navigator.language || 'en').toLowerCase();
    return locale.startsWith('zh') ? TEXT.zh : TEXT.en;
};

// 文件名里不能出现的字符（Windows / macOS / Linux 取并集）+ 控制字符 + 结尾的点和空格
const toSafeFileName = name => {
    const safe = String(name)
        .replace(/[\\/:*?"<>|]/g, '_')
        // eslint-disable-next-line no-control-regex
        .replace(/[\u0000-\u001f\u007f]/g, '')
        .replace(/[. ]+$/, '')
        .trim();
    return safe || 'asset';
};

// 同一个 zip 里重名会互相覆盖，补齐成 "name (2).png" 这种
const toUniqueFileName = (fileName, used) => {
    if (!used.has(fileName)) {
        used.add(fileName);
        return fileName;
    }
    const dot = fileName.lastIndexOf('.');
    const base = dot === -1 ? fileName : fileName.slice(0, dot);
    const extension = dot === -1 ? '' : fileName.slice(dot);
    let index = 2;
    while (used.has(`${base} (${index})${extension}`)) {
        index += 1;
    }
    const unique = `${base} (${index})${extension}`;
    used.add(unique);
    return unique;
};

// 轻量提示：导出可能要几百毫秒，没有反馈会让人以为没点上。
// 用内联样式 + 固定定位，避免为一个 toast 再挂一份 userstyle。
const showToast = (message, isError) => {
    const toast = document.createElement('div');
    toast.className = 'bl-quick-export-assets-toast';
    toast.textContent = message;
    Object.assign(toast.style, {
        position: 'fixed',
        left: '50%',
        bottom: '24px',
        transform: 'translateX(-50%)',
        maxWidth: '70vw',
        padding: '10px 16px',
        borderRadius: '10px',
        fontFamily: 'inherit',
        fontSize: '13px',
        lineHeight: '1.4',
        color: '#fff',
        background: isError ? 'rgba(200, 40, 40, 0.95)' : 'rgba(28, 28, 28, 0.9)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
        pointerEvents: 'none',
        zIndex: '99999',
        opacity: '0',
        transition: 'opacity 0.15s ease'
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
    });
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2600);
};

const exportAll = async (addon, console, kind, isBackdrop) => {
    const vm = addon.tab.traps.vm;
    const text = getText();
    try {
        const target = vm && vm.editingTarget;
        if (!target || !target.sprite) {
            showToast(text.empty, true);
            return;
        }

        const isSound = kind === 'sound';
        const assets = (isSound ? target.getSounds() : target.getCostumes()) || [];
        const zip = new JSZip();
        const usedNames = new Set();
        let count = 0;

        for (const asset of assets) {
            const data = isSound ?
                (asset.asset && asset.asset.data) :
                vm.getExportedCostume(asset);
            if (!data) continue;

            const dataFormat = (asset.asset && asset.asset.dataFormat) || asset.dataFormat || 'bin';
            zip.file(toUniqueFileName(`${toSafeFileName(asset.name)}.${dataFormat}`, usedNames), data);
            count += 1;
        }

        if (count === 0) {
            showToast(text.empty, true);
            return;
        }

        let suffix = text.costumeSuffix;
        if (isSound) {
            suffix = text.soundSuffix;
        } else if (isBackdrop) {
            suffix = text.backdropSuffix;
        }

        const blob = await zip.generateAsync({type: 'blob'});
        downloadBlob(`${toSafeFileName(target.getName())}-${suffix}.zip`, blob);
        showToast(text.done(count));
    } catch (error) {
        console.error('[quick-export-assets] failed to export assets', error);
        showToast(text.failed, true);
    }
};

/**
 * 注册右键菜单项：造型 / 声音列表里的任意素材上都会出现「导出全部素材」。
 * @param {object} api addon 运行时注入的公共 API
 * @param {object} api.addon addon 句柄（tab / settings / self）
 * @param {object} api.console 控制台
 */
export default function ({addon, console}) {
    addon.tab.createEditorContextMenu(ctxType => {
        if (ctxType !== 'costume' && ctxType !== 'sound') return;

        const vm = addon.tab.traps.vm;
        const target = vm && vm.editingTarget;
        if (!target || !target.sprite) return;

        const isBackdrop = ctxType === 'costume' && target.isStage;
        const text = getText();
        let label = text.costume;
        if (ctxType === 'sound') {
            label = text.sound;
        } else if (isBackdrop) {
            label = text.backdrop;
        }

        return {
            types: ['costume', 'sound'],
            // 紧跟在自带的「导出」后面（move-to-top-bottom 用的是 order 1 / 2）
            position: 'assetContextMenuAfterExport',
            order: 0,
            label,
            // 点击时再实时读一遍 vm：菜单是右键那一刻生成的，数据可能已经变了
            callback: () => exportAll(addon, console, ctxType, isBackdrop)
        };
    });
}
