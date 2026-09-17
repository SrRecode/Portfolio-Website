# Rules — Coding & Content Rules for This Project

These rules apply to anyone (or any AI coding tool — Claude Code, Cursor, etc.) building this project. The #1 priority is: **Shams must be able to open any file and understand it without help.**

## 1. Simplicity Rules
- Use **functional components + hooks only**. No class components.
- One component = one responsibility = one file. If a component file goes over ~120 lines, split it.
- No premature abstraction — don't build a "generic reusable system" for things used only once.
- No unnecessary state managers (Redux, Zustand, Recoil). `useState`/`useEffect` is enough for this project.
- Avoid clever one-liners (e.g. deeply nested ternaries, complex destructuring). Prefer 2–3 clear lines over 1 clever line.
- Every non-obvious line gets a short comment explaining **why**, not just what.

## 2. Naming Rules
- Components: PascalCase (`ProjectCard.jsx`).
- Functions/variables: camelCase (`handleMenuToggle`).
- Data files: camelCase, plural for lists (`projects.js`, `skills.js`).
- No abbreviations that aren't obvious (`btn` → `button`, `proj` → `project`).

## 3. Styling Rules
- Tailwind utility classes directly in JSX — no separate CSS-in-JS libraries.
- Keep a small set of reused values in `tailwind.config.js` (brand colors, font families) instead of repeating hex codes everywhere.
- Mobile-first: write base styles for mobile, then add `md:` / `lg:` overrides.

## 4. Animation Rules
- Use Framer Motion's `whileInView` for scroll animations — never manual scroll-event listeners.
- Keep animation durations short (0.3–0.6s) — flashy is fine, laggy is not.
- Always set `viewport={{ once: true }}` so animations don't replay annoyingly on scroll up/down.
- No animation should block content from being readable/clickable if JS fails to load (progressive enhancement — content must exist in the DOM regardless).

## 5. Icons & Assets Rules
- Only use **free, MIT/permissive-licensed** icon sets — `lucide-react` is the default. If a different set is used (e.g. `react-icons`, `phosphor-icons`), it must also be free with no attribution-payment requirement.
- No stock photos/icons that require a paid license, even "free trial" ones.
- Compress all images before adding them (use tools like Squoosh or TinyPNG).

## 6. Content Rules
- All text content (project names, descriptions, skills, social links) lives in `src/data/*.js` — never hardcoded inside a component's JSX.
- Adding a new project = adding one object to `data/projects.js`. No component code should need to change.

## 7. Accessibility Rules (basic, not exhaustive)
- All images have `alt` text.
- All interactive elements (buttons/links) are real `<button>`/`<a>` tags — never a `<div onClick>`.
- Color contrast: text must be readable on dark background (avoid low-contrast gray-on-gray).
- WhatsApp/contact buttons must be reachable and usable via keyboard (Tab + Enter).

## 8. Git/Workflow Rules
- One feature per commit (e.g. "Add Hero section", "Add WhatsApp floating button").
- Don't commit `node_modules`, `.env`, or build output (`dist/`) — `.gitignore` should already exclude these from Vite's default setup.

## 9. What NOT to Do
- Don't add a backend/database "just in case."
- Don't add authentication/login — this is a public portfolio.
- Don't copy paid 21st.dev component source code directly if it's behind a paywall — recreate the *visual style* (glass cards, gradient borders, smooth hover states) using your own Tailwind + Framer Motion code.
- Don't install a UI kit (MUI, Chakra, Ant Design) — it fights with the custom, distinctive look we want and adds complexity you'd have to learn.
