# Aboriginal Training Services website

Public site for [Aboriginal Training Services](https://www.abtraining.ca), an Edmonton RPAS / drone training business. The site is a static [Astro](https://astro.build) project. Pages are real files (`/training/`, `/contact/`, and so on), not a hash-routed app.

Preview (after GitHub Pages is enabled): <https://ats-web.github.io/abtraining-website/>

Canonical URLs already point at `https://www.abtraining.ca`. That domain is not connected yet.

## Day-to-day commands

```bash
npm install
npm run dev      # http://localhost:4321/abtraining-website/
npm run build    # typecheck and write dist/
npm run preview  # serve dist/
```

## Change a price

Open `src/data/courses.ts`. Each course has:

- `priceCad` — the number shown as Canadian dollars. Leave `null` until you know the CAD price. Do not type a US dollar amount here.
- `currency` — keep `"CAD"`.
- `listedUsd` — only for a course whose Thinkific checkout page shows a USD price. Set it to that number, or `null`.
- `checkoutUrl` — the Thinkific page that actually takes payment. Leave `null` if people cannot buy it online.
- `nextDates` — confirmed dates as `"YYYY-MM-DD"`. Use `[]` when no date is set.

Examples:

```ts
"priceCad": 149,
"listedUsd": null,
"checkoutUrl": "https://learn.abtraining.ca/courses/example",
"nextDates": ["2026-06-02", "2026-09-14"],
```

Save the file, then rebuild and deploy. The training page, the course page, and the course structured data all read this file. There is no second price list.

If `priceCad` is null and there is no checkout link, the site says “Contact us for pricing” and links to the contact form. It does not show a dead Register button.

## Add a course

1. Copy an existing `{ ... }` block in `src/data/courses.ts`.
2. Give it a new `slug` (lowercase, hyphens, no spaces). The page will be `/training/that-slug/`.
3. Fill in the name, description, level, format (`"online"` or `"in-person"`), duration, requirements, and `included` list.
4. Set `priceCad`, `checkoutUrl`, and `nextDates` using the rules above.
5. Rebuild. The new page, the catalog, and `sitemap.xml` pick it up.

## Edit contact info

Edit `src/config/site.ts`.

- `email`, `phoneDisplay`, and `phoneTel` (digits only, with country code)
- `streetAddress` and `postalCode` (leave them `""` to show city and province only)
- `facebook`, `linkedin`, `studentPortal`
- `formEndpoint` — leave `""` to open the visitor’s email app. To send the form to a service instead, paste that service’s URL here. The browser POSTs JSON (`name`, `email`, `phone`, `course`, `message`). No paid service is included.
- `googleRating` and `googleReviewCount`

## Add a blog post

Create `src/content/blog/your-slug.md`:

```md
---
title: "Post title"
description: "One or two sentences for the blog list and search results."
date: "2026-04-01"
---

Write the post in Markdown.
```

The address will be `/blog/your-slug/`. Use a real date in `YYYY-MM-DD`.

## Switch to abtraining.ca

This is one line in `site.config.ts`:

```ts
export const customDomain = true;
```

That changes the build from the GitHub Pages project path (`/abtraining-website/`) to the site root, and points the sitemap at `https://www.abtraining.ca`.

After that deploy:

1. In the GitHub repo, open Settings → Pages → Custom domain and enter `www.abtraining.ca`.
2. Point DNS at GitHub Pages (a `CNAME` record for `www` to `ats-web.github.io`, and the apex records GitHub shows you).
3. Do this only when you are ready for the domain to serve this site. This repo does not contain a `CNAME` file yet, on purpose.

Until that flag is `true`, the live preview is <https://ats-web.github.io/abtraining-website/>.

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the site and deploys to GitHub Pages.

The repository must use GitHub Actions as the Pages source (Settings → Pages → Build and deployment → Source: GitHub Actions).

## Search and sharing

Every page has its own title, meta description, canonical URL, and Open Graph tags. The home page includes LocalBusiness and EducationalOrganization structured data. Each course page includes Course structured data. `sitemap.xml` and `robots.txt` are generated at build time.

Search for `TODO(owner)` in `src/data/courses.ts` and `src/config/site.ts` before treating prices, dates, or contact lines as final.

The home page reserves two slots the owner fills:

- `landAcknowledgement` in `src/config/site.ts` (also shown on Indigenous relations). Leave it empty until the company’s own wording is ready.
- The artwork frame on the home page (`#artwork`). Do not drop in Nation-specific art from the portfolio backgrounds. Add an approved file under `public/media/` when you have one.

Official positioning, the ATS and HK partnership, addresses, and the 500+ / 25+ / 100% Indigenous-owned lines come from the ATS & HK brochure and portfolio.
