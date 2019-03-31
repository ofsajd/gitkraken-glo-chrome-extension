import { connect } from 'react-redux';
import NewCommentForm from '../../components/NewComment/Form';
import { createComment, setCurrentStep } from '../../redux/actions';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard').id,
    currentColumn: state.get('currentColumn').id,
    currentCard: state.get('currentCard').id,
    props,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    createComment: (data) => {
      dispatch(createComment(data));
    },
    goBack: () => {
      dispatch(setCurrentStep(props.prev));
    },
  }
}

const NewCommentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCommentForm);

export default NewCommentFormContainer;