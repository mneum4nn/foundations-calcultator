const operatorBtns = document.querySelectorAll('.operator');
const numberBtns = document.querySelectorAll('.numbtn');
const equalsBtn = document.querySelector('#equals');
const display = document.querySelector('.output');

let operator='';
let prevVal='';
let curVal ='';

numberBtns.forEach((number)=> number.addEventListener('click', function(e){
    handleNumber(e.target.textContent); 
    display.textContent = curVal ;
}))
function handleNumber(num){
    curVal+=num;
}

function sum (x,y){
    return x+y;
}
function subtract (x,y){
    return x-y;
}
function multiply (x,y){
    return x*y;
}
function divide (x,y){
    return x/y;
}

function operate (operator, aNumber, anotherNumber) {
    let result;
    switch (operator){
        case '+':
            result = sum(aNumber,anotherNumber);
            break;
        case '-':
            result = subtract(aNumber,anotherNumber);
            break;
        case '*':
            result = multiply(aNumber,anotherNumber);
            break;
        case '/':
            result = divide(aNumber,anotherNumber);
            break;    
    }
    return result;
}


