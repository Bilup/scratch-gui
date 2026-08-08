import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import VM from 'scratch-vm';

import Box from '../box/box.jsx';
import {STAGE_DISPLAY_SIZES} from '../../lib/constants/layout-constants.js';
import StageHeader from '../../containers/stage-header.jsx';
import Stage from '../../containers/stage.jsx';
import Loader from '../loader/loader.jsx';

import styles from './stage-wrapper.css';

const StageWrapperComponent = function (props) {
    const {
        isEmbedded,
        isFullScreen,
        isRtl,
        isRendererSupported,
        isStageHidden,
        loading,
        stageContainerWidth,
        stageMaxHeight,
        stageSize,
        vm
    } = props;

    const [isExitingFullScreen, setIsExitingFullScreen] = useState(false);
    const wasFullScreenRef = useRef(false);

    useEffect(() => {
        if (isFullScreen) {
            wasFullScreenRef.current = true;
            setIsExitingFullScreen(false);
        } else if (wasFullScreenRef.current) {
            // Only play the exit animation when we are actually leaving fullscreen.
            wasFullScreenRef.current = false;
            setIsExitingFullScreen(true);
            const timer = setTimeout(() => {
                setIsExitingFullScreen(false);
            }, 250);
            return () => clearTimeout(timer);
        } else {
            // Initial mount while not fullscreen: do not trigger the exit animation.
            // Otherwise the stage wrapper briefly becomes a fixed fullscreen overlay
            // on page load, which can leave the stage stuck / flickering.
            setIsExitingFullScreen(false);
        }
    }, [isFullScreen]);

    return (
        <Box
            className={classNames(
                styles.stageWrapper,
                {
                    [styles.embedded]: isEmbedded,
                    [styles.fullScreen]: isFullScreen || isExitingFullScreen,
                    [styles.exitingFullScreen]: isExitingFullScreen,
                    [styles.loading]: loading,
                    [styles.offsetControls]: !(isEmbedded || isFullScreen || isExitingFullScreen)
                }
            )}
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <Box className={styles.stageMenuWrapper}>
                <StageHeader
                    stageContainerWidth={stageContainerWidth}
                    stageSize={stageSize}
                    vm={vm}
                />
            </Box>
            {isStageHidden ? null : (
                <Box className={styles.stageCanvasWrapper}>
                    {
                        isRendererSupported ?
                            <Stage
                                stageContainerWidth={stageContainerWidth}
                                stageMaxHeight={stageMaxHeight}
                                stageSize={stageSize}
                                vm={vm}
                            /> :
                            null
                    }
                </Box>
            )}
            {loading ? (
                <Loader isFullScreen={isFullScreen} />
            ) : null}
        </Box>
    );
};

StageWrapperComponent.propTypes = {
    isEmbedded: PropTypes.bool,
    isFullScreen: PropTypes.bool,
    isRendererSupported: PropTypes.bool.isRequired,
    isRtl: PropTypes.bool.isRequired,
    isStageHidden: PropTypes.bool,
    loading: PropTypes.bool,
    stageContainerWidth: PropTypes.number,
    stageMaxHeight: PropTypes.number,
    stageSize: PropTypes.oneOf(Object.keys(STAGE_DISPLAY_SIZES)).isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default StageWrapperComponent;
