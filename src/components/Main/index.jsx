/* global chrome */

import React, { Component } from 'react';
import { isProduction } from './../../helpers/env';
import SignInContainer from '../../containers/SignInContainer';
import NewCardContainer from '../../containers/NewCard';
import NewCommentContainer from '../../containers/NewComment';
import ScreenshotContainer from '../../containers/Screenshot';
import { App } from './styles/index';
import { Headline1 } from '../../styles/common/Headlines';

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
    ) : 'No component';
  }
  
  get content(){
    return this.props.authenticated ? (
      this.authenticatedContent
    ) : (
      <SignInContainer />
    )
  }

  render() { 
    return ( 
      <App>
        <Headline1>GitKraken Glo Chrome extension</Headline1>
        { this.content }
      </App>
     );
  }
}
 
export default MainComponent;