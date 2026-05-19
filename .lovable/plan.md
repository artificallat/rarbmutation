## Ziel

5 hochgeladene Fotos in die Website einbauen — als Update der existierenden Volunteer-Bilder bzw. als neue Portraits.

## Zuordnung


| Hochgeladenes Foto                      | Wer / Wo                                                                                                                                                                          |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Kathi_Photo.png`                       | **Kathi Carl** (Volunteer) — ersetzt `src/assets/volunteers/kathi.jpeg`                                                                                                           |
| `Ivana.jpg`                             | **Ivana Ursić Ivić** (Volunteer) — ersetzt `src/assets/volunteers/ivana.jpeg`                                                                                                     |
| `Dip.jpg`                               | **Biswadip** (Volunteer) — ersetzt `src/assets/volunteers/biswadip.jpeg`                                                                                                          |
| `Valerie.jpg`                           | **Valerie Chu** — neues Portrait, vermutlich Scientific Advisory Board (Autorin der RARB Natural History Study). Ich lege sie als neues SAB-Mitglied an, falls du das bestätigst. |
| `PXL_20250228_155921769.PORTRAIT_1.jpg` | Im Diashow im Hero in der Startseite das Bild bei and Beyond ersetzen                                                                                                             |


## Schritte

1. **Volunteer-Fotos austauschen** — neue Dateien an dieselben Pfade kopieren (kathi.jpeg, ivana.jpeg, biswadip.jpeg). Keine Code-Änderung nötig, Imports bleiben gleich.
2. **Valerie Chu** als neues Asset (`src/assets/sab/valerie-chu.jpg`) anlegen und in der Scientific Advisory Board Sektion (`WhoWeAre.tsx` / `ScientificAdvisoryBoard.tsx`) als neuer Eintrag einfügen — vorerst nur Name + Rolle "Scientific Advisor" mit Hinweis "Biography coming soon", bis die Bio nachgereicht wird.
3. **Familienfoto** als `reinhard-simon-portrait.jpg` ablegen und im Home "Our Story" als zusätzliches/alternatives Bild verwenden (oder Who We Are Hero — je nach deinem Wunsch).

## Offene Fragen (kurz)

- Stimmt die Zuordnung `Valerie.jpg = Valerie Chu` und gehört sie in den **Scientific Advisory Board**?
- Soll das neue Familienfoto die bestehende `reinhard-simon-lights.jpg` **ersetzen**, oder zusätzlich (in welcher Sektion) erscheinen?

Wenn du die zwei Fragen kurz beantwortest, setze ich es danach in einem Rutsch um.