# Plan

## 1. ASO Therapy: doppeltes Workflow-Kärtchen entfernen

In `src/pages/AsoTherapy.tsx`:

- Den Block `Figure 2` (Section mit `<AsoWorkflowFigure lang={lang} />`, Zeilen ~157–162) **löschen**, weil dieselbe Workflow-Grafik bereits auf der Natural-History-Study-Seite genutzt wird und direkt darüber schon der "From sequencing result to clinical use"-4-Schritte-Block (`WorkflowProgress`) steht.
- Den Import `AsoWorkflowFigure` aufräumen, falls nicht mehr verwendet.

## 2. Who We Are – Volunteer-Karten: größer + "Read more"-Button

In `src/pages/WhoWeAre.tsx` die Volunteers-Section so umbauen wie auf "Meet Our Kids":

- Grid von `lg:grid-cols-4` auf `md:grid-cols-2` ändern → zwei große Karten pro Reihe (genug Platz für vollen Bio-Text).
- Foto deutlich größer (z. B. 160×160 px, weiter als Kreis).
- Hover-Overlay mit Text **entfernen** – stattdessen unter Name/Rolle: kurze Vorschau-Zeile, danach `Read story / Geschichte lesen`-Button mit `ChevronDown` (gleicher Mechanismus wie `KidCard` in `MeetOurKids.tsx`).
- Beim Aufklappen: vollständiger Bio-Text aus PDF + LinkedIn-Button.

## 3. Texte 1:1 aus PDF übernehmen

### Volunteers (Page 11 des PDF)

- **Ivana Ursić Ivić** – Bio ersetzen durch den vollen Absatz aus dem PDF (Split, Kroatien, Engineer/drug development specialist, Projektmanagerin, Inspiration durch Reinhard, Freizeit: Reisen, Bouldern, Mann + Katzen). DE-Übersetzung 1:1 angepasst.
- **Kathi Carl** – Bio ersetzen durch den vollen Absatz (Thüringen, Chemikerin, Projektmanagerin, Pell-Familie, als Mutter motiviert, Freizeit: Wandern, Basketball, Lesen).

### Board (Pages 9–10 des PDF)

- **Reinhard Pell** – Bio austauschen gegen die PDF-Version (PhD Analytical Chemistry Wien, Pharma-Karriere mit RNA-Therapeutika, Cure MCOPS12 Gründung, Freizeit: Sport/Natur, Alpinwandern, Skifahren, Schwimmen mit Kindern).
- **Edith Pell** – Bio austauschen gegen die PDF-Version (Master Sozialwissenschaften, Sozialarbeiterin >10 Jahre, zwei Kinder Simon + kleine Schwester, glaubt an Reinhards Drug-Development-Expertise + Familie/Freunde, Freizeit: Wandern/Laufen rund um Salzburg).
- **Katri Rouvali** – Bio bereits 1:1 aus PDF, bleibt.
- **Edith Rockenschaub** – Bio austauschen gegen die PDF-Version (Hagenberg, Treasurer, Buchhalterin bei Baufirma, Kindheitsfreundin von Simons Mama, Partner half mit ein, Freizeit: Gärtnern + Brot backen).

### Scientific Advisory Board (Page 12)

- **Jacques L. Michaud** – Prefix "Prof." ergänzen (Titel im PDF: "Prof. Jacques L. Michaud, MD, FRCP").
- **Inge Meijer** – Titel auf "MD, PhD, FRCP" angleichen (PDF schreibt FRCP).
- Bowling-Bio bereits drin → bleibt.

## Technische Details

```text
src/pages/AsoTherapy.tsx
  - Section "Figure 2" entfernen (~Z. 157–162)
  - Import AsoWorkflowFigure entfernen, falls ungenutzt

src/pages/WhoWeAre.tsx
  - volunteers[]: bio.en/bio.de für Ivana + Kathi mit PDF-Volltext füllen
  - board[]: bio.en/bio.de für Reinhard, Edith Pell, Edith Rockenschaub mit PDF-Volltext füllen
  - sab[]: title-Korrektur Michaud + Meijer
  - Volunteers-Render-Block umbauen:
    * neue VolunteerCard-Komponente mit useState(open)
    * grid md:grid-cols-2
    * Bild 160×160 px, runde Form
    * Read-more-Toggle analog KidCard (ChevronDown rotiert)
```

Andere Seiten (Achievements/Research/Network/ASO-Texte/Home) bleiben in diesem Schritt unverändert – falls dort noch Stellen 1:1 anzupassen sind, sag mir bitte konkret welche Absätze, dann nehme ich die in einem nächsten Durchgang dran.  
  
Überprüfe noch zusätzlich ob die anderen Texte 1 zu 1 so steht wie im Onenote, wenn nicht bessere es aus analysiere die ganze Seite und übernehme den text weil auch bei ein paar stellen hast du beim Zitat vergessen es abzuschließen