import { connect } from 'react-redux';
import { setCurrentColumn, receiveCardsFromColumn, setCurrentStep } from './../../redux/actions';
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
    selectColumnAndReceiveCards: (board, column) => {
      dispatch(setCurrentColumn(column));
      dispatch(receiveCardsFromColumn(board.id, column.id));
      if(props.next){
        dispatch(setCurrentStep(props.next));
      }
    }
  }
}

const ColumnsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnsListComponent);

export default ColumnsListContainer;