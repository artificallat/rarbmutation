import { useState } from "react";
import { PageHero } from "./WhoWeAre";
import { SectionTitle } from "@/components/site/Bits";
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

const timeline: TimelineItem[] = [
  {
    period: "2019–2022",
    title: "RAinRARE — EU-funded research project (EJPRD JTC 2018)",
    short: (
      <>
        Foundational work to decode the disease mechanism of MCOPS12. Generation and characterization of MCOPS12 mouse models. Establishing a patient-derived neuronal cell model.
      </>
    ),
    details: (
      <div className="space-y-5">
        <p>
          More info:{" "}
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
    period: "2022–2024",
    title: "Comprehensive characterization & drug repurposing",
    short: (
      <>
        Comprehensive characterization of four MCOPS12 mouse models (with different RARB mutation variants). Drug Repurposing: evaluation of five drugs for neurological disorders (commercially available or in clinical trials) for improvement of neurological symptoms in MCOPS12 mice. Research conducted at IGBMC (group Dr. Wojciech Krezel). Master student and PhD student co-financed by Cure MCOPS12.
      </>
    ),
    details: (
      <div className="space-y-5">
        <div className="rounded-2xl overflow-hidden border border-border">
          <img src={drugRepurposingImg} alt="Drug Development: drug repurposing programs I — IGBMC" className="w-full h-auto" loading="lazy" />
        </div>
        <p>
          Resulted in two publications:
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>
            <a className="text-teal font-semibold hover:underline break-all" href="https://www.biorxiv.org/content/10.64898/2026.02.20.706764v1" target="_blank" rel="noreferrer">
              https://www.biorxiv.org/content/10.64898/2026.02.20.706764v1
            </a>
          </li>
          <li>
            <a className="text-teal font-semibold hover:underline break-all" href="https://www.sciencedirect.com/science/article/pii/S0969996125001597?via%3Dihub" target="_blank" rel="noreferrer">
              https://www.sciencedirect.com/science/article/pii/S0969996125001597
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    period: "2024–2026",
    title: "Lipidomics biomarker studies",
    short: "Performing lipidomics biomarker studies in two MCOPS12 mouse models. Research conducted at IGBMC (group Dr. Wojciech Krezel). PhD student co-financed by Cure MCOPS12 and A Cure for Sophia and Friends.",
  },
  {
    period: "2024–ongoing",
    title: "MCOPS12 (RARB) Natural History Study",
    short: (
      <>
        The study is conducted at CHU Sainte-Justine (Jacques Michaud and Valerie Chu). Co-financed by A Cure for Sienna, A Cure for Sophia and Friends, and Cure MCOPS12. As of 2026, the study will be extended by comprehensive biomarker analyses: EEG, proteomic biomarkers, metabolomic biomarkers.
      </>
    ),
    details: (
      <p>
        More info:{" "}
        <a className="text-teal font-semibold hover:underline break-all" href="https://ern-ithaca.eu/our-research-activities/calls-for-collaboration/rarb-natural-history-study/" target="_blank" rel="noreferrer">
          https://ern-ithaca.eu/our-research-activities/calls-for-collaboration/rarb-natural-history-study/
        </a>
      </p>
    ),
  },
  {
    period: "2024–ongoing",
    title: "Drug repurposing in Simon's iPSC-derived neural stem cell model",
    short: "Establishing readouts (detecting dysfunctions in Simon's cell model compared to a healthy control cell model). Upon availability of a readout, automated screening of ~10,000 drugs (commercially approved, in clinical trials, natural compounds) in the cell model. Designed at RareLabs (AlphaRose Therapeutics) and conducted at NCATS. Study financed by A Cure for Sophia and Friends.",
  },
  {
    period: "2026–ongoing",
    title: "PhD program",
    short: "Aseel Mahdi, PhD.",
  },
];

const sisters = [
  { name: "A Cure for Sophia and Friends", url: "https://www.acureforsophiaandfriends.com/", logo: sophiaLogo },
  { name: "A Cure for Sienna", url: "https://www.facebook.com/acureforsienna/", logo: siennaLogo },
];

export default function FundedRDPrograms({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Erfolge" : "Achievements"}
        title="Research and Drug Development"
        sub="In close collaboration with our sister non-profit organizations A Cure for Sophia and Friends in the United States (founded in 2023) and A Cure for Sienna in Australia (founded in 2022), we have fundraised 550,000 € (as of May 2026) and are supporting seven research and drug development programs."
      />

      <section className="container-tight pt-4 pb-10 space-y-5 text-foreground/85 leading-relaxed text-lg">
        <p>
          In alignment with our scientific advisors we perform research studies to better understand the underlying disease mechanism and unravel this complex neurodevelopmental disorder. Based on this pivotal work we derived two pathways for a treatment:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Drug repurposing studies</strong> in mouse models and a patient iPSC-derived cell model for treatment of the neurological symptoms of MCOPS12.
          </li>
          <li>
            A disease-modifying <strong>RNA therapy (antisense oligonucleotide, ASO)</strong> to tackle the genetic root cause of MCOPS12 and improve neurological symptoms.{" "}
            <a className="text-teal font-semibold hover:underline" href="/aso-therapy">Learn more: Simon's ASO therapy</a>.
          </li>
        </ol>
      </section>

      <section className="container-wide py-8">
        <div className="grid sm:grid-cols-2 gap-6">
          {sisters.map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
              className="bg-card rounded-2xl border border-border p-6 flex items-center gap-5 hover:border-teal hover:shadow-[var(--shadow-card)] transition">
              <img src={s.logo} alt={s.name} className="w-20 h-20 object-contain shrink-0" />
              <div>
                <h4 className="font-display text-lg font-bold text-navy">{s.name}</h4>
                <p className="text-sm text-teal font-semibold mt-1 break-all">{s.url}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="container-tight pb-20">
        <SectionTitle eyebrow={lang === "de" ? "Zeitleiste" : "Timeline"} title="Our Research Timeline" />
        <p className="text-sm text-foreground/60 mb-6 -mt-4">{lang === "de" ? "Klicken Sie auf einen Eintrag für mehr Informationen." : "Click an entry for more information."}</p>
        <div className="relative border-l-2 border-teal/30 pl-6 space-y-6">
          {timeline.map((t, i) => {
            const isOpen = open === i;
            const hasDetails = !!t.details;
            return (
              <div key={i} className="relative">
                <span className="absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-teal" />
                <button
                  type="button"
                  onClick={() => hasDetails && setOpen(isOpen ? null : i)}
                  className={`w-full text-left rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-teal hover:-translate-y-1 hover:shadow-xl ${hasDetails ? "cursor-pointer" : "cursor-default"}`}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold">{t.period}</p>
                  <h3 className="font-display text-xl font-bold text-navy mt-1 flex items-center gap-2">
                    {t.title}
                    {hasDetails && (
                      <span className="text-teal text-sm font-normal">{isOpen ? "▲" : "▼"}</span>
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
            );
          })}
        </div>
      </section>
    </>
  );
}
