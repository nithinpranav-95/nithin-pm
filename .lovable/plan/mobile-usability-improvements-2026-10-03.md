# Mobile usability improvements

## What will change
- Replace each page’s compressed mobile header links with one reusable full-screen mobile navigation menu.
- Keep the desktop navigation visually consistent while making the active page clear.
- Improve mobile spacing, type sizing, wrapping, and tap targets across the homepage, case studies, projects, certifications, and case-study detail pages.
- Tighten mobile cards, forms, certificate controls, modals, and footer layouts to prevent clipping and horizontal overflow.

## Mobile navigation
- Show the portfolio name, theme switch, and a clear menu icon in the compact header.
- Open a full-screen editorial menu with links to Home, Case Studies, Projects, Certifications, Experience, and Contact.
- Close on navigation, outside click, Escape, or the close control; lock background scrolling while open.
- Preserve keyboard focus visibility and accessible labels.

## Technical details
- Add shared `SiteHeader` and `MobileMenu` presentation components and reuse them on every content route.
- Keep TanStack Router links and existing theme behavior.
- Use the project’s semantic color tokens and current typography.
- Verify at phone and desktop widths, checking navigation, overflow, modals, and the assistant input.
