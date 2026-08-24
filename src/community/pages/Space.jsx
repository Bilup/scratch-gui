/* eslint-disable max-len */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {ArrowLeft, CalendarDays, Layers3, Library, MessageCircle, Settings, Trophy, UserMinus, UserPlus, Users} from 'lucide-react';
import api from '../api';
import {useCommunityIntl} from '../i18n.jsx';
import {useUser} from '../UserContext.jsx';
import Avatar from '../components/Avatar.jsx';
import CommentThread from '../components/CommentThread.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SpaceProjectPicker from '../components/SpaceProjectPicker.jsx';
import Button from '../components/ui/Button.jsx';
import ReactionButtons from '../components/ReactionButtons.jsx';
import Challenge from './Challenge.jsx';
import Collection from './Collection.jsx';
import Studio from './Studio.jsx';
import useLatest from '../use-latest.js';
import styles from './Spaces.module.css';

const KIND_ICONS = {studio: Layers3, challenge: Trophy, collection: Library};
const spaceLoadMessage = error => {
    if (error && error.status === 404) return 'Space not found.';
    return 'Could not load this space.';
};

const normalizeSpace = space => ({
    ...space,
    projectIds: Array.isArray(space.projectIds) ? space.projectIds : [],
    projects: Array.isArray(space.projects) ? space.projects : [],
    followers: Array.isArray(space.followers) ? space.followers : [],
    managers: Array.isArray(space.managers) ? space.managers : [],
    criteria: Array.isArray(space.criteria) ? space.criteria : [],
    judges: Array.isArray(space.judges) ? space.judges : [],
    judgeInvites: Array.isArray(space.judgeInvites) ? space.judgeInvites : [],
    curatorInvites: Array.isArray(space.curatorInvites) ? space.curatorInvites : []
});

const loadMissingProjects = async space => {
    const normalized = normalizeSpace(space);
    const ids = normalized.projectIds;
    const projects = normalized.projects;
    if (!ids.length || projects.length === ids.length) return normalized;
    const byId = new Map(projects.map(project => [project.id, project]));
    const missing = ids.filter(projectId => !byId.has(projectId));
    const loaded = await Promise.all(missing.map(projectId => api.getProject(projectId)
        .then(data => data.project)
        .catch(() => null)));
    loaded.filter(Boolean).forEach(project => byId.set(project.id, project));
    return {...normalized, projects: ids.map(projectId => byId.get(projectId)).filter(Boolean)};
};

