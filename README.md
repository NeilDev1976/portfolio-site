# Personal Portfolio Website

A modern portfolio website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **React Router**.  
This project serves both as a professional online presence and as a practical space to rebuild and demonstrate development skills while I transition back into software development.

---

## Status
**Active development.**  
Initial commit contains basic routing and placeholder pages: **Home**, **About**, and a **404 Not Found** page. Styling will be added progressively.

---

## Features

### Current
- React + TypeScript scaffolded with Vite
- Client-side routing using React Router
- Initial pages: Home, About, 404 Not Found
- Tailwind CSS configured
- Clean project structure ready for expansion

### Planned
- Fully responsive layout for all viewports
- Comprehensive About Me page (bio, contact)
- Skills, qualifications, and employment history sections
- Projects page populated from the GitHub API
- Reusable UI components and layout system
- Animations, accessibility improvements, and polish
- Light / dark theme toggle
- SEO metadata and Open Graph support
- Continuous deployment (Netlify / Vercel / GitHub Pages)

---

## Tech Stack
- **Frontend:** React  
- **Language:** TypeScript  
- **Bundler / Dev server:** Vite  
- **Styling:** Tailwind CSS  
- **Routing:** React Router  
- **Deployment:** TBD (Vercel / Netlify / GitHub Pages)

---

## Getting Started

### Prerequisites
- Node.js **20.19.0+** recommended (some Vite/plug-ins check node engine)
- npm (or pnpm / yarn)

### Install
```bash
# from project root
npm install
```

> If you see `EBADENGINE` warnings about Node version, either update Node to the recommended version or ignore for now; some plugins expect a newer Node runtime.

### Dev server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build locally
```bash
npm run preview
```

---

## Project Structure (example)
```
src/
  assets/
  components/
  pages/
    Home.tsx
    About.tsx
    NotFound.tsx
  App.tsx
  main.tsx
  index.css
public/
  favicon.ico
README.md
package.json
vite.config.ts
tailwind.config.js
```

---

## Routing
This app uses **React Router** for client-side navigation. The initial routes:
- `/` — Home
- `/about` — About
- `*` — 404 Not Found

You can add new routes in `src/App.tsx` (or wherever you define routes) and create corresponding page components in `src/pages/`.

---

## Development notes / goals
- Keep components small and reusable
- Use TypeScript interfaces for props and API responses
- Pull GitHub project data with the GitHub REST API (or GraphQL if needed)
- Prioritise accessibility — keyboard navigation, semantic HTML, ARIA where required
- Add unit tests for components (Jest / React Testing Library) as portfolio grows

---

## Contributing
This is a personal portfolio project. If you want to suggest improvements or send fixes, feel free to open an issue or a pull request. For significant changes, please discuss via issues first.

---

## License
This project is licensed under the **MIT License** — see `LICENSE` for details.

---

## Contact
Your Name — your.email@example.com  
Portfolio: _your-portfolio-url_  
GitHub: _your-github-username_

