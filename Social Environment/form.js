// Get the form elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the username and password values
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate the username and password
  if (username === '' || password === '') {
    alert('Please enter both username and password');
    return;
  }

  // Check if the username and password are valid (in this example, we'll just check if they match a hardcoded value)
  if (username === 'admin' && password === 'password') {
    // If the credentials are valid, submit the form
    form.submit();
  } else {
    alert('Invalid username or password');
  }
});