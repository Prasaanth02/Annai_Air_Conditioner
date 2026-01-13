function toggleMobileMenu(){
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('mobile-open');
}

// Floating contact button
const mainBtn = document.getElementById('mainContactBtn');
const options = document.getElementById('contactOptions');

mainBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  options.classList.toggle('show');
  mainBtn.classList.toggle('active');
});

document.addEventListener('click', () => {
  options.classList.remove('show');
  mainBtn.classList.remove('active');
});

options.addEventListener('click', (e) => {
  e.stopPropagation();
});