// Nav: oscurecer al hacer scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});


// Scroll reveal: secciones entran al hacerse visibles
const revealElements = document.querySelectorAll('#about, #shows, #music, #contact');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});