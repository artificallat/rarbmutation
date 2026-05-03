import { SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import labImage from "@/assets/research-lab.jpg";

const labs = [
  { n: "Michaud Lab", inst: "CHU Sainte-Justine, Université de Montréal", lead: "Jacques Michaud, MD PhD", focus: { en: "Clinical patient data, mouse phenotyping", de: "Klinische Patientendaten, Phänotypisierung im Mausmodell" } },
  { n: "Krezel Lab", inst: "IGBMC Illkirch, France", lead: "Wojciech Krezel, PhD", focus: { en: "Mouse striatum analysis, RAR signalling", de: "Analyse des Striatums (Maus), RAR-Signalwege" } },
  { n: "Taylor Lab", inst: "University of Basel", lead: "Verdon Taylor, PhD", focus: { en: "iPSC-derived striatal neurons, human disease model", de: "iPSC-abgeleitete Striatum-Neuronen, humanes Krankheitsmodell" } },
  { n: "Poch Lab", inst: "CNRS Strasbourg", lead: "Olivier Poch, PhD", focus: { en: "FAIRification of data, biomarker identification", de: "FAIRifizierung von Daten, Biomarker-Identifikation" } },
];

export default function Research({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero eyebrow={de ? "Forschung" : "Research"} title={de ? "Unser Weg zur Therapie" : "Our Path to Treatment"}
        sub={de ? "Wir verfolgen zwei komplementäre wissenschaftliche Strategien, um MCOPS12-Patient:innen schneller eine Behandlung zugänglich zu machen – kurzfristig durch Symptomtherapie, langfristig durch ursächliche Gen-Therapie." : "We pursue two complementary scientific strategies to bring relief to MCOPS12 patients faster — symptomatic treatment in the short term, causative gene therapy in the long term."} />

      <section className="container-wide pb-12">
        <p className="text-lg leading-relaxed text-foreground/80 max-w-4xl mb-12">
          {de
            ? "MCOPS12 ist eine genetisch bedingte Erkrankung – ausgelöst durch eine einzelne Punktmutation im RARB-Gen, die zu einem fehlerhaften RARβ-Protein führt. Dieses fehlerhafte Protein stört die Genregulation in Augen, Muskulatur und vor allem im Striatum und präfrontalen Kortex des Gehirns. Eine wirksame Therapie muss entweder die Symptome kontrollieren oder die zugrundeliegende molekulare Ursache neutralisieren. Unsere beiden Programme verfolgen genau diese beiden Wege parallel."
            : "MCOPS12 is a genetic condition — caused by a single point mutation in the RARB gene that produces a dysfunctional RARβ protein. This faulty protein disrupts gene regulation in the eyes, muscles, and especially the striatum and prefrontal cortex of the brain. An effective therapy must either control the symptoms or neutralise the underlying molecular cause. Our two programs pursue both of these paths in parallel."}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-3xl p-8">
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
          <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-3xl p-8">
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
        </div>

        <div className="mt-12 rounded-3xl overflow-hidden border border-border">
          <img
            src={labImage}
            alt={de ? "Forschungslabor – Wirkstoffentwicklung für MCOPS12" : "Research laboratory – drug development for MCOPS12"}
            className="w-full h-auto object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionTitle eyebrow={de ? "Konsortium" : "Consortium"} title={de ? "Unser akademisches Forschungs­konsortium" : "Our academic research consortium"} />
          <p className="text-lg leading-relaxed text-foreground/80 max-w-4xl mb-10">
            {de
              ? "Unter dem Dach des EU-geförderten Projekts RAinRARE arbeiten vier spezialisierte Forschungsgruppen aus Frankreich, Kanada und der Schweiz eng zusammen. Jede Gruppe bringt eine entscheidende Komponente ein – von klinischer Patientencharakterisierung über Tier- und Zellmodelle bis hin zu Bioinformatik und Biomarkerforschung. Diese Bündelung von Expertise ist bei einer ultra-seltenen Erkrankung kein Luxus, sondern Voraussetzung für jeden echten Fortschritt."
              : "Under the umbrella of the EU-funded RAinRARE project, four specialised research groups from France, Canada and Switzerland collaborate closely. Each contributes a critical piece — from clinical patient characterisation, to mouse and cell models, to bioinformatics and biomarker research. For an ultra-rare disease, pooling this kind of expertise is not a luxury but a prerequisite for any real progress."}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {labs.map(l => (
              <div key={l.n} className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-display text-xl font-bold text-navy">{l.n}</h4>
                <p className="text-sm text-teal font-semibold mt-1">{l.inst}</p>
                <p className="text-sm text-foreground/70 mt-2">{l.lead}</p>
                <p className="text-sm text-foreground/85 mt-3"><span className="font-semibold text-navy">{de ? "Schwerpunkt: " : "Focus: "}</span>{l.focus[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20">
        <SectionTitle eyebrow={de ? "Wie wir arbeiten" : "How we work"} title={de ? "Vom Mausmodell zur klinischen Studie" : "From mouse model to clinical trial"} />
        <ol className="space-y-5 max-w-4xl">
          {(de ? [
            { n: "01", t: "Krankheitsmodelle etablieren", d: "Mausmodelle und iPSC-abgeleitete humane Neuronen, die die häufigste RARB-Mutation (p.R387C) tragen, bilden die Grundlage für alle Tests." },
            { n: "02", t: "Wirkstoff-Screening", d: "Kandidatenmoleküle werden zunächst in Zellmodellen auf Sicherheit und Wirksamkeit geprüft, anschließend in Tiermodellen validiert." },
            { n: "03", t: "Toxikologie & Pharmakokinetik", d: "GLP-konforme Toxizitätsstudien sind regulatorische Voraussetzung vor jeder Anwendung am Menschen." },
            { n: "04", t: "Regulatorischer Antrag", d: "IND/IMPD-Einreichung bei FDA bzw. EMA – inklusive aller präklinischen Daten und Daten aus der Natural History Study." },
            { n: "05", t: "Klinische Anwendung", d: "Erste Verabreichung an Patient:innen unter engmaschiger klinischer Überwachung; Auswertung gegen die Naturverlauf-Daten." },
          ] : [
            { n: "01", t: "Establish disease models", d: "Mouse models and iPSC-derived human neurons carrying the most common RARB mutation (p.R387C) form the foundation for all testing." },
            { n: "02", t: "Drug screening", d: "Candidate molecules are first screened in cell models for safety and efficacy, then validated in animal models." },
            { n: "03", t: "Toxicology & pharmacokinetics", d: "GLP-compliant toxicity studies are a regulatory prerequisite before any first-in-human use." },
            { n: "04", t: "Regulatory filing", d: "IND/IMPD submission to FDA or EMA — including all preclinical data and Natural History Study data." },
            { n: "05", t: "Clinical administration", d: "First-in-patient administration under close clinical monitoring; outcomes are read against the natural history baseline." },
          ]).map(s => (
            <li key={s.n} className="flex gap-5 bg-card border border-border rounded-2xl p-6">
              <span className="font-display text-2xl font-bold text-amber w-14 flex-shrink-0">{s.n}</span>
              <div>
                <h4 className="font-display text-lg font-bold text-navy mb-1">{s.t}</h4>
                <p className="text-foreground/75 leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
