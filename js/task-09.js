function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const currentColor = document.querySelector('.color');
function changeBackground() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
}
button.addEventListener('click', changeBackground);
