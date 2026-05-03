import { SectionTitle } from "@/components/site/Bits";
import { useInView } from "@/components/site/Reveal";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";

const milestones = [
  { y: "2020", en: "Cure MCOPS12 founded", de: "Cure MCOPS12 gegründet" },
  { y: "2021", en: "Research consortium RAinRARE established (EU-funded)", de: "Forschungskonsortium RAinRARE (EU-gefördert) etabliert" },
  { y: "2022", en: "Disease models established, Natural History Study launched", de: "Krankheitsmodelle etabliert, Natural History Study gestartet" },
  { y: "2023", en: "ASO program initiated, 6 candidates identified", de: "ASO-Programm gestartet, 6 Kandidaten identifiziert" },
  { y: "2024/25", en: "Toxicity study ongoing", de: "Toxizitätsstudie läuft" },
  { y: "Goal", en: "First administration of Simon's ASO therapy", de: "Erste Verabreichung von Simons ASO-Therapie" },
];

const network = [
  { n: "A Cure for Sophia & Friends", u: "https://www.acureforsophiaandfriends.com/" },
  { n: "A Cure for Sienna", u: "https://www.facebook.com/acureforsienna/" },
];
const alliances = [
  { n: "Pro Rare Austria", u: "https://www.prorare-austria.org/" },
  { n: "Selbsthilfe Salzburg", u: "https://www.selbsthilfe-salzburg.at/" },
  { n: "EURORDIS", u: "https://www.eurordis.org/" },
];

export default function Achievements({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero eyebrow={de ? "Erfolge" : "Achievements"} title={de ? "Von der Diagnose zum Handeln" : "From Diagnosis to Action"}
        sub={de
          ? "Nach Simons Diagnose und der Gründung von Cure MCOPS12 im Jahr 2020 haben wir ein weltweites Netzwerk aus Patientenvertretungen und Forschenden aufgebaut – und finanzieren heute Spitzenforschung sowie Wirkstoffentwicklung."
          : "Following Simon's diagnosis and the founding of Cure MCOPS12 in 2020, we built a global network of patient advocates and researchers and now fund frontline research and drug development programs for MCOPS12."} />

      <section id="network" className="container-wide pb-20">
        <SectionTitle eyebrow={de ? "Gemeinsam stark" : "Stronger together"} title={de ? "Das Netzwerk" : "The Network"} />
        <figure className="mb-10 rounded-3xl overflow-hidden border border-border">
          <img src={conferencePhoto} alt={de ? "RARB-Familienkonferenz am CHU Sainte-Justine" : "RARB family conference at CHU Sainte-Justine"} className="w-full h-auto object-cover" loading="lazy" />
          <figcaption className="bg-card text-sm text-foreground/70 px-5 py-3">
            {de ? "RARB-Familienkonferenz am CHU Sainte-Justine, Montréal — Familien, Forschende und Kliniker:innen vereint." : "RARB family conference at CHU Sainte-Justine, Montréal — families, researchers and clinicians united."}
          </figcaption>
        </figure>
        <p className="text-lg max-w-3xl text-foreground/80 mb-8 leading-relaxed">
          {de
            ? "Wir sind stolz auf unsere Partnerschaft mit A Cure for Sophia and Friends (USA) und A Cure for Sienna (Australien). Gemeinsam haben wir bisher über €235.000 (Stand Mai 2026) für engagierte Forschungs- und Entwicklungsprogramme gesammelt."
            : "We are proud to collaborate with A Cure for Sophia and Friends (USA) and A Cure for Sienna (Australia), united by a shared mission. Together, we have raised €235,000+ (as of May 2026) to support dedicated research and drug development programs."}
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {network.map(p => (
            <a key={p.n} href={p.u} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-6 flex items-center justify-between hover:border-teal transition">
              <span className="font-display font-semibold text-navy">{p.n}</span><ExternalLink className="w-4 h-4 text-teal"/>
            </a>
          ))}
        </div>
        <h3 className="font-display text-xl font-bold text-navy mb-4">{de ? "Allianzmitgliedschaften" : "Alliance memberships"}</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {alliances.map(p => (
            <a key={p.n} href={p.u} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-5 flex items-center justify-between hover:border-teal transition">
              <span className="font-semibold text-navy text-sm">{p.n}</span><ExternalLink className="w-4 h-4 text-teal"/>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-navy to-navy-deep text-white py-20">
        <div className="container-tight">
          <SectionTitle light eyebrow={de ? "ASO-Programm" : "ASO program"} title={de ? "Simons personalisierte ASO-Therapie – Stand der Dinge" : "Simon's Personalized ASO Therapy — Where We Stand"} />
          <p className="text-lg text-white/85 leading-relaxed max-w-3xl">
            {de
              ? "Gemeinsam mit AlphaRose RareLabs (USA), IGBMC (Frankreich) und CHU Sainte-Justine (Kanada) haben wir eine ASO-Therapie entwickelt, die genau auf Simons RARB-Mutation zielt. Sechs sichere und wirksame Kandidaten wurden im zellulären Modell identifiziert. Aktuell läuft die entscheidende Toxizitätsstudie. Dieser N-of-1-Ansatz ist ein Modell für weitere MCOPS12-Patient:innen."
              : "In collaboration with AlphaRose RareLabs (US), IGBMC (France), and CHU Sainte-Justine (Canada), we developed an ASO therapy targeting Simon's specific RARB mutation. Six safe and efficacious ASO candidates were identified in a cellular disease model. We are now conducting the critical toxicity study to identify the safest ASO for Simon. This N-of-1 approach is a model for other MCOPS12 patients."}
          </p>

          <Timeline items={milestones} de={de} />
        </div>
      </section>
    </>
  );
}

function Timeline({ items, de }: { items: typeof milestones; de: boolean }) {
  const { ref, inView } = useInView<HTMLOListElement>({ threshold: 0.1 });
  return (
    <ol ref={ref} className="mt-12 relative pl-6 space-y-8">
      {/* Animated vertical line */}
      <span
        aria-hidden
        className="absolute left-0 top-0 w-[2px] bg-amber/40"
        style={{
          height: inView ? "100%" : "0%",
          transition: `height ${items.length * 300 + 400}ms ease-out`,
        }}
      />
      {items.map((m, i) => (
        <li
          key={m.y}
          className="relative"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-40px)",
            transition: `opacity 0.6s ease-out ${i * 300}ms, transform 0.6s ease-out ${i * 300}ms`,
          }}
        >
          <span className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-amber" />
          <p className="text-amber font-display text-xl font-bold">{m.y}</p>
          <p className="text-white/85 mt-1">{de ? m.de : m.en}</p>
        </li>
      ))}
    </ol>
  );
}
