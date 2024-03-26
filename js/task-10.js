function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputAmountOfBoxes = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
let boxSize = 20;
function createBoxes() {
  const amountofBoxes = inputAmountOfBoxes.value;
  for (let i = 0; i < amountofBoxes; i++) {
    const randomColor = getRandomHexColor();
    boxSize += 10;
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = randomColor;
    boxesContainer.append(box);
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
  boxSize = 20;
}
buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);
