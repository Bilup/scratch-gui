import PropTypes from 'prop-types';
import React from 'react';

import MenuComponent from '../components/menu/menu.jsx';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnimating: false,
            isOpen: props.open
        };
        this.hideTimer = null;
    }

    componentDidUpdate(prevProps) {
        if (this.props.open && !prevProps.open) {
            if (this.hideTimer) {
                clearTimeout(this.hideTimer);
                this.hideTimer = null;
            }
            this.setState({isAnimating: true, isOpen: false}, () => {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        this.setState({isOpen: true});
                    });
                });
            });
        } else if (!this.props.open && prevProps.open) {
            this.setState({isOpen: false});
            this.hideTimer = setTimeout(() => {
                this.setState({isAnimating: false});
                this.hideTimer = null;
            }, 200);
        }
    }

    componentWillUnmount() {
        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
            this.hideTimer = null;
        }
    }

    render() {
        if (!this.props.open && !this.state.isAnimating) {
            return null;
        }
        return (
            <MenuComponent
                {...this.props}
                isOpen={this.state.isOpen}
            >
                {this.props.children}
            </MenuComponent>
        );
    }
}

Menu.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    open: PropTypes.bool.isRequired
};

export default Menu;
