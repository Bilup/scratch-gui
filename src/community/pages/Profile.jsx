/* eslint-disable max-len */
import React, {useEffect, useState, useCallback, useMemo, useRef} from 'react';
import {useParams, Link} from 'react-router-dom';
import {useIntl} from '../../lib/tw-use-intl.jsx';
import {useCommunityIntl} from '../i18n.jsx';
import {
    UserPlus, UserCheck, Calendar, MessageSquare, MessageSquareOff, ChevronRight, Pencil, Flag, Coins, Star, Ban, VolumeX
} from 'lucide-react';
import api, {projectUrl} from '../api';
import rotur from '../rotur';
import {payUser} from '../../lib/rotur/client.js';
import {isInsufficientFunds, openCreditCheckout, CREDIT_PACKS} from '../credits';
import {useUser} from '../UserContext.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CommentThread from '../components/CommentThread.jsx';
import ReportModal from '../components/ReportModal.jsx';
import Avatar from '../components/Avatar.jsx';
import RichText from '../components/RichText.jsx';
import Button from '../components/ui/Button.jsx';
import Modal from '../components/ui/Modal.jsx';
import ActivityCard from '../components/ActivityCard.jsx';
import FeaturedProject from '../components/FeaturedProject.jsx';
import useLatest from '../use-latest.js';
import setPageMeta from '../page-meta.js';
import safeIconSvg from '../safe-icon.js';
import scrollToAnchorWithRetry from '../scroll-to-anchor.js';
import {timeAgo} from '../format';
import styles from './Profile.module.css';

const FOLLOWER_STRIP_COUNT = 16;
export const profileLoadMessage = error => (
    error && error.status === 404 ? 'This user does not exist on Rotur.' : 'Could not load this profile.'
);

const joinYear = ms => {
    if (!ms) return null;
    try {
        return new Date(ms).getFullYear();
    } catch (e) {
        return null;
    }
};

const scrollToCommentAnchor = id => scrollToAnchorWithRetry(id);

const parseDonationAmount = value => {
    const amount = Math.round(Number(value) * 100) / 100;
    return Number.isFinite(amount) && amount > 0 ? amount : null;
};

