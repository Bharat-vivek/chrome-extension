document.getElementById('fetchTitleBtn').addEventListener('click', () => {
    // Query the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let tab = tabs[0];
        // Display the tab's title in the popup
        document.getElementById('tabTitle').textContent = `Title: ${tab.title}`;
    });
});
