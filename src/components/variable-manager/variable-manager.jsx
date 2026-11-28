import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import VM from 'scratch-vm';
import {
    Check,
    ChevronLeft,
    ChevronRight,
    Cloud,
    Database,
    Eye,
    EyeOff,
    List,
    Plus,
    RefreshCw,
    Search,
    Trash2,
    Variable,
    X
} from 'lucide-react';

import Modal from '../../containers/windowed-modal.jsx';
import classNames from 'classnames';
import SelectMenu from '../../community/components/ui/SelectMenu.jsx';
import {
    ModalSidebar,
    ModalSidebarContent,
    ModalSidebarFooter,
    ModalSidebarItem,
    ModalSidebarLayout
} from '../modal-sidebar/modal-sidebar.jsx';
import lazyScratchBlocks from '../../lib/tw-lazy-scratch-blocks.js';
import {getSetting, onSettingChanged} from '../../lib/variable-manager/settings.js';
import {
    collectVariables,
    createVariable,
    deleteVariable,
    ERROR_CODES,
    getOriginalTargets,
    monitorVisible,
    renameVariable,
    setMonitorVisible,
    setVariableValue
} from '../../lib/variable-manager/model.js';

import styles from './variable-manager.css';

/* eslint-disable react/jsx-no-bind */

const PAGE_SIZE = 50;

const messages = defineMessages({
    title: {
        id: 'mw.variableManager.title',
        defaultMessage: 'Variable Manager'
    },
    search: {
        id: 'mw.variableManager.search',
        defaultMessage: 'Search names and values'
    },
    selectedSprite: {
        id: 'mw.variableManager.selectedSprite',
        defaultMessage: 'Editing data for'
    },
    all: {
        id: 'mw.variableManager.filter.all',
        defaultMessage: 'All'
    },
    variables: {
        id: 'mw.variableManager.filter.variables',
        defaultMessage: 'Variables'
    },
    lists: {
        id: 'mw.variableManager.filter.lists',
        defaultMessage: 'Lists'
    },
    cloud: {
        id: 'mw.variableManager.filter.cloud',
        defaultMessage: 'Cloud'
    },
    global: {
        id: 'mw.variableManager.scope.global',
        defaultMessage: 'For all sprites'
    },
    local: {
        id: 'mw.variableManager.scope.local',
        defaultMessage: 'For this sprite'
    },
    addData: {
        id: 'mw.variableManager.addData',
        defaultMessage: 'New data'
    },
    empty: {
        id: 'mw.variableManager.empty',
        defaultMessage: 'No matching data'
    },
    emptyHelp: {
        id: 'mw.variableManager.emptyHelp',
        defaultMessage: 'Try another filter, or create a variable or list.'
    },
    select: {
        id: 'mw.variableManager.select',
        defaultMessage: 'Select something to inspect'
    },
    selectHelp: {
        id: 'mw.variableManager.selectHelp',
        defaultMessage: 'Choose a variable or list to edit its name, value, items, and stage monitor.'
    },
    name: {
        id: 'mw.variableManager.name',
        defaultMessage: 'Name'
    },
    value: {
        id: 'mw.variableManager.value',
        defaultMessage: 'Value'
    },
    valueHint: {
        id: 'mw.variableManager.valueHint',
        defaultMessage: 'Press Ctrl+Enter to save.',
        description: 'Hint under the value editor telling the user how to save without leaving the field'
    },
    uses: {
        id: 'mw.variableManager.uses',
        defaultMessage: '{count, plural, one {# block use} other {# block uses}}'
    },
    monitor: {
        id: 'mw.variableManager.monitor',
        defaultMessage: 'Show monitor on stage'
    },
    monitorUnavailable: {
        id: 'mw.variableManager.monitorUnavailable',
        defaultMessage: 'Open the Variables category once before changing this monitor.'
    },
    save: {
        id: 'mw.variableManager.save',
        defaultMessage: 'Save'
    },
    delete: {
        id: 'mw.variableManager.delete',
        defaultMessage: 'Delete'
    },
    addItem: {
        id: 'mw.variableManager.addItem',
        defaultMessage: 'Add item'
    },
    clearList: {
        id: 'mw.variableManager.clearList',
        defaultMessage: 'Clear list'
    },
    newTitle: {
        id: 'mw.variableManager.newTitle',
        defaultMessage: 'Create project data'
    },
    create: {
        id: 'mw.variableManager.create',
        defaultMessage: 'Create'
    },
    cancel: {
        id: 'mw.variableManager.cancel',
        defaultMessage: 'Cancel'
    },
    type: {
        id: 'mw.variableManager.type',
        defaultMessage: 'Type'
    },
    scope: {
        id: 'mw.variableManager.scope',
        defaultMessage: 'Available to'
    },
    cloudOption: {
        id: 'mw.variableManager.cloudOption',
        defaultMessage: 'Cloud variable'
    },
    variableType: {
        id: 'mw.variableManager.variableType',
        defaultMessage: 'Variable'
    },
    listType: {
        id: 'mw.variableManager.listType',
        defaultMessage: 'List'
    },
    refresh: {
        id: 'mw.variableManager.refresh',
        defaultMessage: 'Refresh data'
    },
    deleteConfirmTitle: {
        id: 'mw.variableManager.deleteConfirmTitle',
        defaultMessage: 'Delete variable?',
        description: 'Title of the dialog asking to confirm deleting a variable or list'
    },
    deleteConfirm: {
        id: 'mw.variableManager.deleteConfirm',
        defaultMessage: 'Delete "{name}"? Blocks using it may also be removed.'
    },
    clearConfirmTitle: {
        id: 'mw.variableManager.clearConfirmTitle',
        defaultMessage: 'Clear list?',
        description: 'Title of the dialog asking to confirm removing every item from a list'
    },
    clearConfirm: {
        id: 'mw.variableManager.clearConfirm',
        defaultMessage: 'Remove every item from "{name}"?'
    },
    itemNumber: {
        id: 'mw.variableManager.itemNumber',
        defaultMessage: 'Item {index}'
    },
    showingItems: {
        id: 'mw.variableManager.showingItems',
        defaultMessage: '{start}-{end} of {count}'
    },
    badgeGlobal: {
        id: 'mw.variableManager.scope.globalBadge',
        defaultMessage: 'Global',
        description: 'Badge on a variable that every sprite can use'
    },
    emptyList: {
        id: 'mw.variableManager.emptyList',
        defaultMessage: 'Empty list'
    },
    emptyValue: {
        id: 'mw.variableManager.emptyValue',
        defaultMessage: 'Empty value'
    },
    listPreview: {
        id: 'mw.variableManager.listPreview',
        defaultMessage: '{count, plural, one {# item} other {# items}} · {preview}',
        description: 'Preview of a list value: item count, then the first few items'
    },
    errorNameRequired: {
        id: 'mw.variableManager.errorNameRequired',
        defaultMessage: 'Enter a name.'
    },
    errorNameTaken: {
        id: 'mw.variableManager.errorNameTaken',
        defaultMessage: 'That name is already in use.'
    },
    errorMissing: {
        id: 'mw.variableManager.errorMissing',
        defaultMessage: 'The variable no longer exists.'
    },
    errorWorkspaceNotReady: {
        id: 'mw.variableManager.errorWorkspaceNotReady',
        defaultMessage: 'Open the Variables category once before changing this value.'
    },
    errorTooLarge: {
        id: 'mw.variableManager.errorTooLarge',
        defaultMessage: 'This list is larger than the {limit} character editing limit.'
    },
    deleteItemAria: {
        id: 'mw.variableManager.deleteItemAria',
        defaultMessage: 'Delete item {index}',
        description: 'Accessible label for the button that removes one list item'
    },
    previousPage: {
        id: 'mw.variableManager.previousPage',
        defaultMessage: 'Previous list page'
    },
    nextPage: {
        id: 'mw.variableManager.nextPage',
        defaultMessage: 'Next list page'
    },
    detailsAria: {
        id: 'mw.variableManager.detailsAria',
        defaultMessage: '{name} details',
        description: 'Accessible label for the detail panel of the selected variable or list'
    },
    saveName: {
        id: 'mw.variableManager.saveName',
        defaultMessage: 'Save name'
    },
    clearSearch: {
        id: 'mw.variableManager.clearSearch',
        defaultMessage: 'Clear search'
    },
    listAria: {
        id: 'mw.variableManager.listAria',
        defaultMessage: 'Project variables and lists',
        description: 'Accessible label for the list of variables and lists'
    },
    newSubtitle: {
        id: 'mw.variableManager.newSubtitle',
        defaultMessage: 'Variables store one value. Lists keep an ordered collection.',
        description: 'Explains the difference between a variable and a list on the create panel'
    },
    itemCount: {
        id: 'mw.variableManager.itemCount',
        defaultMessage: '{count, plural, one {# item} other {# items}}',
        description: 'Number of variables and lists currently listed'
    },
    addFirstItem: {
        id: 'mw.variableManager.addFirstItem',
        defaultMessage: 'Add the first item'
    },
    sectionsAria: {
        id: 'mw.variableManager.sectionsAria',
        defaultMessage: 'Variable Manager sections',
        description: 'Accessible label for the left sidebar of the variable manager'
    },
    filterScopeAria: {
        id: 'mw.variableManager.filterScopeAria',
        defaultMessage: 'Filter by scope',
        description: 'Accessible label for the dropdown that filters variables by scope'
    },
    stageTarget: {
        // 复用编辑器里已有的「舞台」词条，保证和角色选择器一致
        id: 'gui.stageSelector.stage',
        defaultMessage: 'Stage',
        description: 'Name of the stage shown in the target picker'
    }
});

