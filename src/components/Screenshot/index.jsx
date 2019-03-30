import React, { Component, Fragment } from 'react';
import BoardsListContainer from '../../containers/BoardsList';
import CardsListContainer from '../../containers/CardsList';
import ColumnsListContainer from '../../containers/ColumnsList';
import ScreenshotFormContainer from '../../containers/Screenshot/Form';

class ScreenshotComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
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
    return <CardsListContainer next="screenshotForm" prev="columnsList" />
  }

  get screenshotForm(){
    return <ScreenshotFormContainer prev="cardsList" {...this.props} />
  }
  
  render() { 
    return (
      <Fragment>
        { this.renderComponent }
      </Fragment>
    )
  }
}
 
export default ScreenshotComponent;