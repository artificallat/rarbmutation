# Polish & interactivity pass (revised)

## 1. `HowToGetInvolved.tsx` — proper layout
Rebuild as a designed page with a 2×2 icon-card grid (`HeartHandshake`, `Megaphone`, `Coins`, `Users`), each card with colored icon chip, title, body, inline CTA arrow. `Reveal` stagger entrance, hover lift + border-teal. Keep bottom CTA pill row.

## 2. News images bigger + add new LinkedIn post
- Add new top post (Nov 2025, **BREAKING NEWS — six ASO candidates pass safety testing**, image from `user-uploads://image-29.png` → `src/assets/news-breaking-aso.jpg`) to both `News.tsx` and `Home.tsx` `homeNews`, replacing the duplicate "Simon im Schnee" preprint card on Home.
- Switch news thumbnails from `aspect-video` to `aspect-[4/3]` with `object-position: top` for portrait shots; on `News.tsx` use `md:grid-cols-2 lg:grid-cols-3` with bigger gap.

## 3. Figure 2 (`AsoWorkflowFigure.tsx`) — animated & interactive
Rebuild as an interactive horizontal pipeline:
- 4 step cards connected by an animated SVG dashed arrow (stroke-dashoffset draws on scroll).
- Status pills with **pulsing dot** for "Ongoing" (`animate-pulse`).
- Hover: card lift, soft teal glow, icon tile `scale-110 rotate-3`, bg flips teal→white.
- Each block heading gets a small chevron that rotates on hover.
- Mobile: columns stack, connector becomes vertical.
- `Reveal` cascade left→right.

## 4. `AsoTherapy.tsx` — top-of-page polish
- Soft teal/5 gradient bg + decorative SVG accent on workflow section.
- "01–04" become circular gradient badges (teal→amber); status pills with pulsing dot for ongoing; thin teal accent bar slides in at top of card on hover.
- Horizontal progress rail behind the 4 cards on `md+` (2/4 done, gradient fill).
- "What is an ASO" intro becomes 2-column on `md+`: text left, stylized DNA + tape icon tile right.
- `Reveal` per paragraph.

## 5. `NaturalHistoryStudy.tsx` — visual upgrade
- Add **stat strip** under hero (≈52 cases · 5+ year horizon · 4 endpoint domains · multi-centre) using `Counter` for the numerics.
- Endpoint cards get colored top accent bars (teal/indigo/amber/rose).
- Eligibility list becomes 2-col `CheckCircle2` card grid with `Reveal` stagger.

## 6. Counter-up animations on stat numbers (NEW)
Make all stat numbers count up from 0 when scrolled into view, like the homepage donation counter.
- `OurStory.tsx` stats array (`50+ families`, `3 continents`, `4 programs`): swap the static `n` strings for `<Counter to={50} suffix="+" />`, `<Counter to={3} />`, `<Counter to={4} />` and add `Reveal` wrapper with stagger.
- `DrugRepurposing.tsx` bottom stats card (`~10,000 compounds` etc.): parse the numeric portion and use `<Counter to={10000} prefix="~" duration={2200} />` with locale formatting; non-numeric stats stay as is. Each stat wrapped in `Reveal` with stagger.
- Keep the existing `Counter` component from `src/components/site/Reveal.tsx` (no new component needed).

## 7. Site-wide animation polish (NEW)
Pass over key pages to make motion feel cohesive and lively without being noisy:
- Ensure every section uses `Reveal` (or `RevealStagger`) for its title and primary children where missing — `OurStory.tsx`, `DrugRepurposing.tsx`, `AsoTherapy.tsx`, `NaturalHistoryStudy.tsx`, `HowToGetInvolved.tsx`, `News.tsx`.
- Standardize hover on all interactive cards: `hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-teal transition-all duration-300`.
- Icon tiles inside cards: `group-hover:scale-110 group-hover:rotate-3` with color flip to teal/white.
- Add a subtle `animate-fade-in` on `PageHero` content and an entrance translate on the eyebrow → title → sub sequence.
- Ensure number/Counter animations are gated on `useInView` (already the case in the existing `Counter`).

## Files

- `src/pages/HowToGetInvolved.tsx`
- `src/pages/News.tsx`
- `src/pages/Home.tsx`
- `src/components/site/AsoWorkflowFigure.tsx`
- `src/pages/AsoTherapy.tsx`
- `src/pages/NaturalHistoryStudy.tsx`
- `src/pages/OurStory.tsx` — Counter on stats + Reveal polish
- `src/pages/DrugRepurposing.tsx` — Counter on stats + Reveal polish
- `src/assets/news-breaking-aso.jpg` — new asset

Visual / motion / layout changes only — no content meaning or backend changes.
