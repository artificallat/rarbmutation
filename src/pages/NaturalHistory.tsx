import { Mail, Database, Microscope, ClipboardList, ShieldCheck, FileSearch } from "lucide-react";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import { Reveal } from "@/components/site/Reveal";
import { AsoWorkflowFigure } from "@/components/site/AsoWorkflowFigure";
import { socials, type Lang } from "@/content/site";

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

      <section className="container-tight pb-12 pt-12">
        <SectionTitle eyebrow={de ? "Warum diese Studie" : "Why this study"} title={de ? "Ohne Naturverlauf keine klinische Studie" : "No natural history, no clinical trial"} />
        <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
          <Reveal>
            <p>
              {de
                ? "Bevor eine neue Therapie getestet werden darf, verlangen Zulassungsbehörden wie EMA und FDA detaillierte Kenntnisse darüber, wie sich eine Krankheit ohne Behandlung entwickelt – wie schnell sie fortschreitet, welche Symptome wann auftreten, welche Marker sich messen lassen. Bei einer ultra-seltenen Erkrankung wie MCOPS12 mit nur rund 52 dokumentierten Fällen weltweit gibt es diese Daten bislang kaum. Eine Natural History Study schließt genau diese Lücke."
                : "Before a new therapy can be tested, regulators such as EMA and FDA require detailed knowledge of how the disease evolves without treatment — how fast it progresses, which symptoms appear when, which biomarkers can be measured. For an ultra-rare condition like MCOPS12 with only ~52 documented cases worldwide, that data barely exists. A natural history study closes exactly that gap."}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p>
              {de
                ? "Unsere Studie baut ein internationales Patientenregister auf und sammelt longitudinale klinische Daten – jährliche Untersuchungen, standardisierte motorische und kognitive Tests, MRT-Bilder, ophthalmologische Befunde, Genotyp-Informationen sowie Berichte der Eltern zu Alltag und Lebensqualität. So entsteht über die Jahre ein präzises Bild des Krankheitsverlaufs, gegen das eine künftige Therapie verglichen werden kann."
                : "Our study builds an international patient registry and collects longitudinal clinical data — annual assessments, standardised motor and cognitive tests, MRI scans, ophthalmological findings, genotype information, and parent-reported outcomes on daily life and quality of life. Over the years this paints a precise picture of disease progression that any future therapy can be measured against."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-tight">
          <SectionTitle eyebrow={de ? "Was wir erfassen" : "What we collect"} title={de ? "Standardisierte Daten über Jahre" : "Standardised data over years"} />
          <div className="grid sm:grid-cols-2 gap-5">
            {(de ? [
              { i: ClipboardList, t: "Klinische Befunde", d: "Neurologische Untersuchungen, motorische Skalen (Gross Motor Function Measure), Dystonie-Scores, Spastik, Krampfanfälle, Ernährung." },
              { i: Microscope, t: "Genotyp & Bildgebung", d: "RARB-Mutationsdetails, MRT-Befunde des Gehirns, ophthalmologische Untersuchungen (Mikrophthalmie, Sehnerv, Retina)." },
              { i: Database, t: "Entwicklung & Kognition", d: "Standardisierte Entwicklungstests, Sprachentwicklung, kognitive Funktion, Schul- und Lernverlauf." },
              { i: ShieldCheck, t: "Lebensqualität (PROs)", d: "Berichte der Eltern zu Pflegeaufwand, Schmerz, Schlaf, sozialer Teilhabe und Familienleben (Patient-Reported Outcomes)." },
            ] : [
              { i: ClipboardList, t: "Clinical findings", d: "Neurological exams, motor scales (Gross Motor Function Measure), dystonia scores, spasticity, seizures, feeding." },
              { i: Microscope, t: "Genotype & imaging", d: "RARB mutation details, brain MRI findings, ophthalmological assessments (microphthalmia, optic nerve, retina)." },
              { i: Database, t: "Development & cognition", d: "Standardised developmental tests, language development, cognitive function, schooling and learning trajectory." },
              { i: ShieldCheck, t: "Quality of life (PROs)", d: "Parent-reported outcomes on care burden, pain, sleep, social participation and family life." },
            ]).map((c, i) => (
              <Reveal key={c.t} delay={i * 120}>
                <div className="bg-card border border-border rounded-2xl p-7 h-full hover:-translate-y-2 hover:shadow-xl hover:border-teal transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-4 group-hover:bg-teal group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <c.i className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-navy mb-2">{c.t}</h4>
                  <p className="text-foreground/75 leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-tight py-20">
        <SectionTitle eyebrow={de ? "Wie es funktioniert" : "How it works"} title={de ? "Teilnahme in vier Schritten" : "Participation in four steps"} />
        <ol className="space-y-5">
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
          ]).map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <li className="flex gap-5 bg-card border border-border rounded-2xl p-6 hover:border-amber hover:-translate-x-1 transition-all duration-300">
                <span className="font-display text-5xl font-bold text-amber w-16 flex-shrink-0 leading-none">{s.n}</span>
                <div>
                  <h4 className="font-display text-xl font-bold text-navy mb-1">{s.t}</h4>
                  <p className="text-foreground/75 leading-relaxed">{s.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-10 bg-navy text-white rounded-2xl p-7 sm:p-8 flex gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-amber/20 text-amber flex items-center justify-center flex-shrink-0">
              <FileSearch className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold mb-2">{de ? "Datenschutz" : "Data protection"}</p>
              <p className="text-white/85 leading-relaxed">
                {de
                  ? "Alle Daten werden pseudonymisiert verarbeitet, gemäß DSGVO und den Standards der beteiligten Universitätskliniken. Forschende erhalten ausschließlich anonymisierte Datensätze; identifizierende Informationen verbleiben verschlüsselt bei der koordinierenden klinischen Einrichtung."
                  : "All data is processed in pseudonymised form, in line with GDPR and the standards of the participating university hospitals. Researchers only receive anonymised datasets; identifying information remains encrypted at the coordinating clinical site."}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 bg-teal text-white rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 hover:shadow-2xl transition-shadow">
            <p className="font-medium flex items-center gap-3"><Mail className="w-6 h-6" />{de ? "Mehr erfahren oder teilnehmen?" : "Want more information or to participate?"}</p>
            <a href={`mailto:${socials.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep hover:scale-105 transition-all">
              {socials.email}
            </a>
          </div>
        </Reveal>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionTitle
            eyebrow={de ? "Einbettung" : "How it fits in"}
            title={de ? "Das Register als Fundament der Therapieentwicklung" : "The registry as the foundation of therapy development"}
          />
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80 mb-10">
            <Reveal>
              <p>
                {de
                  ? "Die Natural History Study liefert die klinische Vergleichsbasis, ohne die kein neuer Wirkstoff zugelassen werden kann. Sie greift direkt in den Entwicklungs-Workflow der allelspezifischen ASO-Therapie ein — von der ersten Mutationsanalyse bis zur Bewertung des Behandlungserfolgs in der späteren klinischen Studie."
                  : "The natural history study provides the clinical baseline that no new therapy can be approved without. It plugs directly into the development workflow of the allele-specific ASO therapy — from the first mutation analysis all the way to assessing treatment effect in the eventual clinical trial."}
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <AsoWorkflowFigure lang={lang} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
