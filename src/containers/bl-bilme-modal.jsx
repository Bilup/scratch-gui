import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {injectIntl} from 'react-intl';

import BilmeModalComponent from '../components/bl-bilme/bilme-modal.jsx';
import {closeBilmeModal} from '../reducers/modals';
import {setTheme} from '../reducers/theme';
import {CustomTheme, customThemeManager} from '../lib/themes/custom-themes.js';
import {applyTheme} from '../lib/themes/themePersistance.js';
import {getRoturSessionApi} from '../lib/rotur/session-api.js';

class BilmeModal extends React.Component {
    constructor (props) {
        super(props);
        this.handleThemeApply = this.handleThemeApply.bind(this);
        this.handleThemeSave = this.handleThemeSave.bind(this);
        this.handleRoturLogin = this.handleRoturLogin.bind(this);
    }

    handleRoturLogin () {
        const session = getRoturSessionApi();
        if (session) return session.login();
        return Promise.reject(new Error('Rotur is still starting. Try again in a moment.'));
    }

    parseExport (themeData) {
        if (!themeData || !themeData.themes || themeData.themes.length === 0) {
            throw new Error('Invalid theme data format');
        }
        return themeData;
    }

    handleThemeApply (themeData) {
        const data = this.parseExport(themeData);
        const mistwarpTheme = CustomTheme.import(data.themes[0]);
        this.props.onSetTheme(mistwarpTheme);
        applyTheme(mistwarpTheme);
    }

    handleThemeSave (themeData, meta = {}) {
        const data = this.parseExport(themeData);
        return customThemeManager.addFromExportData(data, meta);
    }

    render () {
        if (!this.props.visible) return null;
        return (
            <BilmeModalComponent
                currentTheme={this.props.currentTheme}
                onClose={this.props.onClose}
                onRoturLogin={this.handleRoturLogin}
                onThemeApply={this.handleThemeApply}
                onThemeSave={this.handleThemeSave}
                roturUsername={this.props.roturUsername}
            />
        );
    }
}

BilmeModal.propTypes = {
    currentTheme: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onSetTheme: PropTypes.func.isRequired,
    roturUsername: PropTypes.string,
    visible: PropTypes.bool
};

const mapStateToProps = state => ({
    currentTheme: state.scratchGui.theme.theme,
    roturUsername: state.scratchGui.rotur.username,
    visible: state.scratchGui.modals.bilmeModal
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(closeBilmeModal()),
    onSetTheme: theme => dispatch(setTheme(theme))
});

export default compose(
    injectIntl,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(BilmeModal);