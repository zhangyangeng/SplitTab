// 插件安装好后给图标设置徽标
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({'text': 'x'});
});

const urls = "developer.chrome.com";

chrome.action.onClicked.addListener(async (tab) => {
    console.log(tab);
    if (tab.url.includes(urls)) {
        const prevState = await chrome.action.getBadgeText({tabId: tab.id});
        const nextState = prevState === 'x' ? '√' : 'x';
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });
    }
});