// Navbar scroll effect functionality
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Reservation form submission
const form = document.getElementById('reservationForm');
const btn = document.getElementById('submitBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple state change to show interaction
    const originalText = btn.innerText;
    btn.innerText = 'Processing...';
    btn.style.opacity = '0.8';
    
    // Simulate network request
    setTimeout(() => {
        btn.innerText = 'Reservation Confirmed!';
        btn.style.background = '#28a745'; // Green success color
        btn.style.color = '#fff';
        
        // Reset form
        form.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = 'var(--primary-color)';
            btn.style.color = 'var(--bg-color)';
            btn.style.opacity = '1';
        }, 3000);
        
    }, 1500);
});
