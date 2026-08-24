/* eslint-disable max-len */
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {Bug, MessageCircle, Plus, Search, Sparkles} from 'lucide-react';
import api from '../api';
import {useUser} from '../UserContext.jsx';
import Avatar from '../components/Avatar.jsx';
import Button from '../components/ui/Button.jsx';
import CommentThread from '../components/CommentThread.jsx';
import RichText from '../components/RichText.jsx';
import ReactionButtons from '../components/ReactionButtons.jsx';
import {timeAgo} from '../format';
import {useCommunityIntl} from '../i18n.jsx';
import useLatest from '../use-latest.js';
import styles from './Roadmap.module.css';

const STATUS_LABEL_KEYS = {
    open: 'roadmap.statusOpen',
    planned: 'roadmap.statusPlanned',
    building: 'roadmap.statusBuilding',
    shipped: 'roadmap.statusShipped',
    declined: 'roadmap.statusDeclined'
};

export const roadmapPayload = form => ({
    ...form,
    title: form.title.trim(),
    description: form.description.trim()
});

const IdeaCard = ({idea, user, login, onVote, onStatus, onInterest, busy}) => {
    const {t} = useCommunityIntl();
    const [discussionOpen, setDiscussionOpen] = useState(false);
    const source = useMemo(() => ({
        list: () => api.ideaComments(idea._id),
        add: (content, parent) => api.addIdeaComment(idea._id, content, parent),
        remove: comment => api.deleteIdeaComment(idea._id, comment)
    }), [idea._id]);
    const commentCount = idea.commentCount || 0;

    return (
        <article id={`idea-${idea._id}`} className={styles.idea}>
            <ReactionButtons
                variant="vertical"
                heartKey="like"
                downKey="dislike"
                activeReaction={idea.myVote || ''}
                onReact={choice => onVote(idea, choice)}
                disabled={busy}
                disabledTitle={t('roadmap.saving')}
                showCounts={false}
                between={<span className={styles.score}><strong>{idea.score || 0}</strong><small>{t('roadmap.score')}</small></span>}
            />
            <div className={styles.ideaBody}>
                <div className={styles.ideaTop}>
                    <div className={styles.labels}>
                        <span className={idea.kind === 'bug' ? styles.bugLabel : styles.ideaLabel}>{idea.kind === 'bug' ? <Bug size={11} /> : null}{idea.kind === 'bug' ? t('roadmap.bug') : t('roadmap.idea')}</span>
                        <span title={t('roadmap.area')}>{idea.category}</span>
                        {!user || !user.isAdmin ? <span className={styles[`status${idea.status}`]} title={t('roadmap.status')}>{t(STATUS_LABEL_KEYS[idea.status] || idea.status)}</span> : null}
                        {(!user || !user.isAdmin) && idea.interested ? <span className={styles.official} title={t('roadmap.interestedTitle')}><Sparkles size={11} /> {t('roadmap.interested')}</span> : null}
                    </div>
                    {user && user.isAdmin ? (
                        <div className={styles.adminActions}>
                            <select aria-label={t('roadmap.suggestionStatus')} value={idea.status} disabled={busy} onChange={event => onStatus(idea, event.target.value)}>
                                {Object.entries(STATUS_LABEL_KEYS).map(([value, key]) => <option key={value} value={value}>{t(key)}</option>)}
                            </select>
                            <Button
                                variant="secondary"
                                busy={busy}
                                busyLabel={t('roadmap.saving')}
                                className={idea.interested ? styles.officialToggleOn : styles.officialToggle}
                                title={idea.interested ? t('roadmap.removeInterest') : t('roadmap.markInterested')}
                                onClick={() => onInterest(idea, !idea.interested)}
                            >
                                <Sparkles size={11} />
                                {idea.interested ? t('roadmap.interestedBtn') : t('roadmap.markInterestedBtn')}
                            </Button>
                        </div>
                    ) : null}
                </div>
                <h2>{idea.title}</h2>
                <p className={styles.description}><RichText text={idea.description} /></p>
                <div className={styles.ideaFooter}>
                    <div className={styles.meta}>
                        <Link to={`/users/${idea.author}`}><Avatar username={idea.author} size={24} />{idea.author}</Link>
                        <span>{timeAgo(idea.created)}</span>
                    </div>
                    <Button
                        variant="secondary"
                        className={styles.discussionButton}
                        onClick={() => setDiscussionOpen(value => !value)}
                        aria-expanded={discussionOpen}
                    >
                        <MessageCircle size={15} />
                        {commentCount} {commentCount === 1 ? t('roadmap.comment') : t('roadmap.comments')}
                        <span>{discussionOpen ? t('roadmap.hide') : t('roadmap.discuss')}</span>
                    </Button>
                </div>
                {discussionOpen ? (
                    <div className={styles.discussion}>
                        {!user ? <Button variant="primary" className={styles.signIn} onClick={login}>{t('roadmap.signInDiscussion')}</Button> : null}
                        <CommentThread source={source} canModerate={Boolean(user && (user.isAdmin || user.username.toLowerCase() === idea.author.toLowerCase()))} reportContext={`roadmap suggestion ${idea.title}`} />
                    </div>
                ) : null}
            </div>
        </article>
    );
};

