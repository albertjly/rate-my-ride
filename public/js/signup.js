async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  console.log({
    "username": username,
    "email": email,
    "password": password
  });

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      console.log('success');
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}


const signUpBtn = document.querySelector('#signup-form');
signUpBtn.addEventListener('submit', signupFormHandler);