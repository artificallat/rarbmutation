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
                  ? "ASOs sind kurze, im Labor synthetisierte Erbgut-Schnipsel — aus denselben Bausteinen wie unsere DNA und RNA. Man kann sie sich wie ein hochpräzises Stück Klebeband vorstellen, das nur an einem ganz bestimmten Ziel im Inneren einer Zelle haftet."
                  : "ASOs are short, lab-made strands of genetic material built from the same building blocks as our own DNA and RNA. The easiest way to picture them is as a tiny, highly precise strip of tape that sticks to one — and only one — target inside a cell."}
              </p></Reveal>
              <Reveal delay={120}><p>
                {de
                  ? "Das Ziel ist die Boten-RNA (mRNA): das kurzlebige „Rezept", dem eine Zelle folgt, um ein Protein herzustellen. Bindet ein ASO an eine ausgewählte mRNA, kann es entweder verhindern, dass ein schädliches Protein entsteht, oder das Rezept so korrigieren, dass ein fehlendes Protein wieder funktioniert."
                  : "That target is messenger RNA (mRNA): the short-lived \"recipe\" a cell follows to make a protein. By binding to a chosen mRNA, an ASO can either stop a harmful protein from being made or correct the recipe so a missing protein works again."}
              </p></Reveal>
              <Reveal delay={240}><p>
                {de
                  ? "Genau diese Präzision macht ASOs so vielversprechend für genetische Erkrankungen, einschließlich seltener Krankheiten (Lauffer et al. 2024, "
                  : "This precision is what makes ASOs so promising for genetic conditions, including rare diseases (Lauffer et al. 2024, "}
                <a className="text-teal font-semibold hover:underline break-all" href="https://www.nature.com/articles/s43856-023-00419-1" target="_blank" rel="noreferrer">Nature Communications Medicine</a>
                {de
                  ? "). Da ASOs an der mRNA und nicht an der DNA selbst ansetzen, ist ihre Wirkung vorübergehend — Patient:innen brauchen wiederholte Dosen, damit die Therapie wirksam bleibt."
                  : "). Because ASOs work on mRNA rather than on DNA itself, their effect is temporary — patients need repeated doses to keep the therapy effective."}
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
          <SectionTitle eyebrow="MCOPS12" title={de ? "Wie wirkt eine ASO-Therapie bei MCOPS12?" : "How does an ASO therapy work in MCOPS12?"} />
          <div className="space-y-5 -mt-2 text-foreground/85 leading-relaxed text-lg">
            <p>
              {de
                ? "Die meisten Menschen mit MCOPS12 tragen die Erkrankung nur in einer der beiden Kopien des RARB-Gens. Die zweite Kopie ist gesund. Beide Kopien werden in mRNA übersetzt — aber nur die mutierte Version führt zu einem fehlerhaften RARB-Protein, das die Entwicklung stört."
                : "Most people living with MCOPS12 carry the condition in just one of their two copies of the RARB gene; the other copy is healthy. Both copies are read into mRNA — but only the mutated version produces a faulty RARB protein that disrupts development."}
            </p>
            <p>
              {de
                ? "Ein ASO lässt sich so entwerfen, dass es ausschließlich diese fehlerhafte mRNA erkennt. In der Zelle legt es sich daran an wie zwei Hälften eines Reißverschlusses (siehe Abbildung 1, Schritt 2). Ein körpereigenes Enzym namens RNase H1 erkennt diese Paarung und zerlegt die fehlerhafte mRNA — die Bauanleitung für das schädliche Protein wird also entsorgt, bevor es überhaupt entstehen kann. Diesen Mechanismus nennt man "
                : "An ASO can be designed to recognise only this faulty mRNA. Inside the cell it pairs up with the mRNA like two halves of a zipper (see Figure 1, step 2). A natural enzyme called RNase H1 spots this pair and breaks down the faulty mRNA — so the blueprint for the harmful protein is destroyed before any of it can be built. Scientists call this approach "}
              <strong>{de ? "mRNA-Knockdown" : "mRNA knockdown"}</strong>.
            </p>
            <p>
              {de
                ? "Die zentrale Schwierigkeit: Das ASO muss "
                : "Here is the catch: the ASO has to be "}
              <strong>{de ? "allelspezifisch" : "allele-specific"}</strong>
              {de
                ? " sein. Es darf nur die kranke Genkopie stilllegen und die gesunde unbedingt verschonen. Denn das gesunde RARB-Protein ist für eine normale Hirnentwicklung essenziell — würde man es versehentlich mit ausschalten, würde man genau jene Symptome auslösen, die man eigentlich verhindern will (Ciancia et al. 2022, "
                : ". It must silence only the diseased copy and leave the healthy one untouched. The healthy RARB protein is essential for normal brain development — accidentally knocking it out would cause the very symptoms we are trying to prevent (Ciancia et al. 2022, "}
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
        <SectionTitle eyebrow={de ? "Personalisiert" : "Personalized"} title={de ? "Simons maßgeschneiderte ASO-Therapie" : "Simon's tailor-made ASO therapy"} />
        <div className="space-y-5 -mt-2 text-foreground/85 leading-relaxed text-lg">
          <p>
            {de
              ? "Eine allelspezifische ASO-Therapie zu entwickeln, ist von Natur aus eine wissenschaftliche Hochleistungsaufgabe (vgl. Hauser et al. 2022, "
              : "Developing an allele-specific ASO therapy is, by its nature, a scientific high-wire act (see Hauser et al. 2022, "}
            <a className="text-teal font-semibold hover:underline break-all" href="https://www.mdpi.com/1999-4923/14/8/1708" target="_blank" rel="noreferrer">Pharmaceutics</a>
            ).
          </p>
          <p>
            {de
              ? "Simon trägt eine RARB-Mutation namens "
              : "Simon carries a RARB mutation called "}
            <strong>c.1159C&gt;T (p.R387C)</strong>
            {de
              ? " — dieselbe Veränderung, die etwa 30 % aller MCOPS12-Patient:innen tragen. Computermodelle zeigten leider früh, dass sich genau diese Stelle nicht direkt mit einem ASO ansteuern lässt."
              : " — the same change found in roughly 30 % of all MCOPS12 patients. Unfortunately, computer modelling showed early on that this exact spot could not be targeted directly by an ASO."}
          </p>
          <p>
            {de
              ? "Wir haben deshalb einen anderen Weg gewählt. Mit einem modernen Verfahren namens "
              : "So we took a different route. Using a modern technique called "}
            <strong>{de ? "Long-Read-Sequenzierung" : "long-read sequencing"}</strong>
            {de
              ? " haben wir Simons fehlerhafte RARB-Kopie Buchstabe für Buchstabe entschlüsselt — und dabei dutzende einzigartige Marker gefunden, die ausschließlich auf der mutierten Genkopie vorkommen. Jeder dieser Marker kann als Andockstelle für ein allelspezifisches ASO dienen."
              : " we mapped Simon's faulty RARB copy letter by letter — and uncovered dozens of unique markers that appear only on the mutant allele. Each of these markers is a potential bullseye for an allele-specific ASO."}
          </p>
          <p>
            {de
              ? "Das ist gleich in zweifacher Hinsicht wertvoll. Zum einen entstand so überhaupt erst ein gangbarer Weg für Simons Therapie. Zum anderen ist der dabei entwickelte Arbeitsablauf eine Blaupause — er lässt sich für weitere MCOPS12-Kinder mit anderen Mutationen wiederverwenden."
              : "This matters on two fronts. First, it created a viable path for Simon's therapy in the first place. Second, the workflow we built along the way is a blueprint — one that can be reused for other MCOPS12 children carrying different mutations."}
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

