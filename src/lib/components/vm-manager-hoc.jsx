import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import VM from 'scratch-vm';
import AudioEngine from 'scratch-audio';

import * as BrowserGit from '../git/browser-git';
import JSZip from 'jszip';

import {setProjectUnchanged} from '../../reducers/project-changed';
import {
    LoadingStates,
    getIsLoadingWithId,
    onLoadedProject,
    projectError
} from '../../reducers/project-state';
import log from '../utils/log';

/**
 * List of fonts that could be used by security prompts.
 */
const SECURITY_CRITICAL_FONTS = [
    'Helvetica Neue',
    'Helvetica',
    'Arial'
];

/*
 * Higher Order Component to manage events emitted by the VM
 * @param {React.Component} WrappedComponent component to manage VM events for
 * @returns {React.Component} connected component with vm events bound to redux
 */
const vmManagerHOC = function (WrappedComponent) {
    class VMManager extends React.Component {
        constructor (props) {
            super(props);
            bindAll(this, [
                'loadProject'
            ]);
        }
        componentDidMount () {
            if (!this.props.vm.initialized) {
                window.vm = this.props.vm;

                this.installGitProjectFileHooks();
                try {
                    this.audioEngine = new AudioEngine();
                    this.props.vm.attachAudioEngine(this.audioEngine);
                } catch (e) {
                    log.error('could not create scratch-audio', e);
                }
                for (const font of SECURITY_CRITICAL_FONTS) {
                    this.props.vm.runtime.fontManager.restrictFont(font);
                }
                this.props.vm.initialized = true;
                this.props.vm.setLocale(this.props.locale, this.props.messages);
            }
            if (!this.props.isPlayerOnly && !this.props.isStarted) {
                this.props.vm.start();
            }
        }
        componentDidUpdate (prevProps) {
            // if project is in loading state, AND fonts are loaded,
            // and they weren't both that way until now... load project!
            if (this.props.isLoadingWithId && this.props.fontsLoaded &&
                (!prevProps.isLoadingWithId || !prevProps.fontsLoaded)) {
                this.loadProject();
            }
            // Start the VM if entering editor mode with an unstarted vm
            if (!this.props.isPlayerOnly && !this.props.isStarted) {
                this.props.vm.start();
            }
        }

        installGitProjectFileHooks () {
            const vm = this.props.vm;
            if (vm._mwGit_hooksInstalled) return;
            vm._mwGit_hooksInstalled = true;

            const originalSaveProjectZip = vm._saveProjectZip;
            vm._saveProjectZip = (options = {}) => {
                const zip = originalSaveProjectZip.call(vm, options);
                const gitJson = BrowserGit.exportRepoToGitJsonStringSync();
                if (gitJson) {
                    zip.file('git.json', gitJson);
                }
                return zip;
            };

            const originalLoadProject = vm.loadProject;
            vm.loadProject = async data => {
                console.log('[VM Manager] loadProject called, data type:', data instanceof ArrayBuffer ? 'ArrayBuffer' : 
                    data instanceof Blob ? 'Blob' : 
                    ArrayBuffer.isView(data) ? 'ArrayBufferView' : typeof data);
                
                let gitJson = null;

                try {
                    let buffer = null;
                    if (data instanceof ArrayBuffer) {
                        buffer = data;
                        console.log('[VM Manager] Data is ArrayBuffer, length:', buffer.byteLength);
                    } else if (ArrayBuffer.isView(data)) {
                        buffer = data.buffer.slice(
                            data.byteOffset,
                            data.byteOffset + data.byteLength
                        );
                        console.log('[VM Manager] Data is ArrayBufferView, converted to ArrayBuffer');
                    } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
                        console.log('[VM Manager] Data is Blob, converting to ArrayBuffer...');
                        buffer = await data.arrayBuffer();
                        console.log('[VM Manager] Blob converted to ArrayBuffer, length:', buffer.byteLength);
                    }

                    if (buffer) {
                        console.log('[VM Manager] Loading zip from buffer...');
                        const zip = await JSZip.loadAsync(buffer);
                        
                        // 检查项目中的扩展
                        try {
                            const projectJsonFile = zip.file('project.json');
                            if (projectJsonFile) {
                                const projectJson = JSON.parse(await projectJsonFile.async('string'));
                                if (projectJson.extensions && projectJson.extensions.length > 0) {
                                    console.log('[VM Manager] Project has extensions:', projectJson.extensions);
                                }
                                if (projectJson.extensionURLs) {
                                    console.log('[VM Manager] Project has extensionURLs:', projectJson.extensionURLs);
                                    for (const [extId, extUrl] of Object.entries(projectJson.extensionURLs)) {
                                        if (extUrl && extUrl.startsWith('data:')) {
                                            console.log('[VM Manager] WARNING: Found data:url extension:', extId);
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            console.warn('[VM Manager] Failed to check project extensions:', e);
                        }
                        
                        const file = zip.file('git.json');
                        if (file) {
                            console.log('[VM Manager] Found git.json in project zip');
                            gitJson = await file.async('string');
                        
                            // 检查 gitJson 是否是二次编码的 JSON 字符串
                            try {
                                const parsed = JSON.parse(gitJson);
                                // 如果 parsed 是字符串，说明是二次编码的，尝试再次解析
                                if (typeof parsed === 'string') {
                                    console.log('[VM Manager] git.json is double-encoded, re-parsing...');
                                    const reParsed = JSON.parse(parsed);
                                    gitJson = JSON.stringify(reParsed);
                                }
                            } catch (e) {
                                console.warn('[VM Manager] Failed to parse git.json:', e);
                            }
                        
                            // 直接设置 tempGitJsonString，确保在导入后立即更新
                            BrowserGit._setTempGitJsonString(gitJson);
                        } else {
                            console.log('[VM Manager] No git.json found in SB3');
                        }
                    }
                } catch (e) {
                    console.warn('[VM Manager] Failed to read git.json:', e);
                }

                console.log('[VM Manager] Calling original loadProject...');
                const result = await originalLoadProject.call(vm, data);
                console.log('[VM Manager] Original loadProject completed');

                if (gitJson) {
                    try {
                        console.log('[VM Manager] Calling importRepoFromGitJsonString...');
                        await BrowserGit.importRepoFromGitJsonString(gitJson);
                        console.log('[VM Manager] importRepoFromGitJsonString completed');
                    } catch (e) {
                        console.warn('[VM Manager] Failed to import git.json:', e);
                    }
                }

                return result;
            };
        }

        loadProject () {
            console.log('[VM Manager] loadProject method called');
            // tw: stop when loading new project
            console.log('[VM Manager] Quitting VM before loading project');
            this.props.vm.quit();
            console.log('[VM Manager] Loading project data, size:', 
                this.props.projectData instanceof ArrayBuffer ? this.props.projectData.byteLength : 'unknown');
            return this.props.vm.loadProject(this.props.projectData)
                .then(() => {
                    console.log('[VM Manager] Project loaded successfully');
                    this.props.onLoadedProject(this.props.loadingState, this.props.canSave);
                    // Wrap in a setTimeout because skin loading in
                    // the renderer can be async.
                    setTimeout(() => {
                        console.log('[VM Manager] Setting project as unchanged');
                        this.props.onSetProjectUnchanged();
                    });

                    // If the vm is not running, call draw on the renderer manually
                    // This draws the state of the loaded project with no blocks running
                    // which closely matches the 2.0 behavior, except for monitors–
                    // 2.0 runs monitors and shows updates (e.g. timer monitor)
                    // before the VM starts running other hat blocks.
                    if (!this.props.isStarted) {
                        console.log('[VM Manager] VM not started, calling renderer.draw()');
                        // Wrap in a setTimeout because skin loading in
                        // the renderer can be async.
                        setTimeout(() => this.props.vm.renderer.draw());
                    }
                })
                .catch(e => {
                    console.error('[VM Manager] Project loading failed:', e);
                    this.props.onError(e);
                });
        }
        render () {
            const {
                /* eslint-disable no-unused-vars */
                fontsLoaded,
                loadingState,
                locale,
                messages,
                isStarted,
                onError: onErrorProp,
                onLoadedProject: onLoadedProjectProp,
                onSetProjectUnchanged,
                projectData,
                /* eslint-enable no-unused-vars */
                isLoadingWithId: isLoadingWithIdProp,
                vm,
                ...componentProps
            } = this.props;
            return (
                <WrappedComponent
                    isLoading={isLoadingWithIdProp}
                    vm={vm}
                    {...componentProps}
                />
            );
        }
    }

    VMManager.propTypes = {
        canSave: PropTypes.bool,
        cloudHost: PropTypes.string,
        fontsLoaded: PropTypes.bool,
        isLoadingWithId: PropTypes.bool,
        isPlayerOnly: PropTypes.bool,
        isStarted: PropTypes.bool,
        loadingState: PropTypes.oneOf(LoadingStates),
        locale: PropTypes.string,
        messages: PropTypes.objectOf(PropTypes.string),
        onError: PropTypes.func,
        onLoadedProject: PropTypes.func,
        onSetProjectUnchanged: PropTypes.func,
        projectData: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        projectId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        username: PropTypes.string,
        vm: PropTypes.instanceOf(VM).isRequired,
        gitJson: PropTypes.object
    };

    const mapStateToProps = state => {
        const loadingState = state.scratchGui.projectState.loadingState;
        return {
            fontsLoaded: state.scratchGui.fontsLoaded,
            isLoadingWithId: getIsLoadingWithId(loadingState),
            locale: state.locales.locale,
            messages: state.locales.messages,
            projectData: state.scratchGui.projectState.projectData,
            projectId: state.scratchGui.projectState.projectId,
            loadingState: loadingState,
            isPlayerOnly: state.scratchGui.mode.isPlayerOnly,
            isStarted: state.scratchGui.vmStatus.started
        };
    };

    const mapDispatchToProps = dispatch => ({
        onError: error => dispatch(projectError(error)),
        onLoadedProject: (loadingState, canSave) =>
            dispatch(onLoadedProject(loadingState, canSave, true)),
        onSetProjectUnchanged: () => dispatch(setProjectUnchanged())
    });

    // Allow incoming props to override redux-provided props. Used to mock in tests.
    const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign(
        {}, stateProps, dispatchProps, ownProps
    );

    return connect(
        mapStateToProps,
        mapDispatchToProps,
        mergeProps
    )(VMManager);
};

export default vmManagerHOC;
