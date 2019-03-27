import { connect } from 'react-redux';
import NewCardComponent from '../../components/NewCard';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard'),
    currentColumn: state.get('currentrColumn'),
    props,
  }
}

const mapDispatchToProps = (dispatch) => {
  
}

const NewCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCardComponent);

export default NewCardContainer;