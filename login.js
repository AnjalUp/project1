const validUsername = "anjal";
const validPassword = "12345";

// Login Form
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Event Listener for Form Submission
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === validUsername && password === validPassword) {
    window.location.href = "index.html"; // Redirect to the main Zoo Management page
  } else {
    errorMessage.classList.remove('hidden');
  }
});