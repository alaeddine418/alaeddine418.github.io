// ========================================
// Navigation
// ========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// Image Loading
// ========================================
function handleImageLoad() {
    // Handle profile images
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('image-placeholder')) {
                placeholder.style.display = 'flex';
            }
        });
        
        profileImage.addEventListener('load', function() {
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('image-placeholder')) {
                placeholder.style.display = 'none';
            }
        });
    }

    // Handle about page profile image
    const aboutProfileImage = document.getElementById('aboutProfileImage');
    if (aboutProfileImage) {
        aboutProfileImage.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('profile-placeholder')) {
                placeholder.style.display = 'flex';
            }
        });
    }
}

// ========================================
// Projects Filter
// ========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const noProjectsMessage = document.querySelector('.no-projects');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            let visibleCount = 0;
            
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                    // Add animation
                    setTimeout(() => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.transition = 'all 0.5s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    }, 10);
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show/hide no projects message
            if (noProjectsMessage) {
                if (visibleCount === 0) {
                    noProjectsMessage.style.display = 'block';
                } else {
                    noProjectsMessage.style.display = 'none';
                }
            }
        });
    });
}

// ========================================
// Contact Form
// ========================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Simulate form submission
        // In production, you would send this data to a server
        console.log('Form data:', formData);
        
        // Show success message
        if (formMessage) {
            formMessage.textContent = 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
        
        // Note: To actually send emails, you would need to:
        // 1. Use a backend service (PHP, Node.js, etc.)
        // 2. Use a service like EmailJS, Formspree, or Netlify Forms
        // Example with EmailJS:
        /*
        emailjs.send('service_id', 'template_id', formData)
            .then(() => {
                formMessage.textContent = 'Message envoyé avec succès !';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                contactForm.reset();
            })
            .catch(() => {
                formMessage.textContent = 'Erreur lors de l\'envoi. Veuillez réessayer.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            });
        */
    });
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// Animate Skills on Scroll
// ========================================
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress, .langue-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// ========================================
// Intersection Observer for Animations
// ========================================
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.info-card, .formation-card, .project-card, .soft-skill-card, .cv-section-card, .faq-item, .motivation-card'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
}

// ========================================
// Initialize on Page Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    handleImageLoad();
    animateSkills();
    setupScrollAnimations();
    
    // Add active class to current page nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Loading Animation
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// Console Message
// ========================================
console.log('%c👋 Bienvenue sur mon portfolio !', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%c🚀 Développé avec HTML, CSS et JavaScript', 'font-size: 14px; color: #6b7280;');
console.log('%c💼 Recherche activement une alternance', 'font-size: 14px; color: #6b7280;');
