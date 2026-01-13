sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code1.cl5.srv01.code1cl5srv01.controller.AirView", {
        onInit() 
        {
            // getModel() 하고 괄호안에 아무 이름도 없다는 것은 
            // root에 세팅된 모델을 가져 오겠다는 뜻임.
            // getModel("방이름")
            let oModel = this.getOwnerComponent().getModel();

            // 이 뷰에 세팅된 모델의 속내를 들여다 보자!
            console.log(oModel.oData);
        }
    });
});