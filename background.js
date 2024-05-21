chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('ejemplo.com')) {
      chrome.tabs.executeScript(tabId, { file: 'content.js' });
    }
  });
  
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.remove('alertShown');
});
