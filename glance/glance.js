function glancePage(){
    console.log("injecting");
    browser.tabs.executeScript({
      file: "page-glancer.js"
      // runAt: "document_end"
    });
}

browser.browserAction.onClicked.addListener(glancePage);