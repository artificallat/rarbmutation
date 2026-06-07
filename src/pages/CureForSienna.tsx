import { ExternalLink } from "lucide-react";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import siennaLogo from "@/assets/partners/sienna.jpg";

export default function CureForSienna({ lang }: { lang: Lang }) {
  const de = lang === "de";

  return (
    <>
      <PageHero
        eyebrow={de ? "Schwesterorganisation" : "Sister organization"}
        title={<>A Cure for <HeroAccent>Sienna</HeroAccent></>}
        sub={de
          ? "Die australische Non-Profit-Organisation wurde 2022 gegründet und ist ein zentraler Teil der internationalen MCOPS12-Community."
          : "This Australian non-profit was founded in 2022 and is a central part of the international MCOPS12 community."}
      />

      <section className="container-tight pb-20">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
          <div className="bg-card border border-border rounded-2xl p-8 flex items-center justify-center">
            <img src={siennaLogo} alt="A Cure for Sienna logo" className="max-h-44 w-auto object-contain" loading="lazy" />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              {de
                ? "A Cure for Sienna bringt Familien, Unterstützer:innen und Forschende in Australien zusammen, um MCOPS12 bekannter zu machen und konkrete Forschungsarbeit zu finanzieren."
                : "A Cure for Sienna brings families, supporters and researchers in Australia together to raise awareness for MCOPS12 and fund concrete research work."}
            </p>
            <p>
              {de
                ? "Gemeinsam mit Cure MCOPS12 und A Cure for Sophia and Friends unterstützt die Organisation unter anderem die Natural History Study und hilft dabei, die internationale Patient:innen-Community stärker zu verbinden."
                : "Together with Cure MCOPS12 and A Cure for Sophia and Friends, the organization supports the Natural History Study and helps connect the international patient community more closely."}
            </p>
            <a href="https://www.facebook.com/acureforsienna/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-teal font-semibold hover:underline">
              {de ? "Seite öffnen" : "Visit page"} <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}