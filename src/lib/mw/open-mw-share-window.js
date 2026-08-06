import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';

import ShareWindow from '../../components/mw-share-modal/share-window.jsx';
import IntlBridge from '../../lib/tw-use-intl.jsx';
import WindowManager from '../../addons/window-system/window-manager';
import {openProjectMetadataModal} from '../../reducers/modals';

let shareWindow = null;
let container = null;

const openMistWarpShareWindow = ({vm, initialTitle, initialError, action = 'save', onPublished}) => {
    if (shareWindow) {
        shareWindow.show().bringToFront();
        return;
    }

    container = document.createElement('div');
    container.style.cssText = 'height: 100%; display: flex; flex-direction: column; min-height: 0;';

    const cleanup = () => {
        if (container) {
            ReactDOM.unmountComponentAtNode(container);
        }
        if (shareWindow) {
            shareWindow.close();
        }
        shareWindow = null;
        container = null;
    };

    const store = window.ReduxStore;
    const messages = store && store.getState && store.getState().locales ?
        store.getState().locales.messages : null;
    const windowTitleKey = action === 'remix' ? 'mw.share.windowTitle.remix' :
        action === 'update' ? 'mw.share.windowTitle.update' : 'mw.share.windowTitle.save';
    const windowTitle = (messages && messages[windowTitleKey]) || (
        action === 'remix' ? 'Remix to Bilup' :
            action === 'update' ? 'Update Bilup project' : 'Save to Bilup'
    );

    shareWindow = WindowManager.createWindow({
        id: 'mw-share-window',
        title: windowTitle,
        width: 460,
        height: 380,
        minWidth: 360,
        minHeight: 300,
        className: 'mw-share-window',
        onClose: () => {
            if (container) {
                ReactDOM.unmountComponentAtNode(container);
            }
            shareWindow = null;
            container = null;
        }
    });

    shareWindow.setContent(container);

    const shareWindowProps = {
        vm,
        initialTitle,
        initialError,
        action,
        onClose: cleanup,
        onReviewStorage: () => {
            cleanup();
            if (window.ReduxStore) {
                window.ReduxStore.dispatch(openProjectMetadataModal('optimiser'));
            }
        },
        onPublished: result => {
            if (typeof onPublished === 'function') {
                onPublished(result);
            }
        }
    };
    let element;
    if (store && store.getState().locales) {
        element = React.createElement(Provider, {store},
            React.createElement(IntlProvider, {
                locale: store.getState().locales.locale,
                messages: store.getState().locales.messages
            }, React.createElement(IntlBridge, {},
                React.createElement(ShareWindow, shareWindowProps)))
        );
    } else {
        element = React.createElement(ShareWindow, shareWindowProps);
    }
    ReactDOM.render(element, container);

    shareWindow.center();
    shareWindow.show();
};

export default openMistWarpShareWindow;
