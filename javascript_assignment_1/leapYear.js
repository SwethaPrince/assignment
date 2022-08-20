"use strict"

function leapYear(year){
    let  leap= false;

    if( year%4===0){
        if(year%100===0){
            if(year%400 ===0)
               leap = true;
            else
               leap = false;
        }else 
          leap = true;
    } else{
        leap = false;
    }

    return leap;

}

let year = 2016
let leap = leapYear(year);
if(leap === true){
    console.log(`${year} is a leap year`);
} else{
    console.log(`${year} is not a leap year`)
}

