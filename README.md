# ByteSpace

## Project Structure

```
byte-space/
├── app/                    # Next.js App Router (routes + global setup)
│   ├── page.tsx            # Landing page: stacks all sections in order
│   ├── layout.tsx          # Root layout, loads Poppins font
│   ├── globals.css         # Global reset + font inheritance
│   ├── login/              # Login page (bonus)
│   ├── register/           # Signup page (bonus)
│   ├── not-found.tsx       # Custom 404 page
│   └── not-found.css
├── components/             # One folder per section (tsx + css)
│   ├── Front/              # Hero + Navbar
│   ├── HeroCards/          # Floating cards inside the hero
│   ├── Courses/            # Course grid with category filters
│   ├── LearningPaths/      # Learning paths section
│   ├── Growth/             # Growth / stats section
│   ├── CreatorCta/         # "Become a creator" call to action
│   ├── Testimonials/       # Community testimonials
│   └── Footer/             # Newsletter, links, legal bar
├── data/                   # Static content (course data, etc.)
├── public/                 # Images and logos
├── next.config.ts, tsconfig.json, eslint.config.mjs, postcss.config.mjs
└── package.json
```

### `app/page.tsx` (main entry)
The landing page is just a composition of section components, in the same order as the design:

```tsx
<main>
  <LandingHero />
  <Courses />
  <LearningPaths />
  <Growth />
  <CreatorCta />
  <Testimonials />
  <Footer />
</main>
```

Each section owns its own markup and CSS, so a section can be edited or replaced without touching the others.

### `app/globals.css`
Only global basics live here, with no section styles:
- Removes the default `<body>` margin
- Sets the base text color and font smoothing
- Makes `input`, `button`, `textarea` and `select` inherit the page font (browsers don't do this by default)

The font itself (Poppins) is loaded in `app/layout.tsx` with `next/font` and applied to `<body>`, so every section inherits it.

## Components

| Component | What it does |
|---|---|
| **Front** | Hero section: navbar (logo, links, sign in / join us, shop icon), heading, search bar, 3D ornaments and the sponsor strip. Layout uses CSS grid for the navbar and breakpoints at 1100 / 850 / 650px. |
| **HeroCards** | The floating UI cards in the hero (course info, learning progress, happy students). |
| **Courses** | Course cards with category filters, driven by data from `data/`. |
| **LearningPaths** | Learning path cards showing the guided routes through the courses. |
| **Growth** | Section about growing skills / the platform's numbers. |
| **CreatorCta** | Call-to-action banner for people who want to become creators. |
| **Testimonials** | Heading and description row plus three testimonial cards. Content comes from an `ITEMS` array, so adding a testimonial is one object. Stacks on screens narrower than 900px. |
| **Footer** | Logo and newsletter form, three link columns generated from an array, and a bottom bar with copyright and legal links. |

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Full landing page |
| `/login` | `app/login/` | Login form (bonus) |
| `/register` | `app/register/` | Signup form (bonus) |
| any unknown URL | `app/not-found.tsx` | Custom 404 |

## Styling approach
- Plain CSS, one file per component, imported by that component
- Shared breakpoints across sections: **1100px**, **850px**, **650px**
- Brand colors: lime `#c6ff00`, blue `#0033dd` hero background
- Images are served from `public/images` through `next/image`
