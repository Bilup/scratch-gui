/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Bell, Bug, Clock, GitFork, Github, Globe, Heart, Lightbulb, Megaphone, MessageCircle, Sparkles, Star, Users} from 'lucide-react';
import api, {editorUrl, projectUrl} from '../api';
import rotur from '../rotur';
import {fetchNotifications} from '../../lib/rotur/client.js';
import {useUser} from '../UserContext.jsx';
import {timeAgo} from '../format';
import Avatar from '../components/Avatar.jsx';
import Button from '../components/ui/Button.jsx';
import NewsItem from '../components/NewsItem.jsx';
import logo from '../assets/bilup-icon.svg';
import styles from './Home.module.css';

const ACTIVITY_ICONS = {love: Heart, favorite: Star, share: Globe, remix: GitFork, review: Star};
const ROADMAP_STATUS_KEYS = {open: 'roadmap.statusOpen', planned: 'roadmap.statusPlanned', building: 'roadmap.statusBuilding', shipped: 'roadmap.statusShipped', declined: 'roadmap.statusDeclined'};

const describeActivity = (item, t) => {
    switch (item.type) {
    case 'love': return <>{t('feed.loved')} <strong>{item.projectTitle}</strong></>;
    case 'favorite': return <>{t('feed.favorited')} <strong>{item.projectTitle}</strong></>;
    case 'share': return <>{t('feed.shared')} <strong>{item.projectTitle}</strong></>;
    case 'remix': return <>{t('feed.remixed')} <strong>{item.parentTitle || item.projectTitle}</strong></>;
    case 'review': return <>{t('feed.rated')} <strong>{item.projectTitle}</strong> {item.rating} {t('feed.outOf5')}</>;
    default: return <>{t('feed.postedUpdate')}</>;
    }
};

const SectionHead = ({icon: Icon, title, link, linkLabel}) => {
    const {t} = useCommunityIntl();
    return (
        <div className={styles.sectionHead}>
            <h2><Icon size={19} />{title}</h2>
            {link ? <Link to={link}>{linkLabel || t('common.seeAll')}</Link> : null}
        </div>
    );
};

const PanelLoading = () => <div className={styles.feedScroll}>{[0, 1].map(i => <div key={i} className={styles.skeleton} />)}</div>;

const NewsSection = ({viewerName}) => {
    const [items, setItems] = useState(null);
    const [failed, setFailed] = useState(false);
    const [attempt, setAttempt] = useState(0);
    const {t} = useCommunityIntl();
    const load = () => setAttempt(value => value + 1);
    useEffect(() => {
        let active = true;
        setItems(null);
        setFailed(false);
        api.news()
            .then(data => active && setItems(data.news || []))
            .catch(() => active && setFailed(true));
        return () => {
            active = false;
        };
    }, [attempt, viewerName]);
    return (
        <section className={styles.feedBox}>
            <SectionHead icon={Megaphone} title={t('news.title')} link="/news" linkLabel={t('news.allUpdates')} />
            {!items && !failed ? <PanelLoading /> : null}
            {failed ? <div className={styles.empty}>{t('news.failed')} <Button onClick={load}>{t('common.retry')}</Button></div> : null}
            {items && !items.length ? <div className={styles.empty}>{t('news.empty')}</div> : null}
            {items && items.length ? <div className={`${styles.newsList} ${styles.feedScroll}`}>{items.map(item => <NewsItem key={item.id} item={item} onChanged={load} />)}</div> : null}
        </section>
    );
};

