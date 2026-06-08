import { LeadParagraph } from "@/components/site/Bits";
import { PageHero, HeroAccent } from "@/pages/WhoWeAre";
import { Reveal } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";
import { FileText, Presentation } from "lucide-react";

export default function NaturalHistoryStudy({ lang }: { lang: Lang }) {
  const de = lang === "de";

  return (
    <>
      <PageHero
        eyebrow={de ? "Fachkreise" : "Clinicians"}
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
    </>
  );
}
