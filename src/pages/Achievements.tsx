import { FlaskConical, Building2 } from "lucide-react";
import asoFigure1 from "@/assets/research/aso-figure-1.png";
import { PageHero, HeroAccent } from "@/pages/WhoWeAre";
import { Reveal } from "@/components/site/Reveal";
import { AsoWorkflowFigure } from "@/components/site/AsoWorkflowFigure";
import type { Lang } from "@/content/site";

export default function Achievements({ lang }: { lang: Lang }) {
  const de = lang === "de";

  return (
    <>
      <PageHero
        eyebrow={de ? "Sonntag, 19. April 2026 · 11:30" : "Sunday, 19 April 2026 · 11:30"}
        title={<>Simon´s <HeroAccent>ASO Therapy</HeroAccent></>}
        sub={de
          ? "Eine maßgeschneiderte RNA-Therapie für Simon — und gleichzeitig eine Vorlage für andere MCOPS12-Kinder."
          : "A bespoke RNA therapy for Simon — and a blueprint for other MCOPS12 children."}
      />

      {/* What is an ASO */}
      <section className="container-tight pb-12 pt-4">
        <h2 className="font-display text-3xl font-bold text-navy mb-6">
          What is an Antisense Oligonucleotide (ASO) Therapy?
        </h2>
        <div className="space-y-5 text-foreground/85 leading-relaxed text-lg">
          <p>
            ASOs are short, lab-made strands of genetic material built from the same building blocks as our own DNA and RNA. The easiest way to picture them is as a tiny, highly precise strip of tape that sticks to one — and only one — target inside a cell.
          </p>
          <p>
            That target is messenger RNA (mRNA): the short-lived "recipe" a cell follows to make a protein. By binding to a chosen mRNA, an ASO can either stop a harmful protein from being made or correct the recipe so a missing protein works again.
          </p>
          <p>
            This precision is what makes ASOs so promising for genetic conditions, including rare diseases (Lauffer et al. 2024{" "}
            <a className="text-teal font-semibold hover:underline break-all" href="https://www.nature.com/articles/s43856-023-00419-1" target="_blank" rel="noreferrer">
              https://www.nature.com/articles/s43856-023-00419-1
            </a>
            ). Because ASOs work on mRNA rather than on DNA itself, their effect is temporary - patients need repeated doses to keep the therapy effective.
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
              In most patients with MCOPS12, <strong>one copy of the <em>RARB</em> gene is mutated</strong> while the <strong>other copy stays healthy</strong>. Both copies produce mRNA, but only the mutant mRNA leads to the production of a harmful version of the RARB protein.
            </p>
            <p>
              An ASO can be designed to recognize only the faulty mRNA. Once inside the cell, it pairs with that mRNA like two halves of a zipper (Figure 1, Panel 2). A natural enzyme called RNase H1 spots this pairing and destroys the faulty mRNA — so the harmful protein never gets made. Scientists call this <strong>"mRNA knockdown"</strong>.
            </p>
            <p>
              <strong>The catch:</strong> the ASO has to be <strong>allele-specific</strong> — it must silence only the faulty copy and leave the healthy one untouched. That's because the healthy RARB protein is essential for normal brain development. Knocking it out by mistake would cause the very symptoms we're trying to prevent. (Ciancia et al. 2022{" "}
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
        </Reveal>
      </section>

      {/* Simon's personalized therapy */}
      <section className="container-tight pb-12">
        <h2 className="font-display text-3xl font-bold text-navy mb-6">
          Simon´s personalized allele-specific ASO therapy
        </h2>
        <div className="space-y-5 text-foreground/85 leading-relaxed text-lg">
          <p>
            The development of an allele-specific ASO therapy is inherently challenging (Hauser at al. 2022{" "}
            <a className="text-teal font-semibold hover:underline break-all" href="https://www.mdpi.com/1999-4923/14/8/1708" target="_blank" rel="noreferrer">
              https://www.mdpi.com/1999-4923/14/8/1708
            </a>
            ).
          </p>
          <p>
            Simon carries a <em>RARB</em> mutation called c.1159C&gt;T (p.R387C), which is shared by about 30% of MCOPS12 patients. Unfortunately, computer modeling showed that targeting this exact mutation wasn't going to work.
          </p>
          <p>
            So we took a different route. Using advanced genetic analyses called long-read sequencing, we mapped Simon's faulty <em>RARB</em> copy (allele) in detail — and identified dozens of additional unique markers found only on the mutant allele. Each one is a potential bullseye for an allele-specific ASO.
          </p>
          <p>
            This is exciting on two fronts. First, it opened a real path forward for Simon`s ASO therapy. Second, the workflow established here (Figure 2) is a blueprint - one that can be reused to develop personalized ASO therapies for other children with MCOPS12.
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
          <a href="https://hopeatrarelabs.com/" target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-3">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-navy">RareLabs (AlphaRose Therapeutics)</h4>
            <p className="text-sm text-teal font-semibold mt-3 break-all">https://hopeatrarelabs.com/</p>
          </a>

          <div className="bg-card border border-border rounded-2xl p-6">
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
