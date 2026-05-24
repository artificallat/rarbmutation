import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "./WhoWeAre";
import { SectionTitle } from "@/components/site/Bits";
import { Reveal, Counter } from "@/components/site/Reveal";
import sophiaLogo from "@/assets/partners/sophia.png";
import siennaLogo from "@/assets/partners/sienna.jpg";
import rainrareImg from "@/assets/research/rainrare-abstract.png";
import drugRepurposingImg from "@/assets/research/drug-repurposing-igbmc.png";
import type { Lang } from "@/content/site";

type TimelineItem = {
  period: string;
  title: string;
  short: React.ReactNode;
  details?: React.ReactNode;
};

const makeTimeline = (base: string): TimelineItem[] => [
  {
    period: "2019 – 2022",
    title: "RAinRARE — EU-funded research project (EJPRD Joint Translational Call 2018)",
    short: (
      <>
        The foundational work to decode the disease mechanism of MCOPS12. Generation and initial characterization of MCOPS12 mouse models. Establishing a patient derived neuronal cell model from induced pluripotent stem cells (iPSCs).
      </>
    ),
    details: (
      <div className="space-y-5">
        <p>
          <span className="font-semibold text-navy">Mehr Info durch Anklicken: </span>
          <a className="text-teal font-semibold hover:underline break-all" href="https://www.ejprarediseases.org/rainrare/" target="_blank" rel="noreferrer">
            https://www.ejprarediseases.org/rainrare/
          </a>
        </p>
        <div className="rounded-2xl overflow-hidden border border-border">
          <img src={rainrareImg} alt="RAinRARE — Joint Transnational Call 2018 abstract" className="w-full h-auto" loading="lazy" />
        </div>
      </div>
    ),
  },
  {
    period: "2022 – 2024",
    title: "Characterization of MCOPS12 mouse models & Drug Repurposing",
    short: (
      <>
        Comprehensive characterization and validation of four MCOPS12 mouse models (with different RARB mutation variants), including bioanalytical studies to dissect the disease mechanism.
      </>
    ),
    details: (
      <div className="space-y-5">
        <p>
          <strong>Drug Repurposing:</strong> the strategy of identifying new therapeutic uses for existing approved or investigational drugs beyond their original medical indication. Applying this approach, six drugs for neurological disorders (commercially available or in clinical trials) were assessed for improvement of neurological symptoms in MCOPS12 mice.
        </p>
        <p>
          Research was conducted at IGBMC (group Dr. Wojciech Krezel). A master student and a PhD student were co-financed by Cure MCOPS12.
        </p>
        <div>
          <p className="font-semibold text-navy">Results:</p>
          <p className="mt-2 font-semibold">Two publications:</p>
          <ul className="space-y-3 mt-2">
            <li>
              <p>Zinter et al. 2026: <em>Compromised striatal structure and function in mouse models of RARB-related disorder</em></p>
              <a className="text-teal font-semibold hover:underline break-all" href="https://www.biorxiv.org/content/10.64898/2026.02.20.706764v1" target="_blank" rel="noreferrer">
                https://www.biorxiv.org/content/10.64898/2026.02.20.706764v1
              </a>
            </li>
            <li>
              <p>Zinter et al. 2025: <em>Compromised retinoic acid receptor beta expression accelerates the onset of motor, cellular and molecular abnormalities in a mouse model of Huntington's disease</em></p>
              <a className="text-teal font-semibold hover:underline break-all" href="https://www.sciencedirect.com/science/article/pii/S0969996125001597?via%3Dihub" target="_blank" rel="noreferrer">
                https://www.sciencedirect.com/science/article/pii/S0969996125001597?via%3Dihub
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-navy">Potential drugs for treatment:</p>
          <p className="mt-2">Three drugs showed improvement in cognitive functions in MCOP12 mice. Drugs will be further evaluated for benefit in a patient cellular disease model.</p>
        </div>
      </div>
    ),
  },
  {
    period: "2023 – ongoing",
    title: "Development of Simon's personalized ASO therapy",
    short: (
      <>
        Our project of a lifetime. For more information please visit{" "}
        <Link to={`${base}/aso-therapy`} className="text-teal font-semibold hover:underline">Simon's ASO therapy</Link>.
      </>
    ),
  },
  {
    period: "2024 – 2026",
    title: "Lipidomics biomarker studies",
    short: (
      <>
        Assessment of dysfunctional brain lipid metabolism in two MCOPS12 mouse models. Results will provide guidance if brain lipid metabolism is affected in MCOPS12 patients.
        <br /><br />
        Research conducted at IGBMC (group Dr. Wojciech Krezel). PhD student co-financed by Cure MCOPS12 and A Cure For Sophia and Friends.
      </>
    ),
  },
  {
    period: "2024 – ongoing",
    title: "MCOPS12 (RARB) Natural History Study",
    short: (
      <>
        This important study tracks the symptoms (clinical features) of MCOPS12 patients over several years. It aims to improve understanding of how symptoms relate to specific RARB mutations and to establish a foundation for future clinical trials for MCOPS12.
      </>
    ),
    details: (
      <div className="space-y-4">
        <p>
          For more information, please visit{" "}
          <a className="text-teal font-semibold hover:underline break-all" href="https://ern-ithaca.eu/our-research-activities/calls-for-collaboration/rarb-natural-history-study/" target="_blank" rel="noreferrer">
            https://ern-ithaca.eu/our-research-activities/calls-for-collaboration/rarb-natural-history-study/
          </a>{" "}
          or <Link to={`${base}/natural-history-study`} className="text-teal font-semibold hover:underline">Natural History Study</Link>.
        </p>
        <p>
          Starting in 2026, the study will be expanded to include comprehensive biomarker analyses, such as EEG as well as proteomic and metabolomic biomarkers.
        </p>
        <p>
          The study is coordinated by CHU Sainte-Justine (Montréal, Canada) and co-financed by A Cure For Sienna, A Cure for Sophia and Friends, and Cure MCOPS12.
        </p>
      </div>
    ),
  },
  {
    period: "2024 – ongoing",
    title: "Drug Repurposing study using a patient cellular disease model",
    short: (
      <>
        Simon's iPSC derived neural stem cell model was applied to develop readouts (meaning detecting dysfunctions in Simon's cell model compared to a healthy control cell model). Two readouts could be established, and automated screening of ~10,000 drugs (commercially approved, in clinical trials, natural compounds) in Simon's cell model will start in summer 2026.
        <br /><br />
        The study is designed at RareLabs (AlphaRose Therapeutics) and conducted at NCATS. Study financed by A Cure For Sophia and Friends.
      </>
    ),
  },
  {
    period: "2026 – ongoing",
    title: "Investigating biomarkers and strategies for treatment of MCOPS12",
    short: (
      <>
        Research conducted at IGBMC (group Dr. Wojciech Krezel). PhD student co-financed by A Cure For Sophia and Friends.
      </>
    ),
  },
];

