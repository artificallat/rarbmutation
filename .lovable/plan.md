# Plan

## 1. Figure 2 caption — `src/components/site/AsoWorkflowFigure.tsx`

Align the figcaption with the wording on the supplied slide:

- EN: `Allele-specific ASO therapy development workflow — personalized for Simon, but a blueprint for many MCOPS12 patients.`
- DE: `Entwicklungs-Workflow der allelspezifischen ASO-Therapie — personalisiert für Simon, aber eine Blaupause für viele MCOPS12-Patient:innen.`

The 4-column content already matches the slide (Long-read sequencing, Target site identification with SNPs/indels, iPSC-derived neural stem cells, BJAB/Caspase/RNA-seq, intrathecal administration, named patient use Austria, etc.) — no further changes inside the columns.

## 2. Home news — `src/pages/Home.tsx`

Replace the existing 3 entries in `homeNews` with the 3 LinkedIn posts in this exact order:

### Post 1 — "BREAKING NEWS" (urn:li:activity:7447011830209597440)
- Image: uploaded Simon portrait (image-143 / `170e4503...`)
- Category: `Research`, Date: `April 2026` (2mo ago from June 2026)
- Title: `BREAKING NEWS: Six ASO candidates identified`
- Body: full text 1:1 from the post (proof-of-concept, 6 ASO candidates, safety testing passed, next step toxicity study, ultra-rare disease <100 patients, hashtags)

### Post 2 — "RUN FOR RARE – RUN FOR SIMON" (urn:li:activity:7433651183799422978)
- Image: composite — use the couple selfie (image-144 / `0aebdcb8...`) as main; the existing `news-run-for-rare-couple-v2` asset can be replaced if a better composite is needed. To keep it simple: use the couple selfie as primary thumbnail.
- Category: `Community`, Date: `March 2026`
- Title: `RUN FOR RARE – RUN FOR SIMON`
- Body: 1:1 German text from the post + hashtags

### Post 3 — "Happy New Year" (urn:li:activity:7412857373310046208)
- Image: Happy New Year card (image-146 / `9e9cc81c...`)
- Category: `Community`, Date: `January 2026`
- Title: `Happy New Year from Cure MCOPS12!`
- Body: 1:1 full text from the post

All three `href` continue to point at the LinkedIn company page (cards link to LinkedIn). The "Read more" dialog already supports full text via the existing `Dialog` component.

### Technical details

- Upload the 3 needed images to the CDN via `lovable-assets create --file /mnt/user-uploads/<file>.png --filename <name>.png > src/assets/<name>.png.asset.json`:
  - `news-aso-breakthrough.png` (image-143)
  - `news-run-for-rare-couple.png` (image-144) — overwrite/replace existing reference
  - `news-happy-new-year.png` (image-146) — already exists, reuse
- Update `Home.tsx` imports and `homeNews` array accordingly.
- Keep all surrounding layout, dialog, and translation logic intact.

No other files change.
