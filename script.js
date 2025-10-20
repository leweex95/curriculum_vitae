// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
updateIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Smooth scroll to section with offset for sticky nav
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('header').offsetHeight;
        const sectionTop = section.offsetTop - navHeight - 20; // 20px extra padding

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Initialize Typed.js
var typed = new Typed('#typed-text', {
    strings: [
        'Specializing in Generative AI, LLMs, and end-to-end AI product development.',
        '5+ years of hands-on AI/ML development experience.',
        'Skilled at turning AI innovations into business value.',
        'Leading cross-functional teams in innovative AI projects.',
        'Looking for remote roles in innovative AI environments.'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// // Email Dropdown Toggle
// function toggleEmailDropdown() {
//     const dropdown = document.getElementById('email-dropdown');
    
//     if (dropdown.style.display === 'none' || dropdown.style.display === '') {
//         dropdown.style.display = 'block';
//     } else {
//         dropdown.style.display = 'none';
//     }
// }

// Activity Description Toggle
function toggleActivityDescription(descId) {
    const desc = document.getElementById(descId);
    const arrow = desc.previousElementSibling.querySelector('.activity-arrow');
    
    if (desc.style.display === 'none' || desc.style.display === '') {
        desc.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        desc.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}

// Skill Description Toggle
function toggleSkillDescription(descId) {
    const desc = document.getElementById(descId);
    const arrow = desc.previousElementSibling.querySelector('.skill-arrow');
    
    if (desc.style.display === 'none' || desc.style.display === '') {
        desc.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        desc.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}