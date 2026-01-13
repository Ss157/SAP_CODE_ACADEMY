/*global QUnit*/

sap.ui.define([
	"code1/cl5/grid01/code1cl5grid01/controller/Edu10View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Edu10View Controller");

	QUnit.test("I should test the Edu10View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
