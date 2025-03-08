// JavaScript for toggling the navigation menu on mobile view
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const navLinks = document.getElementById("nav-links");

    // Toggle the navigation menu on clicking the hamburger icon
    hamburgerIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close the menu when clicking on a nav link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});

