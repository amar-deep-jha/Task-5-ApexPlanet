// --- Active link highlighting across pages ---
function setActiveLink() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    const href = a.getAttribute('href');
    // Treat root as index.html too
    const target = href === './' ? 'index.html' : href;
    if (path === target) a.classList.add('active'); else a.classList.remove('active');
  });
}

// --- Smooth scrolling for same-page anchors (fallback if used) ---
function enableSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// --- Reveal on scroll using IntersectionObserver ---
function enableScrollReveal() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// --- Scroll-to-top button ---
function setupScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 300 ? 'inline-flex' : 'none';
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- Collapse mobile menu after click (Bootstrap) ---
function collapseOnNavClick() {
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const navbarCollapse = document.getElementById('navbarNav');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) ||
                           new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveLink();
  enableSmoothAnchors();
  enableScrollReveal();
  setupScrollTop();
  collapseOnNavClick();
});
