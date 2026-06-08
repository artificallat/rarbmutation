## Finale Korrekturen

### 1. `src/components/site/AsoWorkflowFigure.tsx` — exakt an die Slide angleichen
Die Komponente wird auf beiden Seiten (Simon's ASO therapy in Achievements + N-of-1 ASO Therapy) genutzt. Inhalte an die Slide anpassen:

- **Spalte 1 – Target identification & ASO design**
  - "Target site identification" → Body: *Additional mutations on mutant RARB allele* (Klammerzusatz "SNPs, indels" entfernen — auf Slide nicht vorhanden)
- **Spalte 2 – Efficacy & safety testing in Simon's cell model**
  - Efficacy testing: *>110 ASOs screened for allele-specific knockdown* (Zusatz "(iPSC-derived neural stem cells)" entfernen)
  - Safety testing: nur *Immunotoxicity · Cytotoxicity · Off-target effects* (Assay-Klammern entfernen)
- **Spalte 4 – Clinical study & expected outcomes**
  - "Intrathecal administration" → **Intrathecal injection**
  - Expected outcomes leicht umformulieren, damit Reihenfolge/Wortlaut der Slide entspricht: *Treatment is expected to be safe and well-tolerated · Improved brain function by knockdown of mutant RARB · Reduction in movement disorders · Improved cognitive skills*

Dieselben Änderungen jeweils auch in der deutschen Variante derselben Datei.

### 2. `src/pages/Achievements.tsx` — Satzersetzung prüfen
Der Satz unter "Simon's ASO Therapy" lautet bereits *"A customized RNA therapy for Simon — opening a path for other children with MCOPS12."* (englische Version bestätigt in Zeile 18). Keine Änderung nötig.

### 3. `src/pages/NaturalHistoryStudy.tsx` — fehlenden Klinikerabsatz ergänzen
Aktuell gibt es nur den "Become part of the study"-Block (Patient:innen-Aufruf). Der für Kliniker:innen gerichtete Absatz fehlt. Direkt nach dem bestehenden Kontaktblock (Zeile ~70) einen zweiten Kontaktblock einfügen:

- **Eyebrow:** Clinicians / Fachkreise
- **Titel:** *Do you treat a patient diagnosed with MCOPS12?* / *Behandeln Sie eine:n Patient:in mit MCOPS12?*
- **Text:** *Please contact Valerie Chu, genetic counsellor and study coordinator, CHU Sainte-Justine.* / *Bitte kontaktieren Sie Valerie Chu, genetische Beraterin und Studienkoordinatorin, CHU Sainte-Justine.*
- **Mail-Button:** `valerie.chu.hsj@ssss.gouv.qc.ca` (gleicher Outlook-Deeplink wie bestehender Block)

Visuell als zweite Card im selben Stil wie der bestehende Navy-Block (z. B. heller/teal-Variante zur Unterscheidung), damit klar wird: ein Block für Familien, ein Block für Kliniker:innen.

### Out of scope
- Keine Änderungen an N-of-1-Hero-Text (bereits "Personalized RNA therapy" + "but a blueprint" gesetzt).
- Keine inhaltlichen Änderungen am Workflow über die Slide-Angleichung hinaus.
