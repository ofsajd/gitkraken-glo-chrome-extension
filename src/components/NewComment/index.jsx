import React, { Component, Fragment } from 'react';
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

  componentDidMount(){
    const { setCurrentStep } = this.props;
    setCurrentStep('boardsList');
  }

  get renderComponent(){
    const { currentStep } = this.props;
    return typeof(this[currentStep]) != 'undefined' ? this[currentStep] : this.boardsList;
  }

  get boardsList(){
    return <BoardsListContainer next="columnsList" />
  }

  get columnsList(){
    return <ColumnsListContainer withCardsReceive={true}  next="cardsList" prev="boardsList"  />
  }

  get cardsList(){
    return <CardsListContainer next="newCommentForm" prev="columnsList" />
  }

  get newCommentForm(){
    return <NewCommentFormContainer prev="cardsList" {...this.props} />
  }

  render(){
    return (
      <Fragment>
        { this.renderComponent }
      </Fragment>
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