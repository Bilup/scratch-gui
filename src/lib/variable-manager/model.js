const VARIABLE_TYPE = '';
const LIST_TYPE = 'list';
const CLOUD_PREFIX = '☁ ';

// 错误只带 code，具体文案由界面层翻译（model 不掺文案）
const ERROR_CODES = {
    NAME_REQUIRED: 'nameRequired',
    NAME_TAKEN: 'nameTaken',
    MISSING: 'missing',
    WORKSPACE_NOT_READY: 'workspaceNotReady'
};

const fail = (code, message) => Object.assign(new Error(message), {code});

const getOriginalTargets = vm => (
    vm && vm.runtime ? vm.runtime.targets.filter(target => target.isOriginal) : []
);

const getEditingTarget = vm => (
    vm && vm.runtime ? vm.runtime.getEditingTarget() : null
);

const getOwnerForVariable = (vm, variableId) => getOriginalTargets(vm).find(target => (
    Object.prototype.hasOwnProperty.call(target.variables || {}, variableId)
));

const fieldReferencesVariable = (field, variableId) => {
    if (!field || typeof field !== 'object') return false;
    return field.id === variableId || field.value === variableId;
};

const countVariableUses = (vm, variableId, localTargetId) => {
    const targets = localTargetId ?
        getOriginalTargets(vm).filter(target => target.id === localTargetId) :
        getOriginalTargets(vm);
    let count = 0;
    for (const target of targets) {
        const blocks = target.blocks && target.blocks._blocks ? Object.values(target.blocks._blocks) : [];
        for (const block of blocks) {
            if (Object.values(block.fields || {}).some(field => fieldReferencesVariable(field, variableId))) {
                count++;
            }
        }
    }
    return count;
};

// 一次遍历所有积木，统计「每个变量被多少块积木引用」。
//
// 旧实现（见上面的 countVariableUses）是每个变量各扫一遍全工程的积木，复杂度
// O(变量数 × 积木数)。变量一多就是灾难：实测 200 个变量 + 2000 块积木单次要 200ms，
// 而勾选/取消勾选监视器会触发两次全量收集，于是每一次点击都卡住 400ms 以上。
//
// 这里改成单次遍历：结果按 target 分桶（局部变量只统计自己角色的引用，和旧语义一致）。
const buildUsageIndex = (targets, variableIds) => {
    const total = new Map();
    const byTarget = new Map();
    for (const target of targets) {
        const blocks = target.blocks && target.blocks._blocks;
        if (!blocks) continue;
        const local = new Map();
        byTarget.set(target.id, local);
        for (const blockId in blocks) {
            const fields = blocks[blockId].fields;
            if (!fields) continue;
            // 同一块积木里的同一个变量只计一次（旧实现也是按积木计数）。
            // 用两个局部变量代替数组/闭包，避免在热循环里产生垃圾。
            let first = null;
            let second = null;
            for (const fieldName in fields) {
                const field = fields[fieldName];
                if (!field) continue;
                const fieldId = field.id;
                if (typeof fieldId === 'string' && variableIds.has(fieldId) &&
                    fieldId !== first && fieldId !== second) {
                    if (first === null) first = fieldId;
                    else second = fieldId;
                    total.set(fieldId, (total.get(fieldId) || 0) + 1);
                    local.set(fieldId, (local.get(fieldId) || 0) + 1);
                }
                const fieldValue = field.value;
                if (typeof fieldValue === 'string' && variableIds.has(fieldValue) &&
                    fieldValue !== first && fieldValue !== second) {
                    if (first === null) first = fieldValue;
                    else second = fieldValue;
                    total.set(fieldValue, (total.get(fieldValue) || 0) + 1);
                    local.set(fieldValue, (local.get(fieldValue) || 0) + 1);
                }
            }
        }
    }
    return {total, byTarget};
};

const monitorVisibleInState = (state, variableId) => {
    if (!state) return false;
    const monitor = typeof state.get === 'function' ? state.get(variableId) : state[variableId];
    if (!monitor) return false;
    return typeof monitor.get === 'function' ? !!monitor.get('visible') : !!monitor.visible;
};

const monitorVisible = (vm, variableId) => monitorVisibleInState(
    vm && vm.runtime && vm.runtime.getMonitorState ? vm.runtime.getMonitorState() : null,
    variableId
);

