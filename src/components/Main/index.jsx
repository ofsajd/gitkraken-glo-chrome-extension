/* global chrome */

import React, { Component } from 'react';
import { isProduction } from './../../helpers/env';
import SignInContainer from '../../containers/SignInContainer';
import NewCardContainer from '../../containers/NewCard';
import NewCommentContainer from '../../containers/NewComment';
import ScreenshotContainer from '../../containers/Screenshot';
import { App } from './styles/index';
import { Headline1 } from '../../styles/common/Headlines';
import PopupComponent from '../Common/Popup';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mode: '',
      info: {},
    }
    this.handleBackgroundMessage = this.handleBackgroundMessage.bind(this);
  }

  componentDidMount(){
    this.props.loadToken();
    if(isProduction){
      chrome.runtime.onMessage.addListener(this.handleBackgroundMessage);
    }
  }
  
  handleBackgroundMessage(info){
    if(this.props.authenticated){
      this.setState({
        mode: info.menuItemId,
        info,
      });
    }
  }

  get newCard(){
    return <NewCardContainer info={this.state.info} />;
  }

  get newComment(){
    return <NewCommentContainer info={this.state.info} />;
  }

  get screenshot(){
    return <ScreenshotContainer info={this.state.info} />;
  }

  get authenticatedContent(){
    return this.state.mode && this[this.state.mode] ? (
      this[this.state.mode]
    ) : this.newCard;
  }
  
  get content(){
    return this.props.authenticated ? (
      this.authenticatedContent
    ) : (
      <SignInContainer />
    )
  }

  render() { 
    const { success } = this.props;
    return ( 
      <App>
        <PopupComponent visible={success} />
        { this.content }
      </App>
     );
  }
}
 
export default MainComponent;