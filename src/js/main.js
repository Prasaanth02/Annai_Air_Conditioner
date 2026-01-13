// Mobile Menu Toggle
function toggleMobileMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('mobile-open');
}

// Scroll Animations Observer
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.3 });

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-left, .animate-right, .animate-up').forEach(el => {
    scrollObserver.observe(el);
  });
});

// Floating Contact Button
document.addEventListener('DOMContentLoaded', () => {
  const mainBtn = document.getElementById('mainContactBtn');
  const options = document.getElementById('contactOptions');
  
  if (mainBtn && options) {
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
  }
});

// Form Validation
function validatePhone(phone) {
  const phoneRegex = /^[6-9][0-9]{9}$/;
  return phoneRegex.test(phone);
}

// Phone Input Filter
function filterPhoneInput(input) {
  input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
}