## Ziel

Alle 4 Vorstandsmitglieder (Reinhard Pell, Edith Pell, Edith Rockenschaub, Katri Rouvali) im selben großen Karten-Layout (16:9-Foto oben + Bio + LinkedIn darunter) in einem 2x2-Grid darstellen.

## Änderung in `src/pages/WhoWeAre.tsx`

1. `featured: true` bei "Edith Rockenschaub" und "Katri Rouvali" im `board`-Array ergänzen (Zeilen 49–55).
2. Den zweiten Grid-Block für nicht-featured Vorstandsmitglieder (Zeilen 130–151) komplett entfernen, da nun alle vier im großen Layout erscheinen.

Das bestehende `grid md:grid-cols-2 gap-8` rendert dann automatisch ein 2x2-Layout für die 4 Karten.
