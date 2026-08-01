import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FlaskConical, X} from 'lucide-react';
import styles from './BetaBanner.module.css';

const DISMISS_KEY = 'mw:beta-banner-dismissed';

const wasDismissed = () => {
    try {
        return localStorage.getItem(DISMISS_KEY) === 'true';
    } catch (e) {
        return false;
    }
};

const BetaBanner = () => {
    const [dismissed, setDismissed] = useState(wasDismissed);
    if (dismissed) {
        return null;
    }
    const dismiss = () => {
        setDismissed(true);
        try {
            localStorage.setItem(DISMISS_KEY, 'true');
        } catch (e) {
            return;
        }
    };
    return (
        <div className={styles.banner}>
            <FlaskConical
                size={15}
                className={styles.icon}
            />
            <span className={styles.text}>
                The new Bilup is a beta. Expect bugs, and please report them via{' '}
                <a href="mailto:support@bilup.org">support@bilup.org</a>.
            </span>
            <button
                className={styles.dismiss}
                aria-label="Dismiss"
                onClick={dismiss}
            >
                <X size={15} />
            </button>
        </div>
    );
};

export default BetaBanner;
