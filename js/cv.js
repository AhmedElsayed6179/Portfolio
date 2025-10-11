// script.js
AOS.init({
  duration: 800,
  once: true,
});

// Mobile menu toggle
const menuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// ========================= PARTICLES.JS INITIALIZATION =========================
window.onload = function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 45,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#F0F4F8" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: { value: 0.8, random: false },
      size: { value: 10, random: true },
      line_linked: {
        enable: true,
        distance: 220,
        color: "#F0F4F8",
        opacity: 0.4,
        width: 1.8,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
};

const sections = document.querySelectorAll("section");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Preloader hide after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";
    setTimeout(() => (preloader.style.display = "none"), 500);
  }, 500);

});

