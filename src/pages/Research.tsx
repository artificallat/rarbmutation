import { SectionTitle } from "@/components/site/Bits";
import type { Lang } from "@/content/site";
import { Stethoscope, Mouse, FlaskConical, Sparkles, Dna } from "lucide-react";
import type { ReactNode } from "react";

type Pillar = {
  number: string;
  title: string;
  icon: typeof Stethoscope;
  groups: { heading: string; items: ReactNode[] }[];
  partners: string[];
  accent: string;
};

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Clinical picture",
    icon: Stethoscope,
    groups: [
      {
        heading: "Natural History study",
        items: [
          "Neurological exam & video assessment",
          "Neurodevelopmental questionnaire & Vineland interview",
          "Neurological questionnaire",
          "Custom RARB questionnaire",
          "Brain MRI assessment",
        ],
      },
      {
        heading: "Biomarkers",
        items: [
          "EEGs",
          "Metabolomics & proteomics studies of blood samples",
        ],
      },
    ],
    partners: ["CHU Sainte-Justine"],
    accent: "from-teal/15 to-teal/5",
  },
  {
    number: "02",
    title: "MCOPS12 (Rarb) mouse models",
    icon: Mouse,
    groups: [
      {
        heading: "Four different mouse models",
        items: [
          <><em>Rarb</em><sup>-/-</sup></>,
          <><em>Rarb</em><sup>R387C/+</sup></>,
          <><em>Rarb</em><sup>L402P/+</sup></>,
          <><em>Rarb</em><sup>+/-</sup></>,
        ],
      },
      {
        heading: "Studies",
        items: [
          "Behavioral analyses of movement & cognition",
          "Anatomical studies",
          "Transcriptomics of striatum samples",
          "Lipidomics of brain and blood samples",
          "Metabolomics & proteomics biomarker studies of blood samples",
        ],
      },
    ],
    partners: ["CHU Sainte-Justine", "IGBMC"],
    accent: "from-amber/15 to-amber/5",
  },
  {
    number: "03",
    title: "Patient iPSC-derived neuronal cell models",
    icon: FlaskConical,
    groups: [
      {
        heading: "Cell model development",
        items: [
          "Generation of iPSCs from a patient with a p.R387C mutation",
          "Differentiation to neural stem cells",
          "Developing protocols for medium spiny neuron differentiation",
        ],
      },
      {
        heading: "Functional assays",
        items: [
          "Characterization of cell model",
          "Development of assays for mitochondrial function & low-density lipoprotein (LDL) function",
        ],
      },
    ],
    partners: ["RareLabs", "Alpha Rose", "Uni Basel"],
    accent: "from-navy/10 to-navy/5",
  },
];

const findings = [
  {
    title: "Behavioral phenotype",
    body: (
      <>
        Behavioral analyses of <em>Rarb</em><sup>R387C/+</sup> and <em>Rarb</em><sup>L402P/+</sup> mice exhibit{" "}
        <strong className="text-navy">progressive motor deficits, hyperactivity and cognitive impairment</strong>,
        closely recapitulating the clinical phenotypes observed in MCOPS12 patients carrying these variants.
      </>
    ),
  },
  {
    title: "Selective D2R MSN loss",
    body: (
      <>
        At the cellular level, the striatum shows a{" "}
        <strong className="text-navy">selective loss of D2R medium spiny neurons (MSNs)</strong>, while D1R MSN
        populations remain preserved.
      </>
    ),
  },
  {
    title: "Dominant-negative transcriptomic signature",
    body: (
      <>
        Transcriptomic analysis in the striatum reveals that both models predominantly downregulate putative{" "}
        <em>RARB</em> target genes and display a transcriptional signature more pronounced than that of{" "}
        <em>Rarb</em> knockout (<em>Rarb</em><sup>-/-</sup>) mice, supporting a{" "}
        <strong className="text-navy">dominant-negative mechanism in vivo</strong>. Notably, both the
        transcriptional alterations and the selective vulnerability of D2R MSNs overlap with findings in{" "}
        <strong className="text-navy">Huntington's disease</strong> mouse models, suggesting shared pathways of
        striatal dysfunction between Huntington's disease and MCOPS12.
      </>
    ),
  },
  {
    title: "Rarb⁺ᐟ⁻ → ASO therapy rationale",
    body: (
      <>
        In contrast, <em>Rarb</em><sup>+/-</sup> mice show no detectable phenotypes, consistent with observations in
        individuals carrying only one functional <em>RARB</em> allele. This supports the concept that{" "}
        <strong className="text-navy">allele-specific knockdown of mutant RARB — such as via an ASO therapy —
        represents a promising therapeutic strategy</strong> for MCOPS12.
      </>
    ),
  },
];

