# iQOO 15R — Landing Page (React + Vite)

A concept product landing page for a "just-released" iQOO 15R flagship. Dark
motorsport-inspired aesthetic, an animated Monster Halo light, a live colorway
switcher, and a tabbed telemetry-style spec sheet.

## Stack

- **React 18** — hooks only (`useState`, `useEffect`, and a custom
  `useReveal` hook built on `IntersectionObserver`)
- **Vite** — dev server + production build
- **Plain CSS** — CSS custom properties, no framework, one stylesheet
- **Google Fonts** — Chakra Petch (display), Inter (body), IBM Plex Mono (data)
- **Unsplash** — lifestyle photography in the Gallery section only. The phone
  itself is a hand-built SVG illustration (`PhoneSVG.jsx`), not a stock photo,
  so it actually looks like the product being described.

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build     # outputs to /dist
npm run preview   # serve that build locally to sanity-check it
```

Deploy the contents of `/dist` to any static host (Vercel, Netlify, S3, GitHub
Pages, etc.).

## Project structure

```
iqoo-15r-landing/
├── index.html                # Vite entry, loads fonts + /src/main.jsx
├── src/
│   ├── main.jsx               # ReactDOM root
│   ├── App.jsx                # Composes all sections, owns colorway state
│   ├── App.css                # Design tokens + every component's styles
│   ├── index.css              # Reset / base element styles
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav, shrinks on scroll, mobile menu
│   │   ├── Hero.jsx            # Headline + live phone render
│   │   ├── PhoneSVG.jsx        # The custom illustrated phone (3 colorways)
│   │   ├── Ticker.jsx          # Scrolling stat marquee
│   │   ├── SpecTabs.jsx        # Interactive Performance/Display/Camera/Battery tabs
│   │   ├── Colorways.jsx       # Finish picker, updates PhoneSVG live
│   │   ├── Gallery.jsx         # Scroll-reveal image grid
│   │   ├── CTASection.jsx      # Pre-order email capture (client-side only)
│   │   ├── Footer.jsx
│   │   └── Reveal.jsx          # Wrapper that fades children in on scroll
│   ├── hooks/
│   │   └── useReveal.js        # IntersectionObserver hook
│   └── data/
│       ├── specs.js            # All spec-tab content
│       └── colorways.js        # All colorway content
├── package.json
└── vite.config.js
```

## Customize

- **Colors / type scale** — edit the `:root` tokens at the top of `src/App.css`.
- **Copy & numbers** — `src/data/specs.js` and `src/data/colorways.js`.
- **Gallery photos** — swap the Unsplash URLs in `src/components/Gallery.jsx`
  for your own licensed imagery.
- **Product name / model** — search-and-replace "15R" and the headline in
  `Hero.jsx` and `index.html`.

## Accessibility notes already built in

- Visible focus rings on every interactive element (`:focus-visible`)
- `prefers-reduced-motion` disables the halo pulse, marquee, float, and
  scroll-reveal animations
- Tabs and the colorway picker use proper `role="tab"` / `role="radiogroup"`
  semantics with `aria-selected` / `aria-checked`

## Honesty note

This is a fan-made concept page (see the footer disclaimer) — specs and
imagery are illustrative placeholders, not an official iQOO release. Swap in
real assets and copy before using this for anything production-facing.
