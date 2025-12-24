// Scroll to top on page load/refresh
window.onbeforeunload = function(){window.scrollTo(0,0);};
if(history.scrollRestoration){history.scrollRestoration='manual';}

// Main script for site interactions
document.addEventListener('DOMContentLoaded', function(){
  window.scrollTo(0,0);
  
  // Scroll animations
  const observerOptions={threshold:0.15,rootMargin:'0px 0px -50px 0px'};
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');}});
  },observerOptions);
  document.querySelectorAll('.about-container').forEach(el=>observer.observe(el));
  // Mobile menu toggle
  const navlinks = document.querySelector('.navlinks');
  const brand = document.querySelector('.brand');
  // Populate services from data file (fetch relative)
  fetch('../data/services.json').then(r=>r.json()).then(data=>{
    const grid = document.getElementById('servicesGrid');
    if(grid && data.services){
      grid.innerHTML = '';
      data.services.forEach(s=>{
        const card = document.createElement('div');
        card.className = 'service-card fade-up';
        card.innerHTML = `<h4>${s}</h4><p style="color:var(--muted);font-size:13px">Experienced technicians — ${s}</p>`;
        grid.appendChild(card);
      });
      // trigger reveal
      revealOnScroll();
    }
  }).catch(err=>{
    console.warn('Could not load services.json', err);
  });

  // Scroll reveal for elements with .fade-up
  function revealOnScroll(){
    document.querySelectorAll('.fade-up').forEach(el=>{
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 40){
        el.classList.add('in');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
  
  // Observe other scroll elements
  document.querySelectorAll('.info-item, .card').forEach(el=>observer.observe(el));

  // Quick book form (header)
  const qb = document.getElementById('quickBook');
  if(qb){
    qb.addEventListener('submit', function(e){
      e.preventDefault();
      const fd = new FormData(qb);
      alert('Thanks '+fd.get('name')+' — we will call you at '+fd.get('phone')+' to diagnose the issue.');
      qb.reset();
    });
  }

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Floating buttons: show/hide on scroll down a bit (small UX)
  const float = document.querySelector('.floating-cta');
  let lastScroll = 0;
  if(float){
    window.addEventListener('scroll', ()=>{
      const s = window.scrollY;
      if(s > 120 && s > lastScroll) float.style.transform = 'translateY(0)';
      else if(s < lastScroll) float.style.transform = 'translateY(0)';
      lastScroll = s;
    });
  }
});