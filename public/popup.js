/* global chrome  */

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('newCard').addEventListener('click', newCard);  
  document.getElementById('newComment').addEventListener('click', newComment);  
  document.getElementById('screenshot').addEventListener('click', screenshot);  
});

function newCard(){
  chrome.runtime.sendMessage({newCard: true});
}
function newComment(){
  chrome.runtime.sendMessage({newComment: true});
}
function screenshot(){
  chrome.runtime.sendMessage({screenshot: true});
}