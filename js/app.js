document.addEventListener("keydown", checkUpAndDown, false);
document.addEventListener("keyup", checkUpAndDown, false);

// Takes str from keydown and adds it to "#key?", then toggles the classes for that key id
function checkUpAndDown(e) {
  if (e.repeat) {
    return;
  }
  const selectorString = "#key" + String.fromCharCode(e.keyCode);
  const pressedKeyElement = document.querySelector(selectorString);
  pressedKeyElement.classList.toggle("key");
  pressedKeyElement.classList.toggle("key-pressed");
};
