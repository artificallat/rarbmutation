# Verbesserungen quer durch die Website

## 1. Fixes (kleinere, klare Korrekturen)

**Defekte externe Links**
- `WhatIs.tsx`: Link „NIH National Library of Medicine" (`ghr.nlm.nih.gov/gene/RARB`) → ersetzen durch funktionierende URL `https://medlineplus.gov/genetics/gene/rarb/`.
- `WhatIs.tsx`: Link „Srour et al. 2013 — original description" (PMC) prüfen und auf funktionierende Quelle umstellen, z. B. PubMed `https://pubmed.ncbi.nlm.nih.gov/24075189/`.

**Hero-Bild Slide 2 (Family-Berge) noch oben abgeschnitten**
- `Home.tsx` Zeile 101–107: Statt `object-[70%_bottom]` ein leicht verkleinertes `object-contain`-Verhalten ist nicht möglich (würde Balken erzeugen). Lösung: `object-cover` beibehalten, aber `object-position` auf `center 30%` (statt `bottom`) setzen, sodass das Bild leicht nach unten rutscht und der obere Beschnitt verschwindet — bei mobilem Hochformat `70% 30%`. Bild bleibt formatfüllend, keine Letterbox-Balken.

**„More ways to support us" zeigt auf alte Website**
- `RaiseAwareness.tsx` Zeile 74: Externer Link `https://rarbmutation.org/support-us/` ersetzen durch internen Link auf `/donate` (bzw. `/de/donate`) oder `/how-to-get-involved`. Button-Stil bleibt erhalten.

**KI-Bild in Research entfernen**
- `Research.tsx` Zeile 89–100: Komplettes `<Reveal>` mit `labImage` löschen. Import von `labImage` entfernen.

**ASO Therapy „Large pharma partner" Hover**
- `AsoTherapy.tsx` Zeile 211–221: `<div>` zu `<div>` mit denselben Hover-Klassen wie die anderen beiden Karten erweitern (`hover:border-teal hover:shadow-xl transition-all`). Da kein öffentlicher Link existiert, bleibt es ein `<div>` (kein `<a>`), aber visuell mit demselben Hover-Effekt.

## 2. Redesigns (Inhalt bleibt, Darstellung wird interaktiver)

**Our Story** (`OurStory.tsx`)
- Aus reinem Fließtext eine visuell strukturierte Timeline machen:
  - 4 Reveal-Cards in einer vertikalen Zeitachse: 2017 (Simons Geburt & Diagnose-Suche), 2018 (RARB-Diagnose), 2019 (Vereinsgründung), heute (internationales Netzwerk).
  - Jeder Eintrag mit Jahr-Badge (amber), Icon (Heart/Dna/Users/Globe), Titel und kurzem Absatz.
  - Darunter eine kompakte Stats-Reihe (Familien gefunden, Länder, finanzierte Programme).
  - Foto-Card (Simon mit Pony oder Familienfoto) als Abschluss.
- Beibehalten: alle bestehenden Inhalte, beide Sprachen.

**Plain Language MCOPS12** (`PlainLanguageMcops12.tsx`)
- Aktuell trockene Liste → interaktiv & kindgerecht:
  - Großes farbiges Hero-Statement mit kurzer Ein-Satz-Zusammenfassung.
  - Symptome als 4 Icon-Cards (Auge / Muskel / Bewegung / Sprache+Lernen) mit Hover-Animation und einfacher Sprache.
  - Aufklapp-Bereich („Wie entsteht das?") mit `details/summary` Akkordeon, Schritt-für-Schritt-Erklärung mit Icons.
  - „What this means for daily life" / „Was es im Alltag bedeutet" — kleine Karten mit Beispielen.
  - Call-out Box: „Es gibt noch keine Therapie, aber wir arbeiten daran" mit Link zu Research.
  - CTA-Karten am Ende: „Mehr Details ansehen" → /what-is-mcops12, „Familien-Hub" → /newly-diagnosed.

**Drug Repurposing** (`DrugRepurposing.tsx`)
- Aus 2 Text-Cards interaktive Pfad-Visualisierung:
  - Großes „Two parallel paths"-Diagramm: 2 Spalten mit jeweils Icon (Mouse/Petri), Step-Pipeline (3–4 Mini-Steps mit Verbindungslinien) und Status-Badge.
  - Hover-Animation auf den Steps (Skalierung, Farbwechsel von amber/teal).
  - Zahlen-Highlights (z. B. „5 Wirkstoffe", „~10.000 Verbindungen").
  - Partner-Logos/Namen als kleine Chips unter jedem Pfad.
  - Reveal-Animation beim Scrollen.

## 3. Latest News mit LinkedIn-Posts aktualisieren

Basierend auf dem hochgeladenen LinkedIn-Screenshot (3 sichtbare Posts) `News.tsx` und `Home.tsx` `homeNews` Array aktualisieren:

1. **„RUN FOR RARE – RUN FOR SIMON"** (vor 2 Monaten, Rare Diseases Run)
2. **„RARB-RD Preprint von Nicolas Zinter"** (Mausmodelle p.R387C / p.L402P) — vor 2 Monaten
3. **„Happy New Year 2026"** (Community-Rückblick) — vor 4 Monaten

Bestehende Bilder `simon-fiber-lights.jpg`, `simon-neujahr-2026.jpg`, `simon-winter-2026.jpg` weiterverwenden bzw. neu zuordnen.
- Texte zweisprachig DE/EN.
- Reihenfolge: Run for Rare (neuester) → Preprint → Neujahr.

## 4. Allgemeine Verschönerungen (Self-Review)

- `News.tsx`: „Read more" `href="#"` ist tot — entfernen oder auf eigenen Permalink-Anker leiten; vorerst entfernen, bis es einzelne Post-Seiten gibt.
- `News.tsx`: Hover-Lift (`-translate-y-1`) konsistent zu Home-News-Cards hinzufügen.

## Technische Hinweise (für Entwickler)

- Keine neuen Dependencies nötig — alles mit bestehendem `Reveal`, `lucide-react`, Tailwind.
- Nur Frontend / Presentation, keine Backend-Änderungen.
- Bilder bleiben unverändert (kein neuer Asset-Import außer dem Entfernen von `labImage`).
- Externe Link-URLs werden vor dem Speichern verifiziert.

## Geänderte Dateien

- `src/pages/Home.tsx` — Hero-Position, News-Array
- `src/pages/News.tsx` — Posts-Array, Hover, toter Link
- `src/pages/WhatIs.tsx` — 2 externe Links
- `src/pages/RaiseAwareness.tsx` — Link auf interne Seite
- `src/pages/Research.tsx` — KI-Bild entfernen
- `src/pages/AsoTherapy.tsx` — Hover für Pharma-Karte
- `src/pages/OurStory.tsx` — Redesign Timeline
- `src/pages/PlainLanguageMcops12.tsx` — Redesign interaktiv
- `src/pages/DrugRepurposing.tsx` — Redesign Pfad-Visualisierung
