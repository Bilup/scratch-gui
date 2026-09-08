/**
 * Pure layout helper for the History view's commit graph (Codebuddy / VS Code
 * "git log --graph" style). Given the branch-ordered commit graph produced by
 * `computeCommitGraph` (`src/lib/git/browser-git.js`), assign each commit a
 * lane index so the UI can render connecting lines and colored dots.
 *
 * Inputs are defensive: a missing or empty branch list collapses to a single
 * lane so callers don't have to special-case uninitialised repos.
 *
 * The output is suitable for feeding straight into an SVG (or anything else
 * that draws a graph). The unit semantics:
 *
 *   rowHeight   pixel height of each commit row
 *   laneWidth   horizontal distance between two adjacent lanes
 *   dotRadius   radius of the commit dot drawn at the centre of the row
 *
 * `rows` mirrors `graphNodes` order (which is sorted newest-first by
 * `computeCommitGraph`). `row.index` is therefore the y-position in row units.
 * `row.parents[].index` is the y-position of the parent commit in row units
 * (or -1 if the parent isn't in the visible window).
 */

const DEFAULT_LANE_WIDTH = 14;
const DEFAULT_DOT_RADIUS = 4;
const DEFAULT_ROW_HEIGHT = 28;

const layoutCommitGraph = ({
    graphNodes,
    graphBranchLogs,
    branchColors
} = {}) => {
    const nodes = Array.isArray(graphNodes) ? graphNodes : [];
    const logs = Array.isArray(graphBranchLogs) ? graphBranchLogs : [];
    const colors = branchColors || {};

    // Lane order = the order in which branches are listed in graphBranchLogs.
    // Branches not present there (e.g. detached HEAD) fall back to lane 0.
    const branchToLane = {};
    logs.forEach((entry, i) => {
        if (entry && entry.branch) {
            branchToLane[entry.branch] = i;
        }
    });
    const lanesCount = Math.max(logs.length, 1);

    // y-position lookup (each node's row in the time-descending list).
    const oidToIndex = new Map();
    nodes.forEach((node, i) => {
        if (node && node.oid) {
            oidToIndex.set(node.oid, i);
        }
    });

    // oid -> lane index. First seed branch heads (the tip of every branch is
    // at oids[0] in the time-descending log).
    const oidToLane = {};
    logs.forEach(entry => {
        if (!entry || !Array.isArray(entry.oids) || !entry.oids[0]) return;
        oidToLane[entry.oids[0]] = branchToLane[entry.branch];
    });

    // Walk every commit once. Most are already assigned (they belong to a
    // branch); for the rest pick the smallest lane among branches that
    // contain the commit, else inherit the first parent's lane.
    nodes.forEach(node => {
        if (!node || !node.oid) return;
        if (oidToLane[node.oid] !== undefined) return;
        const containing = (node.branches || []).filter(b => branchToLane[b] !== undefined);
        if (containing.length) {
            let best = containing[0];
            for (const b of containing) {
                if (branchToLane[b] < branchToLane[best]) best = b;
            }
            oidToLane[node.oid] = branchToLane[best];
            return;
        }
        const firstParent = (node.parents || [])[0];
        if (firstParent && oidToLane[firstParent] !== undefined) {
            oidToLane[node.oid] = oidToLane[firstParent];
            return;
        }
        oidToLane[node.oid] = 0;
    });

    const rows = nodes.map((node, i) => {
        const lane = oidToLane[node.oid] || 0;
        const firstBranch = (node.branches || [])[0];
        const color = (firstBranch && colors[firstBranch]) || '#888';
        const parents = (node.parents || []).map(poid => ({
            oid: poid,
            lane: oidToLane[poid] !== undefined ? oidToLane[poid] : 0,
            index: oidToIndex.has(poid) ? oidToIndex.get(poid) : -1
        }));
        return {
            oid: node.oid,
            index: i,
            lane,
            color,
            branches: node.branches || [],
            parents,
            commit: node.commit || {}
        };
    });

    return {
        rows,
        lanesCount,
        branchToLane,
        laneWidth: DEFAULT_LANE_WIDTH,
        dotRadius: DEFAULT_DOT_RADIUS,
        rowHeight: DEFAULT_ROW_HEIGHT
    };
};

export default layoutCommitGraph;
