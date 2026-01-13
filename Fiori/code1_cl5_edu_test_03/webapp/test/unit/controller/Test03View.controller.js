/*global QUnit*/

sap.ui.define([
	"code1/cl5/edu/test03/code1cl5edutest03/controller/Test03View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Test03View Controller");

	QUnit.test("I should test the Test03View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