export default function Research({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      {/* Hero — light themed */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/40 via-background to-background">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-teal/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-amber/15 blur-3xl" />

        <div className="container-wide relative pt-20 pb-20 md:pt-24 md:pb-24">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-teal/30 px-4 py-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-teal">
                {de ? "Forschung" : "Research"}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance text-navy">
              {de ? "Die Wissenschaft hinter " : "The science behind "}
              <span className="bg-gradient-to-r from-amber to-amber/70 bg-clip-text text-transparent">MCOPS12</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/75 max-w-2xl leading-relaxed">
              {de
                ? "Von RARB-Biologie über patientenspezifische Mausmodelle bis hin zu iPSC-Neuronen — unsere drei Forschungssäulen treiben MCOPS12 voran."
                : "From RARB biology to patient-specific mouse models and iPSC-derived neurons — our three research pillars are advancing MCOPS12 science."}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["RARB gene", "Striatum", "Mouse models", "iPSC neurons"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-navy">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-tight py-16 space-y-20">
        {/* Section 1 — RARB biology */}
        <article className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8 space-y-5 text-lg leading-relaxed text-foreground/85">
            <SectionTitle eyebrow={de ? "Grundlagen" : "Background"} title="Overview of RARB biology" />
            <p>
              <strong className="text-navy">Retinoic acid receptor beta (RARB)</strong> is a transcription factor
              encoded by the <em>RARB</em> gene. It is widely expressed throughout the human body, with
              particularly high levels in the brain and eye (
              <a href="https://www.proteinatlas.org/ENSG00000077092-RARB" target="_blank" rel="noreferrer" className="text-teal underline">
                The Human Protein Atlas – RARB
              </a>
              ). RARB forms heterodimer complexes with{" "}
              <strong className="text-navy">retinoid X receptors (RXRs)</strong> and becomes activated upon binding
              to <strong className="text-navy">retinoic acid</strong>, the biologically active form of{" "}
              <strong className="text-navy">vitamin A</strong>. Following ligand binding, the RARB–RXR complex
              interacts with <strong className="text-navy">retinoic acid response elements (RAREs)</strong>{" "}
              contained in target genes to modulate their transcription with the help of coregulators (
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0098299714000788?via%3Dihub" target="_blank" rel="noreferrer" className="text-teal underline">
                di Masi et al. 2015
              </a>
              ).
            </p>
            <p>
              Tight regulation of the retinoic acid pathway is critical for the development of multiple organs in
              both humans and animals, with particularly important roles in{" "}
              <strong className="text-navy">eye development</strong> and formation of{" "}
              <strong className="text-navy">striatal projection systems</strong> in the brain (
              <a className="text-teal underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6605468/" target="_blank" rel="noreferrer">
                Rataj-Baniowska et al., 2015
              </a>
              ).
            </p>
          </div>
          <aside className="md:col-span-4">
            <div className="sticky top-28 rounded-2xl bg-gradient-to-br from-teal/10 to-teal/5 border border-teal/20 p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal text-white flex items-center justify-center">
                <Dna className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
                {de ? "Kernkonzept" : "Key concept"}
              </p>
              <p className="font-display text-lg font-bold text-navy leading-snug">
                RARB is a vitamin-A-activated transcription factor critical for the developing eye and striatum.
              </p>
            </div>
          </aside>
        </article>

        {/* Section 2 — Genetics & pathophysiology */}
        <article className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <SectionTitle eyebrow={de ? "Krankheitsmechanismus" : "Disease mechanism"} title="Genetics and pathophysiology of MCOPS12" />
          <p>
            Pathogenic dominant mutations in the <em>RARB</em> gene cause syndromic microphthalmia 12 (
            <strong className="text-navy">MCOPS12</strong>), also referred to as{" "}
            <strong className="text-navy"><em>RARB</em>-related disorder (RARB-RD)</strong>. The condition is
            characterized by <strong className="text-navy">developmental eye anomalies</strong>,{" "}
            <strong className="text-navy">hypotonia</strong>, and{" "}
            <strong className="text-navy">early-onset progressive movement disorders</strong> (dystonia and/or
            spasticity).
          </p>
          <p>
            Several dozen pathogenic variants are described in literature, with the recurrent{" "}
            <strong className="text-navy">p.R387C</strong> variant accounting for{" "}
            <strong className="text-navy">~30% of cases</strong>. In vitro transfection studies classified these
            variants as either <strong className="text-navy">gain-of-function (GOF)</strong>, increasing retinoic
            acid-induced transcriptional activity, or <strong className="text-navy">loss-of-function (LOF)</strong>,
            exhibiting <strong className="text-navy">dominant-negative effects</strong> (
            <a href="https://www.gimjournal.org/article/S1098-3600(23)00869-9/fulltext" target="_blank" rel="noreferrer" className="text-teal underline">
              Caron et al. 2023
            </a>
            ).
          </p>
          <p>
            <strong className="text-navy">Movement disorders</strong> such as dystonia are generally thought to
            arise from <strong className="text-navy">dysfunction within the striatum</strong>, a key component of
            the basal ganglia involved in motor control, decision-making, and reward processing. The striatum is
            composed predominantly of <strong className="text-navy">medium spiny neurons (MSNs)</strong>, which
            account for more than 90% of its neuronal population and are divided into two main subtypes based on
            dopamine receptor expression: <strong className="text-navy">D1 receptor–expressing (D1R)</strong> and{" "}
            <strong className="text-navy">D2 receptor–expressing (D2R)</strong> neurons.
          </p>
          <p>
            RARB is highly expressed in the striatum, where it plays a critical role both in the development of D1R
            MSNs during embryogenesis and in neuroprotection of D2R MSNs in adulthood (
            <a href="https://www.sciencedirect.com/science/article/pii/S0301008222000326?via%3Dihub" target="_blank" rel="noreferrer" className="text-teal underline">
              Ciancia et al. 2022
            </a>
            ).
          </p>

          <div className="pt-4">
            <p className="text-foreground/85">
              Generation and comprehensive analysis of four patient-specific <em>Rarb</em> mouse models yielded
              several key findings (
              <a href="https://www.biorxiv.org/content/10.64898/2026.02.20.706764v1" target="_blank" rel="noreferrer" className="text-teal underline">
                Zinter et al. 2026
              </a>
              ):
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Rarb⁻ᐟ⁻", "Rarb R387C/+", "Rarb L402P/+", "Rarb⁺ᐟ⁻"].map((m) => (
                <span key={m} className="inline-flex items-center rounded-full bg-navy text-white px-3 py-1 text-xs font-semibold font-mono">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 pt-4">
            {findings.map((f, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 hover:border-teal/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-teal/10 text-teal font-display font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-display text-base font-bold text-navy">{f.title}</h4>
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Section 3 — Three research pillars */}
        <article className="space-y-8">
          <SectionTitle eyebrow={de ? "Strategie" : "Strategy"} title="Three research pillars for MCOPS12" />
          <p className="text-lg leading-relaxed text-foreground/85">
            In close collaboration with our <strong className="text-navy">scientific advisors</strong> and sister
            nonprofit organizations — <strong className="text-navy">A Cure for Sophia and Friends</strong> and{" "}
            <strong className="text-navy">A Cure for Sienna</strong> — we have established{" "}
            <strong className="text-navy">three key research pillars</strong> aimed at advancing our understanding
            of disease mechanisms and defining <strong className="text-navy">outcome measures and biomarkers</strong>{" "}
            for future clinical trials.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.number} className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  {/* Header band */}
                  <div className="bg-gradient-to-br from-navy to-navy-deep text-white px-6 py-5 min-h-[7rem] md:min-h-[7.5rem] lg:min-h-[8rem] flex flex-col justify-start">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-amber font-semibold">
                      {de ? "Säule" : "Pillar"} {p.number}
                    </p>
                    <h3 className="font-display text-xl font-bold mt-1 leading-snug">{p.title}</h3>
                  </div>

                  {/* Icon + body */}
                  <div className={`flex-1 px-6 py-6 space-y-5 bg-gradient-to-b ${p.accent}`}>
                    <div className="w-16 h-16 rounded-2xl bg-amber/90 text-navy flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8" />
                    </div>
                    {p.groups.map((g) => (
                      <div key={g.heading} className="space-y-2">
                        <h4 className="font-display text-sm font-bold text-navy uppercase tracking-wide">
                          {g.heading}
                        </h4>
                        <ul className="space-y-1.5">
                          {g.items.map((it, idx) => (
                            <li key={idx} className="flex gap-2 text-sm text-foreground/80 leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Partners footer */}
                  <div className="px-6 py-4 border-t border-border bg-white/60">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-semibold mb-2">
                      {de ? "Partner" : "Partners"}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.partners.map((partner) => (
                        <span key={partner} className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-navy">
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-muted/40 px-5 py-4 text-sm text-foreground/75">
            <BookOpen className="w-5 h-5 text-teal shrink-0" />
            <span>
              {de
                ? "Möchtet ihr tiefer einsteigen? Kontaktiert uns für die Foliendetails der drei Forschungssäulen."
                : "Want to go deeper? Reach out for the full slide deck on the three research pillars."}
            </span>
          </div>
        </article>
      </section>
    </>
  );
}
