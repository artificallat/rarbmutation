import { PageHero } from "./WhoWeAre";
import type { Lang } from "@/content/site";

export default function JoinNaturalHistoryStudy({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Familien" : "Families"}
        title={lang === "de" ? "Am Natural History Study teilnehmen" : "Join the Natural History Study"}
      />
      <section className="container-tight pb-20">
        <p className="text-foreground/80 leading-relaxed text-lg">
          Content coming soon.
        </p>
      </section>
    </>
  );
}
