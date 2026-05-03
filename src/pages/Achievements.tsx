import { SectionTitle } from "@/components/site/Bits";
import { useInView, Reveal, Counter } from "@/components/site/Reveal";
import { PageHero } from "@/pages/WhoWeAre";
import { Trophy, FlaskConical, Target, Users, Globe2, Award, Network as NetworkIcon, Microscope } from "lucide-react";
import type { Lang } from "@/content/site";

const milestones = [
  { y: "2017", en: "Simon is born — diagnosis of MCOPS12 (RARB mutation) follows", de: "Simon wird geboren – die Diagnose MCOPS12 (RARB-Mutation) folgt" },
  { y: "Founding", en: "Cure MCOPS12 founded in Austria by Edith & Reinhard Pell", de: "Cure MCOPS12 in Österreich von Edith & Reinhard Pell gegründet" },
  { y: "Network", en: "International research network with partners in France, Canada and the US established", de: "Internationales Forschungsnetzwerk mit Partnern in Frankreich, Kanada und den USA aufgebaut" },
  { y: "Registry", en: "Natural History Study launched — international MCOPS12 patient registry", de: "Natural History Study gestartet – internationales MCOPS12-Patientenregister" },
  { y: "2023", en: "ASO program initiated — 6 safe candidates identified in cellular models", de: "ASO-Programm gestartet – 6 sichere Kandidaten in Zellmodellen identifiziert" },
  { y: "Now", en: "Toxicity study underway to select the safest ASO for Simon", de: "Toxizitätsstudie läuft – Auswahl des sichersten ASO für Simon" },
  { y: "Goal", en: "First administration of Simon's ASO therapy", de: "Erste Verabreichung von Simons ASO-Therapie" },
];

