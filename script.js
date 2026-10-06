// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== Typed Role Effect =====
const roles = [
  'Full-Stack Developer',
  'React Specialist',
  'Node.js Expert',
  'UI/UX Enthusiast',
  'Open Source Contributor'
];

const typedRole = document.getElementById('typed-role');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeRole() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typedRole.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    typedRole.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100;
  }
  
  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500;
  }
  
  setTimeout(typeRole, typeSpeed);
}

setTimeout(typeRole, 1000);

// ===== Counter Animation =====
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);
      
      counter.textContent = current + '+';
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    
    requestAnimationFrame(update);
  });
}

// ===== Skill Bars Animation =====
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = progress + '%';
  });
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      if (entry.target.classList.contains('hero-stats')) {
        animateCounters();
      }
      
      if (entry.target.classList.contains('skills-grid')) {
        animateSkillBars();
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements
document.querySelectorAll('.section-header, .about-content, .skill-category, .timeline-item, .project-card, .contact-content, .hero-stats, .skills-grid').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Trigger hero stats animation on load
window.addEventListener('load', () => {
  setTimeout(animateCounters, 600);
  animateSkillBars();
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  console.log('Form submitted:', data);
  
  const submitBtn = contactForm.querySelector('.btn-submit');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<span>Message Sent!</span> ✓';
  submitBtn.style.background = '#10b981';
  
  setTimeout(() => {
    submitBtn.innerHTML = originalText;
    submitBtn.style.background = '';
    contactForm.reset();
  }, 3000);
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  
  setTimeout(() => {
    document.querySelectorAll('.hero-badge, .hero-title, .hero-description, .hero-stats, .hero-actions').forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12}s`;
    });
  }, 100);
});

// ===== Skills Cloud Hover Animation =====
document.querySelectorAll('.cloud-item').forEach((item, index) => {
  item.style.animationDelay = `${index * 0.05}s`;
});
