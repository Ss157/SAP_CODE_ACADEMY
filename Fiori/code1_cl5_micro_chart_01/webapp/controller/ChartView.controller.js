sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code1.cl5.micro.chart1.code1cl5microchart01.controller.ChartView", {
        onInit() 
        {
            let oData = {
                            lineSet : { //그냥 스트럭처
                                        Val1 : 33.1, Label1 : "May",  Label2 : "Q2",
                                        Val2 : 12,   Label3 : "June",
                                        Val3 : 51.4, Label4 : "July", Label5 : "Q3",
                                        Val4 : 52,   Label6 : "Aug",
                                        Val5 : 69.9, Label7 : "Sep",
                                        Val6 : 0.9,  Label8 : "Oct",  Label9 : "Q4"
                                      }
                                      
                        },
                oData2 = {
                            carSet : {
                                        Car1 : 33.1, Label1 : "그랜저",
                                        Car2 : 12,   Label2 : "소나타",
                                        Car3 : 51.4, Label3 : "제네시스"
                                      }
                                      
                         },
                // oData3 = { //인터널 테이블 // 해당내용을 /data/data.json에 똑같이 만들었다.
                //             valSet: [
                //                         {Val : "33.1", Label : "May"},
                //                         {Val : "12",   Label : "June"},
                //                         {Val : "51.4", Label : "July"},
                //                         {Val : "52",   Label : "Aug"},
                //                         {Val : "69.9", Label : "Sep"},
                //                         {Val : "0.9",  Label : "Oct"}
                //                     ]
                //          },
                oModel = new JSONModel(oData),
                oModel2 = new JSONModel(oData2),
                oModel3 = new JSONModel("/data/data.json");

            this.getView().setModel(oModel);
            this.getView().setModel(oModel2, "Car");
            this.getView().setModel(oModel3, "Month");
        }
    });
}); 