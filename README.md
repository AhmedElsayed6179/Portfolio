<div align="center">
  <h1>🚀 Ahmed Mohamed | Front-End Developer Portfolio</h1>
  <p>A modern, highly interactive personal portfolio designed to showcase projects, skills, and professional experience with a focus on cutting-edge UI/UX and seamless performance.</p>

  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahmed-mohamed-2085a7322)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AhmedElsayed6179)
</div>

---

## 🌟 Project Overview

This repository contains the source code for my interactive CV and portfolio website. The architecture is built with a mobile-first approach, ensuring a flawless responsive design across all devices. It leverages modern styling techniques, including Glassmorphism and dynamic hover states, to deliver a premium user experience.

### ✨ Key Features

* **Seamless CV Integration:** An interactive CV viewer that allows users to read the resume directly within the browser (Image/PDF) with smooth zoom and transition animations.
* **One-Click Download:** Optimized direct download functionality for the resume.
* **Dynamic Preloader:** A stylish, custom-built loading animation that ensures all assets are fully rendered before the user interacts with the page.
* **Advanced UI/UX:** Incorporates modern design trends like Glassmorphism, glowing indicators, and animated, responsive navigation bars with optimized SVG icons.
* **Interactive Backgrounds:** Engaging visual effects utilizing particle physics for a dynamic feel.

---

## 🛠️ Project Tech Stack

The core technologies utilized to build *this specific portfolio* include:

* **Markup & Styling:** HTML5, CSS3 (Modern Flexbox & CSS Grid)
* **Logic & Interactivity:** Vanilla JavaScript (ES6+)
* **Animation Libraries:** [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
* **Visual Effects:** [Particles.js](https://vincentgarreau.com/particles.js/)
* **Assets:** Font Awesome (Icons)

---

## 💡 Core Proficiencies & Skills

Beyond this portfolio, my professional skill set as a Front-End Developer includes:

* **Frameworks & Libraries:** Angular, RxJS
* **Languages:** TypeScript, HTML, CSS/SCSS
* **State Management & Data:** Handling complex API integrations (RESTful APIs), BehaviorSubjects, and managing component lifecycles.
* **Design Implementation:** Translating UI/UX designs into pixel-perfect, interactive web applications.

---

## 📂 Repository Structure

```text
src/
├── index.html               (Syne + DM Sans fonts)
├── styles.scss              (Global SASS variables & utilities)
└── app/
    ├── models/
    │   └── portfolio.model.ts       (TypeScript interfaces)
    ├── services/
    │   └── portfolio-data.service.ts  (centralized)
    └── components/
        ├── preloader/     ✅
        ├── navbar/        ✅ (responsive + scroll detection)
        ├── hero/          ✅ (typewriter + floating cards + stats)
        ├── about/         ✅ (highlights grid + visual card)
        ├── skills/        ✅ (animated grid)
        ├── portfolio/     🔄 (show more/less)
        ├── services/      🔄
        ├── contact/       🔄 (formspree integration)
        └── footer/        🔄

