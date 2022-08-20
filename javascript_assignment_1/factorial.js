"use strict"

let num  = 5;
factorial(num);


function factorial(num){
    let f= 1;
    for(let i=1; i<=num; ++i){
        f =f*i;
    }

    console.log(`${num} factorial is ${f}`);

}