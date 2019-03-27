import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoardsListContainer from '../../containers/BoardsList';
import ColumnsListContainer from '../../containers/ColumnsList';
import NewCardFormContainer from '../../containers/NewCard/Form';
import Board from './../../models/Board';
import Column from './../../models/Column';

export default class NewCard extends Component{
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
        <ColumnsListContainer />
        <NewCardFormContainer {...this.props} />
      </div>
    )
  }
}

NewCard.propTypes = {
  currentBoard: PropTypes.instanceOf(Board),
  currentColumn: PropTypes.instanceOf(Column),
  info: PropTypes.object,
}

NewCard.defaultTypes = {
  currentBoard: new Board(),
  currentColumn: new Column(),
  info: {},
}