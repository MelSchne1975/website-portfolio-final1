// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Lightbox
const box = document.querySelector('.lightbox');
const boxImg = box.querySelector('img');
let lastFocus = null;

function openBox(src, alt) {
  lastFocus = document.activeElement;
  boxImg.src = src;
  boxImg.alt = alt;
  box.hidden = false;
  document.body.style.overflow = 'hidden';
  box.querySelector('.lightbox-close').focus();
}
function closeBox() {
  box.hidden = true;
  boxImg.src = '';
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

document.querySelectorAll('.zoom').forEach(btn => {
  btn.addEventListener('click', () => openBox(btn.dataset.full, btn.querySelector('img').alt));
});
box.addEventListener('click', e => { if (e.target !== boxImg) closeBox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !box.hidden) closeBox(); });

// Before / after slider
document.querySelectorAll('.compare').forEach(c => {
  const range = c.querySelector('input');
  const set = () => c.style.setProperty('--pos', range.value + '%');
  range.addEventListener('input', set);
  set();
});
