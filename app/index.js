var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryApp = '93641'
var sentryKey = 'd9dafc8d8df44396b461d609766b004b'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
	name: 'Github Battle',
	branch: 'video4',
	version: '1.0'
}

//on app error, show raven report dialog
window.onerror = function () {
	Raven.showReportDialog();
}

Raven.config(sentryURL, {
	release: _APP_INFO.version,
	tags: {
		branch: _APP_INFO.branch,
	}
}).install()

ReactDOM.render(routes, document.getElementById('app'));