const sisters = [
  { name: "A Cure for Sophia and Friends", url: "https://www.acureforsophiaandfriends.com/", logo: sophiaLogo, founded: "2023", country: "USA" },
  { name: "A Cure for Sienna", url: "https://www.facebook.com/acureforsienna/", logo: siennaLogo, founded: "2022", country: "Australia" },
];

export default function FundedRDPrograms({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = lang === "de" ? "/de" : "";
  const timeline = makeTimeline(base);

  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Forschung & Wirkstoffentwicklung" : "Research"}
        title="Research and Drug Development"
        sub="In close collaboration with our sister non-profit organizations A Cure for Sophia and Friends in the United States (founded in 2023) and A Cure for Sienna in Australia (founded in 2022), we've fundraised 600,000 € (as of June 2026) and are supporting seven research and drug development programs."
      />

      {/* Stats */}
      <section className="container-tight pt-2 pb-10">
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: lang === "de" ? "Eingeworben" : "Fundraised", value: 600000, prefix: "€ " },
              { label: lang === "de" ? "Programme" : "Programs", value: 7 },
              { label: lang === "de" ? "Schwesterorganisationen" : "Sister organisations", value: 2 },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-5 sm:p-6 text-center hover:border-teal hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-navy">
                  <Counter to={s.value} prefix={s.prefix || ""} />
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Intro narrative */}
      <section className="container-tight pb-12 space-y-6 text-foreground/85 leading-relaxed text-lg">
        <Reveal>
          <p>
            In alignment with our scientific advisors we perform research studies to better understand the underlying disease mechanism and unravel this complex neurodevelopmental disorder. Based on this pivotal work we derived two pathways for a treatment:
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-border bg-card p-6 hover:border-teal hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <div className="w-10 h-10 rounded-full bg-teal/15 text-teal font-display font-extrabold flex items-center justify-center mb-3">1</div>
              <h3 className="font-display font-bold text-navy text-lg leading-snug">Drug repurposing studies</h3>
              <p className="text-foreground/80 mt-2 text-base">
                in mouse models and a patient iPSC derived cell model for treatment of the neurological symptoms of MCOPS12.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 hover:border-teal hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <div className="w-10 h-10 rounded-full bg-amber/20 text-amber font-display font-extrabold flex items-center justify-center mb-3">2</div>
              <h3 className="font-display font-bold text-navy text-lg leading-snug">RNA therapy (ASO)</h3>
              <p className="text-foreground/80 mt-2 text-base">
                A disease-modifying <strong>antisense oligonucleotide (ASO)</strong> to tackle the genetic root cause of MCOPS12 and improve neurological symptoms. To learn more, click here:{" "}
                <Link to={`${base}/aso-therapy`} className="text-teal font-semibold hover:underline">Simon's ASO therapy</Link>.
              </p>
            </div>
          </div>
        </Reveal>
      </section>


      {/* Timeline */}
      <section className="container-tight pb-24">
        <SectionTitle eyebrow={lang === "de" ? "Meilensteine" : "Milestones"} title="Research & Drug Development Milestones" />
        <p className="text-sm text-foreground/60 mb-6 -mt-4">
          {lang === "de" ? "Klicken Sie auf einen Eintrag für mehr Informationen." : "Click an entry for more information."}
        </p>
        <div className="relative border-l-2 border-teal/30 pl-6 space-y-6">
          {timeline.map((t, i) => {
            const isOpen = open === i;
            const hasDetails = !!t.details;
            return (
              <Reveal key={i} delay={i * 80}>
                <div className="relative">
                  <span className="absolute -left-[33px] top-3 w-4 h-4 rounded-full bg-teal ring-4 ring-teal/15" />
                  <button
                    type="button"
                    onClick={() => hasDetails && setOpen(isOpen ? null : i)}
                    className={`w-full text-left rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all duration-300 hover:border-teal hover:-translate-y-1 hover:shadow-xl ${hasDetails ? "cursor-pointer" : "cursor-default"}`}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold">{t.period}</p>
                    <h3 className="font-display text-xl font-bold text-navy mt-1 flex items-start gap-2">
                      <span className="flex-1">{t.title}</span>
                      {hasDetails && (
                        <span className="text-teal text-sm font-normal shrink-0 mt-1">{isOpen ? "▲" : "▼"}</span>
                      )}
                    </h3>
                    <p className="mt-2 text-foreground/80 leading-relaxed">{t.short}</p>
                    {hasDetails && isOpen && (
                      <div className="mt-5 pt-5 border-t border-border text-foreground/80 leading-relaxed">
                        {t.details}
                      </div>
                    )}
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
