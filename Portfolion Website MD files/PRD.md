# PRD — Personal Portfolio Website

## 1. Purpose
Build a professional, animated personal portfolio website for **Shams Ur Rehman**, a MERN/Full-Stack developer, to showcase projects and skills to recruiters and hiring managers (target markets: Remote, Gulf, UK, Canada, EU) and to serve as the main link on the resume/CV/LinkedIn.

## 2. Target Audience
- Recruiters and hiring managers skimming quickly (should "get it" in under 10 seconds).
- Technical interviewers who want to check real project depth (GitHub links, live demos).
- Mobile viewers (many recruiters open portfolio links on phone from email/LinkedIn).

## 3. Goals
- Make a strong first impression: animated, modern, "premium" feel — inspired by 21st.dev-style component blocks (glass cards, gradient borders, smooth motion), but built with free/custom code (no paid libraries).
- Clearly present: who you are, your stack, your projects, and how to contact you.
- Make it dead simple to contact you — one-tap WhatsApp button always visible.
- Keep the codebase simple enough that you can read and edit every file yourself.

## 4. Non-Goals
- No CMS or admin dashboard — content is hardcoded in simple JS data files you edit directly.
- No blog (can be added later as a separate phase).
- No user accounts/auth/backend — this is a static, front-end-only site.
- No heavy 3D/WebGL — keep animation techniques simple (Framer Motion only).

## 5. Core Sections / Features
1. **Navbar** — sticky, logo/name, links to sections, resume download button, mobile hamburger menu.
2. **Hero** — animated intro (your name, title, short tagline), animated background/gradient, CTA buttons ("View Projects", "Contact Me").
3. **About** — short bio, photo, quick facts (location, education, availability for remote work).
4. **Skills** — grid/marquee of tech icons (React, Node, Express, MongoDB, TypeScript, etc.) with subtle hover/entry animation.
5. **Projects** — card grid showcasing: TeachFlow AI, SproutSphere, TypeQuest, Cricket Scoring App, Problem Solving Trainer, AI SaaS PM Platform. Each card: title, short description, tech tags, GitHub link, live demo link (if any), image/screenshot.
6. **Experience/Education** — timeline: KUST degree, self-directed project work.
7. **Contact** — email, LinkedIn, GitHub, and a **floating WhatsApp button** (bottom-right, all pages) that opens `wa.me` chat with a pre-filled message.
8. **Footer** — social links, copyright.

## 6. Key Functional Requirements
- WhatsApp button: floating action button, visible on all sections, opens `https://wa.me/<number>?text=<prefilled message>` in a new tab.
- Resume download: button in Navbar/Hero that downloads your CV PDF directly.
- Fully responsive: mobile, tablet, desktop.
- Scroll-based entry animations (fade-up, stagger) on every section — using Framer Motion's `whileInView`.
- Dark theme by default (matches your existing aesthetic preference).
- Fast load: no unnecessary heavy libraries or unoptimized images.

## 7. Content You'll Need to Provide Before Build
- A professional photo (or you can start with an avatar/illustration placeholder).
- 1–2 line description + tech stack + GitHub/demo links for each project.
- Final resume PDF file.
- Your WhatsApp number in international format (e.g. `+923315361576`).

## 8. Success Criteria
- A recruiter can understand what you do and see 2–3 strong projects within 15 seconds of landing.
- Site scores 90+ on Lighthouse (Performance + Accessibility).
- Works correctly on mobile Chrome/Safari and desktop Chrome/Edge/Firefox.
- You can personally open any component file and understand/edit it without help.
