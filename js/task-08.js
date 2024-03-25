const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', formValidation);
function formValidation(ev) {
  ev.preventDefault();
  const email = ev.target.elements.email.value;
  const password = ev.target.elements.password.value;
  if (email === '' || password === '') {
    window.alert('Please, fill all fields in!');
  }
  const filledForm = {
    email,
    password,
  };
  console.log(filledForm);
  ev.target.reset();
}
