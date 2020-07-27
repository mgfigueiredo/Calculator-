
const container = document.querySelector("#container");
const display = document.querySelector("#display");
const decimalButton = document.querySelector("#decimalButton");


function storeNums(num){
    let num1 = num;
    return num1;
}

function updateDisplay(key){
    var isNum = false;
    var operator = 0;
    var operand1 = 0;
    var operand2 = 0;
    
    if (key == 1 || key == 2 || key == 3 ||key == 4 || key == 5 || key == 6 || key == 7|| key == 8 || key == 9 || key == 0){
        isNum = true;
    }
    else{
        isNum = false;
    }

    if (isNum == true){
    if (display.textContent == "" || display.textContent == "+" ||display.textContent == "-" || display.textContent == "x" || display.textContent == "÷"){
    display.textContent = key;
    }
    else if (display.textContent != ""){
        display.textContent = display.textContent + `${key}`;
    }
    }

    else if (isNum == false){
        if (key == "+" || key == "-" || key == "x" || key == "÷"){
            
            container.dataset.operand1 = display.textContent;
            display.textContent = key;
            container.dataset.operator = display.textContent;  
        }

        else if (key == "="){
            container.dataset.operand2 = display.textContent;
            console.log(container.dataset.operand2)
            var answer = calculate(container.dataset.operand1, container.dataset.operator, container.dataset.operand2);
            display.textContent = answer;
        }

        else if (key == "."){
            display.textContent = display.textContent + `${key}`;
        }
    }

    console.log(container.dataset.operator);
    console.log(container.dataset.operand1);
    console.log(container.dataset.operand2);
}

// creating the number buttons - easier and less messy than individually creating button elements in the html file
function createNums(){
for(let i = 0; i < 10; i++){
    const numButton = document.createElement("button");
    numButton.textContent = i;
    numButton.setAttribute("id", `num${i}`)
    numButton.classList.add("numButtons"); 
    container.appendChild(numButton);  
}
}

//function that makes the button return its number when pressed
function returnNum(){
const numContainer = document.querySelectorAll(".numButtons");
numContainer.forEach( numButton => {
    numButton.addEventListener('click', function (e){
        updateDisplay(numButton.textContent);
    });
    });
}


// creating the operator buttons
function createOperators(){
    var operators = ["+", "-", "x", "÷", "=", "."];
    for(let i = 0; i < 6; i++){
       const opButton = document.createElement("button");
       opButton.textContent = operators[i];
       opButton.classList.add("opButtons");
       opButton.setAttribute("id", `op${i}`);
       container.appendChild(opButton);
    }
}

//function that makes the button return its operator when pressed
function returnOp(){
    const opContainer = document.querySelectorAll(".opButtons");
    opContainer.forEach( opButton => {
        opButton.addEventListener('click', function (e){
            updateDisplay(opButton.textContent);
        });
        });
    }

// function to clear the calculator display
function clearButton(){
    const clearButton = document.querySelector("#clearButton");
    clearButton.addEventListener("click", function (e) {
        const display = document.querySelector("#display");
        display.textContent = "";
    });
}

function calculate(operand1, operator, operand2){ 
    var ans = 0;
    var op1 = parseFloat(operand1);
    var op2 = parseFloat(operand2);
    if (operator == "+"){
        ans = op1 + op2;
    }
    else if (operator == "-"){
        ans = op1 - op2;
    }
    else if (operator == "x"){
        ans = op1 * op2;
    }
    else if (operator == "÷"){
        ans = op1 / op2;
    }
   return ans;
}


createNums();
createOperators();
clearButton();
returnNum();
returnOp();
