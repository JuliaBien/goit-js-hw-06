const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const sizeChanging = event => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};
inputRange.addEventListener('input', sizeChanging);
