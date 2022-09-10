
let selectedOp = false;
let currentOp = '';
let newNumTime = false;
let num = document.querySelector("#display");
let storedNumber = 0;
let nextNum = 0;
let alreadyUsed = false;

function press(n) {
    if (newNumTime) {
        num.innerText = 0;
        newNumTime = false;
    }
    num.innerText += n;
    num.innerText = Number(num.innerText)
}

function dec() {
    if (newNumTime) {
        num.innerText = 0;
        newNumTime = false;
    }
    num.innerText += "."
}

function setOP(n) {
    if (selectedOp == false) {
        currentOp = n;
        storedNumber = Number(num.innerText);
        newNumTime = true;
        selectedOp = true;
        console.log(currentOp);
        console.log(storedNumber);
    }
}

function calculate() {
    if (alreadyUsed === false) {
        nextNum = Number(num.innerText);
        switch (currentOp) {
            case ('/'):
                num.innerText = storedNumber / nextNum;
                break;
            case ('-'):
                num.innerText = storedNumber - nextNum;
                break;
            case ('+'):
                num.innerText = storedNumber + nextNum;
                break;
            case ('*'):
                num.innerText = storedNumber * nextNum;
                break;
        }
        alreadyUsed = true;
    } else {
        clr();
    }
}

function clr() {
    storedNumber = 0;
    nextNum = 0;
    num.innerText = 0;
    selectedOp = false;
    currentOp = '';
    newNumTime = false;
    alreadyUsed = false;
}