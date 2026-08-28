const form = document.getElementById('loginForm');
const card = document.querySelector('.auth-card');
const msg = document.getElementById('msg');
const modeToggle = document.getElementById('modeToggle');
const togglePassword = document.getElementById('togglePassword');
let signupMode = false;

const getUsers = () => JSON.parse(localStorage.getItem('smartCampusUsers') || '{}');
const setMessage = (text, type = '') => { msg.textContent = text; msg.className = `message ${type}`; };

modeToggle.addEventListener('click', () => {
  signupMode = !signupMode;
  card.classList.toggle('signup-mode', signupMode);
  document.getElementById('formTitle').textContent = signupMode ? 'Create your workspace' : 'Sign in to workspace';
  document.getElementById('formSubtitle').textContent = signupMode ? 'Set up a local account to explore your campus command center.' : 'Use your account to continue to the live campus view.';
  document.getElementById('submitLabel').textContent = signupMode ? 'Create account' : 'Enter dashboard';
  document.getElementById('switchPrompt').textContent = signupMode ? 'Already have an account?' : 'New to the workspace?';
  modeToggle.textContent = signupMode ? 'Sign in instead' : 'Create an account';
  document.getElementById('password').setAttribute('autocomplete', signupMode ? 'new-password' : 'current-password');
  setMessage('');
});

togglePassword.addEventListener('click', () => {
  const password = document.getElementById('password');
  const visible = password.type === 'text';
  password.type = visible ? 'password' : 'text';
  togglePassword.textContent = visible ? 'Show' : 'Hide';
  togglePassword.setAttribute('aria-label', visible ? 'Show password' : 'Hide password');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value.trim();
  if (!email || !email.includes('@')) return setMessage('Please enter a valid email address.', 'error');
  if (password.length < 6) return setMessage('Password must be at least 6 characters.', 'error');
  const users = getUsers();
  if (signupMode) {
    if (!name) return setMessage('Please enter your name.', 'error');
    if (users[email]) return setMessage('An account with this email already exists.', 'error');
    users[email] = { name, password };
    localStorage.setItem('smartCampusUsers', JSON.stringify(users));
    localStorage.setItem('smartCampusUser', JSON.stringify({ email, name }));
    setMessage('Account created. Opening your workspace…', 'success');
    setTimeout(() => { window.location.href = 'dashboard.html'; }, 500);
    return;
  }
  const demo = email === 'admin@gmail.com' && password === '123456';
  const validUser = users[email] && users[email].password === password;
  if (!demo && !validUser) return setMessage('Email or password not recognised. Try the demo account shown below.', 'error');
  const user = demo ? { email, name: 'Campus Admin' } : { email, name: users[email].name };
  localStorage.setItem('smartCampusUser', JSON.stringify(user));
  if (document.getElementById('remember').checked) localStorage.setItem('smartCampusRemember', 'true');
  setMessage('Access granted. Opening your workspace…', 'success');
  setTimeout(() => { window.location.href = 'dashboard.html'; }, 500);
});
