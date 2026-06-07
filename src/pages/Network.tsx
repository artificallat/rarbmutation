import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero, HeroAccent } from "@/pages/WhoWeAre";
import { Reveal } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";
import sophiaLogo from "@/assets/partners/sophia.png";
import siennaLogo from "@/assets/partners/sienna.jpg";
import igbmcLogo from "@/assets/partners/igbmc.png";
import chusjLogo from "@/assets/partners/chusj.png";
import alpharoseLogo from "@/assets/partners/alpharose.png";
import prorareLogo from "@/assets/partners/prorare.svg";
import eurordisLogo from "@/assets/partners/eurordis.png";
import networkHero from "@/assets/network-hero.png.asset.json";
import babyHero from "@/assets/network-baby.png.asset.json";

const sisters = [
  { n: "A Cure for Sophia and Friends", u: "https://www.acureforsophiaandfriends.com/", c: "USA", logo: sophiaLogo },
  { n: "A Cure for Sienna", u: "https://www.facebook.com/acureforsienna/", c: "Australia", logo: siennaLogo },
];

const memberships = [
  { n: "Pro Rare Austria", u: "https://www.prorare-austria.org/", logo: prorareLogo },
  { n: "EURORDIS", u: "https://www.eurordis.org/", logo: eurordisLogo },
];

