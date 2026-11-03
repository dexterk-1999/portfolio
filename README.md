# David (Dexter) Kamau — portfolio

A static site built with [Astro](https://astro.build). Content lives in plain Markdown and JSON files, so adding a project or article never means editing page code.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # writes the finished site to dist/
```

## Add an entry

Each section is a folder under `src/content/`:

| Section | Folder | Public address |
|---|---|---|
| Communications | `communications/` | `/communications/<file-name>/` |
| Leadership | `leadership/` | `/leadership/<file-name>/` |
| Writing | `writing/` | `/writing/<file-name>/` |
| The Stage | `stage/` | `/the-stage/<file-name>/` |
| Outdoors | `outdoors/` | `/outdoors/<file-name>/` |

Create a new `.md` file in the folder. The file name becomes its address. Copy an existing entry and change it.

```markdown
---
title: Project title
summary: One or two sentences for cards and search results.
status: verified          # verified | to-confirm | in-progress
date: 2026-10          # 2026, 2026-10 or 2026-10-25
organisation: CIB Kenya
role: Your role
contribution: What was specifically yours, as distinct from the team.
tags: [branding, events]
cover: /images/your-photo.jpg
coverAlt: Describe the photo for screen readers
credit: Photographer name
featured: false        # true puts it on the home page where the section shows featured items
order: 10              # lower numbers come first
---

Write the story below the line in Markdown. Use ## for headings.
```

Other optional fields: `period`, `partners`, `event`, `host`, `audience`, `topic`, `category`, `link` (original publication), `location`, `distance`, `movingTime`, `elapsedTime`, `elevation`, `finishTime`, `stravaId` and `stravaToken` (for a Strava embed).

A `status` of `to-confirm` or `in-progress` shows a label on the page. Change it to `verified` once you have checked the facts and have a source.

## Photos and documents

Put images in `public/images/` (web-sized JPEGs, around 1400 px on the long side, under 300 KB) and refer to them as `/images/name.jpg`. Put PDFs in `public/files/` and link to them as `/files/name.pdf`.

## Figures, timeline

- `src/data/figures.json` holds the numbers shown on the home page, each with its source and period.
- `src/data/milestones.json` feeds `/timeline/`. Add a line with a date, category (`career`, `leadership`, `stage`, `outdoors`), title and text.

## Pages that are not entries

`creative-studio`, `about`, `contact` and `timeline` are single pages in `src/pages/`. The gallery for the Creative Studio is not built until there are designs to put in it.

## Deploy

Any static host works. Connect this repository, set the build command to `npm run build` and the output directory to `dist`. Set the environment variable `SITE_URL` to the live address (for example `https://example.com`) so social previews and canonical links are correct. Check each host's current free-plan terms before choosing one.

## Not built yet

- Site search and category filters (planned: Pagefind).
- A browser-based editor at `/admin`. It needs a GitHub sign-in set up, so for now content is edited as files, including directly on github.com.
- Downloadable CV and professional profile (waiting for the files).
- Analytics.
- Self-hosted fonts (fonts currently load from Google Fonts).
- Dedicated entry points for specific audiences.


