import { ArrowRight } from "lucide-react";
import { Placeholder } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import simonWinter from "@/assets/simon-winter-2026.jpg";
import simonNeujahr from "@/assets/simon-neujahr-2026.jpg";
import simonLights from "@/assets/simon-fiber-lights.jpg";

const posts = [
  { cat: "Community", date: "March 2026", img: simonLights,
    en: { t: "Run for Rare – Run for Simon", e: "Our personal motto at the Rare Diseases Run: every kilometre run together turns into momentum for MCOPS12 research and a louder voice for Simon and every child living with this ultra-rare disease." },
    de: { t: "Run for Rare – Run for Simon", e: "Unser persönliches Motto beim Rare Diseases Run: Jeder gemeinsam gelaufene Kilometer wird zu Rückenwind für die MCOPS12-Forschung und zu einer lauteren Stimme für Simon und alle Kinder mit dieser ultra-seltenen Erkrankung." } },
  { cat: "Science", date: "March 2026", img: simonWinter,
    en: { t: "New RARB-RD preprint: two patient mouse models", e: "Nicolas Zinter (MassGeneral Hospital / Harvard) shares a preprint introducing two mouse models carrying the patient variants p.R387C and p.L402P. RARB-RD variants were previously classified as gain-of-function or dominant-negative based on in-vitro assays — these new in-vivo models will help clarify what actually happens in the brain." },
    de: { t: "Neues RARB-RD Preprint: zwei Patienten-Mausmodelle", e: "Nicolas Zinter (MassGeneral / Harvard) stellt ein Preprint mit zwei Mausmodellen vor, die die Patientenvarianten p.R387C und p.L402P tragen. RARB-RD-Varianten wurden bisher anhand von In-vitro-Tests als Gain-of-Function oder dominant-negativ eingestuft — die neuen In-vivo-Modelle helfen zu verstehen, was wirklich im Gehirn passiert." } },
  { cat: "Community", date: "January 2026", img: simonNeujahr,
    en: { t: "Happy New Year from Cure MCOPS12", e: "Stepping into 2026 with heartfelt gratitude to every supporter, family, runner and partner who stood with us in 2025 — and with a clear focus on bringing Simon's ASO therapy closer to the clinic." },
    de: { t: "Frohes neues Jahr von Cure MCOPS12", e: "Wir starten ins Jahr 2026 mit großer Dankbarkeit an alle Unterstützer:innen, Familien, Läufer:innen und Partner, die 2025 mit uns gegangen sind — und mit klarem Blick darauf, Simons ASO-Therapie näher an die Klinik zu bringen." } },
];

export default function News({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero eyebrow={de ? "Aktuelles" : "News"} title={de ? "Neuigkeiten & Updates" : "News & Updates"}
        sub={de ? "Forschungsfortschritte, Geschichten aus unserer Community und Kampagnen-Updates." : "Research progress, community stories, and campaign updates."} />

      <section className="container-wide pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-[var(--shadow-card)] transition-shadow">
              <Placeholder label={`Thumbnail: ${p.cat}`} src={p.img} className="aspect-video !rounded-none" />
              <div className="p-6">
                <p className="text-xs text-teal font-semibold uppercase tracking-wider">{p.cat} · {p.date}</p>
                <h3 className="font-display text-xl font-bold text-navy mt-2">{de ? p.de.t : p.en.t}</h3>
                <p className="text-sm text-foreground/75 mt-2 line-clamp-3">{de ? p.de.e : p.en.e}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-teal">{de ? "Weiterlesen" : "Read more"} <ArrowRight className="w-3.5 h-3.5"/></a>
              </div>
            </article>
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
