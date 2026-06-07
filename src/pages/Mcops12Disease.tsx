import { ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero, HeroAccent } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import rarbMutation from "@/assets/rarb-mutation.jpg";

export default function Mcops12Disease({ lang }: { lang: Lang }) {
  const de = lang === "de";
  const refs = [
    { label: "Srour et al. 2016 — Human Mutation", href: "https://onlinelibrary.wiley.com/doi/10.1002/humu.23004" },
    { label: "Srour et al. 2013 — original description", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3791254/" },
    { label: "Caron et al. 2023 — systematic review", href: "https://www.gimjournal.org/article/S1098-3600(23)00869-9/fulltext" },
    { label: "Trieschmann et al. 2023 — clinical features", href: "https://www.sciencedirect.com/science/article/abs/pii/S1769721223001088?via%3Dihub" },
  ];

  const features = de
    ? ["Augenfehlbildungen wie Mikrophthalmie", "niedriger Muskeltonus", "Dystonie und/oder Spastik", "Sprach- und Entwicklungsverzögerung", "Fütter- und Schluckprobleme", "sehr variable Ausprägung"]
    : ["Eye anomalies such as microphthalmia", "low muscle tone", "dystonia and/or spasticity", "language and developmental delay", "feeding and swallowing difficulties", "highly variable severity"];

  return (
    <>
      <PageHero
        eyebrow={de ? "Die Krankheit" : "The disease"}
        title={de ? <><HeroAccent>MCOPS12</HeroAccent> als Erkrankung</> : <><HeroAccent>MCOPS12</HeroAccent> as a disease</>}
        sub={de
          ? "Diese Seite beschreibt, wie sich MCOPS12 zeigt, was bisher wissenschaftlich bekannt ist und warum die Erkrankung oft schwer zu erkennen ist."
          : "This page explains how MCOPS12 presents clinically, what is known from the literature and why the condition is often difficult to recognize."}
      />

      <section className="container-tight pb-16">
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              {de
                ? <>Syndromale Mikrophthalmie 12 (MCOPS12) ist eine ultra-seltene neurologische Entwicklungsstörung. Sie wurde 2013 erstmals medizinisch beschrieben; 2016 wurde <em>RARB</em> als verursachendes Gen bestätigt.</>
                : <>Syndromic Microphthalmia 12 (MCOPS12) is an ultra-rare neurodevelopmental disorder. It was first described in the medical literature in 2013; in 2016, <em>RARB</em> was confirmed as the disease-causing gene.</>}
            </p>
            <p>
              {de
                ? "Das bisher umfassendste systematische Review aus dem Jahr 2023 konnte klinische Daten von nur 52 Patient:innen weltweit zusammenfassen. Viele betroffene Kinder werden vermutlich gar nicht diagnostiziert oder zunächst einer anderen Entwicklungsstörung zugeordnet."
                : "The most comprehensive systematic review to date, published in 2023, summarized clinical data from only 52 individuals worldwide. Many affected children are likely undiagnosed or first assigned to another neurodevelopmental diagnosis."}
            </p>
            <p>
              {de
                ? "Bis heute gibt es keine zugelassene Therapie für MCOPS12. Die Kombination und Schwere der Symptome unterscheidet sich stark zwischen einzelnen Kindern."
                : "There is currently no approved treatment for MCOPS12. The combination and severity of symptoms can differ widely between individual children."}
            </p>
          </div>
          <figure className="rounded-2xl overflow-hidden border border-border bg-muted">
            <img src={rarbMutation} alt={de ? "Punktmutation im RARB-Gen" : "Point mutation in the RARB gene"} className="w-full aspect-square object-cover" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="container-tight pb-16">
        <div className="bg-navy text-white rounded-3xl p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold mb-4">{de ? "Häufige Merkmale" : "Common features"}</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-white/90">
            {features.map(feature => (
              <li key={feature} className="flex gap-3">
                <span className="text-amber font-bold mt-1">●</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container-tight">
          <SectionTitle eyebrow={de ? "Quellen" : "References"} title={de ? "Wissenschaftliche Literatur" : "Scientific literature"} />
          <div className="grid sm:grid-cols-2 gap-4">
            {refs.map(ref => (
              <a key={ref.href} href={ref.href} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-5 flex items-center justify-between hover:border-teal transition group">
                <span className="font-semibold text-navy group-hover:text-teal transition">{ref.label}</span>
                <ExternalLink className="w-4 h-4 text-teal shrink-0 ml-3" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}