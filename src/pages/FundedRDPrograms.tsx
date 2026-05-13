import { PageHero } from "./WhoWeAre";
import { SectionTitle } from "@/components/site/Bits";
import sophiaLogo from "@/assets/partners/sophia.png";
import siennaLogo from "@/assets/partners/sienna.jpg";
import type { Lang } from "@/content/site";

const timeline = [
  {
    period: "2019–2022",
    title: "RAinRARE — EU-funded research project (EJPRD)",
    body: (
      <>
        Foundational work to decode MCOPS12 disease mechanism. Generation and characterization of MCOPS12 mouse models. Establishing a patient-derived neuronal cell model.{" "}
        <a className="text-teal font-semibold hover:underline" href="https://www.ejprarediseases.org/rainrare/" target="_blank" rel="noreferrer">More info</a>
      </>
    ),
  },
  {
    period: "2022–2024",
    title: "Comprehensive characterization & drug repurposing",
    body: (
      <>
        Comprehensive characterization of four MCOPS12 mouse models. Drug repurposing: evaluation of five drugs for neurological disorders in MCOPS12 mice. Research at IGBMC (Dr. Wojciech Krezel). Resulted in two publications:{" "}
        <a className="text-teal font-semibold hover:underline break-all" href="https://www.biorxiv.org/content/10.64898/2026.02.20.706764v1" target="_blank" rel="noreferrer">bioRxiv</a>{" "}and{" "}
        <a className="text-teal font-semibold hover:underline break-all" href="https://www.sciencedirect.com/science/article/pii/S0969996125001597" target="_blank" rel="noreferrer">ScienceDirect</a>
      </>
    ),
  },
  {
    period: "2024–2026",
    title: "Lipidomics biomarker studies",
    body: "Lipidomics biomarker studies in two MCOPS12 mouse models. Research at IGBMC (Dr. Wojciech Krezel).",
  },
  {
    period: "2024–ongoing",
    title: "MCOPS12 Natural History Study at CHU Sainte-Justine",
    body: (
      <>
        <a className="text-teal font-semibold hover:underline break-all" href="https://ern-ithaca.eu/our-research-activities/calls-for-collaboration/rarb-natural-history-study/" target="_blank" rel="noreferrer">More info</a>
      </>
    ),
  },
  {
    period: "2024–ongoing",
    title: "Drug repurposing in Simon's iPSC-derived neural stem cell model",
    body: "Automated screening of ~10,000 drugs. Designed by RareLabs, conducted at NCATS.",
  },
  {
    period: "2026–ongoing",
    title: "PhD program",
    body: "PhD program (Aseel Mahdi).",
  },
];

const sisters = [
  { name: "A Cure for Sophia and Friends", url: "https://www.acureforsophiaandfriends.com/", logo: sophiaLogo },
  { name: "A Cure for Sienna", url: "https://www.facebook.com/acureforsienna/", logo: siennaLogo },
];

export default function FundedRDPrograms({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Erfolge" : "Achievements"}
        title="Funded Research & Drug Development Programs"
        sub="In close collaboration with our sister organizations A Cure for Sophia and Friends (USA, founded 2023) and A Cure for Sienna (Australia, founded 2022), we have fundraised 550,000 € as of May 2026 and are supporting seven research and drug development programs."
      />
      <section className="container-wide py-12">
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
        <div className="relative border-l-2 border-teal/30 pl-6 space-y-8">
          {timeline.map((t, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-teal" />
              <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold">{t.period}</p>
              <h3 className="font-display text-xl font-bold text-navy mt-1">{t.title}</h3>
              <p className="mt-2 text-foreground/80 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
