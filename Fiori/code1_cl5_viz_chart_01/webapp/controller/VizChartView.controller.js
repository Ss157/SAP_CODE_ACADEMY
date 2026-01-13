sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code1.cl5.vizchart01.code1cl5vizchart01.controller.VizChartView", {
        onInit() 
        {
            let oData = {
                            donutSet : [
                                            {Car: 33, Label: "그랜져"},
                                            {Car: 12, Label: "소나타"},
                                            {Car: 55, Label: "제네시스"}
                                       ]
                        },
                oModel1 = new JSONModel("/data/val.json"),
                oModel2 = new JSONModel(oData);

            this.getView().setModel(oModel1);
            this.getView().setModel(oModel2, "car");
        }

    });
});