sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code1.cl5.route01.code1cl5route01.controller.LeftView", {
        onInit() 
        {

        },

        onMoveRight: function ()
        {
            this.getRouter().navTo("RouteRightView"); //라우팅 이름 기술. mamifest.json에서의 routes에서의 name을 쓰기
        },

        onMoveMain: function ()
        {
            this.getRouter().navTo("RouteMainView"); //라우팅 이름 기술. mamifest.json에서의 routes에서의 name을 쓰기
        },

        // 해당 UI5의 라우팅 정보를 가져옴->manifest.json 의 routes
        getRouter: function ()
        {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });
});