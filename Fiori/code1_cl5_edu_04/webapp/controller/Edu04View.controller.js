sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code1.cl5.edu04.code1cl5edu04.controller.Edu04View", {
        onInit() 
        {

        },

        forCheck01 : function ()
        {
            for (var i = 0; i < 10; i++)
            {
                for (var j = 0; j < 5; j++)
                {
                    console.log(i+"+"+j+"="+(i+j));
                }
            }
        },

        onGugudan : function ()
        {
            // for(var i = 2; i < 10; i++)
            // {
            //     for(var j = 1; j < 10; j++)
            //     {
            //         console.log(i+" X "+j+" = "+(i*j));
            //     }
            // }

            var i = 2,
                j = 1;
            while(i < 10)
            { 
                while(j < 10)
                {
                    console.log(i+" X "+j+" = "+(i*j));
                    j++;
                }
                j = 1;
                i++;
            }
        },

        onGugudan_n : function ()
        {
            var vDan = parseInt(this.getView().byId("dan").getValue());

            for(var i = 1; i <= vDan; i++) // i < vDan + 1로 하는 건 별로임.
            {
                for(var j = 1; j < 10; j++)
                {
                    console.log(i+" X "+j+" = "+(i*j));
                }
            }
        },

        onMultiArray : function ()
        {
            let aNumber = [
                            [1,2], 
                            [3,4], 
                            [5,6], 
                            [7,8]
                          ];

            aNumber.push([9,10]);

            for(var i = 0; i < aNumber.length; i++)
            {
                for(var j = 0; j < aNumber[i].length; j++)
                {
                    console.log("aNumber["+i+"]["+j+"] = "+aNumber[i][j]);
                }
            }
        },

        forCheck02 : function ()
        {
            let aNumber = ['A', 'B', 'C', 'D'];
            for (var i in aNumber) //i는 0, 1, 2, 3을 가진다.
            {
                console.log("aNumber["+i+"] = "+aNumber[i]);
            }

            for (var i of aNumber) //i는 A, B, C, D를 가진다.
            {
                console.log(i);
            }
        },

        whileCheck01 : function ()
        {
            var i = 1;

            while ( i <= 10 )
            {
                console.log(i+"번째 회전");
                i++;
            }

            i = 0;

            do
            {
                i++;
                console.log(i+"번째 회전");
            } while (i < 10);
        }
    });
});