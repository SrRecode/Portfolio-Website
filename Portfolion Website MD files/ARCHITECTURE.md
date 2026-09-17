# Architecture — Personal Portfolio Website

## 1. Tech Stack (kept intentionally simple)
| Layer | Choice | Why |
|---|---|---|
| Framework | **React 18 + Vite** | Fastest simple setup, no server needed, easy to understand vs Next.js for a static portfolio |
| Styling | **Tailwind CSS** | Utility classes = no separate CSS files to manage, easy to tweak colors/spacing |
| Animation | **Framer Motion** | Simple `motion.div` + `whileInView` API — no complex animation code |
| Icons | **lucide-react** (free, MIT license, premium-looking outline icons) | Free, tree-shakeable, looks clean like paid icon sets |
| Contact | **wa.me link** (WhatsApp) + `mailto:` link | Zero backend needed |
| Deployment | **Vercel** or **Netlify** (free tier) | One-click deploy from GitHub |
| Fonts | Google Fonts (e.g. Inter / Space Grotesk) | Free, loads fast |

No backend, no database, no auth — this is a static site.

## 2. Folder Structure
```
portfolio/
├── public/
│   ├── resume.pdf
│   └── images/
│       ├── profile.jpg
│       └── projects/
│           ├── teachflow-ai.png
│           ├── sproutsphere.png
│           └── ...
├── src/
│   ├── main.jsx                # App entry point
│   ├── App.jsx                 # Renders all sections in order
│   ├── index.css                # Tailwind imports only
│   │
│   ├── data/                   # ⭐ Edit these files to update content — no code changes needed
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── socials.js
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── AnimatedButton.jsx
│   │   └── WhatsAppButton.jsx  # Floating button, rendered once in App.jsx
│   │
│   └── hooks/
│       └── useScrollAnimation.js  # tiny reusable wrapper around Framer Motion defaults
│
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 3. Data-Driven Content (the "5-year-old can edit it" part)
Instead of hardcoding text inside components, all editable content lives in plain JS files in `src/data/`:

```js
// src/data/projects.js
export const projects = [
  {
    title: "TeachFlow AI",
    description: "EdTech SaaS platform with AI-assisted lesson planning.",
    tags: ["NestJS", "Next.js", "Redis", "Stripe"],
    github: "https://github.com/SrRecode/teachflow-ai",
    demo: "",
    image: "/images/projects/teachflow-ai.png",
  },
  // ...more projects
];
```
Every section component just does `.map()` over this data — you never touch component code to add a new project, you only edit `data/projects.js`.

## 4. Component Flow
```
App.jsx
 ├── Navbar
 ├── Hero
 ├── About
 ├── Skills
 ├── Projects → ProjectCard (one per project, from data/projects.js)
 ├── Experience
 ├── Contact
 ├── Footer
 └── WhatsAppButton (floating, fixed position, always visible)
```

## 5. WhatsApp Contact Implementation
No API, no backend — just a link:
```jsx
const phone = "923315361576"; // no + or spaces
const message = "Hi Shams, I saw your portfolio and would like to connect!";
const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
```
Rendered as a floating circular button (bottom-right corner) using the `MessageCircle` icon from lucide-react.

## 6. State Management
None needed beyond React's built-in `useState` (only used for things like mobile menu open/close). No Redux/Zustand/Context needed — the site has no shared complex state.

## 7. Performance Considerations
- Images: compressed, served as `.webp` where possible.
- Lazy-load project images below the fold.
- Framer Motion animations use `viewport={{ once: true }}` so they don't re-trigger and drain performance while scrolling.

## 8. Deployment
1. Push repo to GitHub.
2. Connect repo to Vercel (or Netlify) — auto-detects Vite config.
3. Add custom domain later if desired (e.g. `shamsurrehman.dev`).
