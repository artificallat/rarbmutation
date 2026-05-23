## 1. Hero-Slider Bildtausch (Home)

- Neues Foto `user-uploads://20190221_103509-3.jpg` → `src/assets/simon-fairy-lights.jpg`
- In `src/pages/Home.tsx`:
  - Slide 3 (`heroBeyond` = `simon-and-beyond.jpg`) → neues Fairy-Lights-Foto
  - Slide 4 (`heroPlayground` = `reinhard-simon-playground.jpg`) → `simon-and-beyond.jpg` (das bisherige Slide-3-Foto)
- `object-position` für die neue Slide 3 anpassen (Kind ist seitlich/oben-rechts, evtl. `object-[70%_30%]`)

## 2. Spendenbalken: Gelb → Grün

In `src/components/site/Bits.tsx` (`ProgressBar`): Gradient von `from-teal to-amber` umstellen auf **Gelb → Grün** (z.B. `from-amber to-emerald-500` bzw. via CSS-Variable). Außerdem laut PDF: das Spenden-Kärtchen mit türkisem Hintergrund hinterlegen (Home-Seite, `bg-teal text-white` Wrapper-Card). Also ersetze die Zahlen die davor im Türkisem Hintergrund hat die nach oben zählen mit dem Kärtchen

## 3. Texte 1:1 aus PDF übernehmen

Das PDF enthält Inhalts-Updates für sehr viele Seiten. Vorschlag — in dieser Reihenfolge umsetzen:

**Home (`src/pages/Home.tsx` + `src/content/site.ts`):**

- „Our Story" Text auf neue Version (Simon 2017, RARB, MCOPS12, Cure MCOPS12 Gründung, ASO ab 2023)
- ASO-Block: neuer Text „In collaboration with a biotech partner in the US…"
- Spendenkärtchen mit türkisem Hintergrund

**Who We Are (`src/pages/WhoWeAre.tsx`):**

- Intro „Cure MCOPS12 is an Austrian nonprofit…"
- Our Mission Satz
- Board-Bios Reinhard, Edith Pell, Katri Rouvali, Edith Rockenschaub (volle Texte aus PDF)
- Volunteers: Ivana, Kathi (volle Bios)
- Scientific Advisory Board: Wojciech Krezel (Link), Rodney A. Bowling Jr (volle Bio), Jacques L. Michaud, Inge Meijer

**What is MCOPS12 (`src/pages/WhatIs.tsx` / `Mcops12Disease.tsx`):**

- Volltext „Syndromic Microphthalmia 12…" inkl. 4 Hyperlinks (Srour 2016, Srour 2013, Caron 2023, Trieschmann 2023)
- Facts-Liste (8 Bullets) 1:1
- References-Section

**Achievements / Research & Drug Development (`src/pages/Achievements.tsx`):**

- Intro „In close collaboration with… 600,000 € (as of June 2026)… seven research and drug development programs"
- Timeline-Titel ändern in **„Research & Drug Development Milestones"**
- Timeline-Einträge 1:1: 2019–2022 RAinRARE, 2022–2024 Mouse Models & Drug Repurposing (inkl. 2 Publikationen + Links), 2023– Simon's ASO, 2024–2026 Lipidomics, 2024– Natural History Study, 2024– Drug Repurposing iPSC, 2026– Biomarkers

**Network (`src/pages/Network.tsx`):**

- Volltext „We cannot wait…", Partner-Orgs (Sophia & Friends, Sienna), Scientific Network (IGBMC, CHU Sainte-Justine, RareLabs), ProRare + EURORDIS

**ASO Therapy (`src/pages/AsoTherapy.tsx`):**

- Texte aus PDF Seiten 23–25 / 33–35 übernehmen, Hongene-Logo-Block

**Newly Diagnosed, Natural History Study, For Clinicians, Research:**

- Research-Seite: nur Hinweis **„currently under revision"** anzeigen
  - Andere: Texte aus PDF Seiten 26–32y

**Donate:** laut PDF „DONE 18May26" – nur prüfen, keine Änderung nötig falls schon aktuell.

## Offene Frage

Punkt 3 ist umfangreich (Texte auf ~8 Seiten). Soll ich **alles in einem Schritt** umsetzen, oder bevorzugst du die Reihenfolge **Hero+Balken zuerst (Punkt 1+2), dann Texte seitenweise** (z.B. erst Who We Are + What is MCOPS12, danach Achievements + Network, dann Rest)?

Ich habe fast keine Credits mehr wenn es irgendwie geht dass du es verlässlich übertragst ohne fehler zu machen, dann alles auf einmal einfach so dass du am wenigsten credits verbrauchst danach überprüfe ob du alle texte richtig übertragen hast