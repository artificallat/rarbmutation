import { FileText, Mail, ExternalLink, Presentation, Download } from "lucide-react";
import { LeadParagraph, SectionTitle } from "@/components/site/Bits";
import { PageHero, HeroAccent } from "@/pages/WhoWeAre";
import { Reveal } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";
import flyerAsset from "@/assets/nhs-flyer.pdf.asset.json";
import flyerThumb from "@/assets/nhs-flyer-thumb.jpg.asset.json";

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


      <section className="container-tight pb-12">
        <Reveal>
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-[var(--shadow-card)]">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <SectionTitle
                  eyebrow={de ? "Für Fachkreise" : "For physicians"}
                  title={de ? "Behandeln Sie eine:n Patient:in mit MCOPS12?" : "Do you treat a patient diagnosed with MCOPS12?"}
                />
                <p className="text-foreground/85 leading-relaxed -mt-2">
                  {de
                    ? "Bitte kontaktieren Sie Valerie Chu, genetische Beraterin und Studienkoordinatorin am CHU Sainte-Justine."
                    : "Please contact Valerie Chu, genetic counsellor and study coordinator at CHU Sainte-Justine."}
                </p>
                <a
                  href="https://outlook.office.com/mail/deeplink/compose?to=valerie.chu.hsj@ssss.gouv.qc.ca"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal px-5 sm:px-6 py-3 font-semibold text-white hover:brightness-110 transition max-w-full break-all text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="break-all">valerie.chu.hsj@ssss.gouv.qc.ca</span>
                </a>
                <p className="text-sm text-foreground/70 mt-5">
                  {de ? "Klicken Sie auf den Flyer, um ihn zu öffnen:" : "Click the flyer to open it:"}
                </p>
              </div>

              <a
                href={flyerAsset.url}
                target="_blank"
                rel="noreferrer"
                className="group block shrink-0 mx-auto"
                aria-label={de ? "Studien-Flyer öffnen" : "Open study flyer"}
              >
                <div className="relative w-44 rounded-xl overflow-hidden border border-border shadow-lg group-hover:shadow-2xl group-hover:-translate-y-1 transition-all bg-white">
                  <img
                    src={flyerThumb.url}
                    alt={de ? "Vorschau des Studien-Flyers" : "Study flyer preview"}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-navy rounded-full p-3 shadow-lg">
                      <Download className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-teal font-semibold mt-2 uppercase tracking-wider">PDF</p>
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
