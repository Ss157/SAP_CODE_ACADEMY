/*global QUnit*/

sap.ui.define([
	"code1/cl5/edu01hw/code1cl5grid01hw/controller/Grid01View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Grid01View Controller");

	QUnit.test("I should test the Grid01View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
