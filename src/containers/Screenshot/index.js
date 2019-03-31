import { connect } from 'react-redux';
import { setCurrentStep } from '../../redux/actions';
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    setCurrentStep: (name) => {
      dispatch(setCurrentStep(name));
    },
    goBack: () => {
      dispatch(setCurrentStep(props.prev));
    },
  }
}

const ScreenshotContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScreenshotComponent);

export default ScreenshotContainer;