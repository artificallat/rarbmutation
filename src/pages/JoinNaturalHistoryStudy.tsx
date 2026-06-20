import { ClipboardList, Activity, Users, Mail, Download, Presentation } from "lucide-react";
import { SectionTitle, LeadParagraph } from "@/components/site/Bits";
import { PageHero, HeroAccent } from "@/pages/WhoWeAre";
import { Reveal } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";
import flyerAsset from "@/assets/nhs-flyer.pdf.asset.json";
import presentationAsset from "@/assets/nhs-presentation.pdf.asset.json";



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
        eyebrow={de ? "Familien" : "FAMILIES"}
        title={de
          ? <>Nimm an der Natural History <HeroAccent>Study</HeroAccent> teil</>
          : <>Join the Natural History <HeroAccent>Study</HeroAccent></>}
        sub={de
          ? "In Zusammenarbeit mit A Cure for Sophia and Friends, A Cure for Sienna und Cure MCOPS12 hat das CHU Sainte-Justine 2024 die MCOPS12 (RARB) Natural History Study gestartet."
          : "In collaboration with A Cure for Sophia and Friends, A Cure for Sienna and Cure MCOPS12, CHU Sainte-Justine launched the MCOPS12 (RARB) Natural History Study in 2024."}
      />

      <section className="container-tight pt-12 pb-12 space-y-6">
        <Reveal>
          <LeadParagraph>
            {de
              ? "Eine Natural History Study ist eine medizinische Studie, die Forscher:innen hilft zu verstehen, wie sich eine Erkrankung über die Zeit entwickelt und verändert. Ziel ist es, mehr darüber zu lernen, wie die Erkrankung Betroffene beeinflusst — als Grundlage für eine bessere Versorgung und zukünftige Therapien."
              : "A natural history study is a type of medical study that helps researchers understand how a disease develops and changes over time in a group of patients. Its purpose is to learn more about how the condition affects individuals, so that better care and treatments can be developed in the future."}
          </LeadParagraph>
        </Reveal>
        <div className="space-y-5 text-foreground/85 leading-relaxed text-lg pl-1">
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
              ? <>Die MCOPS12 Natural History Study erfasst Basisdaten sowie Beurteilungen der neurologischen Entwicklung und Motorik. Teilnehmen können Personen jeden Alters, aus jedem Land, die pathogene oder wahrscheinlich pathogene Varianten im <span className="italic">RARB</span>-Gen tragen.</>
              : <>The MCOPS12 Natural History Study collects baseline data and assessments of neurodevelopment and motor skills. Individuals of any age, from any country, carrying pathogenic or likely pathogenic variants in the <span className="italic">RARB</span> gene are eligible to participate.</>}
          </p>
          <p>
            {de
              ? "Die Studie umfasst jährliche Teilnehmer- und Arztfragebögen sowie das Hochladen von MRT-Aufnahmen des Gehirns und Patientenvideos. 2026 wurde die Studie um Biomarker-Forschung erweitert — darunter EEG sowie metabolomische und proteomische Analysen aus Blutplasmaproben."
              : "The study entails annual participant and physician questionnaires, as well as uploading brain MRIs and participant videos. In 2026, the study was expanded to include biomarker research, comprising EEG as well as metabolomic and proteomic analyses of patient blood plasma samples."}
          </p>
        </div>
      </section>



      <section className="container-wide pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={i * 120}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:-translate-y-1 hover:shadow-xl hover:border-teal transition-all duration-300 group overflow-hidden break-words">
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
            <SectionTitle eyebrow={de ? "INTERESSIERT?" : "FAMILIES"} title={de ? "Behandeln Sie eine:n Patient:in mit MCOPS12?" : "Interested?"} light />
            <p className="text-white/90 leading-relaxed -mt-2">
              {de
                ? "Bitte kontaktieren Sie Valerie Chu, genetische Beraterin und Studienkoordinatorin, CHU Sainte-Justine."
                : "Please contact Valerie Chu, genetic counsellor and study coordinator, CHU Sainte-Justine."}
            </p>
            <a
              href="https://outlook.office.com/mail/deeplink/compose?to=valerie.chu.hsj@ssss.gouv.qc.ca"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-5 sm:px-7 py-3 font-semibold text-navy hover:brightness-95 transition max-w-full break-all text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span className="break-all">valerie.chu.hsj@ssss.gouv.qc.ca</span>
            </a>
          </div>
        </Reveal>
      </section>

      <section className="container-wide pb-20">
        <SectionTitle
          eyebrow={de ? "Materialien" : "Resources"}
          title={de ? "Flyer & Webinar-Präsentation" : "Flyer & webinar presentation"}
        />
        <div className="grid sm:grid-cols-2 gap-6 -mt-2">
          <a
            href={flyerAsset.url}
            download
            target="_blank"
            rel="noreferrer"
            className="group bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all flex items-start gap-4 overflow-hidden break-words"
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
            href={presentationAsset.url}
            download
            target="_blank"
            rel="noreferrer"
            className="group bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all flex items-start gap-4 overflow-hidden break-words"
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


    </>
  );
}

