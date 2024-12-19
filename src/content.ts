chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
    // Getting page's title
    if (request.action === "getTitle") {
        sendResponse({ title: document.title });
    }

    // Getting all headings
    if (request.action === "getHeadings") {
        const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"))
            .map((heading) => ({
                text: heading.textContent?.trim() || "Sans texte",
                tag: heading.tagName,
            }));

        sendResponse({ headings });
    }
});
