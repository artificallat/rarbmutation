import { ArrowRight } from "lucide-react";
import { Placeholder } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";

const posts = [
  { cat: "Research", date: "March 2026",
    en: { t: "ASO toxicity study reaches final phase", e: "Our six lead candidates are now entering the final IND-enabling toxicity assessments — a critical step toward Simon's first dose." },
    de: { t: "ASO-Toxizitätsstudie in finaler Phase", e: "Unsere sechs Leitkandidaten gehen in die letzten IND-relevanten Sicherheitstests – ein entscheidender Schritt vor Simons erster Dosis." } },
  { cat: "Community", date: "January 2026",
    en: { t: "€235,000 milestone reached", e: "Thanks to families, runners, and corporate partners across three continents, we've crossed a major fundraising milestone." },
    de: { t: "€235.000-Meilenstein erreicht", e: "Dank Familien, Läufer:innen und Unternehmenspartnern auf drei Kontinenten haben wir einen großen Fundraising-Meilenstein erreicht." } },
  { cat: "Science", date: "November 2025",
    en: { t: "New iPSC striatal neuron model published", e: "The Taylor Lab in Basel has published a new disease model that will accelerate drug screening for MCOPS12." },
    de: { t: "Neues iPSC-Striatum-Modell publiziert", e: "Das Taylor-Labor in Basel hat ein neues Krankheitsmodell publiziert, das das Wirkstoff-Screening für MCOPS12 beschleunigt." } },
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
              <Placeholder label={`Thumbnail: ${p.cat}`} className="aspect-video !rounded-none" />
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
