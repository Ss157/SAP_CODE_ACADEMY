sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code1.cl5.microchart01hw.code1cl5microchart01hw.controller.Edu11View", {
        onInit() 
        {
            let oData = {
                            donutSet : [
                                            {Car: 33, Label: "그랜져"},
                                            {Car: 12, Label: "소나타"},
                                            {Car: 55, Label: "제네시스"}
                                       ]
                        },
                oModel = new JSONModel(oData),
                oModel2 = new JSONModel("/data/data.json");

            this.getView().setModel(oModel, "car");
            this.getView().setModel(oModel2);
        }
    });
});