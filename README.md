# ArGo Assurance & Advisory — Website

Marketing website for **ArGo Assurance & Advisory** (**A A G D & Associates LLP**), built with **Vite + React + TypeScript + React Router + Tailwind CSS + Framer Motion + lucide-react**.

## Pages

1. **`/` — Home**: Minimal overview featuring the floating 3-slide hero carousel, asymmetric Bento strip, 4 flagship CFO-office service cards, experience counters, client logo marquee, and direct CTA to Contact & About Us.
2. **`/about` — About Us**: Dedicated firm profile containing Business Overview & Problem We Solve, full Brand Story (*Local Roots. Global Standards.*), **Why Choose Us** (USP), split Mission & Vision panel, Partner profiles (`CA Gopesh Dawda`, `CA Arpit Agrawal`), and operating model locations map.
3. **`/services` — Services**: Four core CFO-office services (`Takeover / Acquisition`, `Annual Budgeting`, `Refinancing / Fund Raising`, `Financial Reporting & Audit`) with detail drawer, **Sectors** coverage placeholders, and **Hands-on Tools** stack placeholders.
4. **`/careers` — Careers**: Emerging-cities talent narrative, indicative role tracks, and interactive application form.
5. **`/contact` — Contact Us**: Direct partner contact details, enquiry form (supports `?service=...` pre-selection), partner cards, and location footprint.

## Getting Started

```bash
npm install
npm run dev
```

Configured to run on `0.0.0.0:1202` and allow host `argo.cyberpunk.co.in` in [`vite.config.ts`](vite.config.ts).

To create a production build and run TypeScript type checking:

```bash
npm run build
npm run preview
```

## Replacing Placeholders

All copy, image URLs, and placeholder constants live in [`src/data/siteData.ts`](src/data/siteData.ts):

- **`STATS`**: Update `numericTarget` and `label` for years of experience and clients served once confirmed.
- **`CLIENT_LOGOS`**: Replace placeholder `Client Logo 01`–`06` entries with official client marks.
- **`PARTNER_BIO_PLACEHOLDER` / `PARTNERS`**: Replace bio placeholders and swap portrait URLs marked `// REPLACE with client photography` for CA Gopesh Dawda and CA Arpit Agrawal.
- **`LOCATIONS`**: Replace `cityPlaceholder` names with exact Tier 2 and Metro office locations.
- **`SERVICES` / `SECTORS` / `HANDS_ON_TOOLS`**: Expand services and swap sector/tool placeholders once supplied separately.
- **`CAREER_OPENINGS`**: Replace placeholder role tracks with active openings.

## Optional Form Endpoints

By default, the Contact and Careers forms validate inputs and open a prefilled `mailto:argoassuranceadvisory@gmail.com` draft with a confirmation state. To post JSON submissions to an API or Formspree instead, set:

```bash
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-contact-form
VITE_CAREERS_ENDPOINT=https://formspree.io/f/your-careers-form
```

## Customising Colour Tokens

Design tokens (`--bg`, `--surface`, `--surface-2`, `--ink`, `--ink-soft`, `--accent`, `--accent-deep`, `--on-accent`, `--hero-overlay`, `--glass`, `--hairline`) live in [`src/index.css`](src/index.css) and are mapped in [`tailwind.config.ts`](tailwind.config.ts).