const errorMessages = {
    [ERROR_CODES.NAME_REQUIRED]: messages.errorNameRequired,
    [ERROR_CODES.NAME_TAKEN]: messages.errorNameTaken,
    [ERROR_CODES.MISSING]: messages.errorMissing,
    [ERROR_CODES.WORKSPACE_NOT_READY]: messages.errorWorkspaceNotReady
};

// model 只抛语义码，这里统一翻译；没有 code 的（意外异常）退回原文
const errorMessage = (intl, error) => {
    const definition = error && errorMessages[error.code];
    if (definition) return intl.formatMessage(definition);
    return (error && error.message) || '';
};

const valuePreview = (record, intl) => {
    if (record.type === 'list') {
        const values = Array.isArray(record.value) ? record.value : [];
        if (!values.length) return intl.formatMessage(messages.emptyList);
        const preview = values.slice(0, 3).map(value => String(value))
            .join(', ');
        return intl.formatMessage(messages.listPreview, {count: values.length, preview});
    }
    const value = String(record.value);
    return value || intl.formatMessage(messages.emptyValue);
};

// 搜索文本只算一次。列表可能是几十万项，join 一次就是几毫秒；而记录对象在内容
// 不变时会被复用（见 mergeRecords），所以 WeakMap 缓存天然跟着记录一起失效。
const searchTextCache = new WeakMap();
const searchTextOf = record => {
    if (!searchTextCache.has(record)) {
        searchTextCache.set(record, Array.isArray(record.value) ?
            record.value.join(' ') :
            String(record.value));
    }
    return searchTextCache.get(record);
};

// 结构没变就复用旧记录对象。行组件是 React.memo 的，身份稳定时一次「全量刷新」
// 只是重新过滤一遍，不会重绘任何一行 —— 勾一个监视器也只重绘那一行。
// 列表是快照（collectVariables 会 slice），所以按内容比较而不是按引用。
const sameValue = (a, b) => {
    if (a === b) return true;
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};

const sameRecord = (a, b) => (
    a.name === b.name &&
    a.type === b.type &&
    a.scope === b.scope &&
    a.targetId === b.targetId &&
    a.targetName === b.targetName &&
    a.isCloud === b.isCloud &&
    a.usageCount === b.usageCount &&
    a.monitorVisible === b.monitorVisible &&
    // monitorAvailable 会随「积木面板是否已建出监视器积木」变化，必须参与比较，
    // 否则第一次打开变量分类后复选框仍然是禁用的
    a.monitorAvailable === b.monitorAvailable &&
    sameValue(a.value, b.value)
);

