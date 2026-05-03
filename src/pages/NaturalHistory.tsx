import { Mail, Database, Microscope, ClipboardList, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import { socials, type Lang } from "@/content/site";
import nhsImage from "@/assets/natural-history.jpg";

export default function NaturalHistory({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero
        eyebrow={de ? "Patientenregister" : "Patient registry"}
        title={de ? "Natural History Study" : "Natural History Study"}
        sub={de
          ? "Eine umfassende Längsschnittstudie, die medizinische Daten von MCOPS12-Familien weltweit sammelt – als wissenschaftliche und regulatorische Grundlage für klinische Studien und neue Therapien."
          : "A comprehensive longitudinal study collecting medical data from MCOPS12 families worldwide — the scientific and regulatory foundation for clinical trials and new therapies."}
      />

      <section className="container-tight pb-12">
        <figure className="rounded-3xl overflow-hidden border border-border mb-12">
          <img
            src={nhsImage}
            alt={de ? "Natural History Study – Patientenregister und longitudinale Daten" : "Natural History Study – patient registry and longitudinal data"}
            className="w-full h-auto object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </figure>

        <SectionTitle eyebrow={de ? "Warum diese Studie" : "Why this study"} title={de ? "Ohne Naturverlauf keine klinische Studie" : "No natural history, no clinical trial"} />
        <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            {de
              ? "Bevor eine neue Therapie getestet werden darf, verlangen Zulassungsbehörden wie EMA und FDA detaillierte Kenntnisse darüber, wie sich eine Krankheit ohne Behandlung entwickelt – wie schnell sie fortschreitet, welche Symptome wann auftreten, welche Marker sich messen lassen. Bei einer ultra-seltenen Erkrankung wie MCOPS12 mit nur rund 52 dokumentierten Fällen weltweit gibt es diese Daten bislang kaum. Eine Natural History Study schließt genau diese Lücke."
              : "Before a new therapy can be tested, regulators such as EMA and FDA require detailed knowledge of how the disease evolves without treatment — how fast it progresses, which symptoms appear when, which biomarkers can be measured. For an ultra-rare condition like MCOPS12 with only ~52 documented cases worldwide, that data barely exists. A natural history study closes exactly that gap."}
          </p>
          <p>
            {de
              ? "Unsere Studie baut ein internationales Patientenregister auf und sammelt longitudinale klinische Daten – jährliche Untersuchungen, standardisierte motorische und kognitive Tests, MRT-Bilder, ophthalmologische Befunde, Genotyp-Informationen sowie Berichte der Eltern zu Alltag und Lebensqualität. So entsteht über die Jahre ein präzises Bild des Krankheitsverlaufs, gegen das eine künftige Therapie verglichen werden kann."
              : "Our study builds an international patient registry and collects longitudinal clinical data — annual assessments, standardised motor and cognitive tests, MRI scans, ophthalmological findings, genotype information, and parent-reported outcomes on daily life and quality of life. Over the years this paints a precise picture of disease progression that any future therapy can be measured against."}
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-tight">
          <SectionTitle eyebrow={de ? "Was wir erfassen" : "What we collect"} title={de ? "Standardisierte Daten über Jahre" : "Standardised data over years"} />
          <div className="grid sm:grid-cols-2 gap-5">
            {(de ? [
              { i: <ClipboardList className="w-5 h-5" />, t: "Klinische Befunde", d: "Neurologische Untersuchungen, motorische Skalen (Gross Motor Function Measure), Dystonie-Scores, Spastik, Krampfanfälle, Ernährung." },
              { i: <Microscope className="w-5 h-5" />, t: "Genotyp & Bildgebung", d: "RARB-Mutationsdetails, MRT-Befunde des Gehirns, ophthalmologische Untersuchungen (Mikrophthalmie, Sehnerv, Retina)." },
              { i: <Database className="w-5 h-5" />, t: "Entwicklung & Kognition", d: "Standardisierte Entwicklungstests, Sprachentwicklung, kognitive Funktion, Schul- und Lernverlauf." },
              { i: <ShieldCheck className="w-5 h-5" />, t: "Lebensqualität (PROs)", d: "Berichte der Eltern zu Pflegeaufwand, Schmerz, Schlaf, sozialer Teilhabe und Familienleben (Patient-Reported Outcomes)." },
            ] : [
              { i: <ClipboardList className="w-5 h-5" />, t: "Clinical findings", d: "Neurological exams, motor scales (Gross Motor Function Measure), dystonia scores, spasticity, seizures, feeding." },
              { i: <Microscope className="w-5 h-5" />, t: "Genotype & imaging", d: "RARB mutation details, brain MRI findings, ophthalmological assessments (microphthalmia, optic nerve, retina)." },
              { i: <Database className="w-5 h-5" />, t: "Development & cognition", d: "Standardised developmental tests, language development, cognitive function, schooling and learning trajectory." },
              { i: <ShieldCheck className="w-5 h-5" />, t: "Quality of life (PROs)", d: "Parent-reported outcomes on care burden, pain, sleep, social participation and family life." },
            ]).map(c => (
              <div key={c.t} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-teal/10 text-teal flex items-center justify-center mb-3">{c.i}</div>
                <h4 className="font-display text-lg font-bold text-navy mb-2">{c.t}</h4>
                <p className="text-foreground/75 leading-relaxed text-sm">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-tight py-20">
        <SectionTitle eyebrow={de ? "Wie es funktioniert" : "How it works"} title={de ? "Teilnahme in vier Schritten" : "Participation in four steps"} />
        <ol className="space-y-6">
          {(de ? [
            { n: "1", t: "Kontaktaufnahme", d: "Familien melden sich bei uns oder werden über behandelnde Genetiker:innen vermittelt. Wir prüfen die genetische Diagnose (bestätigte RARB-Variante)." },
            { n: "2", t: "Aufklärung & Einwilligung", d: "Detaillierte Information zu Studienzielen, Datenschutz und Nutzung der Daten. Schriftliche Einwilligung – jederzeit widerrufbar." },
            { n: "3", t: "Datenerhebung", d: "Bestehende medizinische Befunde werden anonymisiert übermittelt. Bei Folgeuntersuchungen werden Daten in standardisierter Form ergänzt." },
            { n: "4", t: "Rückkopplung", d: "Familien werden bei neuen Erkenntnissen erneut kontaktiert – etwa zur Teilnahme an klinischen Studien oder zu neu identifizierten Phänotypen." },
          ] : [
            { n: "1", t: "Initial contact", d: "Families reach out directly or are referred via their treating geneticist. We verify the genetic diagnosis (confirmed RARB variant)." },
            { n: "2", t: "Information & consent", d: "Detailed information on study goals, data protection and data use. Written consent — withdrawable at any time." },
            { n: "3", t: "Data collection", d: "Existing medical records are submitted in de-identified form. Follow-up assessments are added in standardised format." },
            { n: "4", t: "Re-contact", d: "Families are re-contacted as new findings emerge — for instance to join clinical trials or to share newly identified phenotypes." },
          ]).map(s => (
            <li key={s.n} className="flex gap-5 bg-card border border-border rounded-2xl p-6">
              <span className="font-display text-3xl font-bold text-amber w-12 flex-shrink-0">{s.n}</span>
              <div>
                <h4 className="font-display text-lg font-bold text-navy mb-1">{s.t}</h4>
                <p className="text-foreground/75 leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 bg-navy text-white rounded-2xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold mb-3">{de ? "Datenschutz" : "Data protection"}</p>
          <p className="text-white/85 leading-relaxed">
            {de
              ? "Alle Daten werden pseudonymisiert verarbeitet, gemäß DSGVO und den Standards der beteiligten Universitätskliniken. Forschende erhalten ausschließlich anonymisierte Datensätze; identifizierende Informationen verbleiben verschlüsselt bei der koordinierenden klinischen Einrichtung."
              : "All data is processed in pseudonymised form, in line with GDPR and the standards of the participating university hospitals. Researchers only receive anonymised datasets; identifying information remains encrypted at the coordinating clinical site."}
          </p>
        </div>

        <div className="mt-8 bg-teal text-white rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-medium">{de ? "Mehr erfahren oder teilnehmen?" : "Want more information or to participate?"}</p>
          <a href={`mailto:${socials.email}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition">
            <Mail className="w-4 h-4" /> {socials.email}
          </a>
        </div>
      </section>
    </>
  );
}
