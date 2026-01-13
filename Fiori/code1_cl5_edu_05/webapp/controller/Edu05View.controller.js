sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code1.cl5.edu05.code1cl5edu05.controller.Edu05View", {
        onInit() 
        {
            //먼저 JSON 형태의 data를 구성
            let oData = {
                            text    : "세이 헬로",
                            place   : "월드",
                            desc    : "헬로 월드",
                            icon    : "sap-icon://flight",

                            buttonSet : {
                                            text1   : "Confirm",
                                            width1  : "150px",
                                            icon1   : "sap-icon://paper-plane",
                                            text2   : "Check",
                                            width2  : "200px",
                                            enabled : false,
                                            text3   : "테스트",
                                            icon2   : "sap-icon://accept"
                                        },

                            inputSet : {
                                            valueI1 : "입력필드",
                                            descI1  : "Input field",
                                            maxlen1 : 20,
                                            width  : "300px",
                                            sci1    : true,
                                            desc2   : "컨트롤러에서 세팅",
                                            maxlen2 : 10
                                       },
                            
                            labelSet : {
                                            text   : "임선희",
                                            design  : "Bold",
                                            width   : "30rem"
                                       },
                            
                            textSet : {
                                            text      : "구트 3F Class 5",
                                            width     : "20rem",
                                            textAlign : "Center"
                                      },
                            
                            LabelSet : {
                                            text   : "알파벳",
                                            design : "Bold",
                                            width  : "30em"
                                       },

                            TextSet : {
                                            text      : "알파벳",
                                            width     : "30em",
                                            align : "End"
                                       },

                            ButtonSet : {
                                            text : "눌러",
                                            icon : "sap-icon://action-settings"
                                        }

                        },
                oModel = new JSONModel(oData);

            this.getView().setModel(oModel);
        }
    });
});