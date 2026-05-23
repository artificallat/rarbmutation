import { ClipboardList, Activity, Users, Mail, FileText, Download, Presentation, CheckCircle2, Clock } from "lucide-react";
import { PageHero } from "./WhoWeAre";
import { useInView } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { AsoWorkflowFigure } from "@/components/site/AsoWorkflowFigure";
import type { Lang } from "@/content/site";

export default function JoinNaturalHistoryStudy({ lang }: { lang: Lang }) {
  const de = lang === "de";

  const features = de
    ? [
        { icon: ClipboardList, t: "Jährliche Fragebögen", d: "Teilnehmer- und Arzt-Fragebögen sowie das Hochladen von MRT-Bildern und Patientenvideos." },
        { icon: Activity, t: "Erweiterte Biomarker (ab 2026)", d: "EEG sowie metabolomische und proteomische Analysen aus Blutplasmaproben." },
        { icon: Users, t: "Offen für alle Altersgruppen", d: "Personen jeden Alters, aus jedem Land, mit pathogenen oder wahrscheinlich pathogenen RARB-Varianten können teilnehmen." },
      ]
    : [
        { icon: ClipboardList, t: "Annual questionnaires", d: "Participant and physician questionnaires plus uploads of brain MRIs and short participant videos." },
        { icon: Activity, t: "Expanded biomarkers (from 2026)", d: "EEG together with metabolomic and proteomic analyses of patient blood plasma samples." },
        { icon: Users, t: "Open to all ages", d: "Individuals of any age, from any country, carrying pathogenic or likely pathogenic variants in the RARB gene are eligible." },
      ];

  return (
    <>
      <PageHero
        eyebrow={de ? "Familien" : "Families"}
        title={de ? "Nimm an der Natural History Study teil" : "Join the Natural History Study"}
        sub={de
          ? "In Zusammenarbeit mit A Cure for Sophia and Friends, A Cure for Sienna und Cure MCOPS12 hat das CHU Sainte-Justine 2024 die MCOPS12 (RARB) Natural History Study gestartet."
          : "In collaboration with A Cure for Sophia and Friends, A Cure for Sienna and Cure MCOPS12, CHU Sainte-Justine launched the MCOPS12 (RARB) Natural History Study in 2024."}
      />

      <section className="container-tight pb-12 space-y-6 text-foreground/85 leading-relaxed text-lg">
        <p>
          {de
            ? "Eine Natural History Study ist eine medizinische Studie, die Forscher:innen hilft zu verstehen, wie sich eine Erkrankung über die Zeit entwickelt und verändert. Ziel ist es, mehr darüber zu lernen, wie die Erkrankung Betroffene beeinflusst — als Grundlage für eine bessere Versorgung und zukünftige Therapien."
            : "A natural history study is a type of medical study that helps researchers understand how a disease develops and changes over time in a group of patients. Its purpose is to learn more about how the condition affects individuals, so that better care and treatments can be developed in the future."}
        </p>
        <p>
          {de
            ? "Diese Art von Studie testet keine neuen Medikamente oder Therapien. Stattdessen wird der natürliche Verlauf der Erkrankung sorgfältig beobachtet und dokumentiert."
            : "This type of study does not involve testing new drugs or treatments. Instead, it focuses on carefully observing and documenting the disease as it naturally progresses."}
        </p>
        <p>
          {de
            ? "Gerade bei seltenen Erkrankungen wie MCOPS12 sind Natural History Studies besonders wichtig. Da die Zahl der Betroffenen klein ist und die Symptome stark variieren können, sind diese Studien ein vielversprechender Weg, die Erkrankung besser zu verstehen — und sie liefern die Ausgangsdaten für eine klinische Studie."
            : "Natural history studies are especially important for rare diseases like MCOPS12. Since the number of affected individuals is small and symptoms can vary widely, these studies are a promising path for a better understanding of a disease as well as generating baseline data for a clinical trial."}
        </p>
        <p>
          {de
            ? "Die MCOPS12 Natural History Study erfasst Basisdaten sowie Beurteilungen der neurologischen Entwicklung und Motorik. Teilnehmen können Personen jeden Alters, aus jedem Land, die pathogene oder wahrscheinlich pathogene Varianten im RARB-Gen tragen."
            : "The MCOPS12 Natural History Study collects baseline data and assessments of neurodevelopment and motor skills. Individuals of any age, from any country, carrying pathogenic or likely pathogenic variants in the RARB gene are eligible to participate."}
        </p>
        <p>
          {de
            ? "Die Studie umfasst jährliche Teilnehmer- und Arztfragebögen sowie das Hochladen von MRT-Aufnahmen des Gehirns und Patientenvideos. 2026 wurde die Studie um Biomarker-Forschung erweitert — darunter EEG sowie metabolomische und proteomische Analysen aus Blutplasmaproben."
            : "The study entails annual participant and physician questionnaires, as well as uploading brain MRIs and participant videos. In 2026, the study was expanded to include biomarker research, comprising EEG as well as metabolomic and proteomic analyses of patient blood plasma samples."}
        </p>
      </section>


      <section className="container-wide pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={i * 120}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:-translate-y-1 hover:shadow-xl hover:border-teal transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-4 group-hover:bg-teal group-hover:text-white transition-colors">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">{f.t}</h3>
                <p className="text-foreground/80 mt-2 leading-relaxed text-base">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-tight pb-12">
        <Reveal>
          <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-3xl p-10 shadow-[var(--shadow-card)]">
            <SectionTitle eyebrow={de ? "Interessiert?" : "Interested?"} title={de ? "Werde Teil der Studie" : "Become part of the study"} light />
            <p className="text-white/90 leading-relaxed -mt-2">
              {de
                ? "Kontaktiere Valerie Chu, genetische Beraterin und Studienkoordinatorin am CHU Sainte-Justine."
                : "Reach out to Valerie Chu, genetic counsellor and study coordinator at CHU Sainte-Justine."}
            </p>
            <a
              href="mailto:valerie.chu.hsj@ssss.gouv.qc.ca"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3 font-semibold text-navy hover:brightness-95 transition"
            >
              <Mail className="w-4 h-4" />
              valerie.chu.hsj@ssss.gouv.qc.ca
            </a>
          </div>
        </Reveal>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionTitle
            eyebrow={de ? "Einbettung" : "How it fits in"}
            title={de ? "Vom Register zur Therapie" : "From the registry to a therapy"}
          />
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80 mb-10 max-w-3xl">
            <Reveal>
              <p>
                {de
                  ? "Die Daten der Natural History Study bilden die klinische Vergleichsbasis, ohne die Behörden wie EMA und FDA keine neue Therapie zulassen. Sie speisen direkt den Entwicklungs-Workflow der allelspezifischen ASO-Therapie — von der Mutationsanalyse einzelner Patient:innen bis zur Bewertung des Behandlungseffekts in der späteren klinischen Studie."
                  : "Data from the natural history study form the clinical baseline without which regulators such as the EMA and FDA cannot approve a new therapy. They feed directly into the allele-specific ASO development workflow — from per-patient mutation analysis to assessing treatment effect in the eventual clinical trial."}
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <AsoWorkflowFigure lang={lang} />
          </Reveal>
        </div>
      </section>

      <WorkflowProgress de={de} />


      <section className="container-wide pb-12">
        <SectionTitle
          eyebrow={de ? "Materialien" : "Resources"}
          title={de ? "Flyer & Webinar-Präsentation" : "Flyer & webinar presentation"}
        />
        <div className="grid sm:grid-cols-2 gap-6 -mt-2">
          <a
            href="/documents/Flyer-RARB-MCOPS12-Natural-History-Study.pdf"
            target="_blank"
            rel="noreferrer"
            className="group bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all flex items-start gap-4"
          >
            <div className="w-14 h-14 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
              <Download className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider font-semibold text-teal mb-1">PDF</p>
              <h4 className="font-display text-lg font-bold text-navy">
                {de ? "Studien-Flyer herunterladen" : "Download the study flyer"}
              </h4>
              <p className="text-sm text-foreground/70 mt-1">Flyer — RARB (MCOPS12) Natural History Study.pdf</p>
            </div>
          </a>

          <a
            href="/documents/RARB-Natural-History-Study_V-Chu_2024.pdf"
            target="_blank"
            rel="noreferrer"
            className="group bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all flex items-start gap-4"
          >
            <div className="w-14 h-14 rounded-xl bg-amber/15 text-amber-deep flex items-center justify-center shrink-0 group-hover:bg-amber group-hover:text-navy transition-colors">
              <Presentation className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider font-semibold text-amber-deep mb-1">{de ? "Webinar 2024" : "2024 webinar"}</p>
              <h4 className="font-display text-lg font-bold text-navy">
                {de ? "Präsentation des MCOPS12-Familien-Webinars" : "Presentation from our 2024 MCOPS12 families webinar"}
              </h4>
              <p className="text-sm text-foreground/70 mt-1">RARB Natural History Study_V. Chu_2024.pdf</p>
            </div>
          </a>
        </div>
      </section>

      <section className="container-wide pb-20">
        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="https://ern-ithaca.eu/our-research-activities/calls-for-collaboration/rarb-natural-history-study/"
            target="_blank"
            rel="noreferrer"
            className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-navy">{de ? "Studien-Übersicht (ERN-ITHACA)" : "Study overview (ERN-ITHACA)"}</h4>
              <p className="text-sm text-teal font-semibold mt-1 break-all">ern-ithaca.eu/.../rarb-natural-history-study</p>
            </div>
          </a>
          <a
            href="https://www.chusj.org/en/centre-recherche"
            target="_blank"
            rel="noreferrer"
            className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-navy">CHU Sainte-Justine</h4>
              <p className="text-sm text-teal font-semibold mt-1">{de ? "Studienzentrum, Université de Montréal" : "Host research centre, Université de Montréal"}</p>
            </div>
          </a>
        </div>
      </section>

    </>
  );
}

