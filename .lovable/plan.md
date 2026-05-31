## Plan: SEPA-QR-Nutzung klarstellen

Ich ändere nur die Donate-Seite:

1. **QR-Hinweistext präzisieren**
   - Direkt neben/unter dem QR-Code steht klar: „Bitte in der Banking-App scannen – nicht mit Kamera/Notizen/normalem QR-Scanner.“
   - Englisch entsprechend: “Scan inside your banking app — not with Camera/Notes/a generic QR scanner.”

2. **Dialog-Text ebenfalls anpassen**
   - Im vergrößerten QR-Code-Dialog wird erklärt, dass normale Scanner nur den SEPA-Text anzeigen können, Banking-Apps daraus aber eine Überweisung vorbereiten.

3. **QR-Code selbst unverändert lassen**
   - Der gescannte Inhalt im Screenshot ist ein gültiger SEPA/EPC-Zahlungscode.
   - Das Verhalten entsteht, weil iOS/Notizen keinen Banktransfer aus SEPA-QR-Codes startet.
   - Ein QR-Code kann aus dem Browser heraus nicht zuverlässig „direkt“ eine Bank-App öffnen; dafür muss die jeweilige Banking-App den Code scannen.