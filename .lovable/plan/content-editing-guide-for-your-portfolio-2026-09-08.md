# Content editing guide for your portfolio

All copy, images, and styling live in a handful of files. Edit the relevant section below and the site will update automatically.

## Main page content

**File:** `src/routes/index.tsx`

This is the single page that contains almost everything visible.

| Section | What to look for in `src/routes/index.tsx` |
|---|---|
| Name, headline, bio | The `<h1>Mara<br />Voss</h1>` and the paragraph that starts with "Product manager for complex..." |
| Availability / location metadata | The three `<span>` lines near "BASED — COPENHAGEN" |
| Navigation labels | The `<nav>` links: WORK, PRINCIPLES, RECORD, CONTACT |
| Projects / case studies | The `projects` array (Atlas Ledger, Northwind Routing, Halyard Console). Change title, year, description, role, outcome, image import, and `canvaUrl` |
| Canva deck links | Paste the Canva "Share → Embed" URL into the `canvaUrl` field of the relevant project. Leave it as `undefined` to hide the embed |
| Operating principles | The `principles` array (P1–P4) |
| Experience / résumé | The `experience` array |
| Contact email and links | The `<a href="mailto:mara@voss.pm">` and the LinkedIn / reading / replies lines |
| Footer text | The `<footer>` at the bottom |

## Images

**Folder:** `src/assets/`

- Project images are imported at the top of `src/routes/index.tsx` (e.g. `import atlasImage from "@/assets/atlas-cobalt.jpg"`).
- The headshot is imported as `import headshot from "@/assets/headshot.jpg.asset.json"` and used with `src={headshot.url}`.
- To replace an image, add your file to `src/assets/` and update the import path in `src/routes/index.tsx`.

## Colors, fonts, spacing

**File:** `src/styles.css`

- Background, text, accent, and border colors are defined as CSS custom properties under `@theme`.
- Fonts are loaded in `src/routes/__root.tsx` via Google Fonts links.
- To change the accent color or overall palette, edit the values in `src/styles.css`.

## Page metadata (SEO / social sharing)

**File:** `src/routes/__root.tsx` and `src/routes/index.tsx`

- Browser tab title, description, Open Graph tags, and Twitter card tags live in the `head()` blocks.
- `__root.tsx` sets the global defaults; `index.tsx` overrides them for the home page.

## Canva embed behavior

**File:** `src/components/CanvaEmbed.tsx`

- Adjust the default aspect ratio, iframe title, or border styling here. The component is reused by every project card.

## How to edit safely

1. Open the file listed above.
2. Change only the text or file path inside the matching section.
3. Save — the preview will refresh automatically.
