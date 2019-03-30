import { connect } from 'react-redux';
import { saveAttachment, setCurrentStep } from '../../redux/actions';
import ScreenshotComponent from '../../components/Screenshot';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard'),
    currentColumn: state.get('currentrColumn'),
    currentCard: state.get('currentCard'),
    currentStep: state.get('currentStep'),
    props,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentStep: (stepName) => {
      dispatch(setCurrentStep(stepName));
    }
  }
}

const ScreenshotContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScreenshotComponent);

export default ScreenshotContainer;