## 1. Newly Diagnosed — switch hero to light theme (keep same layout)

Keep the exact two-column structure (eyebrow chip + headline + sub + 2 CTAs on the left, quote card with 3 stats on the right), only swap the dark navy palette for the light cream/teal/amber palette used across the rest of the site.

Changes in `src/pages/NewlyDiagnosed.tsx` hero section:
- Background: `bg-gradient-to-br from-muted/40 via-background to-background` + soft teal and amber blurred blobs (same pattern as `PageHero`).
- Eyebrow chip: white card with teal border, teal sparkle, teal uppercase text.
- Headline: navy text; "Diagnosed" stays in amber gradient for accent. Question mark in navy.
- Sub-paragraph: `text-foreground/75`.
- Primary CTA (Connect): keep amber pill with navy text.
- Secondary CTA (See next steps): navy outline on white instead of glass.
- Reassurance card: white card with soft border, navy quote icon in teal, navy quote text, divider light, stat numbers in teal, labels in muted foreground.
- Dot pattern overlay removed (it reads as dark-mode texture).

No structural or copy changes.

## 2. Research page — design refresh + proper bold formatting

File: `src/pages/Research.tsx`.

### Hero
Replace plain `PageHero` with a richer light-themed hero matching the new Newly Diagnosed hero style: eyebrow chip "Research", large navy headline ("The science behind MCOPS12"), supporting sub, soft teal/amber blobs, and a small badge row ("RARB gene · Striatum · Mouse models · iPSC neurons").

### Section 1 — Overview of RARB biology
- Apply `<strong>` to the key terms the user marked as bold-worthy: **RARB**, **retinoic acid**, **retinoid X receptors (RXRs)**, **vitamin A**, **retinoic acid response elements (RAREs)**, **eye development**, **striatal projection systems**.
- Add a small inline "Key concept" callout card on the right (md+) summarising: RARB = transcription factor activated by vitamin A, critical for eye + striatum.

### Section 2 — Genetics and pathophysiology of MCOPS12
- Bold: **MCOPS12**, **RARB-related disorder (RARB-RD)**, **developmental eye anomalies**, **hypotonia**, **early-onset progressive movement disorders**, **p.R387C**, **~30% of cases**, **gain-of-function (GOF)**, **loss-of-function (LOF)**, **dominant-negative effects**, **Movement disorders**, **dysfunction within the striatum**, **medium spiny neurons (MSNs)**, **D1R**, **D2R**.
- Split the long mouse-models paragraph: keep intro paragraph, then style the 4 findings as a numbered card stack (not plain `<ul>`). Each card: number badge, short title (e.g. "Behavioral phenotype", "Selective D2R MSN loss", "Dominant-negative transcriptomic signature", "Rarb+/- = no phenotype → ASO rationale"), followed by the existing bullet text with key phrases bolded (e.g. **progressive motor deficits**, **selective loss of D2R medium spiny neurons**, **Huntington's disease**, **ASO therapy**).
- Add a small "Mouse models" pill row above the cards showing the four genotypes: `Rarb⁻/⁻`, `Rarb R387C/+`, `Rarb L402P/+`, `Rarb⁺/⁻`.

### Section 3 — Three research pillars (full redesign)
Replace the flat 3-card grid with a richer bento-style layout mirroring the uploaded slide:

- Intro paragraph stays, with **scientific advisors**, **A Cure for Sophia and Friends**, **A Cure for Sienna**, **three key research pillars**, **outcome measures and biomarkers** bolded.
- New layout: 3 large pillar cards in a responsive grid, each significantly richer than today's:
  - Header band in teal with white pillar title and number ("Pillar 01 / 02 / 03").
  - Large icon in an amber circle on a soft tinted background (Stethoscope / Mouse / FlaskConical).
  - Two subsections inside each card with their own mini-headings (bold navy) and bullet lists, taken verbatim from the slide:
    - **Clinical picture** → "Natural History study" (5 bullets) + "Biomarkers" (2 bullets).
    - **MCOPS12 (Rarb) mouse models** → "Four different mouse models" (4 genotype chips) + "Studies" (5 bullets).
    - **Patient iPSC-derived neuronal cell models** → bullet list of generation/differentiation steps + "Functional assays" (2 bullets).
  - Footer of each card: small partner-org chips (CHU Sainte-Justine; CHU Sainte-Justine + IGBMC; RareLabs + Alpha Rose + Uni Basel) as text badges, not logo images, since logo assets aren't in the repo.
- Cards stack on mobile, become an equal 3-col grid on lg+.

### Polish
- All inline citation links keep current teal underline styling.
- Add `<strong className="text-navy">` for inline bold so the emphasis is consistent and theme-aware.
- No content changes other than the bolding pattern and the pillar bullets pulled from the slide.

## Out of scope
- No backend/data changes.
- No new routes or assets uploaded.
- Partner organisation logos are not added (would need uploaded image assets); represented as text chips for now.
