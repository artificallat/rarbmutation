## Goal
Resolve the mobile bugs visible in the latest screenshot and audit the rest of the site for similar mobile-only issues.

## Concrete fixes

**1. Network page — hero crop on mobile (the original complaint)**
The current mobile card still leaks the baked-in quote text on the right of the image because the crop isn't tight enough. Fix:
- Use a tighter aspect (`aspect-square` or `aspect-[5/4]`) with `object-cover object-left-top` so only the baby portion shows.
- Keep the readable HTML quote card below — that part already works.

**2. Full mobile audit pass (375 px viewport)**
Walk through every page in the browser tool at mobile width and fix what's broken. Known/likely suspects to verify and fix:
- `Home` — hero stat row, partner logo grid overflow
- `WhoWeAre` / `Vereinsorgane` — board card chips wrapping
- `Research` — 3-pillar grid stacking, long inline scientific terms causing horizontal scroll (add `break-words`)
- `NaturalHistoryStudy` / `JoinNaturalHistoryStudy` — already-touched email pills, plus PDF download cards
- `AsoTherapy` — workflow figure SVG overflow
- `MeetOurKids` / `KidProfile` — image grid + long names
- `Donate` — amount buttons, IBAN block overflow
- `Footer` — link columns

For each page I'll fix only what is actually broken at 375 px (overflow, unreadable text < 12 px, tap targets < 40 px, content clipped behind the sticky Donate pill).

**3. Sticky Donate overlap**
Several pages show the floating Donate button covering content (visible in the Network screenshot covering "...with A Cure for..."). Add bottom padding to `<main>` on mobile (e.g. `pb-24 md:pb-0`) in `Layout.tsx` so the last lines aren't hidden.

## Out of scope
- No desktop changes
- No content/copy changes beyond what's needed to fit
- No new pages or features

## Verification
Open each fixed page in the browser at 375 × 812, scroll top-to-bottom, confirm no horizontal scroll, no text < 12 px, no content hidden by the Donate pill.
