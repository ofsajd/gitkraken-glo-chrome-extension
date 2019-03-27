import axios from "axios";
import { base_url } from './../../../helpers/env';
import { setCards } from './../index';

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

export function createCard({boardId, name, description, columnId, assignees, labels, due_date}){
  const requestData ={
    name,
    description: {
      text: description
    },
    column_id: columnId,
    assignees,
    labels,
    due_date,
  };
  return dispatch => {
    axios.post(`${base_url}/boards/${boardId}/cards`, requestData , requestHeader).then(response => {
      if(response.status === 201){
        alert('Card has been added!')
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
