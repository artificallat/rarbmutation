import { ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import conferencePhoto from "@/assets/rarb-conference.jpg";

const network = [
  { n: "A Cure for Sophia & Friends", u: "https://www.acureforsophiaandfriends.com/" },
  { n: "A Cure for Sienna", u: "https://www.facebook.com/acureforsienna/" },
];
const alliances = [
  { n: "Pro Rare Austria", u: "https://www.prorare-austria.org/" },
  { n: "Selbsthilfe Salzburg", u: "https://www.selbsthilfe-salzburg.at/" },
  { n: "EURORDIS", u: "https://www.eurordis.org/" },
];

export default function Network({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero
        eyebrow={de ? "Gemeinsam stark" : "Stronger together"}
        title={de ? "Das Netzwerk" : "The Network"}
        sub={de
          ? "Wir arbeiten weltweit mit Patientenorganisationen, Allianzen und Selbsthilfegruppen zusammen, um die Forschung zu MCOPS12 voranzutreiben und betroffene Familien zu unterstützen."
          : "We collaborate with patient organizations, alliances, and self-help groups around the world to advance MCOPS12 research and support affected families."}
      />

      <section className="container-wide pb-20">
        <figure className="mb-10 rounded-3xl overflow-hidden border border-border">
          <img
            src={conferencePhoto}
            alt={de ? "RARB-Familienkonferenz am CHU Sainte-Justine" : "RARB family conference at CHU Sainte-Justine"}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <figcaption className="bg-card text-sm text-foreground/70 px-5 py-3">
            {de
              ? "RARB-Familienkonferenz am CHU Sainte-Justine, Montréal — Familien, Forschende und Kliniker:innen vereint."
              : "RARB family conference at CHU Sainte-Justine, Montréal — families, researchers and clinicians united."}
          </figcaption>
        </figure>

        <p className="text-lg max-w-3xl text-foreground/80 mb-8 leading-relaxed">
          {de
            ? "Wir sind stolz auf unsere Partnerschaft mit A Cure for Sophia and Friends (USA) und A Cure for Sienna (Australien). Gemeinsam haben wir bisher über €235.000 (Stand Mai 2026) für engagierte Forschungs- und Entwicklungsprogramme gesammelt."
            : "We are proud to collaborate with A Cure for Sophia and Friends (USA) and A Cure for Sienna (Australia), united by a shared mission. Together, we have raised €235,000+ (as of May 2026) to support dedicated research and drug development programs."}
        </p>

        <SectionTitle eyebrow={de ? "Schwesterorganisationen" : "Sister organizations"} title={de ? "Partner-Organisationen" : "Partner Organizations"} />
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {network.map(p => (
            <a key={p.n} href={p.u} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-6 flex items-center justify-between hover:border-teal transition">
              <span className="font-display font-semibold text-navy">{p.n}</span>
              <ExternalLink className="w-4 h-4 text-teal" />
            </a>
          ))}
        </div>

        <h3 className="font-display text-xl font-bold text-navy mb-4">{de ? "Allianzmitgliedschaften" : "Alliance memberships"}</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {alliances.map(p => (
            <a key={p.n} href={p.u} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-5 flex items-center justify-between hover:border-teal transition">
              <span className="font-semibold text-navy text-sm">{p.n}</span>
              <ExternalLink className="w-4 h-4 text-teal" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
