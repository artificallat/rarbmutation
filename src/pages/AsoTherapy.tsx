import { PageHero } from "./WhoWeAre";
import { SectionTitle } from "@/components/site/Bits";
import asoSource from "@/assets/research/aso-source.png";
import type { Lang } from "@/content/site";

export default function AsoTherapy({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero
        eyebrow={de ? "Erfolge / Fachkreise" : "Achievements / Professionals"}
        title={de ? "Simons ASO-Therapie" : "Simon's ASO Therapy"}
        sub={de
          ? "Eine personalisierte allelspezifische Antisense-Oligonukleotid-Therapie für Simon — und ein Vorbild für weitere MCOPS12-Patient:innen weltweit."
          : "A personalized allele-specific antisense oligonucleotide therapy for Simon — and a blueprint for other MCOPS12 patients worldwide."}
      />

      <section className="container-tight pb-12 space-y-12 text-foreground/85 leading-relaxed text-lg">
        <div>
          <SectionTitle eyebrow={de ? "Grundlagen" : "Basics"} title="What is an Antisense Oligonucleotide (ASO) Therapy?" />
          <div className="space-y-5 -mt-2">
            <p>
              ASOs are short synthetic strands made from the same building blocks as our DNA and RNA. Think of them as a "molecular tape" designed to lock onto one specific target inside a cell.
            </p>
            <p>
              That target is messenger RNA (mRNA): the short-lived "recipe" a cell follows to make a protein. By binding to a chosen mRNA, an ASO can either stop a harmful protein from being made or correct the recipe so a missing protein works again.
            </p>
            <p>
              This precision is what makes ASOs so promising for genetic conditions, including rare diseases (Lauffer et al. 2024,{" "}
              <a className="text-teal font-semibold hover:underline break-all" href="https://www.nature.com/articles/s43856-023-00419-1" target="_blank" rel="noreferrer">
                https://www.nature.com/articles/s43856-023-00419-1
              </a>
              ). Because ASOs work on mRNA rather than DNA itself, their effect is temporary — patients need repeated doses to keep the therapy effective.
            </p>
          </div>
        </div>

        <div>
          <SectionTitle eyebrow="MCOPS12" title="How does an ASO therapy work in patients with MCOPS12?" />
          <div className="space-y-5 -mt-2">
            <p>
              In most patients with MCOPS12, <strong>one copy</strong> of the <em>RARB</em> gene is <strong>mutated</strong> while the <strong>other copy stays healthy</strong>. Both copies produce mRNA, but only the mutant mRNA leads to the production of a harmful version of the RARB protein.
            </p>
            <p>
              An ASO can be designed to recognize only the faulty mRNA. Once inside the cell, it pairs with that mRNA like two halves of a zipper (Figure 1, Panel 2). A natural enzyme called RNase H1 spots this pairing and destroys the faulty mRNA — so the harmful protein never gets made. Scientists call this <strong>"mRNA knockdown"</strong>.
            </p>
            <p>
              <strong>The catch:</strong> the ASO has to be <strong>allele-specific</strong> — it must silence only the faulty copy and leave the healthy one alone. That's because the healthy RARB protein is essential for normal brain development. Knocking it out by mistake would cause the very symptoms we're trying to prevent. (Ciancia et al. 2022,{" "}
              <a className="text-teal font-semibold hover:underline break-all" href="https://www.sciencedirect.com/science/article/pii/S0301008222000326?via%3Dihub" target="_blank" rel="noreferrer">
                https://www.sciencedirect.com/science/article/pii/S0301008222000326
              </a>
              ).
            </p>
          </div>
        </div>

        <figure className="rounded-2xl overflow-hidden border border-border bg-card">
          <img src={asoSource} alt="Figure 1 & Figure 2 — ASO mechanism and Simon's allele-specific ASO development workflow" className="w-full h-auto" loading="lazy" />
          <figcaption className="text-sm text-foreground/60 p-4 border-t border-border">
            <strong>Figure 1:</strong> Mechanism of antisense oligonucleotide (ASO) for allele-specific mRNA knockdown.{" "}
            <strong>Figure 2:</strong> Allele-specific ASO therapy development workflow — personalized for Simon, but a blueprint for many MCOPS12 patients.
          </figcaption>
        </figure>

        <div>
          <SectionTitle eyebrow={de ? "Personalisiert" : "Personalized"} title="Simon's personalized allele-specific ASO therapy" />
          <div className="space-y-5 -mt-2">
            <p>
              The development of an allele-specific ASO therapy is inherently challenging (Hauser et al. 2022,{" "}
              <a className="text-teal font-semibold hover:underline break-all" href="https://www.mdpi.com/1999-4923/14/8/1708" target="_blank" rel="noreferrer">
                https://www.mdpi.com/1999-4923/14/8/1708
              </a>
              ).
            </p>
            <p>
              Simon carries a <em>RARB</em> mutation called <strong>c.1159C&gt;T (p.R387C)</strong>, which is shared by about 30% of MCOPS12 patients. Unfortunately, computer modeling showed that targeting this exact mutation wasn't going to work.
            </p>
            <p>
              So we took a different route. Using advanced genetic analyses called <strong>long-read sequencing</strong>, we mapped Simon's faulty <em>RARB</em> copy (allele) in detail — and identified dozens of additional unique markers found only on the mutant allele. Each one is a potential bullseye for an allele-specific ASO.
            </p>
            <p>
              This is exciting on two fronts. First, it opened a real path forward for Simon's ASO therapy. Second, the workflow established here (Figure 2) is a blueprint — one that can be reused to develop personalized ASO therapies for other children with MCOPS12.
            </p>
          </div>
        </div>

        <div>
          <SectionTitle eyebrow={de ? "Partner" : "Partners"} title="Where the work is done" />
          <div className="space-y-5 -mt-2">
            <p>
              Target identification, ASO design and efficacy screening was performed at <strong>RareLabs</strong> (a division of AlphaRose Therapeutics):{" "}
              <a className="text-teal font-semibold hover:underline break-all" href="https://hopeatrarelabs.com/" target="_blank" rel="noreferrer">
                https://hopeatrarelabs.com/
              </a>
            </p>
            <p>
              Additional designs of ASOs and safety testing in Simon's cell model were performed at a large pharma company (undisclosed).
            </p>
            <p>
              ASO drugs for in vivo safety studies were produced at <strong>Hongene Biotech</strong>:{" "}
              <a className="text-teal font-semibold hover:underline break-all" href="https://www.hongene.com/" target="_blank" rel="noreferrer">
                https://www.hongene.com/
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
