/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/bootcamp/sapui5/smartapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
