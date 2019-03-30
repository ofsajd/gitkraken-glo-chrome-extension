import { connect } from 'react-redux';
import { setCurrentCard, setCurrentStep } from './../../redux/actions';
import CardsListComponent from '../../components/CardsList';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard'),
    currentColumn: state.get('currentColumn'),
    currentCard: state.get('currentCard'),
    currentStep: state.get('currentStep'),
    cards: state.get('cards'),
    props,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    selectCard: (card) => {
      dispatch(setCurrentCard(card));
      if(props.next){
        dispatch(setCurrentStep(props.next));
      }
    }
  }
}

const CardsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsListComponent);

export default CardsListContainer;