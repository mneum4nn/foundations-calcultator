const operatorBtns = document.querySelectorAll('.operator');
const numberBtns = document.querySelectorAll('.numbtn');
const equalsBtn = document.querySelector('#equals');
const display = document.querySelector('.output');
const bigNumbers = document.querySelector('.big');
const lilNumbers = document.querySelector('.small');
const clearBtn = document.querySelector('#clear')
let operator='';
let prevVal='';
let curVal ='';

numberBtns.forEach((number)=> number.addEventListener('click', function(e){
    handleNumber(e.target.textContent); 
    bigNumbers.textContent = curVal ;
}));

function handleNumber(num){
    curVal+=num;
}

clearBtn.addEventListener('click',(event)=> clearScreen());

function clearScreen(){
    bigNumbers.textContent="";
    lilNumbers.textContent="";
    curVal='';
}
function newLine(){
    prevVal=curVal;
    small.textContent=prevVal;
    curVal='';
    big.textContent=curVal;
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


