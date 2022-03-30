"use strict";

const inpNumber = document.getElementById('inpNumber');
const btnSubmit = document.getElementById('btnSubmit');
const btnSwap = document.getElementById('btnSwap');
const fromSelect = document.getElementById('fromSelect');
const toSelect = document.getElementById('toSelect');
const result = document.getElementById('result');

btnSwap.addEventListener("click", ()=>{

    let temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;

    fromSelect.selected = toSelect.value;
    toSelect.selected = fromSelect.value;
})

btnSubmit.addEventListener("click", ()=>{
    const valfromSelect = fromSelect.value;
    let number = inpNumber.value;
    
    if(number == ""){
        alert("Input is required")
        result.innerHTML = "Input is required";
    }
    else{
    switch(valfromSelect){
        case "decimal":
            number = parseInt(number, 10);
            console.log(number);
            toSelector(number);
            break;
        case "binary":
            number = parseInt(number, 2);
            console.log(number);
            toSelector(number);
            break;
        case "octal":
            number = parseInt(number, 8);
            console.log(number);
            toSelector(number);
            break;
        case "hexadecimal":
            number = parseInt(number, 16);
            console.log(number);
            toSelector(number);
            break;
    }
}
})

function toSelector(number){
    const valtoSelect = toSelect.value;

    switch(valtoSelect){
        case "decimal":
            result.innerHTML = "Result: " +  number.toString(10);
            break;
        case "binary":
            result.innerHTML ="Result: " + number.toString(2);
            break;
        case "octal":
            result.innerHTML ="Result: " + number.toString(8);
            break;
        case "hexadecimal":
            
            result.innerHTML ="Result: " + number.toString(16);
            break;
    }
}
