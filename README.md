# Nestora House — Frontend

Premium furniture e-commerce frontend for **Nestora House** — _Designed for living._
React + Vite + Tailwind CSS v4 + React Router. JavaScript only; no backend yet.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build
```

Requires Node 20+.

## Routes

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/shop` | Shop all (supports `?q=` search) |
| `/collections/:slug` | `living-room`, `bedroom`, `dining`, `tables`, `accessories` (supports `?type=`) |
| `/product/:slug` | Product details |
| `/bespoke` | Bespoke furniture + quotation form (`#quote`) |
| `/our-story`, `/projects`, `/trade`, `/contact` | Content pages |
| `/cart` | Shopping bag |
| `/info/:slug` | `delivery`, `care`, `privacy`, `terms` (placeholder copy) |

## Project structure

```
src/
  components/
    layout/        Layout shell, announcement bar, footer, cart toast, scroll restoration
    navigation/    Header, mega menu, mobile menu, search overlay
    home/          Homepage sections (hero → newsletter)
    products/      Product card, grid, gallery, variant + quantity selectors
    collections/   Reusable collection view + filter panel
    bespoke/       Process steps, inspiration gallery, quotation form
    forms/         Field primitives, image upload, success state, trade/contact/newsletter forms
    common/        Logo, Button, Image, PageHero, Modal, Breadcrumbs, SectionHeading, DemoNotice
  context/         CartContext (localStorage-backed)
  data/            products, collections, projects, testimonials, site copy, image library
  hooks/           useForm, useProductFilters, useLocalStorage, usePageTitle, useLockBodyScroll
  services/        enquiries.js — async submit functions (demo, in-memory)
  utils/           currency/dimension formatting, validation rules
  pages/           One component per route
  styles/          Tailwind theme (brand colours, fonts) and component classes
```

## Editing content

- **Products & prices** — `src/data/products.js`. Prices are whole rands; material `priceDelta` is added to the base price. Colours can set `image` (index into `images`) to switch the gallery photo.
- **Photography** — every image is referenced from `src/data/images.js` (Unsplash IDs, royalty-free under the Unsplash License) or directly by ID in the data files. Swap these for Nestora’s own photography; `img()` also accepts full URLs or `/public` paths.
- **Contact details, socials, announcement** — `src/data/site.js` (currently placeholders).
- **Brand colours & fonts** — `@theme` block in `src/styles/index.css`.

## Adding Supabase later

Forms call async functions in `src/services/enquiries.js` and use their return value as the confirmation reference. Replace the in-memory bodies with Supabase inserts (and storage uploads for bespoke inspiration images) — the form components don’t need to change. Products can similarly be loaded from a table with the same shape as `products.js`.

## Placeholders (by design)

- Checkout and customer accounts open an explanatory dialog — no payments or orders.
- Form submissions are stored in browser memory only and are clearly labelled as demonstrations.
- Testimonials and projects are illustrative and labelled as such.
- Contact details, social links, privacy policy and terms are placeholders.
