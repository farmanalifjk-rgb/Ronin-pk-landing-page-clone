<div align="center">

# Ronin.pk Landing Page Clone

A modern, responsive landing-page clone inspired by **ronin.pk** — built with **HTML + Tailwind CSS + JavaScript**.

<a href="VERCEL_DEPLOYMENT_URL_HERE"><strong>Live Demo</strong></a> ·
<a href="https://github.com/farmanalifjk-rgb/Ronin-pk-landing-page-clone/issues"><strong>Report Bug</strong></a> ·
<a href="https://github.com/farmanalifjk-rgb/Ronin-pk-landing-page-clone/issues"><strong>Request Feature</strong></a>

<br/>

<!-- Badges -->
<img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff">
<img alt="Tailwind" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff">
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000">
<img alt="Vercel" src="https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel&logoColor=fff">
<img alt="License" src="https://img.shields.io/badge/License-MIT-green">

</div>

---

## Preview 🖼️

<img alt="Landing-page-screenshot" src="">

![Ronin Landing Page Preview]

---

## Highlights ✨

- 🧭 **Sticky top navigation** with category links (Audio & Buds, Smart Watches, Charging Devices, Accessories)
- 🧩 **Mega-menu dropdown sections** with tabbed categories (Earbuds, Handsfree, Neckbands, Speakers, Headphones, etc.)
- 🖱️ **Custom cursor UI** (outer circle + dot tracking)
- 💬 **Floating WhatsApp CTA button** with tooltip
- 🖼️ **Hero slider** with layered crossfade images + Prev/Next controls
- 🛍️ Product sections like:
  - **New Arrivals**
  - **Top Trending**
  - **Latest News**
  - **Featured Globally** (brand/channel carousel)
- 🎞️ **Inline looping video icons** (delivery, rating, warranty, certification)
- 🧷 Smooth UI polish: hover shadows, gradients, transitions, rounded cards

---

## Responsiveness 📱💻

Designed with a mobile-first approach using Tailwind responsive utilities:

- ✅ Mobile-friendly header layout (icons + menu)
- ✅ Desktop mega menus enabled on larger breakpoints
- ✅ Horizontal carousels using `overflow-x-auto` / drag-like interaction patterns
- ✅ Flexible grids/cards with responsive widths (`xs`, `sm`, `md`, `lg`, `xl`)

---

## Performance & Best Practices ⚡

This is a static landing page optimized for fast delivery:

- ✅ **Static assets** (images/videos) served from `/public`
- ✅ Minimal runtime overhead (plain JS files)
- ✅ CSS utilities via Tailwind (keeps styling consistent and scalable)

**Notes / Suggestions (optional improvements):**
- Compress large images to `.webp` and videos to optimized formats
- Add `loading="lazy"` to below-the-fold images
- Consider using a build tool (Vite) if you want minified bundling and cache-busting

---

## Tech Stack 🧰

- **HTML5**
- **Tailwind CSS**
- **Vanilla JavaScript** (`1.js` → `6.js`)
- Google Fonts (Inter, Orbitron)

---

## Project Structure 🗂️

```text
.
├── index.html
├── style.css
├── 1.js
├── 2.js
├── 3.js
├── 4.js
├── 5.js
├── 6.js
├── public/
│   ├── img/
│   └── video/
└── LICENSE
```

---

## Getting Started 🚀

### 1) Clone the repository
```bash
git clone https://github.com/farmanalifjk-rgb/Ronin-pk-landing-page-clone.git
cd Ronin-pk-landing-page-clone
```

### 2) Run locally
Since it’s a static project, you can use any local server. Examples:

**VS Code Live Server**
- Install the “Live Server” extension
- Right click `index.html` → **Open with Live Server**

**Python**
```bash
python -m http.server 5500
```
Then open: `http://localhost:5500`

---

## Deployment ▲ (Vercel)

1. Push the repo to GitHub
2. Import project into **Vercel**
3. Deploy

Live URL: **VERCEL_DEPLOYMENT_URL_HERE**

---

## Disclaimer 📌

This project is made for **learning & practice** purposes.  
All brand names, logos, and assets belong to their respective owners.

---

## License 📄

Licensed under the **MIT License** (see `LICENSE`).
