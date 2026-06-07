import { ExternalLink, Eye, Activity, Brain, Dna, Sparkles, AlertCircle } from "lucide-react";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import { Reveal, Counter } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";
import { geneFmt } from "@/lib/gene";

function Cite({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="text-teal font-semibold hover:underline">{children}</a>;
}

export default function WhatIs({ lang }: { lang: Lang }) {
  const de = lang === "de";

  const refs = [
    { authors: "Srour et al. 2013", title: de ? "Rezessive und dominante Mutationen im Retinsäure-Rezeptor Beta bei Mikrophthalmie und Zwerchfellhernie" : "Recessive and Dominant Mutations in Retinoic Acid Receptor Beta in Cases with Microphthalmia and Diaphragmatic Hernia", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3791254/" },
    { authors: "Srour et al. 2016", title: de ? "Gain-of-Function-Mutationen in RARB verursachen geistige Behinderung mit fortschreitender motorischer Beeinträchtigung" : "Gain-of-Function Mutations in RARB Cause Intellectual Disability with Progressive Motor Impairment", href: "https://onlinelibrary.wiley.com/doi/10.1002/humu.23004" },
    { authors: "Foster et al. 2019", title: de ? "RARB-assoziierte kolische Hypoganglionose" : "Retinoic acid receptor beta variant-related colonic hypoganglionosis", href: "https://onlinelibrary.wiley.com/doi/10.1002/ajmg.a.61078" },
    { authors: "Caron et al. 2023", title: de ? "Klinische und funktionelle Heterogenität bei Störungen des Retinsäure-Rezeptors Beta" : "Clinical and functional heterogeneity associated with the disruption of retinoic acid receptor beta", href: "https://www.gimjournal.org/article/S1098-3600(23)00869-9/fulltext" },
    { authors: "Trieschmann et al. 2023", title: de ? "De-novo-RARB-Variante in Verbindung mit Mikrophthalmie und Dystonie" : "De novo retinoic acid receptor beta (RARB) variant associated with microphthalmia and dystonia", href: "https://www.sciencedirect.com/science/article/abs/pii/S1769721223001088?via%3Dihub" },
    { authors: "Replogle et al. 2024", title: de ? "De-novo-nichtkodierende RARB-Variante bei komplexer Mikrophthalmie verändert ein putatives regulatorisches Element" : "A De Novo Noncoding RARB Variant Associated with Complex Microphthalmia Alters a Putative Regulatory Element", href: "https://onlinelibrary.wiley.com/doi/10.1155/2024/6619280" },
  ];

  const facts = de
    ? [
        { icon: Dna, text: "Ultra-seltene neurologische Entwicklungsstörung, ausgelöst durch Mutationen im RARB-Gen." },
        { icon: Sparkles, text: "Wird auch als RARB-assoziierte Erkrankung bezeichnet." },
        { icon: Activity, text: "In der Regel autosomal-dominant — eine veränderte Genkopie reicht aus." },
        { icon: AlertCircle, text: "Häufigste Mutation: p.R387C — bei rund einem Drittel der Diagnostizierten." },
        { icon: Brain, text: "RARβ ist ein durch Retinsäure aktivierter Transkriptionsfaktor — entscheidend für Augen, Zwerchfell, Herz und Gehirn." },
        { icon: Eye, text: "Typisch: Augenfehlbildungen, Hypotonie, Dystonie/Spastik, Sprachverzögerung, Schluckprobleme." },
        { icon: Sparkles, text: "Schwere und Symptomkombination variieren stark von Kind zu Kind." },
        { icon: AlertCircle, text: "Bislang gibt es keine zugelassene Therapie für MCOPS12." },
      ]
    : [
        { icon: Dna, text: "An ultra-rare neurodevelopmental disorder caused by mutations in the RARB gene." },
        { icon: Sparkles, text: "Also referred to as RARB-related disorder." },
        { icon: Activity, text: "Usually an autosomal dominant condition, meaning that a mutation in just one of the two copies of the RARB gene is enough to cause the disorder." },
        { icon: AlertCircle, text: "Most frequent RARB variant: p.Arg387Cys (p.R387C) - found in ~30% of diagnosed individuals " },
        { icon: Brain, text: "RARB is as a transcription factor activated by retinoic acid, a metabolite of vitamin A, and plays a crucial role in the development of the eyes, diaphragm, heart, and brain." },
        { icon: Eye, text: "Common clinical features include eye defects, hypotonia, progressive dystonia and/or spasticity, language delay, and feeding difficulties." },
        { icon: Sparkles, text: "The severity and combination of features vary widely among affected children." },
        { icon: AlertCircle, text: "There is currently no approved treatment for MCOPS12." },
      ];

  const stats: { k: string; num?: number; suffix?: string; v: string }[] = [
    { k: "2013", num: 2013, v: de ? "Erstbeschreibung" : "First described" },
    { k: "52", num: 52, v: de ? "Fälle weltweit (2023)" : "Cases worldwide (2023)" },
    { k: "RARB", v: de ? "Verursachendes Gen" : "Causative gene" },
    { k: "0", num: 0, v: de ? "Zugelassene Therapien" : "Approved therapies" },
  ];

  return (
    <>
      <PageHero
        eyebrow={de ? "Die Krankheit" : "The disease"}
        title={de ? <>Was ist <HeroAccent>MCOPS12</HeroAccent>?</> : <>What is <HeroAccent>MCOPS12</HeroAccent>?</>}
        sub={de
          ? <>Syndromale Mikrophthalmie 12 (MCOPS12) ist eine ultra-seltene neurologische Entwicklungsstörung, die durch Mutationen im Gen für den Retinsäure-Rezeptor Beta (<em>RARB</em>) verursacht wird.</>
          : <>Syndromic microphthalmia 12 (MCOPS12) is an ultra-rare neurodevelopmental disorder caused by mutations in the retinoic acid receptor beta (<em>RARB</em>) gene.</>}
      />


      {/* Quick stat strip */}
      <section className="container-tight pt-10 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 120}>
              <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 text-center hover:border-teal hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="text-3xl sm:text-4xl font-bold text-teal tabular-nums">
                  {typeof s.num === "number"
                    ? <Counter to={s.num} duration={1600} format={(n) => n.toString()} />
                    : geneFmt(s.k)}
                </div>
                <div className="text-xs sm:text-sm text-foreground/70 mt-2">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Editorial narrative — flowing text with side accents */}
      <section id="disease" className="container-tight pb-20">
        <div className="grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-4">
            <div className="md:sticky md:top-28 space-y-6">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
                  {de ? "Im Überblick" : "In brief"}
                </p>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  {de ? "Eine Krankheit, die kaum jemand kennt." : "A disease almost no one has heard of."}
                </h2>
              </Reveal>
              <Reveal delay={240}>
                <div className="h-1 w-16 bg-amber rounded-full" />
              </Reveal>
              <Reveal delay={300}>
                <p className="text-foreground/70 leading-relaxed">
                  {de
                    ? "Eine kurze, klare Einführung zu Ursache, Geschichte, Symptomen und Vererbung von MCOPS12 — mit Verweisen auf die Originalliteratur."
                    : "A short, clear introduction to the cause, history, clinical picture and inheritance of MCOPS12 — linked back to the original literature."}
                </p>
              </Reveal>
            </div>
          </aside>

          <div className="md:col-span-8 space-y-10">
            {[
              {
                label: de ? "Ursache" : "Cause",
                body: de ? (
                  <>Syndromale Mikrophthalmie 12 (MCOPS12) ist eine ultra-seltene neurologische Entwicklungsstörung, die durch Mutationen im Gen für den Retinsäure-Rezeptor Beta (<em>RARB</em>) verursacht wird (<Cite href="https://onlinelibrary.wiley.com/doi/10.1002/humu.23004">Srour et al. 2016</Cite>).</>
                ) : (
                  <>Syndromic microphthalmia 12 (MCOPS12) is an ultra-rare neurodevelopmental disorder caused by mutations in the retinoic acid receptor beta (<em>RARB</em>) gene (<Cite href="https://onlinelibrary.wiley.com/doi/10.1002/humu.23004">Srour et al. 2016</Cite>).</>
                ),
              },
              {
                label: de ? "Geschichte & Häufigkeit" : "History & prevalence",
                body: de ? (
                  <>Die Erkrankung wurde 2013 erstmals in der medizinischen Literatur beschrieben (<Cite href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3791254/">Srour et al. 2013</Cite>). Das jüngste systematische Review, veröffentlicht 2023, fasste klinische Daten von 52 Personen weltweit zusammen — MCOPS12 zählt damit zu den seltensten bekannten Erkrankungen (<Cite href="https://www.gimjournal.org/article/S1098-3600(23)00869-9/fulltext">Caron et al. 2023</Cite>). Da viele Kinder mit dieser Erkrankung nicht oder fälschlich als Zerebralparese bzw. unspezifische Entwicklungsstörung diagnostiziert werden, ist die tatsächliche Zahl der Betroffenen vermutlich höher.</>
                ) : (
                  <>It was first described in the medical literature in 2013 (<Cite href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3791254/">Srour et al. 2013</Cite>). The most recent systematic review, published in 2023, compiled clinical data from 52 individuals worldwide, making MCOPS12 one of the rarest disorders known (<Cite href="https://www.gimjournal.org/article/S1098-3600(23)00869-9/fulltext">Caron et al. 2023</Cite>). Because many children with this condition may be undiagnosed or misdiagnosed as having cerebral palsy or an unspecified neurodevelopmental disorder, the true number of people living with MCOPS12 is likely higher.</>
                ),
              },
              {
                label: de ? "Klinisches Bild" : "Clinical picture",
                body: de ? (
                  <>Die meisten Kinder mit MCOPS12 zeigen in den ersten Lebensjahren eine Kombination aus Augenfehlbildungen (wie Mikrophthalmie, d. h. ein oder beide Augen sind kleiner als normal), niedrigem Muskeltonus (Hypotonie) und fortschreitenden Bewegungsstörungen (Dystonie und/oder Spastik) (<Cite href="https://www.sciencedirect.com/science/article/abs/pii/S1769721223001088?via%3Dihub">Trieschmann et al. 2023</Cite>). Manche haben zusätzlich eine globale Entwicklungsverzögerung, Schluckprobleme sowie periphere Auffälligkeiten wie Zwerchfellfehlbildungen oder angeborene Herzfehler. Die Bandbreite der Symptome ist groß und variiert stark in der Ausprägung — nicht jedes Kind hat jedes Merkmal.</>
                ) : (
                  <>Most children with MCOPS12 show a combination of developmental eye anomalies (such as microphthalmia, meaning one or both eyes are smaller than normal), low muscle tone (hypotonia), and progressive movement disorders (dystonia and/or spasticity) that appear in the first years of life (<Cite href="https://www.sciencedirect.com/science/article/abs/pii/S1769721223001088?via%3Dihub">Trieschmann et al. 2023</Cite>). Some also have a global developmental delay, swallowing difficulties, and peripheral defects such as diaphragmatic anomalies or congenital heart defects. The range of symptoms is wide and varies strongly in severity, and not every child has every feature.</>
                ),
              },
              {
                label: de ? "Vererbung" : "Inheritance",
                body: de ? (
                  <>MCOPS12 ist in der Regel eine autosomal-dominante Erkrankung — eine Veränderung in nur einer der beiden Kopien des <em>RARB</em>-Gens reicht aus, um die Störung zu verursachen. In den meisten Familien tritt die Genveränderung spontan beim betroffenen Kind auf und ist bei den Eltern nicht vorhanden — dies wird als de-novo-Variante bezeichnet. In einer kleinen Zahl von Familien wird die Variante vererbt. Eine sehr seltene rezessive Form, bei der beide Kopien von <em>RARB</em> betroffen sind, wurde ebenfalls beschrieben (<Cite href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3791254/">Srour et al. 2013</Cite>).</>
                ) : (
                  <>MCOPS12 is usually an autosomal dominant condition, meaning that a change in just one of the two copies of the <em>RARB</em> gene is enough to cause the disorder. In most families the gene change happens spontaneously in the affected child and is not present in the parents — this is called a de novo variant. In a small number of families the variant is inherited. A very rare recessive form, in which both copies of <em>RARB</em> are affected, has also been reported (<Cite href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3791254/">Srour et al. 2013</Cite>).</>
                ),
              },
            ].map((b, i) => (
              <Reveal key={b.label} delay={i * 100}>
                <article className="border-l-2 border-teal/30 pl-6 hover:border-teal transition-colors duration-300">
                  <p className="text-xs uppercase tracking-[0.22em] text-teal font-semibold mb-3">{b.label}</p>
                  <p className="text-lg leading-relaxed text-foreground/85">{b.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="container-tight pb-20">
        <Reveal>
          <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div aria-hidden className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-teal/20 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-amber/10 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold mb-8 relative">
              {de ? "Fakten zu MCOPS12" : "Facts about MCOPS12"}
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 relative">
              {facts.map((f, i) => (
                <Reveal key={i} delay={i * 80}>
                  <li className="flex gap-4 items-start bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-amber/40 transition-all duration-300 h-full">
                    <span className="shrink-0 w-9 h-9 rounded-lg bg-amber/20 text-amber flex items-center justify-center">
                      <f.icon className="w-4 h-4" />
                    </span>
                    <span className="text-white/90 text-sm leading-relaxed">{geneFmt(f.text)}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>


      {/* References */}
      <section className="container-tight py-20">
        <Reveal><SectionTitle eyebrow={de ? "Quellen" : "References"} title={de ? "Wissenschaftliche Literatur" : "Scientific literature"} /></Reveal>
        <div className="grid gap-3">
          {refs.map((r, i) => (
            <Reveal key={r.href} delay={i * 70}>
              <a href={r.href} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-5 flex items-start justify-between gap-4 hover:border-teal hover:-translate-y-0.5 transition-all duration-300 group">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-teal font-semibold mb-1">{r.authors}</div>
                  <div className="font-semibold text-navy group-hover:text-teal transition leading-snug">{geneFmt(r.title)}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-teal shrink-0 mt-1"/>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
