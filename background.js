console.log('From background script');


chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        // console.log(current_tab_info.url);
        if (ValidURL(current_tab_info.url)) {
            console.log(current_tab_info.url);
            chrome.tabs.insertCSS(null, {file: 'style.css'});
//tabs, file, callback function
            chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('i injected'));

        }
    });
});


function ValidURL(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(str)) {
        return false;
    } else {
        return true;
    }
}