import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemComponent from '../Common/ListItem';
import NewListItemComponent from './../Common/NewListItem';
import Column from '../../models/Column';
import Board from '../../models/Board';
import { ListBox } from '../Common/styles/index';
import { Headline2 } from '../../styles/common/Headlines';

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
      <ListBox>
        <Headline2>Create or select column</Headline2>
        <NewListItemComponent createHandler={createColumn} plceholder="Enter column name" label="Save" />
        { this.content }
      </ListBox>
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