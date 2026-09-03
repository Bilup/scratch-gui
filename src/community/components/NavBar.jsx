/* eslint-disable max-len */
import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import {useIntl} from '../../lib/tw-use-intl.jsx';
import {Search, Compass, Plus, FolderOpen, Bell, LogIn, ShieldCheck, Wallet, Layers3} from 'lucide-react';
import {useUser} from '../UserContext.jsx';
import api, {editorUrl} from '../api';
import {fetchNotifications} from '../../lib/rotur/client.js';
import logo from '../assets/bilup-logo.svg';
import Avatar from './Avatar.jsx';
import setFaviconBadge from '../faviconBadge';
import searchPath from '../search-path.js';
import searchFocusIndex from '../search-keyboard.js';
import ProjectThumbnail from './ProjectThumbnail.jsx';
import Button from './ui/Button.jsx';
import {RoturAccount} from '../../components/menu-bar/mw-rotur-account.jsx';
import {useCommunityIntl} from '../i18n.jsx';
import styles from './NavBar.module.css';

const SPACE_KIND_LABELS = {studio: 'Studio', challenge: 'Challenge', collection: 'Collection'};

const SearchBox = ({className, containerRef, inputRef, query, onQuery, onFocus, onKeyDown, onSubmit, open, projects, people, spaces, searching, searchReady, searchFailed, onProject, onProfile, onSpace, searchLabel, suggestionId}) => {
    const {t} = useCommunityIntl();
    return (
    <form
        className={`${styles.search} ${className}`}
        onSubmit={onSubmit}
        onKeyDown={onKeyDown}
        ref={containerRef}
    >
        <Search size={17} className={styles.searchIcon} />
        <input
            ref={inputRef}
            className={styles.searchInput}
            placeholder={searchLabel}
            aria-label={searchLabel}
            role="combobox"
            aria-expanded={Boolean(open)}
            aria-controls={suggestionId}
            aria-autocomplete="list"
            autoComplete="off"
            value={query}
            onChange={event => onQuery(event.target.value)}
            onFocus={onFocus}
        />
        {open && query.trim().length >= 2 && (people.length || projects.length || spaces.length || searching || searchReady) ? (
            <div className={styles.suggestions} id={suggestionId} role="listbox">
                {searching ? <p className={styles.suggestionStatus}>{t('nav.searching')}</p> : null}
                {!searching && searchFailed ? <p className={styles.suggestionStatus}>{t('nav.searchFailed')}</p> : null}
                {!searching && !searchFailed && searchReady && !people.length && !projects.length && !spaces.length ? <p className={styles.suggestionStatus}>{t('nav.noMatches')}</p> : null}
                {projects.map(project => (
                    <button key={project.id} type="button" className={styles.suggestion} onClick={() => onProject(project.id)}>
                        <ProjectThumbnail project={project} className={styles.suggestionThumb} fallbackClassName={styles.suggestionThumbFallback} />
                        <span>{project.title}</span>
                        <span className={styles.suggestionMeta}>{t('nav.by')} {project.owner}</span>
                    </button>
                ))}
                {people.map(person => (
                    <button key={person.username} type="button" className={styles.suggestion} onClick={() => onProfile(person.username)}>
                        <Avatar username={person.username} size={26} />
                        <span>{person.username}</span>
                        <span className={styles.suggestionMeta}>{t('nav.followersProjects').replace('{followers}', person.followers ?? 0).replace('{projects}', person.projects)}</span>
                    </button>
                ))}
                {spaces.map(space => (
                    <button key={space._id} type="button" className={styles.suggestion} onClick={() => onSpace(space._id)}>
                        <span className={styles.suggestionSpaceIcon}><Layers3 size={15} /></span>
                        <span>{space.title}</span>
                        <span className={styles.suggestionMeta}>{SPACE_KIND_LABELS[space.kind] || t('nav.space')} · {t('nav.by')} {space.owner}</span>
                    </button>
                ))}
            </div>
        ) : null}
    </form>
    );
};

