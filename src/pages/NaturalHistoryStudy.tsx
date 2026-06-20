import { LeadParagraph, SectionTitle } from "@/components/site/Bits";
import { PageHero, HeroAccent } from "@/pages/WhoWeAre";
import { Reveal } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";
import { FileText, Presentation, Mail } from "lucide-react";

export default function NaturalHistoryStudy({ lang }: { lang: Lang }) {
  const de = lang === "de";

  return (
    <>
      <PageHero
        eyebrow={de ? "FAMILIEN" : "FAMILIES"}
        title={<>Natural History <HeroAccent>Study</HeroAccent></>}
        sub={de
          ? "Eine internationale Studie am CHU Sainte-Justine zur Erfassung des natürlichen Verlaufs der MCOPS12 (RARB)-Erkrankung."
          : "An international study at CHU Sainte-Justine documenting the natural course of MCOPS12 (RARB) disease."}
      />

      <section className="container-tight pt-12 pb-8">
        <div className="space-y-6">
          <Reveal>
            <LeadParagraph>
              {de
                ? "In Zusammenarbeit mit A Cure for Sophia and Friends, A Cure for Sienna und Cure MCOP12 hat das CHU Sainte-Justine im Jahr 2024 eine MCOPS12 (RARB) Natural History Study gestartet."
                : "In collaboration with A Cure for Sophia and Friends, A Cure for Sienna and Cure MCOP12, CHU Sainte-Justine has launched a MCOPS12 (RARB) Natural History Study in 2024."}
            </LeadParagraph>
          </Reveal>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/85 pl-1">
            <Reveal delay={80}>
              <p>
                {de
                  ? "Die MCOPS12 Natural History Study erhebt Basisdaten sowie Beurteilungen der neurologischen Entwicklung und der motorischen Fähigkeiten. Teilnahmeberechtigt sind Personen jeden Alters aus allen Ländern, die pathogene oder wahrscheinlich pathogene Varianten im RARB-Gen tragen."
                  : "The MCOPS12 Natural History Study collects baseline data, assessments of neurodevelopment and motor skills. Individuals of any age, from any country, carrying pathogenic or likely pathogenic variants in the RARB gene are eligible to participate."}
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p>
                {de
                  ? "Die Studie umfasst jährliche Fragebögen für Teilnehmer:innen und Ärzt:innen sowie das Hochladen von Hirn-MRTs und Videos der Teilnehmer:innen. Im Jahr 2026 wurde die Studie um Biomarker-Forschung erweitert, einschließlich EEG sowie metabolomischer und proteomischer Analysen von Blutplasmaproben der Patient:innen."
                  : "The study entails annual participant and physician questionnaires, as well as uploading brain MRIs and participant videos. In 2026, the study was expanded to include biomarker research, comprising EEG as well as metabolomic and proteomic analyses of patient blood plasma samples."}
              </p>
            </Reveal>
          </div>
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


      <section className="container-tight pb-20">
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal>
            <a
              href="/documents/Flyer-RARB-MCOPS12-Natural-History-Study.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all flex items-start gap-4 h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-navy">
                  {de ? "Studien-Flyer" : "Study flyer"}
                </h4>
                <p className="text-sm text-foreground/75 mt-1">
                  Flyer – RARB (MCOPS12) Natural History Study.pdf
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <a
              href="/documents/RARB-Natural-History-Study-V-Chu-2024.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all flex items-start gap-4 h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                <Presentation className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-navy">
                  {de
                    ? "Präsentation – MCOPS12 Familien-Webinar 2024"
                    : "Presentation – 2024 MCOPS12 families webinar"}
                </h4>
                <p className="text-sm text-foreground/75 mt-1">
                  RARB Natural History Study_V. Chu_2024.pdf
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
