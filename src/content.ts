chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
    if (request.action === "getTitle") {
        sendResponse({ title: document.title });
    }
});
