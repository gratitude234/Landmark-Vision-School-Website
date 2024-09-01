document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



const modal = document.getElementById('aboutModal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.modal .close');

// Open the modal when the button is clicked
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal when the 'x' is clicked
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



// Script to handle modal behavior
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('aboutModal');
    const openModal = document.getElementById('openModal');
    const closeModal = document.getElementsByClassName('close')[0];

    openModal.onclick = function () {
        modal.style.display = 'block';
        document.body.classList.add('modal-open'); // Disable background scrolling
    }

    closeModal.onclick = function () {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Enable background scrolling
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open'); // Enable background scrolling
        }
    }
});
