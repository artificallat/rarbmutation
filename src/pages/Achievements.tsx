import { SectionTitle } from "@/components/site/Bits";
import { useInView } from "@/components/site/Reveal";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";

const milestones = [
  { y: "2020", en: "Cure MCOPS12 founded in Salzburg following Simon's diagnosis", de: "Cure MCOPS12 in Salzburg gegründet – nach Simons Diagnose" },
  { y: "2021", en: "Research consortium RAinRARE established (EU-funded)", de: "Forschungskonsortium RAinRARE (EU-gefördert) etabliert" },
  { y: "2022", en: "Disease models established, Natural History Study launched", de: "Krankheitsmodelle etabliert, Natural History Study gestartet" },
  { y: "2023", en: "ASO program initiated, 6 candidates identified in cellular models", de: "ASO-Programm gestartet, 6 Kandidaten in Zellmodellen identifiziert" },
  { y: "2024/25", en: "GLP-compliant toxicity study ongoing", de: "GLP-konforme Toxizitätsstudie läuft" },
  { y: "Goal", en: "First administration of Simon's ASO therapy", de: "Erste Verabreichung von Simons ASO-Therapie" },
];

export default function Achievements({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero eyebrow={de ? "Erfolge" : "Achievements"} title={de ? "Von der Diagnose zum Handeln" : "From Diagnosis to Action"}
        sub={de
          ? "Nach Simons Diagnose und der Gründung von Cure MCOPS12 im Jahr 2020 haben wir in nur fünf Jahren ein internationales Forschungskonsortium aufgebaut, eine Natural History Study etabliert und ein personalisiertes ASO-Therapieprogramm in die präklinische Endphase gebracht."
          : "Following Simon's diagnosis and the founding of Cure MCOPS12 in 2020, we have — in just five years — built an international research consortium, established a Natural History Study, and advanced a personalised ASO therapy program into late preclinical development."} />

      <section className="container-wide py-16">
        <SectionTitle eyebrow={de ? "Bilanz" : "By the numbers"} title={de ? "Was bisher erreicht wurde" : "What we have achieved so far"} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {[
            { v: "€235k+", l: de ? "Spendenmittel mobilisiert (Mai 2026)" : "Funds mobilised (May 2026)" },
            { v: "4", l: de ? "Akademische Forschungspartner" : "Academic research partners" },
            { v: "6", l: de ? "ASO-Kandidaten identifiziert" : "ASO candidates identified" },
            { v: "52+", l: de ? "Familien im Register weltweit" : "Families in the registry worldwide" },
          ].map(s => (
            <div key={s.l} className="bg-card border border-border rounded-2xl p-6">
              <p className="font-display text-3xl font-bold text-navy">{s.v}</p>
              <p className="text-sm text-foreground/70 mt-2 leading-snug">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          <p className="text-lg leading-relaxed text-foreground/80">
            {de
              ? "Als Reinhard und Edith Pell 2020 die Diagnose ihres Sohnes Simon erhielten, gab es für MCOPS12 weder eine Behandlung noch eine etablierte Forschungsinfrastruktur. Innerhalb weniger Monate gründeten sie Cure MCOPS12 und begannen, Forschende, Kliniker:innen und andere betroffene Familien zu vernetzen – mit dem Ziel, aus einer ultra-seltenen Diagnose ein konkretes Forschungsprogramm zu machen."
              : "When Reinhard and Edith Pell received their son Simon's diagnosis in 2020, MCOPS12 had no treatment and no established research infrastructure. Within months they founded Cure MCOPS12 and began connecting researchers, clinicians and other affected families — with one goal: to turn an ultra-rare diagnosis into a concrete research program."}
          </p>
          <p className="text-lg leading-relaxed text-foreground/80">
            {de
              ? "Heute, fünf Jahre später, koordiniert Cure MCOPS12 ein internationales Konsortium, finanziert präklinische Studien mit, und ist Hauptträger einer personalisierten ASO-Therapie, die in der entscheidenden Toxizitätsphase steht. Jeder Schritt war ein Meilenstein, der ohne ehrenamtliches Engagement, Spender:innen und wissenschaftliche Partner nicht möglich gewesen wäre."
              : "Five years on, Cure MCOPS12 coordinates an international consortium, co-funds preclinical studies, and is the driving force behind a personalised ASO therapy now in its critical toxicity phase. Every step has been a milestone — none of which would have been possible without volunteers, donors and scientific partners."}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-navy to-navy-deep text-white py-20">
        <div className="container-tight">
          <SectionTitle light eyebrow={de ? "ASO-Programm" : "ASO program"} title={de ? "Simons personalisierte ASO-Therapie – Stand der Dinge" : "Simon's Personalized ASO Therapy — Where We Stand"} />
          <p className="text-lg text-white/85 leading-relaxed max-w-3xl">
            {de
              ? "Gemeinsam mit AlphaRose RareLabs (USA), IGBMC (Frankreich) und CHU Sainte-Justine (Kanada) haben wir eine Antisense-Oligonukleotid-Therapie entwickelt, die genau auf Simons RARB-Mutation zielt. Sechs sichere und wirksame Kandidaten wurden im zellulären Modell identifiziert. Aktuell läuft die entscheidende Toxizitätsstudie, in der die Verträglichkeit für die spätere Anwendung am Menschen geprüft wird. Dieser N-of-1-Ansatz dient zugleich als Modell für weitere MCOPS12-Patient:innen weltweit – das Verfahren lässt sich auf andere Mutationen übertragen."
              : "In collaboration with AlphaRose RareLabs (US), IGBMC (France), and CHU Sainte-Justine (Canada), we have developed an antisense oligonucleotide therapy targeting Simon's specific RARB mutation. Six safe and efficacious ASO candidates were identified in a cellular disease model. We are now conducting the critical toxicity study to identify the safest ASO for first-in-human administration. This N-of-1 approach also serves as a blueprint for other MCOPS12 patients worldwide — the methodology can be adapted to other mutations."}
          </p>

          <Timeline items={milestones} de={de} />
        </div>
      </section>

      <section className="container-wide py-20">
        <SectionTitle eyebrow={de ? "Über das ASO-Programm hinaus" : "Beyond the ASO program"} title={de ? "Weitere Meilensteine" : "Further milestones"} />
        <div className="grid md:grid-cols-3 gap-6">
          {(de ? [
            { t: "Internationales Konsortium", d: "Aufbau und Finanzierung von RAinRARE: vier Forschungsgruppen in Frankreich, Kanada und der Schweiz arbeiten koordiniert an Krankheitsmodellen, Wirkstoffen und Biomarkern." },
            { t: "Natural History Study", d: "Etablierung des ersten internationalen MCOPS12-Patientenregisters – die regulatorische Voraussetzung für jede klinische Studie." },
            { t: "Wirkstoff-Repurposing", d: "Sechs bereits klinisch erprobte Substanzen werden in MCOPS12-Mausmodellen getestet – als möglicher schneller Weg zu Symptomtherapien." },
            { t: "Familien-Community", d: "Aufbau einer aktiven globalen Community mit jährlichen Konferenzen, etwa am CHU Sainte-Justine in Montréal." },
            { t: "Behördliche Anerkennung", d: "Aktive Mitwirkung in nationalen und EU-weiten Allianzen für seltene Erkrankungen (Pro Rare Austria, EURORDIS)." },
            { t: "Wissenschaftlicher Beirat", d: "Etablierung eines internationalen Scientific Advisory Boards mit führenden Expert:innen aus Genetik, Neurologie und Wirkstoffentwicklung." },
          ] : [
            { t: "International consortium", d: "Built and funded RAinRARE: four research groups in France, Canada and Switzerland working in coordinated fashion on disease models, drugs and biomarkers." },
            { t: "Natural History Study", d: "Established the first international MCOPS12 patient registry — the regulatory prerequisite for any clinical trial." },
            { t: "Drug repurposing", d: "Six clinically validated compounds are being tested in MCOPS12 mouse models as a potential fast track to symptomatic treatments." },
            { t: "Family community", d: "Built an active global community with annual conferences, including at CHU Sainte-Justine in Montréal." },
            { t: "Regulatory voice", d: "Active participation in national and EU-wide rare-disease alliances (Pro Rare Austria, EURORDIS)." },
            { t: "Scientific Advisory Board", d: "Established an international Scientific Advisory Board with leading experts in genetics, neurology and drug development." },
          ]).map(b => (
            <div key={b.t} className="bg-card border border-border rounded-2xl p-6">
              <h4 className="font-display text-lg font-bold text-navy mb-2">{b.t}</h4>
              <p className="text-foreground/75 leading-relaxed text-sm">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Timeline({ items, de }: { items: typeof milestones; de: boolean }) {
  const { ref, inView } = useInView<HTMLOListElement>({ threshold: 0.1 });
  return (
    <ol ref={ref} className="mt-12 relative pl-6 space-y-8">
      <span
        aria-hidden
        className="absolute left-0 top-0 w-[2px] bg-amber/40"
        style={{
          height: inView ? "100%" : "0%",
          transition: `height ${items.length * 300 + 400}ms ease-out`,
        }}
      />
      {items.map((m, i) => (
        <li
          key={m.y}
          className="relative"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-40px)",
            transition: `opacity 0.6s ease-out ${i * 300}ms, transform 0.6s ease-out ${i * 300}ms`,
          }}
        >
          <span className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-amber" />
          <p className="text-amber font-display text-xl font-bold">{m.y}</p>
          <p className="text-white/85 mt-1">{de ? m.de : m.en}</p>
        </li>
      ))}
    </ol>
  );
}
