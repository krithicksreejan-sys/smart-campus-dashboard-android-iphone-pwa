const nav = document.querySelector('.site-nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 15));

document.querySelectorAll('.float-chip').forEach((chip, index) => {
  chip.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-8px)' }, { transform: 'translateY(0)' }], { duration: 3600 + index * 500, iterations: Infinity, easing: 'ease-in-out' });
});

document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
}));
