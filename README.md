# Optimal — Marketing Site

Marketing site for [Optimal](https://optimal.lat), built with Astro 6 and React islands. Static-first, SEO-aware and prepared to plug a Mandrill (Mailchimp Transactional) backend when needed.

## Stack

- **[Astro 6](https://astro.build)** — static output, View Transitions, server-side rendering for islands only
- **React 19** islands for the interactive bits
- **[Tailwind CSS v4](https://tailwindcss.com)** via `@tailwindcss/vite`
- **[Radix UI](https://www.radix-ui.com)** primitives + custom shadcn-style components
- **[GSAP](https://gsap.com)** + **[Lenis](https://lenis.darkroom.engineering)** for animations and smooth scroll
- **[nanostores](https://github.com/nanostores/nanostores)** for state shared between islands (e.g. region)
- **[react-hook-form](https://react-hook-form.com)** + **[zod](https://zod.dev)** for form state and validation
- **[Geist](https://vercel.com/font)** as the default sans/display font

## Project structure

```
src/
├── components/
│   ├── animations/     GSAP wrappers (FadeIn, StaggerChildren)
│   ├── islands/        React islands (RegionGate, ContactForm, etc.)
│   ├── sections/       Astro sections used in pages
│   └── ui/             shadcn-style primitives (Button, Dialog, Input, ...)
├── data/               Typed catalogs (regions, pricing, biomarkers, team, faq)
├── layouts/            BaseLayout and LegalLayout
├── lib/                site constants, schemas, cn() helper
├── pages/              index, contact, privacy-policy, terms-conditions
├── stores/             nanostores (region)
└── styles/             globals.css with @theme tokens
```

## Running locally

```sh
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static output in dist/
pnpm preview      # preview the production build
pnpm format       # format with Prettier
pnpm typecheck    # astro check
```

## Region selector

The home shows a blocking modal at first visit and persists the chosen region (`MX`, `PE`, `CO`, `INT`) in `localStorage` via a `nanostore`. Pricing components subscribe to this store and re-render when the region changes.

To clear the stored region during dev: `localStorage.removeItem('optimal-region')`.

## Pending tasks (TODOs)

The codebase has explicit `TODO` comments where placeholders need to be replaced. The most important ones:

- **Mandrill integration** — see `src/components/islands/ContactForm.tsx`. Today the submit logs to console. When the API key + template arrive, create `src/pages/api/contact.ts`, add a Vercel adapter (`output: 'server'`) and `fetch` to `https://mandrillapp.com/api/1.0/messages/send-template.json`.
- **Pricing for CO and PE** — `src/data/pricing.ts` has placeholders. Replace them with the real local prices.
- **Hero video** — replace `public/videos/hero.mp4` and `public/images/hero-poster.jpg`.
- **Doctors photos and lab logos** — drop assets in `public/images/doctors/<slug>.jpg` and update `imageUrl` in `src/data/team.ts`. Same idea for university and lab logos.
- **Optimal Core membership card render** — replace the composed mock in `PricingSection.astro` with the official asset.
- **OG image** — replace `public/og-image.svg` with a 1200×630 branded JPG/PNG at `public/og-image.jpg`.
- **Logo** — update `src/components/Logo.astro` with the official SVG when delivered.

## Deploy

The site is static today, so any CDN works (Vercel, Cloudflare Pages, Netlify). When the contact form goes live we will need an adapter (Vercel recommended) so the API endpoint can run server-side.
