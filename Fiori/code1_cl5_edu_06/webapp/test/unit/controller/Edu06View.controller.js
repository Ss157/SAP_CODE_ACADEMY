/*global QUnit*/

sap.ui.define([
	"code1/cl5/edu06/code1cl5edu06/controller/Edu06View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Edu06View Controller");

	QUnit.test("I should test the Edu06View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
