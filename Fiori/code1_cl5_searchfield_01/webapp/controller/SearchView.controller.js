sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("code1.cl5.searchfield01.code1cl5searchfield01.controller.SearchView", {
        onInit() 
        {
            let oModel = new JSONModel("/val.json");

            this.getView().setModel(oModel);
        },

        onSearchBtn: function ()
        {
            var vSearch = this.getView().byId("Word").getValue();

            console.log(vSearch);
        },

        onSearch: function (oEvent) // 오브젝트 형태인 이벤트
        {
            /*var vWord    = oEvent.getParameter("query"), // 검색어 받기
                // Table 객체에 있는 DataSet을 가져오기
                // 왜 가져오냐 하면 해당 DataSet에서 검색을 하려고 함
                // 가져온 Binding 객체가 Model 즉 Data를 다루는 도구가 됨
                oBinding = this.getView().byId("airLineList").getBinding("rows"),
                //이제부터 검색을 위한 조건 생성
                oFilter  = new Filter("Carrid", FilterOperator.EQ, vWord);
                // Carrid 필드에서 vWord와 FilterOperator.EQ한 것을 넣는다. 즉 같은 걸 넣는다.
           
            if(vWord != "") // 검색어를 입력했을 경우
            {
                oBinding.filter(oFilter); //Filter에 있는 조건으로 Model 검색 시작
            }
            else
            {
                oBinding.filter(); //검색조건 안태우겠다 즉 모두 나와
            }*/

            // 문제
            // 통화키 입력필드(서치필드) 만들것
            // 통화키 입력조건을 Filter에 추가 할 것

            var vCarrid   = this.getView().byId("carrid").getValue(),
                vCurrency = this.getView().byId("currency").getValue();

            let oBinding  = this.getView().byId("airLineList").getBinding("rows"),
                oFilter   = null,
                aFilter   = [];

            if (vCarrid != "")
            {
                oFilter = new Filter("Carrid", FilterOperator.EQ, vCarrid);
                aFilter.push(oFilter);
            }

            if (vCurrency != "")
            {
                oFilter = new Filter("Currency", FilterOperator.EQ, vCurrency);
                aFilter.push(oFilter);
            }

            if (aFilter.length > 0)
                oBinding.filter(aFilter);
            else
                oBinding.filter();
        }
    });
});