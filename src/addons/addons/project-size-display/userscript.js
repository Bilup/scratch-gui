export default async function ({ addon, console, msg }) {
    const vm = addon.tab.traps.vm;

    let sizeDisplay;
    let handler = null;
    let isLoading = false;

    function formatFileSize(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const textEncoder = new TextEncoder();
    function getTextBytes(text) {
        return textEncoder.encode(text).length;
    }

    // 统计角色造型与声音素材的原始占用字节数
    function getAssetsSize(sprite) {
        let totalSize = 0;
        if (sprite.costumes && Array.isArray(sprite.costumes)) {
            sprite.costumes.forEach(costume => {
                if (costume.asset && costume.asset.data && costume.asset.data.byteLength) {
                    totalSize += costume.asset.data.byteLength;
                }
            });
        }
        if (sprite.sounds && Array.isArray(sprite.sounds)) {
            sprite.sounds.forEach(sound => {
                if (sound.asset && sound.asset.data && sound.asset.data.byteLength) {
                    totalSize += sound.asset.data.byteLength;
                }
            });
        }
        return totalSize;
    }

    function getBlockCount() {
        let total = 0;
        
        const targets = vm.runtime.targets || [];
        targets.forEach(target => {
            if (!target.isOriginal) return; // 跳过克隆体
            const sprite = target.sprite || target;
            const blocks = sprite.blocks ? Object.values(sprite.blocks._blocks) : [];
            total += blocks.filter(block => !block.shadow).length;
        });
        
        return total;
    }

    // Serialising the whole project costs a few hundred milliseconds on a big
    // one (20000 blocks: ~350ms, twice, because the sprite figure serialised
    // again). Doing that 100ms after every edit turned each drag into a freeze.
    // Instead the project is measured once, per target, and afterwards only the
    // target being edited is re-serialised (~1/70th of the work).
    const EXPENSIVE_REFRESH_MIN_MS = 1200;
    let perTargetBytes = new Map();
    let assetsBytes = 0;
    let lastPassAt = 0;
    let lastFullPassTargets = -1;
    let idleHandle = null;
    let refreshPending = false;
    let targetWatchTimer = null;

    const isDragging = () => !!document.querySelector('.blocklyDragging');

    const publish = () => {
        let projectBytes = assetsBytes;
        perTargetBytes.forEach(bytes => { projectBytes += bytes; });
        // project.json carries sprite names, not target ids (ids are minted on
        // load), so the table is keyed by name.
        const targetKey = vm.editingTarget ? vm.editingTarget.getName() : null;
        renderNumbers({
            projectBytes,
            targetBytes: (targetKey && perTargetBytes.get(targetKey)) || 0
        });
    };

    const scheduleExpensiveRefresh = (delayMs) => {
        if (refreshPending) return;
        refreshPending = true;
        const run = () => {
            idleHandle = null;
            if (!refreshPending) return;
            if (isDragging()) {
                // A block is being dragged; try again once it lands.
                if (typeof requestIdleCallback === 'function') {
                    idleHandle = requestIdleCallback(run, {timeout: 500});
                } else {
                    setTimeout(run, 300);
                }
                return;
            }
            refreshPending = false;
            refreshExpensiveNumbers();
            publish();
        };
        const start = () => {
            if (typeof requestIdleCallback === 'function') {
                idleHandle = requestIdleCallback(run, {timeout: 2000});
            } else {
                idleHandle = setTimeout(run, 400);
            }
        };
        if (typeof delayMs === 'number' && delayMs > 0) {
            setTimeout(start, delayMs);
        } else {
            start();
        }
    };

    // Merge one serialised project into the per-target table. A full project
    // string covers every target; `vm.toJSON(targetId)` covers just one, which
    // is what makes the incremental pass cheap.
    const absorbProjectJson = (json, reset) => {
        const str = typeof json === 'string' ? json : JSON.stringify(json);
        if (reset) perTargetBytes = new Map();
        const parsed = JSON.parse(str);
        (parsed.targets || []).forEach(target => {
            if (!target) return;
            const key = target.name || target.id;
            if (!key) return;
            let ownBytes = getTextBytes(JSON.stringify(target));
            perTargetBytes.set(key, ownBytes);
        });
    };

    const recomputeAssetsBytes = () => {
        let total = 0;
        (vm.runtime.targets || []).forEach(target => {
            if (!target.isOriginal) return;
            total += getAssetsSize(target.sprite || target);
        });
        return total;
    };

    function refreshExpensiveNumbers() {
        const now = performance.now();
        const originals = (vm.runtime.targets || []).filter(target => target.isOriginal);
        // A full pass is only needed when we have never measured this project,
        // or its set of targets changed (sprite added/removed).
        const needsFull = perTargetBytes.size === 0 ||
            originals.length !== lastFullPassTargets;
        if (!needsFull && now - lastPassAt < EXPENSIVE_REFRESH_MIN_MS) return;

        try {
            if (needsFull) {
                absorbProjectJson(vm.toJSON(), true);
                assetsBytes = recomputeAssetsBytes();
                lastFullPassTargets = originals.length;
            } else if (vm.editingTarget) {
                absorbProjectJson(vm.toJSON(vm.editingTarget.id), false);
                assetsBytes = recomputeAssetsBytes();
            }
            lastPassAt = now;
        } catch (e) {
            console.warn('[Project Size Display] Failed to calculate project size:', e);
        }
    }

    function renderNumbers (numbers) {
        if (!sizeDisplay) return;
        try {
            const blocksText = msg('blocks-count') || 'Blocks';
            const sizeText = msg('project-size') || 'Size';
            const targetSize = numbers.targetBytes > 0 ? formatFileSize(numbers.targetBytes) : '-';
            const projectSize = numbers.projectBytes > 0 ? formatFileSize(numbers.projectBytes) : '-';
            sizeDisplay.querySelector('.sa-project-size-blocks').innerText =
                `${blocksText}: ${getBlockCount()}`;
            sizeDisplay.querySelector('.sa-project-size-project').innerText =
                `${sizeText}: ${targetSize}/${projectSize}`;
        } catch (e) {
            console.error('[Project Size Display] Error updating display:', e);
            sizeDisplay.innerText = msg('error');
        }
    }

    function updateDisplay() {
        if (!sizeDisplay) return;
        try {
            const blocksText = msg('blocks-count') || 'Blocks';
            sizeDisplay.querySelector('.sa-project-size-blocks').innerText =
                `${blocksText}: ${getBlockCount()}`;
        } catch (e) {
            // ignore
        }
        scheduleExpensiveRefresh(0);
    }

    async function init() {
        while (true) {
            const scrollWrapper = await addon.tab.waitForElement('[class*="sprite-selector_scroll-wrapper_"]', {
                markAsSeen: true,
                reduxEvents: [
                    "scratch-gui/mode/SET_PLAYER",
                    "fontsLoaded/SET_FONTS_LOADED",
                    "scratch-gui/locales/SELECT_LOCALE"
                ],
                reduxCondition: (state) => !state.scratchGui.mode.isPlayerOnly
            });

            const spriteSelector = scrollWrapper.parentElement;
            
            const existingDisplay = spriteSelector.querySelector('.sa-project-size-display');
            if (existingDisplay) {
                existingDisplay.remove();
            }

            sizeDisplay = document.createElement('div');
            sizeDisplay.className = 'sa-project-size-display';
            addon.tab.displayNoneWhileDisabled(sizeDisplay);

            sizeDisplay.innerHTML = `
                <div class="sa-project-size-blocks"></div>
                <div class="sa-project-size-project"></div>
            `;

            spriteSelector.appendChild(sizeDisplay);

            updateDisplay();

            let debounce;
            const onProjectLoaded = () => {
                isLoading = false;
                updateDisplay();
            };
            if (handler) {
                vm.off("PROJECT_CHANGED", handler);
                vm.runtime.off("PROJECT_LOADED", handler);
            }
            handler = async () => {
                if (isLoading) return;
                clearTimeout(debounce);
                // Editing fires PROJECT_CHANGED in bursts; wait until the burst
                // is over, then let the expensive part run when the main thread
                // is idle instead of cutting into the next interaction.
                debounce = setTimeout(updateDisplay, 600);
            };
            vm.on("PROJECT_CHANGED", handler);
            vm.runtime.on("PROJECT_LOADED", onProjectLoaded);

            // Switching sprites needs no new measurement: every target already
            // has a size in the table, so repainting is free. A cheap poll is
            // enough to notice the selection change.
            clearInterval(targetWatchTimer);
            let watchedTargetId = vm.editingTarget ? vm.editingTarget.id : null;
            targetWatchTimer = setInterval(() => {
                const id = vm.editingTarget ? vm.editingTarget.id : null;
                if (id === watchedTargetId) return;
                watchedTargetId = id;
                if (perTargetBytes.size) publish();
            }, 400);
            
            if (addon.tab.redux) {
                addon.tab.redux.addEventListener("statechanged", (e) => {
                    const actionType = e.detail.action.type;
                    if (actionType.startsWith("scratch-gui/project-state/") && 
                        (actionType.includes("LOADING") || actionType.includes("START"))) {
                        isLoading = true;
                    }
                });
            }

            await addon.tab.waitForElement('[class*="sprite-selector_scroll-wrapper_"]', {
                markAsSeen: true,
                reduxEvents: ["scratch-gui/mode/SET_PLAYER"],
                reduxCondition: (state) => !state.scratchGui.mode.isPlayerOnly
            });
        }
    }

    if (vm.editingTarget) {
        init();
    } else {
        let timeout = setTimeout(function () {
            init();
            clearTimeout(timeout);
        }, 1000);
    }
}