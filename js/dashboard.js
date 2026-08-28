const storedUser = JSON.parse(localStorage.getItem('smartCampusUser') || 'null');
if (!storedUser) window.location.replace('login.html');

const user = storedUser || { name: 'Campus Admin', email: 'admin@gmail.com' };
const firstName = user.name.split(' ')[0];
document.getElementById('greeting').textContent = `Good morning, ${firstName}.`;
document.getElementById('profileName').textContent = user.name;
document.getElementById('profileEmail').textContent = user.email;
document.getElementById('avatar').textContent = user.name.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase();

document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('smartCampusUser');
  window.location.href = 'login.html';
});

const temp = document.getElementById('temp');
const energy = document.getElementById('energy');
const air = document.getElementById('air');
const lastSync = document.getElementById('lastSync');
const airStates = ['Excellent', 'Excellent', 'Good', 'Excellent'];
function updateLiveData() {
  const now = new Date();
  lastSync.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  temp.innerHTML = `${(28.8 + Math.random() * 1.5).toFixed(1)}<small>°C</small>`;
  energy.innerHTML = `${Math.floor(405 + Math.random() * 48)}<small> W</small>`;
  air.textContent = airStates[Math.floor(Math.random() * airStates.length)];
}
setInterval(updateLiveData, 4000);

document.querySelectorAll('.device').forEach(device => {
  const input = device.querySelector('input');
  input.addEventListener('change', () => {
    const name = device.querySelector('strong').textContent;
    const status = input.checked ? 'turned on' : 'turned off';
    const activityList = document.getElementById('activityList');
    const item = document.createElement('div');
    item.className = 'activity';
    item.innerHTML = `<span class="activity-icon ${input.checked ? 'blue' : 'orange'}">${input.checked ? '✓' : '−'}</span><div><strong>${name} ${status}</strong><small>Local control · just now</small></div><span class="activity-time">LIVE</span>`;
    activityList.prepend(item);
    if (activityList.children.length > 4) activityList.lastElementChild.remove();
  });
});

document.querySelectorAll('.sidebar nav a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}));
