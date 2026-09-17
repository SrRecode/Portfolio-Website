# Phases — Build Roadmap

Each phase is small and independently testable — after every phase, you should be able to run `npm run dev` and see visible progress.

## Phase 0 — Project Setup
- `npm create vite@latest portfolio -- --template react`
- Install Tailwind CSS and configure `tailwind.config.js` + `index.css`.
- Install `framer-motion` and `lucide-react`.
- Set up folder structure from ARCHITECTURE.md (`components/`, `data/`, `hooks/`).
- Add Google Font (e.g. Inter) via `index.html`.

**Done when:** blank page loads at `localhost:5173` with Tailwind working (test with a colored `<div>`).

## Phase 1 — Layout Shell
- Build `Navbar.jsx` (logo/name, nav links, resume download button, mobile hamburger menu).
- Build `Footer.jsx` (social links, copyright).
- Wire both into `App.jsx`.

**Done when:** navbar and footer render and the mobile menu opens/closes correctly.

## Phase 2 — Hero Section
- Build `Hero.jsx`: name, animated tagline, two CTA buttons ("View Projects", "Contact Me").
- Add entrance animation (fade-up + stagger) using Framer Motion.
- Add subtle animated background (gradient blob or grid pattern — kept simple, CSS/Tailwind only).

**Done when:** Hero looks polished and animates in smoothly on page load.

## Phase 3 — About + Skills
- Build `About.jsx`: photo, bio, quick facts.
- Build `Skills.jsx`: icon grid (or horizontal marquee) of tech stack, with scroll-in animation.
- Populate `data/skills.js`.

**Done when:** both sections scroll into view with animation and display real content.

## Phase 4 — Projects Showcase
- Populate `data/projects.js` with your real projects (TeachFlow AI, SproutSphere, TypeQuest, Cricket Scoring App, Problem Solving Trainer, AI SaaS PM Platform).
- Build `ProjectCard.jsx` (image, title, description, tags, GitHub/demo links, hover animation).
- Build `Projects.jsx` to map over the data and render a responsive grid.

**Done when:** all projects display correctly on mobile and desktop, links work.

## Phase 5 — Experience/Education + Contact
- Build `Experience.jsx`: simple timeline (KUST degree, self-directed project work).
- Build `Contact.jsx`: email, LinkedIn, GitHub buttons + a simple "let's talk" call to action.

**Done when:** contact section is clear and all links open correctly.

## Phase 6 — WhatsApp Floating Button
- Build `WhatsAppButton.jsx`: fixed-position circular button, bottom-right, using the `wa.me` link format from ARCHITECTURE.md.
- Add subtle pulse/hover animation so it's noticeable but not annoying.
- Render it once in `App.jsx` so it's visible on every scroll position.

**Done when:** clicking it opens WhatsApp (web or app) with your number and a pre-filled message.

## Phase 7 — Polish Pass
- Check responsiveness at 375px, 768px, 1024px, 1440px widths.
- Check all animations trigger once and don't feel janky.
- Run Lighthouse audit — fix any performance/accessibility flags (usually image sizes or contrast).
- Add favicon + page `<title>`/meta description for SEO.

## Phase 8 — Deploy
- Push to GitHub.
- Deploy via Vercel or Netlify.
- Test the live URL on an actual phone, then add the link to your resume/LinkedIn.