const Profile = () => {
    const {name} = useParams();
    const intl = useIntl();
    const t = useCallback((id, defaultMessage, values) =>
        intl.formatMessage({id, defaultMessage}, values), [intl]);
    const {t: ct} = useCommunityIntl();
    const {user, loading: userLoading, login} = useUser();
    const viewerName = (user && user.username) || '';
    const loadContext = `${name}\u0000${viewerName}`;
    const [profile, setProfile] = useState(null);
    const [profileLoadContext, setProfileLoadContext] = useState('');
    const [mwUser, setMwUser] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [error, setError] = useState(null);
    const [errorLoadContext, setErrorLoadContext] = useState('');
    const [actionError, setActionError] = useState(null);
    const [followBusy, setFollowBusy] = useState(false);
    const [commentsBusy, setCommentsBusy] = useState(false);
    const [reporting, setReporting] = useState(false);
    const [adminProjects, setAdminProjects] = useState([]);
    const [donating, setDonating] = useState(false);
    const [reviews, setReviews] = useState(null);
    const [safetyBusy, setSafetyBusy] = useState(false);
    const [blockConfirmOpen, setBlockConfirmOpen] = useState(false);
    const actionContext = `${name}\u0000${viewerName}`;
    const actionContextRef = useRef(actionContext);
    actionContextRef.current = actionContext;
    const actionLocks = useRef(new Set());

    const beginLoad = useLatest();

    const load = useCallback(() => {
        const fresh = beginLoad();
        setError(null);
        setErrorLoadContext('');
        rotur.profile(name, {includePosts: false})
            .then(fresh(data => {
                if (!data || typeof data !== 'object') throw new Error('Profile response was incomplete.');
                setProfile(data);
                setProfileLoadContext(loadContext);
            }))
            .catch(fresh(() => setError(t('mw.community.profile.notFound',
                'This user does not exist on Bilup Accounts.'))));
        api.getUser(name)
            .then(fresh(data => setMwUser(data ? {
                ...data,
                projects: Array.isArray(data.projects) ? data.projects : []
            } : null)))
            .catch(fresh(() => setMwUser(null)));
        api.userReviews(name)
            .then(fresh(data => setReviews(data && Array.isArray(data.reviews) ? data.reviews : [])))
            .catch(fresh(() => setReviews([])));
        rotur.followers(name)
            .then(fresh(data => setFollowers(data && Array.isArray(data.followers) ? data.followers : [])))
            .catch(fresh(() => setFollowers([])));
    }, [loadContext, name, beginLoad]);

    useEffect(() => {
        setProfile(null);
        setMwUser(null);
        setFollowers([]);
        setReviews(null);
        setError(null);
        setActionError(null);
        setFollowBusy(false);
        setCommentsBusy(false);
        setSafetyBusy(false);
        setBlockConfirmOpen(false);
        setReporting(false);
        setDonating(false);
        load();
    }, [name, viewerName, load]);

    useEffect(() => {
        if (!user || !user.isAdmin) {
            setAdminProjects([]);
            return () => {};
        }
        let active = true;
        api.myProjects(name)
            .then(data => active && setAdminProjects(data.projects || []))
            .catch(() => active && setAdminProjects([]));
        return () => {
            active = false;
        };
    }, [name, user]);

    useEffect(() => {
        if (!profile) return;
        setPageMeta({
            title: profile.username || name,
            description: profile.bio,
            image: rotur.avatar(name, 256),
            card: 'summary'
        });
    }, [profile, name]);

    // Scroll to a comment anchor after the comments section renders
    useEffect(() => {
        if (profileLoadContext !== loadContext) return;
        const hash = window.location.hash;
        if (!hash) return;
        return scrollToCommentAnchor(hash.replace('#', ''));
    }, [loadContext, profileLoadContext]);

    const toggleFollow = async () => {
        const context = actionContextRef.current;
        const actionKey = `${context}\u0000follow`;
        if (!user || !profile || actionLocks.current.has(actionKey)) return;
        actionLocks.current.add(actionKey);
        setFollowBusy(true);
        setActionError(null);
        try {
            const me = user.username;
            if (profile.followed) {
                await rotur.unfollow(name);
                if (actionContextRef.current !== context) return;
                setProfile(p => ({...p, followed: false, followers: Math.max(0, (p.followers || 1) - 1)}));
                setFollowers(fs => fs.filter(f => f.toLowerCase() !== me.toLowerCase()));
            } else {
                await rotur.follow(name);
                if (actionContextRef.current !== context) return;
                setProfile(p => ({...p, followed: true, followers: (p.followers || 0) + 1}));
                setFollowers(fs => [me, ...fs.filter(f => f.toLowerCase() !== me.toLowerCase())]);
            }
        } catch (e) {
            if (actionContextRef.current === context) {
                setActionError(e.message || t('mw.community.profile.followFailed', 'Could not update follow.'));
            }
        } finally {
            actionLocks.current.delete(actionKey);
            if (actionContextRef.current === context) setFollowBusy(false);
        }
    };

    const isSelf = Boolean(user && user.username && user.username.toLowerCase() === name.toLowerCase());
    const commentsOff = Boolean(mwUser && mwUser.commentsOff);

    const toggleComments = async () => {
        const context = actionContextRef.current;
        const actionKey = `${context}\u0000comments`;
        if (actionLocks.current.has(actionKey)) return;
        actionLocks.current.add(actionKey);
        setCommentsBusy(true);
        setActionError(null);
        try {
            await api.updateProfile({commentsOff: !commentsOff});
            if (actionContextRef.current === context) load();
        } catch (e) {
            if (actionContextRef.current === context) {
                setActionError(e.message || t('mw.community.profile.commentsFailed', 'Could not update comments.'));
            }
        } finally {
            actionLocks.current.delete(actionKey);
            if (actionContextRef.current === context) setCommentsBusy(false);
        }
    };

    const toggleSafety = async (kind, confirmed = false) => {
        const context = actionContextRef.current;
        if (!mwUser) return;
        const active = kind === 'block' ? mwUser.viewerBlocked : mwUser.viewerMuted;
        if (kind === 'block' && !active && !confirmed) {
            setActionError(null);
            setBlockConfirmOpen(true);
            return;
        }
        const actionKey = `${context}\u0000safety`;
        if (actionLocks.current.has(actionKey)) return;
        actionLocks.current.add(actionKey);
        setSafetyBusy(true);
        setActionError(null);
        try {
            if (kind === 'block') {
                if (active) await api.unblockUser(name);
                else await api.blockUser(name);
                if (actionContextRef.current !== context) return;
                setMwUser(current => ({...current, viewerBlocked: !active}));
                setBlockConfirmOpen(false);
            } else {
                if (active) await api.unmuteUser(name);
                else await api.muteUser(name);
                if (actionContextRef.current !== context) return;
                setMwUser(current => ({...current, viewerMuted: !active}));
            }
        } catch (e) {
            if (actionContextRef.current === context) {
                setActionError(e.message || ct('profile.safetyUpdateFailed'));
            }
        } finally {
            actionLocks.current.delete(actionKey);
            if (actionContextRef.current === context) setSafetyBusy(false);
        }
    };

    const commentSource = useMemo(() => ({
        list: () => api.getProfileComments(name),
        add: (content, parent) => api.addProfileComment(name, content, parent),
        remove: commentId => api.deleteProfileComment(name, commentId),
        react: (commentId, type) => api.reactProfileComment(name, commentId, type)
    }), [name]);

    if (error && errorLoadContext === loadContext && profileLoadContext !== loadContext) {
        return (
            <main className={styles.page}>
                <div className={styles.status}>
                    <p>{error}</p>
                    {error === 'Could not load this profile.' ? <Button onClick={load}>{ct('common.retry')}</Button> : <Link to="/explore">{ct('profile.browseProjects')}</Link>}
                </div>
            </main>
        );
    }
    if (!profile || profileLoadContext !== loadContext) {
        return <main className={styles.page}><p className={styles.status}>{t('mw.community.profile.loading', 'Loading…')}</p></main>;
    }

    const projects = (mwUser && mwUser.projects) || [];
    const featuredProject = mwUser ? projects.find(project => project.id === mwUser.featuredProject) : null;
    const otherProjects = featuredProject ? projects.filter(project => project.id !== featuredProject.id) : projects;
    const unsharedProjects = adminProjects.filter(project => !project.shared);
    const onMistWarp = !mwUser || mwUser.exists !== false;
    const year = joinYear(profile.created);
    const presence = profile.status || null;
    const presenceState = presence && typeof presence.presence === 'string' ?
        presence.presence.toLowerCase() : 'offline';
    const statusDotClass = presenceState === 'online' ? styles.onlineDot :
        presenceState === 'idle' ? styles.idleDot :
            presenceState === 'dnd' ? styles.dndDot : styles.offlineDot;
    const rawStatusText = presence && typeof presence.status === 'string' ? presence.status : '';
    const hasStatusText = rawStatusText.replace(/[\s\u2800\u3164\uFFA0]/g, '').length > 0;
    const statusText = hasStatusText ? rawStatusText :
        `${presenceState.charAt(0).toUpperCase()}${presenceState.slice(1)}`;
    const activities = presence && Array.isArray(presence.activities) ? presence.activities : [];
    const badges = Array.isArray(profile.badges) ? profile.badges.slice(0, 6) : [];

    return (
        <main className={styles.page}>
            {blockConfirmOpen ? (
                <Modal
                    icon={Ban}
                    title={`${ct('profile.blockTitle')} ${profile.username || name}?`}
                    onClose={() => setBlockConfirmOpen(false)}
                    dismissDisabled={safetyBusy}
                    actions={(
                        <React.Fragment>
                            <Button
                                variant="danger"
                                className={styles.blockedButton}
                                busy={safetyBusy}
                                busyLabel={ct('profile.blocking')}
                                onClick={() => toggleSafety('block', true)}
                            >{ct('profile.blockUser')}</Button>
                            <Button
                                variant="secondary"
                                className={styles.iconButton}
                                disabled={safetyBusy}
                                onClick={() => setBlockConfirmOpen(false)}
                            >{ct('common.cancel')}</Button>
                        </React.Fragment>
                    )}
                >
                    <p className={styles.modalText}>
                        {ct('profile.blockModalText')}
                    </p>
                    {actionError ? <p className={styles.actionError}>{actionError}</p> : null}
                </Modal>
            ) : null}
            {reporting ? (
                <ReportModal
                    type="user"
                    target={name}
                    onClose={() => setReporting(false)}
                />
            ) : null}
            {donating ? (
                <DonateModal
                    recipient={profile.username || name}
                    onClose={() => setDonating(false)}
                />
            ) : null}
            <div className={styles.layout}>
                <div className={styles.mainColumn}>
                    {actionError ? <p className={styles.status}>{actionError}</p> : null}

                    {!onMistWarp ? (
                        <div className={styles.notOnMistwarp}>
                            {t('mw.community.profile.notOnBilup',
                                'Not on Bilup yet. This is {name}\'s Bilup Accounts profile.', {
                                    name: profile.username || name
                                })}
                        </div>
                    ) : null}

                    {featuredProject ? (
                        <section className={styles.section}>
                            <FeaturedProject project={featuredProject} />
                        </section>
                    ) : null}

                    {otherProjects.length ? (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('mw.community.profile.projects', 'Projects')}</h2>
                            <div className={styles.grid}>
                                {otherProjects.map(project => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {user && user.isAdmin && unsharedProjects.length ? (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('mw.community.profile.unsharedAdmin', 'Unshared projects (admin only)')}</h2>
                            <div className={styles.grid}>
                                {unsharedProjects.map(project => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {onMistWarp ? (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{ct('profile.recentReviews')}</h2>
                            {reviews === null ? <p className={styles.sectionEmpty}>{ct('profile.loadingReviews')}</p> : null}
                            {reviews && !reviews.length ? <p className={styles.sectionEmpty}>{ct('profile.noReviews')}</p> : null}
                            {reviews && reviews.length ? (
                                <div className={styles.reviewGrid}>
                                    {reviews.slice(0, 6).map(review => (
                                        <Link
                                            key={review._id}
                                            to={projectUrl(review.projectId)}
                                            className={styles.reviewCard}
                                        >
                                            <div className={styles.reviewHead}>
                                                <strong>{review.projectTitle}</strong>
                                                <span>{timeAgo(review.edited || review.created)}</span>
                                            </div>
                                            <div
                                                className={styles.reviewStars}
                                                aria-label={`${review.rating} ${ct('profile.outOf5Stars')}`}
                                            >
                                                {[1, 2, 3, 4, 5].map(value => (
                                                    <Star
                                                        key={value}
                                                        size={14}
                                                        fill={value <= review.rating ? 'currentColor' : 'none'}
                                                    />
                                                ))}
                                            </div>
                                            {review.message ? (
                                                <p><RichText text={review.message} /></p>
                                            ) : (
                                                <p className={styles.reviewNoText}>{ct('profile.noWrittenReview')}</p>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            ) : null}
                        </section>
                    ) : null}

                    <section className={styles.section}>
                        <div className={styles.sectionHead}>
                            <h2 className={styles.sectionTitle}>
                                {t('mw.community.profile.followersHeading', 'Followers - {count}', {
                                    count: profile.followers || followers.length
                                })}
                            </h2>
                            {followers.length ? (
                                <Link
                                    to={`/users/${name}/followers`}
                                    className={styles.seeAll}
                                >
                                    {t('mw.community.profile.seeAll', 'See all')}
                                    <ChevronRight size={14} />
                                </Link>
                            ) : null}
                        </div>
                        {followers.length ? (
                            <div className={styles.followersRow}>
                                {followers.slice(0, FOLLOWER_STRIP_COUNT).map(follower => (
                                    <Link
                                        key={follower}
                                        to={`/users/${follower}`}
                                        className={styles.followerChip}
                                    >
                                        <Avatar
                                            username={follower}
                                            size={56}
                                        />
                                        <span>{follower}</span>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className={styles.sectionEmpty}>{t('mw.community.profile.noFollowers', 'No followers yet.')}</p>
                        )}
                    </section>

                    {onMistWarp ? (
                        <section className={styles.section}>
                            <div className={styles.sectionHead}>
                                <h2 className={styles.sectionTitle}>{t('mw.community.profile.comments', 'Comments')}</h2>
                                {isSelf ? (
                                    <Button
                                        variant="secondary"
                                        className={styles.commentsToggle}
                                        onClick={toggleComments}
                                        busy={commentsBusy}
                                        busyLabel={commentsOff ? ct('profile.turningOn') : ct('profile.turningOff')}
                                    >
                                        {commentsOff ? <MessageSquare size={14} /> : <MessageSquareOff size={14} />}
                                        {commentsOff ?
                                            t('mw.community.profile.turnOnComments', 'Turn on comments') :
                                            t('mw.community.profile.turnOffComments', 'Turn off comments')}
                                    </Button>
                                ) : null}
                            </div>
                            <div className={styles.feed}>
                                <CommentThread
                                    source={commentSource}
                                    canModerate={isSelf}
                                    disabled={commentsOff}
                                    reportContext={`profile ${name}`}
                                />
                            </div>
                        </section>
                    ) : null}
                </div>
                <aside className={styles.profileRail}>
                    <section className={styles.profileCard}>
                        {profile.profile_video ? (
                            <video
                                className={styles.profileVideo}
                                src={profile.profile_video}
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        ) : null}
                        <div
                            className={styles.banner}
                            style={{backgroundImage: `url(${profile.banner || rotur.banner(name)})`}}
                        />
                        <div className={styles.profileBody}>
                            <Avatar
                                username={name}
                                src={profile.pfp}
                                size={88}
                                className={styles.avatar}
                            />
                            <div className={styles.nameRow}>
                                <h1>{profile.username || name}</h1>
                                {profile.pronouns ? <span className={styles.pronouns}>{profile.pronouns}</span> : null}
                            </div>
                            {presence ? (
                                <span className={styles.userStatus}>
                                    <span className={statusDotClass} />
                                    <RichText text={statusText} />
                                </span>
                            ) : null}
                            {badges.length ? (
                                <div className={styles.badges}>
                                    {badges.map((badge, index) => {
                                        const badgeData = typeof badge === 'string' ? {name: badge} : badge;
                                        if (!badgeData.icon) return null;
                                        return (
                                            <span
                                                key={`${badgeData.name}-${index}`}
                                                className={styles.badge}
                                                title={badgeData.description || badgeData.name}
                                                aria-label={badgeData.name}
                                                // eslint-disable-next-line react/no-danger
                                                dangerouslySetInnerHTML={{
                                                    __html: safeIconSvg(badgeData.icon, {size: 2, viewSize: 20})
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            ) : null}
                            <div className={styles.profileStats}>
                                <Link className={styles.profileStatLink} to={`/users/${name}/followers`}><strong>{profile.followers || 0}</strong><span>{t('mw.community.profile.followers', 'followers')}</span></Link>
                                <Link className={styles.profileStatLink} to={`/users/${name}/following`}><strong>{profile.following || 0}</strong><span>{t('mw.community.profile.followingCount', 'following')}</span></Link>
                                <div><strong>{profile.currency || 0}</strong><span>{t('mw.community.profile.credits', 'credits')}</span></div>
                            </div>
                            <div className={styles.actions}>
                                {user && !isSelf ? (
                                    <React.Fragment>
                                        <div className={styles.primaryActions}>
                                            <Button
                                                variant="primary"
                                                className={profile.followed ? styles.followingButton : styles.followButton}
                                                busy={followBusy}
                                                busyLabel={profile.followed ? ct('profile.unfollowing') : ct('profile.following')}
                                                onClick={toggleFollow}
                                            >
                                                {profile.followed ? <UserCheck size={16} /> : <UserPlus size={16} />}
                                                {profile.followed ?
                                                    t('mw.community.profile.following', 'Following') :
                                                    t('mw.community.profile.follow', 'Follow')}
                                            </Button>
                                            <Button
                                                variant="primary"
                                                className={styles.followButton}
                                                title={t('mw.community.profile.sendCreditsTo', 'Send credits to {name}', {
                                                    name: profile.username || name
                                                })}
                                                onClick={() => setDonating(true)}
                                            >
                                                <Coins size={15} />
                                                {t('mw.community.profile.donate', 'Donate')}
                                            </Button>
                                        </div>
                                        <div className={styles.utilityActions}>
                                            {mwUser && mwUser.exists !== false ? (
                                                <Button
                                                    variant="secondary"
                                                    className={styles.iconButton}
                                                    disabled={safetyBusy}
                                                    onClick={() => toggleSafety('mute')}
                                                >
                                                    <VolumeX size={15} />
                                                    {mwUser.viewerMuted ? ct('profile.unmute') : ct('profile.mute')}
                                                </Button>
                                            ) : null}
                                            {mwUser && mwUser.exists !== false ? (
                                                <Button
                                                    variant={mwUser.viewerBlocked ? 'secondary' : 'danger'}
                                                    className={mwUser.viewerBlocked ? styles.blockedButton : styles.iconButton}
                                                    disabled={safetyBusy}
                                                    onClick={() => toggleSafety('block')}
                                                >
                                                    <Ban size={15} />
                                                    {mwUser.viewerBlocked ? ct('profile.unblock') : ct('profile.block')}
                                                </Button>
                                            ) : null}
                                            <Button
                                                variant="secondary"
                                                className={styles.iconButton}
                                                onClick={() => setReporting(true)}
                                            >
                                                <Flag size={15} />
                                                {t('mw.community.profile.report', 'Report')}
                                            </Button>
                                        </div>
                                    </React.Fragment>
                                ) : !user && !userLoading ? (
                                    <Button variant="primary" className={styles.followButton} onClick={login}>
                                        <UserPlus size={16} />
                                        {t('mw.community.profile.signInToFollow', 'Sign in to follow')}
                                    </Button>
                                ) : null}
                                {isSelf ? (
                                    <a
                                        className={styles.followButton}
                                        href="https://accounts.bilup.org/me"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Pencil size={15} />
                                        {t('mw.community.profile.editProfile', 'Edit profile')}
                                    </a>
                                ) : null}
                            </div>
                            <div className={styles.railSection}>
                                <h2>{t('mw.community.profile.aboutMe', 'About me')}</h2>
                                <div className={styles.bio}>
                                    {profile.bio ? <RichText text={profile.bio} /> : t('mw.community.profile.noBio', 'No bio yet.')}
                                </div>
                            </div>
                            <div className={styles.accountMeta}>
                                {year ? (
                                    <span><Calendar size={14} />{t('mw.community.profile.joined', 'Joined {year}', {year})}</span>
                                ) : null}
                                {typeof profile.index === 'number' ? <span>{t('mw.community.profile.accountNumber', 'Account #{index}', {index: profile.index})}</span> : null}
                                <a
                                    className={styles.bilupAccountsLink}
                                    href={`https://accounts.bilup.org/profile/${encodeURIComponent(profile.username || name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t('mw.community.profile.bilupAccountsProfile', '跳转到Bilup Accounts主页')}
                                </a>
                            </div>
                            {activities.length ? (
                                <div className={styles.railSection}>
                                    <h2>{t('mw.community.profile.activityTitle', 'Activity')}</h2>
                                    <div className={styles.activityList}>
                                        {activities.slice(0, 3).map((activity, index) => (
                                            <ActivityCard key={activity.id || index} activity={activity} />
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </section>
                </aside>
            </div>
        </main>
    );
};

export const DonateModal = ({recipient, onClose}) => {
    const intl = useIntl();
    const {t: ct} = useCommunityIntl();
    const [amount, setAmount] = useState('');
    const [busy, setBusy] = useState(false);
    const [status, setStatus] = useState(null);
    const [sent, setSent] = useState(0);
    const [insufficient, setInsufficient] = useState(false);
    const actionLocks = useRef(new Set());
    const currentRecipient = useRef(recipient);
    currentRecipient.current = recipient;
    useEffect(() => {
        setAmount('');
        setBusy(false);
        setStatus(null);
        setSent(0);
        setInsufficient(false);
    }, [recipient]);
    const close = () => {
        if (!busy) onClose();
    };

    const send = async () => {
        const value = parseDonationAmount(amount);
        if (value === null) {
            setStatus(intl.formatMessage({
                id: 'mw.community.profile.enterAmount',
                defaultMessage: 'Enter an amount greater than 0.'
            }));
            return;
        }
        const actionRecipient = recipient;
        const actionKey = `${recipient}\u0000payment`;
        if (actionLocks.current.has(actionKey)) return;
        actionLocks.current.add(actionKey);
        setBusy(true);
        setStatus(null);
        setInsufficient(false);
        try {
            await payUser(recipient, value, intl.formatMessage({
                id: 'mw.community.profile.donationMemo',
                defaultMessage: 'Bilup donation to {recipient}'
            }, {recipient}));
            if (currentRecipient.current === actionRecipient) setSent(value);
        } catch (e) {
            if (currentRecipient.current === actionRecipient) {
                if (isInsufficientFunds(e)) {
                    setInsufficient(true);
                } else {
                    setStatus(e.needsReauth ?
                        intl.formatMessage({
                            id: 'mw.community.profile.reauthNeeded',
                            defaultMessage: 'Your current login cannot send credits. Log out and back in, then try again.'
                        }) :
                        (e.message || intl.formatMessage({
                            id: 'mw.community.profile.sendFailed',
                            defaultMessage: 'Could not send credits.'
                        })));
                }
            }
        } finally {
            actionLocks.current.delete(actionKey);
            if (currentRecipient.current === actionRecipient) setBusy(false);
        }
    };

    const buyCredits = async () => {
        const actionRecipient = recipient;
        const actionKey = `${recipient}\u0000payment`;
        if (actionLocks.current.has(actionKey)) return;
        actionLocks.current.add(actionKey);
        setBusy(true);
        setStatus(null);
        try {
            await openCreditCheckout(CREDIT_PACKS[1]);
        } catch (e) {
            if (currentRecipient.current === actionRecipient) {
                setStatus(e.needsReauth ?
                    ct('profile.reauthBuyCredits') :
                    (e.message || ct('profile.checkoutFailed')));
            }
        } finally {
            actionLocks.current.delete(actionKey);
            if (currentRecipient.current === actionRecipient) setBusy(false);
        }
    };

    const submit = event => {
        event.preventDefault();
        return insufficient ? buyCredits() : send();
    };

    return (
        <Modal
            className={styles.donateModal}
            dismissDisabled={busy}
            icon={Coins}
            onClose={close}
            title={`${ct('profile.donateTo')} ${recipient}`}
        >
            {sent ? (
                <div className={styles.donateDone}>
                    <span className={styles.donateDoneIcon}><Coins size={28} /></span>
                    <p>{intl.formatMessage({
                        id: 'mw.community.profile.sentCredits',
                        defaultMessage: 'Sent {amount} credits to {recipient}.'
                    }, {amount: sent, recipient})}</p>
                    <Button
                        variant="primary"
                        className={styles.donateSend}
                        onClick={close}
                    >{intl.formatMessage({
                        id: 'mw.community.profile.done',
                        defaultMessage: 'Done'
                    })}</Button>
                </div>
            ) : (
                <form className={styles.donateBody} onSubmit={submit}>
                    <p className={styles.donateText}>
                        {intl.formatMessage({
                            id: 'mw.community.profile.donateText',
                            defaultMessage: 'Send Bilup Accounts credits straight to {recipient}. This transfers directly from your account.'
                        }, {recipient})}
                    </p>
                    <input
                        className={styles.donateInput}
                        type="number"
                        min="0.01"
                        step="0.01"
                        placeholder={intl.formatMessage({
                            id: 'mw.community.profile.amountPlaceholder',
                            defaultMessage: 'Amount in credits'
                        })}
                        value={amount}
                        disabled={busy}
                        required
                        onChange={event => setAmount(event.target.value)}
                    />
                    {status ? <p className={styles.donateStatus}>{status}</p> : null}
                    {insufficient ? (
                        <p className={styles.donateStatus}>
                            {intl.formatMessage({
                                id: 'mw.community.profile.insufficient',
                                defaultMessage: 'Not enough credits in your balance. Top up through Stripe, then send again.'
                            })}
                        </p>
                    ) : null}
                    <Button
                        variant="primary"
                        className={styles.donateSend}
                        type="submit"
                        busy={busy}
                        busyLabel={insufficient ? ct('profile.opening') : ct('profile.sending')}
                    >
                        <Coins size={16} />
                        {insufficient ?
                            intl.formatMessage({id: 'mw.community.profile.buyCredits', defaultMessage: 'Buy credits'}) :
                            intl.formatMessage({id: 'mw.community.profile.sendCredits', defaultMessage: 'Send credits'})}
                    </Button>
                </form>
            )}
        </Modal>
    );
};

export {scrollToCommentAnchor, parseDonationAmount};
export default Profile;
