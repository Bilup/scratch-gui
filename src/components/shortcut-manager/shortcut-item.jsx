import PropTypes from 'prop-types';
import React from 'react';
import {injectIntl} from 'react-intl';

import styles from './shortcut-manager.css';

const formatDisplayKey = key => {
    if (!key) return '';
    return key
        .replace(/Ctrl/g, navigator.platform.includes('Mac') ? '⌘' : 'Ctrl')
        .replace(/Alt/g, navigator.platform.includes('Mac') ? '⌥' : 'Alt')
        .replace(/Shift/g, '⇧')
        .replace(/ /g, '');
};

const ShortcutItem = ({
    shortcut,
    onEditShortcut,
    editingShortcutId,
    editingKey,
    onKeyInput,
    onSaveShortcut,
    onCancelEdit,
    conflictError,
    intl
}) => {
    const isEditing = editingShortcutId === shortcut.id;
    
    return (
        <div className={styles.shortcutItem}>
            <div className={styles.shortcutInfo}>
                <div className={styles.shortcutLabel}>{shortcut.label}</div>
                {isEditing ? (
                    <div className={styles.shortcutEdit}>
                        <input
                            type="text"
                            value={editingKey}
                            onKeyDown={onKeyInput}
                            className={styles.shortcutInput}
                            placeholder={intl.formatMessage({id: 'shortcut-manager.pressNewShortcut'})}
                        />
                        {conflictError && (
                            <div className={styles.errorMessage}>{intl.formatMessage({id: 'shortcut-manager.shortcutConflict'})}</div>
                        )}
                        <div className={styles.editButtons}>
                            <button 
                                className={styles.saveButton}
                                onClick={onSaveShortcut}
                            >
                                {intl.formatMessage({id: 'shortcut-manager.save'})}
                            </button>
                            <button 
                                className={styles.cancelButton}
                                onClick={onCancelEdit}
                            >
                                {intl.formatMessage({id: 'shortcut-manager.cancel'})}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.shortcutKey}>
                        <span className={styles.keyDisplay}>
                            {formatDisplayKey(shortcut.key)}
                        </span>
                        <button 
                            className={styles.editButton}
                            onClick={() => onEditShortcut(shortcut.id, shortcut.key)}
                        >
                            {intl.formatMessage({id: 'shortcut-manager.edit'})}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

ShortcutItem.propTypes = {
    shortcut: PropTypes.shape({
        id: PropTypes.string,
        key: PropTypes.string,
        defaultKey: PropTypes.string,
        label: PropTypes.string
    }).isRequired,
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

export default injectIntl(ShortcutItem);
