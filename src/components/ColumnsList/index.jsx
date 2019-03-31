import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemComponent from '../Common/ListItem';
import NewListItemComponent from './../Common/NewListItem';
import Column from '../../models/Column';
import Board from '../../models/Board';
import { ListBox } from '../Common/styles/index';
import { Headline2 } from '../../styles/common/Headlines';
import { BackButton } from '../../styles/common/Buttons';
import { Header } from '../../styles/common/Header';

export default class ColumnsListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleSelect = this.handleSelect.bind(this);
    this.createColumn = this.createColumn.bind(this);
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
    const { createColumn, currentBoard } = this.props;
    createColumn(name, currentBoard.id);
  }

  render() { 
    const { prev, goBack  } = this.props;
    const backButton = prev ? (<BackButton onClick={goBack}></BackButton>) : '';
    return ( 
      <ListBox>
        <Header>
          { backButton }
          <Headline2>Create or select column</Headline2>
        </Header>
        <NewListItemComponent createHandler={this.createColumn} plceholder="Enter column name" label="Save"  newItemLabel="Create new column" />
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