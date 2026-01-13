sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code1.cl5.param.route01.code1cl5paramroute01.controller.GridView", {
        onInit() 
        {
            this.getRouter().getRoute("RouteGridView").attachPatternMatched(this.onSearch.bind(this), this);
        },

        onSearch: function (oEvent)
        {
            var vCarrid = oEvent.getParameter("arguments").Carrid,
                vConnid = oEvent.getParameter("arguments").Connid;
            // console.log(oEvent);
            
            // view에서의 table의 id와 rows을 얻어서 사용함.
            let oBinding = this.getView().byId("gridSchedule").getBinding("rows"),
                aFilter = [];

            if(vCarrid)
                aFilter.push(new sap.ui.model.Filter("Carrid", sap.ui.model.FilterOperator.EQ, vCarrid));

            if(vConnid)
                aFilter.push(new sap.ui.model.Filter("Connid", sap.ui.model.FilterOperator.EQ, vConnid));

            oBinding.filter(aFilter);
        },

        onMain: function ()
        {
            this.getRouter().navTo("RouteMainView");
        },

        //라우터 정보가져오기
        getRouter: function () 
        {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });
});