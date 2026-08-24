import React from 'react';
import {Smartphone, Keyboard, Gamepad2} from 'lucide-react';
import {useCommunityIntl} from '../i18n.jsx';
import styles from './ProjectCompatibility.module.css';

export const CONTROL_TYPES = [
    {key: 'mobile', labelKey: 'projectCompatibility.touch', detailKey: 'projectCompatibility.touchDetail', Icon: Smartphone},
    {key: 'keyboard', labelKey: 'projectCompatibility.keyboard', detailKey: 'projectCompatibility.keyboardDetail', Icon: Keyboard},
    {key: 'controller', labelKey: 'projectCompatibility.gamepad', detailKey: 'projectCompatibility.gamepadDetail', Icon: Gamepad2}
];

const supportedControls = compatibility => CONTROL_TYPES.filter(control => compatibility && compatibility[control.key]);

const ProjectCompatibility = ({compatibility, compact = false}) => {
    const {t} = useCommunityIntl();
    const controls = supportedControls(compatibility);
    if (!controls.length) return null;

    if (compact) {
        return (
            <div className={styles.compact} aria-label={t('projectCompatibility.aria', 'Supported controls')}>
                {controls.map(({key, labelKey, detailKey, Icon}) => {
                    const label = t(labelKey);
                    const detail = t(detailKey);
                    return (
                        <span key={key} className={styles.compactIcon} title={`${label}: ${detail}`}>
                            <Icon size={16} />
                            <span className={styles.screenReaderOnly}>{label}</span>
                        </span>
                    );
                })}
            </div>
        );
    }

    return (
        <div className={styles.grid}>
            {controls.map(({key, labelKey, detailKey, Icon}) => (
                <div key={key} className={styles.card}>
                    <Icon size={20} />
                    <span><strong>{t(labelKey)}</strong><small>{t(detailKey)}</small></span>
                </div>
            ))}
        </div>
    );
};

export default ProjectCompatibility;
