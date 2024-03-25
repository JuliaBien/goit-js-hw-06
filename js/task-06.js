const input = document.querySelector('#validation-input');
const inputLength = Number(input.getAttribute('data-length'));
const checkingInput = event => {
  if (event.currentTarget.value.length === inputLength) {
    event.currentTarget.className = 'valid';
  } else {
    event.currentTarget.className = 'invalid';
  }
};
input.addEventListener('blur', checkingInput);
