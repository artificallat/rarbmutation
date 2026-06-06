## Goal

Currently both `/achievements` and `/aso-therapy` (Clinicians area) show very similar ASO content. Make them distinct, with the exact text provided.

## Page 1 — Achievements (`src/pages/Achievements.tsx`)

Keep the lay-friendly "Simon´s ASO Therapy" version (already in place from last turn). Verify text is verbatim:

- Title: **Simon´s ASO Therapy**
- Date line: **Sonntag, 19. April 2026 · 11:30**
- Section "What is an Antisense Oligonucleotide (ASO) Therapy?" — 3 paragraphs (tape metaphor, mRNA recipe, Lauffer 2024 link).
- Section "How does an ASO therapy work in patients with MCOPS12?" — 3 paragraphs (mutant/healthy copy, zipper/RNase H1 + "mRNA knockdown", "The catch" allele-specific + Ciancia 2022 link).
- Figure 1 (existing `aso-figure-1.png`) with caption "Figure 1:".
- Section "Simon´s personalized allele-specific ASO therapy" — 4 paragraphs (Hauser 2022 link, c.1159C>T mutation, long-read sequencing route, blueprint for other children).
- Figure 2: existing `AsoWorkflowFigure` component.
- Closing partner block: RareLabs (link), large pharma undisclosed, Hongene Biotech (link) — verbatim sentences.

## Page 2 — Clinicians / AsoTherapy (`src/pages/AsoTherapy.tsx`)

Rewrite to the clinical **"N-of-1 ASO Therapy"** version with the exact text provided:

- Title: **N-of-1 ASO Therapy**
- Date line: **Montag, 13. April 2026 · 00:47**
- Section "What is an Antisense Oligonucleotide (ASO) Therapy?" — clinical paragraph: "ASO therapeutics are short, synthetic strands of nucleotides … 15 to 25 units in length …" plus second paragraph ending with Lauffer 2024 link and "Since ASOs act on mRNA and not on DNA, their effects are reversible, meaning repeated dosing is required."
- Section "How does an ASO therapy work in patients with MCOPS12?" — 3 paragraphs (wild-type explanation, Watson–Crick base pairing + RNase H1 + "mRNA knockdown", allele-specific clinical wording + Ciancia 2022 link).
- Figure 1 (existing `aso-figure-1.png`) with caption "Figure 1:" and small label "Personalized".
- Section "Simon´s personalized allele-specific ASO therapy" — clinical version with Hauser 2022 link, c.1159C>T (p.R387C) + Zinter 2026 bioRxiv link "dominant-negative in vivo", long-read sequencing for ideal targets, blueprint statement for other MCOPS12 patients.
- Figure 2: keep existing `AsoWorkflowFigure` component.
- Closing partner block: same three partners (RareLabs link, large pharma undisclosed, Hongene Biotech link) — verbatim sentences.

## Technical notes

- Both pages keep the same shell (`PageHero`, `Reveal`, section spacing) so they remain visually consistent with the rest of the site but with clearly different text/tone.
- Text is supplied 1:1 in English (as the user provided). German `lang === "de"` will display the same English text for both, since the user requested verbatim copy and provided no German translation.
- No route, navigation, or other page changes — only the contents of `Achievements.tsx` and `AsoTherapy.tsx`.
- Reuse existing assets: `@/assets/research/aso-figure-1.png` and `AsoWorkflowFigure` component. No new dependencies.
