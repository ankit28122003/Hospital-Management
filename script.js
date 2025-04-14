// script.js

// Simple toggle for mobile nav (if needed later)
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  });
  