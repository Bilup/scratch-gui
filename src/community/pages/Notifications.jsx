import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import {useIntl} from '../../lib/tw-use-intl.jsx';
import {
    AppWindow, AtSign, Coins, Flag, Gavel, GitFork, Heart, Megaphone,
    MessageCircle, Reply, ShieldAlert, UserPlus, GitPullRequest, Layers3, Lightbulb, Star, Users
} from 'lucide-react';
import {projectUrl} from '../api';
import Avatar from '../components/Avatar.jsx';
import Button from '../components/ui/Button.jsx';
import RichText from '../components/RichText.jsx';
import {useUser} from '../UserContext.jsx';
import {fetchNotifications, markNotificationsRead, subscribeNotifications} from '../../lib/rotur/client.js';
import {timeAgo} from '../format';
import styles from './Notifications.module.css';
import {getNotificationPreferences, categoryForNotification} from '../notification-preferences';
import {useCommunityIntl} from '../i18n.jsx';

const ICONS = {
    love: Heart,
    comment: MessageCircle,
    profile_comment: MessageCircle,
    reply: Reply,
    remix: GitFork,
    follow: UserPlus,
    mention: AtSign,
    like: Heart,
    repost: GitFork,
    group_invite: UserPlus,
    group_request_accepted: UserPlus,
    group_request_declined: UserPlus,
    group_kicked: ShieldAlert,
    group_banned: ShieldAlert,
    group_ownership_transferred: ShieldAlert,
    cosmetic_gift: Coins,
    item_received: Coins,
    item_sold: Coins,
    item_purchased: Coins,
    purchase: Coins,
    donation: Coins,
    standing: ShieldAlert,
    moderation: ShieldAlert,
    news: Megaphone,
    report_update: Flag,
    contribution: GitPullRequest,
    space_project: Layers3,
    space_comment: MessageCircle,
    space_curator_invite: UserPlus,
    space_curator_accepted: Users,
    space_curator_declined: Users,
    space_curator_removed: ShieldAlert,
    challenge_judge_invite: Gavel,
    challenge_judge_accepted: Gavel,
    challenge_join: UserPlus,
    project_feedback: Lightbulb,
    project_review: Star,
    roadmap_comment: Lightbulb,
    notification: AppWindow
};

const SYSTEM_TYPES = ['standing', 'moderation', 'news', 'report_update'];

const GROUP_TYPES = [
    'group_invite',
    'group_request_accepted',
    'group_request_declined',
    'group_kicked',
    'group_banned',
    'group_ownership_transferred'
];

// Rotur / usernames follow this shape; titles that don't match are app
// messages rather than account names.
const USERNAME_RE = /^[A-Za-z0-9][A-Za-z0-9_-]{0,19}$/;

const commentAnchor = n => (n.commentId ? `#comment-id-${n.commentId}` : '');

const groupUrl = n => (n.group_tag ? `https://accounts.bilup.org/groups/${encodeURIComponent(n.group_tag)}` : null);

const REPORT_OUTCOMES = {
    dismiss: 'mw.community.notifications.outcome.dismiss',
    warn_user: 'mw.community.notifications.outcome.warnUser',
    ban_user: 'mw.community.notifications.outcome.banUser',
    unshare_project: 'mw.community.notifications.outcome.unshareProject'
};

const escapeRegex = s => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const linkify = text => <RichText text={text} />;

// Generic notifications carry the sender in `title` (MistWarp posts
// title = actor) and the full sentence in `body`; drop the duplicated
// prefix so "shima" + "shima commented on your project" reads cleanly.
const stripSender = (sender, text) => {
    if (!sender || !text) {
        return text;
    }
    return text.replace(new RegExp(`^${escapeRegex(sender)}[\\s:.,\\u2014-]*`, 'i'), '');
};

