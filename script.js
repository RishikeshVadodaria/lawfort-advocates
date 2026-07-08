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

// Parallax on hero image
const heroImg = document.querySelector('.hero-img');
if (heroImg) {
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (scroll < window.innerHeight) {
            heroImg.style.transform = `scale(1.1) translateY(${scroll * 0.15}px)`;
        }
    });
}

// Scroll reveal
const revealElements = document.querySelectorAll(
    '.section-label, .split-content, .quote-block, .partners-row, ' +
    '.expertise-grid, .service-category, .section-statement .section-inner, ' +
    '.clients-list, .contact-grid, .section-heading, .section-desc, ' +
    '.stats-row, .about-image, .image-divider, .retainer-card'
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

// Stagger service cards
const serviceCards = document.querySelectorAll('.service-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, i * 80);
        }
    });
}, { threshold: 0.1 });

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    cardObserver.observe(card);
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
