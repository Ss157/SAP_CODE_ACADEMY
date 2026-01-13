sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/m/MessageToast"
], (Controller, JSONModel, ResourceModel, MessageToast) => {
    "use strict";

    return Controller.extend("code1.cl5.edu.test01.code1cl5edutest01.controller.Test01View", {
        onInit() 
        {   
            // 해당 코드는 제이슨 모델을 이용하여 dataset을 만드는 코드이다.
            // Fiori1Set, Fiori2Set, LabelSet, Q3Set, Q5Set, Q6Set라는 제이슨 모델을 만들고
            // 각각 그 목적에 맞게 input, label, text, button에 들어 갈 인자에 대한 값을 씀.
            let Fiori1Set= {
                            width       : "50rem",
                            placeholder : "피오리 입력창",
                            desc        : "입력창 설명 입니다."
                           },
                Fiori2Set= {
                            width       : "100px",
                            placeholder : "RTX1253C",
                            desc        : "30Ton"
                           },
                LabelSet= {
                            text: "Without SCRIM"
                          },
                //문제 3에 필요한 제이슨 모델을 만듦.
                Q3Set= {
                        textText      : "CODE1 First Test of 임선희",
                        textTextAlign : "Center",
                        labelText     : "임선희 Fiori 시험중"
                       },
                Q5Set= {
                        text1   : "Confirm",
                        width1  : "150px",
                        icon    : "sap-icon://accept",
                        text2   : "Check",
                        width2  : "200px",
                        enabled : false
                       },
                Q6Set= {
                        value   : "입력필드",
                        desc1   : "Input field",
                        maxLen1 : 20,
                        width1  : "300px",
                        sCI     : true,
                        desc2   : "컨트롤러에서 세팅",
                        width2  : "300px",
                        maxLen2 : 10
                       },
                //fiori_text 폴더 밑에 fiori_text.properties 파일에 대한 리소스모델을 만듦
                oRModel = new ResourceModel({
                    bundleName: "code1.cl5.edu.test01.code1cl5edutest01.fiori_text.fiori_text"
                }),
                //msg 폴더 밑에 msg.properties 파일에 대한 리소스모델을 만듦
                oRModel2 = new ResourceModel({
                    bundleName: "code1.cl5.edu.test01.code1cl5edutest01.msg.msg"
                }),
                //각 json 모델에 대해서 JSONModel을 정의하는 모습이다.
                oModel1 = new JSONModel(Fiori1Set),
                oModel2 = new JSONModel(Fiori2Set),
                oModel3 = new JSONModel(LabelSet),
                oModel4 = new JSONModel(Q3Set),
                oModel5 = new JSONModel(Q5Set),
                oModel6 = new JSONModel(Q6Set);
            
            //json 모델을 해당 뷰에 적용한다.
            // root에 모델을 적용시키면 덮어쓰여지기 때문에 각각 별칭을 줬다.
            this.getView().setModel(oModel1, "Fi1");
            this.getView().setModel(oModel2, "Fi2");
            this.getView().setModel(oModel3, "Label");
            this.getView().setModel(oModel4, "Q3");
            this.getView().setModel(oModel5, "Q5");
            this.getView().setModel(oModel6, "Q6");
            
            
            // 읽어온 fiori_text 모델을 뷰에 세팅함
            this.getView().setModel(oRModel, "label");
            this.getView().setModel(oRModel2, "msg");
        },

        onCalc: function ()
        {
            //view에서 id가 underLen,height인 input에서 값을 받아와
            //vVal1, vVal2에 값을 넣고 계산 후 vResult에 결과 입력
            //setValue 매소드를 이용하여 id가 size인 input에 결과 전달
            var vVal1 = parseInt(this.getView().byId("underLen").getValue());
            var vVal2 = parseInt(this.getView().byId("height").getValue());
            var vResult = 0;
            vResult = vVal1 * vVal2 / 2;
            // MessageToast.show("sdfsdf");
            // MessageToast.show(vVal1);
            this.getView().byId("size").setValue(vResult);
        },

        discountPercent: function ()
        {
            //view에서 id가 wonPrice, discountPrice input에서 값을 받아와
            //vVal1, vVal2에 값을 넣고 할인율을 계산 후 vResult에 결과 입력
            //setValue 매소드를 이용하여 id가 percent인 input에 결과 전달
            var vVal1 = parseInt(this.getView().byId("wonPrice").getValue());
            var vVal2 = parseInt(this.getView().byId("discountPrice").getValue());
            var vResult = 0;
            vResult = (vVal1 - vVal2) / vVal1 * 100;
            this.getView().byId("percent").setValue(vResult);
        },

        // vCountry를 통해서 id가 city인 input에서 입력된 값을 얻는다.
        // 그 후, switch 문을 이용해서 case문의 값과 같은지 확인한다.
        // 같다면 한국어로 국가명을, 기존 값에 없다면 No Match를 메시지토스트로 찍는다. 
        onCheckCountry: function ()
        {
            var vCountry = this.getView().byId("city").getValue();

            switch (vCountry)
            {
                case "Korea" :
                    MessageToast.show("한국");
                    break;
                case "America" :
                    MessageToast.show("미국");
                    break;
                case "Israel" :
                    MessageToast.show("이스라엘");
                    break;
                case "Thailand" :
                    MessageToast.show("태국");
                    break;
                case "Russia" :
                    MessageToast.show("러시아");
                    break;
                case "Poland" :
                    MessageToast.show("폴란드");
                    break;
                case "Germany" :
                    MessageToast.show("독일");
                    break;
                case "England" :
                    MessageToast.show("잉글랜드");
                    break;
                default :
                    MessageToast.show("No Match");
                    break;
            }
        },
        
        // 이중 for문을 이용한 구구단 찍기
        // 여기서 i는 단을 의미한다
        // 예를 들어 i가 3일 때는 j가 1에서 9까지 돌면서 
        // 구구단 중 3단이 찍힌다.
        onForLoop: function ()
        {
            for(var i = 2; i < 10; i++)
            {
                for(var j = 1; j < 10; j++)
                {
                    console.log(i+"*"+j+"="+(i*j));
                }
            }
        },

        //이중 while문을 이용한 구구단 찍기
        // 여기서 i는 단을 의미한다
        // 예를 들어 i가 3일 때는 j가 1에서 9까지 돌면서 
        // 구구단 중 3단이 찍힌다.
        onWhileLoop: function ()
        {  
            var i = 2;
            var j = 1;
            while(i < 10)
            {
                while(j < 10)
                {
                    console.log(i+"*"+j+"="+(i*j));
                    j++;
                }

                i++;
                // j = 1로 초기화해주어야 9단까지 찍을 수 있다
                // j = 1이 없다면 i = 2일 때, j가 1에서 10까지 변한 후
                // i = 3일 때, j가 여전히 10이기 때문에 구구단 9단까지 찍을 수 없다.
                j = 1;
            }
        },

        //for문과 while문을 결합해서 구구단 찍기
        // 여기서 i는 단을 의미한다
        // 예를 들어 i가 3일 때는 j가 1에서 9까지 돌면서 
        // 구구단 중 3단이 찍힌다.
        onForWhileLoop: function ()
        {
            var j = 1;
            for(var i = 2; i < 10; i++)
            {
                while(j < 10)
                {
                    console.log(i+"*"+j+"="+(i*j));
                    j++;
                }
                j = 1;
            }
        }
    });
});