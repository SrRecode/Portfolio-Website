# Design — Visual System

Goal: a dark, modern, "premium SaaS landing page" feel — the kind of glass cards, gradient borders, and smooth motion you see on 21st.dev showcases — but built entirely with free tools (Tailwind + Framer Motion), matching your existing dark/futuristic aesthetic preference.

## 1. Color Palette
| Token | Hex | Use |
|---|---|---|
| `background` | `#0A0A0F` | Page background (near-black) |
| `surface` | `#12121A` | Card backgrounds |
| `surface-light` | `#1C1C28` | Hover states, borders |
| `primary` | `#6366F1` (indigo) | Accent buttons, links, glow effects |
| `secondary` | `#22D3EE` (cyan) | Secondary accents, gradients |
| `text-primary` | `#F5F5F7` | Headings |
| `text-secondary` | `#A1A1AA` | Body text |
| `success` (WhatsApp) | `#25D366` | WhatsApp button color |

Gradients: use `primary → secondary` diagonal gradients for buttons, section headings, and card borders (`bg-gradient-to-r from-indigo-500 to-cyan-400`).

## 2. Typography
- Headings: **Space Grotesk** (bold, slightly futuristic feel) — Google Fonts, free.
- Body: **Inter** — highly readable, free.
- Scale: H1 `text-4xl md:text-6xl`, H2 `text-2xl md:text-4xl`, body `text-base md:text-lg`.

## 3. Component Style ("21st.dev-inspired" recreated with free code)
- **Glass cards**: `bg-surface/60 backdrop-blur-md border border-white/10 rounded-2xl`.
- **Gradient border trick**: wrap card in a div with gradient background, inner div with `bg-surface` and small padding to create a 1px gradient border effect.
- **Glow on hover**: `hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]` for project cards and buttons.
- **Buttons**: rounded-full, gradient background for primary CTA, ghost/outline style for secondary CTA.

## 4. Icons
- Library: `lucide-react` (free, MIT license, consistent 1.5px stroke outline style — reads as "premium" without any paid set).
- Keep icon sizes consistent per context (nav icons `20px`, skill icons `32px`, section icons `24px`).
- Tech-stack icons for Skills section: use `lucide-react`'s generic icons where a tech-specific one doesn't exist, or free SVG logos from **Simple Icons** (simpleicons.org — free, MIT licensed, has real brand logos for React, Node, MongoDB, etc.).

## 5. Animation Guidelines
- **Entry animation** (per section): fade up 20px + opacity 0→1, `duration: 0.5s`, staggered by `0.1s` per child element.
- **Hover animation** (cards/buttons): scale `1.02–1.05`, plus the glow shadow above.
- **Hero background**: slow-moving blurred gradient blobs (`animate-pulse` or a simple Framer Motion loop), kept subtle — not distracting.
- **WhatsApp button**: gentle pulse ring animation to draw the eye without being annoying (e.g. pulse every 3–4s, not constant).

## 6. Layout & Spacing
- Max content width: `max-w-6xl mx-auto` for all sections.
- Section vertical padding: `py-20 md:py-32` for generous breathing room.
- Grid for Projects: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.

## 7. Imagery
- Project screenshots: consistent aspect ratio (16:9), rounded corners (`rounded-xl`), subtle border.
- Profile photo: circular or rounded-square with a soft gradient ring around it.

## 8. Tone
Professional but with personality — the animations and gradient accents should feel confident and modern (matching a hiring manager's expectation of a strong front-end developer) without tipping into "gamer/anime" territory, since this is a professional-facing document (save the anime-inspired gamified look for personal projects like TypeQuest).
