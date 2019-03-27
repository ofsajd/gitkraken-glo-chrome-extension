import { connect } from 'react-redux';
import { receiveBoards, removeBoard, createBoard, setCurrentBoard, setColumns, receiveBoard } from './../../redux/actions';
import BoardsListComponent from '../../components/BoardsList';

const mapStateToProps = (state) => {
  return {
    currentBoard: state.get('currentBoard'),
    boards: state.get('boards'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveBoards: () => {
      dispatch(receiveBoards());
    },
    selectBoard: board => {
      dispatch(receiveBoard(board.id));
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