const mergeRecords = (previous, next) => {
    if (!previous.length) return next;
    const previousById = new Map();
    for (const record of previous) previousById.set(record.id, record);
    let changed = previous.length !== next.length;
    const merged = next.map(record => {
        const old = previousById.get(record.id);
        if (old && sameRecord(old, record)) return old;
        changed = true;
        return record;
    });
    if (changed) return merged;
    // 顺序也可能变（改名会重排），这一层用身份比对兜住
    for (let i = 0; i < merged.length; i++) {
        if (merged[i] !== previous[i]) return merged;
    }
    return previous;
};

// 前导 + 尾随节流。TARGETS_UPDATE / workspaceUpdate 在项目运行或拖积木时是
// 每帧一条的事件，直接全量刷新会把主线程占满；也不能用 debounce（连续事件流
// 会无限重置尾随，界面反而一直不更新）。同 lib/components/vm-listener-hoc.jsx。
const throttle = (fn, delay) => {
    let timer = null;
    let lastRun = 0;
    let pending = null;
    const run = args => {
        lastRun = Date.now();
        fn(...args);
    };
    return (...args) => {
        const elapsed = Date.now() - lastRun;
        if (elapsed >= delay) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            pending = null;
            run(args);
            return;
        }
        pending = args;
        if (timer) return;
        timer = setTimeout(() => {
            timer = null;
            if (!pending) return;
            const nextArgs = pending;
            pending = null;
            run(nextArgs);
        }, delay - elapsed);
    };
};

const buttonClass = (variant, small) => classNames(
    styles.button,
    styles[`button${variant}`],
    {[styles.buttonSmall]: small}
);

const CreatePanel = ({canCreateCloud, hasLocalTarget, intl, onCancel, onCreate}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('variable');
    const [scope, setScope] = useState(hasLocalTarget ? 'local' : 'global');
    const [cloud, setCloud] = useState(false);
    const [error, setError] = useState('');
    const nameRef = useRef(null);

    useEffect(() => {
        if (nameRef.current) nameRef.current.focus();
    }, []);

    const submit = event => {
        event.preventDefault();
        try {
            onCreate({name, type, scope, cloud});
        } catch (e) {
            setError(errorMessage(intl, e));
        }
    };

    const updateType = next => {
        setType(next);
        if (next === 'list') setCloud(false);
    };

    const updateScope = next => {
        setScope(next);
        if (next === 'local') setCloud(false);
    };

    return (
        <form
            className={styles.createPanel}
            onSubmit={submit}
        >
            <div className={styles.createHeader}>
                <div>
                    <h1>{intl.formatMessage(messages.newTitle)}</h1>
                    <p>{intl.formatMessage(messages.newSubtitle)}</p>
                </div>
            </div>
            <label className={styles.field}>
                <span>{intl.formatMessage(messages.name)}</span>
                <input
                    ref={nameRef}
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </label>
            <div className={styles.createGrid}>
                <div className={styles.field}>
                    <span>{intl.formatMessage(messages.type)}</span>
                    <SelectMenu
                        align="left"
                        ariaLabel={intl.formatMessage(messages.type)}
                        className={styles.mistwarpSelect}
                        compact
                        options={[
                            {value: 'variable', label: intl.formatMessage(messages.variableType)},
                            {value: 'list', label: intl.formatMessage(messages.listType)}
                        ]}
                        value={type}
                        onChange={updateType}
                        width="100%"
                    />
                </div>
                <div className={styles.field}>
                    <span>{intl.formatMessage(messages.scope)}</span>
                    <SelectMenu
                        align="left"
                        ariaLabel={intl.formatMessage(messages.scope)}
                        className={styles.mistwarpSelect}
                        compact
                        options={[
                            ...(hasLocalTarget ? [{
                                value: 'local',
                                label: intl.formatMessage(messages.local)
                            }] : []),
                            {value: 'global', label: intl.formatMessage(messages.global)}
                        ]}
                        value={scope}
                        onChange={updateScope}
                        width="100%"
                    />
                </div>
            </div>
            <label className={styles.checkRow}>
                <input
                    checked={cloud}
                    disabled={!canCreateCloud || scope !== 'global' || type !== 'variable'}
                    type="checkbox"
                    onChange={event => setCloud(event.target.checked)}
                />
                <Cloud size={16} />
                <span>{intl.formatMessage(messages.cloudOption)}</span>
            </label>
            {error && <div
                className={styles.error}
                role="alert"
            >{error}</div>}
            <div className={styles.createActions}>
                <button
                    type="button"
                    className={buttonClass('Secondary')}
                    onClick={onCancel}
                >
                    {intl.formatMessage(messages.cancel)}
                </button>
                <button
                    className={buttonClass('Primary')}
                    type="submit"
                >
                    <Plus size={16} />
                    {intl.formatMessage(messages.create)}
                </button>
            </div>
        </form>
    );
};

CreatePanel.propTypes = {
    canCreateCloud: PropTypes.bool,
    hasLocalTarget: PropTypes.bool,
    intl: PropTypes.shape({formatMessage: PropTypes.func.isRequired}),
    onCancel: PropTypes.func,
    onCreate: PropTypes.func
};

