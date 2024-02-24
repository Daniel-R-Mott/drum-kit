const keyPressed = document.querySelector(".key-pressed");
const keyDiv = document.querySelector(".key-wrapper");
const keyA = document.querySelector("#keyA");
const keyS = document.querySelector("#keyS");
const keyD = document.querySelector("#keyD");
const keyF = document.querySelector("#keyF");
const keyG = document.querySelector("#keyG");
const keyH = document.querySelector("#keyH");
const keyJ = document.querySelector("#keyJ");
const keyK = document.querySelector("#keyK");
const keyL = document.querySelector("#keyL");
const key = document.querySelector(".key");

document.addEventListener("keydown", checkKeyPressed, false); 

// KEYCODES FOR BUTTONS
// A = 65
// S = 83
// D = 68
// F = 70
// G = 71
// H = 72
// J = 74
// K = 75
// L = 76

// not sure if i need this yet
const keyArray = [];
const keyIds = document.querySelectorAll(`[id]`);
keyIds.forEach(element => {
keyArray.push(element.id);
});


// still figuring this out /////////////////////
const classId = key.classList;

function checkKeyPressed(e) {
    if (e.keyCode === 65) {
        keyA.classList.remove("key");
        keyA.classList.add("key-pressed");
        setTimeout(() => {
        keyA.classList.remove("key-pressed");
        keyA.classList.add("key");
          }, 100);
    }
};
////////////////////////////////////////////////




//saving this for later
// setTimeout(() => {
//     // Sets timeout to 5 seconds -- add stuff here
//   }, 5000);


