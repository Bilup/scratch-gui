import PropTypes from 'prop-types';
import React from 'react';

import ShortcutItem from './shortcut-item.jsx';

import styles from './shortcut-manager.css';

const ShortcutCategory = ({
    category,
    shortcuts,
    onEditShortcut,
    editingShortcutId,
    editingKey,
    onKeyInput,
    onSaveShortcut,
    onCancelEdit,
    conflictError,
    intl
}) => (
    <div className={styles.category}>
        <h3 className={styles.categoryTitle}>{category}</h3>
        <div className={styles.categoryItems}>
            {shortcuts.map(shortcut => (
                <ShortcutItem
                    key={shortcut.id}
                    shortcut={shortcut}
                    onEditShortcut={onEditShortcut}
                    editingShortcutId={editingShortcutId}
                    editingKey={editingKey}
                    onKeyInput={onKeyInput}
                    onSaveShortcut={onSaveShortcut}
                    onCancelEdit={onCancelEdit}
                    conflictError={conflictError}
                    intl={intl}
                />
            ))}
        </div>
    </div>
);

ShortcutCategory.propTypes = {
    category: PropTypes.string.isRequired,
    shortcuts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        key: PropTypes.string,
        defaultKey: PropTypes.string,
        label: PropTypes.string
    })).isRequired,
    onEditShortcut: PropTypes.func,
    editingShortcutId: PropTypes.string,
    editingKey: PropTypes.string,
    onKeyInput: PropTypes.func,
    onSaveShortcut: PropTypes.func,
    onCancelEdit: PropTypes.func,
    conflictError: PropTypes.string,
    intl: PropTypes.shape({
        formatMessage: PropTypes.func
    }).isRequired
};

export default ShortcutCategory;
