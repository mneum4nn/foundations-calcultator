const operatorBtns = document.querySelectorAll('.operator');

const numberBtns = document.querySelectorAll('.numbtn');

const display = document.querySelector('.output');
const bigNumbers = document.querySelector('.big');
const lilNumbers = document.querySelector('.small');

const clearBtn = document.querySelector('#clear')
const equalsBtn = document.querySelector('#equals');

let operator='';
let prevVal='';
let curVal ='';
let num1=''; 
let num2='';

numberBtns.forEach((number)=> {
    number.addEventListener('click', function(e){
        handleNumber(e.target.textContent);
        bigNumbers.textContent = curVal;
    });
});

function handleNumber(num){
    curVal+=num;
    if (operator != ''){
        num2 += num;
    } 
    else {
        num1+=num;
    }
}

clearBtn.addEventListener('click',(event)=> clearScreen());

function clearScreen(){
    bigNumbers.textContent="";
    lilNumbers.textContent="";
    curVal='';
    num1='';
    num2='';
    operator='';
}
operatorBtns.forEach((opp) => {
    opp.addEventListener('click', function(e){
        operator = e.target.textContent;
        curVal+=operator;
        bigNumbers.textContent=curVal;
    });
});


equalsBtn.addEventListener('click',(event)=>{
    prevVal = curVal;
    lilNumbers.textContent = prevVal;
    curVal = operate(operator,num1,num2);
    bigNumbers.textContent = curVal;
    operator = '';
    num1 = '';
    num2 = '';
})

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


