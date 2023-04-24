const signupForm = document.querySelector('#signup-form');
const signupBtn = document.querySelector('#signupBtn');

signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = signupForm.username.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  const options = {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
    headers: { 'Content-Type': 'application/json' },

  };
  fetch('/signed', options)
    .then((data) => {
      window.location.href = '/authorized';
    })
    .catch((err) => console.error);
});
