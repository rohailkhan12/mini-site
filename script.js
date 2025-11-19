// Header scroll effect and progress indicator
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const progress = document.querySelector('.header-progress');
  const scrolled = window.pageYOffset;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = (scrolled / scrollHeight) * 100;
  
  if (scrolled > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  progress.style.width = `${scrollProgress}%`;
});

// Active navigation highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinksContainer.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinksContainer.classList.remove('active');
  });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real application, you would send the form data to a server here
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
  });
}

