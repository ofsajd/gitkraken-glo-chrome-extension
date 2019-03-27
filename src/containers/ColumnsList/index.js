import { connect } from 'react-redux';
import { setCurrentColumn, receiveCardsFromColumn } from './../../redux/actions';
import ColumnsListComponent from '../../components/ColumnsList';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard'),
    currentColumn: state.get('currentColumn'),
    columns: state.get('columns'),
    props,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    selectColumn: (column) => {
      dispatch(setCurrentColumn(column));
    },
    selectColumnAndReceiveCards: (board, column) => {
      dispatch(setCurrentColumn(column));
      dispatch(receiveCardsFromColumn(board.id, column.id))
    }
  }
}

const ColumnsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnsListComponent);

export default ColumnsListContainer;