import { colors } from './colors.js';

const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
};

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setRandomColor() {
  const _color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(_color);
  document.body.style.backgroundColor = _color;
}

let interval = undefined;

refs.startBtn.addEventListener('click', () => {
  interval = setInterval(() => {
    setRandomColor();
    refs.startBtn.setAttribute('disabled', true);
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  refs.startBtn.removeAttribute('disabled', true);
});
