chrome.runtime.onConnect.addListener((res) => {
    if (res.name === 'enable-split') {
        res.onMessage.addListener((msg) => {
            document.write(`<html><head></head><frameset cols=\'50%25,*\'><frame src=` + msg + '><frame src=' + location.href + '></frameset ></html>')
        });
    }
});