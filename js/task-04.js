let counterValue = 0;
const counter = document.querySelector('#value');
const inButton = document.querySelector('button[data-action="increment"]');
const deButton = document.querySelector('button[data-action="decrement"]');
const increase = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
const decrease = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};
inButton.addEventListener('click', increase);
deButton.addEventListener('click', decrease);
