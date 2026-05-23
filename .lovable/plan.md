1. Replace photos:
   - image-45 → src/assets/krezel-simon.jpg
   - image-46 → src/assets/jacques-michaud.jpg
   - image-47 → src/assets/inge-meijer.jpeg

2. In src/pages/WhoWeAre.tsx, extract SAB card into a `SabCard` component with collapse/expand state. When the entry has a `bio`, show a "Read more / Mehr lesen" button with ChevronDown that toggles the bio (same UX as VolunteerCard / MeetOurKids). Entries without a bio render unchanged.