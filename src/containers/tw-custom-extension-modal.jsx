import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';
import {connect} from 'react-redux';
import log from '../lib/utils/log';
import CustomExtensionModalComponent from '../components/tw-custom-extension-modal/custom-extension-modal.jsx';
import {closeCustomExtensionModal} from '../reducers/modals';
import {manuallyTrustExtension, markExtensionAsCustom} from './tw-security-manager.jsx';

/**
 * @param {Blob} blob Blob
 * @returns {Promise<string>} data: uri
 */
const readAsDataURL = blob => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error(`Could not read extension as data URL: ${reader.error}`));
    reader.readAsDataURL(blob);
});

class CustomExtensionModal extends React.Component {
    constructor (props) {
        super(props);

        bindAll(this, [
            'handleChangeFiles',
            'handleChangeURL',
            'handleClose',
            'handleKeyDown',
            'handleLoadExtension',
            'handleSwitchToFile',
            'handleSwitchToURL',
            'handleSwitchToText',
            'handleChangeText',
            'handleChangeUnsandboxed',
            'handleDragOver',
            'handleDragLeave',
            'handleDrop'
        ]);

        this.state = {
            type: 'url',
            url: '',
            files: null,
            text: '',
            // 非沙盒运行开关：默认关闭（沙盒开启）。
            // 官方域名扩展不受此开关影响，始终自动非沙盒运行。
            unsandboxed: false,
            loading: false,
            error: null
        };
        this.loadPromise = null;
    }

    /**
     * @returns {Promise<string[]>} List of extension URLs to load.
     */
    getExtensionURLs () {
        if (this.state.type === 'url') {
            return Promise.resolve([
                this.state.url.trim()
            ]);
        }

        if (this.state.type === 'file') {
            const files = Array.from(this.state.files);
            return Promise.all(files.map(readAsDataURL));
        }

        if (this.state.type === 'text') {
            return Promise.resolve([
                `data:application/javascript,${encodeURIComponent(this.state.text)}`
            ]);
        }

        return Promise.reject(new Error('Unknown type'));
    }

    hasValidInput () {
        if (this.state.type === 'url') {
            try {
                const parsed = new URL(this.state.url);
                return (
                    parsed.protocol === 'https:' ||
                    parsed.protocol === 'http:' ||
                    parsed.protocol === 'data:'
                );
            } catch (e) {
                return false;
            }
        }

        if (this.state.type === 'file') {
            return !!(this.state.files && this.state.files.length);
        }

        if (this.state.type === 'text') {
            return !!this.state.text.trim();
        }

        return false;
    }

    handleChangeFiles (files) {
        this.setState({
            files,
            error: null
        });
    }

    handleChangeURL (e) {
        this.setState({
            url: e.target.value,
            error: null
        });
    }

    handleClose () {
        if (this.loadPromise) return;
        this.props.onClose();
    }

    handleKeyDown (e) {
        if (e.key === 'Enter' && this.hasValidInput()) {
            e.preventDefault();
            this.handleLoadExtension();
        }
    }

    handleLoadExtension () {
        if (this.loadPromise || !this.hasValidInput()) return this.loadPromise;
        this.setState({loading: true, error: null});

        this.loadPromise = (async () => {
            try {
                const urls = await this.getExtensionURLs();

                // Mark all URLs as custom extensions so the security manager
                // will always show a sandbox permission modal, even if the URL
                // matches a trusted domain (e.g., gallery URLs).
                for (const url of urls) {
                    markExtensionAsCustom(url);
                }

                // 用户勾选了"非沙盒运行"时才手动信任；
                // 官方域名扩展由 isTrustedExtensionUrl 自动信任，不受此开关影响
                if (this.state.unsandboxed) {
                    for (const url of urls) {
                        manuallyTrustExtension(url);
                    }
                }

                for (const url of urls) {
                    await this.props.vm.extensionManager.loadExtensionURL(url);
                }
                this.props.onClose();
                return true;
            } catch (err) {
                log.error(err);
                this.setState({
                    loading: false,
                    error: err && err.message ? err.message : String(err)
                });
                return false;
            }
        })().finally(() => {
            this.loadPromise = null;
        });
        return this.loadPromise;
    }

    handleChangeUnsandboxed (e) {
        this.setState({
            unsandboxed: e.target.checked
        });
    }

    handleSwitchToFile () {
        this.setState({
            type: 'file',
            error: null
        });
    }

    handleSwitchToURL () {
        this.setState({
            type: 'url',
            error: null
        });
    }

    handleSwitchToText () {
        this.setState({
            type: 'text',
            error: null
        });
    }

    handleChangeText (e) {
        this.setState({
            text: e.target.value,
            error: null
        });
    }

    handleDragOver (e) {
        if (this.loadPromise) return;
        if (e.dataTransfer.types.includes('Files')) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        }
    }

    handleDragLeave () {

    }

    handleDrop (e) {
        if (this.loadPromise) return;
        const files = e.dataTransfer.files;
        if (files.length) {
            e.preventDefault();
            this.setState({
                type: 'file',
                files,
                error: null
            });
        }
    }

    render () {
        return (
            <CustomExtensionModalComponent
                canLoadExtension={this.hasValidInput()}
                error={this.state.error}
                loading={this.state.loading}
                type={this.state.type}
                onSwitchToFile={this.handleSwitchToFile}
                onSwitchToURL={this.handleSwitchToURL}
                onSwitchToText={this.handleSwitchToText}
                files={this.state.files}
                onChangeFiles={this.handleChangeFiles}
                onDragOver={this.handleDragOver}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                url={this.state.url}
                onChangeURL={this.handleChangeURL}
                onKeyDown={this.handleKeyDown}
                text={this.state.text}
                onChangeText={this.handleChangeText}
                onLoadExtension={this.handleLoadExtension}
                unsandboxed={this.state.unsandboxed}
                onChangeUnsandboxed={this.handleChangeUnsandboxed}
                onClose={this.handleClose}
            />
        );
    }
}

CustomExtensionModal.propTypes = {
    onClose: PropTypes.func,
    vm: PropTypes.shape({
        extensionManager: PropTypes.shape({
            loadExtensionURL: PropTypes.func
        })
    })
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(closeCustomExtensionModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomExtensionModal);

export {CustomExtensionModal};
