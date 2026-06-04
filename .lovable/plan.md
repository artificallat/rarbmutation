# Gene-/Protein-Nomenklatur korrekt anwenden

## Hintergrund

Laut der hochgeladenen Übersicht gelten folgende Regeln (HGNC / MGI):

| | Mensch | Maus |
|---|---|---|
| **Gen (Symbol)** | *RARB* — alle Großbuchstaben, kursiv | *Rarb* — nur erster Buchstabe groß, kursiv |
| **Protein** | RARB — alle Großbuchstaben, **nicht** kursiv | RARB — alle Großbuchstaben, **nicht** kursiv |
| **mRNA / Transkript** | *RARB* — wie das Gen, kursiv | *Rarb* — wie das Gen, kursiv |

Auf der Website wird "RARB" / "Rarb" derzeit gemischt geschrieben — manchmal kursiv (`<em>`), oft aber als normaler Text, obwohl es sich um das Gen handelt. Das soll vereinheitlicht werden.

## Was geändert wird

Alle Vorkommen von **RARB** und **Rarb** auf der Website durchgehen und überall dort, wo der Begriff sich auf das **Gen, das Allel oder die mRNA** bezieht, in Kursivschrift setzen (`<em>` bzw. `*…*`). Wo es um das **Protein** geht (z. B. "RARβ-Protein", "RARB protein", "RARB–RXR-Komplex"), bleibt der Text aufrecht.

### Betroffene Stellen

1. **`src/pages/WhatIs.tsx`** (aktuell sichtbar auf /what-is-mcops12)
   - Hero-Untertitel: „… Retinsäure-Rezeptor Beta (RARB)…" → *RARB* kursiv
   - Fakten-Kacheln: „Mutationen im RARB-Gen" → *RARB*-Gen
   - „RARB-assoziierte Erkrankung" → *RARB*-assoziiert (Gen-Bezug)
   - „RARβ ist ein … Transkriptionsfaktor" → bleibt **aufrecht** (Protein)
   - Block „Ursache" / „Vererbung" / „Klinisches Bild": jedes *RARB*-Gen kursiv
   - Referenz-Titel (Trieschmann, Replogle, Caron …): *RARB* kursiv, wo es das Gen meint
   - Stat-Kachel „RARB — Verursachendes Gen" → *RARB* kursiv

2. **`src/pages/RarbGene.tsx`**
   - „RARB-Gen" / „RARB gene" → *RARB*-Gen kursiv
   - „im RARB-Gen" → *RARB* kursiv
   - „RARβ-Protein" bleibt aufrecht (Protein)

3. **`src/pages/Research.tsx`**
   - Bereits viele *RARB* / *Rarb* korrekt mit `<em>`. Nochmals prüfen, dass alle Gen-/Allel-/mRNA-Erwähnungen kursiv sind und „RARB protein" / „RARβ" aufrecht bleiben.
   - Maus-Allele wie *Rarb*<sup>R387C/+</sup>: *Rarb* kursiv, Suffix aufrecht.

4. **`src/pages/AsoTherapy.tsx`, `src/pages/DrugRepurposing.tsx`, `src/pages/SophiaAndFriends.tsx`, `src/pages/CureForSienna.tsx`, `src/pages/NewlyDiagnosed.tsx`, `src/pages/Mcops12Disease.tsx`, `src/pages/PlainLanguageMcops12.tsx`, `src/pages/Achievements.tsx`, `src/pages/Home.tsx`**
   - Jedes „RARB-Gen", „RARB gene", „im RARB", „Rarb-Modell" kursiv setzen, wenn es sich um Gen/Allel/mRNA handelt.

5. **`src/content/site.ts`** und **`src/content/kidsProfiles.ts`**
   - Reiner Text (kein JSX). Hier wird das Wort `RARB` an Gen-Stellen mit Markdown-Sternchen `*RARB*` markiert **und** der bestehende Renderer prüft, ob `*…*` als `<em>` interpretiert wird. Falls nicht: kleine Hilfskomponente / Renderer-Anpassung, oder Umwandlung der betroffenen Strings auf JSX über einen `dangerouslySetInnerHTML`-Wrapper mit `<em>RARB</em>`.
   - Betrifft u. a.: „Mutation in the RARB gene", „RARB-Gen", „mutated Rarb gene", „RARB mutation" → *RARB* / *Rarb* kursiv.

6. **Schreibweise prüfen** (gemäß Bild):
   - Human-Gen: immer **GROSS** + kursiv (*RARB*) — Großschreibung ist auf der Seite überall korrekt.
   - Maus-Gen: nur erster Buchstabe groß + kursiv (*Rarb*) — `kidsProfiles.ts` Z. 43 enthält bereits korrekt „Rarb gene" (nur Schreibweise, jetzt zusätzlich kursiv).
   - Protein: *RARβ* mit griechischem β bleibt **aufrecht**, NICHT kursiv. An Stellen, wo aktuell "RARB protein" gemeint ist, aufrecht lassen.

## Technische Umsetzung

- In `.tsx`-Dateien: `<em>RARB</em>` bzw. `<em>Rarb</em>`. Existierende `<em>`-Verwendungen in `Research.tsx` als Muster nutzen.
- In `.ts`-Content-Dateien (reine Strings): Entweder
  (a) Strings in JSX-Fragmente umwandeln, sofern der Renderer das unterstützt, oder
  (b) eine kleine Utility `renderGene(text)` einführen, die `*RARB*` / `*Rarb*` zu `<em>` umwandelt, und sie an den Render-Stellen anwenden.
  Variante (b) ist weniger invasiv und wird bevorzugt.
- Keine Stildefinition ändern — `<em>` erbt die kursive Darstellung aus dem Browser/Tailwind Defaults.

## Nicht im Scope

- Keine inhaltlichen Textänderungen außer Italic-Auszeichnung.
- Keine Layout- oder Designänderungen.
- Die Nomenklatur-Tabelle aus dem Screenshot wird **nicht** als neues Seiten-Element hinzugefügt (außer du wünschst es ausdrücklich).

Soll ich die Nomenklatur-Tabelle zusätzlich irgendwo auf der Seite (z. B. auf /rarb-gene oder /what-is-mcops12) als Info-Box einbauen?
