import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage, defineMessages} from 'react-intl';
import {connect} from 'react-redux';

import {Check, ExternalLink} from 'lucide-react';
import ChevronDown from './ChevronDown.jsx';
import {MenuItem, Submenu} from '../menu/menu.jsx';
import {BLOCKS_CUSTOM, BLOCKS_DARK, BLOCKS_HIGH_CONTRAST, BLOCKS_THREE, Theme} from '../../lib/themes/index.js';
import {openBlocksThemeMenu, blocksThemeMenuOpen, closeSettingsMenu} from '../../reducers/menus.js';
import {setTheme} from '../../reducers/theme.js';
import {applyTheme} from '../../lib/themes/themePersistance.js';
import styles from './settings-menu.css';
import threeIcon from './tw-blocks-three.svg';
import highContrastIcon from './tw-blocks-high-contrast.svg';
import darkIcon from './tw-blocks-dark.svg';
import customIcon from './tw-blocks-custom.svg';

const options = defineMessages({
    [BLOCKS_THREE]: {
        defaultMessage: 'Original',
        description: 'Name of normal Scratch block colors.',
        id: 'tw.blockColors.three'
    },
    [BLOCKS_HIGH_CONTRAST]: {
        defaultMessage: 'High Contrast',
        description: 'Name of the high contrast block colors.',
        id: 'tw.blockColors.highContrast'
    },
    [BLOCKS_DARK]: {
        defaultMessage: 'Dark',
        description: 'Name of the dark block colors',
        id: 'tw.blockColors.dark'
    },
    [BLOCKS_CUSTOM]: {
        defaultMessage: 'Customize in Addon Settings',
        description: 'Link in block color list to open addon settings for more customization',
        id: 'tw.blockColors.custom'
    }
});

const icons = {
    [BLOCKS_THREE]: threeIcon,
    [BLOCKS_HIGH_CONTRAST]: highContrastIcon,
    [BLOCKS_DARK]: darkIcon,
    [BLOCKS_CUSTOM]: customIcon
};

const ThemeIcon = ({id}) => {
    if (id === BLOCKS_CUSTOM) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--text-primary)"
                width={24}
                height={24}
            >
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>
            </svg>
        );
    }
    return (
        <img
            src={icons[id]}
            draggable={false}
            width={24}
        />
    );
};

ThemeIcon.propTypes = {
    id: PropTypes.string
};

const ThemeMenuItem = ({id, disabled, isSelected, onClick}) => (
    <MenuItem onClick={disabled ? null : onClick}>
        <div className={classNames(styles.option, {[styles.disabled]: disabled})}>
            <Check
                size={15}
                className={classNames(styles.check, {[styles.selected]: isSelected})}
            />
            <ThemeIcon id={id} />
            <FormattedMessage {...options[id]} />
            {id === BLOCKS_CUSTOM && (
                <ExternalLink
                    size={20}
                    className={styles.openLink}
                />
            )}
        </div>
    </MenuItem>
);

ThemeMenuItem.propTypes = {
    id: PropTypes.string,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

const BlocksThemeMenu = ({
    isOpen,
    isRtl,
    onChangeTheme,
    onOpenCustomSettings,
    onOpenMenu,
    theme
}) => (
    <MenuItem expanded={isOpen}>
        <div
            className={styles.option}
            onClick={onOpenMenu}
        >
            <ThemeIcon id={theme.blocks} />
            <span className={styles.submenuLabel}>
                <FormattedMessage
                    defaultMessage="Block Colors"
                    description="Label for to choose what color blocks should be, eg. original or high contrast"
                    id="tw.menuBar.blockColors"
                />
            </span>
            <ChevronDown className={styles.expandCaret} />
        </div>
        <Submenu place={isRtl ? 'left' : 'right'}>
            {[BLOCKS_THREE, BLOCKS_HIGH_CONTRAST, BLOCKS_DARK, BLOCKS_CUSTOM].map(i => (
                <ThemeMenuItem
                    key={i}
                    id={i}
                    isSelected={theme.blocks === i}
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={
                        i === BLOCKS_CUSTOM ?
                            onOpenCustomSettings :
                            () => onChangeTheme(theme.set('blocks', i))
                    }
                    disabled={i !== BLOCKS_CUSTOM && theme.blocks === BLOCKS_CUSTOM}
                />
            ))}
        </Submenu>
    </MenuItem>
);

BlocksThemeMenu.propTypes = {
    isOpen: PropTypes.bool,
    isRtl: PropTypes.bool,
    onChangeTheme: PropTypes.func,
    onOpenCustomSettings: PropTypes.func,
    onOpenMenu: PropTypes.func,
    theme: PropTypes.instanceOf(Theme)
};

const mapStateToProps = state => ({
    isOpen: blocksThemeMenuOpen(state),
    isRtl: state.locales.isRtl,
    theme: state.scratchGui.theme.theme
});

const mapDispatchToProps = dispatch => ({
    onChangeTheme: theme => {
        dispatch(setTheme(theme));
        dispatch(closeSettingsMenu());
        applyTheme(theme);
    },
    onOpenMenu: () => dispatch(openBlocksThemeMenu())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlocksThemeMenu);