const Roadmap = () => {
    const {user, login} = useUser();
    const {t} = useCommunityIntl();
    const viewerName = (user && user.username) || '';
    const [params, setParams] = useSearchParams();
    const [ideas, setIdeas] = useState(null);
    const [loadError, setLoadError] = useState(false);
    const [creating, setCreating] = useState(params.get('new') === 'bug');
    const [form, setForm] = useState({kind: params.get('new') === 'bug' ? 'bug' : 'idea', title: '', description: '', category: 'Community'});
    const [error, setError] = useState('');
    const [createBusy, setCreateBusy] = useState(false);
    const [busyIdea, setBusyIdea] = useState('');
    const [query, setQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [sourceFilter, setSourceFilter] = useState('');
    const [kindFilter, setKindFilter] = useState('');
    const actionLocks = useRef(new Set());
    const currentViewer = useRef(viewerName);
    currentViewer.current = viewerName;
    const beginLoad = useLatest();
    const updateForm = (field, value) => setForm(current => ({...current, [field]: value}));
    const closeComposer = () => {
        setCreating(false);
        if (params.has('new')) {
            const next = new URLSearchParams(params);
            next.delete('new');
            setParams(next, {replace: true});
        }
    };

    const categories = useMemo(() => (ideas ? [...new Set(ideas.map(idea => idea.category).filter(Boolean))].sort() : []), [ideas]);
    const visibleIdeas = useMemo(() => {
        if (!ideas) return [];
        const normalizedQuery = query.trim().toLowerCase();
        return ideas.filter(idea => {
            if (statusFilter && idea.status !== statusFilter) return false;
            if (categoryFilter && idea.category !== categoryFilter) return false;
            if (sourceFilter && idea.source !== sourceFilter) return false;
            if (kindFilter && (idea.kind || 'idea') !== kindFilter) return false;
            if (!normalizedQuery) return true;
            return `${idea.title} ${idea.description} ${idea.author} ${idea.category}`.toLowerCase().includes(normalizedQuery);
        });
    }, [ideas, query, statusFilter, categoryFilter, sourceFilter, kindFilter]);
    const filtering = Boolean(query || statusFilter || categoryFilter || sourceFilter || kindFilter);
    const clearFilters = () => {
        setQuery('');
        setStatusFilter('');
        setCategoryFilter('');
        setSourceFilter('');
        setKindFilter('');
    };

    const load = useCallback(() => {
        const fresh = beginLoad();
        setIdeas(null);
        setLoadError(false);
        api.roadmap()
            .then(fresh(data => setIdeas(data.ideas || [])))
            .catch(fresh(() => setLoadError(true)));
    }, [beginLoad, viewerName]);

    useEffect(load, [load]);
    useEffect(() => {
        setCreateBusy(false);
        setBusyIdea('');
        setError('');
    }, [viewerName]);
    useEffect(() => {
        if (params.get('new') !== 'bug') return;
        setCreating(true);
        setForm(current => ({...current, kind: 'bug'}));
    }, [params]);
    useEffect(() => {
        if (!ideas || !location.hash.startsWith('#idea-')) return;
        const target = document.getElementById(location.hash.slice(1));
        if (target) target.scrollIntoView({block: 'center'});
    }, [ideas]);

    const create = async event => {
        event.preventDefault();
        if (!user) {
            login();
            return;
        }
        const payload = roadmapPayload(form);
        if (!payload.title || !payload.description) {
            setError(t('roadmap.addTitleDesc'));
            return;
        }
        const actionViewer = viewerName;
        const actionKey = `${actionViewer}\u0000create`;
        if (actionLocks.current.has(actionKey)) return;
        actionLocks.current.add(actionKey);
        setCreateBusy(true);
        setError('');
        try {
            await api.createIdea(payload);
            if (currentViewer.current === actionViewer) {
                setForm({kind: 'idea', title: '', description: '', category: 'Community'});
                closeComposer();
                load();
            }
        } catch (e) {
            if (currentViewer.current === actionViewer) {
                setError(e.message || 'Could not post the suggestion.');
            }
        } finally {
            actionLocks.current.delete(actionKey);
            if (currentViewer.current === actionViewer) setCreateBusy(false);
        }
    };

    const vote = async (idea, choice) => {
        if (!user) {
            login();
            return;
        }
        const actionViewer = viewerName;
        const actionKey = `${actionViewer}\u0000idea`;
        if (actionLocks.current.has(actionKey)) return;
        actionLocks.current.add(actionKey);
        setBusyIdea(idea._id);
        setError('');
        try {
            const data = await api.voteIdea(idea._id, choice);
            if (currentViewer.current === actionViewer) {
                setIdeas(current => current.map(item => (item._id === idea._id ? {...item, ...data} : item))
                    .sort((a, b) => b.score - a.score));
            }
        } catch (e) {
            if (currentViewer.current === actionViewer) setError(e.message || 'Could not save your vote.');
        } finally {
            actionLocks.current.delete(actionKey);
            if (currentViewer.current === actionViewer) setBusyIdea('');
        }
    };

    const updateStatus = async (idea, status) => {
        const actionViewer = viewerName;
        const actionKey = `${actionViewer}\u0000idea`;
        if (actionLocks.current.has(actionKey)) return;
        actionLocks.current.add(actionKey);
        setBusyIdea(idea._id);
        setError('');
        try {
            await api.updateIdea(idea._id, {status});
            if (currentViewer.current === actionViewer) {
                setIdeas(current => current.map(item => (item._id === idea._id ? {...item, status} : item)));
            }
        } catch (e) {
            if (currentViewer.current === actionViewer) setError(e.message || 'Could not update the status.');
        } finally {
            actionLocks.current.delete(actionKey);
            if (currentViewer.current === actionViewer) setBusyIdea('');
        }
    };

    const updateInterest = async (idea, interested) => {
        const actionViewer = viewerName;
        const actionKey = `${actionViewer}\u0000idea`;
        if (actionLocks.current.has(actionKey)) return;
        actionLocks.current.add(actionKey);
        setBusyIdea(idea._id);
        setError('');
        try {
            await api.updateIdea(idea._id, {interested});
            if (currentViewer.current === actionViewer) {
                setIdeas(current => current.map(item => (item._id === idea._id ? {...item, interested} : item)));
            }
        } catch (e) {
            if (currentViewer.current === actionViewer) {
                setError(e.message || t('roadmap.interestError'));
            }
        } finally {
            actionLocks.current.delete(actionKey);
            if (currentViewer.current === actionViewer) setBusyIdea('');
        }
    };

    return (
        <main className={styles.page}>
            <header className={styles.head}>
                <div>
                    <h1>{t('roadmap.title')}</h1>
                    <p>{t('roadmap.lead')}</p>
                </div>
                <Button disabled={createBusy} onClick={() => (user ? (creating ? closeComposer() : setCreating(true)) : login())}><Plus size={16} /> {t('roadmap.addEntry')}</Button>
            </header>
            {creating ? (
                <form className={styles.form} onSubmit={create}>
                    <label>{t('roadmap.type')}<select value={form.kind} disabled={createBusy} onChange={event => updateForm('kind', event.target.value)}><option value="idea">{t('roadmap.idea')}</option><option value="bug">{t('roadmap.bugReport')}</option></select></label>
                    <label>{t('roadmap.titleLabel')}<input value={form.title} disabled={createBusy} required maxLength={120} placeholder={t('roadmap.titlePlaceholder')} onChange={event => updateForm('title', event.target.value)} /></label>
                    <label>{t('roadmap.description')}<textarea value={form.description} disabled={createBusy} required maxLength={3000} placeholder={form.kind === 'bug' ? t('roadmap.descPlaceholderBug') : t('roadmap.descPlaceholderIdea')} onChange={event => updateForm('description', event.target.value)} /></label>
                    <label>{t('roadmap.area')}<select value={form.category} disabled={createBusy} onChange={event => updateForm('category', event.target.value)}>
                        <option>{t('roadmap.categoryCommunity')}</option><option>{t('roadmap.categoryEditor')}</option><option>{t('roadmap.categoryCollaboration')}</option><option>{t('roadmap.categoryExtensions')}</option><option>{t('roadmap.categoryMobile')}</option><option>{t('roadmap.categoryOther')}</option>
                    </select></label>
                    <div className={styles.formActions}>
                        <Button type="submit" busy={createBusy} busyLabel={t('roadmap.posting')}>{form.kind === 'bug' ? t('roadmap.reportBug') : t('roadmap.postIdea')}</Button>
                        <Button variant="secondary" disabled={createBusy} onClick={closeComposer}>{t('roadmap.cancel')}</Button>
                    </div>
                </form>
            ) : null}
            {error ? <p className={styles.error}>{error}</p> : null}
            {ideas && ideas.length ? (
                <div className={styles.filters}>
                    <div className={styles.searchFilter}><Search size={16} /><input aria-label={t('roadmap.searchAria')} value={query} onChange={event => setQuery(event.target.value)} placeholder={t('roadmap.searchPlaceholder')} /></div>
                    <select aria-label={t('roadmap.filterType')} value={kindFilter} onChange={event => setKindFilter(event.target.value)}><option value="">{t('roadmap.ideasAndBugs')}</option><option value="idea">{t('roadmap.ideas')}</option><option value="bug">{t('roadmap.bugs')}</option></select>
                    <select aria-label={t('roadmap.filterStatus')} value={statusFilter} onChange={event => setStatusFilter(event.target.value)}><option value="">{t('roadmap.anyStatus')}</option>{Object.entries(STATUS_LABEL_KEYS).map(([value, key]) => <option key={value} value={value}>{t(key)}</option>)}</select>
                    <select aria-label={t('roadmap.filterArea')} value={categoryFilter} onChange={event => setCategoryFilter(event.target.value)}><option value="">{t('roadmap.anyArea')}</option>{categories.map(category => <option key={category} value={category}>{category}</option>)}</select>
                    <select aria-label={t('roadmap.filterSubmitter')} value={sourceFilter} onChange={event => setSourceFilter(event.target.value)}><option value="">{t('roadmap.anyone')}</option><option value="community">{t('roadmap.community')}</option><option value="mistwarp">{t('roadmap.mistwarp')}</option></select>
                    <div className={styles.filterSummary}>
                        <span>{visibleIdeas.length} {visibleIdeas.length === 1 ? t('roadmap.result') : t('roadmap.results')}</span>
                        {filtering ? <button type="button" onClick={clearFilters}>{t('roadmap.clearFilters')}</button> : null}
                    </div>
                </div>
            ) : null}
            {!ideas && !loadError ? <p className={styles.empty}>{t('roadmap.loading')}</p> : null}
            {loadError ? <p className={styles.empty}>{t('roadmap.loadFailed')} <button type="button" onClick={load}>{t('roadmap.tryAgain')}</button></p> : null}
            {ideas && !ideas.length ? <p className={styles.empty}>{t('roadmap.empty')}</p> : null}
            {ideas && ideas.length && !visibleIdeas.length ? <p className={styles.empty}>{t('roadmap.noMatch')}</p> : null}
            {visibleIdeas.length ? <div className={styles.list}>{visibleIdeas.map(idea => (
                <IdeaCard key={idea._id} idea={idea} user={user} login={login} onVote={vote} onStatus={updateStatus} onInterest={updateInterest} busy={busyIdea === idea._id} />
            ))}</div> : null}
        </main>
    );
};

export default Roadmap;
