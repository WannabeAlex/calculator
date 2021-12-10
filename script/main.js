function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function shortenNum(x) {
    if (x.toString().length >= 15) {
        x = Number.parseFloat(x).toExponential(5);
    }

    return x;
}

let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let decimal = document.querySelector('#decimal');
let clear = document.querySelector('#clear');
let equal = document.querySelector('#equal');

let isDone = false;
let firstInput = '';
let secondInput = '';
let operatorInput = '';
let isFirstDecimal = false;
let isSecondDecimal = false;

function reset() {
    isDone = false;
    firstInput = '';
    secondInput = '';
    operatorInput = '';
    isFirstDecimal = false;
    isSecondDecimal = false;
    display.textContent = '';
}

numbers.forEach(number => {
    number.addEventListener('click', e => {
        if (isDone)
            reset();

        if (operatorInput === '' && firstInput.length < 15) {
            firstInput += number.dataset.key;
            display.textContent = firstInput;
        } else if (secondInput.length < 15) {
            secondInput += number.dataset.key;
            display.textContent = secondInput;
        }
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        operatorInput = operator.dataset.key;
        display.textContent = '';
    });
});

decimal.addEventListener('click', e => {
    if (operatorInput == '' && !isFirstDecimal) {
        isFirstDecimal = true;
        firstInput += '.';
        display.textContent = firstInput;
    } else if(operatorInput != '' && !isSecondDecimal) {
        isSecondDecimal = true;
        secondInput += '.';
        display.textContent = secondInput;
    }
});

clear.addEventListener('click', e => {
    reset();
});

equal.addEventListener('click', e => {
    if (firstInput == '' && secondInput == '' && operatorInput == '')
        return;

    isDone = true;
    let x = Number(firstInput);
    let y = Number(secondInput);

    if (operatorInput === '+')
        display.textContent = shortenNum(add(x, y));
    else if (operatorInput === '-')
        display.textContent = shortenNum(subtract(x, y));
    else if (operatorInput === '*')
        display.textContent = shortenNum(multiply(x, y));
    else if (operatorInput === '/')
        display.textContent = shortenNum(divide(x, y));
});