/* global chrome */

var scope = 'board:write board:read user:write user:read';
var redirectUri = chrome.identity.getRedirectURL("oauth2");     

chrome.runtime.onMessage.addListener(async request => {
  if(request.authenticate && request.client_id && request.client_secret){
    var auth_url = "https://app.gitkraken.com/oauth/authorize?client_id=" + request.client_id + "&client_secret=" + request.client_secret + "&scope=" + scope + "&redirect_uri=" + redirectUri + "&response_type=code";
    chrome.identity.launchWebAuthFlow({'url': auth_url,'interactive':true}, function(redirect_url){
      const code = new URL(redirect_url).searchParams.get('code');
      chrome.runtime.sendMessage({code: code});
    });
    return true;
  }

  chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
  }, function(tabs) {
    var tab = tabs[0];
    if(request.newCard){
      const info = {
        menuItemId: 'newCard',
        pageUrl: tab.url,
      }
      openPopup(info);
    }
    if(request.newComment){
      const info = {
        menuItemId: 'newComment',
        pageUrl: tab.url,
      }
      openPopup(info);
    }
    if(request.screenshot){
      const info = {
        menuItemId: 'screenshot',
        pageUrl: tab.url,
      }
      takeScreenshot(info);
    }
  });
    
});


function openPopup(info){
  var win = window.open("index.html", "extension_popup", "width=600,height=600,status=no,scrollbars=yes,resizable=no");
  win.onload = function() {
    chrome.runtime.sendMessage(info);
  }
  // chrome.tabs.create({'url': chrome.extension.getURL('index.html')}, function(createdTab){
  //   chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, updatedTab) {
  //     if (createdTab.id === tabId && changeInfo.status == 'complete') {
  //       chrome.runtime.sendMessage(info);
  //     }
  //  });
  // });
}

function takeScreenshot(info){
  chrome.tabs.query({
    active: true, 
    currentWindow: true 
  },
  function (tabs) {
    chrome.tabs.captureVisibleTab(chrome.windows.WINDOW_ID_CURRENT, {}, function (image) {
      var win = window.open("index.html", "extension_popup", "width=600,height=600,status=no,scrollbars=yes,resizable=no");
      win.onload = function() {
        info.image = image;
        chrome.runtime.sendMessage(info);
      }
    });
  });
}

chrome.contextMenus.create({
  title: "GitKraken GLO",
  id: "mainMenu",
  contexts: ["selection", "page", "link", "image"]
});
chrome.contextMenus.create({
  title: "Create new card",
  id: "newCard",
  parentId: "mainMenu",
  contexts: ["selection", "page", "link", "image"],
  onclick: openPopup
});
chrome.contextMenus.create({
  title: "Create new comment",
  id: "newComment",
  parentId: "mainMenu",
  contexts: ["selection", "page", "link", "image"],
  onclick: openPopup
});
chrome.contextMenus.create({
  title: "Take screenshot",
  id: "screenshot",
  parentId: "mainMenu",
  contexts: ["all"],
  onclick: takeScreenshot
});