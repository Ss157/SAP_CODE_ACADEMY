sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("code1.cl5.edu.test02.code1cl5edutest02.controller.Test01View", {
        onInit() 
        {
            // 해당 oData와 oData2는 다중행의 JSON data을 포함하고 있다.
            // 이러한 다중행의 JSON Model은 어찌보면 abap의 인터널테이블과 모습이 닮아있다.
            let oData = {
                            popul : [
                                        {
                                            Year : 2018,
                                            home : 20499543
                                        },
                                        {
                                            Year : 2019,
                                            home : 20891348
                                        },
                                        {
                                            Year : 2020,
                                            home : 21484785
                                        },
                                        {
                                            Year : 2021,
                                            home : 22022753
                                        },
                                        {
                                            Year : 2022,
                                            home : 22383187
                                        }
                                    ],
                            born : [
                                    {
                                        Year  : 2018,
                                        Birth : 326822
                                    },
                                    {
                                        Year  : 2019,
                                        Birth : 302676
                                    },
                                    {
                                        Year  : 2020,
                                        Birth : 272337
                                    },
                                    {
                                        Year  : 2021,
                                        Birth : 260562
                                    },
                                    {
                                        Year  : 2022,
                                        Birth : 249186
                                    }
                                   ]
                        },
                oData2 = {
                            GridSet : [
                                        {
                                            Bukrs : "1000",
                                            Gjahr : "2024",
                                            Anln1 : 48952
                                        },
                                        {
                                            Bukrs : "2000",
                                            Gjahr : "2024",
                                            Anln1 : 5031
                                        },
                                        {
                                            Bukrs : "3000",
                                            Gjahr : "2024",
                                            Anln1 : 47189
                                        },
                                        {
                                            Bukrs : "4000",
                                            Gjahr : "2024",
                                            Anln1 : 19147
                                        },
                                        {
                                            Bukrs : "5000",
                                            Gjahr : "2024",
                                            Anln1 : 1421
                                        }
                                      ]
                         },
                // 파일형태의 json data과 onInit에 정의된 json data을 생성자 new를 사용하여 model로 정의하였다.
                oModel = new JSONModel("/ball/Base.json"),
                oModel2 = new JSONModel(oData),
                oModel3 = new JSONModel(oData2);
            
            // setModel() 메소드를 사용하여 모델을 적용시켰다. 또, 모든 모델을 root에 만들 수 없기 때문에
            // house와 company와 같은 별칭을 주었다.
            this.getView().setModel(oModel);
            this.getView().setModel(oModel2, "house");
            this.getView().setModel(oModel3, "company");
        },
        
        // gugudan에서 입력된 단수를 vSkipDan에 저장하고
        // 이중 for 문으로 구구단을 찍는다. 여기서 i 즉, 단수와 vSkipDan가 같으면 
        // 해당 단수를 continue를 이용하여 skip한다.
        onGugudan: function ()
        {
            var vSkipDan = this.getView().byId("gugudan").getValue();
            for(var i = 2; i < 10; i++)
            {
                if(vSkipDan == i)
                {
                    continue;
                }

                for(var j = 1; j < 10; j++)
                {
                    console.log(i+"*"+j+"="+(i*j));
                }
            }
        },

        // 짝수 구구단만 출력하는 함수이다.
        // 단수에 대항하는 i가 1개씩 증가되도록 i++을 하는 건이 아닌 
        // i += 2를 하여 홀수단은 건너뛰게 한다.
        onGugudan2: function ()
        {
            for(var i = 2; i < 10; i += 2)
            {
                for(var j = 1; j < 10; j++)
                {
                    console.log(i+"*"+j+"="+(i*j));
                }
            }
        },

        // 다중행의 JSON Model을 for문을 이용하여 각 필드 값을 출력하는 함수이다.
        // 해당 함수에서 oData는 배열이므로, for in, for of 둘 다 사용할 수 있다.
        // 이 중 간편한 for of를 사용하여 해당 변수를 출력하였다.
        onBaseBall: function ()
        {
            var oData = [
                            {
                                Team : "기아 타이거즈",
                                Area : "광주"
                            },
                            {
                                Team : "삼성 라이온즈",
                                Area : "대구"
                            },
                            {
                                Team : "NC 다이노스",
                                Area : "창원"
                            },
                            {
                                Team : "두산 베어스",
                                Area : "서울"
                            },
                            {
                                Team : "LG 트윈스",
                                Area : "서울"
                            }
                         ];

            for(let lsBassBell of oData)
            {
                console.log(lsBassBell.Team+" "+lsBassBell.Area);
            }
        },

        // grid table에 대한 두 개의 searchfield를 만들고
        // 두 개의 입력값에 대해서 filter을 적용하였다.
        onSearch: function ()
        {
            var vYear = this.getView().byId("yearSearch").getValue(),
                vArea = this.getView().byId("areaSearch").getValue();
            
            let oBinding = this.getView().byId("baseBallList").getBinding("rows"),
                oFilter = null,
                aFilter = [];

            // vYear에 값이 입력되었다면 해당 로직을 수행한다.
            if(vYear != "")
            {
                oFilter = new Filter("Year", FilterOperator.EQ, vYear);
                aFilter.push(oFilter);
            }

            // vArea에 값이 입력되었다면 해당 로직을 수행한다.
            if(vArea != "")
            {
                oFilter = new Filter("Area", FilterOperator.EQ, vArea);
                aFilter.push(oFilter);
            }

            // area나 year에 값이 입력이 되었으면 filter을 수행한 테이블을 보여준다.
            if(aFilter.length > 0)
            {
                oBinding.filter(aFilter);
            }
            // area나 year에 값이 입력이 되지 않았다면 전체 테이블을 보여준다.
            else
            {
                oBinding.filter();
            }
        }
    });
});