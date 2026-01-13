sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code1.cl5.grid01.code1cl5grid01.controller.Edu10View", {
        onInit() 
        {
            let oData1 = {
                            AirlineSet : [// sap에서 ui로 인터널테이블을 던질 때, Set을 붙임.
                                            {
                                                Carrid   : "AA", 
                                                Carrname : "America Air", 
                                                Currkey  : "USD", 
                                                Price    : 5234
                                            },
                                            {
                                                Carrid   : "KA", 
                                                Carrname : "Korean Air", 
                                                Currkey  : "KRW", 
                                                Price    : 150000
                                            },
                                            {
                                                Carrid   : "LH", 
                                                Carrname : "Luft Hansa", 
                                                Currkey  : "EUR", 
                                                Price    : 2391
                                            },
                                            {
                                                arrid    : "VA", 
                                                Carrname : "Vietnam Air", 
                                                Currkey  : "VND", 
                                                Price    : 5234
                                            }
                                         ]
                        },
                oData2 = {
                            matSet : [
                                        {
                                            Matnr  : "ST_01", //자재코드
                                            Maktx  : "Steel", //자재내역
                                            Werks  : "1010", //벅스(공장, 플랜트)
                                            Lgort  : "L1000" //창고
                                        },
                                        {
                                            Matnr  : "RPX321",
                                            Maktx  : "Road Steel",
                                            Werks  : "1020",
                                            Lgort  : "L2000"
                                        },
                                        {
                                            Matnr  : "EL_GANG",
                                            Maktx  : "Strong Steel",
                                            Werks  : "1030",
                                            Lgort  : "L3000"
                                        }
                                     ]
                         },
                oModel1 = new JSONModel(oData1),
                oModel2 = new JSONModel(oData2);

            this.getView().setModel(oModel1);
            this.getView().setModel(oModel2, "Mat");

        }
    });
});