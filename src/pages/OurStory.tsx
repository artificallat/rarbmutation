import { PageHero } from "./WhoWeAre";
import type { Lang } from "@/content/site";

export default function OurStory({ lang }: { lang: Lang }) {
  const de = lang === "de";

  return (
    <>
      <PageHero
        eyebrow={de ? "Erfolge" : "Achievements"}
        title={de ? "Unsere Geschichte / Vereinsgründung" : "Our Story / Foundation"}
        sub={de
          ? "Aus Simons Diagnose entstand eine internationale Mission: Forschung ermöglichen, Familien verbinden und eine Therapie für MCOPS12 voranbringen."
          : "From Simon's diagnosis grew an international mission: enabling research, connecting families and advancing a therapy for MCOPS12."}
      />
      <section className="container-tight pb-20">
        <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
          <p>
            {de
              ? "Als Edith und Reinhard Pell 2017 Eltern von Simon wurden, war schnell spürbar, dass ihr Sohn vor besonderen Herausforderungen stehen würde. Die Suche nach Antworten führte schließlich zur genetischen Diagnose: eine Mutation im RARB-Gen, verbunden mit der ultra-seltenen Erkrankung MCOPS12."
              : "When Edith and Reinhard Pell welcomed their son Simon in 2017, it soon became clear that he was facing challenges far beyond the ordinary. The search for answers eventually led to a genetic diagnosis: a mutation in the RARB gene, associated with the ultra-rare condition MCOPS12."}
          </p>
          <p>
            {de
              ? "Damals gab es kaum Informationen, kein etabliertes Netzwerk und keine Behandlung. Aus dieser Situation heraus entstand der Entschluss, nicht abzuwarten, sondern selbst Strukturen zu schaffen: Familien finden, Wissenschaftler:innen zusammenbringen und Forschung gezielt finanzieren."
              : "At the time, there was very little information, no established network and no treatment. Instead of waiting, the family decided to build what was missing: find other families, bring scientists together and fund research with a clear therapeutic goal."}
          </p>
          <p>
            {de
              ? "Cure MCOPS12 wurde als österreichischer gemeinnütziger Verein gegründet, um genau diese Arbeit dauerhaft zu tragen. Heute ist daraus ein internationales Netzwerk entstanden — mit Schwesterorganisationen in den USA und Australien, wissenschaftlichen Partnern in mehreren Ländern und dem gemeinsamen Ziel, MCOPS12 besser zu verstehen und behandelbar zu machen."
              : "Cure MCOPS12 was founded as an Austrian non-profit association to carry this work forward. Today, that first step has grown into an international network — with sister organizations in the United States and Australia, scientific partners across several countries and a shared goal: to understand MCOPS12 and make it treatable."}
          </p>
        </div>
      </section>
    </>
  );
}
