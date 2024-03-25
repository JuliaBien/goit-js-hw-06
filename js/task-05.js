const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const changeOutput = event => {
  if (event.currentTarget.value === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = event.currentTarget.value;
  }
};
input.addEventListener('input', changeOutput);
