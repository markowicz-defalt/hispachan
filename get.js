 var browser_data = [];
var languages = [];
var user_agent;
var browser;
var os;
var os_type;
var os_bit;
var device;
var device_type;
var timezone;
var language;
var screen_resolution;
var online;
var cookie_enabled;
var referer;
var IP;
function getBrowser() {
	"use strict";
	referer = (document.referer == undefined) ? 'N/A' : document.referer;
	device = (/Mobi/.test(navigator.userAgent) == true) ? "Mobile" : "Desktop";

	// Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    if(isOpera == true)
    {
    	browser = "Opera";
    }
    else if(isFirefox == true)
    {
    	browser = "FireFox";
    }
    else if(isSafari == true)
    {
    	browser = "Safari";
    }
    else if(isIE == true)
    {
    	browser = "Internet Explorer";
    }
    else if(isEdge == true)
    {
    	browser = "Microsoft Edge";
    }
    else if(isChrome == true)
    {
    	browser = "Chrome";
    }

	if(device == "Desktop")
	{
		if(/Windows/.test(navigator.userAgent) == true){
			os = "Windows";
			if(/5.1;/.test(navigator.userAgent) == true)
			{
				os = os + " XP";
			}
			else if(/6.0;/.test(navigator.userAgent) == true)
			{
				os = os + " Vista";
			}
			else if(/6.1;/.test(navigator.userAgent) == true)
			{
				os = os + " 7";
			}
			else if(/6.2/.test(navigator.userAgent) == true)
			{
				os = os + " 8";
			}
			else if(/10.0;/.test(navigator.userAgent) == true)
			{
				os = os + " 10";
			}

			if(/64/.test(navigator.userAgent) == true)
			{
				os = os + " 64-bit";
			}
			else
			{
				os = os +" 32-bit";
			}
		}
		else if(/Macintosh/.test(navigator.userAgent) == true)
		{
			os = "Macintosh";
			if(/OS X/.test(navigator.userAgent) == true)
			{
				os = os + ' OS X';
			}
		}
	}
	else if(device == "Mobile")
	{
		if(/Windows/.test(navigator.userAgent) == true){
			os = "Windows";
			if(/Phone 8.0/.test(navigator.userAgent) == true)
			{
				os = os + " Phone 8.0";
			}
			else if(/Phone 10.0/.test(navigator.userAgent) == true)
			{
				os = os + " Phone 10.0";
			}
		}
		else if(/Android/.test(navigator.userAgent) == true){
			function AndroidVersion() {
			    if (/Android/.test(navigator.appVersion)) {
			        var v = (navigator.appVersion).match(/Android (\d+).(\d+)/);
			        return v;
			    }
			}

			var ver = AndroidVersion();
			os = ver[0];
		}
		else if(/iPhone;/.test(navigator.userAgent) == true){
			function iOSversion() {
			    if (/iP(hone|od|ad)/.test(navigator.appVersion)) {
			        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
			        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
			    }
			}

			var ver = iOSversion();
			os = "iOS "+ver[0]+"."+ver[1]+"."+ver[2];
		}
		else if(/iPad;/.test(navigator.userAgent) == true){
			function iOSversion() {
			    if (/iP(hone|od|ad)/.test(navigator.appVersion)) {
			        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
			        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
			    }
			}

			var ver = iOSversion();
			os = "iOS "+ver[0]+"."+ver[1]+"."+ver[2];
		}
		else if(/BBd*/.test(navigator.userAgent) == true){
			os = "BlackBerry";
		}
	}


	
	browser_data = {
		language: navigator.language,
		languages: navigator.languages,
		user_agent: navigator.userAgent,
		browser: browser,
		device: device,
		referer: referer,
		os: os,
		online: navigator.onLine,
		timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		screen_resolution: screen.width+' x '+screen.height,
		cookie_enabled: navigator.cookieEnabled
	}
	return browser_data;
}


var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://ip-api.com/json');
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var IPdata = xhr.responseText;
            jsonResponse = JSON.parse(IPdata);
        }
    }
};
xhr.send(null);
