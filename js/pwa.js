if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}

let installPrompt;
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installPrompt = event;
  const button = document.createElement('button');
  button.className = 'install-app-button';
  button.textContent = 'Install app';
  button.addEventListener('click', async () => {
    installPrompt?.prompt();
    await installPrompt?.userChoice;
    installPrompt = null;
    button.remove();
  });
  document.body.appendChild(button);
});
