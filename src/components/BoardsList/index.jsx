import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemComponent from '../Common/ListItem';
import NewListItemComponent from '../Common/NewListItem';
import Board from '../../models/Board';
import { ListBox } from '../Common/styles';
import { Headline2 } from '../../styles/common/Headlines';
import { Header } from '../../styles/common/Header';
import { BackButton } from '../../styles/common/Buttons';

export default class BoardsListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount(){
    this.props.receiveBoards();
  }

  get content(){
    const { boards, selectBoard, removeBoard } = this.props;
    return boards.map((board, index) => {
      return (
        <ListItemComponent key={index} selectAction={selectBoard} removeAction={removeBoard} item={board} />
      )
    });
  }
  
  render() { 
    const { createBoard, prev, goBack } = this.props;
    const backButton = prev ? (<BackButton onClick={goBack}></BackButton>) : '';
    return ( 
      <ListBox>
        <Header>
          { backButton }
          <Headline2>Create or select board</Headline2>
        </Header>
        <NewListItemComponent createHandler={createBoard} placehodler="Enter board name" label="save" newItemLabel="Create new board" />
        { this.content }
      </ListBox>
     );
  }
}
 
BoardsListComponent.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.instanceOf(Board)),
  currentBoard: PropTypes.instanceOf(Board),
  selectBoard: PropTypes.func,
  createBoard: PropTypes.func,
}

BoardsListComponent.defaultProps = {
  boards: [],
  currentBoard: new Board(),
  selectBoard: () => {},
  createBoard: () => {},
}