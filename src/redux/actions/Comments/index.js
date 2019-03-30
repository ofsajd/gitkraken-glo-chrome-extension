import axios from "axios";
import { base_url } from './../../../helpers/env';
import { setSuccess } from "..";

const requestParams = {
  params: {
    fields: ['board_id', 'card_id', 'created_date', 'created_by', 'updated_by', 'updated_date', 'text'],
    archived: false,
    per_page: 200,
    access_token: localStorage.getItem('access_token'),
  }
}

const requestHeader = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
}

export function receiveCommentsFromCard(board_id, card_id){
  return dispatch => {
    axios.get(`${base_url}/boards/${board_id}/cards/${card_id}/comments`, requestParams).then(response => {
      if(response.status === 200){
        console.log(response.data);
        // dispatch(setCards(response.data));
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

export function createComment({board_id, card_id, description}){
  const requestData ={
    text: description
  };
  return dispatch => {
    axios.post(`${base_url}/boards/${board_id}/cards/${card_id}/comments`, requestData , requestHeader).then(response => {
      if(response.status === 201){
        dispatch(setSuccess());
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
