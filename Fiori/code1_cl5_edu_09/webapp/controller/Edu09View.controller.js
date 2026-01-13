sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code1.cl5.edu09.codecl5edu09.controller.Edu09View", {
        onInit() 
        {

        },

        onArrayCheck : function ()
        {
            let aArray = ['A', 'B', 'C', 'D'];

            for(var index in aArray)
            {
                console.log(index+":"+aArray[index]);
            }

            for(var value of aArray)
            {
                console.log(value);
            }
        },

        onJSONWaCheck : function ()
        {
            let oData = {
                            Name : "홍길동",
                            Age  : "500",
                            Area : "Hanyang"
                        }; //한줄 짜리는 work area 
            //인덱스와 키는 어찌보면 같은 포지션이다.
            
            //for in  루프는 연속으로된.구조면 가능
            for(var index in oData)
            {
                console.log(index+":"+oData[index]);
            }

            // 단일 구조는 안되고 배열처럼 1개 이상의 구조를 가진 경우만 가능
            // 따라서, 아래의 for of 는 불가능 왜냐.. oData 가 현재 한개의 구조로만 되어 있어서
            for(var value of oData)
            {
                console.log(value);
            }
        },

        onJSONItabCheck : function ()
        {
            let lt_data = [
                            {
                                Name : "홍길동",
                                Age  : "500",
                                Area : "한양"
                            },
                            {
                                Name : "김길동",
                                Age  : "600",
                                Area : "경성"
                            },
                            {
                                Name : "고길동",
                                Age  : "700",
                                Area : "한성"
                            }
                          ];

            // for(var lv_tabix in lt_data)
            // {
            //     console.log(lt_data[lv_tabix].Name);
            // }

            // for(var lv_tabix in lt_data)
            // {
            //     console.log(lt_data[lv_tabix].Age);
            // }

            // for(var lv_tabix in lt_data)
            // {
            //     console.log(lt_data[lv_tabix].Area);
            // }

            // for(let ls_data of lt_data)
            // {
            //     console.log(ls_data.Name);
            // }

            // for(let ls_data of lt_data)
            // {
            //     console.log(ls_data.Age);
            // }

            // for(let ls_data of lt_data)
            // {
            //     console.log(ls_data.Area);
            // }





            // for(var lv_tabix in lt_data)
            // {
            //     console.log(lt_data[lv_tabix].Name+","+lt_data[lv_tabix].Age);
            // }

            for(let ls_data of lt_data)
            {
                console.log(ls_data.Name);
            }
        },

        onItab01 : function ()
        {
            let lt_mat = [
                            {
                                Matnr  : "ST_01", //자재코드
                                Maktx  : "Steel", //자재내역
                                Werks  : "1010", //벅스(공장, 플랜트)
                                Lgort : "L1000" //창고
                            },
                            {
                                Matnr  : "RPX321",
                                Maktx  : "Road Steel",
                                Werks  : "1020",
                                Lgort : "L2000"
                            },
                            {
                                Matnr  : "EL_GANG",
                                Maktx  : "Strong Steel",
                                Werks  : "1030",
                                Lgort : "L3000"
                            }
                          ]

            // for(var lv_tabix in lt_mat)
            // {
            //     //Matnr 필드의 값이 ST_01이면 Werks 의 값을 '1000'으로 바꿔라
            //     if(lt_mat[lv_tabix].Matnr == "ST_01")
            //     {
            //         lt_mat[lv_tabix].Werks = '1000';
            //     }

            //     //Lgort 필드의 값이 'L3000'이면 Maktx 필드의 값을 '3000'으로 바꿔라
            //     //switch 구문 사용할 것

            //     switch (lt_mat[lv_tabix].Lgort)
            //     {
            //         case "L3000":
            //             lt_mat[lv_tabix].Maktx = 3000;
            //             break;
            //     }

            //     console.log(lt_mat[lv_tabix].Matnr+" "+
            //                 lt_mat[lv_tabix].Maktx+" "+
            //                 lt_mat[lv_tabix].Werks+" "+
            //                 lt_mat[lv_tabix].Lgort);
            // }

            for(let ls_mat of lt_mat)
            {
                //Matnr 필드의 값이 ST_01이면 Werks 의 값을 '1000'으로 바꿔라
                if(ls_mat.Matnr == "ST_01")
                {
                    ls_mat.Werks = '1000';
                }

                //Lgort 필드의 값이 'L3000'이면 Maktx 필드의 값을 '3000'으로 바꿔라
                //switch 구문 사용할 것

                switch (ls_mat.Lgort)
                {
                    case "L3000":
                        ls_mat.Maktx = 3000;
                        break;
                }

                console.log(ls_mat.Matnr+" "+
                            ls_mat.Maktx+" "+
                            ls_mat.Werks+" "+
                            ls_mat.Lgort);
            }
        },

        onAirline : function ()
        {
            let lt_airline = [
                                {
                                    Carrid   : "AA",
                                    Carrname : "America Air",
                                    Price    : "23145",
                                    Currkey  : "USD"
                                },
                                {
                                    Carrid   : "LH",
                                    Carrname : "Luft Hansa",
                                    Price    : "132435",
                                    Currkey  : "EUR"
                                },
                                {
                                    Carrid   : "KO",
                                    Carrname : "Korean Air",
                                    Price    : "2345",
                                    Currkey  : "KRW"
                                },
                                {
                                    Carrid   : "DL",
                                    Carrname : "Delta Air",
                                    Price    : "8475",
                                    Currkey  : "USD"
                                },
                                {
                                    Carrid   : "UA",
                                    Carrname : "United Air",
                                    Price    : "95685",
                                    Currkey  : "USD"
                                },
                                {
                                    Carrid   : "AF",
                                    Carrname : "Air France",
                                    Price    : "98405",
                                    Currkey  : "EUR"
                                },
                             ]

            // for(var lv_tabix in lt_airline)
            // {
            //     switch (lt_airline[lv_tabix].Carrid)
            //     {
            //         case "KO":
            //             lt_airline[lv_tabix].Currkey = "원화";
            //     }

            //     if(lt_airline[lv_tabix].Carrid == "AA" || lt_airline[lv_tabix].Carrid == "DL")
            //     {
            //         lt_airline[lv_tabix].Currkey = "달러";
            //     }

            //     if(lt_airline[lv_tabix].Carrid == "LH" || lt_airline[lv_tabix].Carrid =="AF")
            //     {
            //         lt_airline[lv_tabix].Currkey = "유로";
            //     }

            //     console.log(lt_airline[lv_tabix].Carrid+" "+
            //                 lt_airline[lv_tabix].Carrname+" "+
            //                 lt_airline[lv_tabix].Price+" "+
            //                 lt_airline[lv_tabix].Currkey);
            // }

            for(let ls_airline of lt_airline)
            {
                switch (ls_airline.Carrid)
                {
                    case "KO":
                        ls_airline.Currkey = "원화";
                }

                if(ls_airline.Carrid == "AA" || ls_airline.Carrid == "DL")
                {
                    ls_airline.Currkey = "달러";
                }

                if(ls_airline.Carrid == "LH" || ls_airline.Carrid =="AF")
                {
                    ls_airline.Currkey = "유로";
                }

                console.log(ls_airline.Carrid+" "+
                            ls_airline.Carrname+" "+
                            ls_airline.Price+" "+
                            ls_airline.Currkey);
            }
        },

        onItab02 : function ()
        {
            //인터널테이블이 2개가 들어갈 수 있다.
            let oData = {
                            lt_mat: [
                                        {
                                            Matnr  : "ST_01", //자재코드
                                            Maktx  : "Steel", //자재내역
                                            Werks  : "1010", //벅스(공장, 플랜트)
                                            Lgort : "L1000" //창고
                                        },
                                        {
                                            Matnr  : "RPX321",
                                            Maktx  : "Road Steel",
                                            Werks  : "1020",
                                            Lgort : "L2000"
                                        },
                                        {
                                            Matnr  : "EL_GANG",
                                            Maktx  : "Strong Steel",
                                            Werks  : "1030",
                                            Lgort : "L3000"
                                        }
                                    ],

                            lt_mat2:[
                                        {
                                            Matnr  : "ST_01", //자재코드
                                            Maktx  : "Steel", //자재내역
                                            Werks  : "1010", //벅스(공장, 플랜트)
                                            Lgort : "L1000" //창고
                                        },
                                        {
                                            Matnr  : "RPX321",
                                            Maktx  : "Road Steel",
                                            Werks  : "1020",
                                            Lgort : "L2000"
                                        },
                                        {
                                            Matnr  : "EL_GANG",
                                            Maktx  : "Strong Steel",
                                            Werks  : "1030",
                                            Lgort : "L3000"
                                        }
                                    ],
                        };
                        
            for(let ls_mat of oData.lt_mat)
            {
                console.log(ls_mat.Maktx);
            }
        }
    });
});