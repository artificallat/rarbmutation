import { ExternalLink, Globe2, Users, HeartHandshake } from "lucide-react";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import conferencePhoto from "@/assets/rarb-conference.jpg";

const network = [
  { n: "A Cure for Sophia & Friends", u: "https://www.acureforsophiaandfriends.com/", c: "USA" },
  { n: "A Cure for Sienna", u: "https://www.facebook.com/acureforsienna/", c: "Australia" },
];
const alliances = [
  { n: "Pro Rare Austria", u: "https://www.prorare-austria.org/", d: { en: "Austrian umbrella alliance for rare disease patient organisations.", de: "Österreichische Allianz für Patientenorganisationen seltener Erkrankungen." } },
  { n: "Selbsthilfe Salzburg", u: "https://www.selbsthilfe-salzburg.at/", d: { en: "Regional self-help network supporting families and patient groups in Salzburg.", de: "Regionales Selbsthilfe-Netzwerk in Salzburg für Familien und Patient:innengruppen." } },
  { n: "EURORDIS", u: "https://www.eurordis.org/", d: { en: "European federation representing 1,000+ rare disease organisations across 74 countries.", de: "Europäischer Dachverband mit über 1.000 Mitgliedsorganisationen aus 74 Ländern." } },
];

export default function Network({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero
        eyebrow={de ? "Gemeinsam stark" : "Stronger together"}
        title={de ? "Das Netzwerk" : "The Network"}
        sub={de
          ? "Wir arbeiten weltweit mit Patientenorganisationen, Forschungsallianzen und Selbsthilfegruppen zusammen, um die Forschung zu MCOPS12 voranzutreiben und betroffene Familien zu unterstützen."
          : "We collaborate with patient organisations, research alliances, and self-help groups around the world to advance MCOPS12 research and support affected families."}
      />

      <section className="container-wide pb-12">
        <figure className="mb-12 rounded-3xl overflow-hidden border border-border">
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

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Stat icon={<Globe2 className="w-5 h-5" />} value="3" label={de ? "Kontinente vernetzt" : "Continents connected"} />
          <Stat icon={<Users className="w-5 h-5" />} value="52+" label={de ? "Familien dokumentiert weltweit" : "Documented families worldwide"} />
          <Stat icon={<HeartHandshake className="w-5 h-5" />} value="€235k+" label={de ? "Gemeinsam gesammelt (Mai 2026)" : "Raised together (May 2026)"} />
        </div>

        <SectionTitle eyebrow={de ? "Warum Netzwerke entscheidend sind" : "Why networks matter"} title={de ? "Eine ultra-seltene Krankheit braucht eine globale Antwort" : "An ultra-rare disease demands a global response"} />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          <p className="text-lg leading-relaxed text-foreground/80">
            {de
              ? "Bei einer Krankheit, die weltweit nur bei rund 52 dokumentierten Patient:innen auftritt, ist keine einzelne Familie und keine einzelne Forschungsgruppe in der Lage, eine Therapie allein zu entwickeln. Patient:innenzahlen sind zu klein, finanzielle Mittel zu begrenzt, und das Wissen ist über Kontinente verstreut. Erst durch internationale Vernetzung lassen sich Daten bündeln, Doppelarbeit vermeiden und kritische Massen für klinische Studien erreichen."
              : "For a disease with only ~52 documented patients worldwide, no single family and no single research group can develop a therapy alone. Patient numbers are too small, funds too limited, and knowledge scattered across continents. International collaboration is the only way to pool data, avoid duplication, and reach the critical mass required for clinical trials."}
          </p>
          <p className="text-lg leading-relaxed text-foreground/80">
            {de
              ? "Unser Netzwerk verbindet Eltern, Kliniker:innen, Genetiker:innen und Pharma-Spezialist:innen. Wir teilen Patient:innendaten (anonymisiert), gemeinsame Standards für Diagnostik und Outcome-Messung sowie Erfahrungen aus dem Alltag. So entsteht aus 52 verstreuten Schicksalen eine Forschungs-Community, die ernst genommen wird – von Behörden, Forschungsförderern und der pharmazeutischen Industrie."
              : "Our network connects parents, clinicians, geneticists, and drug development specialists. We share (de-identified) patient data, common diagnostic and outcome standards, and the lived experience of daily care. This turns 52 scattered cases into a research community that regulators, funders, and the pharmaceutical industry can take seriously."}
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionTitle eyebrow={de ? "Schwesterorganisationen" : "Sister organisations"} title={de ? "Patientenorganisationen weltweit" : "Patient organisations worldwide"} />
          <p className="text-lg max-w-3xl text-foreground/80 mb-8 leading-relaxed">
            {de
              ? "Wir sind stolz auf unsere enge Partnerschaft mit A Cure for Sophia and Friends (USA) und A Cure for Sienna (Australien). Drei Familien auf drei Kontinenten, vereint durch eine gemeinsame Mission: dieselben RARB-Mutationen, dieselben Forschungsfragen, dieselbe Hoffnung. Gemeinsam haben wir bisher über €235.000 (Stand Mai 2026) für engagierte Forschungs- und Wirkstoffentwicklungsprogramme gesammelt – jeder Euro fließt direkt in die Wissenschaft."
              : "We are proud of our close partnership with A Cure for Sophia and Friends (USA) and A Cure for Sienna (Australia). Three families on three continents, united by one mission: the same RARB mutations, the same research questions, the same hope. Together, we have raised more than €235,000 (as of May 2026) for dedicated research and drug development programs — every euro goes directly into science."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {network.map(p => (
              <a key={p.n} href={p.u} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-6 flex items-center justify-between hover:border-teal transition group">
                <div>
                  <p className="font-display font-semibold text-navy">{p.n}</p>
                  <p className="text-sm text-foreground/60 mt-1">{p.c}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-teal group-hover:translate-x-0.5 transition" />
              </a>
            ))}
          </div>

          <SectionTitle eyebrow={de ? "Allianzen" : "Alliances"} title={de ? "Mitgliedschaften & Dachverbände" : "Memberships & umbrella organisations"} />
          <p className="text-lg max-w-3xl text-foreground/80 mb-8 leading-relaxed">
            {de
              ? "Über unsere Mitgliedschaften in nationalen und europäischen Dachverbänden bringen wir die Stimme der MCOPS12-Familien in Gesundheitspolitik, Forschungsförderung und regulatorische Prozesse ein – dort, wo Entscheidungen über seltene Erkrankungen getroffen werden."
              : "Through our memberships in national and European umbrella organisations, we bring the voice of MCOPS12 families into health policy, research funding, and regulatory processes — where the decisions about rare diseases are actually made."}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {alliances.map(p => (
              <a key={p.n} href={p.u} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-5 hover:border-teal transition group">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-display font-semibold text-navy">{p.n}</span>
                  <ExternalLink className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.d[lang]}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20">
        <SectionTitle eyebrow={de ? "Was unser Netzwerk leistet" : "What our network delivers"} title={de ? "Vom Kontakt zur Therapie" : "From contact to therapy"} />
        <div className="grid md:grid-cols-3 gap-6">
          {(de ? [
            { t: "Familien finden Familien", d: "Über soziale Medien, Genetiker:innen und Konferenzen identifizieren wir neu diagnostizierte Familien und verbinden sie mit der Community. Niemand soll mit dieser Diagnose allein bleiben." },
            { t: "Daten bündeln", d: "Wir koordinieren die Natural History Study, harmonisieren Outcome-Messungen und schaffen die Datenbasis, die Behörden für klinische Studien verlangen." },
            { t: "Forschung finanzieren", d: "Spendenmittel aller Schwesterorganisationen fließen in dieselben Forschungsprogramme – das vermeidet Doppelarbeit und beschleunigt Fortschritt." },
          ] : [
            { t: "Families find families", d: "Through social media, geneticists, and conferences we identify newly diagnosed families and connect them to the community. No family should be alone with this diagnosis." },
            { t: "Pooling data", d: "We coordinate the Natural History Study, harmonise outcome measures, and build the data foundation regulators require for clinical trials." },
            { t: "Funding research", d: "Donations from all sister organisations flow into the same research programs — avoiding duplication and accelerating progress." },
          ]).map(b => (
            <div key={b.t} className="bg-card border border-border rounded-2xl p-6">
              <h4 className="font-display text-lg font-bold text-navy mb-2">{b.t}</h4>
              <p className="text-foreground/75 leading-relaxed text-sm">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="w-10 h-10 rounded-full bg-teal/10 text-teal flex items-center justify-center mb-3">{icon}</div>
      <p className="font-display text-3xl font-bold text-navy">{value}</p>
      <p className="text-sm text-foreground/70 mt-1">{label}</p>
    </div>
  );
}
