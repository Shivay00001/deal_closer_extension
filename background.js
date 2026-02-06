chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "open_panel") {
    chrome.sidePanel.open({ windowId: sender.tab.windowId });
  }
});
