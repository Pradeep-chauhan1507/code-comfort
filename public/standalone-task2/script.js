// ===================================
// MainCrafts Multi-Page Website JavaScript
// ===================================

// ===================================
// DOM Elements
// ===================================
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');

// ===================================
// Header Scroll Effect
// ===================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===================================
// Mobile Menu Toggle
// ===================================
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Toggle icon between bars and times
        if (mobileMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});

// ===================================
// Form Validation (Required for Task 2)
// ===================================
function validateForm(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    // Get error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    
    // Reset previous errors
    clearErrors();
    
    let isValid = true;
    
    // Validate Name
    if (!nameInput.value.trim()) {
        showError(nameInput, nameError, 'Please enter your name');
        isValid = false;
    }
    
    // Validate Email
    if (!emailInput.value.trim()) {
        showError(emailInput, emailError, 'Please enter your email address');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate Message
    if (!messageInput.value.trim()) {
        showError(messageInput, messageError, 'Please enter your message');
        isValid = false;
    }
    
    // If all validations pass
    if (isValid) {
        // Show success message
        showSuccessMessage();
        
        // Reset form
        contactForm.reset();
        
        return true;
    }
    
    return false;
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to show error
function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
}

// Helper function to clear all errors
function clearErrors() {
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    const errorMessages = document.querySelectorAll('.error-message');
    
    inputs.forEach(input => input.classList.remove('error'));
    errorMessages.forEach(error => error.textContent = '');
}

// Show success message
function showSuccessMessage() {
    // Create success modal
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
        <div class="success-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. We'll get back to you soon!</p>
            <button class="btn btn-primary" onclick="closeSuccessModal()">
                Close
            </button>
        </div>
    `;
    
    // Add modal styles
    const styles = document.createElement('style');
    styles.textContent = `
        .success-modal {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            animation: fadeIn 0.3s ease;
        }
        .success-content {
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            padding: 50px;
            text-align: center;
            max-width: 400px;
            animation: scaleIn 0.3s ease;
        }
        .success-icon {
            font-size: 4rem;
            color: #22c55e;
            margin-bottom: 20px;
        }
        .success-content h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
        .success-content p {
            color: var(--text-secondary);
            margin-bottom: 30px;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes scaleIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
    `;
    
    document.head.appendChild(styles);
    document.body.appendChild(modal);
}

// Close success modal
function closeSuccessModal() {
    const modal = document.querySelector('.success-modal');
    if (modal) {
        modal.remove();
    }
}

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card, .value-card, .team-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Add animate-in styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===================================
// Smooth Scroll for Same-Page Anchors
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Real-time Form Validation
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            // Clear error when user starts typing again
            this.classList.remove('error');
            const errorElement = this.parentElement.querySelector('.error-message');
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
        
        input.addEventListener('input', function() {
            this.classList.remove('error');
            const errorElement = this.parentElement.querySelector('.error-message');
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    });
});

// ===================================
// Initialize
// ===================================
console.log('MainCrafts Multi-Page Website Loaded Successfully!');
