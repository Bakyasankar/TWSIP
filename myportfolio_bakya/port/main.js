document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

});

    window.onload = function() {
        const airplane = document.querySelector('.airplane');
        airplane.style.animation = 'none';
        airplane.offsetHeight; /* Trigger reflow */
        airplane.style.animation = '';
    };