function WorkflowProgress({ de }: { de: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const steps = [
    {
      n: "01",
      t: de ? "Zielidentifikation & ASO-Design" : "Target identification & ASO design",
      d: de
        ? "Long-Read-Sequenzierung der RARB-Allele, Suche nach mutationsspezifischen Markern, in-silico-Bewertung möglicher Off-Target-Effekte."
        : "Long-read sequencing of the RARB alleles, identification of mutation-specific markers, in-silico screening for off-target effects.",
      done: true,
    },
    {
      n: "02",
      t: de ? "Wirksamkeit & Sicherheit im Zellmodell" : "Efficacy & safety in Simon's cell model",
      d: de
        ? "Über 110 ASOs wurden auf allelspezifischen Knockdown sowie auf Immuntoxizität, Zytotoxizität und Off-Target-Effekte getestet."
        : "More than 110 ASOs were screened for allele-specific knockdown as well as immunotoxicity, cytotoxicity and off-target effects.",
      done: true,
    },
    {
      n: "03",
      t: de ? "In-vivo-Sicherheitsstudien" : "In-vivo safety studies",
      d: de
        ? "Erste Studie: 6 ASO-Kandidaten auf akute Toxizität und Bioverteilung. Folgestudie: chronische Toxizität, Pharmakokinetik und Maximaldosis für die Klinik."
        : "First study: 6 ASO candidates assessed for acute toxicity and biodistribution. Follow-up: chronic toxicity, pharmacokinetics and maximum tolerated dose for the clinic.",
      done: false,
      ongoing: true,
    },
    {
      n: "04",
      t: de ? "Klinische Studie & erwartete Wirkung" : "Clinical trial & expected outcomes",
      d: de
        ? "Named-Patient-Use-Programm in Österreich, intrathekale Verabreichung. Erwartet: sichere Behandlung, verbesserte Hirnfunktion, weniger Bewegungsstörungen, bessere Kognition."
        : "Named-patient-use programme in Austria, intrathecal administration. Expected: safe treatment, improved brain function, reduced movement disorders, improved cognition.",
      done: false,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-teal/5 via-muted/30 to-background py-20 overflow-hidden">
      <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl" />
      <div ref={ref} className="container-wide relative">
        <SectionTitle eyebrow={de ? "Arbeitsablauf" : "Our path to treatment"} title={de ? "Vom Sequenzierergebnis zur klinischen Anwendung" : "From sequencing result to clinical use"} />

        <div className="relative hidden md:block mb-10">
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal to-amber"
              style={{
                width: inView ? "62.5%" : "0%",
                transition: "width 1800ms cubic-bezier(0.22, 1, 0.36, 1) 200ms",
              }}
            />
          </div>
          <div className="flex justify-between mt-3 text-xs uppercase tracking-wider font-semibold">
            <span className="text-teal">{de ? "2 von 4 abgeschlossen" : "2 of 4 completed"}</span>
            <span className="text-amber-deep">{de ? "Schritt 3 läuft" : "Step 3 in progress"}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const StatusIcon = s.done ? CheckCircle2 : Clock;
            return (
              <div
                key={s.n}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 700ms ease ${i * 150}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 150}ms`,
                }}
              >
                <div className="group relative bg-card border border-border rounded-2xl p-6 h-full hover:border-teal hover:scale-[1.05] hover:shadow-[var(--shadow-card)] hover:z-10 transition-all duration-300 ease-out overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 ${s.done ? "bg-teal" : s.ongoing ? "bg-amber" : "bg-border"} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-11 h-11 rounded-full bg-gradient-to-br from-teal to-amber text-white font-display font-bold flex items-center justify-center shadow-md group-hover:rotate-3 transition-transform">
                      {s.n}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold rounded-full px-2.5 py-1 ${s.done ? "bg-teal/10 text-teal" : "bg-amber/15 text-amber-deep"}`}>
                      <StatusIcon className="w-3 h-3" />
                      {s.ongoing && <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />}
                      {s.done ? (de ? "Abgeschlossen" : "Completed") : s.ongoing ? (de ? "Laufend" : "Ongoing") : (de ? "Geplant" : "Planned")}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-navy">{s.t}</h4>
                  <p className="text-foreground/75 mt-2 text-sm leading-relaxed">{s.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
