import React from 'react';
import {shallow} from 'enzyme';
import IconButton from '../../../src/components/icon-button/icon-button';
import renderer from 'react-test-renderer';

describe('IconButtonComponent', () => {
    test('matches snapshot', () => {
        const onClick = jest.fn();
        const title = <div>Text</div>;
        const imgSrc = 'imgSrc';
        const className = 'custom-class-name';
        const component = renderer.create(
            <IconButton
                className={className}
                img={imgSrc}
                title={title}
                onClick={onClick}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('triggers callback when clicked', () => {
        const onClick = jest.fn();
        const title = <div>Text</div>;
        const imgSrc = 'imgSrc';
        const componentShallowWrapper = shallow(
            <IconButton
                img={imgSrc}
                title={title}
                onClick={onClick}
            />
        );
        componentShallowWrapper.simulate('click');
        expect(onClick).toHaveBeenCalled();
    });

    test('uses a non-submitting native button', () => {
        const component = shallow(
            <IconButton
                img="imgSrc"
                title="Text"
                onClick={() => {}}
            />
        );

        expect(component.type()).toBe('button');
        expect(component.prop('type')).toBe('button');
    });

    test('passes disabled state to the native button', () => {
        const component = shallow(
            <IconButton
                disabled
                img="imgSrc"
                title="Text"
                onClick={() => {}}
            />
        );

        expect(component.prop('disabled')).toBe(true);
    });
});
