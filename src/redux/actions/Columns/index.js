import axios from "axios";
import { addSingleColumn } from './../index';
import { base_url } from './../../../helpers/env';

const requestParams = {
  params: {
    fields: ['columns','created_by','created_date','invited_members','labels','members','name'],
    archived: false,
    access_token: localStorage.getItem('access_token'),
  }
}

const requestHeader = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
}

export function createColumn(name, board_id){
  return dispatch => {
    axios.post(`${base_url}/boards/${board_id}/columns`, { name }, requestHeader).then(response => {
      if(response.status === 201){
        dispatch(addSingleColumn(response.data));
      }else{
        console.error(response.data.message);
      }
    }).catch(error => {
      console.error(error);
    }).then(_ => {
      console.log('close');
    });
  }
}