const mergeNotifications = (...lists) => {
    const seen = new Set();
    const merged = [];
    for (const list of lists) {
        for (const item of list || []) {
            if (!item) continue;
            const key = item.id || `${item.type}:${item.created || item.timestamp}:${item.actor || item.title || ''}`;
            if (seen.has(key)) continue;
            seen.add(key);
            merged.push(item);
        }
    }
    return merged;
};

// Prefer a username-shaped title (real actor) over the app account that
// posted the notification ("MistWarp"). Returns null when no actor is known.
const actorFor = n => {
    const title = typeof n.title === 'string' ? n.title : '';
    if (title && USERNAME_RE.test(title) && title.toLowerCase() !== 'mistwarp') {
        return title;
    }
    return n.actor || n.from || title || null;
};

const describe = (n, intl) => {
    switch (n.type) {
    case 'love': return n.projectTitle ?
        <FormattedMessage
            id="mw.community.notifications.love"
            defaultMessage="loved {title}"
            values={{title: <strong>{n.projectTitle}</strong>}}
        /> :
        <FormattedMessage
            id="mw.community.notifications.lovedYourProject"
            defaultMessage="loved your project"
        />;
    case 'comment': return n.projectTitle ?
        <FormattedMessage
            id="mw.community.notifications.comment"
            defaultMessage="commented on {title}"
            values={{title: <strong>{n.projectTitle}</strong>}}
        /> :
        <FormattedMessage
            id="mw.community.notifications.commentedYourProject"
            defaultMessage="commented on your project"
        />;
    case 'profile_comment': return <FormattedMessage
        id="mw.community.notifications.profileComment"
        defaultMessage="commented on your profile"
    />;
    case 'reply': return n.post_id ?
        <FormattedMessage
            id="mw.community.notifications.replyPost"
            defaultMessage="replied to your post"
        /> :
        n.projectTitle ?
            <FormattedMessage
                id="mw.community.notifications.replyOn"
                defaultMessage="replied to your comment on {title}"
                values={{title: <strong>{n.projectTitle}</strong>}}
            /> :
            <FormattedMessage
                id="mw.community.notifications.reply"
                defaultMessage="replied to your comment"
            />;
    case 'purchase': return (
        <FormattedMessage
            id="mw.community.notifications.purchase"
            defaultMessage="bought {title} for {amount} credits"
            values={{title: <strong>{n.projectTitle || 'your project'}</strong>, amount: n.amount}}
        />
    );
    case 'donation': return (
        <FormattedMessage
            id="mw.community.notifications.donation"
            defaultMessage="donated {amount} credits to you"
            values={{amount: n.amount}}
        />
    );
    case 'remix': return n.projectTitle ?
        <FormattedMessage
            id="mw.community.notifications.remix"
            defaultMessage="remixed {title}"
            values={{title: <strong>{n.projectTitle}</strong>}}
        /> :
        <FormattedMessage
            id="mw.community.notifications.remixedYourProject"
            defaultMessage="remixed your project"
        />;
    case 'follow': return <FormattedMessage
        id="mw.community.notifications.follow"
        defaultMessage="followed you"
    />;
    case 'mention': return n.post_id ?
        <FormattedMessage
            id="mw.community.notifications.mentionPost"
            defaultMessage="mentioned you in a post"
        /> :
        n.projectTitle ?
            <FormattedMessage
                id="mw.community.notifications.mentionOn"
                defaultMessage="mentioned you on {title}"
                values={{title: <strong>{n.projectTitle}</strong>}}
            /> :
            <FormattedMessage
                id="mw.community.notifications.mention"
                defaultMessage="mentioned you in a comment"
            />;
    case 'like': return <FormattedMessage
        id="mw.community.notifications.like"
        defaultMessage="liked your post"
    />;
    case 'repost': return <FormattedMessage
        id="mw.community.notifications.repost"
        defaultMessage="reposted your post"
    />;
    case 'group_invite': return <FormattedMessage
        id="mw.community.notifications.groupInvite"
        defaultMessage="invited you to join {group}"
        values={{group: <strong>{n.group_name}</strong>}}
    />;
    case 'group_request_accepted': return <FormattedMessage
        id="mw.community.notifications.groupRequestAccepted"
        defaultMessage="accepted your request to join {group}"
        values={{group: <strong>{n.group_name}</strong>}}
    />;
    case 'group_request_declined': return <FormattedMessage
        id="mw.community.notifications.groupRequestDeclined"
        defaultMessage="declined your request to join {group}"
        values={{group: <strong>{n.group_name}</strong>}}
    />;
    case 'group_kicked': return <FormattedMessage
        id="mw.community.notifications.groupKicked"
        defaultMessage="removed you from {group}"
        values={{group: <strong>{n.group_name}</strong>}}
    />;
    case 'group_banned': return <FormattedMessage
        id="mw.community.notifications.groupBanned"
        defaultMessage="banned you from {group}"
        values={{group: <strong>{n.group_name}</strong>}}
    />;
    case 'group_ownership_transferred': return <FormattedMessage
        id="mw.community.notifications.groupOwnershipTransferred"
        defaultMessage="transferred {group} to you"
        values={{group: <strong>{n.group_name}</strong>}}
    />;
    case 'cosmetic_gift': return <FormattedMessage
        id="mw.community.notifications.cosmeticGift"
        defaultMessage="sent you {cosmetic}"
        values={{cosmetic: <strong>{n.cosmetic_name}</strong>}}
    />;
    case 'item_received': return <FormattedMessage
        id="mw.community.notifications.itemReceived"
        defaultMessage="sent you {item}"
        values={{item: <strong>{n.item_name}</strong>}}
    />;
    case 'item_sold': return <FormattedMessage
        id="mw.community.notifications.itemSold"
        defaultMessage="bought {item} from you"
        values={{item: <strong>{n.item_name}</strong>}}
    />;
    case 'item_purchased': return <FormattedMessage
        id="mw.community.notifications.itemPurchased"
        defaultMessage="you bought {item}"
        values={{item: <strong>{n.item_name}</strong>}}
    />;
    case 'standing': return n.reason ?
        <FormattedMessage
            id="mw.community.notifications.standingReason"
            defaultMessage="Your account standing is now {level}: {reason}"
            values={{level: <strong>{n.level}</strong>, reason: n.reason}}
        /> :
        <FormattedMessage
            id="mw.community.notifications.standing"
            defaultMessage="Your account standing is now {level}."
            values={{level: <strong>{n.level}</strong>}}
        />;
    case 'moderation': return <FormattedMessage
        id="mw.community.notifications.moderatorMessage"
        defaultMessage="A moderator sent you a message."
    />;
    case 'news': return <FormattedMessage
        id="mw.community.notifications.news"
        defaultMessage="New announcement: {title}"
        values={{title: <strong>{n.title}</strong>}}
    />;
    case 'report_update': return <FormattedMessage
        id="mw.community.notifications.reportOutcome"
        defaultMessage="Your report was {outcome}."
        values={{outcome: intl.formatMessage({
            id: (n.action && REPORT_OUTCOMES[n.action]) || 'mw.community.notifications.outcome.dismiss',
            defaultMessage: 'reviewed; no action was taken'
        })}}
    />;
    case 'contribution': return <FormattedMessage
        id="mw.community.notifications.contribution"
        defaultMessage="sent changes for {title}"
        values={{title: <strong>{n.projectTitle}</strong>}}
    />;
    case 'space_project': return (
        <FormattedMessage
            id="mw.community.notifications.spaceProject"
            defaultMessage="added {title} to {space}"
            values={{title: <strong>{n.projectTitle}</strong>, space: <strong>{n.spaceTitle}</strong>}}
        />
    );
    case 'space_comment': return <FormattedMessage
        id="mw.community.notifications.spaceComment"
        defaultMessage="commented on {space}"
        values={{space: <strong>{n.spaceTitle}</strong>}}
    />;
    case 'space_curator_invite': return <FormattedMessage
        id="mw.community.notifications.spaceCuratorInvite"
        defaultMessage="invited you to curate {space}"
        values={{space: <strong>{n.spaceTitle}</strong>}}
    />;
    case 'space_curator_accepted': return (
        <FormattedMessage
            id="mw.community.notifications.spaceCuratorAccepted"
            defaultMessage="accepted your invitation to curate {space}"
            values={{space: <strong>{n.spaceTitle}</strong>}}
        />
    );
    case 'space_curator_declined': return (
        <FormattedMessage
            id="mw.community.notifications.spaceCuratorDeclined"
            defaultMessage="declined your invitation to curate {space}"
            values={{space: <strong>{n.spaceTitle}</strong>}}
        />
    );
    case 'space_curator_removed': return <FormattedMessage
        id="mw.community.notifications.spaceCuratorRemoved"
        defaultMessage="removed you as a curator of {space}"
        values={{space: <strong>{n.spaceTitle}</strong>}}
    />;
    case 'challenge_judge_invite': return <FormattedMessage
        id="mw.community.notifications.challengeJudgeInvite"
        defaultMessage="invited you to judge {space}"
        values={{space: <strong>{n.spaceTitle}</strong>}}
    />;
    case 'challenge_judge_accepted': return (
        <FormattedMessage
            id="mw.community.notifications.challengeJudgeAccepted"
            defaultMessage="accepted your invitation to judge {space}"
            values={{space: <strong>{n.spaceTitle}</strong>}}
        />
    );
    case 'challenge_join': return <FormattedMessage
        id="mw.community.notifications.challengeJoin"
        defaultMessage="joined {space}"
        values={{space: <strong>{n.spaceTitle}</strong>}}
    />;
    case 'project_feedback': return <FormattedMessage
        id="mw.community.notifications.projectFeedback"
        defaultMessage="sent {type} feedback for {title}"
        values={{type: n.feedbackType, title: <strong>{n.projectTitle}</strong>}}
    />;
    case 'project_review': return <FormattedMessage
        id="mw.community.notifications.projectReview"
        defaultMessage="rated {title} {rating} out of 5"
        values={{title: <strong>{n.projectTitle}</strong>, rating: n.rating}}
    />;
    case 'roadmap_comment': return <FormattedMessage
        id="mw.community.notifications.roadmapComment"
        defaultMessage="commented on {title}"
        values={{title: <strong>{n.roadmapTitle}</strong>}}
    />;
    default: return <FormattedMessage
        id="mw.community.notifications.didSomething"
        defaultMessage="did something"
    />;
    }
};

