import React from 'react';
import PropTypes from 'prop-types';
import {ContextMenu, MenuItem} from 'react-contextmenu';
import classNames from 'classnames';

import {resolveContextMenuIcon, ICON_SIZE, ICON_STROKE} from '../../lib/context-menu-icons';
import styles from './context-menu.css';

const iconPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]);

const StyledContextMenu = props => (
    <ContextMenu
        {...props}
        className={styles.contextMenu}
    />
);

const MenuItemIcon = ({icon}) => {
    const Icon = resolveContextMenuIcon(icon);
    return (
        <Icon
            aria-hidden
            className={styles.menuItemIcon}
            size={ICON_SIZE}
            strokeWidth={ICON_STROKE}
        />
    );
};

MenuItemIcon.propTypes = {
    icon: iconPropType
};

// react-contextmenu 的 MenuItem 会把未知 props 透传到 DOM 上，所以 icon 必须
// 在这一层解构掉，否则 React 会报 “icon” 不是合法的 DOM 属性。
const createMenuItem = className => {
    const Component = ({icon, children, ...props}) => (
        <MenuItem
            {...props}
            attributes={{className}}
        >
            <MenuItemIcon icon={icon} />
            {children}
        </MenuItem>
    );
    Component.propTypes = {
        children: PropTypes.node,
        icon: iconPropType
    };
    return Component;
};

const StyledMenuItem = createMenuItem(styles.menuItem);

const BorderedMenuItem = createMenuItem(classNames(styles.menuItem, styles.menuItemBordered));

const DangerousMenuItem = createMenuItem(
    classNames(styles.menuItem, styles.menuItemBordered, styles.menuItemDanger)
);


export {
    BorderedMenuItem,
    DangerousMenuItem,
    StyledContextMenu as ContextMenu,
    StyledMenuItem as MenuItem
};
