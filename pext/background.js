// Extend Context Menu
browser.menus.create({
    id: "download-video",
    title: "download-video",
    contexts: ["all"]
})

browser.menus.create({
    id: "download-images",
    title: "download-images",
    contexts: ["all"]
})

browser.menus.onClicked.addListener((info, tab) => {
    if ( info.menuItemId === "download-video" ){

        browser.tabs.executeScript(tab.id, {
            code: "console.log(document.querySelector('video'))"
        })

    }
})

// Extension Communication
// chrome.extension.onConnect.addListener(function(port) {
//     console.log("Connected .....");
//     port.onMessage.addListener(function(msg) {
//         console.log("message recieved " + msg);
//         port.postMessage("Hi Popup.js");
//     });
// });

console.log(document.URL)