import { FlaskConical, Building2 } from "lucide-react";
import asoFigure1 from "@/assets/research/aso-figure-1.png";
import { PageHero, HeroAccent } from "@/pages/WhoWeAre";
import { Reveal } from "@/components/site/Reveal";
import { AsoWorkflowFigure } from "@/components/site/AsoWorkflowFigure";
import type { Lang } from "@/content/site";

export default function AsoTherapy({ lang }: { lang: Lang }) {
  const de = lang === "de";

  return (
    <>
      <PageHero
        eyebrow={de ? "Personalisierte Gentherapie" : "Personalized gene therapy"}
        title={<>N-of-1 <HeroAccent>ASO Therapy</HeroAccent></>}
        sub={de
          ? "Eine allelspezifische Antisense-Oligonukleotid-Therapie — entwickelt für Simon, als Blaupause für weitere MCOPS12-Patient:innen."
          : "An allele-specific antisense oligonucleotide therapy — developed for Simon, as a blueprint for other MCOPS12 patients."}
      />

      {/* What is an ASO */}
      <section className="container-tight pb-12 pt-4">
        <h2 className="font-display text-3xl font-bold text-navy mb-6">
          What is an Antisense Oligonucleotide (ASO) Therapy?
        </h2>
        <div className="space-y-5 text-foreground/85 leading-relaxed text-lg">
          <p>
            ASO therapeutics are short, synthetic strands of nucleotides - the building blocks of DNA and RNA - typically 15 to 25 units in length. They are part of the RNA therapeutics class and are designed to bind with high specificity to a single messenger RNA (mRNA), the temporary "recipe" a cell uses to produce a protein.
          </p>
          <p>
            By binding to their target mRNA, ASOs can either block the production of disease‑causing proteins or modify the mRNA in a way that restores normal protein function when it would otherwise be lost. This highly precise mechanism makes ASO therapeutics a powerful approach for treating a wide range of genetic disorders, including rare diseases (Lauffer et al. 2024{" "}
            <a className="text-teal font-semibold hover:underline break-all" href="https://www.nature.com/articles/s43856-023-00419-1" target="_blank" rel="noreferrer">
              https://www.nature.com/articles/s43856-023-00419-1
            </a>
            ). Since ASOs act on mRNA and not on DNA, their effects are reversible, meaning repeated dosing is required.
          </p>
        </div>
      </section>

      {/* How does an ASO work in MCOPS12 */}
      <section className="bg-muted/40 py-16">
        <div className="container-tight">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">
            How does an ASO therapy work in patients with MCOPS12?
          </h2>
          <div className="space-y-5 text-foreground/85 leading-relaxed text-lg">
            <p>
              In most patients with MCOPS12, one copy of the <em>RARB</em> gene is mutated while the other copy stays healthy (wild-type = carries no mutation). Both copies produce mRNA, but only the mutant mRNA leads to the production of a harmful RARB protein variant. An ASO can be designed to selectively recognize and bind to the mutant <em>RARB</em> mRNA.
            </p>
            <p>
              After entering the cell, the ASO binds to its target mRNA through Watson–Crick base pairing, forming a short RNA–DNA duplex (Figure 1, Panel 2). This duplex is detected by a natural enzyme called RNase H1, which cuts and degrades the mRNA. As a result, the mutant protein can no longer be produced. This mechanism is known as <strong>mRNA knockdown</strong>.
            </p>
            <p>
              For MCOPS12, the ASO must be "allele-specific" - meaning it selectively reduces the mutant <em>RARB</em> mRNA while leaving the healthy mRNA untouched. This selectivity is essential because the RARB protein plays a key role in normal brain development. Eliminating the healthy protein would lead to symptoms similar to those seen in MCOPS12 itself. (Ciancia et al. 2022{" "}
              <a className="text-teal font-semibold hover:underline break-all" href="https://www.sciencedirect.com/science/article/pii/S0301008222000326?via%3Dihub" target="_blank" rel="noreferrer">
                https://www.sciencedirect.com/science/article/pii/S0301008222000326?via%3Dihub
              </a>
              ).
            </p>
          </div>
        </div>
      </section>

      {/* Figure 1 */}
      <section className="container-tight py-12">
        <Reveal>
          <figure className="rounded-3xl overflow-hidden border border-border bg-card">
            <img src={asoFigure1} alt="Mechanism of antisense oligonucleotide (ASO) for allele-specific mRNA knockdown" className="w-full h-auto" loading="lazy" />
            <figcaption className="text-sm text-foreground/70 p-4 border-t border-border">
              <strong className="text-navy">Figure 1:</strong> Mechanism of antisense oligonucleotide (ASO) for allele-specific mRNA knockdown.
            </figcaption>
          </figure>
          <p className="text-sm text-foreground/70 mt-3">Personalized</p>
        </Reveal>
      </section>

      {/* Simon's personalized therapy */}
      <section className="container-tight pb-12">
        <h2 className="font-display text-3xl font-bold text-navy mb-6">
          Simon´s personalized allele-specific ASO therapy
        </h2>
        <div className="space-y-5 text-foreground/85 leading-relaxed text-lg">
          <p>
            The development of an allele‑specific ASO therapy is inherently challenging (Hauser at al. 2022{" "}
            <a className="text-teal font-semibold hover:underline break-all" href="https://www.mdpi.com/1999-4923/14/8/1708" target="_blank" rel="noreferrer">
              https://www.mdpi.com/1999-4923/14/8/1708
            </a>
            ). Simon carries the pathogenic <em>RARB</em> variant c.1159C&gt;T (p.R387C), which is present in approximately 30% of all MCOPS12 patients, and characterized as dominant-negative in vivo (Zinter et al. 2026, Link:{" "}
            <a className="text-teal font-semibold hover:underline break-all" href="https://www.biorxiv.org/content/10.64898/2026.02.20.706764v1" target="_blank" rel="noreferrer">
              https://www.biorxiv.org/content/10.64898/2026.02.20.706764v1
            </a>
            ). Based on computational analyses, the design of an ASO that selectively targets this specific mutation was not considered promising.
          </p>
          <p>
            Therefore, we performed advanced genetic analyses using <strong>long‑read sequencing</strong> to <strong>identify additional sequence variants on Simon's mutant <em>RARB</em> allele</strong> that could serve as more suitable ASO target sites. This approach revealed dozens of variants (SNPs, indels) that are exclusively present on the mutant allele and thus represent <strong>ideal targets for an allele‑specific ASO therapy</strong>.
          </p>
          <p>
            While these results are very encouraging, they also imply that the resulting ASO therapy is highly customized to Simon. Importantly, however, the ASO development workflow established here (Figure 2) provides a robust <strong>blueprint</strong> that can be applied to the development of personalized ASO therapies <strong>for other patients with MCOPS12</strong>.
          </p>
        </div>
      </section>

      {/* Figure 2 — Workflow */}
      <section className="container-wide py-12">
        <Reveal>
          <AsoWorkflowFigure lang={de ? "de" : "en"} />
        </Reveal>
      </section>

      {/* Partners */}
      <section className="container-tight pb-20">
        <div className="space-y-5 text-foreground/85 leading-relaxed text-lg mb-8">
          <p>
            Target identification, ASO design and efficacy screening was performed at RareLabs (a division of AlphaRose Therapeutics)
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <a href="https://hopeatrarelabs.com/" target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all overflow-hidden break-words">
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-3">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-navy">RareLabs (AlphaRose Therapeutics)</h4>
            <p className="text-sm text-teal font-semibold mt-3 break-all">https://hopeatrarelabs.com/</p>
          </a>

          <div className="bg-card border border-border rounded-2xl p-6 overflow-hidden break-words">
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-3">
              <Building2 className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-navy">Large pharma company (undisclosed)</h4>
            <p className="text-foreground/75 mt-2 text-base">
              Additional designs of ASOs and safety testing in Simon´s cell model was performed at a large pharma company (undisclosed).
            </p>
          </div>

          <a href="https://www.hongene.com/" target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-3">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-navy">Hongene Biotech</h4>
            <p className="text-foreground/75 mt-2 text-base">
              ASO drugs for in vivo safety studies were produced at Hongene Biotech.
            </p>
            <p className="text-sm text-teal font-semibold mt-3 break-all">https://www.hongene.com/</p>
          </a>
        </div>
      </section>
    </>
  );
}