const ListEditor = ({intl, maxLength, onChange, onConfirm, record}) => {
    const [items, setItems] = useState(() => (Array.isArray(record.value) ? record.value.map(String) : []));
    const [page, setPage] = useState(0);
    const [error, setError] = useState('');
    const editing = useRef(false);

    useEffect(() => {
        if (editing.current) return;
        setItems(Array.isArray(record.value) ? record.value.map(String) : []);
        setPage(0);
        setError('');
    }, [record.id, record.value]);

    const pageCount = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    const safePage = Math.min(page, pageCount - 1);
    const start = safePage * PAGE_SIZE;
    const pageItems = items.slice(start, start + PAGE_SIZE);

    const commit = next => {
        const totalLength = next.reduce((sum, item) => sum + String(item).length, 0);
        if (totalLength > maxLength) {
            setError(intl.formatMessage(messages.errorTooLarge, {limit: maxLength.toLocaleString()}));
            return false;
        }
        setItems(next);
        setError('');
        onChange(next);
        return true;
    };

    const updateItem = (index, value) => {
        const next = items.slice();
        next[index] = value;
        commit(next);
    };

    const finishItem = () => {
        editing.current = false;
    };

    const handleItemKeyDown = (event, element) => {
        if (event.key === 'Enter') element.blur();
        if (event.key === 'Escape') {
            event.preventDefault();
            setItems(Array.isArray(record.value) ? record.value.map(String) : []);
            element.blur();
        }
    };

    const removeItem = index => {
        const next = items.filter((_, itemIndex) => itemIndex !== index);
        commit(next);
        if (start >= next.length && safePage > 0) setPage(safePage - 1);
    };

    const addItem = () => {
        const next = [...items, ''];
        if (commit(next)) setPage(Math.floor((next.length - 1) / PAGE_SIZE));
    };

    const clear = async () => {
        const confirmed = await onConfirm(
            intl.formatMessage(messages.clearConfirmTitle),
            intl.formatMessage(messages.clearConfirm, {name: record.name})
        );
        if (!confirmed) return;
        commit([]);
        setPage(0);
    };

    return (
        <div className={styles.listEditor}>
            <div className={styles.listToolbar}>
                <span>
                    {items.length ? intl.formatMessage(messages.showingItems, {
                        start: start + 1,
                        end: Math.min(start + PAGE_SIZE, items.length),
                        count: items.length
                    }) : intl.formatMessage(messages.emptyList)}
                </span>
                <div>
                    <button
                        type="button"
                        className={buttonClass('Secondary', true)}
                        onClick={addItem}
                    >
                        <Plus size={14} />
                        {intl.formatMessage(messages.addItem)}
                    </button>
                    <button
                        type="button"
                        className={buttonClass('Danger', true)}
                        disabled={!items.length}
                        onClick={clear}
                    >
                        {intl.formatMessage(messages.clearList)}
                    </button>
                </div>
            </div>
            {error && <div
                className={styles.error}
                role="alert"
            >{error}</div>}
            <div className={styles.listItems}>
                {pageItems.map((item, offset) => {
                    const index = start + offset;
                    return (
                        <div
                            className={styles.listItem}
                            key={index}
                        >
                            <span>{index + 1}</span>
                            <input
                                aria-label={intl.formatMessage(messages.itemNumber, {index: index + 1})}
                                data-index={index}
                                value={item}
                                onBlur={finishItem}
                                onChange={event => updateItem(index, event.target.value)}
                                onFocus={() => {
                                    editing.current = true;
                                }}
                                onKeyDown={event => handleItemKeyDown(event, event.currentTarget)}
                            />
                            <button
                                type="button"
                                aria-label={intl.formatMessage(messages.deleteItemAria, {index: index + 1})}
                                className={styles.iconButton}
                                data-index={index}
                                onClick={() => removeItem(index)}
                            >
                                <Trash2 size={15} />
                            </button>
                        </div>
                    );
                })}
                {!items.length && (
                    <button
                        type="button"
                        className={styles.emptyListButton}
                        onClick={addItem}
                    >
                        <Plus size={18} />
                        {intl.formatMessage(messages.addFirstItem)}
                    </button>
                )}
            </div>
            {pageCount > 1 && (
                <div className={styles.pagination}>
                    <button
                        type="button"
                        aria-label={intl.formatMessage(messages.previousPage)}
                        disabled={safePage === 0}
                        onClick={() => setPage(safePage - 1)}
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <span>{safePage + 1} {' / '} {pageCount}</span>
                    <button
                        type="button"
                        aria-label={intl.formatMessage(messages.nextPage)}
                        disabled={safePage >= pageCount - 1}
                        onClick={() => setPage(safePage + 1)}
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            )}
        </div>
    );
};

ListEditor.propTypes = {
    intl: PropTypes.shape({formatMessage: PropTypes.func.isRequired}),
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
    record: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.array
    })
};

const DetailPanel = ({intl, onConfirm, onDelete, onMonitorChange, onRename, onValueChange, record}) => {
    const [name, setName] = useState(record.name);
    const [value, setValue] = useState(String(record.value));
    const [error, setError] = useState('');
    const editingValue = useRef(false);

    useEffect(() => {
        setName(record.name);
        if (!editingValue.current) setValue(record.type === 'list' ? '' : String(record.value));
        setError('');
    }, [record.id, record.name, record.value, record.type]);

    const saveName = () => {
        try {
            const saved = onRename(record, name);
            setName(saved);
            setError('');
        } catch (e) {
            setError(errorMessage(intl, e));
        }
    };

    const saveValue = () => {
        editingValue.current = false;
        if (value === String(record.value)) return;
        try {
            onValueChange(record, value);
            setError('');
        } catch (e) {
            setError(errorMessage(intl, e));
        }
    };

    const handleNameKey = event => {
        if (event.key === 'Enter') saveName();
        if (event.key === 'Escape') {
            event.preventDefault();
            setName(record.name);
        }
    };

    const handleValueKey = event => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') saveValue();
        if (event.key === 'Escape' && value !== String(record.value)) {
            event.preventDefault();
            setValue(String(record.value));
        }
    };

    const requestDelete = async () => {
        // Blockly provides its own usage-aware confirmation when more than one
        // block references the variable. Avoid making the user confirm twice.
        if (record.usageCount > 1) {
            onDelete(record);
            return;
        }
        const confirmed = await onConfirm(
            intl.formatMessage(messages.deleteConfirmTitle),
            intl.formatMessage(messages.deleteConfirm, {name: record.name})
        );
        if (confirmed) onDelete(record);
    };

    const TypeIcon = record.isCloud ? Cloud : record.type === 'list' ? List : Variable;
    const monitorAvailable = !!record.monitorAvailable;

    return (
        <section
            className={styles.detail}
            aria-label={intl.formatMessage(messages.detailsAria, {name: record.name})}
        >
            <div className={styles.detailHeading}>
                <div
                    className={styles.detailIcon}
                    data-kind={record.isCloud ? 'cloud' : record.type}
                >
                    <TypeIcon size={22} />
                </div>
                <div>
                    <h2>{record.name}</h2>
                    <p>
                        {record.scope === 'global' ? intl.formatMessage(messages.global) : record.targetName}
                        {' · '}
                        {intl.formatMessage(messages.uses, {count: record.usageCount})}
                    </p>
                </div>
            </div>

            <label className={styles.field}>
                <span>{intl.formatMessage(messages.name)}</span>
                <div className={styles.inputAction}>
                    <input
                        value={name}
                        onBlur={saveName}
                        onChange={event => setName(event.target.value)}
                        onKeyDown={handleNameKey}
                    />
                    <button
                        type="button"
                        aria-label={intl.formatMessage(messages.saveName)}
                        onClick={saveName}
                    >
                        <Check size={16} />
                    </button>
                </div>
            </label>

            {error && <div
                className={styles.error}
                role="alert"
            >{error}</div>}

            {record.type === 'list' ? (
                <ListEditor
                    intl={intl}
                    maxLength={getSetting('list_max_length')}
                    record={record}
                    onChange={items => onValueChange(record, items)}
                    onConfirm={onConfirm}
                />
            ) : (
                <label className={styles.field}>
                    <span>{intl.formatMessage(messages.value)}</span>
                    <textarea
                        className={styles.valueEditor}
                        value={value}
                        onBlur={saveValue}
                        onChange={event => setValue(event.target.value)}
                        onFocus={() => {
                            editingValue.current = true;
                        }}
                        onKeyDown={handleValueKey}
                    />
                    <span className={styles.fieldHelp}>
                        {intl.formatMessage(messages.valueHint)}
                    </span>
                    <button
                        type="button"
                        className={buttonClass('Primary')}
                        onClick={saveValue}
                    >
                        {intl.formatMessage(messages.save)}
                    </button>
                </label>
            )}

            <div className={styles.detailFooter}>
                <label
                    className={monitorAvailable ? styles.monitorToggle : styles.monitorToggleDisabled}
                    title={monitorAvailable ? '' : intl.formatMessage(messages.monitorUnavailable)}
                >
                    <input
                        checked={record.monitorVisible}
                        disabled={!monitorAvailable}
                        type="checkbox"
                        onChange={event => onMonitorChange(record, event.target.checked)}
                    />
                    {record.monitorVisible ? <Eye size={17} /> : <EyeOff size={17} />}
                    <span>{intl.formatMessage(messages.monitor)}</span>
                </label>
                <button
                    type="button"
                    className={buttonClass('Danger')}
                    onClick={requestDelete}
                >
                    <Trash2 size={16} />
                    {intl.formatMessage(messages.delete)}
                </button>
            </div>
        </section>
    );
};

