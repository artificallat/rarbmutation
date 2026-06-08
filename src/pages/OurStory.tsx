import { Heart, Dna, Users, Globe2 } from "lucide-react";
import { PageHero, HeroAccent } from "./WhoWeAre";
import { Reveal, Counter } from "@/components/site/Reveal";
import { Placeholder } from "@/components/site/Bits";
import storyPhoto from "@/assets/simon-pony.jpg";
import type { Lang } from "@/content/site";

export default function OurStory({ lang }: { lang: Lang }) {
  const de = lang === "de";

  const milestones = de
    ? [
        {
          year: "2017",
          icon: Heart,
          title: "Simons Geburt",
          body: "Edith und Reinhard Pell werden Eltern von Simon. Schnell wird spürbar, dass ihr Sohn vor besonderen Herausforderungen steht — die Suche nach Antworten beginnt.",
        },
        {
          year: "2018",
          icon: Dna,
          title: "Die Diagnose: MCOPS12",
          body: "Eine genetische Analyse zeigt eine Mutation im RARB-Gen, verbunden mit der ultra-seltenen Erkrankung MCOPS12. Es gibt kaum Informationen, kein Netzwerk und keine Behandlung.",
        },
        {
          year: "2019",
          icon: Users,
          title: "Vereinsgründung Cure MCOPS12",
          body: "Statt zu warten, schafft die Familie selbst Strukturen: Cure MCOPS12 wird als österreichischer gemeinnütziger Verein gegründet — mit dem Ziel, Familien zu finden, Wissenschaftler:innen zusammenzubringen und Forschung gezielt zu finanzieren.",
        },
        {
          year: "Heute",
          icon: Globe2,
          title: "Ein internationales Netzwerk",
          body: "Aus dem ersten Schritt ist ein weltweites Netzwerk geworden — mit Schwesterorganisationen in den USA und Australien, wissenschaftlichen Partnern in mehreren Ländern und einem gemeinsamen Ziel: MCOPS12 verstehen und behandelbar machen.",
        },
      ]
    : [
        {
          year: "2017",
          icon: Heart,
          title: "Simon is born",
          body: "Edith and Reinhard Pell welcome their son Simon. It soon becomes clear that he is facing challenges far beyond the ordinary — the search for answers begins.",
        },
        {
          year: "2018",
          icon: Dna,
          title: "The diagnosis: MCOPS12",
          body: "Genetic testing reveals a mutation in the RARB gene, associated with the ultra-rare condition MCOPS12. There is very little information, no network, and no treatment.",
        },
        {
          year: "2019",
          icon: Users,
          title: "Cure MCOPS12 is founded",
          body: "Instead of waiting, the family decides to build what is missing: Cure MCOPS12 is established as an Austrian non-profit association — to find families, bring scientists together and fund research with a clear therapeutic goal.",
        },
        {
          year: "Today",
          icon: Globe2,
          title: "An international network",
          body: "That first step has grown into a global network — with sister organizations in the United States and Australia, scientific partners across several countries, and a shared goal: to understand MCOPS12 and make it treatable.",
        },
      ];

  const stats = de
    ? [
        { to: 50, suffix: "+", l: "Familien weltweit verbunden" },
        { to: 3, suffix: "", l: "Kontinente, Schwesterorganisationen" },
        { to: 4, suffix: "", l: "wissenschaftliche Programme finanziert" },
      ]
    : [
        { to: 50, suffix: "+", l: "families connected worldwide" },
        { to: 3, suffix: "", l: "continents, sister organizations" },
        { to: 4, suffix: "", l: "scientific programs funded" },
      ];

  return (
    <>
      <PageHero
        eyebrow={de ? "Erfolge" : "Achievements"}
        title={de ? <>Unsere <HeroAccent>Geschichte</HeroAccent> / Vereinsgründung</> : <>Our <HeroAccent>Story</HeroAccent> / Foundation</>}
        sub={de
          ? "Aus Simons Diagnose entstand eine internationale Mission: Forschung ermöglichen, Familien verbinden und eine Therapie für MCOPS12 voranbringen."
          : "From Simon's diagnosis grew an international mission: enabling research, connecting families and advancing a therapy for MCOPS12."}
      />

      {/* Timeline */}
      <section className="container-tight pb-20">
        <div className="relative">
          {/* vertical line */}
          <div className="hidden sm:block absolute left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-amber via-teal to-navy/30" />

          <div className="space-y-8">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.year + i} delay={i * 120}>
                  <div className="flex gap-5 sm:gap-7 group">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-amber text-navy flex items-center justify-center shadow-[var(--shadow-amber)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <div className="flex-1 bg-card border border-border rounded-2xl p-6 hover:border-teal hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                      <p className="text-xs uppercase tracking-[0.2em] text-teal font-bold">{m.year}</p>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mt-1">{m.title}</h3>
                      <p className="mt-3 text-foreground/80 leading-relaxed">{m.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 120}>
              <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <Counter
                  to={s.to}
                  suffix={s.suffix}
                  duration={1800}
                  className="font-display text-4xl sm:text-5xl font-bold text-amber"
                />
                <p className="mt-2 text-white/85 text-sm">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Photo */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Placeholder label="Simon" src={storyPhoto} className="aspect-[4/5]" />
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p className="font-display text-2xl text-navy">
                {de
                  ? "„Wir können nicht warten, bis jemand anderes eine Therapie entwickelt — also tun wir es selbst.“"
                  : "“We cannot wait for someone else to develop a treatment — so we do it ourselves.”"}
              </p>
              <p>
                {de
                  ? "Was als persönliche Suche zweier Eltern begann, ist heute ein internationaler Forschungsverbund — getragen von Familien, Wissenschaftler:innen und Unterstützer:innen auf der ganzen Welt."
                  : "What began as the personal search of two parents has become an international research effort — carried by families, scientists and supporters all over the world."}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
