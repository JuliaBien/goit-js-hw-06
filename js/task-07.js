const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = `${inputRange.value}px`;
const sizeChanging = event => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};
inputRange.addEventListener('input', sizeChanging);
