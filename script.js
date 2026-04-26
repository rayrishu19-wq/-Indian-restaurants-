/**
 * Navbar Scroll Effect
 * Adds a background blur and shadow to the navbar when scrolling down.
 */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/**
 * Mobile Navigation Toggle
 * Handles the hamburger menu opening/closing on mobile devices.
 */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Automatically close the mobile menu when a navigation link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

/**
 * Reservation Form Handling
 * Simulates a booking request with UI feedback.
 */
const form = document.getElementById('reservationForm');
const btn = document.getElementById('submitBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // UI Feedback: Change button state to 'Processing'
    const originalText = btn.innerText;
    btn.innerText = 'Processing...';
    btn.style.opacity = '0.8';
    
    // Simulate an API network request with a 1.5s delay
    setTimeout(() => {
        btn.innerText = 'Reservation Confirmed!';
        btn.style.background = '#28a745'; // Green success color
        btn.style.color = '#fff';
        
        console.log('Reservation submitted successfully for:', new FormData(form).get('name'));
        
        // Clear the form fields
        form.reset();
        
        // Revert button to original state after 3 seconds
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = 'var(--primary-color)';
            btn.style.color = 'var(--bg-color)';
            btn.style.opacity = '1';
        }, 3000);
        
    }, 1500);
});

/**
 * Back to Top Button Logic
 */
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
