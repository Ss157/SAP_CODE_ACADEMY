sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("code1.cl5.edu03.code1cl5edu03.controller.Edu03View", {
        onInit() 
        {
        },

        ifCheck01 : function ()
        {
            //View에 있는 Input 입력창에서 입력된 값을 받아오기
            var vString = parseInt(this.getView().byId("class").getValue());
            
            if ( vString > 10 )
            {
                MessageToast.show("10보다 크네");
            }
            else if( vString > 5 && vString <= 10 )
            {
                MessageToast.show("5초과 10이하");
            }
            else if( vString <= 5 && vString > 1)
            {
                MessageToast.show("1초과 5 이하");
            }
            else if( vString == 1 || vString == 0)
            {
                MessageToast.show("1 또는 0 이다");
            }
            
            // if  (vString == 'CL1')
            // {
            //     MessageToast.show('1반');
            // }
            // else if  (vString == 'CL2')
            // {
            //     MessageToast.show('2반');
            // }
            // else if  (vString == 'CL3')
            // {
            //     MessageToast.show('3반');
            // }
            // else if  (vString == 'CL4')
            // {
            //     MessageToast.show('4반');
            // }
            // else if  (vString == 'CL5')
            // {
            //     MessageToast.show('5반');
            // }
            // else
            // {
            //     MessageToast.show('반이 없습니다.');
            // }
        },

        caseCheck01 : function ()
        {
            var vInput = this.getView().byId("number").getValue();

            // if (vInput == "A")
            // {
            //     MessageToast.show("A 입력");
            // }
            // else if (vInput == "B")
            // {
            //     MessageToast.show("B 입력");
            // }
            // else if (vInput == "C")
            // {
            //     MessageToast.show("C 입력");
            // }
            // else
            // {
            //     MessageToast.show("기타 입력");
            // }

            //위 if 구문을 switch 구문으로 바꿨을때
            
            switch (vInput) 
            {
                case 'A':
                    MessageToast.show("A 입력");
                    break;

                case 'B':
                    MessageToast.show("B 입력");
                    break;

                case 'C':
                    MessageToast.show("C 입력");
                    break;

                default:
                    MessageToast.show("기타 입력");
                    break;
            }
        },

        ifCheck02 : function()
        {
            var vMonth = "July";
            if(vMonth == "July")
            {
                MessageToast.show("7월이다");
            }
            else
            {
                MessageToast.show("7월이 아니야");
            }
        },

        caseCheck02 : function()
        {
            var vCity = this.getView().byId("city").getValue();

            switch (vCity)
            {
                case "Seoul":
                    alert("서울");
                    break;
                case "Gwangju":
                    alert("광주");
                    break;
                case "Daegu":
                    alert("대구");
                    break;
                case "Busan":
                    alert("부산");
                    break;
                case "Daejeon":
                    alert("대전");
                    break;
                default:
                    alert("도시없음");
                    break;
            }
        },

        compareNum : function()
        {
            var vNumber1 = parseInt(this.getView().byId("number1").getValue());
            var vNumber2 = parseInt(this.getView().byId("number2").getValue());

            if(vNumber1 > vNumber2)
            {
                alert("크다");
            }
            else if(vNumber1 == vNumber2)
            {
                alert("같다");
            }
            else
            {
                alert("작다");
            }
        },

        forCheck01 : function ()
        {
            let aNumber = ['A', 'B', 'AB', 'BB']; 

            for(var i = 0; i < aNumber.length; i++)
            {
                console.log(aNumber[i]);
            }
        },

        matchNum : function()
        {
            var vInput = parseInt(this.getView().byId("number3").getValue());
            var aNumber = [10, 20, 30, 40, 50];
            for(var i = 0; i < aNumber.length; i++)
            {
                switch (vInput)
                {
                    case aNumber[i] :
                        alert("Match");
                        break;
                }
                // if(vInput == aNumber[i])
                // {
                //     alert("Match");
                // }
            }
        }
    });
});