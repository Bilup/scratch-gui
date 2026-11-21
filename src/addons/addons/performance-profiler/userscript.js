import WindowManager from '../../window-system/window-manager.js';

let Profiler = null;
try { Profiler = require('scratch-vm/src/engine/profiler'); } catch (e) { Profiler = null; }

const PERFORMANCE_AVAILABLE = typeof window !== 'undefined' && window.performance && window.performance.now;

export default async function ({ addon, msg, console }) {
    if (!PERFORMANCE_AVAILABLE || !Profiler) {
        console.warn('Performance profiler unavailable: missing performance.now or profiler');
        return;
    }

    const vm = addon.tab.traps.vm;
    const runtime = vm.runtime;

    let profileDuration = addon.settings.get('profileDuration') * 1000;
    let sampleInterval = addon.settings.get('sampleInterval');
    let hotBlockLimit = addon.settings.get('hotBlockLimit');

    addon.settings.addEventListener('change', () => {
        profileDuration = addon.settings.get('profileDuration') * 1000;
        sampleInterval = addon.settings.get('sampleInterval');
        hotBlockLimit = addon.settings.get('hotBlockLimit');
    });

    let profiling = false;
    let profileStartTime = 0;
    let frameCallback = null;
    let profileTimer = null;
    let sampleTimer = null;
    let countdownTimer = null;
    let compilerWasEnabled = false;
    let compilerRestarted = false;

    function restoreCompiler() {
        if (compilerWasEnabled && runtime.compilerOptions) {
            runtime.compilerOptions.enabled = true;
        }
        compilerWasEnabled = false;
    }

    const REPORT_WINDOW_ID = 'rw-performance-profiler-report';

    // 采样数据
    const blockCounters = new Map(); // opcode -> 调用次数（VM 的积木帧只有次数，没有耗时）
    const threadSamples = []; // [{time, threadCount, runningThreads, waitingThreads, cloneCount, listItems, varCount}]
    let profilingActive = false;

    function sampleThreads() {
        if (!profilingActive) return;
        const threads = runtime.threads;
        let running = 0, waiting = 0;
        for (const t of threads) {
            if (t.updateMonitor) continue;
            // 0 = RUNNING；1 PROMISE_WAIT、2 YIELD、3 YIELD_TICK 都算等待
            if (t.status === 0) running++;
            else if (t.status <= 3) waiting++;
        }
        threadSamples.push({
            time: performance.now() - profileStartTime,
            totalThreads: threads.length,
            running,
            waiting,
            cloneCount: runtime._cloneCounter,
            listItems: countListItems(),
            varCount: countVariables()
        });
    }

    function countVariables() {
        let count = 0;
        for (const target of runtime.targets) {
            if (!target.isOriginal) continue;
            for (const id in target.variables) {
                if (target.variables[id].type === '') count++;
            }
        }
        return count;
    }

    function countListItems() {
        let count = 0;
        for (const target of runtime.targets) {
            for (const id in target.variables) {
                const v = target.variables[id];
                if (v.type === 'list' && Array.isArray(v.value)) count += v.value.length;
            }
        }
        return count;
    }

    function startProfiling() {
        if (profiling) return;
        profiling = true;
        profilingActive = true;
        blockCounters.clear();
        threadSamples.length = 0;
        profileStartTime = performance.now();

        // 编译器会绕过 execute() 里的积木计数（编译线程走 compilerExecute），
        // 剖析期间临时关闭编译器；若已有编译线程在跑，重启作品让脚本以解释模式执行。
        compilerWasEnabled = !!(runtime.compilerOptions && runtime.compilerOptions.enabled);
        compilerRestarted = false;
        if (compilerWasEnabled) {
            runtime.compilerOptions.enabled = false;
            if (typeof vm.greenFlag === 'function' && runtime.threads.some(t => t.isCompiled)) {
                vm.greenFlag();
                compilerRestarted = true;
            }
        }

        if (runtime.enableProfiling) {
            frameCallback = (frame) => {
                if (!profilingActive) return;
                // VM 只在积木计数帧上带字符串 opcode；Runtime._step 等栈帧没有 arg，直接忽略。
                // 剖析期间编译器已关闭，脚本以解释模式执行，积木计数才完整。
                if (typeof frame.arg !== 'string') return;
                blockCounters.set(frame.arg, (blockCounters.get(frame.arg) || 0) + (frame.count || 1));
            };
            runtime.enableProfiling(frameCallback);
        }

        sampleTimer = setInterval(sampleThreads, sampleInterval);
        profileTimer = setTimeout(stopProfiling, profileDuration);

        // 立即弹出剖析进度窗口，避免点击后要等剖析结束才有任何反馈
        showProgressWindow();
    }

    function stopProfiling() {
        if (!profiling) return;
        profiling = false;
        profilingActive = false;
        if (profileTimer) clearTimeout(profileTimer);
        if (sampleTimer) clearInterval(sampleTimer);
        if (countdownTimer) {
            clearInterval(countdownTimer);
            countdownTimer = null;
        }
        if (runtime.disableProfiling) runtime.disableProfiling();
        frameCallback = null;
        restoreCompiler();

        // profiler 在每次 _step 结束时已同步调用 reportFrames() 上报帧数据，
        // 停止后不会再有新的报告，因此直接生成，避免窗口晚 100ms 才弹出。
        generateReport();
    }

    function abortProfiling() {
        if (!profiling) return;
        profiling = false;
        profilingActive = false;
        if (profileTimer) clearTimeout(profileTimer);
        if (sampleTimer) clearInterval(sampleTimer);
        if (countdownTimer) clearInterval(countdownTimer);
        profileTimer = null;
        sampleTimer = null;
        countdownTimer = null;
        if (runtime.disableProfiling) runtime.disableProfiling();
        frameCallback = null;
        restoreCompiler();
    }

    function generateReport() {
        const duration = performance.now() - profileStartTime;
        // VM 的积木帧只提供调用次数，因此按次数排行，不展示耗时
        const hotBlocks = Array.from(blockCounters.entries())
            .map(([opcode, count]) => ({opcode, count}))
            .sort((a, b) => b.count - a.count)
            .slice(0, hotBlockLimit);

        const sampleCount = threadSamples.length;
        const totalCalls = Array.from(blockCounters.values()).reduce((s, c) => s + c, 0);
        const totalRunning = threadSamples.reduce((s, t) => s + t.running, 0);
        const totalWaiting = threadSamples.reduce((s, t) => s + t.waiting, 0);
        const avgRunningThreads = sampleCount ? totalRunning / sampleCount : 0;
        const avgWaitingThreads = sampleCount ? totalWaiting / sampleCount : 0;
        const threadStats = sampleCount ? {
            avgThreadCount: threadSamples.reduce((s, t) => s + t.totalThreads, 0) / sampleCount,
            maxThreads: Math.max(...threadSamples.map(t => t.totalThreads)),
            avgRunningThreads,
            avgWaitingThreads,
            waitingShare: avgRunningThreads + avgWaitingThreads ?
                avgWaitingThreads / (avgRunningThreads + avgWaitingThreads) : 0,
            maxCloneCount: Math.max(...threadSamples.map(t => t.cloneCount)),
            finalCloneCount: threadSamples[sampleCount - 1].cloneCount,
            listItemsGrowth: sampleCount > 1 ? threadSamples[sampleCount - 1].listItems - threadSamples[0].listItems : 0,
            varCountGrowth: sampleCount > 1 ? threadSamples[sampleCount - 1].varCount - threadSamples[0].varCount : 0
        } : {};

        showReportWindow({
            duration,
            blockCount: blockCounters.size,
            totalCalls,
            sampleInterval,
            hotBlocks,
            threadStats,
            sampleCount
        });
    }

    const getReportWindow = () => WindowManager.getWindow(REPORT_WINDOW_ID) ||
        WindowManager.createWindow({
            id: REPORT_WINDOW_ID,
            title: msg('report-title'),
            width: 700,
            height: 520,
            onClose: () => {
                // 剖析期间手动关掉窗口时放弃本次剖析，避免结束后又自动弹出一个新窗口
                abortProfiling();
            }
        });

    const prepareWindowContent = win => {
        const content = win.getContentElement();
        content.style.padding = '16px';
        content.style.fontSize = '13px';
        content.style.lineHeight = '1.5';
        return content;
    };

    function showProgressWindow() {
        const win = getReportWindow();
        win.setTitle(msg('profiling-title'));
        const content = prepareWindowContent(win);
        const total = Number.isFinite(profileDuration) && profileDuration > 0 ? profileDuration : 30000;
        const totalSeconds = Math.max(1, Math.round(total / 1000));
        content.innerHTML = `
            <div style="display:flex;flex-direction:column;gap:12px;padding:24px 8px;">
                <h2 style="margin:0;font-size:16px;color:var(--text-primary,#2d3748);">${msg('profiling-heading')}</h2>
                <div data-rw-pp-progress style="color:var(--text-primary,#2d3748);"></div>
                <div style="height:8px;border-radius:4px;background:rgba(128,128,128,0.18);overflow:hidden;">
                    <div data-rw-pp-bar style="height:100%;width:0%;background:var(--looks-secondary,#4c97ff);transition:width 0.2s linear;"></div>
                </div>
                <div style="font-size:12px;color:var(--text-secondary,#666);">${msg('progress-hint')}</div>
                ${compilerRestarted ? `<div style="font-size:12px;color:var(--text-secondary,#666);">${msg('compiler-restart-notice')}</div>` : ''}
                <div style="display:flex;gap:8px;margin-top:4px;">
                    <button data-rw-pp-stop type="button" style="padding:8px 16px;border:none;border-radius:6px;background:var(--control-primary,#4c97ff);color:#fff;font-size:13px;cursor:pointer;">${msg('stop-button')}</button>
                </div>
            </div>
        `;
        const progressElement = content.querySelector('[data-rw-pp-progress]');
        const barElement = content.querySelector('[data-rw-pp-bar]');
        const stopButton = content.querySelector('[data-rw-pp-stop]');
        stopButton.addEventListener('click', () => stopProfiling());
        const update = () => {
            const elapsed = Math.min(performance.now() - profileStartTime, total);
            progressElement.textContent = msg('progress', {
                elapsed: (elapsed / 1000).toFixed(1),
                total: totalSeconds
            });
            barElement.style.width = `${Math.min(100, (elapsed / total) * 100)}%`;
        };
        if (countdownTimer) clearInterval(countdownTimer);
        update();
        countdownTimer = setInterval(update, 200);
        win.show();
    }

    function showReportWindow(data) {
        const win = getReportWindow();
        win.setTitle(msg('report-title'));
        const content = prepareWindowContent(win);
        content.innerHTML = buildReportHTML(data);
        win.show();
    }

    const fmtDuration = (ms) => (ms < 1000 ? `${ms.toFixed(2)}ms` : `${(ms/1000).toFixed(2)}s`);

    function buildReportHTML(d) {
        const maxClones = runtime.runtimeOptions?.maxClones || 300;
        const hotRows = d.hotBlocks.map((b, i) => `
            <tr>
                <td>${i+1}</td>
                <td><code>${escapeHtml(b.opcode)}</code></td>
                <td>${b.count}</td>
            </tr>
        `).join('') || `<tr><td colspan="3">${msg('no-hot-blocks')}</td></tr>`;

        const ts = d.threadStats;
        const suggestions = buildSuggestions(d, ts, maxClones);
        return `
            <style>
                .rw-pp-table { width:100%; border-collapse:collapse; font-size:12px; margin-top:8px; }
                .rw-pp-table th, .rw-pp-table td { border:1px solid var(--ui-black-transparent); padding:6px 8px; text-align:left; }
                .rw-pp-table th { background:var(--ui-secondary); }
                .rw-pp-table tr:nth-child(even) td { background:var(--ui-black-transparent); }
                .rw-pp-section { margin-top:16px; }
                .rw-pp-section h3 { margin:0 0 8px; font-size:14px; color:var(--text-primary); }
                .rw-pp-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:12px; margin-top:8px; }
                .rw-pp-card { background:var(--ui-modal-background); border:1px solid var(--ui-black-transparent); border-radius:6px; padding:12px; }
                .rw-pp-card .label { font-size:11px; color:var(--text-secondary); margin-bottom:4px; }
                .rw-pp-card .value { font-size:16px; font-weight:600; color:var(--text-primary); }
                .rw-pp-badge { display:inline-block; background:var(--control-primary); color:white; padding:2px 6px; border-radius:4px; font-size:10px; margin-left:8px; }
            </style>
            <div class="rw-pp-header">
                <h2>${msg('report-title')}</h2>
                <div style="display:flex; gap:16px; margin-top:8px; font-size:12px; color:var(--text-secondary);">
                    <span>${msg('report-meta-duration', {duration: fmtDuration(d.duration)})}</span>
                    <span>${msg('report-meta-samples', {count: d.sampleCount})}</span>
                    <span>${msg('report-meta-block-types', {count: d.blockCount})}</span>
                </div>
            </div>
            <div class="rw-pp-section">
                <h3>${msg('hot-blocks-title', {count: d.hotBlocks.length})}</h3>
                <table class="rw-pp-table">
                    <thead><tr><th>${msg('table-rank')}</th><th>${msg('table-opcode')}</th><th>${msg('table-calls')}</th></tr></thead>
                    <tbody>${hotRows}</tbody>
                </table>
                ${d.blockCount === 0 ? `<div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${msg('no-block-data-hint')}</div>` : ''}
            </div>
            <div class="rw-pp-section">
                <h3>${msg('resources-title')}</h3>
                <div class="rw-pp-grid">
                    <div class="rw-pp-card"><div class="label">${msg('stat-avg-threads')}</div><div class="value">${ts.avgThreadCount?.toFixed(1) || 0}</div></div>
                    <div class="rw-pp-card"><div class="label">${msg('stat-max-threads')}</div><div class="value">${ts.maxThreads || 0}</div></div>
                    <div class="rw-pp-card"><div class="label">${msg('stat-running-share')}</div><div class="value">${(ts.avgRunningThreads || 0).toFixed(1)}</div></div>
                    <div class="rw-pp-card"><div class="label">${msg('stat-waiting-share')}</div><div class="value">${(ts.avgWaitingThreads || 0).toFixed(1)}</div></div>
                    <div class="rw-pp-card"><div class="label">${msg('stat-max-clones')}</div><div class="value">${ts.maxCloneCount || 0}</div></div>
                    <div class="rw-pp-card"><div class="label">${msg('stat-final-clones')}</div><div class="value">${ts.finalCloneCount || 0}</div></div>
                    <div class="rw-pp-card"><div class="label">${msg('stat-list-growth')}</div><div class="value">${ts.listItemsGrowth || 0}</div></div>
                    <div class="rw-pp-card"><div class="label">${msg('stat-var-growth')}</div><div class="value">${ts.varCountGrowth || 0}</div></div>
                </div>
            </div>
            <div class="rw-pp-section">
                <h3>${msg('suggestions-title')}</h3>
                <ul style="margin:8px 0; padding-left:20px; font-size:12px; color:var(--text-secondary);">
                    ${suggestions.join('')}
                </ul>
            </div>
        `;
    }

    function buildSuggestions(d, ts, maxClones) {
        const items = [];
        const add = (icon, text) => items.push(`<li>${icon} ${text}</li>`);
        const top = d.hotBlocks[0];
        const totalCalls = d.totalCalls || 0;
        const topShare = top && totalCalls ? top.count / totalCalls : 0;
        const topRate = top && d.duration > 0 ? top.count / (d.duration / 1000) : 0;
        const expectedSamples = d.sampleInterval > 0 ? d.duration / d.sampleInterval : 0;
        const activeThreads = (ts.avgRunningThreads || 0) + (ts.avgWaitingThreads || 0);
        const callsPerSecond = d.duration > 0 ? totalCalls / (d.duration / 1000) : 0;
        const top3Calls = d.hotBlocks.slice(0, 3).reduce((s, b) => s + b.count, 0);
        const top3Share = totalCalls ? top3Calls / totalCalls : 0;

        if (d.sampleCount > 0 && activeThreads < 0.5) {
            add('⚠️', msg('suggestion-idle'));
        }
        if (d.duration < 5000) {
            add('ℹ️', msg('suggestion-short-profile', {duration: fmtDuration(d.duration)}));
        }
        if (expectedSamples >= 10 && d.sampleCount < expectedSamples * 0.5) {
            add('⚠️', msg('suggestion-sampling', {count: d.sampleCount}));
        }
        if (ts.avgThreadCount >= 50) {
            add('⚠️', msg('suggestion-avg-threads', {count: ts.avgThreadCount.toFixed(1)}));
        }
        if (ts.maxThreads >= 100) {
            add('⚠️', msg('suggestion-threads', {count: ts.maxThreads}));
        }
        if (ts.maxThreads >= 30 && ts.maxThreads >= ts.avgThreadCount * 5) {
            add('💡', msg('suggestion-thread-burst', {
                max: ts.maxThreads,
                avg: ts.avgThreadCount.toFixed(1)
            }));
        }
        if (ts.waitingShare > 0.5) {
            add('⚠️', msg('suggestion-blocked'));
        }
        if (topShare >= 0.5 && totalCalls >= 1000) {
            add('⚠️', msg('suggestion-top-share', {
                opcode: `<code>${escapeHtml(top.opcode)}</code>`,
                percent: (topShare * 100).toFixed(1)
            }));
        } else if (d.hotBlocks.length >= 3 && totalCalls >= 1000 && top3Share >= 0.8) {
            add('💡', msg('suggestion-top3-share', {
                count: 3,
                percent: (top3Share * 100).toFixed(1)
            }));
        }
        if (topRate >= 10000) {
            add('⚠️', msg('suggestion-hot-loop', {
                opcode: `<code>${escapeHtml(top.opcode)}</code>`,
                count: top.count,
                rate: Math.round(topRate)
            }));
        }
        if (top && top.count >= 1000000) {
            add('💡', msg('suggestion-hot-count', {
                opcode: `<code>${escapeHtml(top.opcode)}</code>`,
                count: top.count
            }));
        }
        if (callsPerSecond >= 200000) {
            add('⚠️', msg('suggestion-block-rate', {rate: Math.round(callsPerSecond)}));
        }
        if (ts.listItemsGrowth > 1000) {
            add('⚠️', msg('suggestion-list-growth', {count: ts.listItemsGrowth}));
        }
        if (ts.varCountGrowth > 500) {
            add('⚠️', msg('suggestion-var-growth', {count: ts.varCountGrowth}));
        }
        if (ts.maxCloneCount > maxClones * 0.66) {
            add('⚠️', msg('suggestion-clones', {count: ts.maxCloneCount, limit: maxClones}));
        }
        if (ts.finalCloneCount >= 50 && ts.finalCloneCount >= maxClones * 0.5 && ts.maxCloneCount <= maxClones * 0.66) {
            add('💡', msg('suggestion-clone-leak', {count: ts.finalCloneCount}));
        }
        if (ts.maxCloneCount >= 100 && ts.finalCloneCount <= maxClones * 0.2) {
            add('💡', msg('suggestion-clone-churn', {
                max: ts.maxCloneCount,
                final: ts.finalCloneCount
            }));
        }
        if (items.length === 0) {
            add('✅', msg('suggestion-ok'));
        }
        add('ℹ️', msg('suggestion-rerun'));
        return items;
    }

    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, c => {
            switch (c) {
                case '&': return '&';
                case '<': return '<';
                case '>': return '>';
                case '"': return '"';
                case "'": return "'";
                default: return c;
            }
        });
    }

    // 注册全局 API
    window.RWPerformanceProfiler = {
        start: startProfiling,
        stop: stopProfiling,
        isProfiling: () => profiling
    };

    // 工具菜单入口（通过 menu-bar.jsx 绑定全局事件）
    addon.settings.addEventListener('change', () => {
        profileDuration = addon.settings.get('profileDuration') * 1000;
        sampleInterval = addon.settings.get('sampleInterval');
        hotBlockLimit = addon.settings.get('hotBlockLimit');
    });
}

