import React from 'react';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import classNames from 'classnames';

import styles from './menu-bar.css';

class MenuLabel extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'focusFirstItem',
            'handleClick',
            'handleKeyDown',
            'handleMouseDown',
            'handleMouseUp',
            'menuRef',
            'setDisableClose'
        ]);
        this.mouseDownInsideMenu = false;
        this._disableClose = props.disableClose || false;
        this.isAnimating = false;
        this.animationTimer = null;
    }
    componentDidMount () {
        if (this.props.open) this.addListeners();
    }
    componentDidUpdate (prevProps) {
        if (this.props.open && !prevProps.open) {
            this.addListeners();
            this.isAnimating = true;
            if (this.animationTimer) {
                clearTimeout(this.animationTimer);
            }
            this.animationTimer = setTimeout(() => {
                this.isAnimating = false;
                this.animationTimer = null;
            }, 250);
        }
        if (!this.props.open && prevProps.open) {
            this.isAnimating = false;
            if (this.animationTimer) {
                clearTimeout(this.animationTimer);
                this.animationTimer = null;
            }
            this.removeListeners();
        }
    }
    setDisableClose (value) {
        this._disableClose = value;
    }
    componentWillUnmount () {
        if (this.focusFrame) cancelAnimationFrame(this.focusFrame);
        this.removeListeners();
        if (this.animationTimer) {
            clearTimeout(this.animationTimer);
            this.animationTimer = null;
        }
    }
    focusFirstItem () {
        this.focusFrame = null;
        if (!this.menuEl) return;
        const firstItem = this.menuEl.querySelector('[role="menuitem"]:not([aria-disabled="true"])');
        if (firstItem) firstItem.focus();
    }
    addListeners () {
        document.addEventListener('mousedown', this.handleMouseDown);
        document.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('pointerdown', this.handleMouseDown);
        document.addEventListener('pointerup', this.handleMouseUp);
        document.addEventListener('touchstart', this.handleMouseDown);
        document.addEventListener('touchend', this.handleMouseUp);
    }
    removeListeners () {
        document.removeEventListener('mousedown', this.handleMouseDown);
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('pointerdown', this.handleMouseDown);
        document.removeEventListener('pointerup', this.handleMouseUp);
        document.removeEventListener('touchstart', this.handleMouseDown);
        document.removeEventListener('touchend', this.handleMouseUp);
    }
    handleClick (e) {
        if (this._disableClose) return;
        if (e.target.closest('div') === this.menuEl) {
            if (this.props.open) {
                this.props.onClose();
            } else {
                this.props.onOpen();
            }
        }
    }
    handleKeyDown (e) {
        if (e.key === 'Escape' && this.props.open) {
            e.preventDefault();
            this.props.onClose();
            if (this.menuEl) this.menuEl.focus();
            return;
        }
        if (e.currentTarget !== e.target) return;
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (this.props.open) {
                this.props.onClose();
            } else {
                this.props.onOpen();
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (!this.props.open) this.props.onOpen();
            if (this.focusFrame) cancelAnimationFrame(this.focusFrame);
            this.focusFrame = requestAnimationFrame(this.focusFirstItem);
        }
    }
    handleMouseDown (e) {
        this.mouseDownInsideMenu = this.menuEl && this.menuEl.contains(e.target);
    }
    handleMouseUp (e) {
        if (this._disableClose) {
            this.mouseDownInsideMenu = false;
            return;
        }
        if (this.isAnimating) {
            return;
        }
        if (this.props.open &&
            !this.menuEl.contains(e.target) &&
            !this.mouseDownInsideMenu) {
            this.props.onClose();
        }
        this.mouseDownInsideMenu = false;
    }
    menuRef (c) {
        this.menuEl = c;
    }
    render () {
        return (
            <div
                data-mw-item={this.props.dataItem}
                className={classNames(styles.menuBarItem, styles.hoverable, {
                    [styles.active]: this.props.open
                })}
                aria-expanded={this.props.open}
                aria-haspopup="menu"
                aria-label={this.props.ariaLabel}
                onClick={this.handleClick}
                onKeyDown={this.handleKeyDown}
                ref={this.menuRef}
                role="button"
                tabIndex={0}
            >
                {this.props.children}
            </div>
        );
    }
}

MenuLabel.propTypes = {
    ariaLabel: PropTypes.string,
    children: PropTypes.node,
    dataItem: PropTypes.string,
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    disableClose: PropTypes.bool
};

export default MenuLabel;
