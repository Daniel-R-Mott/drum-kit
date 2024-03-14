function playSound(e) {
 /* if (e.repeat)
  return;*/
  const audio = document.querySelector(`audio[data-key="${e}"]`);
  const key = document.querySelector(`.key[data-key="${e}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('key-pressed');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('key-pressed');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('touchstart', playSound);
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', getKeyCode);


function getDataKey(d) {
const dataKey = d.getAttribute("data-key");
playSound(dataKey);
}

function getKeyCode(e) {
  const keyCode = e.keyCode;
  playSound(keyCode);
}