const NavBar = () => {
    const {user, loading, loginOrThrow, logout} = useUser();
    const {t} = useCommunityIntl();
    const intl = useIntl();
    const [loginError, setLoginError] = useState('');
    const [signingIn, setSigningIn] = useState(false);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [projectSuggestions, setProjectSuggestions] = useState([]);
    const [spaceSuggestions, setSpaceSuggestions] = useState([]);
    const [suggestionsOpen, setSuggestionsOpen] = useState(false);
    const [suggestionsSearching, setSuggestionsSearching] = useState(false);
    const [suggestionsReady, setSuggestionsReady] = useState(false);
    const [suggestionsFailed, setSuggestionsFailed] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const [unread, setUnread] = useState(0);
    const [openReports, setOpenReports] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const desktopSearchRef = useRef(null);
    const mobileSearchRef = useRef(null);
    const desktopSearchInputRef = useRef(null);
    const mobileSearchInputRef = useRef(null);

    useEffect(() => {
        setQuery('');
        setSuggestions([]);
        setProjectSuggestions([]);
        setSpaceSuggestions([]);
        setSuggestionsOpen(false);
        setSuggestionsSearching(false);
        setSuggestionsReady(false);
        setSuggestionsFailed(false);
    }, [location.pathname, location.search]);

    useEffect(() => {
        const focusSearch = event => {
            const target = event.target;
            const typing = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
            if ((event.key === '/' && !typing) || (event.key.toLowerCase() === 'k' && (event.ctrlKey || event.metaKey))) {
                event.preventDefault();
                const mobile = window.matchMedia('(max-width: 680px)').matches;
                const input = mobile ? mobileSearchInputRef.current : desktopSearchInputRef.current;
                input?.focus();
                setSuggestionsOpen(true);
            }
        };
        window.addEventListener('keydown', focusSearch);
        return () => window.removeEventListener('keydown', focusSearch);
    }, []);

    useEffect(() => {
        if (!user) {
            setUnread(0);
            setOpenReports(0);
            return;
        }
        let stale = false;
        const refresh = () => {
            if (document.hidden) return;
            fetchNotifications()
                .then(items => {
                    if (!stale) setUnread(items.filter(n => !n.read).length);
                })
                .catch(() => {});
            if (user.isAdmin) {
                api.admin.reports()
                    .then(data => {
                        if (!stale) setOpenReports((data.reports || []).filter(r => !r.resolved).length);
                    })
                    .catch(() => {});
            }
        };
        refresh();
        const timer = setInterval(refresh, 300000);
        const onPush = () => {
            setUnread(u => (u > 0 ? u + 1 : 1));
        };
        const onRead = () => setUnread(0);
        const onRemoved = event => {
            if (event.detail && event.detail.read) {
                return;
            }
            setUnread(u => (u > 0 ? u - 1 : 0));
        };
        window.addEventListener('mw:notifications-read', onRead);
        window.addEventListener('mw:notifications-push', onPush);
        window.addEventListener('mw:notifications-removed', onRemoved);
        window.addEventListener('mw:reports-updated', refresh);
        document.addEventListener('visibilitychange', refresh);
        return () => {
            stale = true;
            clearInterval(timer);
            window.removeEventListener('mw:notifications-read', onRead);
            window.removeEventListener('mw:notifications-push', onPush);
            window.removeEventListener('mw:notifications-removed', onRemoved);
            window.removeEventListener('mw:reports-updated', refresh);
            document.removeEventListener('visibilitychange', refresh);
        };
    }, [user]);

    useEffect(() => {
        setFaviconBadge(unread > 0);
    }, [unread]);

    useEffect(() => {
        const q = query.trim();
        if (q.length < 2) {
            setSuggestions([]);
            setProjectSuggestions([]);
            setSpaceSuggestions([]);
            setSuggestionsSearching(false);
            setSuggestionsReady(false);
            setSuggestionsFailed(false);
            return;
        }
        let stale = false;
        setSuggestions([]);
        setProjectSuggestions([]);
        setSpaceSuggestions([]);
        setSuggestionsSearching(true);
        setSuggestionsReady(false);
        setSuggestionsFailed(false);
        const timer = setTimeout(() => {
            Promise.allSettled([
                api.searchUsers(q),
                api.explore({q, limit: 5}),
                api.spaces({q})
            ]).then(results => {
                if (stale) return;
                const [userResult, projectResult, spaceResult] = results;
                const u = userResult.status === 'fulfilled' ? userResult.value : {users: []};
                const p = projectResult.status === 'fulfilled' ? projectResult.value : {projects: []};
                const s = spaceResult.status === 'fulfilled' ? spaceResult.value : {spaces: []};
                setSuggestions(u.users || []);
                setProjectSuggestions(p.projects || []);
                setSpaceSuggestions((s.spaces || []).slice(0, 5));
                setSuggestionsFailed(results.every(result => result.status === 'rejected'));
                setSuggestionsSearching(false);
                setSuggestionsReady(true);
            });
        }, 200);
        return () => {
            stale = true;
            clearTimeout(timer);
        };
    }, [query]);

    useEffect(() => {
        const close = event => {
            const outsideDesktop = desktopSearchRef.current && !desktopSearchRef.current.contains(event.target);
            const outsideMobile = mobileSearchRef.current && !mobileSearchRef.current.contains(event.target);
            if (outsideDesktop && outsideMobile) {
                setSuggestionsOpen(false);
            }
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close);
    }, []);

    const submitSearch = event => {
        event.preventDefault();
        setSuggestionsOpen(false);
        navigate(searchPath(query));
    };

    const handleSearchKeyDown = (event, searchRef) => {
        if (event.key === 'Escape') {
            const input = searchRef.current && searchRef.current.querySelector('input');
            if (input && document.activeElement !== input) input.focus();
            setSuggestionsOpen(false);
            event.preventDefault();
            return;
        }
        if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
        if (!suggestionsOpen) {
            setSuggestionsOpen(true);
            return;
        }
        const items = Array.from(searchRef.current.querySelectorAll(`.${styles.suggestion}`));
        const currentIndex = items.indexOf(document.activeElement);
        if (currentIndex < 0 && (event.key === 'Home' || event.key === 'End')) return;
        const nextIndex = searchFocusIndex(event.key, currentIndex, items.length);
        if (nextIndex < 0) return;
        event.preventDefault();
        items[nextIndex].focus();
    };

    const doLogin = async () => {
        if (signingIn) return;
        setSigningIn(true);
        try {
            await loginOrThrow();
        } catch (e) {
            if (e && e.code === 'banned') {
                // handled by the global ban banner
            } else {
                setLoginError(
                    e && /popup|blocked|window/i.test(String(e.message || '')) ?
                        intl.formatMessage({
                            id: 'mw.community.nav.signInBlocked',
                            defaultMessage: 'Sign-in window was blocked. Allow popups for this site and try again.'
                        }) :
                        (e && e.message) || intl.formatMessage({
                            id: 'mw.community.nav.signInFailed',
                            defaultMessage: 'Sign-in did not complete. Please try again.'
                        })
                );
            }
        } finally {
            setSigningIn(false);
        }
    };

    const goToProfile = name => {
        setSuggestionsOpen(false);
        setQuery('');
        navigate(`/users/${name}`);
    };

    const goToProject = id => {
        setSuggestionsOpen(false);
        setQuery('');
        navigate(`/project/${id}`);
    };

    const goToSpace = id => {
        setSuggestionsOpen(false);
        setQuery('');
        navigate(`/spaces/${id}`);
    };

    return (
        <header className={styles.bar}>
            <div className={styles.inner}>
                <Link
                    to="/"
                    className={styles.brand}
                    aria-label="Bilup"
                >
                    <img
                        className={styles.logo}
                        src={logo}
                        alt="Bilup"
                    />
                </Link>

                <nav className={styles.links} aria-label={t('nav.main')}>
                    <a href={editorUrl()} className={styles.link} aria-label={t('nav.create')}>
                        <Plus size={17} />
                        <span className={styles.linkLabel}>
                            <FormattedMessage
                                defaultMessage="Create"
                                description="NavBar link to the editor"
                                id="mw.community.nav.create"
                            />
                        </span>
                    </a>
                    <Link
                        to="/explore"
                        className={styles.link}
                        aria-label={t('nav.explore')}
                    >
                        <Compass size={17} />
                        <span className={styles.linkLabel}>
                            <FormattedMessage
                                defaultMessage="Explore"
                                description="NavBar link to explore projects"
                                id="mw.community.nav.explore"
                            />
                        </span>
                    </Link>
                    <Link
                        to="/spaces"
                        className={styles.link}
                        aria-label={t('nav.spaces')}
                    >
                        <Layers3 size={17} />
                        <span className={styles.linkLabel}>{t('nav.spaces')}</span>
                    </Link>
                </nav>

                <SearchBox
                    className={styles.desktopSearch}
                    containerRef={desktopSearchRef}
                    inputRef={desktopSearchInputRef}
                    query={query}
                    onQuery={value => {
                        setQuery(value);
                        setSuggestionsOpen(true);
                    }}
                    onFocus={() => setSuggestionsOpen(true)}
                    onKeyDown={event => handleSearchKeyDown(event, desktopSearchRef)}
                    onSubmit={submitSearch}
                    open={suggestionsOpen}
                    projects={projectSuggestions}
                    people={suggestions}
                    spaces={spaceSuggestions}
                    searching={suggestionsSearching}
                    searchReady={suggestionsReady}
                    searchFailed={suggestionsFailed}
                    onProject={goToProject}
                    onProfile={goToProfile}
                    onSpace={goToSpace}
                    searchLabel={t('nav.search')}
                    suggestionId="mw-search-suggestions-desktop"
                />

                <div className={styles.account}>
                    {user ? (
                        <>
                            {user.isAdmin ? (
                                <Link
                                    to="/admin"
                                    className={`${styles.iconLink} ${styles.bellLink}`}
                                    title={intl.formatMessage({id: 'mw.community.nav.admin', defaultMessage: 'Admin'})}
                                    aria-label={openReports > 0 ?
                                        intl.formatMessage({
                                            id: 'mw.community.nav.adminReports',
                                            defaultMessage: 'Admin ({count} open reports)'
                                        }, {count: openReports}) :
                                        intl.formatMessage({id: 'mw.community.nav.admin', defaultMessage: 'Admin'})}
                                >
                                    <ShieldCheck size={19} />
                                    {openReports > 0 ? (
                                        <span className={styles.bellBadge}>{openReports > 9 ? '9+' : openReports}</span>
                                    ) : null}
                                </Link>
                            ) : null}
                            <Link
                                to="/mystuff"
                                className={styles.iconLink}
                                title={intl.formatMessage({id: 'mw.community.nav.myStuff', defaultMessage: 'My stuff'})}
                                aria-label={intl.formatMessage({id: 'mw.community.nav.myStuff', defaultMessage: 'My stuff'})}
                            >
                                <FolderOpen size={19} />
                            </Link>
                            <Link
                                to="/wallet"
                                className={styles.iconLink}
                                title={intl.formatMessage({id: 'mw.community.nav.wallet', defaultMessage: 'Wallet'})}
                                aria-label={intl.formatMessage({id: 'mw.community.nav.wallet', defaultMessage: 'Wallet'})}
                            >
                                <Wallet size={19} />
                            </Link>
                            <Link
                                to="/notifications"
                                className={`${styles.iconLink} ${styles.bellLink}`}
                                title={intl.formatMessage({id: 'mw.community.nav.notifications', defaultMessage: 'Notifications'})}
                                aria-label={unread > 0 ?
                                    intl.formatMessage({
                                        id: 'mw.community.nav.notificationsUnread',
                                        defaultMessage: 'Notifications ({count} unread)'
                                    }, {count: unread}) :
                                    intl.formatMessage({id: 'mw.community.nav.notifications', defaultMessage: 'Notifications'})}
                            >
                                <Bell size={19} />
                                {unread > 0 ? (
                                    <span className={styles.bellBadge}>{unread > 9 ? '9+' : unread}</span>
                                ) : null}
                            </Link>
                            <RoturAccount
                                username={user.username}
                                menuOpen={accountOpen}
                                showEditorItems={false}
                                onOpenMenu={() => setAccountOpen(true)}
                                onCloseMenu={() => setAccountOpen(false)}
                                onOpenLogin={doLogin}
                                onLogout={logout}
                            />
                        </>
                    ) : loading ? null : (
                        <Button
                            variant="primary"
                            className={styles.signIn}
                            onClick={doLogin}
                            busy={signingIn}
                            busyLabel={t('common.signingIn')}
                            title={intl.formatMessage({id: 'mw.community.nav.signIn', defaultMessage: 'Sign in'})}
                            aria-label={intl.formatMessage({id: 'mw.community.nav.signIn', defaultMessage: 'Sign in'})}
                        >
                            <LogIn size={19} />
                            <span className={styles.signInLabel}>{t('common.signIn')}</span>
                        </Button>
                    )}
                </div>
            </div>
            <SearchBox
                className={styles.mobileSearch}
                containerRef={mobileSearchRef}
                inputRef={mobileSearchInputRef}
                query={query}
                onQuery={value => {
                    setQuery(value);
                    setSuggestionsOpen(true);
                }}
                onFocus={() => setSuggestionsOpen(true)}
                onKeyDown={event => handleSearchKeyDown(event, mobileSearchRef)}
                onSubmit={submitSearch}
                open={suggestionsOpen}
                projects={projectSuggestions}
                people={suggestions}
                spaces={spaceSuggestions}
                searching={suggestionsSearching}
                searchReady={suggestionsReady}
                searchFailed={suggestionsFailed}
                onProject={goToProject}
                onProfile={goToProfile}
                onSpace={goToSpace}
                searchLabel={t('nav.search')}
                suggestionId="mw-search-suggestions-mobile"
            />
            {loginError ? (
                <div
                    className={styles.loginError}
                    role="alert"
                >
                    <span>{loginError}</span>
                    <button
                        className={styles.loginErrorClose}
                        onClick={() => setLoginError('')}
                        aria-label={intl.formatMessage({id: 'mw.community.nav.dismiss', defaultMessage: 'Dismiss'})}
                    >×</button>
                </div>
            ) : null}
        </header>
    );
};

export default NavBar;