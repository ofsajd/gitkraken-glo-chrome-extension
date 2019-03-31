import { connect } from 'react-redux';
import NewCardForm from '../../components/NewCard/Form';
import { createCard, setCurrentStep } from '../../redux/actions';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard').id,
    currentColumn: state.get('currentColumn').id,
    props,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    createCard: (data) => {
      dispatch(createCard(data));
    },
    goBack: () => {
      dispatch(setCurrentStep(props.prev));
    },
  }
}

const NewCardFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCardForm);

export default NewCardFormContainer;