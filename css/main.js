// ============================================
// CBK PROJECT — GLOBAL JS
// ============================================

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));

// Mobile menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const mobileOverlay = document.getElementById('mobileOverlay');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  mobileOverlay.classList.toggle('active');
});
mobileOverlay.addEventListener('click', () => {
  navLinks.classList.remove('open');
  mobileOverlay.classList.remove('active');
});
navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
  navLinks.classList.remove('open');
  mobileOverlay.classList.remove('active');
}));

// Scroll progress
const sp = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  sp.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + '%';
});

// Back to top
const btt = document.getElementById('backToTop');
window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 500));
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Reveal on scroll
const ro = new IntersectionObserver(e => e.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('visible'); ro.unobserve(en.target); }
}), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', function(e) {
  e.preventDefault();
  const t = document.querySelector(this.getAttribute('href'));
  if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
}));
