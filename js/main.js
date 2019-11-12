////Practice
///grab all i need
const milliSeconds = document.querySelector(".milliseconds");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const startButton = document.querySelector("[data-action='start']");
const stopButton = document.querySelector("[data-action='stop']");
const resetButton = document.querySelector("[data-action='reset']");
let timerInterval = 0;
let increment;

let isRunning = false;

//create funtions

function incrementTimer() {
    timerInterval++;

    const numofMilliSeconds = (timerInterval % (1000 * 60)) / 100;
    const numOfSeconds = timerInterval % 60;
    const numOfMinutes = Math.floor(timerInterval / 60);

    minutes.innerText = addZero(numOfMinutes); //addZero function is used to add "0" to number less than 10
    seconds.innerText = addZero(numOfSeconds);
    milliSeconds.innerText = numofMilliSeconds;
}

// function milli(){
//   const numofMilliSeconds = timerInterval % 1000;

//   return milliSeconds.innerText = numofMilliSeconds;
// }
function startTimer() {
    if (isRunning) return; //prevents the start button from setting more intervals when clicked more than once

    isRunning = true;

    increment = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(increment);
}

function resetTimer() {
    stopTimer();

    timerInterval = 0; //sets timer to start from zero after reset
    minutes.innerText = "00";
    seconds.innerText = "00";
    milliSeconds.innerText = "00";
}

function addZero(number) {
    return number < 10 ? "0" + number : number;
}
//add event listeners
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// //grab everything

// const startButton = document.querySelector('[data-action="start"]');
// const stopButton = document.querySelector('[data-action="stop"]');
// const resetButton = document.querySelector('[data-action="reset"]');
// const minutes = document.querySelector(".minutes");

// const seconds = document.querySelector(".seconds");
// let timertime = 00;
// let isRunning = false; //to stop start button from creating two intervals
// let interval;
// //create functions

// function startTimer() {
//     if (isRunning) return; //cuts off the rest o the code so the start button doesnt create different intervals
//     isRunning = true;
//     interval = setInterval(incrementTimer, 1000);
// }

// function stopTimer() {
//     if (!isRunning) return;

//     isRunning = false;
//     clearInterval(interval);
// }

// function resetTimer() {
//     stopTimer();

//     timertime = 0;
//     minutes.innerText = "00";
//     seconds.innerText = "00";

// }

// function incrementTimer() {

//     timertime++;

//     const numOfMinutes = Math.floor(timertime / 60); //to round the result down
//     const numOfSeconds = timertime % 60;

//     minutes.innerText = padNumber(numOfMinutes); //to add zero when the minute is less than 10
//     seconds.innerText = padNumber(numOfSeconds); //to add zero when the second is less than 10

//     console.count("hello"); //log hello every one second

// }

// function padNumber(number) {
//     return (number < 10) ? "0" + number : number;

//     // if (number < 10) {
//     //     return "0" + number;
//     // } else {
//     //     return number;
//     // }
// }
// ///add event listerners

// startButton.addEventListener("click", startTimer);

// stopButton.addEventListener("click", stopTimer);
// resetButton.addEventListener("click", resetTimer);