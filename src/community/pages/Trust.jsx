/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../api';
import Button from '../components/ui/Button.jsx';
import {useCommunityIntl} from '../i18n.jsx';
import styles from './InfoPage.module.css';

const Trust = () => {
    const {t: ct} = useCommunityIntl();
    const [agreement, setAgreement] = useState(null);
    const [attempt, setAttempt] = useState(0);
    useEffect(() => {
        let active = true;
        setAgreement(null);
        api.agreement()
            .then(data => active && setAgreement(data.agreement))
            .catch(() => active && setAgreement(false));
        return () => {
            active = false;
        };
    }, [attempt]);
    return (
        <main className={styles.page}>
            <header className={styles.head}>
                <h1>{ct('trust.title')}</h1>
                <p>{ct('trust.lead')}</p>
            </header>
            <div className={styles.grid}>
                <section className={styles.section}>
                    <h2>{ct('trust.accountH')}</h2>
                    <p>{ct('trust.accountBody')}</p>
                    <p><a href="https://rotur.dev/me" target="_blank" rel="noreferrer">{ct('trust.manageRotur')}</a></p>
                </section>
                <section className={styles.section}>
                    <h2>{ct('trust.controlsH')}</h2>
                    <p>{ct('trust.controlsBody')}</p>
                    <p><Link to="/settings?section=data">{ct('trust.openData')}</Link></p>
                </section>
            </div>
            <section className={styles.section}>
                <h2>{ct('trust.privacyH')}</h2>
                <p>{ct('trust.privacyBody1')}</p>
                <p>{ct('trust.privacyBody2')}</p>
                <p>{ct('trust.privacyBody3')}</p>
                <p>{ct('trust.privacyBody4')}</p>
            </section>
            <section className={styles.section}>
                <h2>{ct('trust.termsH')}</h2>
                {agreement === null ? <p>{ct('trust.loadingAgreement')}</p> : null}
                {agreement === false ? <p>{ct('trust.loadFailed')} <Button onClick={() => setAttempt(value => value + 1)}>{ct('trust.tryAgain')}</Button></p> : null}
                {agreement ? <div className={styles.agreement}>{agreement.text}</div> : null}
            </section>
            <section className={styles.section}>
                <h2>{ct('trust.moderationH')}</h2>
                <p>{ct('trust.moderationBody')}</p>
                <p>{ct('trust.appealIntro')} <Link to="/support?topic=appeal">{ct('trust.appealLink')}</Link>{ct('trust.appealOutro')}</p>
            </section>
        </main>
    );
};

export default Trust;
