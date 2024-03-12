document.addEventListener("keydown", checkUpAndDown, false);
document.addEventListener("keyup", checkUpAndDown, false);

// Takes str from keydown and adds it to "#key", then toggles the classes for that key id
function checkUpAndDown(e) {
  if (e.repeat) {
    return;
  }
  const selectorString = "#key" + String.fromCharCode(e.keyCode);
  const pressedKeyElement = document.querySelector(selectorString);
  pressedKeyElement.classList.toggle("key");
  pressedKeyElement.classList.toggle("key-pressed");
  console.log(e.keyCode);



  if (pressedKeyElement.classList.contains("key-pressed")) {
    playAudio(e.keyCode);
  }
};

function playAudio(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
};


// S = 83
// D = 68
// F = 70
// G = 71
// H = 72
// J = 74
// K = 75
// L = 76
