import React from 'react';
import PropTypes from 'prop-types';
import styles from './avatar.css';

// Avatars used to be served from avatars.accounts.bilup.org. That host was
// removed from this build, so we render a local initial-letter placeholder.
const Avatar = ({username, size = 40, className}) => {
    const name = String(username || '?').trim();
    const initial = name.charAt(0).toUpperCase() || '?';
    return (
        <span
            className={className ? `${styles.wrapper} ${className}` : styles.wrapper}
            style={{width: size, height: size}}
        >
            <span
                className={styles.avatar}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: Math.max(12, Math.round(size * 0.45)),
                    fontWeight: 600,
                    color: 'var(--ui-white, #ffffff)'
                }}
            >
                {initial}
            </span>
        </span>
    );
};

Avatar.propTypes = {
    username: PropTypes.string,
    size: PropTypes.number,
    className: PropTypes.string
};

export default Avatar;
