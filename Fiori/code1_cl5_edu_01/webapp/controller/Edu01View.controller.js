sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/Input"
], (Controller, MessageToast, Input) => { //주의사항, Controller, Text이 순서를 지켜야 함. 왜냐하면 앞에 꺼가 배열이라서.
    "use strict";

    return Controller.extend("code1.cl5.edu01.code1cl5edu01.controller.Edu01View", {
        onInit() 
        {
            // new sap.m.Text( //new는 생성자  //여기에 출력할 부분을 쓰기
            // {
	        // 	text: "Hello World" //key : value 형식, 속성 text에 Hello World를 넣었다고 생각하면 됨.
	        // });
        },

        message: function () //함수도 key : value 형태로 씀.
        {
            MessageToast.show("메시지 토스트야"); // 한 번만 쓸 경우에 풀 네임을 쓰고, 위에 정의해서 쓰는 건 자주 쓰는거 
        },

        check_val: function ()
        {
            var vNumber1 = this.getView().byId("number1").getValue(),
                vNumber2 = this.getView().byId("number2").getValue();
                
            this.getView().byId("number3").setValue(parseInt(vNumber1) + parseInt(vNumber2));
            
        }
    });
});