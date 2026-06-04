import { ExternalLink } from "lucide-react";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import sophiaLogo from "@/assets/partners/sophia.png";

export default function SophiaAndFriends({ lang }: { lang: Lang }) {
  const de = lang === "de";

  return (
    <>
      <PageHero
        eyebrow={de ? "Schwesterorganisation" : "Sister organization"}
        title="A Cure for Sophia and Friends"
        sub={de
          ? "Die US-amerikanische Non-Profit-Organisation wurde 2023 gegründet und unterstützt MCOPS12-Forschung gemeinsam mit Cure MCOPS12 und A Cure for Sienna."
          : "This US-based non-profit was founded in 2023 and supports MCOPS12 research together with Cure MCOPS12 and A Cure for Sienna."}
      />

      <section className="container-tight pb-20">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
          <div className="bg-card border border-border rounded-2xl p-8 flex items-center justify-center">
            <img src={sophiaLogo} alt="A Cure for Sophia and Friends logo" className="max-h-44 w-auto object-contain" loading="lazy" />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              {de
                ? <>A Cure for Sophia and Friends entstand aus derselben Dringlichkeit, die alle MCOPS12-Familien verbindet: Forschung schneller voranzubringen, Wissen zu bündeln und Kindern mit <em>RARB</em>-Mutationen eine bessere Zukunft zu ermöglichen.</>
                : <>A Cure for Sophia and Friends grew from the same urgency shared by MCOPS12 families everywhere: to accelerate research, connect knowledge and create a better future for children affected by <em>RARB</em> mutations.</>}
            </p>
            <p>
              {de
                ? "Die Organisation ist ein wichtiger Partner bei Forschungsprojekten, Fundraising und internationaler Vernetzung. Besonders im Bereich Drug Repurposing und Patient:innen-Register trägt sie dazu bei, dass seltene Daten sichtbar und nutzbar werden."
                : "The organization is an important partner for research projects, fundraising and international collaboration. Its support helps move work forward in areas such as drug repurposing and patient registries, where every dataset matters."}
            </p>
            <a href="https://www.acureforsophiaandfriends.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-teal font-semibold hover:underline">
              {de ? "Website öffnen" : "Visit website"} <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}