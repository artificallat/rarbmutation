import { ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import rarbProtein from "@/assets/rarb-protein.jpg";
import rarbMutation from "@/assets/rarb-mutation.jpg";

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
            {de
              ? "MCOPS12 wurde erstmals 2013 in der medizinischen Fachliteratur beschrieben (Srour et al. 2013). Das aktuellste systematische Review aus dem Jahr 2023 konnte klinische Daten von gerade einmal 52 Patient:innen weltweit zusammentragen (Caron et al. 2023). Da viele betroffene Kinder vermutlich gar nicht oder fälschlicherweise mit einer Zerebralparese oder einer unspezifischen Entwicklungsstörung diagnostiziert werden, dürfte die tatsächliche Zahl der Erkrankten höher liegen."
              : "MCOPS12 was first described in the medical literature in 2013 (Srour et al. 2013). The most recent systematic review, published in 2023, was able to compile clinical data on just 52 individuals worldwide (Caron et al. 2023). Because many affected children are likely undiagnosed or misdiagnosed as having cerebral palsy or an unspecified neurodevelopmental disorder, the real number of people living with MCOPS12 is almost certainly higher."}
          </p>
          <p>
            {de
              ? "Die meisten Kinder zeigen eine charakteristische Kombination aus Augenfehlbildungen — etwa einer Mikrophthalmie, bei der ein oder beide Augen kleiner als üblich angelegt sind —, niedrigem Muskeltonus (Hypotonie) und in den ersten Lebensjahren fortschreitenden Bewegungsstörungen wie Dystonie oder Spastik (Trieschmann et al. 2023). Hinzu können eine globale Entwicklungsverzögerung, Schluckschwierigkeiten sowie Begleitfehlbildungen kommen — beispielsweise am Zwerchfell oder am Herzen. Welche dieser Merkmale auftreten und wie stark sie sind, ist von Kind zu Kind sehr unterschiedlich; nicht jede Patient:in zeigt jedes Symptom."
              : "Most children present with a characteristic combination of eye anomalies — such as microphthalmia, where one or both eyes develop smaller than usual — together with low muscle tone (hypotonia) and progressive movement disorders such as dystonia or spasticity that emerge during the first years of life (Trieschmann et al. 2023). Some children also experience a global developmental delay, swallowing difficulties and additional anomalies of the diaphragm or heart. Which of these features appear and how severely they manifest differs significantly from child to child; not every patient shows every symptom."}
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
            { l: "NIH National Library of Medicine", h: "https://ghr.nlm.nih.gov/gene/RARB#conditions" },
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
