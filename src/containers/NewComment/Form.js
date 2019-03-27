import { connect } from 'react-redux';
import NewCommentForm from '../../components/NewComment/Form';
import { createComment } from '../../redux/actions';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard').id,
    currentColumn: state.get('currentColumn').id,
    currentCard: state.get('currentCard').id,
    props,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (data) => {
      dispatch(createComment(data));
    }
  }
}

const NewCommentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCommentForm);

export default NewCommentFormContainer;