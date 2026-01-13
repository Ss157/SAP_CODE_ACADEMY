sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code1.cl5.edu.test03.code1cl5edutest03.controller.RightView", {
        onInit() 
        {
            //해당 json 모델을 이용해서 화면에 linechart 형태로 출력될 예정이다.
            let oData = {
                            gt_data: [
                                        {
                                            Val   : 33.1,
                                            Label : "5월"
                                        },
                                        {
                                            Val   : 12,
                                            Label : "6월"
                                        },
                                        {
                                            Val   : 51.4,
                                            Label : "7월"
                                        },
                                        {
                                            Val   : 52,
                                            Label : "8월"
                                        },
                                        {
                                            Val   : 69.9,
                                            Label : "9월"
                                        },
                                        {
                                            Val   : 0.9,
                                            Label : "10월"
                                        },
                                        {
                                            Val   : 20,
                                            Label : "11월"
                                        },
                                        {
                                            Val   : 14,
                                            Label : "12월"
                                        },
                                     ]
                        },
                oModel = new JSONModel(oData);

            this.getView().setModel(oModel);
        },

        //메인 뷰로 간다는 뜻이고 manifest.json에 있는 routes에서의 name을 쓴다.
        onMoveMain: function ()
        {
            this.getRouter().navTo("RouteTest03View"); // routes 이름 기술. mamifest.json에서의 routes에서의 name을 쓰기
            // 실질적 view로 이동할때는 targets를 보고 가는데
            // targets의 name 필드값에 있는 View로 이동한다.
        },

        //왼쪽 뷰로 간다는 뜻이고 manifest.json에 있는 routes에서의 name을 쓴다.
        onMoveLeft: function ()
        {
            this.getRouter().navTo("RouteLeftView"); //라우팅 이름 기술. mamifest.json에서의 routes에서의 name을 쓰기
        },

        // 해당 UI5의 라우팅 정보를 가져옴->manifest.json 의 routes
        getRouter: function ()
        {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });
});