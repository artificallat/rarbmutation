import { FlaskConical, Building2, Dna, Sparkles } from "lucide-react";
import asoFigure1 from "@/assets/research/aso-figure-1.png";
import { PageHero } from "./WhoWeAre";
import { SectionTitle } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { AsoWorkflowFigure } from "@/components/site/AsoWorkflowFigure";

import type { Lang } from "@/content/site";

export default function AsoTherapy({ lang }: { lang: Lang }) {
  const de = lang === "de";

  return (
    <>
      <PageHero
        eyebrow={de ? "Erfolge / Fachkreise" : "Achievements / Professionals"}
        title={de ? "Simons ASO-Therapie" : "Simon's ASO Therapy"}
        sub={de
          ? "Eine maßgeschneiderte RNA-Therapie für Simon — und gleichzeitig eine Vorlage, die anderen MCOPS12-Kindern weltweit zugutekommen kann."
          : "A bespoke RNA therapy designed for Simon — and at the same time a template that can benefit other MCOPS12 children worldwide."}
      />

      {/* Intro / What is an ASO */}
      <section className="container-wide pb-12 pt-4">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <SectionTitle eyebrow={de ? "Grundlagen" : "The basics"} title={de ? "Was ist eine Antisense-Oligonukleotid- (ASO) Therapie?" : "What is an antisense oligonucleotide (ASO) therapy?"} />
            <div className="space-y-5 -mt-2 text-foreground/85 leading-relaxed text-lg">
              <Reveal><p>
                {de
                  ? "ASO-Therapeutika sind kurze, synthetisch hergestellte Nukleotidstränge – die Bausteine von DNA und RNA – mit einer Länge von typischerweise 15 bis 25 Einheiten. Sie gehören zur Klasse der RNA-Therapeutika und sind darauf ausgelegt, mit hoher Spezifität an eine einzelne Boten-RNA (mRNA) zu binden – das kurzlebige „Rezept“, das eine Zelle zur Herstellung eines Proteins verwendet."
                  : "ASO therapeutics are short, synthetic strands of nucleotides - the building blocks of DNA and RNA - typically 15 to 25 units in length. They are part of the RNA therapeutics class and are designed to bind with high specificity to a single messenger RNA (mRNA), the temporary “recipe” a cell uses to produce a protein."}
              </p></Reveal>
              <Reveal delay={120}><p>
                {de
                  ? "Das Ziel ist die Boten-RNA (mRNA): das kurzlebige Rezept, dem eine Zelle folgt, um ein Protein herzustellen. Bindet ein ASO an eine ausgewählte mRNA, kann es entweder verhindern, dass ein schädliches Protein entsteht, oder das Rezept so korrigieren, dass ein fehlendes Protein wieder funktioniert."
                  : "That target is messenger RNA (mRNA): the short-lived \"recipe\" a cell follows to make a protein. By binding to a chosen mRNA, an ASO can either stop a harmful protein from being made or correct the recipe so a missing protein works again."}
              </p></Reveal>
              <Reveal delay={240}><p>
                {de
                  ? "Dieser hochpräzise Mechanismus macht ASO-Therapeutika zu einem leistungsfähigen Ansatz zur Behandlung einer Vielzahl genetischer Erkrankungen, einschließlich seltener Krankheiten (Lauffer et al. 2024 "
                  : "This highly precise mechanism makes ASO therapeutics a powerful approach for treating a wide range of genetic disorders, including rare diseases (Lauffer et al. 2024 "}
                <a className="text-teal font-semibold hover:underline break-all" href="https://www.nature.com/articles/s43856-023-00419-1" target="_blank" rel="noreferrer">https://www.nature.com/articles/s43856-023-00419-1</a>
                {de
                  ? "). Da ASOs auf mRNA und nicht auf DNA wirken, sind ihre Effekte reversibel, was eine wiederholte Dosierung erforderlich macht."
                  : "). Since ASOs act on mRNA and not on DNA, their effects are reversible, meaning repeated dosing is required."}
              </p></Reveal>
            </div>
          </div>

          {/* Decorative metaphor tile */}
          <Reveal delay={200}>
            <div className="hidden lg:flex relative w-72 aspect-square rounded-3xl bg-gradient-to-br from-teal/15 via-teal/5 to-amber/10 border border-border items-center justify-center overflow-hidden">
              <div aria-hidden className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-teal/20 blur-3xl animate-pulse" />
              <div aria-hidden className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-amber/20 blur-3xl" />
              <div className="relative flex flex-col items-center gap-4 text-teal">
                <Dna className="w-20 h-20" strokeWidth={1.4} />
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber" />
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-navy/70">
                    {de ? "Präzise. Reversibel." : "Precise. Reversible."}
                  </p>
                  <Sparkles className="w-5 h-5 text-amber" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mechanism for MCOPS12 */}
      <section className="bg-muted/40 py-16">
        <div className="container-tight">
          <SectionTitle eyebrow="MCOPS12" title={de ? "Wie wirkt eine ASO-Therapie bei Patient:innen mit MCOPS12?" : "How does an ASO therapy work in patients with MCOPS12?"} />
          <div className="space-y-5 -mt-2 text-foreground/85 leading-relaxed text-lg">
            <p>
              {de
                ? <>Bei den meisten Patient:innen mit MCOPS12 ist eine Kopie des <em>RARB</em>-Gens mutiert, während die andere Kopie gesund bleibt (Wildtyp = trägt keine Mutation). Beide Kopien produzieren mRNA, aber nur die mutierte mRNA führt zur Bildung einer schädlichen <em>RARB</em>-Proteinvariante. Ein ASO kann so entworfen werden, dass es selektiv die mutierte <em>RARB</em>-mRNA erkennt und daran bindet.</>
                : <>In most patients with MCOPS12, one copy of the <em>RARB</em> gene is mutated while the other copy stays healthy (wild-type = carries no mutation). Both copies produce mRNA, but only the mutant mRNA leads to the production of a harmful <em>RARB</em> protein variant. An ASO can be designed to selectively recognize and bind to the mutant <em>RARB</em> mRNA.</>}
            </p>
            <p>
              {de
                ? "Nach dem Eintritt in die Zelle bindet das ASO über Watson–Crick-Basenpaarung an seine Ziel-mRNA und bildet einen kurzen RNA–DNA-Duplex (Abbildung 1, Panel 2). Dieser Duplex wird von einem körpereigenen Enzym namens RNase H1 erkannt, das die mRNA schneidet und abbaut. Dadurch kann das mutierte Protein nicht mehr produziert werden. Dieser Mechanismus wird als "
                : "After entering the cell, the ASO binds to its target mRNA through Watson–Crick base pairing, forming a short RNA–DNA duplex (Figure 1, Panel 2). This duplex is detected by a natural enzyme called RNase H1, which cuts and degrades the mRNA. As a result, the mutant protein can no longer be produced. This mechanism is known as "}
              <strong>{de ? "mRNA-Knockdown bezeichnet." : "mRNA knockdown."}</strong>
            </p>
            <p>
              {de ? <>Bei MCOPS12 muss das ASO </> : <>For MCOPS12, the ASO must be </>}
              <strong>{de ? "allelspezifisch" : "\"allele-specific\""}</strong>
              {de
                ? <> sein — das heißt, es reduziert selektiv die mutierte <em>RARB</em>-mRNA, während die gesunde mRNA unberührt bleibt. Diese Selektivität ist essenziell, da das RARB-Protein eine zentrale Rolle in der normalen Hirnentwicklung spielt. Eine Eliminierung des gesunden Proteins würde zu Symptomen führen, die jenen von MCOPS12 selbst ähneln (Ciancia et al. 2022, </>
                : <> – meaning it selectively reduces the mutant <em>RARB</em> mRNA while leaving the healthy mRNA untouched. This selectivity is essential because the RARB protein plays a key role in normal brain development. Eliminating the healthy protein would lead to symptoms similar to those seen in MCOPS12 itself (Ciancia et al. 2022, </>}
              <a className="text-teal font-semibold hover:underline break-all" href="https://www.sciencedirect.com/science/article/pii/S0301008222000326?via%3Dihub" target="_blank" rel="noreferrer">ScienceDirect</a>
              ).
            </p>
          </div>
        </div>
      </section>

      {/* Figure 1 */}
      <section className="container-tight py-12">
        <Reveal>
          <figure className="rounded-3xl overflow-hidden border border-border bg-card">
            <img src={asoFigure1} alt={de ? "Abbildung 1 — Mechanismus eines ASO für allelspezifischen mRNA-Knockdown" : "Figure 1 — Mechanism of an ASO for allele-specific mRNA knockdown"} className="w-full h-auto" loading="lazy" />
            <figcaption className="text-sm text-foreground/70 p-4 border-t border-border">
              <strong className="text-navy">{de ? "Abbildung 1:" : "Figure 1:"}</strong>{" "}
              {de
                ? "Mechanismus eines Antisense-Oligonukleotids (ASO) für allelspezifischen mRNA-Knockdown."
                : "Mechanism of an antisense oligonucleotide (ASO) for allele-specific mRNA knockdown."}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Simon's path */}
      <section className="container-tight pb-12">
        <SectionTitle eyebrow={de ? "Personalisiert" : "Personalized"} title={de ? "Simons personalisierte allelspezifische ASO-Therapie" : "Simon's personalized allele-specific ASO therapy"} />
        <div className="space-y-5 -mt-2 text-foreground/85 leading-relaxed text-lg">
          <p>
            {de
              ? "Die Entwicklung einer allelspezifischen ASO-Therapie ist von Natur aus herausfordernd (Hauser et al. 2022, "
              : "The development of an allele-specific ASO therapy is inherently challenging (Hauser et al. 2022, "}
            <a className="text-teal font-semibold hover:underline break-all" href="https://www.mdpi.com/1999-4923/14/8/1708" target="_blank" rel="noreferrer">Pharmaceutics</a>
            ).
          </p>
          <p>
            {de ? <>Simon trägt eine <em>RARB</em>-Mutation namens </> : <>Simon carries a <em>RARB</em> mutation called </>}
            <strong>c.1159C&gt;T (p.R387C)</strong>
            {de
              ? ", die etwa 30 % der MCOPS12-Patient:innen teilen. Leider zeigten Computermodelle, dass es nicht funktionieren würde, genau diese Mutation anzusteuern."
              : ", which is shared by about 30% of MCOPS12 patients. Unfortunately, computer modeling showed that targeting this exact mutation wasn't going to work."}
          </p>
          <p>
            {de
              ? <>Wir haben deshalb einen anderen Weg eingeschlagen. Mit fortschrittlichen genetischen Analysen — der sogenannten Long-Read-Sequenzierung — haben wir Simons fehlerhafte <em>RARB</em>-Kopie (Allel) im Detail kartiert und dabei dutzende zusätzliche einzigartige Marker identifiziert, die nur auf dem mutierten Allel vorkommen. Jeder davon ist ein potenzielles Ziel für ein allelspezifisches ASO.</>
              : <>So we took a different route. Using advanced genetic analyses called long-read sequencing, we mapped Simon's faulty <em>RARB</em> copy (allele) in detail — and identified dozens of additional unique markers found only on the mutant allele. Each one is a potential bullseye for an allele-specific ASO.</>}
          </p>
          <p>
            {de
              ? "Das ist in zweifacher Hinsicht spannend. Erstens hat es einen echten Weg für Simons ASO-Therapie eröffnet. Zweitens ist der hier etablierte Arbeitsablauf (Abbildung 2) eine Blaupause — er kann wiederverwendet werden, um personalisierte ASO-Therapien für weitere Kinder mit MCOPS12 zu entwickeln."
              : "This is exciting on two fronts. First, it opened a real path forward for Simon's ASO therapy. Second, the workflow established here (Figure 2) is a blueprint — one that can be reused to develop personalized ASO therapies for other children with MCOPS12."}
          </p>

        </div>
      </section>

      {/* Workflow figure */}
      <section className="container-wide py-16">
        <Reveal>
          <AsoWorkflowFigure lang={de ? "de" : "en"} />
        </Reveal>
      </section>





      {/* Partners */}
      <section className="container-wide pb-20">
        <SectionTitle eyebrow={de ? "Partner" : "Partners"} title={de ? "Wo die Arbeit stattfindet" : "Where the work is done"} />
        <div className="grid md:grid-cols-3 gap-5">
          <a href="https://hopeatrarelabs.com/" target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-3">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-navy">RareLabs (AlphaRose Therapeutics)</h4>
            <p className="text-foreground/75 mt-2 text-base">
              {de
                ? "Zielidentifikation, ASO-Design und Wirksamkeits-Screening."
                : "Target identification, ASO design and efficacy screening."}
            </p>
            <p className="text-sm text-teal font-semibold mt-3 break-all">hopeatrarelabs.com</p>
          </a>

          <div className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-3">
              <Building2 className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-navy">{de ? "Großes Pharmaunternehmen" : "Large pharma partner"}</h4>
            <p className="text-foreground/75 mt-2 text-base">
              {de
                ? "Zusätzliche ASO-Designs sowie Sicherheitstests in Simons Zellmodell (Name nicht öffentlich)."
                : "Additional ASO designs and safety testing in Simon's cell model (name undisclosed)."}
            </p>
          </div>

          <a href="https://www.hongene.com/" target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-3">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-navy">Hongene Biotech</h4>
            <p className="text-foreground/75 mt-2 text-base">
              {de
                ? "Herstellung der ASO-Wirkstoffe für die In-vivo-Sicherheitsstudien."
                : "Manufacturing of the ASO drug substance for the in-vivo safety studies."}
            </p>
            <p className="text-sm text-teal font-semibold mt-3 break-all">hongene.com</p>
          </a>
        </div>
      </section>
    </>
  );
}

