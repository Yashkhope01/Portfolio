# Portfolio

A personal portfolio site built with React, Vite, Tailwind CSS, and Framer Motion. It showcases hero, services, work experience, projects, contact form, and a coffee counter Easter egg with theme toggling.

## Tech Stack
- React 18 with Vite
- Tailwind CSS + tailwindcss-animate
- Framer Motion for animations
- Lucide icons

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
   Open the local URL shown in the terminal.
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure
- `src/App.jsx` — main layout and section composition (hero, services, experience, projects, contact, footer).
- `src/components/` — section components such as navbar, hero, services, work experience, projects, contact, footer, and the coffee counter.
- `src/components/ui/` — shared UI primitives (button, card, input, textarea, lamp, encrypted-text).
- `src/context/ThemeContext.jsx` — light/dark theme state and toggle hook.
- `src/index.css` — Tailwind base plus custom styles.

## Notable Features
- Dark/light theme toggle powered by context.
- Lazy-loaded heavy sections to improve initial load.
- Animated interactions with Framer Motion (hero text, cards, buttons, contact form feedback).
- Coffee counter with localStorage persistence and playful particles.
- Responsive design with smooth scrolling and animated backgrounds.

## Deployment
- Static build output lives in `dist/` after `npm run build`.
- The repo includes a `deploy` script for GitHub Pages (`npm run deploy`) using `gh-pages`; update `base` in `vite.config.js` if deploying to a subpath.

## Scripts
- `npm run dev` — start local dev server.
- `npm run build` — production build.
- `npm run preview` — preview the production build locally.
- `npm run deploy` — publish `dist/` to GitHub Pages (runs build first).

## Notes
- Minification uses Terser; if you prefer esbuild, change `build.minify` in `vite.config.js`.
- Tailwind is configured in `tailwind.config.js`; PostCSS in `postcss.config.js`.
