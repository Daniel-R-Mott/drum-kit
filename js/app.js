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


const classId = key.classList;

function checkKeyPressed(e) {
    if (e.keyCode === 65) {
        classId.replace("key", "key-pressed");
    }
    console.log(e.keyCode);
};
