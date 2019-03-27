import { connect } from 'react-redux';
import { setCurrentCard } from './../../redux/actions';
import CardsListComponent from '../../components/CardsList';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard'),
    currentColumn: state.get('currentColumn'),
    currentCard: state.get('currentCard'),
    cards: state.get('cards'),
    props,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCard: (card) => {
      dispatch(setCurrentCard(card));
    }
  }
}

const CardsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsListComponent);

export default CardsListContainer;