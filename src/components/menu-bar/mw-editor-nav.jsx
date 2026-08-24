import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {FolderOpen, MessageSquare} from 'lucide-react';

import menuBarStyles from './menu-bar.css';
import MwNotifications from './mw-notifications.jsx';
import MyStuffPage from '../../community/pages/MyStuff.jsx';
import openMistWarpCommunityWindow from '../../lib/mw/open-mw-community-window.jsx';
import {useIntl} from '../../lib/tw-use-intl.jsx';
import MwProjectActivity from './mw-project-activity.jsx';
import {getRememberedPlatformProject} from '../../lib/community/publish.js';

const openMyStuff = title => openMistWarpCommunityWindow({
    id: 'mw-mystuff-window',
    title,
    initialPath: '/mystuff',
    element: <MyStuffPage />
});

const openProjectActivity = projectId => openMistWarpCommunityWindow({
    id: `mw-project-activity-${projectId}`,
    title: 'Project activity',
    initialPath: `/project/${projectId}`,
    element: <MwProjectActivity projectId={projectId} />,
    width: 820,
    height: 560
});

export const NavItem = ({title, icon: Icon, onClick, value}) => (
    <button
        type="button"
        className={classNames(
            menuBarStyles.menuBarItem,
            menuBarStyles.hoverable,
            menuBarStyles.navButton
        )}
        title={title}
        aria-label={title}
        value={value}
        onClick={onClick}
    >
        <Icon size={18} />
    </button>
);

NavItem.propTypes = {
    icon: PropTypes.elementType.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string
};

const handleOpenProjectActivity = event => openProjectActivity(event.currentTarget.value);

const MwEditorNav = ({username}) => {
    const intl = useIntl();
    if (!username) {
        return null;
    }
const myStuffTitle = intl.formatMessage({
        id: 'mw.menuBar.myStuff',
        defaultMessage: 'My Stuff'
    });
    const projectId = getRememberedPlatformProject();
    return (
        <React.Fragment>
            <NavItem
                title={myStuffTitle}
                icon={FolderOpen}
                onClick={() => openMyStuff(myStuffTitle)}
            />
            {projectId ? (
                <NavItem
                    title="Project comments and pull requests"
                    icon={MessageSquare}
                    value={projectId}
                    onClick={handleOpenProjectActivity}
                />
            ) : null}
            <MwNotifications />
        </React.Fragment>
    );
};

MwEditorNav.propTypes = {
    username: PropTypes.string
};

export default connect(state => ({
    username: state.scratchGui.rotur.username
}))(MwEditorNav);
