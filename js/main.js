
// Toggle code visibility in project detail pages (global function)
function toggleCode(button) {
    const section = button.closest('.detail-section');
    const codeContainer = section.querySelector('.code-container');
    
    const isHidden = getComputedStyle(codeContainer).display === 'none';
    
    if (isHidden) {
        codeContainer.style.display = 'block';
        button.textContent = 'Hide Code';
    } else {
        codeContainer.style.display = 'none';
        button.textContent = 'Show Code';
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current nav item
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentLocation.endsWith(linkPath) || 
            (currentLocation.endsWith('/') && linkPath.endsWith('index.html'))) {
            link.classList.add('active');
        }
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.featured-card, .project-card, .experience-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Handle image loading errors (fallback for missing assets)
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create a placeholder gradient div
            const placeholder = document.createElement('div');
            placeholder.style.width = '100%';
            placeholder.style.height = img.height || '300px';
            placeholder.style.background = 'linear-gradient(135deg, #00d9ff 0%, #7b2cbf 100%)';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.color = 'white';
            placeholder.style.fontSize = '1.2rem';
            placeholder.style.borderRadius = '5px';
            placeholder.textContent = 'Project Preview';
            
            if (img.parentNode) {
                img.parentNode.replaceChild(placeholder, img);
            }
        });
    });

    // HTMX event handlers for graceful fallback
    document.body.addEventListener('htmx:beforeRequest', function(event) {
        console.log('HTMX request starting:', event.detail.path);
    });

    document.body.addEventListener('htmx:afterRequest', function(event) {
        console.log('HTMX request completed:', event.detail.successful);
    });

    // Add loading indicator for HTMX requests
    document.body.addEventListener('htmx:beforeRequest', function(event) {
        const target = event.detail.target;
        if (target) {
            target.style.opacity = '0.5';
        }
    });

    document.body.addEventListener('htmx:afterRequest', function(event) {
        const target = event.detail.target;
        if (target) {
            target.style.opacity = '1';
        }
    });
});

// Add some interactive visual effects
function createParticles() {
    const hero = document.querySelector('.hero-visual');
    if (!hero) return;

    setInterval(() => {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '3px';
        particle.style.height = '3px';
        particle.style.background = '#00d9ff';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = '0.5';
        particle.style.animation = 'fadeOut 2s ease-out forwards';
        
        hero.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }, 200);
}

// Add CSS for fade animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 0.5;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize particles on landing page
if (document.querySelector('.landing')) {
    createParticles();
}
