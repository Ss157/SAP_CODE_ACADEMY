sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code1.cl5.edu07.code1cl5edu07.controller.Edu07View", {
        onInit() 
        {
            //절대경로 : webapp 루트경로부터 full 경로를 다 써줌
            let oModel1 = new JSONModel("/data/test.json");

            //상대경로 : 현재 있는 폴더로부터 이동하는 경로를 써줌
            //현재 컨트롤러는 controller 폴더에 있으므로
            //.. : 현재폴더에서 바로위 상위폴더로 나가라는 뜻
            // let oModel1 = new JSONModel("../data/test.json");

            this.getView().setModel(oModel1);




            let oModel2 = new JSONModel("/cl5/cl5.json");
            this.getView().setModel(oModel2, "cl5");
        }
    });
});