export default function Network({ lang }: { lang: Lang }) {
  const de = lang === "de";
  const base = de ? "/de" : "";

  const scientific = [
    {
      logo: igbmcLogo,
      name: "IGBMC: Institut de génétique et de biologie moléculaire et cellulaire",
      country: de ? "Frankreich" : "France",
      lead: "Dr. Wojciech Krezel",
      role: "Research Director; Department of Brain Development and Physiology",
      url: "https://www.igbmc.fr/en/recherche/teams/brain-development-and-physiology",
    },
    {
      logo: chusjLogo,
      name: "Centre de recherche Azrieli du CHU Sainte-Justine",
      country: de ? "Kanada" : "Canada",
      lead: "Prof. Jacques L. Michaud, MD, FRCP",
      role: de
        ? "Direktor, Centre de recherche Azrieli du CHU Sainte-Justine; Professor für Pädiatrie und Neurowissenschaften, Université de Montréal"
        : "Director, Centre de recherche Azrieli du CHU Sainte-Justine; Professor of Pediatrics and Neurosciences, Université de Montréal",
      url: "https://research.chusj.org/en/Home",
    },
    {
      logo: alpharoseLogo,
      name: "RareLabs (a division of AlphaRose Therapeutics)",
      country: "USA",
      lead: "Dr. Rodney A. Bowling Jr.",
      role: "Chief Scientific Officer, RareLabs (A Division of AlphaRose Therapeutics)",
      url: "https://hopeatrarelabs.com/",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={de ? "Gemeinsam stark" : "Stronger together"}
        title={de ? <>Das <HeroAccent>Netzwerk</HeroAccent></> : <>The <HeroAccent>Network</HeroAccent></>}
        sub={de
          ? "Nach der Gründung von Cure MCOPS12 im Jahr 2020 haben wir ein globales Netzwerk aus betroffenen Familien und Forschenden aufgebaut."
          : "After establishing Cure MCOPS12 in 2020, we built a global network of patient advocates and researchers."}
      />

      {/* Hero quote: cropped baby photo + crisp HTML text (responsive) */}
      <section className="container-tight pt-4 pb-12">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-border bg-card">
              <img
                src={babyHero.url}
                alt={de ? "Kind mit Schnuller schlafend" : "Sleeping child with pacifier"}
                className="w-full aspect-square md:aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl text-navy leading-snug">
                {de
                  ? "„Wir können nicht warten, bis jemand anderes eine Behandlung entwickelt — also tun wir es selbst."
                  : "“We cannot wait for someone else to develop a treatment — so we do it ourselves."}
              </p>
              <p className="text-base sm:text-lg text-foreground/75 mt-5 leading-relaxed">
                {de
                  ? "Was als persönliche Suche zweier Eltern begann, ist heute eine internationale Forschungsinitiative — getragen von Familien, Wissenschaftler:innen und Unterstützer:innen weltweit."
                  : "What began as the personal search of two parents has become an international research effort — carried by families, scientists and supporters all over the world."}
              </p>
            </div>
          </div>
        </Reveal>
      </section>


      {/* Intro */}
      <section className="container-tight pb-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/85 max-w-4xl">
            {de
              ? <>Nach der Gründung von <strong className="text-navy">Cure MCOPS12</strong> im Jahr 2020 haben wir ein globales Netzwerk aus betroffenen Familien und Forschenden aufgebaut. Wir sind stolz auf die Zusammenarbeit mit <strong className="text-navy">A Cure for Sophia and Friends</strong> in den USA und <strong className="text-navy">A Cure for Sienna</strong> in Australien — vereint durch eine gemeinsame Mission: Bewusstsein schaffen und Mittel sammeln, um wissenschaftliche Forschung und Wirkstoffentwicklung zu unterstützen, die schließlich zu einer Heilung für MCOPS12-Patient:innen führen wird.</>
              : <>After establishing <strong className="text-navy">Cure MCOPS12</strong> in 2020, we built a global network of patient advocates and researchers. We are proud to collaborate with <strong className="text-navy">A Cure for Sophia and Friends</strong> in the United States and <strong className="text-navy">A Cure for Sienna</strong> in Australia, united by a shared mission: raise awareness and fundraising to support scientific research and drug development that will ultimately result in a cure for MCOPS12 patients.</>}
          </p>
        </Reveal>
      </section>

      {/* Sister organisations */}
      <section className="bg-muted/40 py-20">
        <div className="container-tight">
          <SectionTitle eyebrow={de ? "Schwesterorganisationen" : "Sister organisations"} title={de ? "Patientenorganisationen weltweit" : "Patient organisations worldwide"} />
          <div className="grid sm:grid-cols-2 gap-6">
            {sisters.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <a href={p.u} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-6 flex items-center gap-5 hover:border-teal hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="w-24 h-24 shrink-0 rounded-xl bg-white border border-border flex items-center justify-center overflow-hidden">
                    <img src={p.logo} alt={p.n} className="max-w-full max-h-full object-contain p-2" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-navy text-lg leading-tight">{p.n}</p>
                    <p className="text-sm text-foreground/60 mt-1">{p.c}</p>
                    <p className="text-xs text-teal mt-2 truncate group-hover:underline">{p.u.replace(/^https?:\/\//, "")}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-teal shrink-0 group-hover:translate-x-1 transition-transform" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Network */}
      <section className="container-tight py-20">
        <SectionTitle eyebrow={de ? "Wissenschaftliches Netzwerk" : "Scientific Network"} title={de ? "Akademische und industrielle Partner" : "Academic and industry partners"} />
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/85 max-w-4xl mb-12">
            {de
              ? "Wir haben ein globales wissenschaftliches Netzwerk mit akademischen Institutionen (in Frankreich und Kanada) und einem Biotech-Unternehmen in den USA aufgebaut, um die Grundlagenforschung voranzutreiben und Therapien für MCOPS12 zu entwickeln."
              : "We have established a global scientific network with academic institutions (in France and Canada) and a biotech company in the USA to foster fundamental research and develop therapies for MCOPS12."}
          </p>
        </Reveal>

        <div className="space-y-6">
          {scientific.map((s, i) => (
            <Reveal key={s.name} delay={i * 120}>
              <article className="bg-card border border-border rounded-2xl p-6 sm:p-8 grid md:grid-cols-[200px_1fr_auto] gap-6 items-center hover:border-teal hover:shadow-xl transition-all duration-300">
                <div className="w-full h-28 rounded-xl bg-white border border-border flex items-center justify-center overflow-hidden">
                  <img src={s.logo} alt={s.name} className="max-w-full max-h-full object-contain p-3" loading="lazy" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">{s.country}</p>
                  <h3 className="font-display text-xl font-bold text-navy leading-tight">{s.name}</h3>
                  <p className="text-foreground/85 pt-2"><strong>{s.lead}</strong></p>
                  <p className="text-sm text-foreground/70">{s.role}</p>
                </div>
                <a href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-teal font-semibold hover:underline shrink-0">
                  {de ? "Website" : "Visit"} <ExternalLink className="w-4 h-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-foreground/80 mt-10 max-w-4xl text-lg">
            {de ? "Mehr zu unseren bisherigen und laufenden Programmen findest du unter " : "To learn more about our past and current programs, have a look at "}
            <Link to={`${base}/research`} className="text-teal font-semibold hover:underline">{de ? "Forschung & Wirkstoffentwicklung" : "Research and Drug Development"}</Link>.
          </p>
        </Reveal>
      </section>

      {/* Memberships */}
      <section className="bg-muted/40 py-20">
        <div className="container-tight">
          <SectionTitle eyebrow={de ? "Mitgliedschaften" : "Memberships"} title={de ? "Allianzen für seltene Erkrankungen" : "Rare disease alliances"} />
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/85 max-w-4xl mb-10">
              {de
                ? "Darüber hinaus sind wir stolzes Mitglied der gemeinnützigen Allianzen für seltene Erkrankungen Pro Rare Austria und EURORDIS."
                : "Further, we are proud member of the non-profit rare disease alliances Pro Rare Austria and EURORDIS."}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {memberships.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <a href={p.u} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-6 flex items-center gap-5 hover:border-teal hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="w-20 h-20 shrink-0 rounded-xl bg-white border border-border flex items-center justify-center overflow-hidden">
                    <img src={p.logo} alt={p.n} className="max-w-full max-h-full object-contain p-2" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-navy">{p.n}</p>
                    <p className="text-xs text-teal mt-1 truncate group-hover:underline">{p.u.replace(/^https?:\/\//, "")}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-teal shrink-0 group-hover:translate-x-1 transition-transform" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
