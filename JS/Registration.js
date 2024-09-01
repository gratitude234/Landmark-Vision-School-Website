document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Registration Submitted!');
        registrationForm.reset();
    });
});