const Space = () => {
    const {id} = useParams();
    const {user, login} = useUser();
    const {t: ct} = useCommunityIntl();
    const viewerName = (user && user.username) || '';
    const loadContext = `${id}\u0000${viewerName}`;
    const [space, setSpace] = useState(null);
    const [spaceLoadContext, setSpaceLoadContext] = useState('');
    const [failed, setFailed] = useState('');
    const [failedLoadContext, setFailedLoadContext] = useState('');
    const [error, setError] = useState('');
    const beginLoad = useLatest();

    const commentSource = useMemo(() => ({
        list: () => api.spaceComments(id),
        add: (content, parent) => api.addSpaceComment(id, content, parent),
        remove: commentId => api.deleteSpaceComment(id, commentId),
        react: (commentId, type) => api.reactSpaceComment(id, commentId, type)
    }), [id]);

    const load = useCallback(() => {
        const fresh = beginLoad();
        return api.getSpace(id)
            .then(data => {
                if (!data || !data.space) throw new Error('Space response was incomplete.');
                return loadMissingProjects(data.space);
            })
            .then(fresh(loadedSpace => {
                setSpace(loadedSpace);
                setSpaceLoadContext(loadContext);
                setFailed('');
                setFailedLoadContext('');
                return loadedSpace;
            }))
            .catch(fresh(e => {
                setFailed(spaceLoadMessage(e));
                setFailedLoadContext(loadContext);
                throw e;
            }));
    }, [beginLoad, id, loadContext]);

    useEffect(() => {
        setSpace(null);
        setFailed('');
        setError('');
        load().catch(() => {});
    }, [load, viewerName]);

    const follow = async () => {
        if (!user) {
            login();
            return;
        }
        setError('');
        try {
            if (space.following) await api.unfollowSpace(id);
            else await api.followSpace(id);
            await load();
        } catch (e) {
            setError(e.message || ct('space.followFailed', 'Could not update follow status.'));
        }
    };

    const respondToInvite = async accepted => {
        setError('');
        try {
            await api.respondSpaceInvitation(id, accepted);
            await load();
        } catch (e) {
            setError(e.message || ct('space.respondFailed'));
        }
    };

    const react = async type => {
        if (!user) {
            login();
            return;
        }
        setError('');
        try {
            const data = await api.reactSpace(id, type);
            setSpace(current => ({
                ...current,
                likeCount: data.likeCount,
                brokenHeartCount: data.brokenHeartCount,
                myReaction: data.myReaction
            }));
        } catch (e) {
            setError(e.message || ct('space.rateFailed'));
        }
    };

    if (failed && failedLoadContext === loadContext) {
        return (
            <main className={styles.page}>
                <p className={styles.status}>
                    {failed === 'Space not found.' ? ct('space.notFound') : ct('space.loadFailed')}{' '}
                    {failed !== 'Space not found.' ? (
                        <Button
                            onClick={() => {
                                setFailed('');
                                load().catch(() => {});
                            }}
                        >{ct('common.tryAgain', 'Try again')}</Button>
                    ) : null}
                </p>
            </main>
        );
    }
    if (!space || spaceLoadContext !== loadContext) return <main className={styles.page}><p className={styles.status}>{ct('space.loading', 'Loading space…')}</p></main>;
    if (space.kind === 'challenge') return <Challenge id={id} space={space} user={user} login={login} load={load} />;
    if (space.kind === 'studio') return <Studio id={id} space={space} user={user} login={login} load={load} />;
    if (space.kind === 'collection') return <Collection id={id} space={space} user={user} login={login} load={load} />;

    const Icon = KIND_ICONS[space.kind] || Layers3;
    const curators = space.managers || [];
    const canAdd = space.openSubmissions || space.canManage;

    return (
        <main className={`${styles.page} ${styles.spacePage}`}>
            <Link to="/spaces" className={styles.back}><ArrowLeft size={15} /> {ct('space.allSpaces')}</Link>
            {space.invited ? (
                <section className={styles.inviteBanner}>
                    <div><Users size={20} /><span><strong>{ct('space.inviteLead').replace('{kind}', ct(`space.kind.${space.kind}`))}</strong> {ct('space.inviteBody')}</span></div>
                    <div className={styles.actions}>
                        <Button onClick={() => respondToInvite(true)}>{ct('space.acceptInvite')}</Button>
                        <Button variant="secondary" onClick={() => respondToInvite(false)}>{ct('space.decline')}</Button>
                    </div>
                </section>
            ) : null}
            <header className={styles.spaceHero}>
                <div className={styles.spaceHeroMain}>
                    <span className={styles.spaceType}><Icon size={16} /> {ct(`space.kindLabel.${space.kind}`)}</span>
                    <h1>{space.title}</h1>
                    <p>{space.description || ct('space.noDescription')}</p>
                    <div className={styles.spaceOwner}>
                        <Avatar username={space.owner} size={30} />
                        <span>{ct('space.createdBy')} <Link to={`/users/${space.owner}`}>{space.owner}</Link></span>
                    </div>
                </div>
                <div className={styles.spaceHeroActions}>
                    <Button variant={space.following ? 'secondary' : 'primary'} onClick={follow}>
                        {space.following ? <UserMinus size={16} /> : <UserPlus size={16} />}
                        {space.following ? ct('space.following') : ct('space.follow')}
                    </Button>
                    {space.canManage ? <Link to={`/spaces/${id}/manage`} className={styles.manageLink}><Settings size={16} /> {ct('space.manage')}</Link> : null}
                </div>
            </header>
            {error ? <p className={styles.error}>{error}</p> : null}

            <div className={styles.spaceReactions}>
                <ReactionButtons
                    variant="bordered"
                    counts={{heart: space.likeCount || 0, brokenheart: space.brokenHeartCount || 0}}
                    activeReaction={space.myReaction || ''}
                    onReact={react}
                />
                <a href="#space-comments"><MessageCircle size={16} /><span>{space.commentCount || 0}</span> {ct('space.comments')}</a>
            </div>

            <section className={styles.spaceOverview}>
                <div><strong>{space.projects.length}</strong><span>{space.projects.length === 1 ? ct('space.project') : ct('space.projects')}</span></div>
                <div><strong>{space.followers.length}</strong><span>{space.followers.length === 1 ? ct('space.follower') : ct('space.followers')}</span></div>
                <div><strong>{curators.length + 1}</strong><span>{curators.length ? ct('space.teamMembers') : ct('space.teamMember')}</span></div>
                {space.kind === 'challenge' && space.endsAt ? (
                    <div><CalendarDays size={18} /><span>{ct('space.ends').replace('{date}', new Date(space.endsAt).toLocaleDateString())}</span></div>
                ) : null}
            </section>

            <section className={styles.curatorStrip}>
                <div>
                    <h2>{ct('space.curatedBy')}</h2>
                    <p>{ct('space.curatedByLead')}</p>
                </div>
                <div className={styles.curatorFaces}>
                    {[space.owner, ...curators].map(name => (
                        <Link key={name} to={`/users/${name}`} title={name}><Avatar username={name} size={34} /><span>{name}</span></Link>
                    ))}
                </div>
            </section>

            <section className={styles.spaceProjects}>
                <header>
                    <div><h2>{ct('space.projects')}</h2><p>{space.openSubmissions ? ct('space.openSubmissionsLead') : ct('space.curatorsChoose')}</p></div>
                    {canAdd ? <SpaceProjectPicker space={space} onAdded={load} /> : null}
                </header>
                {space.projects.length ? <div className={styles.projectGrid}>{space.projects.map(project => <ProjectCard key={project.id} project={project} />)}</div> : <div className={styles.emptyProjects}><Library size={28} /><strong>{ct('space.noProjects')}</strong><span>{canAdd ? ct('space.addFirstLead') : ct('space.noCuratedLead')}</span></div>}
            </section>
            <section id="space-comments" className={styles.spaceComments}>
                <header><h2>{ct('space.commentsTitle')}</h2><p>{ct('space.commentsLead')}</p></header>
                <CommentThread source={commentSource} canModerate={Boolean(space.canManage)} reportContext={`${space.kind} ${space.title}`} />
            </section>
        </main>
    );
};

export {normalizeSpace, spaceLoadMessage};
export default Space;
