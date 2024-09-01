// // script.js
// document.querySelector('.open-modal-btn').addEventListener('click', function() {
//     document.getElementById('modal').style.display = 'flex';
// });

// document.querySelector('.close-btn').addEventListener('click', function() {
//     document.getElementById('modal').style.display = 'none';
// });

// window.addEventListener('click', function(event) {
//     if (event.target == document.getElementById('modal')) {
//         document.getElementById('modal').style.display = 'none';
//     }
// });


















document.addEventListener("DOMContentLoaded", function() {
    const enrollBtn = document.getElementById("enroll-btn");
    const modal = document.getElementById("registration-modal");
    const closeBtn = document.querySelector("#registration-modal .close-btn");

    enrollBtn.addEventListener("click", function() {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent background scroll
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable background scroll
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Re-enable background scroll
        }
    });
});

