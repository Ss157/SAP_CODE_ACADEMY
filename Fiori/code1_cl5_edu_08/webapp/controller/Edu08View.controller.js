sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("code1.cl5.edu08.code1cl5edu08.controller.Edu08View", {
        onInit() 
        {
        },
        
        onAirCheck : function ()
        {
            let aAirline = ['AA', 'KA', 'LH', 'DL', 'QA'];
            var i = 0;
            for(i of aAirline)
            {
                if(i == "KA")
                {
                    console.log("Korean Air");
                }
                else if(i == "DL")
                {
                    console.log("Delta Air");
                }
                else if(i == "QA")
                {
                    console.log("Qatar Air");
                }
                else
                {
                    console.log("Nothing");
                }
            }

            for(i of aAirline)
            {
                switch (i)
                {
                    case "AA":
                        console.log("America Air");
                        break;
                    case "LH":
                        console.log("Luft Hansa");
                        break;
                    default :
                        console.log("Etc");
                        break;
                }
            }
        },

        onCheckWalking : function ()
        {
            var vNumber = this.getView().byId("walk").getValue();

            if(vNumber <= 10)
            {
                    MessageToast.show("걸어라 걸어 쫌~");
            }
            else if(vNumber > 10 && vNumber <= 50)
            {
                    MessageToast.show("걷다 말았냐?");
            }
            else if(vNumber > 50 && vNumber <= 100)
            {
                    MessageToast.show("쫌 걸었네");
            }
            else if(vNumber > 100)
            {
                    MessageToast.show("많이도 걸었네");
            }
        },

        onCheckClass : function ()
        {
            var vInputName = this.getView().byId("name").getValue();
            var vInputClass = this.getView().byId("class").getValue();
            var vInputNumber = this.getView().byId("number").getValue();
            var vName = "임선희";
            var vClass = "5";
            var vNumber = "19";

            if(vInputClass == vClass)
            {
                if (vInputNumber == vNumber) 
                {
                    if(!(vInputName == vName))
                    {
                        alert("이름이 맞지 않습니다");
                    }
                }
                else
                {
                    alert("번호가 맞지 않습니다");
                }
            }
            else
            {
                alert("반이 맞지 않습니다");
            }   
        },

        onLogIn : function ()
        {
            var vInput1 = this.getView().byId("id").getValue();
            var vInput2 = this.getView().byId("password").getValue();

            var vId = "임선희";
            var vPw = "1234";

            if(vId != vInput1)
            {
                MessageToast.show("아이디가 없습니다");
            }

            if(vPw != vInput2)
            {
                MessageToast.show("암호가 틀립니다");
            }

            if((vId == vInput1) && (vPw == vInput2))
            {
                MessageToast.show(vInput1+"님 반갑습니다");
            }
        }

    });
});