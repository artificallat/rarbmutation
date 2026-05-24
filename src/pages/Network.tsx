import { ExternalLink, Globe2, Users, HeartHandshake, Network as NetworkIcon, Database, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import { Reveal, Counter } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";
import conferencePhoto from "@/assets/rarb-conference.jpg";
import sophiaLogo from "@/assets/partners/sophia.png";
import siennaLogo from "@/assets/partners/sienna.jpg";
import igbmcLogo from "@/assets/partners/igbmc.png";
import chusjLogo from "@/assets/partners/chusj.png";
import alpharoseLogo from "@/assets/partners/alpharose.png";
import prorareLogo from "@/assets/partners/prorare.svg";
import eurordisLogo from "@/assets/partners/eurordis.png";

const sisters = [
  { n: "A Cure for Sophia and Friends", u: "https://www.acureforsophiaandfriends.com/", c: "USA", logo: sophiaLogo },
  { n: "A Cure for Sienna", u: "https://www.facebook.com/acureforsienna/", c: "Australia", logo: siennaLogo },
];

const memberships = [
  { n: "Pro Rare Austria", u: "https://www.prorare-austria.org/", logo: prorareLogo, d: { en: "Austrian umbrella alliance for rare disease patient organisations.", de: "Österreichische Allianz für Patientenorganisationen seltener Erkrankungen." } },
  { n: "EURORDIS", u: "https://www.eurordis.org/", logo: eurordisLogo, d: { en: "European federation representing rare disease patient organisations across Europe.", de: "Europäischer Dachverband der Patientenorganisationen für seltene Erkrankungen." } },
];

export default function Network({ lang }: { lang: Lang }) {
  const de = lang === "de";
  const base = de ? "/de" : "";

  const scientific = [
    {
      logo: igbmcLogo,
      name: "IGBMC",
      sub: "Institut de génétique et de biologie moléculaire et cellulaire",
      country: de ? "Frankreich" : "France",
      lead: "Dr. Wojciech Krezel",
      role: de ? "Research Director, Department of Brain Development and Physiology" : "Research Director, Department of Brain Development and Physiology",
      url: "https://www.igbmc.fr/en/recherche/teams/brain-development-and-physiology",
    },
    {
      logo: chusjLogo,
      name: "Centre de recherche Azrieli du CHU Sainte-Justine",
      sub: "Université de Montréal",
      country: de ? "Kanada" : "Canada",
      lead: "Prof. Jacques L. Michaud, MD, FRCP",
      role: de ? "Direktor, Centre de recherche Azrieli du CHU Sainte-Justine; Professor für Pädiatrie und Neurowissenschaften, Université de Montréal" : "Director, Centre de recherche Azrieli du CHU Sainte-Justine; Professor of Pediatrics and Neurosciences, Université de Montréal",
      url: "https://research.chusj.org/en/Home",
    },
    {
      logo: alpharoseLogo,
      name: "RareLabs",
      sub: "A division of AlphaRose Therapeutics",
      country: "USA",
      lead: "Dr. Rodney A. Bowling Jr.",
      role: de ? "Chief Scientific Officer, RareLabs (A Division of AlphaRose Therapeutics)" : "Chief Scientific Officer, RareLabs (A Division of AlphaRose Therapeutics)",
      url: "https://hopeatrarelabs.com/",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={de ? "Gemeinsam stark" : "Stronger together"}
        title={de ? "Das Netzwerk" : "The Network"}
        sub={de
          ? "Wir arbeiten weltweit mit Patientenorganisationen, akademischen Instituten und Forschungsallianzen zusammen, um die Forschung zu MCOPS12 voranzutreiben und betroffene Familien zu unterstützen."
          : "We collaborate worldwide with patient organisations, academic institutes and research alliances to advance MCOPS12 research and support affected families."}
      />

      <section className="container-wide pb-12">
        <Reveal>
          <figure className="mb-12 rounded-3xl overflow-hidden border border-border group">
            <img
              src={conferencePhoto}
              alt={de ? "RARB-Familienkonferenz am CHU Sainte-Justine" : "RARB family conference at CHU Sainte-Justine"}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <figcaption className="bg-card text-sm text-foreground/70 px-5 py-3">
              {de
                ? "RARB-Familienkonferenz am CHU Sainte-Justine, Montréal — Familien, Forschende und Kliniker:innen vereint."
                : "RARB family conference at CHU Sainte-Justine, Montréal — families, researchers and clinicians united."}
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Reveal delay={0}>
            <Stat icon={<Globe2 className="w-10 h-10" />}>
              <Counter to={3} duration={1400} className="font-display text-5xl font-bold text-navy" />
              <p className="text-sm text-foreground/70 mt-2">{de ? "Kontinente vernetzt" : "Continents connected"}</p>
            </Stat>
          </Reveal>
          <Reveal delay={150}>
            <Stat icon={<Users className="w-10 h-10" />}>
              <span className="font-display text-5xl font-bold text-navy">
                <Counter to={52} duration={1800} />+
              </span>
              <p className="text-sm text-foreground/70 mt-2">{de ? "Familien dokumentiert weltweit" : "Documented families worldwide"}</p>
            </Stat>
          </Reveal>
          <Reveal delay={300}>
            <Stat icon={<HeartHandshake className="w-10 h-10" />}>
              <span className="font-display text-5xl font-bold text-navy">
                €<Counter to={235} duration={2200} />k+
              </span>
              <p className="text-sm text-foreground/70 mt-2">{de ? "Gemeinsam gesammelt (Mai 2026)" : "Raised together (May 2026)"}</p>
            </Stat>
          </Reveal>
        </div>

        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/80 max-w-4xl">
            {de
              ? <>Nach der Gründung von <strong className="text-navy">Cure MCOPS12</strong> im Jahr 2020 haben wir ein globales Netzwerk aus betroffenen Familien und Forschenden aufgebaut. Wir sind stolz auf die Zusammenarbeit mit <strong className="text-navy">A Cure for Sophia and Friends</strong> in den USA und <strong className="text-navy">A Cure for Sienna</strong> in Australien — vereint durch eine gemeinsame Mission: Bewusstsein schaffen und Mittel sammeln, um wissenschaftliche Forschung und Wirkstoffentwicklung zu unterstützen, die schließlich zu einer Heilung für MCOPS12-Patient:innen führt.</>
              : <>After establishing <strong className="text-navy">Cure MCOPS12</strong> in 2020, we built a global network of patient advocates and researchers. We are proud to collaborate with <strong className="text-navy">A Cure for Sophia and Friends</strong> in the United States and <strong className="text-navy">A Cure for Sienna</strong> in Australia, united by a shared mission: raise awareness and fundraising to support scientific research and drug development that will ultimately result in a cure for MCOPS12 patients.</>}
          </p>
        </Reveal>
      </section>

      {/* Sister organisations */}
      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionTitle eyebrow={de ? "Schwesterorganisationen" : "Sister organisations"} title={de ? "Patientenorganisationen weltweit" : "Patient organisations worldwide"} />
          <div className="grid sm:grid-cols-2 gap-6">
            {sisters.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <a href={p.u} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-6 flex items-center gap-5 hover:border-teal hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-20 h-20 shrink-0 rounded-xl bg-white border border-border flex items-center justify-center overflow-hidden">
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
      <section className="container-wide py-20">
        <SectionTitle eyebrow={de ? "Wissenschaftliches Netzwerk" : "Scientific Network"} title={de ? "Akademische und industrielle Partner" : "Academic and industry partners"} />
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/80 max-w-4xl mb-12">
            {de
              ? "Wir haben ein globales wissenschaftliches Netzwerk mit akademischen Institutionen (in Frankreich und Kanada) und einem Biotech-Unternehmen in den USA aufgebaut, um die Grundlagenforschung voranzutreiben und Therapien für MCOPS12 zu entwickeln."
              : "We have established a global scientific network with academic institutions (in France and Canada) and a biotech company in the USA to foster fundamental research and develop therapies for MCOPS12."}
          </p>
        </Reveal>

        <div className="space-y-6">
          {scientific.map((s, i) => (
            <Reveal key={s.name} delay={i * 120}>
              <article className="bg-card border border-border rounded-2xl p-6 sm:p-8 grid md:grid-cols-[200px_1fr_auto] gap-6 items-center hover:border-teal hover:shadow-xl transition-all duration-300 group">
                <div className="w-full h-28 rounded-xl bg-white border border-border flex items-center justify-center overflow-hidden">
                  <img src={s.logo} alt={s.name} className="max-w-full max-h-full object-contain p-3" loading="lazy" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">{s.country}</p>
                  <h3 className="font-display text-xl font-bold text-navy leading-tight">{s.name}</h3>
                  <p className="text-sm text-foreground/60">{s.sub}</p>
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
          <p className="text-foreground/75 mt-10 max-w-4xl">
            {de ? "Mehr zu unseren bisherigen und laufenden Programmen findest du unter " : "To learn more about our past and current programs, have a look at "}
            <Link to={`${base}/research`} className="text-teal font-semibold hover:underline">{de ? "Forschung & Wirkstoffentwicklung" : "Research and Drug Development"}</Link>.
          </p>
        </Reveal>
      </section>

      {/* Memberships */}
      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionTitle eyebrow={de ? "Mitgliedschaften" : "Memberships"} title={de ? "Allianzen für seltene Erkrankungen" : "Rare disease alliances"} />
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/80 max-w-4xl mb-10">
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
                    <p className="text-sm text-foreground/70 leading-relaxed mt-1">{p.d[lang]}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-teal shrink-0 group-hover:translate-x-1 transition-transform" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20">
        <SectionTitle eyebrow={de ? "Was unser Netzwerk leistet" : "What our network delivers"} title={de ? "Vom Kontakt zur Therapie" : "From contact to therapy"} />
        <div className="grid md:grid-cols-3 gap-6">
          {(de ? [
            { i: NetworkIcon, t: "Familien finden Familien", d: "Über soziale Medien, Genetiker:innen und Konferenzen identifizieren wir neu diagnostizierte Familien und verbinden sie mit der Community. Niemand soll mit dieser Diagnose allein bleiben." },
            { i: Database, t: "Daten bündeln", d: "Wir koordinieren die Natural History Study, harmonisieren Outcome-Messungen und schaffen die Datenbasis, die Behörden für klinische Studien verlangen." },
            { i: Megaphone, t: "Forschung finanzieren", d: "Spendenmittel aller Schwesterorganisationen fließen in dieselben Forschungsprogramme – das vermeidet Doppelarbeit und beschleunigt Fortschritt." },
          ] : [
            { i: NetworkIcon, t: "Families find families", d: "Through social media, geneticists, and conferences we identify newly diagnosed families and connect them to the community. No family should be alone with this diagnosis." },
            { i: Database, t: "Pooling data", d: "We coordinate the Natural History Study, harmonise outcome measures, and build the data foundation regulators require for clinical trials." },
            { i: Megaphone, t: "Funding research", d: "Donations from all sister organisations flow into the same research programs — avoiding duplication and accelerating progress." },
          ]).map((b, i) => (
            <Reveal key={b.t} delay={i * 150}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:-translate-y-2 hover:shadow-xl hover:border-teal transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <b.i className="w-8 h-8" />
                </div>
                <h4 className="font-display text-xl font-bold text-navy mb-2">{b.t}</h4>
                <p className="text-foreground/75 leading-relaxed">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function Stat({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl hover:border-teal transition-all duration-300 group">
      <div className="w-16 h-16 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">{icon}</div>
      {children}
    </div>
  );
}
