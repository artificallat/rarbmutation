## Änderungen auf der Donate-Seite

### 1. Hero-Text (`src/pages/Donate.tsx`)
- Aktueller Titel "Mit Ihrer Unterstützung … / With your support …" ersetzen durch:
  - EN: "With your help, we can move closer to a life-changing therapy. Every donation makes a difference."
  - DE: "Mit Ihrer Hilfe kommen wir einer lebensverändernden Therapie näher. Jede Spende macht einen Unterschied."

### 2. Spendenbalken-Sektion (`Donate.tsx` + `Bits.tsx` `ProgressBar`)
- Card-Hintergrund von weiß auf **Teal** (`bg-teal` mit `text-white` Kontrastfarben) umstellen.
- Farbverlauf des Balkens umkehren: jetzt Emerald → Amber-Deep → Amber. Neu: Amber (Start) → Amber-Deep → Emerald (Ende) — also "von gelb zu grün bei steigender Spendensumme".
- Begleittext unter dem Balken ersetzen:
  - EN: "With your financial support, we can complete the toxicology studies and produce a clinical grade ASO drug for Simon."
  - DE: entsprechende deutsche Version.
- Hinweis: `donationGoal` in `src/content/site.ts` steht bereits auf `{ raised: 301000, goal: 950000 }` — keine Änderung nötig.
- `ProgressBar` Text-/Label-Farben so anpassen, dass sie auf Teal lesbar bleiben (weiß / weiß-80).

### 3. "Three simple ways" — Reihenfolge (`Donate.tsx`)
Neue Reihenfolge der drei Cards:
1. Bank Transfer (links, wie bisher)
2. Credit Card / PayPal (Mitte) — vorher rechts
3. GoFundMe (rechts) — vorher Mitte

Bank-Transfer-Card erweitern: unter den IBAN/BIC-Daten ein **QR-Code-Bild** anzeigen, das beim Einscannen die SEPA-Überweisung vorausfüllt (EPC-QR / "GiroCode" Standard). Wird beim Build generiert mit dem `qrcode`-npm-Paket aus den existierenden Bank-Daten (Empfänger "Cure MCOPS12", IBAN AT03 3406 0000 0824 3362, BIC RZOOAT2L060). QR als statische PNG/SVG in `src/assets/bank-qr.svg` ablegen, dann importieren — kein Runtime-Code nötig.

### 4. Credit Card / PayPal Card — Donorbox-Einbindung
Aktuell verlinkt die Card auf GoFundMe. Neu:
- Button-Label & Link auf Donorbox-Spendenformular umstellen.
- Da der finale Donorbox-Kampagnen-Link noch nicht existiert, **Platzhalter-URL** `https://donorbox.org/REPLACE-ME` verwenden, in einer Konstante am Anfang der Datei (`const DONORBOX_URL = "https://donorbox.org/REPLACE-ME"`) und mit einem `// TODO: Donorbox-Kampagnen-URL einsetzen` Kommentar markieren, damit später leicht auffindbar.
- Optional kann später das offizielle Donorbox-Embed-Widget eingesetzt werden; für jetzt reicht der Link-Button.

### 5. Steuer-Absetzbarkeit Sektion (`Donate.tsx`)
- Headline ändern auf "For individuals and companies in Austria — your donation is tax-deductible!" (DE-Variante analog).
- Das vom User hochgeladene Logo (`Spende steuerlich absetzbar Logo.jpeg`, FW-22429) als Bild in der Card anzeigen — links neben oder über dem Text, in moderater Größe (max 160px). Bild nach Upload in `src/assets/tax-deductible-logo.jpg` ablegen und importieren.
- Text darunter:
  - EN: "Cure MCOPS12 is a registered nonprofit organization in Austria and eligible to receive tax-deductible donations (registration number: FW-22429)."
- Bestehender ausführlicher Text + BMF-Link bleiben darunter erhalten.

### 6. Footer (`src/content/site.ts`)
- Tagline "An Austrian nonprofit racing to find a cure for MCOPS12." komplett aus dem Footer entfernen (Eintrag `tagline` in `t.en.footer` und `t.de.footer` leeren bzw. die `<p>` in `Footer.tsx` ausblenden, wenn leer). Andere Vorkommen von "Austrian" (SEO-Meta, About-Seiten) bleiben unberührt — User hat explizit nur "im Footer" gesagt.

## Technische Details
- Neue Dependency: `qrcode` (devDependency) zur einmaligen QR-Generierung via kurzem Node-Skript ODER fertige SVG manuell erzeugen und committen. Bevorzugt: einmal generieren, SVG einchecken — keine Runtime-Dep.
- EPC-QR Payload-Format: `BCD\n002\n1\nSCT\nRZOOAT2L060\nCure MCOPS12\nAT0334060000008243362\n\n\n\nSpende Cure MCOPS12`
- Keine neuen Farben — bestehende Tokens `teal`, `amber`, `amber-deep`, `emerald-400` aus dem Design-System.

## Offene Punkte / vom User benötigt
- **Donorbox-Link**: User liefert später nach (Platzhalter wird gesetzt).
- **Steuer-Logo JPEG**: User wird in der nächsten Nachricht hochladen — wird dann an die richtige Stelle kopiert.

## Was nicht geändert wird
- Andere Sektionen (Spendenbestätigungs-Formular, Wirkungs-Sektion, GoFundMe-Dankes-Block, BMF-Registry-Box) bleiben inhaltlich unverändert.
- Routing, andere Seiten, Navigation.
