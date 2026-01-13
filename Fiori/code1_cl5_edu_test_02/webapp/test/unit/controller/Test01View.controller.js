/*global QUnit*/

sap.ui.define([
	"code1/cl5/edu/test02/code1cl5edutest02/controller/Test01View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Test01View Controller");

	QUnit.test("I should test the Test01View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
