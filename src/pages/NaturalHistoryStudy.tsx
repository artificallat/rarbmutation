import { PageHero } from "./WhoWeAre";
import type { Lang } from "@/content/site";

export default function NaturalHistoryStudy({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Fachkreise" : "Professionals"}
        title={lang === "de" ? "Natural History Study" : "Natural History Study"}
      />
      <section className="container-tight pb-20">
        <p className="text-foreground/80 leading-relaxed text-lg">
          Content coming soon.
        </p>
      </section>
    </>
  );
}
