/**
 * Timing marks for the local project-loading path.
 *
 * Loading a project from a file is a pipeline that spans several modules -- file
 * read, safety restore point, VM deserialization (unzip, validate, decode), the
 * optional embedded-repository import, and the closing of the loading overlay --
 * and which stage dominates depends on the project. These marks make the
 * breakdown of a single load visible in the browser's Performance panel and in
 * the console, so an optimization can be attributed to a stage instead of guessed
 * at.
 *
 * Every mark shares the `mw:load:` prefix, so filtering the Performance panel by
 * that string shows the whole pipeline.
 */

/* eslint-disable no-console */

const PREFIX = 'mw:load:';
const START = `${PREFIX}file-selected`;

const supported = typeof performance !== 'undefined' &&
    typeof performance.mark === 'function' &&
    typeof performance.measure === 'function';

let stages = [];

/**
 * Begin a new load, discarding anything recorded for the previous one.
 */
const resetLoadTiming = () => {
    stages = [];
    if (!supported) return;
    try {
        performance.clearMarks(START);
    } catch (e) {
        // Marks are a diagnostic; never let them break a load.
    }
};

/**
 * Record that `stage` has been reached. Also marks the start of the measurement
 * window when `stage` is the first one.
 * @param {string} stage A short stage name, e.g. 'vm-load'.
 */
const markLoadStage = stage => {
    if (!supported || !stage) return;
    const name = PREFIX + stage;
    try {
        performance.mark(name);
    } catch (e) {
        return;
    }
    if (stages.indexOf(stage) === -1) {
        stages.push(stage);
    }
};

/**
 * Measure every recorded stage from the moment the file was selected, log the
 * breakdown once, and expose it as `window.__mwLastProjectLoad` so an automated
 * check can read the numbers without parsing the console.
 * @return {?object} Stage durations in milliseconds, or null when nothing was measured.
 */
const reportLoadTiming = () => {
    const recorded = stages;
    stages = [];
    if (!supported || recorded.length === 0) return null;

    const timings = {};
    for (const stage of recorded) {
        const name = PREFIX + stage;
        try {
            performance.measure(name, START, name);
            const entries = performance.getEntriesByName(name, 'measure');
            const last = entries[entries.length - 1];
            if (last) timings[stage] = Math.round(last.duration * 10) / 10;
        } catch (e) {
            // A stage recorded while the start mark was missing cannot be measured.
        }
    }
    // Drop the measures these marks produced; they exist only for this report.
    for (const stage of recorded) {
        try {
            performance.clearMeasures(PREFIX + stage);
        } catch (e) {
            // ignore
        }
    }

    const summary = {
        stages: timings,
        // The last stage reached is the end of the load, so its duration measured
        // from file selection is the whole load.
        total: timings[recorded[recorded.length - 1]]
    };
    try {
        window.__mwLastProjectLoad = summary;
    } catch (e) {
        // ignore
    }
    console.log('[mw:load] local project load, ms cumulative from file selection', timings);
    return summary;
};

export {
    resetLoadTiming,
    markLoadStage,
    reportLoadTiming
};
