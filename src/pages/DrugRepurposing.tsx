import { PageHero } from "./WhoWeAre";
import type { Lang } from "@/content/site";

export default function DrugRepurposing({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Fachkreise" : "Professionals"}
        title="Drug Repurposing"
        sub="Drug repurposing is the process of identifying new therapeutic uses for already approved or clinically tested drugs. For ultra-rare diseases like MCOPS12, this approach is especially powerful — the safety profiles of these drugs are already known, which dramatically shortens the path to treatment."
      />
      <section className="container-tight pb-20 space-y-6">
        <p className="text-foreground/80 leading-relaxed text-lg">We are pursuing two drug repurposing programs:</p>
        <div className="bg-card rounded-2xl border border-border p-7">
          <h3 className="font-display text-2xl font-bold text-navy">1. Mouse model studies (IGBMC, France)</h3>
          <p className="mt-3 text-foreground/80 leading-relaxed">
            Five drugs approved or in clinical trials for other neurological diseases are being evaluated in MCOPS12 mouse models for improvement of hypotonia, dystonia, and cognitive impairment. Research conducted at IGBMC by Dr. Wojciech Krezel.
          </p>
        </div>
        <div className="bg-card rounded-2xl border border-border p-7">
          <h3 className="font-display text-2xl font-bold text-navy">2. iPSC-derived cell model screening (RareLabs / NCATS)</h3>
          <p className="mt-3 text-foreground/80 leading-relaxed">
            A drug repurposing study in Simon's patient-derived neural stem cell model. Upon establishing readouts, automated screening of approximately 10,000 compounds (approved drugs, drugs in clinical trials, natural compounds) will be performed. Designed by RareLabs (AlphaRose Therapeutics), conducted at NCATS. Financed by A Cure for Sophia and Friends.
          </p>
        </div>
      </section>
    </>
  );
}
