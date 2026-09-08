# Fix the name not updating

## Why it's happening
The big name on the page is not connected to your other edits — it's written directly in the code in a few separate places. Some still say "Mara Voss" (the original placeholder), which is why the old name keeps showing.

## What I'll change
Replace every remaining "Mara Voss" with "Nithin Pranav":

1. `src/routes/index.tsx`
   - The large hero name (currently split across two lines: "Mara" / "Voss") → "Nithin" / "Pranav"
   - The portrait's alt text → "Portrait of Nithin Pranav"
2. `src/routes/__root.tsx`
   - The author tag → "Nithin Pranav"

## After the fix
- The preview updates immediately.
- The live site (nithinforpm.lovable.app) updates after publishing — I can publish for you once you confirm the preview looks right.

## Note
If you ever want a different name or spelling, just tell me and I'll update these same spots.
