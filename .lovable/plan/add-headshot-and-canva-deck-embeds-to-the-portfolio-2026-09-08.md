# Add headshot and Canva deck embeds to the portfolio

## What we will build

1. **Headshot integration**
   - Add a dedicated headshot panel to the hero section (or a new "About" panel) so the portrait sits inside the existing modular, bordered editorial layout.
   - The image will be imported from `src/assets/` like the existing project plates, with explicit `width`, `height`, `alt` text, and lazy loading.
   - You will upload your headshot file first; we will then place it in `src/assets/` and wire it into the page.

2. **Canva presentation embeds inside case studies**
   - Create a small, reusable `CanvaEmbed` component that accepts a Canva "share / embed" URL and renders the official `<iframe>` embed inside a bordered panel.
   - Add an optional `canvaUrl` field to each project in the existing `projects` array.
   - When a project has a `canvaUrl`, render the embed below the project description, styled to match the dark monochrome panels and the warm orange hover accent.
   - Document exactly where to paste the Canva embed link.

3. **Verification**
   - Confirm the headshot loads at the intended size and does not break the responsive grid.
   - Confirm each Canva iframe is visible, bordered, and scales correctly on mobile.
   - Check the recent dynamic-import runtime error to ensure the preview stays clean after these changes.

## Technical notes

- Keep all image imports as ES module imports from `src/assets/` so Vite can optimize and hash them.
- The Canva embed will use a standard responsive iframe wrapper with a `border border-paper/15 bg-panel` container so it matches the existing design tokens.
- No backend or new dependencies are required for this work.

## What I need from you

Please upload your headshot image in your next message. Once the plan is approved and the file is uploaded, I will integrate both the headshot and the Canva embed support.