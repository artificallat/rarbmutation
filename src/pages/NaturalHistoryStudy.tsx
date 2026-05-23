import { FileText, Mail, ExternalLink, Presentation } from "lucide-react";
import { PageHero } from "./WhoWeAre";
import { Reveal } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";

export default function NaturalHistoryStudy({ lang }: { lang: Lang }) {
  const de = lang === "de";

  return (
    <>
      <PageHero
        eyebrow={de ? "Fachkreise" : "Professionals"}
        title="Natural History Study"
      />

      <section className="container-tight pb-8 pt-6">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <Reveal>
            <p>
              {de
                ? "In Zusammenarbeit mit A Cure for Sophia and Friends, A Cure for Sienna und Cure MCOP12 hat das CHU Sainte-Justine im Jahr 2024 eine "
                : "In collaboration with A Cure for Sophia and Friends, A Cure for Sienna and Cure MCOP12, CHU Sainte-Justine has launched a "}
              <strong>MCOPS12 (RARB) Natural History Study</strong>
              {de ? " gestartet." : " in 2024."}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <a
              href="https://ern-ithaca.eu/our-research-activities/calls-for-collaboration/rarb-natural-history-study/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:underline break-all"
            >
              <ExternalLink className="w-4 h-4 shrink-0" />
              ern-ithaca.eu/our-research-activities/calls-for-collaboration/rarb-natural-history-study/
            </a>
          </Reveal>

          <Reveal delay={120}>
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
      </section>

      <section className="container-tight pb-12">
        <Reveal>
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-navy mb-2">
                {de
                  ? "Behandeln Sie eine Patientin oder einen Patienten mit MCOPS12-Diagnose?"
                  : "Do you treat a patient diagnosed with MCOPS12?"}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {de
                  ? "Bitte kontaktieren Sie Valerie Chu, genetische Beraterin und Studienkoordinatorin, CHU Sainte-Justine"
                  : "Please contact Valerie Chu, genetic counsellor and study coordinator, CHU Sainte-Justine"}
              </p>
              <a
                href="mailto:valerie.chu.hsj@ssss.gouv.qc.ca"
                className="text-teal font-semibold hover:underline mt-1 inline-block break-all"
              >
                valerie.chu.hsj@ssss.gouv.qc.ca
              </a>
            </div>
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
              href="/documents/RARB-Natural-History-Study_V-Chu_2024.pdf"
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
