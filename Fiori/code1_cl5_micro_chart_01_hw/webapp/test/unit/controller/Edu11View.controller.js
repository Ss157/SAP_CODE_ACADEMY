/*global QUnit*/

sap.ui.define([
	"code1/cl5/microchart01hw/code1cl5microchart01hw/controller/Edu11View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Edu11View Controller");

	QUnit.test("I should test the Edu11View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
