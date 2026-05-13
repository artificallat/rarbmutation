import { PageHero } from "./WhoWeAre";
import type { Lang } from "@/content/site";

export default function OurStory({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Erfolge" : "Achievements"}
        title={lang === "de" ? "Unsere Geschichte / Vereinsgründung" : "Our Story / Vereinsgründung"}
      />
      <section className="container-tight pb-20">
        <p className="text-foreground/80 leading-relaxed text-lg">
          Content coming soon.
        </p>
      </section>
    </>
  );
}