const FriendsSection = ({user, login}) => {
    const [items, setItems] = useState(null);
    const [failed, setFailed] = useState(false);
    const [attempt, setAttempt] = useState(0);
    const {t} = useCommunityIntl();
    useEffect(() => {
        let active = true;
        setFailed(false);
        if (!user) {
            setItems([]);
            return () => {};
        }
        setItems(null);
        rotur.following(user.username).then(data => {
            const following = data.following || [];
            return following.length ? api.activity(following) : {activity: []};
        }).then(data => active && setItems(data.activity || [])).catch(() => active && setFailed(true));
        return () => {
            active = false;
        };
    }, [user, attempt]);
    return (
        <section className={styles.feedBox}>
            <SectionHead icon={Users} title={t('friends.title')} />
            {!user ? <div className={styles.empty}>{t('friends.signIn')} <button type="button" onClick={login}>{t('common.signInAccounts')}</button></div> : null}
            {user && !items && !failed ? <PanelLoading /> : null}
            {failed ? <div className={styles.empty}>{t('friends.failed')} <Button onClick={() => setAttempt(value => value + 1)}>{t('common.retry')}</Button></div> : null}
            {items && !items.length && user ? <div className={styles.empty}>{t('friends.empty')}</div> : null}
            {items && items.length ? (
                <div className={`${styles.activityList} ${styles.feedScroll}`}>
                    {items.slice(0, 4).map((item, index) => {
                        const Icon = ACTIVITY_ICONS[item.type] || Heart;
                        return (
                            <div key={`${item.actor}-${item.created}-${index}`} className={styles.activityItem}>
                                <Link to={`/users/${item.actor}`}><Avatar username={item.actor} size={34} /></Link>
                                <span className={styles.activityIcon}><Icon size={14} /></span>
                                <span className={styles.activityText}>
                                    <Link to={`/users/${item.actor}`} className={styles.activityActor}>{item.actor}</Link>{' '}
                                    {item.projectId ? <Link to={projectUrl(item.projectId)}>{describeActivity(item, t)}</Link> : describeActivity(item, t)}
                                </span>
                                <span className={styles.activityTime}>{timeAgo(item.created)}</span>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </section>
    );
};

const RoadmapSection = ({viewerName}) => {
    const [ideas, setIdeas] = useState(null);
    const [failed, setFailed] = useState(false);
    const [attempt, setAttempt] = useState(0);
    const {t} = useCommunityIntl();
    useEffect(() => {
        let active = true;
        setIdeas(null);
        setFailed(false);
        api.roadmap()
            .then(data => active && setIdeas(data.ideas || []))
            .catch(() => active && setFailed(true));
        return () => {
            active = false;
        };
    }, [attempt, viewerName]);
    return (
        <section className={styles.feedBox}>
            <SectionHead icon={Lightbulb} title={t('roadmap.title')} link="/roadmap" linkLabel={t('common.suggestVote')} />
            {!ideas && !failed ? <PanelLoading /> : null}
            {failed ? <div className={styles.empty}>{t('roadmap.failed')} <Button onClick={() => setAttempt(value => value + 1)}>{t('common.retry')}</Button></div> : null}
            {ideas && !ideas.length ? <div className={styles.empty}>{t('roadmap.empty')} <Link to="/roadmap">{t('roadmap.addFirst')}</Link></div> : null}
            {ideas && ideas.length ? (
                <div className={`${styles.roadmapList} ${styles.feedScroll}`}>
                    {ideas.slice(0, 4).map(idea => (
                        <Link key={idea._id} to={`/roadmap#idea-${idea._id}`} className={styles.roadmapItem}>
                            <ReactionButtons
                                variant="vertical"
                                heartKey="like"
                                downKey="dislike"
                                activeReaction={idea.myVote || ''}
                                showCounts={false}
                                interactive={false}
                                className={styles.roadmapVotes}
                                between={<strong>{idea.score || 0}</strong>}
                            />
                            <div className={styles.roadmapBody}>
                                <div className={styles.roadmapLabels}>
                                    {idea.kind === 'bug' ? <span><Bug size={10} /> {t('roadmap.bug')}</span> : null}
                                    <span>{idea.category}</span>
                                    <span className={styles[`roadmapStatus${idea.status}`]}>{ROADMAP_STATUS_KEYS[idea.status] ? t(ROADMAP_STATUS_KEYS[idea.status]) : idea.status}</span>
                                    {idea.interested ? <span className={styles.roadmapOfficial}><Sparkles size={10} /> {t('roadmap.bilupInterested')}</span> : null}
                                </div>
                                <h3>{idea.title}</h3>
                                <p>{idea.description}</p>
                                <div className={styles.roadmapMeta}>
                                    <span><Avatar username={idea.author} size={22} />{idea.author}</span>
                                    <span>{timeAgo(idea.created)}</span>
                                    <span className={styles.roadmapComments}><MessageCircle size={13} />{idea.commentCount || 0}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : null}
        </section>
    );
};

const notificationText = (item, t) => {
    if (item.type === 'project_review') return `${t('notify.rated')} ${item.projectTitle || t('notify.yourProject')} ${item.rating} ${t('notify.outOf5')}`;
    if (item.type === 'love') return `${t('notify.loved')} ${item.projectTitle || t('notify.yourProject')}`;
    if (item.type === 'comment') return `${t('notify.commented')} ${item.projectTitle || t('notify.yourProject')}`;
    if (item.type === 'roadmap_comment') return `${t('notify.commented')} ${item.roadmapTitle || t('notify.yourSuggestion')}`;
    if (item.type === 'follow') return t('notify.followed');
    if (item.type === 'remix') return `${t('notify.remixed')} ${item.projectTitle || t('notify.yourProject')}`;
    return item.body || t('notify.sentNotification');
};

const notificationLink = item => {
    if (item.roadmapId) return `/roadmap#idea-${item.roadmapId}`;
    if (item.projectId) return projectUrl(item.projectId);
    if (item.actor) return `/users/${item.actor}`;
    return '/notifications';
};

const NotificationsSection = ({user, login}) => {
    const [items, setItems] = useState(null);
    const [failed, setFailed] = useState(false);
    const [attempt, setAttempt] = useState(0);
    const {t} = useCommunityIntl();
    useEffect(() => {
        let active = true;
        setFailed(false);
        if (!user) {
            setItems([]);
            return () => {};
        }
        setItems(null);
        fetchNotifications()
            .then(data => active && setItems(data || []))
            .catch(() => active && setFailed(true));
        return () => {
            active = false;
        };
    }, [user, attempt]);
    return (
        <section className={styles.feedBox}>
            <SectionHead icon={Bell} title={t('notifications.title')} link={user ? '/notifications' : null} linkLabel={t('common.seeAll')} />
            {!user ? <div className={styles.empty}>{t('notifications.signIn')} <button type="button" onClick={login}>{t('common.signInAccounts')}</button></div> : null}
            {user && !items && !failed ? <PanelLoading /> : null}
            {failed ? <div className={styles.empty}>{t('notifications.failed')} <Button onClick={() => setAttempt(value => value + 1)}>{t('common.retry')}</Button></div> : null}
            {items && !items.length && user ? <div className={styles.empty}>{t('notifications.empty')}</div> : null}
            {items && items.length ? (
                <div className={`${styles.activityList} ${styles.feedScroll}`}>
                    {items.slice(0, 4).map((item, index) => {
                        const actor = item.actor || item.title || 'Bilup';
                        const target = notificationLink(item);
                        return (
                            <div key={item.id || index} className={styles.activityItem}>
                                <Link to={item.actor ? `/users/${item.actor}` : target}>
                                    {item.actor ? <Avatar username={item.actor} size={34} /> : <span className={styles.notificationAvatar}><Bell size={15} /></span>}
                                </Link>
                                <span className={styles.activityIcon}><Bell size={14} /></span>
                                <span className={styles.activityText}>
                                    {item.actor ? <Link to={`/users/${item.actor}`} className={styles.activityActor}>{actor}</Link> : <strong className={styles.activityActor}>{actor}</strong>}{' '}
                                    <Link to={target}>{notificationText(item, t)}</Link>
                                </span>
                                <span className={styles.activityTime}>{timeAgo(item.created || item.timestamp)}</span>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </section>
    );
};

const Home = () => {
    const {user, login} = useUser();
    const viewerName = (user && user.username) || '';
    const {t} = useCommunityIntl();
    const [projects, setProjects] = useState({trending: null, recent: null});
    const [projectAttempt, setProjectAttempt] = useState(0);
    const retryProjects = () => {
        setProjects({trending: null, recent: null});
        setProjectAttempt(value => value + 1);
    };
    useEffect(() => {
        track('home_view');
    }, []);
    useEffect(() => {
        let active = true;
        setProjects({trending: null, recent: null});
        Promise.all([
            api.explore({sort: 'trending', limit: 8}).catch(() => null),
            api.explore({sort: 'recent', limit: 8}).catch(() => null)
        ]).then(([trending, recent]) => {
            if (!active) return;
            setProjects({trending: trending ? trending.projects || [] : false, recent: recent ? recent.projects || [] : false});
        });
        return () => {
            active = false;
        };
    }, [projectAttempt, viewerName]);
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <h1>{t('home.title')}</h1>
                    <p>{t('home.lead')}</p>
                    <div className={styles.heroActions}>
                        <a className={styles.primaryButton} href={editorUrl()}>{t('home.start')}</a>
                        {user ? <Link className={styles.secondaryButton} to="/explore">{t('home.explore')}</Link> : <button type="button" className={styles.secondaryButton} onClick={login}>{t('home.signin')}</button>}
                        <a className={styles.secondaryButton} href="https://github.com/bilup" target="_blank" rel="noreferrer"><Github size={16} />{t('home.github')}</a>
                    </div>
                </div>
                <div className={styles.heroArt}><img src={logo} alt="" className={styles.heroLogo} /></div>
            </section>
            <div className={styles.dashboardGrid}>
                <NewsSection viewerName={viewerName} />
                <FriendsSection user={user} login={login} />
                <NotificationsSection user={user} login={login} />
                <RoadmapSection viewerName={viewerName} />
            </div>
            <ProjectRow
                title={t('home.trending')}
                icon={Sparkles}
                projects={projects.trending}
                link="/explore?sort=trending"
                onRetry={retryProjects}
            />
            <ChallengeCalendar className={styles.homeCalendar} />
            <ProjectRow
                title={t('home.freshlyShared')}
                icon={Clock}
                projects={projects.recent}
                link="/explore?sort=recent"
                onRetry={retryProjects}
            />
        </main>
    );
};

const ProjectRow = ({title, icon: Icon, projects, link, onRetry}) => {
    const {t} = useCommunityIntl();
    return (
        <section className={styles.projectSection}>
            <SectionHead icon={Icon} title={title} link={link} />
            {projects === null ? <div className={styles.projectGrid}>{[0, 1, 2, 3].map(i => <div key={i} className={styles.projectSkeleton} />)}</div> : null}
            {projects === false ? <div className={styles.empty}>{t('home.failedLoadProjects')} <Button onClick={onRetry}>{t('common.retry')}</Button></div> : null}
            {Array.isArray(projects) && !projects.length ? <div className={styles.empty}>{t('home.noSharedProjects')}</div> : null}
            {Array.isArray(projects) && projects.length ? <div className={styles.projectGrid}>{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div> : null}
        </section>
    );
};

export {FriendsSection, RoadmapSection, NotificationsSection};
export default Home;
