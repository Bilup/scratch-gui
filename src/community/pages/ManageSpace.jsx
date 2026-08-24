/* eslint-disable max-len */
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {ArrowLeft, CalendarClock, Check, Gavel, Image as ImageIcon, LayoutGrid, Plus, Search, Settings, Trash2, UserPlus, Users, X} from 'lucide-react';
import api from '../api';
import Avatar from '../components/Avatar.jsx';
import SpaceProjectPicker from '../components/SpaceProjectPicker.jsx';
import Button from '../components/ui/Button.jsx';
import IconButton from '../components/ui/IconButton.jsx';
import Modal from '../components/ui/Modal.jsx';
import {SwitchRow} from '../components/ui/Switch.jsx';
import {useUser} from '../UserContext.jsx';
import {useCommunityIntl} from '../i18n.jsx';
import useLatest from '../use-latest.js';
import styles from './Spaces.module.css';

const SECTIONS = [
    {key: 'general', labelKey: 'manageSpace.general', Icon: Settings},
    {key: 'curators', labelKey: 'manageSpace.curators', Icon: Users},
    {key: 'projects', labelKey: 'manageSpace.projects', Icon: LayoutGrid},
    {key: 'danger', labelKey: 'manageSpace.dangerZone', Icon: Trash2}
];

const CHALLENGE_SECTIONS = [
    {key: 'general', labelKey: 'manageSpace.details', Icon: Settings},
    {key: 'schedule', labelKey: 'manageSpace.schedule', Icon: CalendarClock},
    {key: 'judging', labelKey: 'manageSpace.judging', Icon: Gavel},
    {key: 'projects', labelKey: 'manageSpace.submissions', Icon: LayoutGrid},
    {key: 'curators', labelKey: 'manageSpace.hostTeam', Icon: Users},
    {key: 'danger', labelKey: 'manageSpace.dangerZone', Icon: Trash2}
];

const spaceTimestamp = value => {
    const parsed = typeof value === 'number' ? value :
        typeof value === 'string' && /^\d+$/.test(value) ? Number(value) : new Date(value).getTime();
    return Number.isFinite(parsed) ? parsed : 0;
};
const dateTimeInput = value => {
    const parsed = spaceTimestamp(value);
    if (!parsed) return '';
    return new Date(parsed - (new Date(parsed).getTimezoneOffset() * 60000)).toISOString().slice(0, 16);
};
const scheduleIsValid = ({startsAt, endsAt, judgingEndsAt}) => {
    const start = spaceTimestamp(startsAt);
    const end = spaceTimestamp(endsAt);
    const judgingEnd = spaceTimestamp(judgingEndsAt);
    return start > 0 && end > start && judgingEnd > end;
};

const spaceConfirmationDetails = (confirmation, space, t) => {
    if (!confirmation || !space) return null;
    if (confirmation.type === 'remove-project') {
        return {
            title: t('manageSpace.confirmRemoveProjectTitle'),
            body: t('manageSpace.confirmRemoveProjectBody').replace('{project}', confirmation.project.title).replace('{space}', space.title),
            action: t('manageSpace.confirmRemoveProjectAction')
        };
    }
    if (confirmation.type === 'publish-results') {
        return {
            title: t('manageSpace.confirmPublishTitle'),
            body: t('manageSpace.confirmPublishBody'),
            action: t('manageSpace.confirmPublishAction')
        };
    }
    if (confirmation.type === 'delete-space') {
        return {
            title: t('manageSpace.confirmDeleteTitle').replace('{space}', space.title),
            body: t('manageSpace.confirmDeleteBody'),
            action: t('manageSpace.confirmDeleteAction')
        };
    }
    return null;
};

const prepareThumbnail = file => new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 640;
        canvas.height = 480;
        const scale = Math.max(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight);
        const width = image.naturalWidth * scale;
        const height = image.naturalHeight * scale;
        canvas.getContext('2d').drawImage(image, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
        URL.revokeObjectURL(url);
        canvas.toBlob(blob => {
            if (blob) resolve(blob);
            else reject(new Error('Could not process this image.'));
        }, 'image/png');
    };
    image.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Could not read this image.'));
    };
    image.src = url;
});

