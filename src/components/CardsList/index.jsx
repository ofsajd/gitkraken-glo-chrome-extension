import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemComponent from '../Common/ListItem';
import Card from '../../models/Card';
import Column from '../../models/Column';
import Board from '../../models/Board';
import { ListBox } from '../Common/styles/index';
import { Headline2 } from '../../styles/common/Headlines';

export default class CardsListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  get content(){
    const { cards, selectCard } = this.props;
    return cards.map((card, index) => {
      return (
        <ListItemComponent key={index} selectAction={selectCard} item={card} />
      )
    });
  }

  render() { 
    return ( 
      <ListBox>
        <Headline2>cards</Headline2>
        { this.content }
      </ListBox>
     );
  }
}
 
CardsListComponent.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.instanceOf(Card)),
  currentCard: PropTypes.instanceOf(Card),
  currentColumn: PropTypes.instanceOf(Column),
  currentBoard: PropTypes.instanceOf(Board),
  selectCard: PropTypes.func,
  receiveCardsFromColumns: PropTypes.func,
}

CardsListComponent.defaultProps = {
  cards: [],
  currentCard: new Card(),
  currentColumn: new Column(),
  currentBoard: new Board(),
  selectCard: () => {},
  receiveCardsFromColumns: () => {},
}