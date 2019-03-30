/* global chrome */

import React, { Component } from 'react';
import { isProduction, client_id, client_secret } from './../../helpers/env';
import PropTypes from 'prop-types';

import logo from './../../logo.svg';
import { Button } from '../../styles/common/Buttons';

export default class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.authenticate = this.authenticate.bind(this);
  }

  componentDidMount(){
    if(isProduction){
      chrome.runtime.onMessage.addListener((data) => {
        if(typeof(data.code) != 'undefined'){
          this.props.receiveToken(data.code);
        }
      });
    }
  }

  async authenticate(){
    if(isProduction){
      chrome.runtime.sendMessage({authenticate: true, client_id: client_id, client_secret});
    }
  }

  render() { 
    return ( 
      <Button onClick={this.authenticate}>
        Sign in
      </Button>
     );
  }
}

SignInComponent.propTypes = {
  receiveToken: PropTypes.func,
}

SignInComponent.defaultProps = {
  receiveToken: () => {},
}