// Generic Rotur notifications (any app's /v2/notify/ push) arrive as
// type "notification" with title/body/from/source. Title holds the sender
// for MistWarp; other apps may put an app name or message summary there.
const GenericNotification = ({n}) => {
    const sender = n.title || n.from || n.actor || '';
    const isUser = Boolean(sender) && USERNAME_RE.test(sender) &&
        sender.toLowerCase() !== 'mistwarp' &&
        sender.toLowerCase() !== String(n.source || '').toLowerCase();
    const raw = n.body || n.content || '';
    if (!isUser && !sender && !raw) {
        return null;
    }
    const text = isUser ? stripSender(sender, raw) : raw;
    const showTitle = !isUser && Boolean(sender) && sender !== text;
    const channel = n.channelName ? ` in #${n.channelName}` : '';
    const target = n.projectId ? `${projectUrl(n.projectId)}${commentAnchor(n)}` : null;
    const sourceLink = typeof n.source === 'string' && /^https?:\/\//.test(n.source);
    const showSource = Boolean(n.source) && n.source !== 'mistwarp' && !sourceLink;

    let content;
    if (showTitle) {
        content = (
            <>
                <span className={styles.senderTitle}>{sender}</span>
                {linkify(text)}{channel}
            </>
        );
    } else {
        content = <>{linkify(text || sender)}{channel}</>;
    }
    if (target) {
        content = <Link to={target} className={styles.body}>{content}</Link>;
    } else if (sourceLink) {
        content = <a href={n.source} target="_blank" rel="noreferrer" className={styles.body}>{content}</a>;
    } else {
        content = <span className={styles.body}>{content}</span>;
    }

    if (isUser) {
        return (
            <>
                <span className={styles.avatarWrap}>
                    <Link to={`/users/${sender}`}>
                        <Avatar username={sender} size={40} />
                    </Link>
                    <span className={styles.iconBadge}><AtSign size={12} /></span>
                </span>
                <div className={styles.text}>
                    <Link to={`/users/${sender}`} className={styles.actor}>{sender}</Link>
                    {' '}
                    {content}
                </div>
            </>
        );
    }
    return (
        <>
            <span className={styles.sysAvatar}><AppWindow size={20} /></span>
            <div className={styles.text}>
                {content}
                {showSource ? <span className={styles.sourceTag}>{n.source}</span> : null}
            </div>
        </>
    );
};

