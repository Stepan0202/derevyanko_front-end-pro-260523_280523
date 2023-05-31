/* Task 1. За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач*/
const name = prompt("What is your name?");
alert(`Hello, ${name}! How are you?`);

/* Task 2. Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів*/

const formTask2 = document.querySelector("#task2");
const answerElement = document.querySelector(".resultTask2");
let answer = 0;

formTask2.addEventListener('submit', (e) => {
    e.preventDefault();
    answerElement.innerHTML = "Answer is: ";
    let userInput = document.querySelector('#task2Input').value;
    const regexOperators = /[+\-/*]/g; // finding next operators: +, -, /, *
    const regexNumbers = /\d+(\.\d+)?/g; //finding numbers;
    let operators = userInput.match(regexOperators);
    let numbers = userInput.match(regexNumbers);
    numbers.forEach(number => {
        parseInt(number);
    })
    if(numbers.length === operators.length){ // if numbers.length === operators.length than first number is negative
        numbers[0] *= -1;
        operators.shift();
    }
    console.log(numbers);
    console.log(operators);
    let isContinue = false;
    while(operators.indexOf("*") > -1 || operators.indexOf("/") > -1){
        isContinue = true;
        operators.forEach(operator => {
            let index;
            let newNumber;
            switch(operator){
                case "*":
                    index = operators.indexOf("*");
                    newNumber = numbers[index]*numbers[index+1];
                    numbers.splice(index+1,1);
                    numbers.splice(index, 1, newNumber);
                    operators.splice(index, 1);
                    isContinue = false;
                    break;
                
                case "/":
                    index = operators.indexOf("/");
                    newNumber = numbers[index]/numbers[index+1];
                    numbers.splice(index+1,1);
                    numbers.splice(index, 1, newNumber);
                    operators.splice(index, 1);
                    isContinue = false;
                    break;
            }
            if(!isContinue) return;
        });
        if (!isContinue) continue;
    }
    answer = parseInt(numbers[0]);
    for(let i = 1; i < numbers.length; i++){
        let operator = operators[i-1];
        switch(operator){
            case "+":
                answer += parseInt(numbers[i]);
                break;
            case "-":
                answer -= parseInt(numbers[i]);
                break; 
        }
    }
    answerElement.insertAdjacentHTML("beforeend", answer);
});

/* Task 3. Cтворити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні*/
const formTask3 = document.querySelector("#task3");
const answerElement3 = document.querySelector(".resultTask3");
let answer3 = 0;

formTask3.addEventListener('submit', (e) => {
    e.preventDefault();
    answerElement3.innerHTML = "Answer is: ";
    let firstNumber = document.querySelector("#firstNumber").value;
    let secondNumber = document.querySelector("#secondNumber").value;
    if (firstNumber == secondNumber){
        answerElement3.insertAdjacentHTML("beforeend", "true");
        return;
    }
    answerElement3.insertAdjacentHTML("beforeend", "false");
});

/* Task 4: визначити середнє арифметичне трьох чисел*/
const formTask4 = document.querySelector("#task4");
const answerElement4 = document.querySelector(".resultTask4");

formTask4.addEventListener('submit', (e) => {
    e.preventDefault();
    answerElement4.innerHTML = "Answer is: ";
    let firstNumber = parseInt(document.querySelector("#numberOne").value);
    let secondNumber = parseInt(document.querySelector("#numberTwo").value);
    let thirdNumber = parseInt(document.querySelector("#numberThree").value);
    console.log(firstNumber + secondNumber + thirdNumber);
    const result = (firstNumber + secondNumber + thirdNumber)/3;
    answerElement4.insertAdjacentHTML("beforeend", result);
 

});

/*Task 5: розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%) */
const formTask5 = document.querySelector("#task5");
const answerElement5 = document.querySelector(".resultTask5");

formTask5.addEventListener('submit', (e) => {
    e.preventDefault();
    answerElement5.innerHTML = "Answer is: ";
    let input = document.querySelector("#task5Input").value
    let inputLen = input.length
    let resultArray;
    for(let i = 0; i < inputLen; i++){
        let substr = input.slice(i, i+1);
        answerElement5.insertAdjacentHTML("beforeend", substr + " ");
    }


});;