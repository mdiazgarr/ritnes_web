document.addEventListener('DOMContentLoaded', () => {

  // Nav scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Scroll reveal
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

  // Cookies
  const banner = document.getElementById('cookie-banner');
  const spotifyEmbed = document.querySelector('.spotify-embed iframe');

  function showSpotify() {
    if (spotifyEmbed) spotifyEmbed.style.display = 'block';
  }
  function hideSpotify() {
    if (spotifyEmbed) spotifyEmbed.style.display = 'none';
  }

  const cookieChoice = localStorage.getItem('cookies');
  if (cookieChoice === 'accepted') {
    banner.style.display = 'none';
    showSpotify();
  } else if (cookieChoice === 'rejected') {
    banner.style.display = 'none';
    hideSpotify();
  } else {
    hideSpotify();
  }

  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem('cookies', 'accepted');
    banner.style.display = 'none';
    showSpotify();
  });

  document.getElementById('cookie-reject').addEventListener('click', () => {
    localStorage.setItem('cookies', 'rejected');
    banner.style.display = 'none';
    hideSpotify();
  });

});