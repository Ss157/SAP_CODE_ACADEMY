sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/TextAlign"
], (Controller, MessageToast, TextAlign) => {
    "use strict";

    return Controller.extend("code1.cl5.edu02.code1cl5edu02.controller.Edu02View", {
        onInit() {
        },

        calc_val1 : function()
        {
            // var vNumber1 = 0,
            //     vNumber2 = 0,
            //     vResult = 0;
            
            // let oView = null,
            //     oInput1 = null,
            //     oInput2 = null,
            //     oInput3 = null;
            
            // oView = this.getView();

            // oInput1 = oView.byId("number1");
            // oInput2 = oView.byId("number2");
            // oInput3 = oView.byId("result");

            // vNumber1 = oInput1.getValue();
            // vNumber2 = oInput2.getValue();

            // vResult = parseInt(vNumber1) + parseInt(vNumber2);
            // vResult = vResult * 10;

            // MessageToast.show(vResult);

            // oInput3.setValue(vResult);
            
            var vNumber1 = this.getView().byId("number1").getValue();
            var vNumber2 = this.getView().byId("number2").getValue();

            this.getView().byId("result").setValue((parseInt(vNumber1) + parseInt(vNumber2)) * 10);
        },  

        calc_val2 : function()
        {
            // var vNumber1 = 0,
            //     vNumber2 = 0,
            //     vNumber3 = 0;

            // let oView = null,
            //     oInput1 = null,
            //     oInput2 = null,
            //     oInput3 = null;
            
            // oView = this.getView();

            // oInput1 = oView.byId("length");
            // oInput2 = oView.byId("height");
            // oInput3 = oView.byId("size");

            // vNumber1 = oInput1.getValue();
            // vNumber2 = oInput2.getValue();

            // vNumber3 = parseInt(vNumber1) * parseInt(vNumber2) / 2;

            // oInput3.setValue(vNumber3);

            var vNumber1 = this.getView().byId("length").getValue();
            var vNumber2 = this.getView().byId("height").getValue();

            this.getView().byId("size").setValue(parseInt(vNumber1) * parseInt(vNumber2) / 2);
        },

        calc_val3 : function()
        {
            // var vNumber1 = 0,
            //     vNumber2 = 0,
            //     vNumber3 = 0;

            // let oView = null,
            //     oInput1 = null,
            //     oInput2 = null,
            //     oInput3 = null;
            
            // oView = this.getView();

            // oInput1 = oView.byId("cost1");
            // oInput2 = oView.byId("discountper1");
            // oInput3 = oView.byId("after_discount_cost1");

            // vNumber1 = oInput1.getValue();
            // vNumber2 = oInput2.getValue();

            // vNumber3 = parseInt(vNumber1) *(100 - parseInt(vNumber2)) / 100;

            // oInput3.setValue(vNumber3);

            var vNumber1 = this.getView().byId("cost1").getValue(),
                vNumber2 = this.getView().byId("discountper1").getValue();
            
            this.getView().byId("after_discount_cost1").setValue(parseInt(vNumber1) *(100 - parseInt(vNumber2)) / 100);
        },

        calc_val4 : function()
        {
            // var vNumber1 = 0,
            //     vNumber2 = 0,
            //     vNumber3 = 0;

            // let oView = null,
            //     oInput1 = null,
            //     oInput2 = null,
            //     oInput3 = null;
            
            // oView = this.getView();

            // oInput1 = oView.byId("cost2");
            // oInput2 = oView.byId("paied_cost2");
            // oInput3 = oView.byId("discountper2");

            // vNumber1 = oInput1.getValue();
            // vNumber2 = oInput2.getValue();

            // vNumber3 = parseInt(vNumber2) / parseInt(vNumber1) * 100;
            // vNumber3 = 100 - vNumber3;
            // oInput3.setValue(vNumber3);

            var vNumber1 = this.getView().byId("cost2").getValue(),
                vNumber2 = this.getView().byId("paied_cost2").getValue();

            this.getView().byId("discountper2").setValue(100 - (parseInt(vNumber2) / parseInt(vNumber1) * 100));


        },

        align_begin : function()
        {
            this.getView().byId("today_friday").setTextAlign("Begin");
        },

        align_center : function()
        {
            this.getView().byId("today_friday").setTextAlign("Center");
        },

        align_right : function()
        {
            this.getView().byId("today_friday").setTextAlign("Right");
        },

        change_string : function()
        {
            this.getView().byId("output").setText(this.getView().byId("string").getValue());
        }
    });
});