﻿/*HKing 2016-03-10*/
const  url="www.baidu.com";
chrome.browserAction.onClicked.addListener((tab) =>{
	chrome.tabs.getAllInWindow(null, fuckBat = tabs =>{
		for(var t of tabs){
			if (t.url.match(url)) {
				fuckBat.bTab = true;
				chrome.tabs.update(t.id, {selected:true});
				break;
			}
		}
		!fuckBat.bTab && chrome.tabs.create({"url":`https://${url}`, "selected":true});
	});
});
