import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemComponent from '../Common/ListItem';
import NewBoardComponent from './../Common/NewListItem';
import Column from '../../models/Column';
import Board from '../../models/Board';

export default class ColumnsListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(column){
    const { selectColumn, selectColumnAndReceiveCards, withCardsReceive, currentBoard } = this.props;
    if(withCardsReceive){
      selectColumnAndReceiveCards(currentBoard, column);
    }else{
      selectColumn(column);
    }
  }

  get content(){
    const { columns } = this.props;
    return columns.map((column, index) => {
      return (
        <ListItemComponent key={index} selectAction={this.handleSelect} item={column} />
      )
    });
  }

  createColumn(name){
    console.log(name);
  }

  render() { 
    const { createColumn } = this.props;
    return ( 
      <div>
        <h1>Columns</h1>
        <NewBoardComponent createHandler={createColumn} />
        { this.content }
      </div>
     );
  }
}
 
ColumnsListComponent.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.instanceOf(Column)),
  currentColumn: PropTypes.instanceOf(Column),
  currentBoard: PropTypes.instanceOf(Board),
  selectColumn: PropTypes.func,
  createColumn: PropTypes.func,
  selectColumnAndReceiveCards: PropTypes.func,
  withCardsReceive: PropTypes.bool,
}

ColumnsListComponent.defaultProps = {
  columns: [],
  currentColumn: new Column(),
  currentBoard: new Board(),
  selectColumn: () => {},
  createColumn: () => {},
  selectColumnAndReceiveCards: () => {},
  withCardsReceive: false,
}