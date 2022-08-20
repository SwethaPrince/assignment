"use strict"

let c= 60;
let f = 45;

toFahrenheit(c);
toCelsius(f);

function toFahrenheit(c){
    let f;
    f = c*9/5 +32;
    console.log(`${c}C is ${f} F`)
}

function toCelsius(f){
    let c;
    c= (f-32)*5/9;
    console.log(`${f}F is ${c} C`)   
}