import { connect } from 'react-redux';
import NewCardComponent from '../../components/NewCard';
import { setCurrentStep } from '../../redux/actions/index';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard'),
    currentColumn: state.get('currentrColumn'),
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

const NewCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCardComponent);

export default NewCardContainer;