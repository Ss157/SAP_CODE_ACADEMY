sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code1.cl5.edu06.code1cl5edu06.controller.Edu06View", {
        onInit() 
        {
            let oData1 = {
                            gs_button: {
                                            text   : "체크버튼",
                                            icon   : "sap-icon://paper-plane",
                                            enabled: false
                                       },
                            gs_text: {
                                        text : "JSON 연습",
                                        width: "40em",
                                        align: "Center"
                                     }
                         },
                oData2 = {
                            gs_input: {
                                        place: "입력창",
                                        width: "20em",
                                        desc : "ID 입력"
                                      }
                         },
                oData3 = {
                            gs_label: {
                                        text  : "JSON 통한 Label",
                                        width : "20em",
                                        design: "Bold"
                                      }
                         },
                oModel1 = new JSONModel(oData1),
                oModel2 = new JSONModel(oData2),
                oModel3 = new JSONModel(oData3);
            
            this.getView().setModel(oModel1);
            this.getView().setModel(oModel2, "Input"); //"Input"가 없다면 oModel1이 없어짐
            this.getView().setModel(oModel3, "Label");
        }


    });
});