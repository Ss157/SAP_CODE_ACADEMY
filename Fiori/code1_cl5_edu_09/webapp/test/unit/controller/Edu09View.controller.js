/*global QUnit*/

sap.ui.define([
	"code1/cl5/edu09/codecl5edu09/controller/Edu09View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Edu09View Controller");

	QUnit.test("I should test the Edu09View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
