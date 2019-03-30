import { connect } from 'react-redux';
import { receiveBoards, removeBoard, createBoard, setCurrentStep, receiveBoard } from './../../redux/actions';
import BoardsListComponent from '../../components/BoardsList';

const mapStateToProps = (state) => {
  return {
    currentBoard: state.get('currentBoard'),
    currentStep: state.get('currentStep'),
    boards: state.get('boards'),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    receiveBoards: () => {
      dispatch(receiveBoards());
    },
    selectBoard: board => {
      dispatch(receiveBoard(board.id));
      if(props.next){
        dispatch(setCurrentStep(props.next));
      }
    },
    removeBoard: board => {
      dispatch(removeBoard(board.id));
    },
    createBoard: name => {
      dispatch(createBoard(name));
    }
  }
}

const BoardsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardsListComponent);

export default BoardsListContainer;