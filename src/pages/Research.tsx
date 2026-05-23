import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";

export default function Research({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero
        eyebrow={de ? "Forschung" : "Research"}
        title={de ? "Forschung" : "Research"}
      />
      <section className="container-tight py-20">
        <div className="bg-card border border-border rounded-3xl p-10 text-center">
          <p className="font-display text-2xl text-navy">
            {de ? "Diese Seite wird gerade überarbeitet." : "Currently under revision."}
          </p>
        </div>
      </section>
    </>
  );
}
