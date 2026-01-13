sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code1.cl5.edu.test03.code1cl5edutest03.controller.Test03View", {
        onInit() 
        {
            
        },

        //왼쪽 뷰로 간다는 뜻이고 manifest.json에 있는 routes에서의 name을 쓴다.
        onMoveLeft: function ()
        {
            this.getRouter().navTo("RouteLeftView"); // routes 이름 기술. mamifest.json에서의 routes에서의 name을 쓰기
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