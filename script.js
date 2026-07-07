// Navbar scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

toggle.addEventListener('click', () => {
    const isActive = mobileMenu.classList.toggle('active');
    toggle.querySelector('span').textContent = isActive ? 'CLOSE' : 'MENU';
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        toggle.querySelector('span').textContent = 'MENU';
    });
});

// Scroll reveal
const revealElements = document.querySelectorAll(
    '.section-label, .split-content, .quote-block, .partners-row, ' +
    '.expertise-grid, .service-category, .section-statement, ' +
    '.clients-list, .contact-grid, .section-heading'
);

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
});

revealElements.forEach(el => observer.observe(el));

// Smooth anchor scroll (fallback)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
