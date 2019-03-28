import axios from "axios";
import { base_url } from './../../../helpers/env';
import { setCards, createComment } from './../index';

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

function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);
    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

export function saveAttachment({board_id, card_id, file}){
  const formData = new FormData();
  console.log(file);
  formData.append('file', b64toBlob(file, "image/png"));
  return dispatch => {
    axios.post(`${base_url}/boards/${board_id}/cards/${card_id}/attachments`, formData , requestHeader).then(response => {
      if(response.status === 201){
        console.log(response.data);
        dispatch(createComment({board_id, card_id, description: `![Screenshot](${response.data.url}) \n`}))
        alert('Attachment has been added!')
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
