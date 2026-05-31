## Quick-Fixes

### 1. Spendenbalken auf der Donate-Seite wieder weiß
`src/pages/Donate.tsx`: Container von `bg-teal` zurück auf neutralen Card-Hintergrund (`bg-card border border-border`), `ProgressBar` ohne `light`-Prop, Beschreibungstext wieder in Standard-Foreground-Farbe. Nur die Donate-Seite — der Home-Spendenbalken bleibt unverändert.

### 2. Echter SEPA-EPC QR-Code (EPC069 / Girocode)
- Neues Skript generiert eine valide EPC-Payload (Service Tag `BCD`, Version `002`, UTF-8, SCT, BIC `RZOOAT2L060`, Name `Cure MCOPS12`, IBAN `AT0334060000008243362`, **Betrag leer**, Verwendungszweck „Spende Cure MCOPS12").
- Rendert als PNG nach `src/assets/bank-qr.png` (überschreibt das alte SVG-Asset im Import).
- `Donate.tsx`: Import auf `bank-qr.png` umstellen. Banking-Apps (George, Bank Austria, Erste, Revolut etc.) erkennen den Code und füllen IBAN/BIC/Empfänger automatisch aus; der Spender trägt nur den Betrag ein.

### 3. Kaputter CHU-Link auf „Join the Natural History Study"
`src/pages/JoinNaturalHistoryStudy.tsx` Z. 169: `https://www.chusj.org/en/centre-recherche` → 404. Ersetzen durch `https://research.chusj.org/en/Home` (gleicher Link wie auf der Network-Seite).

## Nicht in diesem Schritt
PDF-Inhalts-Abgleich aller Seiten und allgemeines Design-/Link-Audit machen wir separat, sobald du grünes Licht gibst.