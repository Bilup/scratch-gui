import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import React from 'react';
import Style from 'to-style';
import stylePropType from 'react-style-proptype';

/*
 * DOMElementRenderer wraps a DOM element, allowing it to be
 * rendered by React. It's up to the containing component
 * to retain a reference to the element prop, or else it
 * will be garbage collected after unmounting.
 *
 * Props passed to the DOMElementRenderer will be set on the
 * DOM element like it's a normal component.
 */
class DOMElementRenderer extends React.Component {
    constructor (props) {
        super(props);
        this.setContainer = this.setContainer.bind(this);
    }
    componentDidMount () {
        this.container.appendChild(this.props.domElement);
    }
    componentWillUnmount () {
        this.container.removeChild(this.props.domElement);
    }
    setContainer (c) {
        this.container = c;
    }
    render () {
        // Apply props to the DOM element, so its attributes
        // are updated as if it were a normal component.
        // Look at me, I'm the React now!
        Object.assign(
            this.props.domElement,
            omit(this.props, ['domElement', 'children', 'style'])
        );

        // Convert react style prop to dom element styling.
        if (this.props.style) {
            const domElement = this.props.domElement;
            // Assigning `cssText` replaces the whole style attribute, which also
            // drops inline styles that are not controlled by props. Extensions
            // such as Mouse Cursor set `cursor` directly on the stage canvas and
            // React re-renders on every stage resize, fullscreen toggle, etc., so
            // preserve those properties instead of wiping them out.
            const newStyleText = Style.string(this.props.style);
            const managedProperties = new Set(
                newStyleText
                    .split(';')
                    .map(declaration => declaration.split(':')[0].trim().toLowerCase())
                    .filter(Boolean)
            );
            const preservedProperties = [];
            for (let i = 0; i < domElement.style.length; i++) {
                const property = domElement.style[i];
                if (!managedProperties.has(property)) {
                    preservedProperties.push([
                        property,
                        domElement.style.getPropertyValue(property),
                        domElement.style.getPropertyPriority(property)
                    ]);
                }
            }
            domElement.style.cssText = newStyleText;
            for (const [property, value, priority] of preservedProperties) {
                domElement.style.setProperty(property, value, priority);
            }
        }

        return <div ref={this.setContainer} />;
    }
}

DOMElementRenderer.propTypes = {
    domElement: PropTypes.instanceOf(Element).isRequired,
    style: stylePropType
};

export default DOMElementRenderer;
