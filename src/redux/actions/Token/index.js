/* global chrome */

import axios from 'axios';
import { client_id, client_secret } from './../../../helpers/env';
import {login, logout} from './../index';
export function receiveToken(code){
  return dispatch => {
    axios.post('https://api.gitkraken.com/oauth/access_token', {
      grant_type: 'authorization_code',
      client_id: client_id,
      client_secret: client_secret,
      code: code,
    }).then(response => {
      dispatch(saveToken(response.data.access_token, response.data.token_type));
      dispatch(login());
    }).catch(error => {
      dispatch(logout());
      console.error(error);
    })
  }
}

export function loadToken(){
  return dispatch => {
    const token = localStorage.getItem('access_token');
    if(typeof(token) != 'undefined' && token){
      dispatch(login());
    };
  }
}

export function saveToken(access_token, token_type){
  return dispatch => {
    localStorage.setItem('access_token', access_token);
  }
}