DetailPanel.propTypes = {
    intl: PropTypes.shape({formatMessage: PropTypes.func.isRequired}),
    onConfirm: PropTypes.func.isRequired,
    onDelete: PropTypes.func,
    onMonitorChange: PropTypes.func,
    onRename: PropTypes.func,
    onValueChange: PropTypes.func,
    record: PropTypes.shape({
        id: PropTypes.string,
        isCloud: PropTypes.bool,
        monitorAvailable: PropTypes.bool,
        monitorVisible: PropTypes.bool,
        name: PropTypes.string,
        scope: PropTypes.string,
        targetName: PropTypes.string,
        type: PropTypes.string,
        usageCount: PropTypes.number,
        value: PropTypes.any
    })
};

// 一行变量/列表。单独抽成 React.memo 组件：变量多的时候，勾一个监视器不应该
// 让另外几百行跟着重绘（每行都要 formatMessage + 生成预览文本）。
const VariableRowComponent = ({intl, onSelect, record, selected}) => {
    const Icon = record.isCloud ? Cloud : record.type === 'list' ? List : Variable;
    return (
        <button
            type="button"
            aria-selected={selected}
            className={selected ? styles.dataRowSelected : styles.dataRow}
            data-var-row=""
            role="option"
            onClick={() => onSelect(record.id)}
        >
            <Icon
                className={styles.rowIcon}
                data-kind={record.isCloud ? 'cloud' : record.type}
                size={17}
            />
            <span className={styles.rowContent}>
                <span className={styles.rowTop}>
                    <strong>{record.name}</strong>
                    <span>{record.scope === 'global' ?
                        intl.formatMessage(messages.badgeGlobal) :
                        record.targetName}</span>
                </span>
                <span className={styles.rowPreview}>
                    {valuePreview(record, intl)}
                </span>
            </span>
            {record.monitorVisible && <Eye
                className={styles.rowMonitor}
                size={14}
            />}
        </button>
    );
};

VariableRowComponent.propTypes = {
    intl: PropTypes.shape({formatMessage: PropTypes.func.isRequired}),
    onSelect: PropTypes.func.isRequired,
    record: PropTypes.shape({
        id: PropTypes.string,
        isCloud: PropTypes.bool,
        monitorVisible: PropTypes.bool,
        name: PropTypes.string,
        scope: PropTypes.string,
        targetName: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.any
    }).isRequired,
    selected: PropTypes.bool
};

const VariableRow = React.memo(VariableRowComponent);

// ---- 列表窗口化 ------------------------------------------------------------
// 变量动辄几百上千条，全部渲染等于一次性建几千个 DOM 节点，打开面板会明显顿一下。
// 这里只渲染可视区上下各多 OVERSCAN 行，其余用上下两块撑高占位。
//
// 行高在首屏提交后实测（首屏先用估值，useLayoutEffect 里量到真值立刻纠正，
// 纠正发生在 paint 之前，所以看不到中间态）。测不到高度时（容器隐藏、jsdom）
// 自动退回全量渲染，保证任何环境下都不会出现空白列表。
const ROW_HEIGHT_ESTIMATE = 64;
const VIEWPORT_ESTIMATE = 640;
const OVERSCAN = 5;
const VIRTUAL_MIN_ROWS = 40;

// 纯函数（单独导出便于单测）：算出该渲染哪一段。
// rowHeight <= 1 表示没量到真实行高，此时不窗口化。
const getVisibleRange = (total, rowHeight, viewport, scrollTop) => {
    const virtual = rowHeight > 1 && total > VIRTUAL_MIN_ROWS && (total * rowHeight) > (viewport * 1.5);
    if (!virtual) return {end: total, start: 0, virtual: false};
    const capacity = Math.ceil(viewport / rowHeight) + 1;
    const maxStart = Math.max(0, total - capacity - (OVERSCAN * 2));
    // 列表变短（过滤）时 scrollTop 可能还停在旧位置，这里钳住，避免算出空窗口
    const start = Math.min(Math.max(0, Math.floor(scrollTop / rowHeight) - OVERSCAN), maxStart);
    return {end: Math.min(total, start + capacity + (OVERSCAN * 2)), start, virtual: true};
};

