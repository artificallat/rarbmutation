import { Placeholder, SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import labImage from "@/assets/research-lab.jpg";

const labs = [
  { n: "Michaud Lab", inst: "CHU Sainte-Justine, Université de Montréal", lead: "Jacques Michaud, MD PhD", focus: { en: "Clinical patient data, mouse analysis", de: "Klinische Patientendaten, Maus-Analyse" } },
  { n: "Krezel Lab", inst: "IGBMC Illkirch, France", lead: "Wojciech Krezel, PhD", focus: { en: "Mouse striatum analysis", de: "Analyse des Striatums (Maus)" } },
  { n: "Taylor Lab", inst: "University of Basel", lead: "Verdon Taylor, PhD", focus: { en: "iPSC-derived striatal neurons", de: "iPSC-abgeleitete Striatum-Neuronen" } },
  { n: "Poch Lab", inst: "CNRS Strasbourg", lead: "Olivier Poch, PhD", focus: { en: "FAIRification, biomarker identification", de: "FAIRifizierung, Biomarker-Identifikation" } },
];

export default function Research({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero eyebrow={de ? "Forschung" : "Research"} title={de ? "Unser Weg zur Therapie" : "Our Path to Treatment"}
        sub={de ? "Wir verfolgen zwei komplementäre Strategien, um MCOPS12-Patient:innen schneller zu helfen." : "We pursue two complementary strategies to bring relief to MCOPS12 patients faster."} />

      <section className="container-wide pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">{de ? "Strategie 1" : "Path 1"}</p>
            <h3 className="font-display text-2xl font-bold text-navy mt-2">{de ? "Wirkstoff-Repurposing" : "Drug Repurposing"}</h3>
            <p className="text-foreground/80 mt-4 leading-relaxed">
              {de
                ? "Sechs kommerziell verfügbare oder in klinischer Prüfung befindliche Wirkstoffe für andere neurologische Erkrankungen werden in einem MCOPS12-Mausmodell getestet – mit dem Ziel, Hypotonie, Dystonie und kognitive Defizite zu behandeln."
                : "Six commercially available drugs or drugs in clinical trials for other neurological diseases are being tested in a MCOPS12 mouse model to find treatments for hypotonia, dystonia, and cognitive impairments."}
            </p>
          </div>
          <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold">{de ? "Strategie 2" : "Path 2"}</p>
            <h3 className="font-display text-2xl font-bold mt-2">{de ? "RNA-Therapeutika (ASO/siRNA)" : "RNA Therapeutics (ASO/siRNA)"}</h3>
            <p className="text-white/85 mt-4 leading-relaxed">
              {de
                ? "Wir entwickeln eine Antisense-Oligonukleotid (ASO) Therapie, die die mutierte RARB-mRNA stilllegt – das defekte RARβ-Protein wird unterdrückt, die gesunde Genkopie bleibt aktiv. Reversibel und allelspezifisch."
                : "We are developing an antisense oligonucleotide (ASO) therapy to silence the mutated RARB mRNA, suppressing production of the dysfunctional RARβ protein while preserving the healthy copy. This approach is reversible and allele-specific."}
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-3xl overflow-hidden border border-border">
          <img
            src={labImage}
            alt={de ? "Forschungslabor – Wirkstoffentwicklung für MCOPS12" : "Research laboratory – drug development for MCOPS12"}
            className="w-full h-auto object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionTitle eyebrow={de ? "Konsortium" : "Consortium"} title={de ? "Unsere akademischen Forschungspartner" : "Our Research Consortium"} />
          <div className="grid sm:grid-cols-2 gap-6">
            {labs.map(l => (
              <div key={l.n} className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-display text-xl font-bold text-navy">{l.n}</h4>
                <p className="text-sm text-teal font-semibold mt-1">{l.inst}</p>
                <p className="text-sm text-foreground/70 mt-2">{l.lead}</p>
                <p className="text-sm text-foreground/85 mt-3"><span className="font-semibold text-navy">{de ? "Schwerpunkt: " : "Focus: "}</span>{l.focus[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

