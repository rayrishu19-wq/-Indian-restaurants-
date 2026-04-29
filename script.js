// Enable strict mode for better error catching
'use strict';

/**
 * Aura Premium Fine Dining - Main Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initReservationForm();
    initBackToTop();
});

/**
 * Navbar Scroll Effect
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Mobile Navigation Toggle
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

/**
 * Reservation Form Handling
 */
function initReservationForm() {
    const form = document.getElementById('reservationForm');
    const btn = document.getElementById('submitBtn');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const originalText = btn.innerText;
        btn.innerText = 'Processing...';
        btn.style.opacity = '0.8';
        
        setTimeout(() => {
            btn.innerText = 'Reservation Confirmed!';
            btn.style.background = '#28a745';
            btn.style.color = '#fff';
            
            form.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = 'var(--primary-color)';
                btn.style.color = 'var(--bg-color)';
                btn.style.opacity = '1';
            }, 3000);
            
        }, 1500);
    });
}

/**
 * Back to Top Button Logic
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

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
}

// End of main application logic


// Future utility functions placeholder

