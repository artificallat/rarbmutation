import { Pill, Dna, FlaskConical, ShieldCheck, FileCheck, Stethoscope, Microscope } from "lucide-react";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import { Reveal } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";


const labs = [
  { n: "CHU Sainte-Justine", inst: "Université de Montréal, Canada", focus: { en: "Clinical patient data and disease characterisation", de: "Klinische Patientendaten und Krankheitscharakterisierung" } },
  { n: "IGBMC", inst: "Illkirch, France", focus: { en: "RARβ biology, mouse models, RAR signalling", de: "RARβ-Biologie, Mausmodelle, RAR-Signalwege" } },
  { n: "AlphaRose RareLabs", inst: "United States", focus: { en: "ASO design and personalised RNA therapeutics", de: "ASO-Design und personalisierte RNA-Therapeutika" } },
  { n: "N=1 Collaborative", inst: "International", focus: { en: "Methodology and ethics for N-of-1 therapies", de: "Methodik und Ethik für N-of-1-Therapien" } },
];

export default function Research({ lang }: { lang: Lang }) {
  const de = lang === "de";
  const stepIcons = [FlaskConical, Microscope, ShieldCheck, FileCheck, Stethoscope];
  return (
    <>
      <PageHero eyebrow={de ? "Forschung" : "Research"} title={de ? "Unser Weg zur Therapie" : "Our Path to Treatment"}
        sub={de ? "Wir verfolgen zwei komplementäre wissenschaftliche Strategien, um MCOPS12-Patient:innen schneller eine Behandlung zugänglich zu machen – kurzfristig durch Symptomtherapie, langfristig durch ursächliche Gen-Therapie." : "We pursue two complementary scientific strategies to bring relief to MCOPS12 patients faster — symptomatic treatment in the short term, causative gene therapy in the long term."} />

      <section className="container-wide pb-12">
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/80 max-w-4xl mb-12">
            {de
              ? "MCOPS12 ist eine genetisch bedingte Erkrankung – ausgelöst durch eine einzelne Punktmutation im RARB-Gen, die zu einem fehlerhaften RARβ-Protein führt. Dieses fehlerhafte Protein stört die Genregulation in Augen, Muskulatur und vor allem im Striatum und präfrontalen Kortex des Gehirns. Eine wirksame Therapie muss entweder die Symptome kontrollieren oder die zugrundeliegende molekulare Ursache neutralisieren. Unsere beiden Programme verfolgen genau diese beiden Wege parallel."
              : "MCOPS12 is a genetic condition — caused by a single point mutation in the RARB gene that produces a dysfunctional RARβ protein. This faulty protein disrupts gene regulation in the eyes, muscles, and especially the striatum and prefrontal cortex of the brain. An effective therapy must either control the symptoms or neutralise the underlying molecular cause. Our two programs pursue both of these paths in parallel."}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-card border border-border rounded-3xl p-8 h-full hover:-translate-y-2 hover:shadow-2xl hover:border-teal transition-all duration-300 group">
              <div className="w-20 h-20 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Pill className="w-10 h-10" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">{de ? "Strategie 1" : "Path 1"}</p>
              <h3 className="font-display text-2xl font-bold text-navy mt-2">{de ? "Wirkstoff-Repurposing" : "Drug Repurposing"}</h3>
              <p className="text-foreground/80 mt-4 leading-relaxed">
                {de
                  ? "Sechs bereits zugelassene oder in klinischer Prüfung befindliche Wirkstoffe für andere neurologische Erkrankungen werden in einem MCOPS12-Mausmodell systematisch getestet – mit dem Ziel, Hypotonie, Dystonie und kognitive Defizite zu mildern."
                  : "Six commercially available drugs or drugs in clinical trials for other neurological diseases are being tested systematically in a MCOPS12 mouse model — aiming to alleviate hypotonia, dystonia and cognitive impairment."}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/75">
                {(de ? [
                  "Schneller Weg in die Klinik: Sicherheitsprofile bereits bekannt",
                  "Behandelt Symptome, nicht die genetische Ursache",
                  "Erste Tierversuche laufen bereits",
                ] : [
                  "Fast track to the clinic: safety profiles already known",
                  "Addresses symptoms, not the genetic cause",
                  "First animal studies already underway",
                ]).map(p => (
                  <li key={p} className="flex gap-2"><span className="text-teal font-bold">▸</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-3xl p-8 h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-20 h-20 rounded-2xl bg-amber/20 text-amber flex items-center justify-center mb-5 group-hover:bg-amber group-hover:text-navy group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Dna className="w-10 h-10" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold">{de ? "Strategie 2" : "Path 2"}</p>
              <h3 className="font-display text-2xl font-bold mt-2">{de ? "RNA-Therapeutika (ASO/siRNA)" : "RNA Therapeutics (ASO/siRNA)"}</h3>
              <p className="text-white/85 mt-4 leading-relaxed">
                {de
                  ? "Wir entwickeln eine Antisense-Oligonukleotid (ASO) Therapie, die selektiv die mutierte RARB-mRNA stilllegt. Das defekte RARβ-Protein wird unterdrückt, die gesunde Genkopie bleibt aktiv – ein reversibler, allelspezifischer Ansatz."
                  : "We are developing an antisense oligonucleotide (ASO) therapy that selectively silences the mutated RARB mRNA. The dysfunctional RARβ protein is suppressed while the healthy gene copy remains active — a reversible, allele-specific approach."}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                {(de ? [
                  "Behandelt die genetische Ursache, nicht nur die Symptome",
                  "Personalisiert auf die jeweilige Mutation zugeschnitten",
                  "Modell für weitere MCOPS12-Patient:innen weltweit",
                ] : [
                  "Targets the genetic cause, not just the symptoms",
                  "Personalised to each patient's specific mutation",
                  "A blueprint for further MCOPS12 patients worldwide",
                ]).map(p => (
                  <li key={p} className="flex gap-2"><span className="text-amber font-bold">▸</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionTitle eyebrow={de ? "Konsortium" : "Consortium"} title={de ? "Unser akademisches Forschungs­konsortium" : "Our academic research consortium"} />
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/80 max-w-4xl mb-10">
              {de
                ? "Vier spezialisierte Partner aus Frankreich, Kanada und den USA arbeiten in einem koordinierten Forschungsnetzwerk zusammen. Jeder bringt eine entscheidende Komponente ein – von der klinischen Patientencharakterisierung über Krankheitsmodelle bis hin zum Design der ASO-Therapie. Diese Bündelung von Expertise ist bei einer ultra-seltenen Erkrankung kein Luxus, sondern Voraussetzung für jeden echten Fortschritt."
                : "Four specialised partners from France, Canada and the United States work together in a coordinated research network. Each contributes a critical piece — from clinical patient characterisation to disease models to ASO design. For an ultra-rare disease, pooling this kind of expertise is not a luxury but a prerequisite for any real progress."}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {labs.map((l, i) => (
              <Reveal key={l.n} delay={i * 120}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:-translate-y-1 hover:shadow-xl hover:border-teal transition-all duration-300">
                  <h4 className="font-display text-xl font-bold text-navy">{l.n}</h4>
                  <p className="text-sm text-teal font-semibold mt-1">{l.inst}</p>
                  
                  <p className="text-sm text-foreground/85 mt-3"><span className="font-semibold text-navy">{de ? "Schwerpunkt: " : "Focus: "}</span>{l.focus[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20">
        <SectionTitle eyebrow={de ? "Wie wir arbeiten" : "How we work"} title={de ? "Vom Mausmodell zur klinischen Studie" : "From mouse model to clinical trial"} />
        <ol className="space-y-5 max-w-4xl">
          {(de ? [
            { n: "01", t: "Krankheitsmodelle etablieren", d: "Zelluläre Krankheitsmodelle, die Simons RARB-Mutation tragen, bilden die Grundlage für alle Tests von Wirkstoffkandidaten." },
            { n: "02", t: "Wirkstoff-Screening", d: "Kandidatenmoleküle werden zunächst in Zellmodellen auf Sicherheit und Wirksamkeit geprüft, anschließend in Tiermodellen validiert." },
            { n: "03", t: "Toxikologie & Pharmakokinetik", d: "Toxizitätsstudien sind regulatorische Voraussetzung vor jeder Anwendung am Menschen – aktuell der entscheidende Schritt für Simons ASO." },
            { n: "04", t: "Regulatorischer Antrag", d: "Einreichung bei FDA bzw. EMA – inklusive aller präklinischen Daten und Daten aus der Natural History Study." },
            { n: "05", t: "Klinische Anwendung", d: "Erste Verabreichung an die Patient:innen unter engmaschiger klinischer Überwachung; Auswertung gegen die Naturverlauf-Daten." },
          ] : [
            { n: "01", t: "Establish disease models", d: "Cellular disease models carrying Simon's RARB mutation form the foundation for all candidate testing." },
            { n: "02", t: "Drug screening", d: "Candidate molecules are first screened in cell models for safety and efficacy, then validated in animal models." },
            { n: "03", t: "Toxicology & pharmacokinetics", d: "Toxicity studies are a regulatory prerequisite before any first-in-human use — currently the critical step for Simon's ASO." },
            { n: "04", t: "Regulatory filing", d: "Submission to FDA or EMA — including all preclinical data and Natural History Study data." },
            { n: "05", t: "Clinical administration", d: "First-in-patient administration under close clinical monitoring; outcomes are read against the natural history baseline." },
          ]).map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <Reveal key={s.n} delay={i * 100}>
                <li className="flex gap-5 bg-card border border-border rounded-2xl p-6 hover:border-amber hover:-translate-x-1 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-2xl bg-amber/15 text-amber flex items-center justify-center group-hover:bg-amber group-hover:text-navy group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-display text-sm font-bold text-amber">{s.n}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-navy mb-1">{s.t}</h4>
                    <p className="text-foreground/75 leading-relaxed">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </section>
    </>
  );
}
