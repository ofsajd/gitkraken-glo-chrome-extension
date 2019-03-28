import React, { Component } from 'react';
import BoardsListContainer from '../../containers/BoardsList';
import CardsListContainer from '../../containers/CardsList';
import ColumnsListContainer from '../../containers/ColumnsList';
import ScreenshotFormContainer from '../../containers/Screenshot/Form';

class ScreenshotComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  
  render() { 
    return ( 
      <div>
        <BoardsListContainer />
        <ColumnsListContainer withCardsReceive={true} />
        <CardsListContainer />
        <ScreenshotFormContainer {...this.props} />
      </div>
     );
  }
}
 
export default ScreenshotComponent;