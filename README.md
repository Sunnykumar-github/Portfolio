# Sunny Kumar – Personal Portfolio

A premium, interactive personal portfolio website designed to showcase a trajectory in data-driven operations, analytics, and software engineering.

## 🚀 Tech Stack & Design System
This project is built using modern web technologies, focusing on creating a seamless, immersive, and highly interactive user experience:
- **Framework:** React / Vite
- **Styling:** Tailwind CSS (with customized CSS variables mapping to a dynamic, scalable design system)
- **Aesthetics & UI:** Glassmorphism (`backdrop-blur`), translucent gradient structural borders, and a true dark mode canvas.
- **Dynamic Elements:** Scroll-driven AOS animations paired with custom-mapped SVG mathematical abstract backgrounds (Isometric hexagonal patterns, dot matrices, and cross-hair grids).
- **Background Animations:** Cinematic pulsing orbital lights responding to container bounds.

## 🛠️ Features
- **Responsive Architecture:** The entire layout is mobile-first, deploying a smooth hamburger dropdown menu on smaller devices while adapting cleanly to ultra-wide desktop monitors.
- **Data-Driven Components:** Complex sections like "Education" (featuring a semester-by-semester coursework accordion) and "Experience" are decoupled from the main UI, pulling data from cleanly separated arrays to allow instant updates without breaking the JSX structure.
- **Infinite Marquee:** The Testimonial section features a custom-engineered CSS-driven infinite loop for flawlessly smooth timeline scrolling.

## ⚡ Running Locally
To launch the portfolio locally on your machine:
```bash
# Install dependencies
npm install

# Start the development server (with network host access)
npm run dev -- --host
```