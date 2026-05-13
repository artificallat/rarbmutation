import { Link } from "react-router-dom";
import { PageHero } from "./WhoWeAre";
import type { Lang } from "@/content/site";

export default function PlainLanguageMcops12({ lang }: { lang: Lang }) {
  const p = lang === "de" ? "/de" : "";
  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Familien" : "Families"}
        title={lang === "de" ? "Was ist MCOPS12? — Leicht verständlich" : "What is MCOPS12? — In Plain Language"}
      />
      <section className="container-tight pb-20 space-y-5 text-foreground/80 leading-relaxed text-lg">
        <p>
          MCOPS12 (also called RARB-related disorder) is an ultra-rare condition that affects how the brain and eyes develop. It is caused by a change (mutation) in a gene called <strong>RARB</strong>.
        </p>
        <p>Most children with MCOPS12 have some combination of:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>smaller than normal eyes (microphthalmia)</li>
          <li>low muscle tone (hypotonia)</li>
          <li>movement difficulties that get worse over time (dystonia or spasticity)</li>
          <li>delays in speaking and learning</li>
        </ul>
        <p>
          The condition affects every child differently — some children have more symptoms, others fewer. There is currently no approved treatment for MCOPS12.
        </p>
        <p>
          The RARB gene mutation usually happens spontaneously — it is not inherited from the parents in most cases.
        </p>
        <p>
          To learn more in detail, visit:{" "}
          <Link to={`${p}/what-is-mcops12`} className="text-teal font-semibold hover:underline">What is MCOPS12?</Link>
        </p>
      </section>
    </>
  );
}
