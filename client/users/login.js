const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  const options = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  };
  fetch('/login', options)
    .then((res) => {
      window.location.href = '/authorized';
    })
    .catch((err) => console.log(err));
});
