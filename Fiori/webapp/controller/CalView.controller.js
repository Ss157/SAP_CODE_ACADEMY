sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code1.cl5.calculator.code1cl5calculator.controller.CalView", {
        onInit() 
        {

        },

        onSet: function (pNumber)
        {
            var vNum = this.getView().byId("Result").getValue();

            switch(pNumber)
            {
                case "=" :
                    vNum = eval(vNum);
                    break;
                default :
                    vNum += pNumber;
                    break;
            }
            
            this.getView().byId("Result").setValue(vNum);
        },

        onClear: function ()
        {
            this.getView().byId("Result").setValue("");
        }
    });
});