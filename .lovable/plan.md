
## Ausgangslage

- Es existiert noch keine Resend-Funktion im Projekt. Das Spendenformular (`DonationConfirmationForm.tsx`) sendet aktuell an einen Formspree-Platzhalter (`XXXXXXXX`) und fällt im Fehlerfall auf `mailto:` zurück.
- Lovable Cloud ist aktiv, der Resend-API-Key wird als Secret gespeichert (nicht im Code).
- Empfängerdomain bestätigt: `rarbmutation.org`.

## Was umgesetzt wird

1. **Resend-API-Key als Secret speichern**  
   `RESEND_API_KEY` über das Secret-Tool hinterlegen (der Key wird sicher gespeichert und nur in Edge Functions verwendet, niemals im Frontend).

2. **Neue Edge Function `send-donation-confirmation`**  
   - Liegt unter `supabase/functions/send-donation-confirmation/index.ts`.
   - CORS-Header, OPTIONS-Handling, Zod-Validierung der Felder aus dem Spendenformular.
   - Ruft die Resend-API direkt auf (`https://api.resend.com/emails`) mit:
     ```ts
     to: ["rpell@rarbmutation.org", "epell@rarbmutation.org"]
     ```
     Beide Adressen in einem Array, also ein einziger Versand an beide Empfänger.
   - `from`: `onboarding@resend.dev` (Resend-Test-Absender), bis eine eigene verifizierte Domain hinterlegt ist.
   - `reply_to`: die E-Mail-Adresse aus dem Formular, damit Antworten direkt an den Spender gehen.
   - Betreff: `Spendenbestätigung – {Vorname} {Nachname}`.
   - HTML-Body mit allen übermittelten Feldern (Name, Geburtsdatum, Adresse, E-Mail, Betrag, Spendendatum, Zahlungsart).

3. **Formular umstellen**  
   `DonationConfirmationForm.tsx`:
   - Formspree-Aufruf ersetzen durch `supabase.functions.invoke("send-donation-confirmation", { body: payload })`.
   - `mailto`-Fallback bleibt erhalten, falls der Aufruf fehlschlägt.
   - Erfolgs-/Fehler-Toasts unverändert.

4. **Deployen und testen**  
   - Edge Function deployen.
   - Testaufruf an die Funktion mit Dummy-Daten, prüfen dass Resend HTTP 200 zurückgibt und beide Empfänger in der Antwort enthalten sind.

## Technische Details

- Kein Konnektor-Gateway, sondern Direktaufruf der Resend-API mit `Authorization: Bearer ${RESEND_API_KEY}`. Grund: Sie haben den Key explizit selbst bereitgestellt und einen eigenen Resend-Account; das ist der einfachste Weg.
- Validierung serverseitig (Zod), damit kein Müll an Resend geht.
- Keine Datenbanktabellen, keine Authentifizierung nötig (öffentliches Formular).

## Nicht im Scope

- Eigene verifizierte Sender-Domain in Resend (kann später ergänzt werden, dann `from` umstellen).
- Speicherung der Spendenbestätigungen in der Datenbank (nur E-Mail-Versand).
