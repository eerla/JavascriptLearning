let calculation = localStorage.getItem('calculation') || '';
document.getElementById('Result').innerHTML = calculation;

// function updateCalculation(newValue) {
//     calculation = calculation+newValue;
//     setResult();
// };

// function eavlExpression() {
//     calculation = eval(calculation);
//     setResult();
// };

// function clearValue() {
//     calculation = '';
//     setResult();
// };

// function deleteValue() {
//     calculation = calculation.slice(0, -1);
//     setResult();
// };

queryObject = {
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
    ".js-clear" : "",
    ".js-delete" : "",
    ".js-equal" : "",
};


// event listeners
// function makeEventListner(classValue, calValue) {
//     if (classValue === ".js-clear") {
//         document.querySelector(".js-clear").addEventListener("click",clearValue);
//     };

//     if (classValue === ".js-delete") {
//         document.querySelector(".js-delete").addEventListener("click",deleteValue);
//     };

//     if (classValue === ".js-equal") {
//         document.querySelector(".js-equal").addEventListener("click", () => {
//             eavlExpression();
//         })
//     };

//     // if (![".js-clear", ".js-delete", ".js-equal"].includes(obj)) {
//     //     document.querySelector(`${classValue}`).addEventListener("click",() => {
//     //         updateCalculation(`${calValue}`);
//     //         })
//     //     };
// };

// for (obj in queryObject) {
//     makeEventListner(obj, queryObject[obj]);
// };


// 
let calcfuncs = {
    "update": function updateCalculation(newValue) {
                calculation = calculation+newValue;
            },
    "clear": function clearValue() {
                calculation = '';
            },
    "delete": function deleteValue(){
                calculation = calculation.slice(0, -1);
            },
    "equal": function eavlExpression(exp) {
                calculation = eval(exp);
            },
};

function calculate(action, value='') {
    calcfuncs[action](value);
    localStorage.setItem('calculation', calculation);
    document.getElementById('Result').innerHTML = calculation;
};

// keyboard listeners
document.body.addEventListener("keydown",(event) => {
    
    for (obj in Object.values(queryObject)) {
        if (event.key === Object.values(queryObject)[obj]) {
            calculate("update", event.key);
        } else if (event.key === 'Enter') {
            calculate("equal", calculation);
        } else if (event.key === 'Delete') {
            calculate("clear");
        }
}});

document.body.addEventListener("keydown",(event) => {
    if (event.key === 'Backspace') {
        calculate("delete");
    }
});

// event listeners
function makeEventListner2(classValue, calValue) {
    if (classValue === ".js-clear") {
        document.querySelector(".js-clear").addEventListener("click", () => {
            calculate("clear");
        });
    };

    if (classValue === ".js-delete") {
        document.querySelector(".js-delete").addEventListener("click", () => {
            calculate("delete");
        });
    };

    if (classValue === ".js-equal") {
        document.querySelector(".js-equal").addEventListener("click", () => {
            calculate("equal", `${calculation}`);
        })
    };

    if (![".js-clear", ".js-delete", ".js-equal"].includes(classValue)) {
        document.querySelector(`${classValue}`).addEventListener("click",() => {
            calculate("update", `${calValue}`);
        })
    };
};

for (obj in queryObject) {
    makeEventListner2(obj, queryObject[obj]);
};