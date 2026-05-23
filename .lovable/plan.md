## Plan: Individual page per child on "Meet Our Kids"

### Goal

Create a dedicated detail page for each of the 13 children listed (Noé, Mia, Piper, Rhett, Troy, Rayne, Sienna, Rin, Atle, Stella, Zayd, Josephine, Sophia, Simon), using the provided English texts 1:1 (no invented data). Link each card on `MeetOurKids.tsx` to its dedicated page.

### Content data

Add a new file `src/content/kidsProfiles.ts` containing, for each child, exactly the user-provided fields:

- `slug` (e.g. `noe`, `mia`, `piper`, `rhett`, `troy`, `rayne`, `sienna`, `rin`, `atle`, `stella`, `zayd`, `josephine`, `sophia`, `simon`)
- `name`
- `parents`
- `siblings` (only where the user provided it)
- `yearOfBirth`
- `hometown`
- `messageTitle` (e.g. "A Message from Noé's Parents")
- `messageParagraphs` (array of paragraphs, copied verbatim from the user message)
- `dreamsTitle` (only where the user provided one, e.g. "What are our Dreams for Noé?")
- `dreamsParagraphs` (only where provided)

No translation/invention: pages will be English-only since the user supplied only English text. (German lang variant will show the same English text — no fabricated German.)

Note: Rin and Josephine and Sophia have no explicit "What are our Dreams" section in the supplied text, so it will simply be omitted for those.
Atle text from user lists "Year of Birth: 2011" (not 2015 as currently in `site.ts`). The dedicated page will use the user-supplied 2011. The summary card in `site.ts` is out of scope unless the user asks.

### New page component

`src/pages/KidProfile.tsx`:

- Reads `slug` from `useParams`
- Looks up profile in `kidsProfiles.ts`; if missing → 404
- Layout:
  - `PageHero` with the child's name as title, "Hometown · Born YEAR" as eyebrow
  - Two-column section: left = child photo (from existing `kidPhotos` map, reused), right = facts list (Parents, Siblings, Year of Birth, Hometown & Country)
  - "A Message from …'s Parents" section: paragraphs rendered as `<p>` blocks
  - "What are our Dreams for …?" section (only if present)
  - Back link to `/meet-our-kids`

### Routing

In `src/App.tsx`, add a route `/:lang?/meet-our-kids/:slug` → `KidProfile` (matching the existing lang-prefixed pattern used by other pages — I'll verify the exact pattern when implementing).

### Card links on Meet Our Kids

In `src/pages/MeetOurKids.tsx`:

- Add a `slug` derivation (lowercase, strip accents) or import from `kidsProfiles.ts`
- Wrap each card / "Read story" button with a `Link` to the new route
- Keep the existing expandable short story as-is (no removal of current behavior)

### Out of scope

- No new translations (text stays English as provided)
- No edits to `site.ts` kids array beyond what's needed
- No new images required (reuse existing `kidPhotos`)

PDFs/logos referenced in earlier turns are unrelated  
  
Make sure that everything is copy pasted exactally dont make up or summerize the text just copy and paste it  
  
  
