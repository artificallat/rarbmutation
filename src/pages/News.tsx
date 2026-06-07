import { Placeholder } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, HeroAccent } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import { geneFmt } from "@/lib/gene";
import simonWinter from "@/assets/simon-winter-2026.jpg";
import newsRunForRare from "@/assets/news-run-for-rare-couple.jpg";
import newsHappyNewYear from "@/assets/news-happy-new-year.jpg";
import newsN1Group from "@/assets/news-n1-collaborative-group.jpg";
import newsSimonSmile from "@/assets/news-simon-smile.jpg";
import newsBreakingAso from "@/assets/news-breaking-aso.jpg";

const posts = [
  { cat: "Breakthrough", date: "November 2025", img: newsBreakingAso, objectPosition: "center 30%",
    en: { t: "BREAKING NEWS: six ASO candidates pass safety testing", e: "We are thrilled to announce the successful completion of the proof-of-concept study for Simon's personalized antisense oligonucleotide (ASO) therapy. We identified six ASO candidates that selectively silence Simon's mutated RARB gene while preserving the healthy copy — and all six have successfully passed safety testing in Simon's cellular disease model. Next: a general toxicity study to identify the safest lead candidate." },
    de: { t: "BREAKING NEWS: sechs ASO-Kandidaten bestehen Sicherheitstests", e: "Wir freuen uns sehr, den erfolgreichen Abschluss der Proof-of-Concept-Studie für Simons personalisierte ASO-Therapie bekanntzugeben. Wir haben sechs ASO-Kandidaten identifiziert, die das mutierte RARB-Gen selektiv stilllegen und die gesunde Kopie schonen — alle sechs haben die Sicherheitstests in Simons Zellmodell bestanden. Nächster Schritt: eine allgemeine Toxizitätsstudie zur Auswahl des sichersten Kandidaten." } },
  { cat: "Community", date: "March 2026", img: newsRunForRare,
    en: { t: "Run for Rare – Run for Simon", e: "Our personal motto at the Rare Diseases Run: every kilometre run together turns into momentum for MCOPS12 research and a louder voice for Simon and every child living with this ultra-rare disease." },
    de: { t: "Run for Rare – Run for Simon", e: "Unser persönliches Motto beim Rare Diseases Run: Jeder gemeinsam gelaufene Kilometer wird zu Rückenwind für die MCOPS12-Forschung und zu einer lauteren Stimme für Simon und alle Kinder mit dieser ultra-seltenen Erkrankung." } },
  { cat: "Science", date: "March 2026", img: simonWinter,
    en: { t: "New RARB-RD preprint: two patient mouse models", e: "Nicolas Zinter (MassGeneral Hospital / Harvard) shares a preprint introducing two mouse models carrying the patient variants p.R387C and p.L402P. RARB-RD variants were previously classified as gain-of-function or dominant-negative based on in-vitro assays — these new in-vivo models will help clarify what actually happens in the brain." },
    de: { t: "Neues RARB-RD Preprint: zwei Patienten-Mausmodelle", e: "Nicolas Zinter (MassGeneral / Harvard) stellt ein Preprint mit zwei Mausmodellen vor, die die Patientenvarianten p.R387C und p.L402P tragen. RARB-RD-Varianten wurden bisher anhand von In-vitro-Tests als Gain-of-Function oder dominant-negativ eingestuft — die neuen In-vivo-Modelle helfen zu verstehen, was wirklich im Gehirn passiert." } },
  { cat: "Community", date: "January 2026", img: newsHappyNewYear,
    en: { t: "Happy New Year from Cure MCOPS12", e: "Stepping into 2026 with heartfelt gratitude to every supporter, family, runner and partner who stood with us in 2025 — and with a clear focus on bringing Simon's ASO therapy closer to the clinic." },
    de: { t: "Frohes neues Jahr von Cure MCOPS12", e: "Wir starten ins Jahr 2026 mit großer Dankbarkeit an alle Unterstützer:innen, Familien, Läufer:innen und Partner, die 2025 mit uns gegangen sind — und mit klarem Blick darauf, Simons ASO-Therapie näher an die Klinik zu bringen." } },
  { cat: "Community", date: "October 2025", img: newsN1Group,
    en: { t: "N=1 Collaborative – 2025 Annual Meeting", e: "Cure MCOPS12 joined the N=1 Collaborative Annual Meeting — a global gathering of families, scientists and clinicians advancing individualized RNA-based therapies for ultra-rare diseases." },
    de: { t: "N=1 Collaborative – Jahrestagung 2025", e: "Cure MCOPS12 war beim N=1 Collaborative Annual Meeting dabei — ein internationales Treffen von Familien, Wissenschaftler:innen und Kliniker:innen, die individualisierte RNA-Therapien für ultra-seltene Erkrankungen voranbringen." } },
  { cat: "Community", date: "September 2025", img: newsSimonSmile, objectPosition: "center 25%",
    en: { t: "Behind every BIG mission is a small reason", e: "Simon — the reason for everything we do. A quiet moment of joy that reminds us why we keep pushing for an MCOPS12 therapy." },
    de: { t: "Hinter jeder großen Mission steht ein kleiner Grund", e: "Simon — der Grund für alles, was wir tun. Ein stiller Moment voller Freude, der uns daran erinnert, warum wir für eine MCOPS12-Therapie kämpfen." } },
];

export default function News({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero eyebrow={de ? "Aktuelles" : "News"} title={de ? <>Neuigkeiten & <HeroAccent>Updates</HeroAccent></> : <>News & <HeroAccent>Updates</HeroAccent></>}
        sub={de ? "Forschungsfortschritte, Geschichten aus unserer Community und Kampagnen-Updates." : "Research progress, community stories, and campaign updates."} />

      <section className="container-wide pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {posts.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <article className="group bg-card rounded-3xl border border-border overflow-hidden hover:shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-teal transition-all duration-300 h-full flex flex-col">
                <div className="overflow-hidden">
                  <Placeholder
                    label={`Thumbnail: ${p.cat}`}
                    src={p.img}
                    objectPosition={p.objectPosition || "center"}
                    className="aspect-[4/3] !rounded-none transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs text-teal font-semibold uppercase tracking-wider">{p.cat} · {p.date}</p>
                  <h3 className="font-display text-xl font-bold text-navy mt-2">{geneFmt(de ? p.de.t : p.en.t)}</h3>
                  <p className="text-sm text-foreground/75 mt-2 line-clamp-4">{geneFmt(de ? p.de.e : p.en.e)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-teal to-[hsl(173_58%_28%)] text-white py-16">
        <div className="container-tight text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">{de ? "Bleiben Sie informiert" : "Stay updated"}</h2>
          <p className="mt-3 text-white/85">{de ? "Erhalten Sie unsere Neuigkeiten direkt in Ihr Postfach." : "Get our latest news in your inbox."}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 max-w-xl mx-auto grid sm:grid-cols-[1fr_1fr_auto] gap-2">
            <input required placeholder={de ? "Name" : "Name"} className="px-4 py-3 rounded-full text-foreground bg-white border-0" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-full text-foreground bg-white border-0" />
            <button className="px-6 py-3 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition">{de ? "Abonnieren" : "Subscribe"}</button>
          </form>
        </div>
      </section>
    </>
  );
}
