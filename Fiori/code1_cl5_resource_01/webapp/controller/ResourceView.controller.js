sap.ui.define([
    "sap/ui/core/mvc/Controller",
   "sap/ui/model/resource/ResourceModel",
   "sap/ui/model/json/JSONModel"
], (Controller, ResourceModel, JSONModel) => {
    "use strict";

    return Controller.extend("code1.cl5.resource01.code1cl5resource01.controller.ResourceView", {
        onInit() 
        {  
            // config/text 폴더에서 text.properties 파일을 읽어옴
            let oRModel2 = new ResourceModel({
                bundleName: "code1.cl5.resource01.code1cl5resource01.config.text.text"
            }),
                oData = {
                            gt_data: [
                                        {Carrid: "AA", Carrname: "America Air", Currency: "USD"},
                                        {Carrid: "KA", Carrname: "Korean Air",  Currency: "KRW"},
                                        {Carrid: "QA", Carrname: "Qatar Air",   Currency: "USD"},
                                        {Carrid: "BR", Carrname: "Brunei Air",  Currency: "BND"}
                                     ]
                        },
                oData2 = {
                            gt_list: [
                                        {Car: "그랜져",  Rate: 25.7},
                                        {Car: "아반떼",  Rate: 35.2},
                                        {Car: "소나타",  Rate: 15.9},
                                        {Car: "제네시스", Rate: 38.7},
                                     ]
                         },
                oModel1 = new JSONModel(oData),
                oModel2 = new JSONModel(oData2);
            
            // 모델을 뷰에 세팅함
            this.getView().setModel(oRModel2, "text");
            this.getView().setModel(oModel1); //root에 세팅
            this.getView().setModel(oModel2, "car");
        },

        checkModel1: function ()
        {
            //루트에 setModel 된 oModel1을 가져와서 확인하고 싶어
            // let oModel = this.getView().getModel(),
            //     gt_data = oModel.oData.gt_data;
            
            let gt_data = this.getView().getModel().oData.gt_data;
            console.log(gt_data);

            for(let gs_data of gt_data)
            {
                gs_data.Currency = "KRW";
                console.log(gs_data.Carrid+", "+gs_data.Carrname+", "+gs_data.Currency);
            }
        },

        checkModel2: function ()
        {
            //checkModel1 펑션을 참고해서 checkModel2 펑션을 작성할 것
            let gt_data = this.getView().getModel("car").oData.gt_list;

            for(let gs_data of gt_data)
            {
                console.log(gs_data.Car+", "+gs_data.Rate);
            }
        }
    });
});