const buildSpacePatch = (form, section, criteriaLocked) => {
    const patch = {
        title: form.title,
        description: form.description,
        visibility: form.visibility,
        openSubmissions: form.openSubmissions,
        theme: form.theme,
        rules: form.rules
    };
    if (section === 'schedule') {
        Object.assign(patch, {
            startsAt: form.startsAt,
            endsAt: form.endsAt,
            judgingEndsAt: form.judgingEndsAt
        });
    }
    if (section === 'judging') {
        patch.communityVoting = form.communityVoting;
        if (!criteriaLocked) patch.criteria = form.criteria;
    }
    return patch;
};

const ManageSpace = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {user, loading, login} = useUser();
    const {t} = useCommunityIntl();
    const viewerName = (user && user.username) || '';
    const loadContext = `${id}\u0000${viewerName}`;
    const [space, setSpace] = useState(null);
    const [spaceLoadContext, setSpaceLoadContext] = useState('');
    const [form, setForm] = useState(null);
    const [active, setActive] = useState('general');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const [errorLoadContext, setErrorLoadContext] = useState('');
    const [inviteQuery, setInviteQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searching, setSearching] = useState(false);
    const [busyUser, setBusyUser] = useState('');
    const [busyProject, setBusyProject] = useState('');
    const [saving, setSaving] = useState(false);
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [confirmation, setConfirmation] = useState(null);
    const [confirmationError, setConfirmationError] = useState('');
    const [thumbnailBusy, setThumbnailBusy] = useState(false);
    const destructiveActionInFlight = useRef(new Set());
    const actionLocks = useRef(new Set());
    const currentLoadContext = useRef(loadContext);
    currentLoadContext.current = loadContext;
    const beginSearch = useLatest();
    const beginLoad = useLatest();

    const load = useCallback(() => {
        const fresh = beginLoad();
        return api.getSpaceManagement(id).then(fresh(data => {
            if (!data || !data.space) throw new Error('Space response was incomplete.');
            const endsAt = spaceTimestamp(data.space.endsAt);
            const loaded = {
                ...data.space,
                criteria: Array.isArray(data.space.criteria) && data.space.criteria.length ? data.space.criteria : [{id: 'overall', name: 'Overall', description: 'How strong is the entry as a whole?', weight: 1}],
                projects: Array.isArray(data.space.projects) ? data.space.projects : [],
                managers: Array.isArray(data.space.managers) ? data.space.managers : [],
                curatorInvites: Array.isArray(data.space.curatorInvites) ? data.space.curatorInvites : [],
                judges: Array.isArray(data.space.judges) ? data.space.judges : [],
                judgeInvites: Array.isArray(data.space.judgeInvites) ? data.space.judgeInvites : [],
                startsAt: spaceTimestamp(data.space.startsAt),
                endsAt,
                judgingEndsAt: spaceTimestamp(data.space.judgingEndsAt) || (endsAt ? endsAt + 604800000 : 0),
                theme: data.space.theme || '',
                rules: data.space.rules || ''
            };
            setSpace(loaded);
            setSpaceLoadContext(loadContext);
            setForm(loaded);
            setErrorLoadContext('');
            return loaded;
        }));
    }, [beginLoad, id, loadContext]);

    useEffect(() => {
        let activeRequest = true;
        setSpace(null);
        setForm(null);
        setError('');
        setBusyUser('');
        setBusyProject('');
        setSaving(false);
        setPublishing(false);
        setDeleting(false);
        setThumbnailBusy(false);
        setConfirmation(null);
        setConfirmationError('');
        if (loading || !viewerName) return () => {};
        load().catch(e => {
            if (activeRequest) {
                setErrorLoadContext(loadContext);
                setError(e.message || 'You cannot manage this space.');
            }
        });
        return () => {
            activeRequest = false;
        };
    }, [id, load, loading, viewerName]);

    useEffect(() => {
        const query = inviteQuery.trim();
        const fresh = beginSearch();
        if (query.length < 2 || !space || !space.isOwner) {
            setSuggestions([]);
            setSearching(false);
            return () => {};
        }
        setSearching(true);
        const timer = setTimeout(() => {
            api.searchUsers(query)
                .then(fresh(data => setSuggestions(data.users || [])))
                .catch(fresh(() => setSuggestions([])))
                .finally(fresh(() => setSearching(false)));
        }, 250);
        return () => clearTimeout(timer);
    }, [beginSearch, inviteQuery, space]);

    const updateForm = (field, value) => setForm(current => ({...current, [field]: value}));

    const beginAction = name => {
        const key = `${loadContext}\u0000${name}`;
        if (actionLocks.current.has(key)) return null;
        actionLocks.current.add(key);
        return key;
    };
    const releaseAction = key => actionLocks.current.delete(key);

    const uploadThumbnail = async event => {
        const input = event.currentTarget;
        const file = event.target.files && event.target.files[0];
        if (!file) return;
        if (file.size > 1024 * 1024) {
            setError(t('manageSpace.imageTooLarge'));
            input.value = '';
            return;
        }
        const actionKey = beginAction('thumbnail');
        if (!actionKey) {
            input.value = '';
            return;
        }
        const context = loadContext;
        setThumbnailBusy(true);
        setError('');
        setStatus('');
        try {
            const thumbnail = await prepareThumbnail(file);
            await api.setSpaceThumbnail(id, thumbnail);
            if (currentLoadContext.current === context) {
                await load();
                setStatus('Studio thumbnail updated.');
            }
        } catch (e) {
            if (currentLoadContext.current === context) {
                setError(e.message || 'Could not upload the thumbnail.');
            }
        } finally {
            releaseAction(actionKey);
            if (currentLoadContext.current === context) setThumbnailBusy(false);
            input.value = '';
        }
    };

    const save = async event => {
        event.preventDefault();
        if (active === 'schedule' && !scheduleIsValid(form)) {
            setError(t('manageSpace.scheduleInvalid'));
            return;
        }
        const actionKey = beginAction('save');
        if (!actionKey) return;
        const context = loadContext;
        setSaving(true);
        setError('');
        setStatus('');
        try {
            const criteriaLocked = space.projects.some(project => project.judgeScoreCount > 0);
            const patch = buildSpacePatch(form, active, criteriaLocked);
            await api.updateSpace(id, patch);
            if (currentLoadContext.current === context) {
                await load();
                setStatus('Changes saved.');
            }
        } catch (e) {
            if (currentLoadContext.current === context) {
                setError(e.message || 'Could not save changes.');
            }
        } finally {
            releaseAction(actionKey);
            if (currentLoadContext.current === context) setSaving(false);
        }
    };

    const invite = async username => {
        const actionKey = beginAction('user');
        if (!actionKey) return;
        const context = loadContext;
        setBusyUser(username);
        setError('');
        try {
            await api.inviteSpaceCurator(id, username);
            if (currentLoadContext.current === context) {
                setInviteQuery('');
                setSuggestions([]);
                await load();
                setStatus(`Invitation sent to ${username}.`);
            }
        } catch (e) {
            if (currentLoadContext.current === context) {
                setError(e.message || 'Could not send the invitation.');
            }
        } finally {
            releaseAction(actionKey);
            if (currentLoadContext.current === context) setBusyUser('');
        }
    };

    const removeCurator = async username => {
        const actionKey = beginAction('user');
        if (!actionKey) return;
        const context = loadContext;
        setBusyUser(username);
        setError('');
        try {
            await api.removeSpaceCurator(id, username);
            if (currentLoadContext.current === context) await load();
        } catch (e) {
            if (currentLoadContext.current === context) {
                setError(e.message || t('manageSpace.removeCuratorError'));
            }
        } finally {
            releaseAction(actionKey);
            if (currentLoadContext.current === context) setBusyUser('');
        }
    };

    const inviteJudge = async username => {
        const actionKey = beginAction('user');
        if (!actionKey) return;
        const context = loadContext;
        setBusyUser(username);
        setError('');
        try {
            await api.inviteChallengeJudge(id, username);
            if (currentLoadContext.current === context) {
                setInviteQuery('');
                setSuggestions([]);
                await load();
                setStatus(`Judge invitation sent to ${username}.`);
            }
        } catch (e) {
            if (currentLoadContext.current === context) {
                setError(e.message || 'Could not invite this judge.');
            }
        } finally {
            releaseAction(actionKey);
            if (currentLoadContext.current === context) setBusyUser('');
        }
    };

    const removeJudge = async username => {
        const actionKey = beginAction('user');
        if (!actionKey) return;
        const context = loadContext;
        setBusyUser(username);
        setError('');
        try {
            await api.removeChallengeJudge(id, username);
            if (currentLoadContext.current === context) await load();
        } catch (e) {
            if (currentLoadContext.current === context) {
                setError(e.message || 'Could not remove this judge.');
            }
        } finally {
            releaseAction(actionKey);
            if (currentLoadContext.current === context) setBusyUser('');
        }
    };

    const updateCriterion = (index, field, value) => setForm(current => ({
        ...current,
        criteria: current.criteria.map((criterion, criterionIndex) => (criterionIndex === index ? {...criterion, [field]: value} : criterion))
    }));

    const addCriterion = () => setForm(current => ({
        ...current,
        criteria: [...current.criteria, {id: `jc${Date.now()}`, name: '', description: '', weight: 1}]
    }));

    const removeCriterion = index => setForm(current => ({
        ...current,
        criteria: current.criteria.filter((criterion, criterionIndex) => criterionIndex !== index)
    }));

    const cancelInvitation = async username => {
        const actionKey = beginAction('user');
        if (!actionKey) return;
        const context = loadContext;
        setBusyUser(username);
        setError('');
        try {
            await api.cancelSpaceInvitation(id, username);
            if (currentLoadContext.current === context) await load();
        } catch (e) {
            if (currentLoadContext.current === context) {
                setError(e.message || t('manageSpace.cancelInvitationError'));
            }
        } finally {
            releaseAction(actionKey);
            if (currentLoadContext.current === context) setBusyUser('');
        }
    };

    const removeProject = project => {
        if (destructiveActionInFlight.current.has(loadContext)) return;
        setConfirmationError('');
        setConfirmation({type: 'remove-project', project});
    };

    const publishResults = () => {
        if (destructiveActionInFlight.current.has(loadContext)) return;
        setConfirmationError('');
        setConfirmation({type: 'publish-results'});
    };

    const deleteSpace = () => {
        if (destructiveActionInFlight.current.has(loadContext)) return;
        setConfirmationError('');
        setConfirmation({type: 'delete-space'});
    };

    const confirmDestructiveAction = async () => {
        if (!confirmation || destructiveActionInFlight.current.has(loadContext)) return;
        const action = confirmation;
        const actionContext = loadContext;
        const releaseDestructiveAction = () => {
            destructiveActionInFlight.current.delete(actionContext);
        };
        destructiveActionInFlight.current.add(actionContext);
        if (action.type === 'remove-project') setBusyProject(action.project.id);
        if (action.type === 'publish-results') setPublishing(true);
        if (action.type === 'delete-space') setDeleting(true);
        setError('');
        setConfirmationError('');
        try {
            if (action.type === 'remove-project') {
                await api.removeSpaceProject(id, action.project.id);
                await load();
            } else if (action.type === 'publish-results') {
                await api.publishChallengeResults(id);
                await load();
                if (currentLoadContext.current === actionContext) setStatus('Results published.');
            } else if (action.type === 'delete-space') {
                await api.deleteSpace(id);
                if (currentLoadContext.current === actionContext) navigate('/spaces');
            }
            if (currentLoadContext.current === actionContext) setConfirmation(null);
        } catch (e) {
            if (currentLoadContext.current === actionContext) {
                const fallback = action.type === 'remove-project' ? 'Could not remove this project.' :
                    action.type === 'publish-results' ? 'Could not publish results.' : 'Could not delete this space.';
                setConfirmationError(e.message || fallback);
            }
        } finally {
            releaseDestructiveAction();
            if (currentLoadContext.current === actionContext) {
                if (action.type === 'remove-project') setBusyProject('');
                if (action.type === 'publish-results') setPublishing(false);
                if (action.type === 'delete-space') setDeleting(false);
            }
        }
    };

    const unavailableUsers = useMemo(() => {
        if (!space) return new Set();
        const names = space.kind === 'challenge' && active === 'judging' ? [space.owner, ...(space.judges || []), ...(space.judgeInvites || []).map(pendingInvitation => pendingInvitation.username)] : [space.owner, ...(space.managers || []), ...(space.curatorInvites || []).map(pendingInvitation => pendingInvitation.username)];
        return new Set(names.map(name => name.toLowerCase()));
    }, [active, space]);

    if (loading) {
        return <main className={styles.page}><p className={styles.status}>{t('manageSpace.loadingTools')}</p></main>;
    }
    if (!user) {
        return (
            <main className={styles.page}>
                <p className={styles.status}>{t('manageSpace.signInToManage')} <Button onClick={login}>Sign in</Button></p>
            </main>
        );
    }
    if (!space || !form || spaceLoadContext !== loadContext) {
        return (
            <main className={styles.page}>
                <p className={styles.status}>
                    {(errorLoadContext === loadContext && error) || t('manageSpace.loadingTools')}{' '}
                    {errorLoadContext === loadContext && error ? (
                        <Button
                            onClick={() => {
                                setError('');
                                load().catch(e => setError(e.message || t('manageSpace.cannotManage')));
                            }}
                        >{t('manageSpace.tryAgain')}</Button>
                    ) : null}
                </p>
            </main>
        );
    }
    const criteriaLocked = space.projects.some(project => project.judgeScoreCount > 0);
    const confirmationDetails = spaceConfirmationDetails(confirmation, space, t);

    return (
        <main className={`${styles.page} ${styles.managePage}`}>
            {confirmationDetails ? (
                <Modal
                    icon={Trash2}
                    title={confirmationDetails.title}
                    dismissDisabled={destructiveActionInFlight.current.has(loadContext)}
                    onClose={() => {
                        setConfirmation(null);
                        setConfirmationError('');
                    }}
                    actions={<>
                        <Button
                            variant="secondary"
                            disabled={destructiveActionInFlight.current.has(loadContext)}
                            onClick={() => {
                                setConfirmation(null);
                                setConfirmationError('');
                            }}
                        >{t('manageSpace.cancel')}</Button>
                        <Button
                            variant="danger"
                            busy={destructiveActionInFlight.current.has(loadContext)}
                            busyLabel={t('manageSpace.working')}
                            onClick={confirmDestructiveAction}
                        >{confirmationDetails.action}</Button>
                    </>}
                >
                    <p>{confirmationDetails.body}</p>
                    {confirmationError ? <p className={styles.error}>{confirmationError}</p> : null}
                </Modal>
            ) : null}
            <Link to={`/spaces/${id}`} className={styles.back}><ArrowLeft size={15} /> {t('manageSpace.backTo')} {space.title}</Link>
            <header className={styles.manageHeader}>
                <div><span>{space.kind === 'challenge' ? t('manageSpace.manageChallenge') : t('manageSpace.manageSpace')}</span><h1>{space.title}</h1></div>
                <Link to={`/spaces/${id}`}>{t('manageSpace.viewPublicPage')}</Link>
            </header>
            <div className={styles.manageLayout}>
                <nav className={styles.manageNav} aria-label={t('manageSpace.settingsAria')}>
                    {(space.kind === 'challenge' ? CHALLENGE_SECTIONS : SECTIONS).filter(section => section.key !== 'danger' || space.isOwner).map(({key, labelKey, Icon}) => (
                        <button
                            key={key}
                            type="button"
                            className={active === key ? styles.manageNavActive : ''}
                            onClick={() => {
                                setActive(key);
                                setError('');
                                setStatus('');
                            }}
                        ><Icon size={16} /> {t(labelKey)}</button>
                    ))}
                </nav>
                <div className={styles.manageContent}>
                    {error ? <p className={styles.error}>{error}</p> : null}
                    {status ? <p className={styles.success}><Check size={15} /> {status}</p> : null}
                    {active === 'general' ? (
                        <form className={styles.manageCard} onSubmit={save}>
                            <header><h2>{space.kind === 'challenge' ? t('manageSpace.challengeDetails') : t('manageSpace.generalDetails')}</h2><p>{space.kind === 'challenge' ? t('manageSpace.challengeDetailsLead') : t('manageSpace.generalDetailsLead')}</p></header>
                            <fieldset className={styles.manageFormFields} disabled={saving}>
                                {space.kind === 'studio' ? <div className={styles.thumbnailEditor}>{space.thumbnailUrl ? <img src={space.thumbnailUrl} alt="" /> : <span><ImageIcon size={28} /> {t('manageSpace.noThumbnail')}</span>}<label><strong>{thumbnailBusy ? t('manageSpace.uploading') : t('manageSpace.chooseImage')}</strong><small>{t('manageSpace.imageHelp')}</small><input type="file" accept="image/png,image/jpeg,image/webp" disabled={thumbnailBusy} onChange={uploadThumbnail} /></label></div> : null}
                                <label><span>{t('manageSpace.name')}</span><input value={form.title} maxLength={100} required onChange={event => updateForm('title', event.target.value)} /></label>
                                <label><span>{t('manageSpace.description')}</span><textarea value={form.description || ''} maxLength={5000} onChange={event => updateForm('description', event.target.value)} /></label>
                                {space.kind === 'challenge' ? <><label><span>{t('manageSpace.theme')}</span><input value={form.theme || ''} maxLength={200} placeholder={t('manageSpace.themePlaceholder')} onChange={event => updateForm('theme', event.target.value)} /></label><label><span>{t('manageSpace.rules')}</span><textarea value={form.rules || ''} maxLength={10000} placeholder={t('manageSpace.rulesPlaceholder')} onChange={event => updateForm('rules', event.target.value)} /></label></> : null}
                                <div className={styles.formRow}>
                                    <label><span>{t('manageSpace.visibility')}</span><select value={form.visibility} onChange={event => updateForm('visibility', event.target.value)}><option value="public">{t('manageSpace.visibilityPublic')}</option><option value="unlisted">{t('manageSpace.visibilityUnlisted')}</option><option value="private">{t('manageSpace.visibilityPrivate')}</option></select></label>
                                    <SwitchRow
                                        className={styles.toggleSwitch}
                                        checked={Boolean(form.openSubmissions)}
                                        description={t('manageSpace.openSubmissionsDesc')}
                                        label={t('manageSpace.openSubmissions')}
                                        onChange={value => updateForm('openSubmissions', value)}
                                    />
                                </div>
                                <div className={styles.manageCardActions}><Button type="submit" busy={saving} busyLabel={t('manageSpace.saving')}>{t('manageSpace.saveChanges')}</Button></div>
                            </fieldset>
                        </form>
                    ) : null}
                    {active === 'schedule' && space.kind === 'challenge' ? (
                        <form className={styles.manageCard} onSubmit={save}>
                            <header><h2>{t('manageSpace.schedule')}</h2><p>{t('manageSpace.scheduleLead')}</p></header>
                            <fieldset className={styles.manageFormFields} disabled={saving}>
                                <div className={styles.scheduleFields}>
                                    <label><span>{t('manageSpace.submissionsOpen')}</span><input type="datetime-local" value={dateTimeInput(form.startsAt)} onChange={event => updateForm('startsAt', event.target.value ? new Date(event.target.value).getTime() : 0)} /><small>{t('manageSpace.submissionsOpenHint')}</small></label>
                                    <label><span>{t('manageSpace.submissionsClose')}</span><input type="datetime-local" value={dateTimeInput(form.endsAt)} onChange={event => updateForm('endsAt', event.target.value ? new Date(event.target.value).getTime() : 0)} /><small>{t('manageSpace.submissionsCloseHint')}</small></label>
                                    <label><span>{t('manageSpace.judgingEnds')}</span><input type="datetime-local" value={dateTimeInput(form.judgingEndsAt)} onChange={event => updateForm('judgingEndsAt', event.target.value ? new Date(event.target.value).getTime() : 0)} /><small>{t('manageSpace.judgingEndsHint')}</small></label>
                                </div>
                                <div className={styles.manageCardActions}><Button type="submit" busy={saving} busyLabel={t('manageSpace.saving')}>{t('manageSpace.saveSchedule')}</Button></div>
                            </fieldset>
                        </form>
                    ) : null}
                    {active === 'judging' && space.kind === 'challenge' ? (
                        <section className={styles.judgingStack}>
                            <form className={styles.manageCard} onSubmit={save}>
                                <header><h2>{t('manageSpace.scoringCriteria')}</h2><p>{criteriaLocked ? t('manageSpace.criteriaLocked') : t('manageSpace.criteriaLead')}</p></header>
                                <fieldset className={styles.manageFormFields} disabled={saving}>
                                    <div className={styles.criteriaEditor}>
                                        {(form.criteria || []).map((criterion, index) => <article key={criterion.id}><label><span>{t('manageSpace.criterionName')}</span><input required disabled={criteriaLocked} maxLength={60} value={criterion.name} onChange={event => updateCriterion(index, 'name', event.target.value)} /></label><label><span>{t('manageSpace.criterionDescription')}</span><input disabled={criteriaLocked} maxLength={300} value={criterion.description || ''} onChange={event => updateCriterion(index, 'description', event.target.value)} /></label><label className={styles.weightField}><span>{t('manageSpace.weight')} <strong>{criterion.weight}</strong></span><input type="range" disabled={criteriaLocked} min="1" max="5" step="1" value={criterion.weight} onChange={event => updateCriterion(index, 'weight', Number(event.target.value))} aria-label={t('manageSpace.criterionWeightAria').replace('{name}', criterion.name || t('manageSpace.criterion')).replace('{weight}', criterion.weight)} /></label><IconButton variant="danger" label={t('manageSpace.removeCriterionAria').replace('{name}', criterion.name || t('manageSpace.criterion'))} onClick={() => removeCriterion(index)} disabled={criteriaLocked || form.criteria.length === 1}><X size={16} /></IconButton></article>)}
                                    </div>
                                    {!criteriaLocked && form.criteria.length < 8 ? <Button className={styles.addCriterion} onClick={addCriterion}><Plus size={15} /> {t('manageSpace.addCriterion')}</Button> : null}
                                    <SwitchRow
                                        checked={Boolean(form.communityVoting)}
                                        description={t('manageSpace.audienceRatingsDesc')}
                                        label={t('manageSpace.audienceRatings')}
                                        onChange={value => updateForm('communityVoting', value)}
                                    />
                                    <div className={styles.manageCardActions}><Button type="submit" busy={saving} busyLabel={t('manageSpace.saving')}>{t('manageSpace.saveJudgingSetup')}</Button></div>
                                </fieldset>
                            </form>
                            <section className={styles.manageCard}>
                                <header><h2>{t('manageSpace.judges')}</h2><p>{t('manageSpace.judgesLead')}</p></header>
                                <div className={styles.curatorInvite}>
                                    <Search size={16} />
                                    <input value={inviteQuery} disabled={Boolean(busyUser)} onChange={event => setInviteQuery(event.target.value)} placeholder={t('manageSpace.searchJudge')} />
                                    {searching ? <span>{t('manageSpace.searching')}</span> : null}
                                    {inviteQuery.trim().length >= 2 && !searching ? <div className={styles.userSuggestions}>{suggestions.filter(person => !unavailableUsers.has(person.username.toLowerCase())).map(person => <Button key={person.username} busy={busyUser === person.username} busyLabel={t('manageSpace.inviting')} onClick={() => inviteJudge(person.username)} disabled={Boolean(busyUser)}><Avatar username={person.username} size={32} /><span><strong>{person.username}</strong><small>{t('manageSpace.mistwarpUser')}</small></span><UserPlus size={16} /></Button>)}{!suggestions.filter(person => !unavailableUsers.has(person.username.toLowerCase())).length ? <p>{t('manageSpace.noAvailableUsers')}</p> : null}</div> : null}
                                </div>
                                <div className={styles.peopleList}>{(space.judges || []).map(username => <article key={username}><Avatar username={username} size={38} /><div><strong>{username}</strong><span>{t('manageSpace.judge')}</span></div><Button variant="danger" busy={busyUser === username} busyLabel={t('manageSpace.removing')} onClick={() => removeJudge(username)} disabled={Boolean(busyUser)}><X size={15} /> {t('manageSpace.remove')}</Button></article>)}{!space.judges?.length ? <p className={styles.pickerEmpty}>{t('manageSpace.noJudgesYet')}</p> : null}</div>
                                {(space.judgeInvites || []).length ? <><h3 className={styles.subheading}>{t('manageSpace.pendingInvitations')}</h3><div className={styles.peopleList}>{space.judgeInvites.map(invitation => <article key={invitation.username}><Avatar username={invitation.username} size={38} /><div><strong>{invitation.username}</strong><span>{t('manageSpace.invited')}</span></div></article>)}</div></> : null}
                            </section>
                            <section className={styles.manageCard}>
                                <header><h2>{t('manageSpace.results')}</h2><p>{t('manageSpace.resultsLead')}</p></header>
                                <div className={styles.publishRow}><span>{space.resultsPublishedAt ? t('manageSpace.publishedDate').replace('{date}', new Date(space.resultsPublishedAt).toLocaleString()) : `${space.projects.filter(project => project.judgeScoreCount > 0).length} ${t('manageSpace.of')} ${space.projects.length} ${t('manageSpace.entriesScored')}`}</span>{!space.resultsPublishedAt ? <Button
                                    variant="primary" busy={publishing} busyLabel={t('manageSpace.publishing')} onClick={publishResults}
                                >{t('manageSpace.publishResults')}</Button> : <span className={styles.published}><Check size={15} /> {t('manageSpace.resultsLive')}</span>}</div>
                            </section>
                        </section>
                    ) : null}
                    {active === 'curators' ? (
                        <section className={styles.manageCard}>
                            <header><h2>{t('manageSpace.curators')}</h2><p>{t('manageSpace.curatorsLead')}</p></header>
                            {space.isOwner ? (
                                <div className={styles.curatorInvite}>
                                    <Search size={16} />
                                    <input value={inviteQuery} disabled={Boolean(busyUser)} onChange={event => setInviteQuery(event.target.value)} placeholder={t('manageSpace.searchCurator')} />
                                    {searching ? <span>{t('manageSpace.searching')}</span> : null}
                                    {inviteQuery.trim().length >= 2 && !searching ? (
                                        <div className={styles.userSuggestions}>
                                            {suggestions.filter(person => !unavailableUsers.has(person.username.toLowerCase())).map(person => (
                                                <Button key={person.username} busy={busyUser === person.username} busyLabel={t('manageSpace.inviting')} onClick={() => invite(person.username)} disabled={Boolean(busyUser)}><Avatar username={person.username} size={32} /><span><strong>{person.username}</strong><small>{person.bio || t('manageSpace.mistwarpUser')}</small></span><UserPlus size={16} /></Button>
                                            ))}
                                            {!suggestions.filter(person => !unavailableUsers.has(person.username.toLowerCase())).length ? <p>{t('manageSpace.noAvailableUsers')}</p> : null}
                                        </div>
                                    ) : null}
                                </div>
                            ) : null}
                            <div className={styles.peopleList}>
                                <article><Avatar username={space.owner} size={38} /><div><strong>{space.owner}</strong><span>{t('manageSpace.owner')}</span></div></article>
                                {(space.managers || []).map(username => <article key={username}><Avatar username={username} size={38} /><div><strong>{username}</strong><span>{t('manageSpace.curator')}</span></div>{space.isOwner ? <Button variant="danger" busy={busyUser === username} busyLabel={t('manageSpace.removing')} onClick={() => removeCurator(username)} disabled={Boolean(busyUser)}><X size={15} /> {t('manageSpace.remove')}</Button> : null}</article>)}
                            </div>
                            {space.isOwner && (space.curatorInvites || []).length ? <><h3 className={styles.subheading}>{t('manageSpace.pendingInvitations')}</h3><div className={styles.peopleList}>{space.curatorInvites.map(pendingInvitation => <article key={pendingInvitation.username}><Avatar username={pendingInvitation.username} size={38} /><div><strong>{pendingInvitation.username}</strong><span>{t('manageSpace.invited')}</span></div><Button busy={busyUser === pendingInvitation.username} busyLabel={t('manageSpace.cancelling')} onClick={() => cancelInvitation(pendingInvitation.username)} disabled={Boolean(busyUser)}><X size={15} /> {t('manageSpace.cancel')}</Button></article>)}</div></> : null}
                        </section>
                    ) : null}
                    {active === 'projects' ? (
                        <section className={styles.manageCard}>
                            <header className={styles.manageProjectsHeader}><div><h2>{space.kind === 'challenge' ? t('manageSpace.submissions') : t('manageSpace.projects')}</h2><p>{space.kind === 'challenge' ? t('manageSpace.submissionsLead') : t('manageSpace.projectsLead')}</p></div><SpaceProjectPicker space={space} onAdded={load} /></header>
                            <div className={styles.manageProjectList}>
                                {space.projects.map(project => <article key={project.id}><div><strong>{project.title}</strong><span>{t('manageSpace.by')} {project.owner}</span>{space.kind === 'challenge' && (project.scoreBreakdown || []).length ? <div className={styles.submissionFeedback}>{project.scoreBreakdown.map(score => <span key={score.judge}><strong>{score.judge}</strong>{score.feedback || t('manageSpace.scoreSubmitted')}</span>)}</div> : null}</div><Link to={`/project/${project.id}`}>{t('manageSpace.view')}</Link><Button variant="danger" busy={busyProject === project.id} busyLabel={t('manageSpace.removing')} disabled={Boolean(busyProject)} onClick={() => removeProject(project)}><Trash2 size={15} /> {t('manageSpace.remove')}</Button></article>)}
                                {!space.projects.length ? <p className={styles.pickerEmpty}>{t('manageSpace.noProjectsYet')}</p> : null}
                            </div>
                        </section>
                    ) : null}
                    {active === 'danger' && space.isOwner ? (
                        <section className={`${styles.manageCard} ${styles.dangerCard}`}>
                            <header><h2>{t('manageSpace.deleteSpace')}</h2><p>{t('manageSpace.deleteSpaceLead')}</p></header>
                            <Button
                                variant="danger"
                                disabled={deleting}
                                onClick={deleteSpace}
                            ><Trash2 size={16} /> {deleting ? t('manageSpace.deleting') : t('manageSpace.deleteSpace')}</Button>
                        </section>
                    ) : null}
                </div>
            </div>
        </main>
    );
};

export {buildSpacePatch, scheduleIsValid, spaceConfirmationDetails, spaceTimestamp};
export default ManageSpace;
