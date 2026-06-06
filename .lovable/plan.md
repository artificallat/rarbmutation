# Split "Simon's ASO Therapy" (Achievements) and "N-of-1 ASO Therapy" (Clinicians)

## Problem
Both the Achievements menu and the Clinicians menu link to the same route `/aso-therapy`, which renders the clinical `AsoTherapy.tsx` page. The lay-friendly "Simon's ASO Therapy" content created earlier for Achievements is never reachable from the navbar.

## Changes

### 1. New route `/simons-aso-therapy`
- Create `src/pages/SimonsAsoTherapy.tsx` containing the lay-friendly "Simon's ASO Therapy" content (the verbatim text previously placed in `Achievements.tsx`: date Sonntag 19. April 2026 · 11:30, ASO intro, MCOPS12 mechanism, Figure 1, personalized therapy section, Figure 2, partners block).
- Register the route in `src/App.tsx` (alongside `/aso-therapy`) for both `/` and `/de` language trees.
- Add SEO entry in `src/components/site/RouteSeo.tsx` for `simons-aso-therapy`.

### 2. Restore `Achievements.tsx`
- Revert `src/pages/Achievements.tsx` back to the original achievements landing page (milestones overview), since the ASO content now lives on its own dedicated page.

### 3. Keep `/aso-therapy` as the clinical "N-of-1 ASO Therapy"
- No changes to `src/pages/AsoTherapy.tsx` — it already contains the clinical content.

### 4. Navbar link split (`src/components/site/Navbar.tsx`)
- `achievementsItems`: change the ASO entry from `/aso-therapy` → `/simons-aso-therapy`, label "Simon's ASO Therapy".
- `cliniciansItems`: keep `/aso-therapy`, label "N-of-1 ASO Therapy".
- Add a label key `simonsAsoTherapy` (and update `asoTherapy` label to "N-of-1 ASO Therapy") in `src/content/site.ts` for EN + DE.
- Mobile nav uses the same arrays, so it updates automatically.

### 5. Internal links
- `FundedRDPrograms.tsx` (2 occurrences) currently links to `/aso-therapy` with text "Simon's ASO therapy" — repoint to `/simons-aso-therapy`.
- `Home.tsx` link to `/aso-therapy` — leave as-is (clinical) unless you'd prefer it point to the lay page; please confirm.

## Result
- Achievements ▸ "Simon's ASO Therapy" → `/simons-aso-therapy` (lay-friendly version)
- Clinicians ▸ "N-of-1 ASO Therapy" → `/aso-therapy` (clinical version)
- Achievements page itself goes back to its original milestones layout.
