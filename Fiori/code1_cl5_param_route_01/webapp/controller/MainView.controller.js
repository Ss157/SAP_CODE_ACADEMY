sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code1.cl5.param.route01.code1cl5paramroute01.controller.MainView", {
        onInit() 
        {

        },

        onSearch: function ()
        {
            var vCarrid = this.getView().byId("airLine").getValue(),
                vConnid = this.getView().byId("connNo").getValue();
                
            this.getRouter().navTo("RouteGridView", {Carrid: vCarrid, Connid: vConnid});
        },

        //라우터 정보가져오기
        getRouter: function () 
        {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });
});