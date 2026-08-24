/* eslint-disable max-len */
import React, {useEffect, useRef, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import api from '../api';
import {useUser} from '../UserContext.jsx';
import Button from '../components/ui/Button.jsx';
import {useCommunityIntl} from '../i18n.jsx';
import styles from './InfoPage.module.css';

const TOPICS = ['account', 'safety', 'legal', 'appeal'];
const supportPayload = (form, user) => ({
    ...form,
    username: user && user.username ? user.username : form.username.trim(),
    subject: form.subject.trim(),
    message: form.message.trim()
});

const Support = () => {
    const {user} = useUser();
    const {t: ct} = useCommunityIntl();
    const [params] = useSearchParams();
    const requestedTopic = params.get('topic');
    const viewerName = (user && user.username) || '';
    const requestContext = `${viewerName}\u0000${requestedTopic || ''}`;
    const requestContextRef = useRef(requestContext);
    requestContextRef.current = requestContext;
    const [form, setForm] = useState({type: TOPICS.includes(requestedTopic) ? requestedTopic : 'account', username: user ? user.username : '', subject: '', message: ''});
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState('');
    const [sent, setSent] = useState(false);
    const submitLocks = useRef(new Set());
    const update = (key, value) => setForm(current => ({...current, [key]: value}));
    useEffect(() => {
        if (TOPICS.includes(requestedTopic)) update('type', requestedTopic);
        setSent(false);
        setError('');
        setBusy(false);
    }, [requestedTopic]);
    useEffect(() => {
        setForm(current => ({...current, username: viewerName, subject: '', message: ''}));
        setSent(false);
        setError('');
        setBusy(false);
    }, [viewerName]);
    const submit = async event => {
        event.preventDefault();
        const context = requestContextRef.current;
        const payload = supportPayload(form, user);
        if (!payload.username || !payload.subject || !payload.message) {
            setError(ct('support.completeAll', 'Complete every field before sending your request.'));
            return;
        }
        if (submitLocks.current.has(context)) return;
        submitLocks.current.add(context);
        setBusy(true);
        setError('');
        try {
            await api.support(payload);
            if (requestContextRef.current === context) setSent(true);
        } catch (e) {
            if (requestContextRef.current === context) setError(e.message || ct('support.couldNotSend', 'Could not send your request.'));
        } finally {
            submitLocks.current.delete(context);
            if (requestContextRef.current === context) setBusy(false);
        }
    };
    return (
        <main className={styles.page}>
            <header className={styles.head}>
                <h1>{ct('support.title')}</h1>
                <p>{ct('support.lead')}</p>
            </header>
            <section className={styles.section}>
                <h2>{ct('support.bugH')}</h2>
                <p>{ct('support.bugLead1')} <Link to="/roadmap?new=bug">{ct('support.bugTracker')}</Link>{ct('support.bugLead2')}</p>
            </section>
            <section className={styles.section}>
                <h2>{ct('support.requestH')}</h2>
                {sent ? <p className={styles.success}>{ct('support.sent')}</p> : (
                    <form className={styles.form} onSubmit={submit}>
                        <label>{ct('support.topic')}<select value={form.type} disabled={busy} onChange={event => update('type', event.target.value)}><option value="account">{ct('support.topicAccount')}</option><option value="safety">{ct('support.topicSafety')}</option><option value="legal">{ct('support.topicLegal')}</option><option value="appeal">{ct('support.topicAppeal')}</option></select></label>
                        <label>{ct('support.roturUsername')}<input value={user ? user.username : form.username} disabled={Boolean(user) || busy} required maxLength={80} onChange={event => update('username', event.target.value)} /></label>
                        <label>{ct('support.subject')}<input value={form.subject} disabled={busy} required maxLength={120} onChange={event => update('subject', event.target.value)} /></label>
                        <label>{ct('support.message')}<textarea value={form.message} disabled={busy} required maxLength={3000} onChange={event => update('message', event.target.value)} /></label>
                        {error ? <p className={styles.error}>{error}</p> : null}
                        <div className={styles.actions}><Button variant="primary" type="submit" busy={busy} busyLabel={ct('support.sending', 'Sending…')}>{ct('support.send')}</Button></div>
                    </form>
                )}
            </section>
        </main>
    );
};

export {supportPayload};
export default Support;
