import { connect } from 'react-redux';
import NewCardForm from '../../components/NewCard/Form';
import { createCard } from '../../redux/actions';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard').id,
    currentColumn: state.get('currentColumn').id,
    props,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCard: (data) => {
      dispatch(createCard(data));
    }
  }
}

const NewCardFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCardForm);

export default NewCardFormContainer;