const VariableList = ({empty, intl, onSelect, records, selectedId}) => {
    const listRef = useRef(null);
    const frameRef = useRef(0);
    const [metrics, setMetrics] = useState(null);

    const measure = useCallback(() => {
        const list = listRef.current;
        if (!list) return;
        let rowHeight = 0;
        const rows = list.querySelectorAll('[data-var-row]');
        if (rows.length > 1) {
            // 用相邻两行的原点差，margin 也一并算进去，避免累加误差
            rowHeight = rows[1].getBoundingClientRect().top - rows[0].getBoundingClientRect().top;
        }
        const next = {
            rowHeight: rowHeight > 1 ? rowHeight : 0,
            scrollTop: list.scrollTop,
            viewport: list.clientHeight
        };
        setMetrics(previous => {
            if (previous &&
                Math.abs(previous.rowHeight - next.rowHeight) < 0.5 &&
                Math.abs(previous.scrollTop - next.scrollTop) < 1 &&
                Math.abs(previous.viewport - next.viewport) < 1) {
                return previous;
            }
            return next;
        });
    }, []);

    // 每次提交后实测一次，值没变就不 setState，不会来回抖
    useLayoutEffect(() => {
        measure();
    });

    useEffect(() => {
        window.addEventListener('resize', measure);
        // 模态的高度是由 WindowedModal 直接改 style 设的，不会触发 window resize；
        // 容器尺寸变了必须重新量，否则窗口算小了底部会留白
        const list = listRef.current;
        const Observer = window.ResizeObserver;
        const observer = list && typeof Observer === 'function' ? new Observer(() => measure()) : null;
        if (observer) observer.observe(list);
        return () => {
            window.removeEventListener('resize', measure);
            if (observer) observer.disconnect();
            if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
        };
    }, [measure]);

    const handleScroll = useCallback(event => {
        // React 16 的合成事件是池化的，currentTarget 在回调返回后会被清空，先取出来
        const list = event.currentTarget;
        if (frameRef.current) return;
        frameRef.current = window.requestAnimationFrame(() => {
            frameRef.current = 0;
            const scrollTop = list.scrollTop;
            setMetrics(previous => {
                if (previous && Math.abs(previous.scrollTop - scrollTop) < 1) return previous;
                return {
                    rowHeight: previous ? previous.rowHeight : 0,
                    viewport: previous ? previous.viewport : list.clientHeight,
                    scrollTop
                };
            });
        });
    }, []);

    const total = records.length;
    const rowHeight = metrics ? metrics.rowHeight : ROW_HEIGHT_ESTIMATE;
    const viewport = metrics && metrics.viewport > 0 ? metrics.viewport : VIEWPORT_ESTIMATE;
    const scrollTop = metrics ? metrics.scrollTop : 0;
    const {virtual, start, end} = getVisibleRange(total, rowHeight, viewport, scrollTop);

    return (
        <div
            aria-label={intl.formatMessage(messages.listAria)}
            className={styles.dataList}
            ref={listRef}
            role="listbox"
            onScroll={handleScroll}
        >
            {virtual && start > 0 && <div
                aria-hidden="true"
                style={{height: start * rowHeight}}
            />}
            {records.slice(start, end).map(record => (
                <VariableRow
                    intl={intl}
                    key={record.id}
                    record={record}
                    selected={record.id === selectedId}
                    onSelect={onSelect}
                />
            ))}
            {virtual && end < total && <div
                aria-hidden="true"
                style={{height: (total - end) * rowHeight}}
            />}
            {!total && empty}
        </div>
    );
};

VariableList.propTypes = {
    empty: PropTypes.node,
    intl: PropTypes.shape({formatMessage: PropTypes.func.isRequired}),
    onSelect: PropTypes.func.isRequired,
    records: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    selectedId: PropTypes.string
};