GenericNotification.propTypes = {
    n: PropTypes.object.isRequired
};

const Notifications = ({hideHeading}) => {
    const intl = useIntl();
    const {t: ct} = useCommunityIntl();
    const {user, loading, login} = useUser();
    const [items, setItems] = useState(null);
    const [preferences, setPreferences] = useState(getNotificationPreferences());

    useEffect(() => {
        const update = () => setPreferences(getNotificationPreferences());
        window.addEventListener('mw:notification-preferences', update);
        return () => window.removeEventListener('mw:notification-preferences', update);
    }, []);
    const [failed, setFailed] = useState(false);
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        if (!user) {
            return () => {};
        }
        return subscribeNotifications(notification => {
            setItems(prev => mergeNotifications([notification], prev || []));
        });
    }, [user]);

    useEffect(() => {
        const onRemoved = event => {
            const id = event.detail && event.detail.id;
            if (typeof id !== 'string') {
                return;
            }
            setItems(prev => (prev ? prev.filter(item => item.id !== id) : prev));
        };
        window.addEventListener('mw:notifications-removed', onRemoved);
        return () => window.removeEventListener('mw:notifications-removed', onRemoved);
    }, []);

    useEffect(() => {
        setItems(null);
        setFailed(false);
        if (!user) {
            return () => {};
        }
        let cancelled = false;
        fetchNotifications()
            .then(list => {
                if (cancelled) return;
                setItems(current => mergeNotifications(current || [], list));
                markNotificationsRead()
                    .then(() => {
                        if (!cancelled) window.dispatchEvent(new Event('mw:notifications-read'));
                    })
                    .catch(() => {});
            })
            .catch(() => {
                if (!cancelled) setFailed(true);
            });
        return () => {
            cancelled = true;
        };
    }, [user, attempt]);

    if (loading) {
        return <main className={styles.page}><p className={styles.status}>{intl.formatMessage({id: 'mw.community.notifications.loading', defaultMessage: 'Loading…'})}</p></main>;
    }
    if (!user) {
        return (
            <main className={styles.page}>
                <p className={styles.status}>
                    {ct('notify.signIn', 'Sign in to see your notifications.')} <Button onClick={login}>{ct('notify.signInBtn', 'Sign in')}</Button>
                </p>
            </main>
        );
    }
    const visibleItems = (items || [])
        .filter(item => preferences[categoryForNotification(item.type)] !== false);

    return (
        <main className={styles.page}>
            {hideHeading ? null : <h1>{intl.formatMessage({id: 'mw.community.notifications.title', defaultMessage: 'Notifications'})}</h1>}
            {failed ? (
                <p className={styles.status}>
                    {items === null ? ct('notify.couldNotLoad', 'Couldn\'t load notifications.') : ct('notify.someMissing', 'Some notifications may be missing.')}{' '}
                    <Button onClick={() => setAttempt(a => a + 1)}>{ct('notify.tryAgain', 'Try again')}</Button>
                </p>
            ) : null}
            {items === null ? (!failed ? (
                <p className={styles.status}>{ct('common.loading', 'Loading…')}</p>
            ) : null) : visibleItems.length ? (
                <div className={styles.list}>
                    {visibleItems.map(n => {
                        const Icon = ICONS[n.type] || Heart;
                        const ts = n.created || n.timestamp;
                        const time = timeAgo(ts);

                        if (n.type === 'notification') {
                            return (
                                <div key={n.id} className={n.read ? styles.item : styles.itemUnread}>
                                    <GenericNotification n={n} />
                                    <span className={styles.time}>{time}</span>
                                </div>
                            );
                        }

                        if (SYSTEM_TYPES.includes(n.type)) {
                            return (
                                <div key={n.id} className={n.read ? styles.item : styles.itemUnread}>
                                    <span className={styles.sysAvatar}><Icon size={20} /></span>
                                    <div className={styles.text}>
                                        {n.type === 'news' && n.newsId ? (
                                            <Link to="/news" className={styles.body}>{describe(n, intl)}</Link>
                                        ) : (
                                            <span className={styles.body}>{describe(n, intl)}</span>
                                        )}
                                    </div>
                                    <span className={styles.time}>{time}</span>
                                </div>
                            );
                        }

                        const actor = actorFor(n);
                        if (!actor) {
                            return null;
                        }
                        const groupLink = GROUP_TYPES.includes(n.type) ? groupUrl(n) : null;
                        const body = groupLink ? (
                            <a href={groupLink} target="_blank" rel="noreferrer" className={styles.body}>
                                {describe(n, intl)}
                            </a>
                        ) : describe(n, intl);
                        return (
                            <div key={n.id} className={n.read ? styles.item : styles.itemUnread}>
                                <span className={styles.avatarWrap}>
                                    <Link to={`/users/${actor}`}>
                                        <Avatar username={actor} size={40} />
                                    </Link>
                                    <span className={styles.iconBadge}><Icon size={12} /></span>
                                </span>
                                <div className={styles.text}>
                                    <Link to={`/users/${actor}`} className={styles.actor}>{actor}</Link>
                                    {' '}
                                    {n.spaceId ? (
                                        <Link
                                            to={`/spaces/${n.spaceId}`}
                                            className={styles.body}
                                        >{body}</Link>
                                    ) : n.roadmapId ? (
                                        <Link
                                            to={`/roadmap#idea-${n.roadmapId}`}
                                            className={styles.body}
                                        >{body}</Link>
                                    ) : n.projectId ? (
                                        <Link
                                            to={`${projectUrl(n.projectId)}${commentAnchor(n)}`}
                                            className={styles.body}
                                        >{body}</Link>
                                    ) : (n.type === 'profile_comment' || n.profile) ? (
                                        <Link
                                            to={`/users/${n.profile || user.username}${commentAnchor(n)}`}
                                            className={styles.body}
                                        >{body}</Link>
                                    ) : body}
                                </div>
                                <span className={styles.time}>{time}</span>
                            </div>
                        );
                    })}
                </div>
            ) : items.length ? (
                <p className={styles.status}>
                    {ct('notify.preferencesHide', 'Your notification preferences hide all current activity.')}{' '}
                    <Link to="/settings?section=notifications">{ct('notify.changePrefs', 'Change preferences')}</Link>
                </p>
            ) : (
                <p className={styles.status}>{intl.formatMessage({id: 'mw.community.notifications.empty', defaultMessage: 'Nothing yet. Activity on your projects shows up here.'})}</p>
            )}
        </main>
    );
};

Notifications.propTypes = {
    hideHeading: PropTypes.bool
};

export {mergeNotifications};
export default Notifications;
