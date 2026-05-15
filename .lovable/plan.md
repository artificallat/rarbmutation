Ich werde nur mobile Darstellung ändern.

1. In `src/pages/Home.tsx` die mobile Hero-Höhe so anpassen, dass sie nicht mehr stumpf `100dvh` nutzt, sondern die echte verfügbare Höhe abzüglich mobiler Browser-/Preview-Bedienelemente berücksichtigt.
2. Mobile-only Klassen ergänzen, damit Bild, Overlay und Inhalt weiterhin exakt im Hero bleiben und unten kein heller Abstand sichtbar ist.
3. Desktop-/Tablet-Klassen unverändert lassen (`sm:` und größer bleiben wie sie sind).
4. Danach die mobile Ansicht prüfen, ob das Bild bis zur sichtbaren Unterkante reicht und der Text/Donate-Button nicht zu weit unten sitzt.