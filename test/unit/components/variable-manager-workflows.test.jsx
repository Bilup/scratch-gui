import React from 'react';
import {mount} from 'enzyme';
import {act} from 'react-dom/test-utils';

import SelectMenu from '../../../src/community/components/ui/SelectMenu.jsx';
import {
    CreatePanel,
    getVisibleRange,
    ListEditor,
    VariableList
} from '../../../src/components/variable-manager/variable-manager.jsx';

const intl = {
    formatMessage: (message, values) => {
        if (!values) return message.defaultMessage;
        return Object.keys(values).reduce(
            (text, key) => text.replace(`{${key}}`, values[key]),
            message.defaultMessage
        );
    }
};

describe('native Variable Manager list windowing', () => {
    // 行高 64、视口 640 时 keep = ceil(640/64)+1 = 11 行 + 上下各 5 行 overscan
    test('行数少或一屏放得下时全量渲染', () => {
        expect(getVisibleRange(10, 64, 640, 0)).toEqual({virtual: false, start: 0, end: 10});
        expect(getVisibleRange(100, 64, 10000, 0)).toEqual({virtual: false, start: 0, end: 100});
    });

    test('量不到行高（隐藏容器 / jsdom）时退回全量', () => {
        expect(getVisibleRange(1500, 0, 640, 0)).toEqual({virtual: false, start: 0, end: 1500});
    });

    test('滚到中间只渲染可视区加 overscan', () => {
        const range = getVisibleRange(1500, 64, 640, 3000);
        expect(range.virtual).toBe(true);
        expect(range.start).toBe(41);
        expect(range.end).toBe(62);
        // 视口内的行（46..56）必须在窗口里
        expect(range.start).toBeLessThanOrEqual(46);
        expect(range.end).toBeGreaterThanOrEqual(56);
    });

    test('滚到底时最后一行一定在窗口内', () => {
        const last = getVisibleRange(1500, 64, 640, 95360);
        expect(last.end).toBe(1500);
        expect(last.start).toBe(1479);
    });

    test('列表被过滤变短但 scrollTop 还是旧值时不会算出空窗口', () => {
        const range = getVisibleRange(45, 64, 640, 90000);
        expect(range.virtual).toBe(true);
        expect(range.start).toBe(24);
        expect(range.end).toBe(45);
        expect(range.end - range.start).toBeGreaterThan(0);
    });

    test('窗口大小随视口变化', () => {
        const small = getVisibleRange(1500, 64, 200, 0);
        const large = getVisibleRange(1500, 64, 1200, 0);
        expect(large.end - large.start).toBeGreaterThan(small.end - small.start);
        // 窗口之外的行数由占位高度补足，总高度必须保持一致
        expect(small.start * 64 + (small.end - small.start) * 64 + (1500 - small.end) * 64).toBe(1500 * 64);
    });

    test('jsdom 里量不到尺寸时仍然把每一条都渲染出来', () => {
        const records = Array.from({length: 120}, (item, index) => ({
            id: `v${index}`,
            name: `变量 ${index}`,
            type: 'variable',
            scope: 'global',
            value: index
        }));
        const wrapper = mount(
            <VariableList
                intl={intl}
                records={records}
                selectedId={null}
                onSelect={jest.fn()}
            />
        );
        // 兜底路径：宁可全量渲染，也不能出现空白列表
        expect(wrapper.find('button[role="option"]')).toHaveLength(120);
        wrapper.unmount();
    });

    test('量到行高后只渲染窗口内的行，滚动时窗口跟着走', () => {
        jest.useFakeTimers();
        const records = Array.from({length: 120}, (item, index) => ({
            id: `v${index}`,
            name: `var ${index}`,
            type: 'variable',
            scope: 'global',
            value: index
        }));
        const wrapper = mount(
            <VariableList
                intl={intl}
                records={records}
                selectedId={null}
                onSelect={jest.fn()}
            />
        );
        const list = wrapper.find('div[role="listbox"]').getDOMNode();
        // jsdom 没有布局：视口高度和行矩形都得打桩
        Object.defineProperty(list, 'clientHeight', {configurable: true, value: 640});
        const stubRects = () => {
            list.querySelectorAll('[data-var-row]').forEach((node, index) => {
                node.getBoundingClientRect = () => ({
                    bottom: (index + 1) * 64,
                    height: 64,
                    left: 0,
                    right: 0,
                    top: index * 64,
                    width: 200,
                    x: 0,
                    y: index * 64
                });
            });
        };

        stubRects();
        act(() => {
            window.dispatchEvent(new Event('resize'));
        });
        wrapper.update();
        const mounted = wrapper.find('button[role="option"]');
        // 640 高的视口 → 11 行 + 上下各 5 行 overscan
        expect(mounted).toHaveLength(21);

        stubRects();
        act(() => {
            list.scrollTop = 1280;
            wrapper.find('div[role="listbox"]').simulate('scroll');
            jest.runAllTimers();
        });
        wrapper.update();
        const rows = wrapper.find('button[role="option"]');
        expect(rows.first().text()).toContain('var 15');
        // 上下占位 + 实际渲染的行 = 完整内容高度，滚动条长度才不会被窗口化改掉
        const spacerHeight = wrapper.find('div[aria-hidden="true"]')
            .map(node => node.prop('style').height)
            .reduce((sum, height) => sum + height, 0);
        expect(spacerHeight + (rows.length * 64)).toBe(120 * 64);

        jest.useRealTimers();
        wrapper.unmount();
    });
});

describe('native Variable Manager workflows', () => {
    test('creates a local list from the native creation form', () => {
        const onCreate = jest.fn();
        const wrapper = mount(
            <CreatePanel
                canCreateCloud
                hasLocalTarget
                intl={intl}
                onCancel={jest.fn()}
                onCreate={onCreate}
            />
        );

        expect(wrapper.find('select')).toHaveLength(0);
        expect(wrapper.find(SelectMenu)).toHaveLength(2);

        wrapper.find('input').at(0)
            .simulate('change', {target: {value: 'inventory'}});
        act(() => wrapper.find(SelectMenu).at(0)
            .prop('onChange')('list'));
        wrapper.update();
        wrapper.find('form').simulate('submit', {preventDefault: jest.fn()});

        expect(onCreate).toHaveBeenCalledWith({
            name: 'inventory',
            type: 'list',
            scope: 'local',
            cloud: false
        });
    });

    test('adds and removes list items without flattening the list into text', () => {
        const onChange = jest.fn();
        // 输入事件需要真实的 DOM 上下文，挂到临时容器里
        const container = document.createElement('div');
        document.body.appendChild(container);
        const wrapper = mount(
            <ListEditor
                intl={intl}
                maxLength={1000}
                onConfirm={() => Promise.resolve(true)}
                record={{id: 'list', name: 'items', value: ['first']}}
                onChange={onChange}
            />,
            {attachTo: container}
        );

        wrapper.find('button').filterWhere(node => node.text().includes('Add item'))
            .simulate('click');
        expect(onChange).toHaveBeenLastCalledWith(['first', '']);

        // 注：jest 21 内置的 jsdom 9 下无法可靠模拟 React 受控 input 的输入
        // （事件能到 handler，但 value 读回旧值），这一段的编辑行为改由 model 层测试覆盖。

        wrapper.find('button[aria-label="Delete item 1"]').simulate('click');
        expect(onChange).toHaveBeenLastCalledWith(['']);
        wrapper.detach();
        document.body.removeChild(container);
    });
});
