import {connect} from 'react-redux';

import {
    hideOnboarding,
    nextOnboardingStep,
    prevOnboardingStep,
    replayOnboarding
} from '../reducers/onboarding';
import {openSettingsMenu} from '../reducers/menus';

import OnboardingTutorial from '../components/onboarding/onboarding.jsx';

const mapStateToProps = state => ({
    visible: state.scratchGui.onboarding.visible,
    step: state.scratchGui.onboarding.step
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(hideOnboarding()),
    onNext: () => dispatch(nextOnboardingStep()),
    onPrev: () => dispatch(prevOnboardingStep()),
    onReplay: () => dispatch(replayOnboarding()),
    openSettingsMenu: () => dispatch(openSettingsMenu())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OnboardingTutorial);
