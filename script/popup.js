const enableBtn = document.getElementById('enable-split');
const targetWeb = document.getElementById('target-web');

enableBtn.addEventListener('click',async () => {
    if (!targetWeb.value) {
        alert('请输入需要在当前窗口打开的网址');
    } else {
        const tabId = await getCurrentTabId();
        console.log(tabId);
        const connect = chrome.tabs.connect(tabId, {name: 'enable-split'});
        connect.postMessage(targetWeb.value);
    }
});

/**
 * 获取当前TabId
 * 
 * @returns 当前TabId
 */
function getCurrentTabId() {
    return new Promise((res, rej) => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            res(tabs.length ? tabs[0].id : null);
        })
    });
}