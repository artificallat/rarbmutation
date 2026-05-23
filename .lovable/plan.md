## Was geändert wird

### 1. Kid-Profilseite (`src/pages/KidProfile.tsx`)
Aktuell ist das Foto links und rechts daneben eine schmale Info-Box — darunter entsteht eine große leere Fläche, und die Werte sind nicht ausgerichtet.

Neues Layout:
- **Sticky Sidebar links** (`md:col-span-4`): Foto in abgerundetem Rahmen mit weichem Schatten und kleinem amber Akzent-Rand. Darunter eine elegante "Fact Card" mit:
  - Zweispaltigem CSS-Grid (`grid-cols-[auto_1fr] gap-x-4 gap-y-3`) statt flex/sm:flex-row — dadurch sind **Parents**, **Year of Birth** und **Hometown & Country** rechts vertikal in einer sauberen Linie ausgerichtet.
  - Dezente Trennlinien zwischen den Zeilen, Label in Teal-Uppercase-Eyebrow-Stil.
- **Story-Spalte rechts** (`md:col-span-8`): Story füllt jetzt die gesamte Breite — keine Lücke mehr. "A Message from … Parents" als großes Display-Heading mit Teal-Akzentbalken links. Absätze in `max-w-prose` mit angenehmer Zeilenlänge. "What are our dreams" Sektion in eigenem Card-Block (warmes Amber-Tinted Background, abgerundet) als emotionaler Abschluss.
- Hero behält Eyebrow + Name, aber: zusätzliche dezente Dekoration (kleines Herz- oder Stern-Icon in Amber) für Wärme.

### 2. "Short story" entfernen (`src/pages/MeetOurKids.tsx`)
- Den `ChevronDown`-Toggle und den ausklappbaren `open`-Block komplett entfernen.
- `useState` raus.
- Stattdessen nur den "Full story" / "Vollständige Geschichte" Link prominent unten in der Karte als CTA-Button.

### 3. Reusable Hero-Verbesserung für Info-Seiten

Aktuelles Problem: Auf Seiten wie *Join the Natural History Study* und *Natural History Study* startet sofort eine Textwand nach einem kleinen Hero. Wirkt überladen.

Neue Komponente `PageHeroIllustrated` in `src/components/site/Bits.tsx` (oder erweitern von `PageHero`):
- Zweispaltiges Hero: Links Eyebrow + Titel + Subtitle + optional CTA. Rechts ein **Icon/Logo-Badge** in einem großen abgerundeten Card (z.B. CHU Sainte-Justine Logo für die NHS-Seiten, ClipboardList-Icon mit Gradient für andere).
- Größerer vertikaler Padding, sanfter Gradient-Hintergrund (navy/teal/amber soft blur blobs — wie bestehender PageHero, aber prominenter).
- Auf Mobile stapelt sich das Layout.

Einsatz auf:
- `JoinNaturalHistoryStudy.tsx` — Hero mit ClipboardList/Stethoscope-Icon Badge rechts. Danach erste Textsektion bekommt eine **"Lead"-Behandlung**: erster Absatz größer, in einem Card-Block mit Teal-Akzent-Border-Left, restliche Absätze danach normal.
- `NaturalHistoryStudy.tsx` — selbe Hero-Variante mit FileText-Icon, gleiche Lead-Behandlung.

### 4. Visuelle Konsistenz
- Alle neuen Cards nutzen bestehende Tokens: `bg-card`, `border-border`, `rounded-3xl`, `shadow-[var(--shadow-card)]`, Teal/Amber Akzente aus dem Design-System.
- Keine neuen Farben — alles über vorhandene HSL-Tokens in `index.css`.

## Dateien
- `src/pages/KidProfile.tsx` — Layout-Refactor
- `src/pages/MeetOurKids.tsx` — Short-story Toggle entfernen
- `src/components/site/Bits.tsx` — neue `PageHeroIllustrated` Komponente + `LeadParagraph` Helper
- `src/pages/JoinNaturalHistoryStudy.tsx` — neuen Hero + Lead-Paragraph nutzen
- `src/pages/NaturalHistoryStudy.tsx` — neuen Hero + Lead-Paragraph nutzen

## Was nicht geändert wird
- Textinhalte (alle 1:1 erhalten)
- Routing, Daten-Struktur in `kidsProfiles.ts` / `site.ts`
- Andere Seiten (z.B. Newly Diagnosed, Donate) — falls gewünscht, in Folge-Iteration mit demselben Hero-Pattern.
