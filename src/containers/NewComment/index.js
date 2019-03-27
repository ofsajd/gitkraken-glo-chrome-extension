import { connect } from 'react-redux';
import NewCommentComponent from '../../components/NewComment';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard'),
    currentColumn: state.get('currentrColumn'),
    currentCard: state.get('currentCard'),
    props,
  }
}

const mapDispatchToProps = (dispatch) => {
  
}

const NewCommentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCommentComponent);

export default NewCommentContainer;