export default function Achievements({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero eyebrow={de ? "Erfolge" : "Achievements"} title={de ? "Von der Diagnose zum Handeln" : "From Diagnosis to Action"}
        sub={de
          ? "Nach Simons Diagnose und der Gründung von Cure MCOPS12 haben wir ein internationales Forschungsnetzwerk aufgebaut, eine Natural History Study etabliert und ein personalisiertes ASO-Therapieprogramm in die präklinische Endphase gebracht."
          : "Following Simon's diagnosis and the founding of Cure MCOPS12, we have built an international research network, established a Natural History Study, and advanced a personalised ASO therapy program into late preclinical development."} />

      <section className="container-wide py-16">
        <SectionTitle eyebrow={de ? "Bilanz" : "By the numbers"} title={de ? "Was bisher erreicht wurde" : "What we have achieved so far"} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {[
            { icon: Trophy, prefix: "€", to: 235, suffix: "k+", l: de ? "Spendenmittel mobilisiert (Mai 2026)" : "Funds mobilised (May 2026)" },
            { icon: NetworkIcon, prefix: "", to: 4, suffix: "", l: de ? "Akademische Forschungspartner" : "Academic research partners" },
            { icon: FlaskConical, prefix: "", to: 6, suffix: "", l: de ? "ASO-Kandidaten identifiziert" : "ASO candidates identified" },
            { icon: Users, prefix: "", to: 52, suffix: "+", l: de ? "Familien im Register weltweit" : "Families in the registry worldwide" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 120}>
              <div className="bg-card border border-border rounded-2xl p-7 h-full hover:-translate-y-2 hover:shadow-xl hover:border-amber transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-amber/15 text-amber flex items-center justify-center mb-4 group-hover:bg-amber group-hover:text-navy group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <s.icon className="w-8 h-8" />
                </div>
                <p className="font-display text-4xl font-bold text-navy">
                  {s.prefix}<Counter to={s.to} duration={2000} />{s.suffix}
                </p>
                <p className="text-sm text-foreground/70 mt-2 leading-snug">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/80">
              {de
                ? "Als Reinhard und Edith Pell die Diagnose ihres Sohnes Simon erhielten, gab es für MCOPS12 weder eine Behandlung noch eine etablierte Forschungsinfrastruktur. Innerhalb weniger Monate gründeten sie Cure MCOPS12 und begannen, Forschende, Kliniker:innen und andere betroffene Familien zu vernetzen – mit dem Ziel, aus einer ultra-seltenen Diagnose ein konkretes Forschungsprogramm zu machen."
                : "When Reinhard and Edith Pell received their son Simon's diagnosis, MCOPS12 had no treatment and no established research infrastructure. Within months they founded Cure MCOPS12 and began connecting researchers, clinicians and other affected families — with one goal: to turn an ultra-rare diagnosis into a concrete research program."}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg leading-relaxed text-foreground/80">
              {de
                ? "Heute koordiniert Cure MCOPS12 ein internationales Forschungsnetzwerk, finanziert präklinische Studien mit und ist Hauptträger einer personalisierten ASO-Therapie, die in der entscheidenden Toxizitätsphase steht. Jeder Schritt war ein Meilenstein, der ohne ehrenamtliches Engagement, Spender:innen und wissenschaftliche Partner nicht möglich gewesen wäre."
                : "Today, Cure MCOPS12 coordinates an international research network, co-funds preclinical studies, and is the driving force behind a personalised ASO therapy now in its critical toxicity phase. Every step has been a milestone — none of which would have been possible without volunteers, donors and scientific partners."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-to-br from-navy to-navy-deep text-white py-20">
        <div className="container-tight">
          <SectionTitle light eyebrow={de ? "ASO-Programm" : "ASO program"} title={de ? "Simons personalisierte ASO-Therapie – Stand der Dinge" : "Simon's Personalized ASO Therapy — Where We Stand"} />
          <Reveal>
            <p className="text-lg text-white/85 leading-relaxed max-w-3xl">
              {de
                ? "Gemeinsam mit AlphaRose RareLabs (USA), IGBMC (Frankreich) und CHU Sainte-Justine (Kanada) haben wir eine Antisense-Oligonukleotid-Therapie entwickelt, die genau auf Simons RARB-Mutation zielt. Sechs sichere und wirksame Kandidaten wurden im zellulären Modell identifiziert. Aktuell läuft die entscheidende Toxizitätsstudie, in der die Verträglichkeit für die spätere Anwendung am Menschen geprüft wird. Dieser N-of-1-Ansatz dient zugleich als Modell für weitere MCOPS12-Patient:innen weltweit – das Verfahren lässt sich auf andere Mutationen übertragen."
                : "In collaboration with AlphaRose RareLabs (US), IGBMC (France), and CHU Sainte-Justine (Canada), we have developed an antisense oligonucleotide therapy targeting Simon's specific RARB mutation. Six safe and efficacious ASO candidates were identified in a cellular disease model. We are now conducting the critical toxicity study to identify the safest ASO for first-in-human administration. This N-of-1 approach also serves as a blueprint for other MCOPS12 patients worldwide — the methodology can be adapted to other mutations."}
            </p>
          </Reveal>

          <Timeline items={milestones} de={de} />
        </div>
      </section>

      <section className="container-wide py-20">
        <SectionTitle eyebrow={de ? "Über das ASO-Programm hinaus" : "Beyond the ASO program"} title={de ? "Weitere Meilensteine" : "Further milestones"} />
        <div className="grid md:grid-cols-3 gap-6">
          {(de ? [
            { i: NetworkIcon, t: "Internationales Forschungsnetzwerk", d: "Aufbau eines koordinierten Netzwerks mit Forschungspartnern in Frankreich, Kanada und den USA – gemeinsame Arbeit an Krankheitsmodellen, Wirkstoffen und ASO-Design." },
            { i: Microscope, t: "Natural History Study", d: "Etablierung des ersten internationalen MCOPS12-Patientenregisters – die regulatorische Voraussetzung für jede klinische Studie." },
            { i: FlaskConical, t: "Wirkstoff-Repurposing", d: "Sechs bereits klinisch erprobte Substanzen werden in MCOPS12-Mausmodellen getestet – als möglicher schneller Weg zu Symptomtherapien." },
            { i: Users, t: "Familien-Community", d: "Aufbau einer aktiven globalen Community mit jährlichen Konferenzen, etwa am CHU Sainte-Justine in Montréal." },
            { i: Globe2, t: "Behördliche Anerkennung", d: "Aktive Mitwirkung in nationalen und EU-weiten Allianzen für seltene Erkrankungen (Pro Rare Austria, EURORDIS)." },
            { i: Award, t: "Wissenschaftlicher Beirat", d: "Etablierung eines internationalen Scientific Advisory Boards mit führenden Expert:innen aus Genetik, Neurologie und Wirkstoffentwicklung." },
          ] : [
            { i: NetworkIcon, t: "International consortium", d: "Built and funded RAinRARE: four research groups in France, Canada and Switzerland working in coordinated fashion on disease models, drugs and biomarkers." },
            { i: Microscope, t: "Natural History Study", d: "Established the first international MCOPS12 patient registry — the regulatory prerequisite for any clinical trial." },
            { i: FlaskConical, t: "Drug repurposing", d: "Six clinically validated compounds are being tested in MCOPS12 mouse models as a potential fast track to symptomatic treatments." },
            { i: Users, t: "Family community", d: "Built an active global community with annual conferences, including at CHU Sainte-Justine in Montréal." },
            { i: Globe2, t: "Regulatory voice", d: "Active participation in national and EU-wide rare-disease alliances (Pro Rare Austria, EURORDIS)." },
            { i: Award, t: "Scientific Advisory Board", d: "Established an international Scientific Advisory Board with leading experts in genetics, neurology and drug development." },
          ]).map((b, i) => (
            <Reveal key={b.t} delay={i * 100}>
              <div className="bg-card border border-border rounded-2xl p-7 h-full hover:-translate-y-2 hover:shadow-xl hover:border-teal transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-4 group-hover:bg-teal group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <b.i className="w-8 h-8" />
                </div>
                <h4 className="font-display text-xl font-bold text-navy mb-2">{b.t}</h4>
                <p className="text-foreground/75 leading-relaxed">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function Timeline({ items, de }: { items: typeof milestones; de: boolean }) {
  const { ref, inView } = useInView<HTMLOListElement>({ threshold: 0.1 });
  return (
    <ol ref={ref} className="mt-12 relative pl-8 space-y-10">
      <span
        aria-hidden
        className="absolute left-0 top-0 w-[3px] bg-gradient-to-b from-amber to-amber/30 rounded-full"
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
          <span className="absolute -left-[38px] top-0 w-7 h-7 rounded-full bg-amber border-4 border-navy-deep shadow-[0_0_0_4px_hsl(var(--amber)/0.25)] flex items-center justify-center">
            {i === items.length - 1 ? <Target className="w-3.5 h-3.5 text-navy" /> : null}
          </span>
          <p className="text-amber font-display text-2xl font-bold">{m.y}</p>
          <p className="text-white/85 mt-1 text-lg">{de ? m.de : m.en}</p>
        </li>
      ))}
    </ol>
  );
}
