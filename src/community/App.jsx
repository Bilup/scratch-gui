import React, {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import {initPrefetch} from './prefetch-editor.js';
import {UserProvider} from './UserContext.jsx';
import {useIntl} from '../lib/tw-use-intl.jsx';
import setPageMeta from './page-meta.js';
import NavBar from './components/NavBar.jsx';
import BetaBanner from './components/BetaBanner.jsx';
import StandingBanner from './components/StandingBanner.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Explore from './pages/Explore.jsx';
import Credits from './pages/Credits.jsx';
import Project from './pages/Project.jsx';
import Profile from './pages/Profile.jsx';
import Followers from './pages/Followers.jsx';
import Settings from './pages/Settings.jsx';
import MyStuff from './pages/MyStuff.jsx';
import ManageProject from './pages/ManageProject.jsx';
import Wallet from './pages/Wallet.jsx';
import Notifications from './pages/Notifications.jsx';
import News from './pages/News.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import Admin from './pages/Admin.jsx';
import Spaces from './pages/Spaces.jsx';
import Space from './pages/Space.jsx';
import ManageSpace from './pages/ManageSpace.jsx';
import Roadmap from './pages/Roadmap.jsx';
import Trust from './pages/Trust.jsx';
import Support from './pages/Support.jsx';
import Status from './pages/Status.jsx';
import NotFound from './pages/NotFound.jsx';
import {useCommunityIntl} from './i18n.jsx';

const ROUTE_TITLES = [
    ['/explore', 'mw.community.route.explore', 'Explore'],
    ['/settings', 'mw.community.route.settings', 'Settings'],
    ['/mystuff/project/', 'mw.community.route.manageProject', 'Manage project'],
    ['/mystuff', 'mw.community.route.myStuff', 'My Stuff'],
    ['/wallet', 'mw.community.route.wallet', 'Wallet'],
    ['/notifications', 'mw.community.route.notifications', 'Notifications'],
    ['/news', 'mw.community.route.news', 'News'],
    ['/leaderboard', 'mw.community.route.leaderboard', 'Leaderboard'],
    ['/spaces/', 'route.space'],
    ['/spaces', 'route.spaces'],
    ['/roadmap', 'route.roadmap'],
    ['/trust', 'route.trust'],
    ['/support', 'route.support'],
    ['/status', 'route.status'],
    ['/users/', 'mw.community.route.profile', 'Profile'],
    ['/project/', 'mw.community.route.project', 'Project']
];

const RouteMeta = () => {
    const {pathname} = useLocation();
    const intl = useIntl();
    const {t} = useCommunityIntl();
    useEffect(() => {
        const match = ROUTE_TITLES.find(([prefix]) => pathname.startsWith(prefix));
        let title = null;
        if (match) {
            title = (match[1] && match[1].startsWith('mw.community.route.'))
                ? intl.formatMessage({id: match[1], defaultMessage: match[2]})
                : t(match[1]);
        }
        setPageMeta({title});
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App = () => {
    // Warm the browser cache with the editor's JS bundles while the user is on
    // the community site, so the first editor load is much faster.
    useEffect(() => {
        initPrefetch();
    }, []);
    const {t} = useCommunityIntl();
    return (<UserProvider>
        <a className="mw-skip-link" href="#mw-main-content">{t('a11y.skip')}</a>
        <RouteMeta />
        <NavBar />
        <BetaBanner />
        <StandingBanner />
        <div className="mw-app-content" id="mw-main-content" tabIndex="-1">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/users/:name" element={<Profile />} />
                <Route path="/users/:name/followers" element={<Followers />} />
                <Route path="/users/:name/following" element={<Followers mode="following" />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/mystuff" element={<MyStuff />} />
                <Route path="/mystuff/project/:id" element={<ManageProject />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/news" element={<News />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/spaces" element={<Spaces />} />
                <Route path="/spaces/:id" element={<Space />} />
                <Route path="/spaces/:id/manage" element={<ManageSpace />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/trust" element={<Trust />} />
                <Route path="/support" element={<Support />} />
                <Route path="/status" element={<Status />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
        <Footer />
    </UserProvider>);
};

export default App;
