import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoardsListContainer from '../../containers/BoardsList';
import ColumnsListContainer from '../../containers/ColumnsList';
import NewCommentFormContainer from '../../containers/NewComment/Form';
import Board from './../../models/Board';
import Column from './../../models/Column';
import CardsListContainer from '../../containers/CardsList';

export default class NewComment extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    console.log("NEWCAR.PROPS", this.props);
    return (
      <div>
        <BoardsListContainer />
        <ColumnsListContainer withCardsReceive={true} />
        <CardsListContainer />
        <NewCommentFormContainer {...this.props} />
      </div>
    )
  }
}

NewComment.propTypes = {
  currentBoard: PropTypes.instanceOf(Board),
  currentColumn: PropTypes.instanceOf(Column),
  info: PropTypes.object,
}

NewComment.defaultTypes = {
  currentBoard: new Board(),
  currentColumn: new Column(),
  info: {},
}