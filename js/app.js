window.addEventListener("keydown", getKeyCode);

function getDataKey(d) {
  playSound(parseInt(d.getAttribute("data-key")));
}

function getKeyCode(e) {
  playSound(e.keyCode);
}

function playSound(e) {
  if (e.repeat)
  return;
  const audio = document.querySelector(`audio[data-key="${e}"]`);
  const key = document.querySelector(`.key[data-key="${e}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("key-pressed");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("key-pressed");
}

