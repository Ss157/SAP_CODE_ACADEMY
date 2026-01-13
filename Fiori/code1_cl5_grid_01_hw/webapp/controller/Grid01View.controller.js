sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code1.cl5.edu01hw.code1cl5grid01hw.controller.Grid01View", {
        onInit() 
        {
            let oData = {
                            MatSet : [
                                        {
                                            "Matnr"  : "STNL_ST304",
                                            "Werks"  : "1010",
                                            "Mtart"  : "FERT",
                                            "VBELN"  : "100001",
                                            "VBELP"  : "10",
                                            "PRICE"  : 125400,
                                            "CURRENCY" : "KRW"
                                        },
                                        {
                                            "Matnr"  : "STNL_ALLOY",
                                            "Werks"  : "1010",
                                            "Mtart"  : "FERT",
                                            "VBELN"  : "100001",
                                            "VBELP"  : "20",
                                            "PRICE"  : 12100,
                                            "CURRENCY" : "KRW"
                                        },
                                        {
                                            "Matnr"  : "STNL_HASTELLOY",
                                            "Werks"  : "1010",
                                            "Mtart"  : "HALB",
                                            "VBELN"  : "100002",
                                            "VBELP"  : "10",
                                            "PRICE"  : 1235.4,
                                            "CURRENCY" : "USD"
                                        },
                                        {
                                            "Matnr"  : "STNL_HAYNES",
                                            "Werks"  : "1010",
                                            "Mtart"  : "ROH",
                                            "VBELN"  : "100002",
                                            "VBELP"  : "20",
                                            "PRICE"  : 5248.75,
                                            "CURRENCY" : "EUR"
                                        },
                                     ]
                        },
                oModel = new JSONModel(oData);
            
            this.getView().setModel(oModel);
        }
    });
});