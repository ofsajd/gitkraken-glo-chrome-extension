import { connect } from 'react-redux';
import NewCommentComponent from '../../components/NewComment';
import { setCurrentStep } from '../../redux/actions/index';

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

const NewCommentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCommentComponent);

export default NewCommentContainer;