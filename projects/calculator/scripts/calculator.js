let calculation = localStorage.getItem('calculation') || '';
document.getElementById('Result').innerHTML = calculation;

// all button class, value
const jsButtons = {
    ".js-1" : "1",
    ".js-2" : "2",
    ".js-3" : "3",
    ".js-plus" : "+",
    ".js-4": "4",
    ".js-5" : "5",
    ".js-6" : "6",
    ".js-minus" : "-",
    ".js-7" : "7",
    ".js-8" : "8",
    ".js-9" : "9",
    ".js-multi" : "*",
    ".js-0" : "0",
    ".js-dot" : ".",
    ".js-divide": "/",
    ".js-clear" : "util",
    ".js-delete" : "util",
    ".js-equal" : "util",
};

// util button name should match its func name ".js-<funcName>"
// for listners, key board to js cls btn (".js-<funcName>") 
const utilsmap = {
    "Enter": ".js-equal", 
    "Backspace": ".js-clear", 
    "Delete": ".js-delete"
};

// calculator functions
const calcfuncs = {
    "update": (newValue) => calculation += newValue,
    "clear": () => calculation = '',
    "delete": () => calculation = calculation.slice(0, -1),
    "equal": () => calculation = eval(calculation).toString(),
};

// initialize screen listeners
for (btn in jsButtons) {
    makeScreenEventListner(btn, jsButtons[btn]);
};

// initialize keyboard listners
keyboardListener();

const calculate = function calculate(action, value='') {
    calcfuncs[action](value);
    localStorage.setItem('calculation', calculation);
    document.getElementById('Result').innerHTML = calculation;
};

// keyboard listeners
function keyboardListener() {
    document.body.addEventListener("keydown",(event) => {
            if (Object.values(jsButtons).includes(event.key)) {
                calculate("update", event.key);
            } else if (event.key in utilsmap) {
                calculate(utilsmap[event.key].split("-")[1]);
            }
    })};

// screen listeners
function makeScreenEventListner(classValue, calValue) {
    if (Object.values(utilsmap).includes(classValue)) {
        document.querySelector(`${classValue}`).addEventListener("click",() => calculate(`${classValue.split("-")[1]}`));
    } else {
        document.querySelector(`${classValue}`).addEventListener("click",() => calculate("update", `${calValue}`))
    };
};