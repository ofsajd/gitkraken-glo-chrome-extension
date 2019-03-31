import { connect } from 'react-redux';
import { setCurrentColumn, receiveCardsFromColumn, setCurrentStep, createColumn } from './../../redux/actions';
import ColumnsListComponent from '../../components/ColumnsList';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard'),
    currentColumn: state.get('currentColumn'),
    currentStep: state.get('currentStep'),
    columns: state.get('columns'),
    props,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    selectColumn: (column) => {
      dispatch(setCurrentColumn(column));
      if(props.next){
        dispatch(setCurrentStep(props.next));
      }
    },
    goBack: () => {
      dispatch(setCurrentStep(props.prev));
    },
    selectColumnAndReceiveCards: (board, column) => {
      dispatch(setCurrentColumn(column));
      dispatch(receiveCardsFromColumn(board.id, column.id));
      if(props.next){
        dispatch(setCurrentStep(props.next));
      }
    },
    createColumn: (name, board_id) => {
      console.log(name, board_id);
      dispatch(createColumn(name, board_id));
    }
  }
}

const ColumnsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnsListComponent);

export default ColumnsListContainer;