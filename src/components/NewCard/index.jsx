import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BoardsListContainer from '../../containers/BoardsList';
import ColumnsListContainer from '../../containers/ColumnsList';
import NewCardFormContainer from '../../containers/NewCard/Form';
import Board from './../../models/Board';
import Column from './../../models/Column';

export default class NewCard extends Component{
  constructor(props){
    super(props);
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
    return <ColumnsListContainer next="newCardForm" prev="boardsList"  />
  }

  get newCardForm(){
    return <NewCardFormContainer prev="boardsList" {...this.props} />
  }

  render(){
    console.log("NEWCAR.PROPS", this.props);
    return (
      <Fragment>
        { this.renderComponent }
      </Fragment>
    )
  }
}

NewCard.propTypes = {
  currentBoard: PropTypes.instanceOf(Board),
  currentColumn: PropTypes.instanceOf(Column),
  currentStep: PropTypes.string,
  info: PropTypes.object,
}

NewCard.defaultTypes = {
  currentBoard: new Board(),
  currentColumn: new Column(),
  currentStep: '',
  info: {},
}