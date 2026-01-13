sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code1.cl5.edu.test03.code1cl5edutest03.controller.LeftView", {
        onInit() 
        {
            //파일 형태의 json data를 사용하여 모델을 세팅한다.
            let oModel = new JSONModel("/left/Left.json");

            this.getView().setModel(oModel);
        },

        //메인 뷰로 간다는 뜻이고 manifest.json에 있는 routes에서의 name을 쓴다.
        onMoveMain: function ()
        {
            this.getRouter().navTo("RouteTest03View"); // routes 이름 기술. mamifest.json에서의 routes에서의 name을 쓰기
            // 실질적 view로 이동할때는 targets를 보고 가는데
            // targets의 name 필드값에 있는 View로 이동한다.
        },

        //오른쪽 뷰로 간다는 뜻이고 manifest.json에 있는 routes에서의 name을 쓴다.
        onMoveRight: function ()
        {
            this.getRouter().navTo("RouteRightView"); //라우팅 이름 기술. mamifest.json에서의 routes에서의 name을 쓰기
        },

        // 해당 UI5의 라우팅 정보를 가져옴->manifest.json 의 routes
        getRouter: function ()
        {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });
});