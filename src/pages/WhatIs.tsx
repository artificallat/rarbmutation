import { ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import rarbProtein from "@/assets/rarb-protein.jpg";
import rarbMutation from "@/assets/rarb-mutation.jpg";

function Cite({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="text-teal font-semibold hover:underline">{children}</a>;
}

export default function WhatIs({ lang }: { lang: Lang }) {
  const de = lang === "de";

  const refs = [
    { label: "Srour et al. 2016 — Human Mutation", href: "https://onlinelibrary.wiley.com/doi/10.1002/humu.23004" },
    { label: "Srour et al. 2013 — original description", href: "https://pubmed.ncbi.nlm.nih.gov/24075189/" },
    { label: "Caron et al. 2023 — systematic review (52 patients)", href: "https://www.gimjournal.org/article/S1098-3600(23)00869-9/fulltext" },
    { label: "Trieschmann et al. 2023 — clinical features", href: "https://www.sciencedirect.com/science/article/abs/pii/S1769721223001088?via%3Dihub" },
  ];

  const facts = de
    ? [
        "Ultra-seltene neurologische Entwicklungsstörung, ausgelöst durch Mutationen im RARB-Gen.",
        "Wird auch als RARB-assoziierte Erkrankung bezeichnet.",
        "In der Regel autosomal-dominant — eine veränderte Genkopie reicht aus.",
        "Häufigste Mutation: p.R387C — kommt bei rund einem Drittel aller Diagnostizierten vor.",
        "Das RARβ-Protein ist ein durch Retinsäure (Vitamin-A-Metabolit) aktivierter Transkriptionsfaktor — entscheidend für die Entwicklung von Augen, Zwerchfell, Herz und Gehirn.",
        "Typische Symptome: Augenfehlbildungen, Hypotonie, fortschreitende Dystonie und/oder Spastik, Sprachverzögerung, Fütter- und Schluckprobleme.",
        "Schwere und Kombination der Symptome variieren stark von Kind zu Kind.",
        "Bislang gibt es keine zugelassene Therapie für MCOPS12.",
      ]
    : [
        "An ultra-rare neurodevelopmental disorder caused by mutations in the RARB gene.",
        "Also referred to as RARB-related disorder.",
        "Usually inherited in an autosomal dominant pattern — one altered copy is enough.",
        "Most common mutation: p.R387C — found in roughly one third of diagnosed individuals.",
        "The RARβ protein is a transcription factor activated by retinoic acid (a vitamin A metabolite) — essential for the development of eyes, diaphragm, heart and brain.",
        "Typical features: eye defects, hypotonia, progressive dystonia and/or spasticity, language delay, feeding and swallowing difficulties.",
        "The severity and combination of features vary widely between children.",
        "There is currently no approved treatment for MCOPS12.",
      ];

  return (
    <>
      <PageHero
        eyebrow={de ? "Die Krankheit" : "The disease"}
        title={de ? "Was ist MCOPS12?" : "What is MCOPS12?"}
        sub={de
          ? "Syndromale Mikrophthalmie 12 (MCOPS12) ist eine ultra-seltene neurologische Entwicklungsstörung. Sie wird durch Mutationen im Gen für den Retinsäure-Rezeptor Beta (RARB) ausgelöst und gehört zu den seltensten bekannten Erkrankungen weltweit."
          : "Syndromic Microphthalmia 12 (MCOPS12) is an ultra-rare neurodevelopmental disorder. It is caused by mutations in the retinoic acid receptor beta (RARB) gene and ranks among the rarest known conditions worldwide."}
      />

      {/* Overview / history */}
      <section id="disease" className="container-tight pb-12">
        <div className="space-y-5 text-foreground/85 leading-relaxed text-lg">
          <p>
            {de ? (
              <>
                Syndromale Mikrophthalmie 12 (MCOPS12) ist eine ultra-seltene neurologische Entwicklungsstörung, die durch Mutationen im Gen für den Retinsäure-Rezeptor Beta (RARB) verursacht wird (
                <Cite href="https://onlinelibrary.wiley.com/doi/10.1002/humu.23004">Srour et al. 2016</Cite>
                ).
              </>
            ) : (
              <>
                Syndromic Microphthalmia 12 (MCOPS12) is an ultra-rare neurodevelopmental disorder caused by mutations in the retinoic acid receptor beta (RARB) gene (
                <Cite href="https://onlinelibrary.wiley.com/doi/10.1002/humu.23004">Srour et al. 2016</Cite>
                ).
              </>
            )}
          </p>
          <p>
            {de ? (
              <>
                Sie wurde erstmals 2013 in der medizinischen Fachliteratur beschrieben (
                <Cite href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3791254/">Srour et al. 2013</Cite>
                ). Das aktuellste systematische Review aus dem Jahr 2023 fasste klinische Daten von 52 Personen weltweit zusammen und macht MCOPS12 damit zu einer der seltensten bekannten Erkrankungen (
                <Cite href="https://www.gimjournal.org/article/S1098-3600(23)00869-9/fulltext">Caron et al. 2023</Cite>
                ). Da viele Kinder mit dieser Erkrankung möglicherweise nicht diagnostiziert oder fälschlicherweise mit einer Zerebralparese oder einer unspezifischen Entwicklungsstörung diagnostiziert werden, ist die tatsächliche Zahl der Personen, die mit MCOPS12 leben, vermutlich höher.
              </>
            ) : (
              <>
                It was first described in the medical literature in 2013 (
                <Cite href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3791254/">Srour et al. 2013</Cite>
                ). The most recent systematic review, published in 2023, compiled clinical data from 52 individuals worldwide, making MCOPS12 one of the rarest disorders known (
                <Cite href="https://www.gimjournal.org/article/S1098-3600(23)00869-9/fulltext">Caron et al. 2023</Cite>
                ). Because many children with this condition may be undiagnosed or misdiagnosed as having cerebral palsy or an unspecified neurodevelopmental disorder, the true number of people living with MCOPS12 is likely higher.
              </>
            )}
          </p>
          <p>
            {de ? (
              <>
                Die meisten Kinder mit MCOPS12 zeigen eine Kombination aus Entwicklungsstörungen der Augen (wie Mikrophthalmie, d. h. ein oder beide Augen sind kleiner als normal), niedrigem Muskeltonus (Hypotonie) und fortschreitenden Bewegungsstörungen (Dystonie und/oder Spastik), die in den ersten Lebensjahren auftreten (
                <Cite href="https://www.sciencedirect.com/science/article/abs/pii/S1769721223001088?via%3Dihub">Trieschmann et al. 2023</Cite>
                ). Einige haben außerdem eine globale Entwicklungsverzögerung, Schluckschwierigkeiten und periphere Fehlbildungen wie Zwerchfellanomalien oder angeborene Herzfehler. Das Spektrum der Symptome ist breit und variiert stark in der Ausprägung, und nicht jedes Kind weist jedes Merkmal auf.
              </>
            ) : (
              <>
                Most children with MCOPS12 show a combination of developmental eye anomalies (such as microphthalmia, meaning one or both eyes are smaller than normal), low muscle tone (hypotonia), and progressive movement disorders (dystonia and/or spasticity) that appear in the first years of life (
                <Cite href="https://www.sciencedirect.com/science/article/abs/pii/S1769721223001088?via%3Dihub">Trieschmann et al. 2023</Cite>
                ). Some also have a global developmental delay, swallowing difficulties, and peripheral defects such as diaphragmatic anomalies or congenital heart defects. The range of symptoms is wide and varies strongly in severity, and not every child has every feature.
              </>
            )}
          </p>
          <p>
            {de ? (
              <>
                MCOPS12 ist in der Regel eine autosomal-dominante Erkrankung, was bedeutet, dass eine Veränderung in nur einer der beiden Kopien des RARB-Gens ausreicht, um die Erkrankung zu verursachen. In den meisten Familien tritt die Genveränderung spontan beim betroffenen Kind auf und ist bei den Eltern nicht vorhanden – dies wird als de-novo-Variante bezeichnet. In einer kleinen Zahl von Familien wird die Variante vererbt. Eine sehr seltene rezessive Form, bei der beide Kopien von RARB betroffen sind, wurde ebenfalls beschrieben (
                <Cite href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3791254/">Srour et al. 2013</Cite>
                ).
              </>
            ) : (
              <>
                MCOPS12 is usually an autosomal dominant condition, meaning that a change in just one of the two copies of the RARB gene is enough to cause the disorder. In most families the gene change happens spontaneously in the affected child and is not present in the parents – this is called a de novo variant. In a small number of families the variant is inherited. A very rare recessive form, in which both copies of RARB are affected, has also been reported (
                <Cite href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3791254/">Srour et al. 2013</Cite>
                ).
              </>
            )}
          </p>
        </div>
      </section>

      {/* Key facts */}
      <section className="container-tight pb-16">
        <div className="bg-navy text-white rounded-3xl p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold mb-4">
            {de ? "Auf einen Blick" : "At a glance"}
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-white/90">
            {facts.map(k => (
              <li key={k} className="flex gap-3">
                <span className="text-amber font-bold mt-1">●</span>
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gene */}
      <section id="gene" className="container-tight pb-20">
        <SectionTitle eyebrow="RARB" title={de ? "Das RARB-Gen" : "The RARB gene"} />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-lg leading-relaxed text-foreground/80">
            {de
              ? "Das Gen für den Retinsäure-Rezeptor Beta (RARB) liegt auf Chromosom 3 (3p24.2). Es kodiert das RARβ-Protein — einen Kernrezeptor und Transkriptionsfaktor, der durch Retinsäure (einen Vitamin-A-Metaboliten) aktiviert wird. RARβ steuert die Aktivität zahlreicher weiterer Gene und übernimmt damit eine Schlüsselrolle in der Entwicklung der Augen, des Zwerchfells, des Herzens, des Verdauungstrakts — und vor allem des Gehirns."
              : "The retinoic acid receptor beta (RARB) gene sits on chromosome 3 (3p24.2). It encodes the RARβ protein — a nuclear receptor and transcription factor that is switched on by retinoic acid, a metabolite of vitamin A. RARβ regulates the activity of many other genes and therefore plays a pivotal role in the development of the eyes, diaphragm, heart, digestive tract — and especially the brain."}
          </p>
          <div className="rounded-2xl overflow-hidden border border-border aspect-square bg-muted">
            <img src={rarbProtein} alt={de ? "RARβ-Protein an DNA gebunden" : "RARβ protein bound to DNA"} className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          {[
            { l: "NIH National Library of Medicine: RARB", h: "https://www.ncbi.nlm.nih.gov/gene/5915" },
            { l: "GeneCards: RARB", h: "https://www.genecards.org/cgi-bin/carddisp.pl?gene=RARB" },
          ].map(r => (
            <a key={r.h} href={r.h} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-5 flex items-center justify-between hover:border-teal transition">
              <span className="font-semibold text-navy">{r.l}</span><ExternalLink className="w-4 h-4 text-teal"/>
            </a>
          ))}
        </div>
      </section>

      {/* Inheritance / pathophysiology */}
      <section className="bg-muted/40 py-20">
        <div className="container-tight">
          <SectionTitle eyebrow={de ? "Vererbung & Pathophysiologie" : "Inheritance & pathophysiology"} title={de ? "Wie entsteht MCOPS12?" : "How does MCOPS12 arise?"} />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border border-border aspect-square bg-muted">
              <img src={rarbMutation} alt={de ? "Punktmutation im RARB-Gen" : "Point mutation in the RARB gene"} className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>
                {de
                  ? "MCOPS12 wird in den meisten Fällen autosomal-dominant vererbt: Schon eine veränderte von beiden RARB-Genkopien reicht aus, um die Erkrankung auszulösen. In der überwiegenden Zahl der Familien tritt die Mutation neu beim betroffenen Kind auf — sie ist bei den Eltern nicht nachweisbar. Diese spontane Veränderung nennt man de-novo-Variante."
                  : "MCOPS12 is most commonly inherited in an autosomal dominant fashion: a single altered copy of the two RARB genes is enough to cause the disorder. In the majority of families the mutation appears for the first time in the affected child and cannot be detected in the parents — this is called a de novo variant."}
              </p>
              <p>
                {de
                  ? "Bei einigen wenigen Familien wird die Variante hingegen vererbt. Eine sehr seltene rezessive Form, bei der beide RARB-Kopien betroffen sind, wurde ebenfalls beschrieben (Srour et al. 2013)."
                  : "In a small number of families the variant is inherited instead. A very rare recessive form, in which both copies of RARB carry a mutation, has also been reported (Srour et al. 2013)."}
              </p>
              <p>
                {de
                  ? "Das veränderte RARβ-Protein stört die Regulation wichtiger Zielgene — besonders im Striatum und im präfrontalen Kortex. Genau das erklärt die Kombination aus Bewegungsstörungen und kognitiven Beeinträchtigungen, die für MCOPS12 so charakteristisch ist."
                  : "The mutated RARβ protein disrupts the regulation of key target genes — particularly in the striatum and the prefrontal cortex. This is exactly what explains the combination of movement disorders and cognitive impairment that is so characteristic of MCOPS12."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="container-tight py-16">
        <SectionTitle eyebrow={de ? "Quellen" : "References"} title={de ? "Wissenschaftliche Literatur" : "Scientific literature"} />
        <div className="grid sm:grid-cols-2 gap-4">
          {refs.map(r => (
            <a key={r.href} href={r.href} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-5 flex items-center justify-between hover:border-teal transition group">
              <span className="font-semibold text-navy group-hover:text-teal transition">{r.label}</span>
              <ExternalLink className="w-4 h-4 text-teal shrink-0 ml-3"/>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
