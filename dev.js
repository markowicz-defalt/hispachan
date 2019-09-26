var browserTests = [
        "audio",
        "availableScreenResolution",
        "canvas",
        "colorDepth",
        "cookies",
        "cpuClass",
        "deviceDpi",
        "doNotTrack",
        "indexedDb",
        "installedFonts",
        //"installedLanguages",
        "language",
        "localIp",
        "localStorage",
        "pixelRatio",
        "platform",
        "plugins",
        "processorCores",
        "screenResolution",
        "sessionStorage",
        "timezoneOffset",
        "touchSupport",
        "userAgent",
        "webGl"
      ];

    imprint.test(browserTests).then(function(result){
      document.getElementById("browser").innerHTML = result;
    });

    var deviceTests = [
        "audio",
        "colorDepth",
        "cpuClass",
        "deviceDpi",
        "localIp",
        "platform",
        "installedFonts",
        "processorCores",
        "publicIp",
        "screenResolution",
        "timezoneOffset"
      ];

    imprint.test(deviceTests).then(function(result){
      document.getElementById("device").innerHTML = result;
    });
    var info = getBrowser()
    Object.keys(info).forEach(function(key) {
	  document.querySelector('code').innerHTML += key + ': ' + info[key] + '<br>'
	})
    console.log(JSON.stringify(info))
    let http = new XMLHttpRequest()
    http.onreadystatechange = () => {
    	if(http.readyState == 4 && http.status == 200) {
    		let xhttp = JSON.parse(http.responseText)
            Object.keys(xhttp).forEach(function(key) {
    		  document.querySelector('.codeIP').innerHTML +=  key + ': ' + xhttp[key] + '<br>'
            })
    	}
    }

    http.open('GET', 'http://ip-api.com/json', true)
    http.send()

    window.onbeforeunload = preguntarAntesDeSalir;
	function preguntarAntesDeSalir(){
		return "¿Seguro que quieres salir?";
	}