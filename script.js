// script.js

// Navigation Menu Effect
document.querySelector('nav ul').addEventListener('mouseover', function() {
    this.style.background = '#333';
});
document.querySelector('nav ul').addEventListener('mouseout', function() {
    this.style.background = '';
});

// Animation for "Our Services" Section
const servicesSection = document.getElementById('services');
const servicesList = document.querySelectorAll('#services ul li');

servicesList.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.classList.add('hover');
    });
    item.addEventListener('mouseout', function() {
        item.classList.remove('hover');
    });
});

// Add hover effect to navigation menu items
document.querySelector('nav ul').addEventListener('mouseover', function() {
    this.children[0].style.background = '#333';
});
document.querySelector('nav ul').addEventListener('mouseout', function() {
    this.children[0].style.background = '';
});

function validateForm(name, email, phone) {
    const errors = [];

    if (!name.trim()) {
        errors.push('Name is required');
    }

    if (!email.trim() || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(email)) {
        errors.push('Invalid email address');
    }

    if (!phone.trim() || !/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
        errors.push('Invalid phone number format (XXX-XXX-XXXX)');
    }

    return errors;
}

document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;

    const errors = validateForm(name, email, phone);

    if (errors.length > 0) {
        errorMessages = '';
        errors.forEach(function(error) {
            errorMessages += error + '<br>';
        });
        document.getElementById('error-message').innerHTML = errorMessages;
        event.preventDefault();
    } else {
        // submit form data to server
        console.log('Form data:', name, email, phone);
    }
});

function toggleMenu() {
    const nav = document.querySelector('nav');
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
    } else {
        nav.classList.add('open');
    }
}

document.querySelector('button').addEventListener('click', toggleMenu);

function animateServices() {
    const servicesSection = document.getElementById('services');
    if (window.scrollY > servicesSection.offsetTop - 100) {
        // animation code here
        console.log('Scrolling to services section');
    }
}

window.addEventListener('scroll', animateServices);
