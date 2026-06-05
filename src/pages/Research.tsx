import { PageHero } from "@/pages/WhoWeAre";
import { SectionTitle } from "@/components/site/Bits";
import type { Lang } from "@/content/site";
import researchPillars from "@/assets/research-pillars.png";

export default function Research({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero
        eyebrow={de ? "Forschung" : "Research"}
        title={de ? "Forschung" : "Research"}
      />

      <section className="container-tight py-16 space-y-16">
        <article className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <SectionTitle eyebrow={de ? "Grundlagen" : "Background"} title="Overview of RARB biology" />
          <p>
            Retinoic acid receptor beta (RARB) is a transcription factor encoded by the <em>RARB</em> gene.
            It is widely expressed throughout the human body, with particularly high levels in the brain
            and eye (
            <a href="https://www.proteinatlas.org/ENSG00000077092-RARB" target="_blank" rel="noreferrer" className="text-teal underline">
              The Human Protein Atlas – RARB
            </a>
            ). RARB forms heterodimer complexes with retinoid X receptors (RXRs) and becomes activated upon
            binding to retinoic acid, the biologically active form of vitamin A. Following ligand binding,
            the RARB–RXR complex interacts with retinoic acid response elements (RAREs) contained in target
            genes to modulate their transcription with the help of coregulators (
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0098299714000788?via%3Dihub" target="_blank" rel="noreferrer" className="text-teal underline">
              di Masi et al. 2015
            </a>
            ).
          </p>
          <p>
            Tight regulation of the retinoic acid pathway is critical for the development of multiple organs
            in both humans and animals, with particularly important roles in eye development and formation
            of striatal projection systems in the brain (<a className="text-teal font-semibold hover:underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6605468/" target="_blank" rel="noreferrer">Rataj-Baniowska et al., 2015</a>).
          </p>
        </article>

        <article className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <SectionTitle eyebrow={de ? "Krankheitsmechanismus" : "Disease mechanism"} title="Genetics and pathophysiology of MCOPS12" />
          <p>
            Pathogenic dominant mutations in the <em>RARB</em> gene cause syndromic microphthalmia 12
            (MCOPS12), also referred to as <em>RARB</em>-related disorder (<em>RARB</em>-RD). The condition is characterized
            by developmental eye anomalies, hypotonia, and early-onset progressive movement disorders
            (dystonia and/or spasticity).
          </p>
          <p>
            Several dozen pathogenic variants are described in literature, with the recurrent p.R387C
            variant accounting for ~30% of cases. In vitro transfection studies classified these variants
            as either gain-of-function (GOF), increasing retinoic acid-induced transcriptional activity, or
            loss-of-function (LOF), exhibiting dominant-negative effects (
            <a href="https://www.gimjournal.org/article/S1098-3600(23)00869-9/fulltext" target="_blank" rel="noreferrer" className="text-teal underline">
              Caron et al. 2023
            </a>
            ).
          </p>
          <p>
            Movement disorders such as dystonia are generally thought to arise from dysfunction within the
            striatum, a key component of the basal ganglia involved in motor control, decision-making, and
            reward processing. The striatum is composed predominantly of medium spiny neurons (MSNs), which
            account for more than 90% of its neuronal population and are divided into two main subtypes
            based on dopamine receptor expression: D1 receptor–expressing (D1R) and D2 receptor–expressing
            (D2R) neurons.
          </p>
          <p>
            RARB is highly expressed in the striatum, where it plays a critical role both in the
            development of D1R MSNs during embryogenesis and in neuroprotection of D2R MSNs in adulthood (
            <a href="https://www.sciencedirect.com/science/article/pii/S0301008222000326?via%3Dihub" target="_blank" rel="noreferrer" className="text-teal underline">
              Ciancia et al. 2022
            </a>
            ).
          </p>
          <p>
            Generation and comprehensive analysis of four patient-specific <em>Rarb</em> mouse models
            (<em>Rarb</em><sup>-/-</sup>, <em>Rarb</em><sup>R387C/+</sup>, <em>Rarb</em><sup>L402P/+</sup>, and <em>Rarb</em><sup>+/-</sup>) yielded
            several key findings (
            <a href="https://www.biorxiv.org/content/10.64898/2026.02.20.706764v1" target="_blank" rel="noreferrer" className="text-teal underline">
              Zinter et al. 2026
            </a>
            ):
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Behavioral analyses of <em>Rarb</em> R387C/+ and <em>Rarb</em> L402P/+ mice exhibit
              progressive motor deficits, hyperactivity and cognitive impairment, closely recapitulating
              the clinical phenotypes observed in MCOPS12 patients carrying these variants.
            </li>
            <li>
              At the cellular level, the striatum shows a selective loss of D2R medium spiny neurons
              (MSNs), while D1R MSN populations remain preserved.
            </li>
            <li>
              Transcriptomic analysis in the striatum reveals that both models predominantly downregulate
              putative <em>RARB</em> target genes and display a transcriptional signature more pronounced than that
              of <em>Rarb</em> knockout (<em>Rarb</em> -/-) mice, supporting a dominant-negative mechanism
              in vivo. Notably, both the transcriptional alterations and the selective vulnerability of D2R
              MSNs overlap with findings in Huntington's disease mouse models, suggesting shared pathways
              of striatal dysfunction between Huntington's disease and MCOPS12.
            </li>
            <li>
              In contrast, <em>Rarb</em> +/- mice show no detectable phenotypes, consistent with
              observations in individuals carrying only one functional <em>RARB</em> allele. This supports
              the concept that allele-specific knockdown of mutant <em>RARB</em> — such as via an ASO
              therapy — represents a promising therapeutic strategy for MCOPS12.
            </li>
          </ul>
        </article>

        <article className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <SectionTitle eyebrow={de ? "Strategie" : "Strategy"} title="Three research pillars for MCOPS12" />
          <p>
            In close collaboration with our scientific advisors and sister nonprofit organizations — A Cure
            for Sophia and Friends and A Cure for Sienna — we have established three key research pillars
            aimed at advancing our understanding of disease mechanisms and defining outcome measures and
            biomarkers for future clinical trials.
          </p>
          <figure className="rounded-2xl overflow-hidden border border-border bg-card">
            <img
              src={researchPillars}
              alt="Three research pillars for MCOPS12: clinical picture, mouse models, and patient iPSC-derived neuronal cell models"
              className="w-full h-auto"
              loading="lazy"
            />
          </figure>
        </article>
      </section>
    </>
  );
}