const VariableManager = props => {
    const {intl, openSimpleDialog, vm} = props;
    const [workspace, setWorkspace] = useState(null);
    const [records, setRecords] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [filter, setFilter] = useState(() => getSetting('default_filter'));
    const [scope, setScope] = useState('all');
    const [query, setQuery] = useState('');
    const [creating, setCreating] = useState(false);
    const [mobileView, setMobileView] = useState('list');

    const confirm = useCallback((title, message) => new Promise(resolve => {
        openSimpleDialog({
            type: 'confirm',
            title,
            message,
            onOk: () => resolve(true),
            onCancel: () => resolve(false)
        });
    }), [openSimpleDialog]);

    const refresh = useCallback(() => {
        const monitorBlocks = vm.runtime.monitorBlocks;
        const monitorBlockMap = monitorBlocks && monitorBlocks._blocks;
        const next = collectVariables(vm).map(record => ({
            ...record,
            monitorAvailable: !!(monitorBlockMap && monitorBlockMap[record.id])
        }));
        // 结构没变的记录沿用旧对象，否则一次刷新会让所有行重绘
        setRecords(previous => mergeRecords(previous, next));
        setSelectedId(current => (current && next.some(record => record.id === current) ? current : null));
    }, [vm]);

    const refreshValues = useCallback(() => {
        setRecords(current => {
            // 目标查找一次建表：变量多的时候逐条 getTargetById（线性查找）会白扫很多遍
            const targetsById = new Map();
            const allTargets = vm.runtime.targets || [];
            for (const target of allTargets) targetsById.set(target.id, target);

            let changed = false;
            const next = current.map(record => {
                const target = targetsById.get(record.targetId);
                const variable = target && target.variables && target.variables[record.id];
                if (!variable) return record;
                const nextMonitorVisible = monitorVisible(vm, record.id);
                const valueUnchanged = Array.isArray(variable.value) && Array.isArray(record.value) ?
                    variable.value.length === record.value.length &&
                        variable.value.every((value, index) => value === record.value[index]) :
                    variable.value === record.value;
                if (valueUnchanged && nextMonitorVisible === record.monitorVisible) return record;
                changed = true;
                return {
                    ...record,
                    value: Array.isArray(variable.value) ? variable.value.slice() : variable.value,
                    monitorVisible: nextMonitorVisible
                };
            });
            // 没有任何值变化时保持原数组：默认 50ms 一跳，否则等于每秒 20 次全量重绘
            return changed ? next : current;
        });
    }, [vm]);

    useEffect(() => {
        let cancelled = false;
        lazyScratchBlocks.load().then(() => {
            if (cancelled) return;
            const ScratchBlocks = lazyScratchBlocks.get();
            setWorkspace(ScratchBlocks.getMainWorkspace());
            refresh();
        });
        return () => {
            cancelled = true;
        };
    }, [refresh]);

    useEffect(() => {
        let disposed = false;
        const runRefresh = () => {
            if (!disposed) refresh();
        };
        // TARGETS_UPDATE / workspaceUpdate 在运行或拖积木时是每帧/每次事件的洪水，
        // 只留前导那一次立即生效，其余合并到 120ms 后的一次尾随刷新。
        const onChange = throttle(runRefresh, 120);
        const onStructuralChange = () => runRefresh();
        vm.on('PROJECT_CHANGED', onChange);
        vm.on('workspaceUpdate', onChange);
        vm.runtime.on('PROJECT_LOADED', onStructuralChange);
        vm.runtime.on('TARGETS_UPDATE', onChange);
        const removeSettingsListener = onSettingChanged(() => runRefresh());
        const interval = window.setInterval(() => {
            if (getSetting('live_update')) refreshValues();
        }, Math.max(100, getSetting('update_throttle')));
        return () => {
            disposed = true;
            vm.removeListener('PROJECT_CHANGED', onChange);
            vm.removeListener('workspaceUpdate', onChange);
            vm.runtime.off('PROJECT_LOADED', onStructuralChange);
            vm.runtime.off('TARGETS_UPDATE', onChange);
            removeSettingsListener();
            window.clearInterval(interval);
        };
    }, [vm, refresh, refreshValues]);

    const targets = useMemo(() => getOriginalTargets(vm), [vm, records]);
    const editingTarget = vm.runtime.getEditingTarget();
    const canShowLocal = !!editingTarget && !editingTarget.isStage;
    useEffect(() => {
        if (scope === 'local' && !canShowLocal) setScope('all');
    }, [scope, canShowLocal]);
    const selected = records.find(record => record.id === selectedId) || null;
    const counts = useMemo(() => ({
        all: records.length,
        variables: records.filter(record => record.type === 'variable' && !record.isCloud).length,
        lists: records.filter(record => record.type === 'list').length,
        cloud: records.filter(record => record.isCloud).length
    }), [records]);

    const visibleRecords = useMemo(() => {
        const normalizedQuery = query.trim().toLocaleLowerCase();
        return records.filter(record => {
            if (scope !== 'all' && record.scope !== scope) return false;
            if (filter === 'variables' && (record.type !== 'variable' || record.isCloud)) return false;
            if (filter === 'lists' && record.type !== 'list') return false;
            if (filter === 'cloud' && !record.isCloud) return false;
            if (!normalizedQuery) return true;
            return record.name.toLocaleLowerCase().includes(normalizedQuery) ||
                searchTextOf(record).toLocaleLowerCase()
                    .includes(normalizedQuery);
        });
    }, [records, scope, filter, query]);

    const handleFilter = event => {
        setFilter(event.currentTarget.value);
        setMobileView('content');
    };
    // 稳定引用：行组件是 memo 的，回调每次换新就会让所有行重绘
    const handleSelect = useCallback(id => setSelectedId(id), []);
    const handleScope = value => setScope(value);
    const handleTarget = targetId => {
        vm.setEditingTarget(targetId);
        setSelectedId(null);
        window.setTimeout(refresh, 0);
    };

    const handleCreate = values => {
        // A global name must not collide with a same-type variable owned by a
        // different sprite, even though those locals are not in the current view.
        const validationRecords = values.scope === 'global' ?
            getOriginalTargets(vm).flatMap(target => Object.values(target.variables || {}).map(variable => ({
                id: variable.id,
                name: variable.name,
                scope: 'global',
                type: variable.type === 'list' ? 'list' : 'variable'
            }))) : records;
        const model = createVariable(workspace, validationRecords, values);
        setCreating(false);
        setMobileView('content');
        window.setTimeout(() => {
            refresh();
            if (model && model.getId) setSelectedId(model.getId());
        }, 0);
    };

    const handleRename = (record, name) => {
        const saved = renameVariable(workspace, records, record, name);
        window.setTimeout(refresh, 0);
        return saved;
    };

    const handleValueChange = (record, value) => {
        setVariableValue(vm, record, value);
        refresh();
    };

    const handleDelete = record => {
        deleteVariable(workspace, record.id);
        setSelectedId(null);
        window.setTimeout(refresh, 0);
    };

    const handleMonitorChange = (record, visible) => {
        // setMonitorVisible 内部 changeBlock 会同步 emitProjectChanged，
        // 事件驱动的 refresh 可能已经先一步把这一条更新掉了，所以这里做幂等补丁，
        // 不再额外补一次全量 refresh（那是原来「点一下卡两下」的第二个来源）。
        const changed = setMonitorVisible(vm, record, visible);
        if (!changed) return;
        setRecords(current => {
            const index = current.findIndex(item => item.id === record.id);
            if (index < 0) return current;
            const target = current[index];
            const nextVisible = monitorVisible(vm, record.id);
            if (target.monitorVisible === nextVisible) return current;
            const next = current.slice();
            next[index] = {...target, monitorVisible: nextVisible};
            return next;
        });
    };

    const availableWidth = Math.max(360, window.innerWidth - 32);
    const availableHeight = Math.max(420, window.innerHeight - 32);
    const categories = [
        {id: 'all', label: intl.formatMessage(messages.all), icon: Database, count: counts.all},
        {id: 'variables', label: intl.formatMessage(messages.variables), icon: Variable, count: counts.variables},
        {id: 'lists', label: intl.formatMessage(messages.lists), icon: List, count: counts.lists},
        {id: 'cloud', label: intl.formatMessage(messages.cloud), icon: Cloud, count: counts.cloud}
    ];
    const currentCategory = categories.find(category => category.id === filter) || categories[0];
    const targetOptions = targets.map(target => ({
        value: target.id,
        label: target.isStage ? intl.formatMessage(messages.stageTarget) : target.getName()
    }));
    const scopeOptions = [
        {value: 'all', label: intl.formatMessage(messages.all)},
        {value: 'global', label: intl.formatMessage(messages.global)},
        ...(canShowLocal ? [{
            value: 'local',
            label: intl.formatMessage(messages.local)
        }] : [])
    ];

    return (
        <Modal
            className={styles.modalContent}
            contentLabel={intl.formatMessage(messages.title)}
            height={Math.min(560, availableHeight)}
            id="variableManagerModal"
            isRtl={props.isRtl}
            maxHeight={availableHeight}
            maxWidth={availableWidth}
            minHeight={Math.min(420, availableHeight)}
            minWidth={Math.min(640, availableWidth)}
            visible={props.visible}
            width={Math.min(880, availableWidth)}
            onRequestClose={props.onRequestClose}
        >
            <ModalSidebarLayout mobileView={mobileView}>
                <ModalSidebar
                    ariaLabel={intl.formatMessage(messages.sectionsAria)}
                    width="narrow"
                    header={
                        <div className={styles.sidebarHeader}>
                            <div className={styles.targetPicker}>
                                <span>{intl.formatMessage(messages.selectedSprite)}</span>
                                <SelectMenu
                                    align="left"
                                    ariaLabel={intl.formatMessage(messages.selectedSprite)}
                                    className={styles.mistwarpSelect}
                                    compact
                                    options={targetOptions}
                                    value={editingTarget ? editingTarget.id : ''}
                                    onChange={handleTarget}
                                    width="100%"
                                />
                            </div>
                        </div>
                    }
                    footer={
                        <ModalSidebarFooter>
                            <button
                                type="button"
                                className={styles.sidebarRefresh}
                                onClick={refresh}
                            >
                                <RefreshCw size={15} />
                                {intl.formatMessage(messages.refresh)}
                            </button>
                        </ModalSidebarFooter>
                    }
                >
                    {categories.map(category => (
                        <ModalSidebarItem
                            count={category.count}
                            icon={category.icon}
                            key={category.id}
                            label={category.label}
                            selected={!creating && filter === category.id}
                            value={category.id}
                            onClick={handleFilter}
                        />
                    ))}
                </ModalSidebar>
                <ModalSidebarContent className={styles.contentArea}>
                    <button
                        type="button"
                        className={styles.mobileBackButton}
                        onClick={() => setMobileView('list')}
                    >
                        <ChevronLeft size={18} />
                        {intl.formatMessage(messages.title)}
                    </button>
                    {creating ? (
                        <CreatePanel
                            canCreateCloud={vm.runtime.canAddCloudVariable ? vm.runtime.canAddCloudVariable() : false}
                            hasLocalTarget={!!editingTarget && !editingTarget.isStage}
                            intl={intl}
                            onCancel={() => setCreating(false)}
                            onCreate={handleCreate}
                        />
                    ) : (
                        <React.Fragment>
                            <header className={styles.pageHeader}>
                                <div>
                                    <h1>{currentCategory.label}</h1>
                                    <p>
                                        {intl.formatMessage(messages.itemCount, {count: visibleRecords.length})}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className={buttonClass('Primary')}
                                    onClick={() => {
                                        setCreating(true);
                                        setMobileView('content');
                                    }}
                                >
                                    <Plus size={16} />
                                    {intl.formatMessage(messages.addData)}
                                </button>
                            </header>
                            <div className={styles.toolbar}>
                                <label className={styles.search}>
                                    <Search size={16} />
                                    <input
                                        aria-label={intl.formatMessage(messages.search)}
                                        placeholder={intl.formatMessage(messages.search)}
                                        value={query}
                                        onChange={event => setQuery(event.target.value)}
                                    />
                                    {query && (
                                        <button
                                            type="button"
                                            aria-label={intl.formatMessage(messages.clearSearch)}
                                            onClick={() => setQuery('')}
                                        >
                                            <X size={15} />
                                        </button>
                                    )}
                                </label>
                                <SelectMenu
                                    align="right"
                                    ariaLabel={intl.formatMessage(messages.filterScopeAria)}
                                    className={`${styles.mistwarpSelect} ${styles.scopeFilter}`}
                                    compact
                                    options={scopeOptions}
                                    value={scope}
                                    onChange={handleScope}
                                    width="100%"
                                />
                            </div>
                            <div className={styles.workspace}>
                                <VariableList
                                    empty={(
                                        <div className={styles.emptyState}>
                                            <Database size={28} />
                                            <strong>{intl.formatMessage(messages.empty)}</strong>
                                            <span>{intl.formatMessage(messages.emptyHelp)}</span>
                                            <button
                                                type="button"
                                                className={buttonClass('Secondary')}
                                                onClick={() => setCreating(true)}
                                            >
                                                {intl.formatMessage(messages.addData)}
                                            </button>
                                        </div>
                                    )}
                                    intl={intl}
                                    records={visibleRecords}
                                    selectedId={selectedId}
                                    onSelect={handleSelect}
                                />
                                {selected ? (
                                    <DetailPanel
                                        intl={intl}
                                        record={selected}
                                        records={records}
                                        onConfirm={confirm}
                                        onDelete={handleDelete}
                                        onMonitorChange={handleMonitorChange}
                                        onRename={handleRename}
                                        onValueChange={handleValueChange}
                                    />
                                ) : (
                                    <div className={styles.noSelection}>
                                        <Database size={30} />
                                        <strong>{intl.formatMessage(messages.select)}</strong>
                                        <p>{intl.formatMessage(messages.selectHelp)}</p>
                                    </div>
                                )}
                            </div>
                        </React.Fragment>
                    )}
                </ModalSidebarContent>
            </ModalSidebarLayout>
        </Modal>
    );
};

VariableManager.propTypes = {
    intl: intlShape,
    isRtl: PropTypes.bool,
    onRequestClose: PropTypes.func,
    openSimpleDialog: PropTypes.func.isRequired,
    visible: PropTypes.bool,
    vm: PropTypes.instanceOf(VM).isRequired
};

export {VariableManager, CreatePanel, DetailPanel, ListEditor, VariableList, getVisibleRange, messages};
export default injectIntl(VariableManager);