const collectVariables = vm => {
    if (!vm || !vm.runtime) return [];
    const targets = getOriginalTargets(vm);
    const editingTarget = getEditingTarget(vm);
    const stage = vm.runtime.getTargetForStage();
    const monitorState = vm.runtime.getMonitorState ? vm.runtime.getMonitorState() : null;

    const variableIds = new Set();
    for (const target of targets) {
        const variables = target.variables;
        if (!variables) continue;
        for (const variableId in variables) variableIds.add(variableId);
    }
    const usage = buildUsageIndex(targets, variableIds);

    const records = [];
    const addTarget = (target, scope) => {
        if (!target) return;
        const localUsage = usage.byTarget.get(target.id);
        for (const variable of Object.values(target.variables || {})) {
            if (variable.type !== VARIABLE_TYPE && variable.type !== LIST_TYPE) continue;
            const usageCount = scope === 'local' ?
                (localUsage && localUsage.get(variable.id)) || 0 :
                usage.total.get(variable.id) || 0;
            records.push({
                id: variable.id,
                name: variable.name,
                type: variable.type === LIST_TYPE ? 'list' : 'variable',
                scope,
                targetId: target.id,
                targetName: target.getName ? target.getName() : target.sprite && target.sprite.name,
                isCloud: !!variable.isCloud,
                // 列表做一份快照：VM 里的数组是原地改的（list_add 之类 push / 下标赋值），
                // 只有快照才能让 refreshValues 发现变化，别名会让「实时更新」彻底失效。
                value: Array.isArray(variable.value) ? variable.value.slice() : variable.value,
                usageCount,
                monitorVisible: monitorVisibleInState(monitorState, variable.id)
            });
        }
    };
    if (editingTarget && !editingTarget.isStage) addTarget(editingTarget, 'local');
    addTarget(stage, 'global');

    // 小写键只算一次：旧写法在每次比较里都重新 toLocaleLowerCase，排序是 O(n log n) 次转换
    const keyed = records.map(record => ({record, key: record.name.toLocaleLowerCase()}));
    keyed.sort((a, b) => a.key.localeCompare(b.key));
    return keyed.map(entry => entry.record);
};

const normalizeName = (name, cloud) => {
    let normalized = String(name || '').trim();
    if (cloud) {
        normalized = normalized.replace(/^☁\s*/, '').trim();
        if (normalized) normalized = `${CLOUD_PREFIX}${normalized}`;
    }
    return normalized;
};

const validateName = (records, name, {cloud = false, excludeId = null, scope = 'global', type = 'variable'} = {}) => {
    const normalized = normalizeName(name, cloud);
    if (!normalized) return {ok: false, error: ERROR_CODES.NAME_REQUIRED};
    const duplicate = records.some(record => (
        record.id !== excludeId &&
        record.type === type &&
        record.scope === scope &&
        record.name.toLocaleLowerCase() === normalized.toLocaleLowerCase()
    ));
    if (duplicate) return {ok: false, error: ERROR_CODES.NAME_TAKEN};
    return {ok: true, name: normalized};
};

const markProjectChanged = vm => {
    if (vm && vm.runtime && typeof vm.runtime.emitProjectChanged === 'function') {
        vm.runtime.emitProjectChanged();
    }
};

const setVariableValue = (vm, record, value) => {
    const next = record.type === 'list' ? (Array.isArray(value) ? value : []) : value;
    const changed = vm.setVariableValue(record.targetId, record.id, next);
    if (!changed) throw fail(ERROR_CODES.MISSING, 'The variable no longer exists.');
    const owner = getOwnerForVariable(vm, record.id);
    const variable = owner && owner.variables[record.id];
    if (variable && record.type === 'list') variable._monitorUpToDate = false;
    markProjectChanged(vm);
};

const renameVariable = (workspace, records, record, name) => {
    const validation = validateName(records, name, {
        cloud: record.isCloud,
        excludeId: record.id,
        scope: record.scope,
        type: record.type
    });
    if (!validation.ok) throw fail(validation.error, validation.error);
    if (!workspace || typeof workspace.renameVariableById !== 'function') {
        throw fail(ERROR_CODES.WORKSPACE_NOT_READY, 'The code workspace is not ready.');
    }
    workspace.renameVariableById(record.id, validation.name);
    return validation.name;
};

const createVariable = (workspace, records, {name, type, scope, cloud}) => {
    const isCloud = !!cloud && scope === 'global' && type === 'variable';
    const validation = validateName(records, name, {cloud: isCloud, scope, type});
    if (!validation.ok) throw fail(validation.error, validation.error);
    if (!workspace || typeof workspace.createVariable !== 'function') {
        throw fail(ERROR_CODES.WORKSPACE_NOT_READY, 'The code workspace is not ready.');
    }
    return workspace.createVariable(
        validation.name,
        type === 'list' ? LIST_TYPE : VARIABLE_TYPE,
        null,
        scope === 'local',
        isCloud
    );
};

const deleteVariable = (workspace, variableId) => {
    if (!workspace || typeof workspace.deleteVariableById !== 'function') {
        throw fail(ERROR_CODES.WORKSPACE_NOT_READY, 'The code workspace is not ready.');
    }
    workspace.deleteVariableById(variableId);
};

const setMonitorVisible = (vm, record, visible) => {
    const blocks = vm && vm.runtime && vm.runtime.monitorBlocks;
    if (!blocks || !blocks._blocks || !blocks._blocks[record.id]) return false;
    // changeBlock 收尾时自己会 emitProjectChanged()，这里不要再补一次：
    // 多一次就会让监听 PROJECT_CHANGED 的一方（变量管理器、自动保存）重复做一遍全量工作。
    blocks.changeBlock({
        id: record.id,
        element: 'checkbox',
        value: !!visible
    }, vm.runtime);
    return true;
};

export {
    CLOUD_PREFIX,
    ERROR_CODES,
    LIST_TYPE,
    VARIABLE_TYPE,
    collectVariables,
    countVariableUses,
    createVariable,
    deleteVariable,
    getOriginalTargets,
    monitorVisible,
    normalizeName,
    renameVariable,
    setMonitorVisible,
    setVariableValue,
    validateName
};
