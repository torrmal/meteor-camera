
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;
// chrome 19 shim
window.userMediaVideoSelector = {video : true};
if (window.navigator.appVersion.match(/Chrome\/(.*?) /)) {
	var chromeVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
	if (chromeVersion < 20) {
		window.userMediaVideoSelector = "video";
	}
};

// opera shim
if (window.opera) {
	window.URL = window.URL || {};
	if (!window.URL.createObjectURL) window.URL.createObjectURL = function(obj) {return obj;};
}
