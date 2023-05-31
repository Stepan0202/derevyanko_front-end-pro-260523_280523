/* Task 1. За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач*/
const name = prompt("What is your name?");
alert(`Hello, ${name}! How are you?`);

/* Task 2. Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів*/

const formTask1 = document.querySelector("#task2");
const answer = document.querySelector(".resultTask1");

formTask1.addEventListener('submit', (e) => {
    e.preventDefault();
    let userInput = document.querySelector('#task1Input');
    console.log(userInput);
});