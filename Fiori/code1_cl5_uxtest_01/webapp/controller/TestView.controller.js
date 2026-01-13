sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code1.uxtest01.code1uxtest01.controller.TestView", {
        onInit() 
        {
        },

        totalPrint: function ()
        {
            this.onGugudan01();
            this.onGugudan02();
        },

        onGugudan01: function ()
        {
            var vDan = this.getView().byId("Dan01").getValue();

            for(var i = 2; i <= vDan; i++)
            {
                for(var j = 1; j < 10; j++)
                {
                    this.printDan(i, j);
                }
            }
        },

        onGugudan02: function ()
        {
            var vDan = this.getView().byId("Dan02").getValue(),
                vNum = 2;

            while (vNum <= vDan) 
            {
                for(var i = 1; i < 10; i++)
                {
                    this.printDan(vNum, i);
                }
                vNum++;
            }
        },

        printDan: function (pDan, pNum)
        {
            console.log(pDan+"*"+pNum+"="+(pDan*pNum));
        },

        calcString: function ()
        {
            var vNum1 = this.getView().byId("Dan01").getValue(),
                vNum2 = this.getView().byId("Dan02").getValue(),
                vOperator = this.getView().byId("Operator").getValue(),
                vResult = "";

            vResult = vNum1 + vOperator + vNum2;

            //문자열로 되어있는 수식을 실제 코드로 인식해달라
            alert(eval(vResult));
        },

        addOperator: function (pOperator)
        {
            // this.getView().byId("Operator").setValue(pOperator);

            //+, -, *, / 이외의 것이 오면 alert("유효한 연산자가 아닙니다");
            //라고 메시지 띄우고 Input에 값을 없앨 것
            switch (pOperator)
            {
                case "+" : break;
                case "-" : break;
                case "*" : break;
                case "/" : break;
                default :
                    alert("유효한 연산자가 아닙니다");
                    pOperator = "";
                    break;
            }
            this.getView().byId("Operator").setValue(pOperator);
        }
    });
});