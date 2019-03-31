import axios from "axios";
import { base_url } from './../../../helpers/env';
import { setCards, setSuccess } from './../index';

const requestParams = {
  params: {
    fields: ['assignees','due_date','description','labels','name','members'],
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

export function receiveCardsFromColumn(board_id, column_id){
  return dispatch => {
    axios.get(`${base_url}/boards/${board_id}/columns/${column_id}/cards`, requestParams).then(response => {
      if(response.status === 200){
        dispatch(setCards(response.data));
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

export function createCard({board_id, name, description, column_id, assignees, labels, due_date}){
  const requestData ={
    name,
    description: {
      text: description
    },
    column_id: column_id,
    assignees,
    labels,
    due_date,
  };
  return dispatch => {
    axios.post(`${base_url}/boards/${board_id}/cards`, requestData , requestHeader).then(response => {
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
