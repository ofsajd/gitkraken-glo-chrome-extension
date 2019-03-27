import axios from "axios";
import { setBoards, setCurrentBoard, removeSingleBoard, addSingleBoard, setLabels, setMembers, setColumns } from './../index';
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

export function receiveBoards(){
  return dispatch => {
    axios.get(`${base_url}/boards`, requestParams).then(response => {
      if(response.status === 200){
        dispatch(setBoards(response.data));
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

export function receiveBoard(id){
  return dispatch => {
    axios.get(`${base_url}/boards/${id}`, requestParams).then(response => {
      if(response.status === 200){
        dispatch(setCurrentBoard(response.data));
        dispatch(setColumns(response.data.columns))
        dispatch(setLabels(response.data.labels));
        dispatch(setMembers(response.data.members));
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

export function removeBoard(id){
  return dispatch => {
    axios.delete(`${base_url}/boards/${id}`, requestParams).then(response => {
      if(response.status === 204){
        dispatch(removeSingleBoard(id));
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

export function createBoard(name){
  return dispatch => {
    axios.post(`${base_url}/boards`, { name }, requestHeader).then(response => {
      if(response.status === 201){
        dispatch(addSingleBoard(response.data));
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


export function editBoard(id, name){
  return dispatch => {
    axios.post(`${base_url}/boards/${id}`, { name }, requestHeader).then(response => {
      if(response.status === 201){
        // dispatch(updateSingleBoard(response.data));
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