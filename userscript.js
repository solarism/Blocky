// ==UserScript==
// @name         Blocky
// @namespace    https://github.com/qwgsr/Blocky
// @version      0.1
// @description  DET Website Blocking Userscript
// @author       solarism
// @match        http*://*/*
// @grant        none
// ==/UserScript==
if(window.location.protocol.indexOf("https") > -1){
    protocol = "https:"
} else {
    protocol = "http:"
}
var host = protocol+"//"+window.location.hostname
var url = window.location.href
if(url.indexOf("http://appserver.det.nsw.edu.au/bfp/action/blocksf?actionreason=by-category&") > -1){
    blocked = true;
} else {
    document.title = "403 Denied";
    window.open("http://appserver.det.nsw.edu.au/bfp/action/blocksf?actionreason=by-category&username=solarism&requestedurl="+host+"&categorydescriptionlist=none&pn=","_self");
}
