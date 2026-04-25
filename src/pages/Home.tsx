import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { t, partners, donationGoal, socials, type Lang } from "@/content/site";
import { Placeholder, ProgressBar, SectionTitle } from "@/components/site/Bits";
import { Reveal, Counter } from "@/components/site/Reveal";
import heroFamily from "@/assets/family-mountains.jpg";
import heroPlayground from "@/assets/reinhard-simon-playground.jpg";
import heroGuitar from "@/assets/edith-simon-guitar.jpg";
import storyPhoto from "@/assets/simon-pony.jpg";
import newsLights from "@/assets/simon-fiber-lights.jpg";
import newsNeujahr from "@/assets/simon-neujahr-2026.jpg";
import newsWinter from "@/assets/simon-winter-2026.jpg";

const homeNews = [
  { img: newsLights, cat: "Research", date: "March 2026",
    en: { t: "ASO toxicity study reaches final phase", e: "Our six lead candidates are now entering the final IND-enabling toxicity assessments — a critical step toward Simon's first dose." },
    de: { t: "ASO-Toxizitätsstudie in finaler Phase", e: "Unsere sechs Leitkandidaten gehen in die letzten IND-relevanten Sicherheitstests – ein entscheidender Schritt vor Simons erster Dosis." } },
  { img: newsNeujahr, cat: "Community", date: "January 2026",
    en: { t: "€235,000 milestone reached", e: "Thanks to families, runners, and corporate partners across three continents, we've crossed a major fundraising milestone." },
    de: { t: "€235.000-Meilenstein erreicht", e: "Dank Familien, Läufer:innen und Unternehmenspartnern auf drei Kontinenten haben wir einen großen Fundraising-Meilenstein erreicht." } },
  { img: newsWinter, cat: "Science", date: "November 2025",
    en: { t: "New iPSC striatal neuron model published", e: "The Taylor Lab in Basel has published a new disease model that will accelerate drug screening for MCOPS12." },
    de: { t: "Neues iPSC-Striatum-Modell publiziert", e: "Das Taylor-Labor in Basel hat ein neues Krankheitsmodell publiziert, das das Wirkstoff-Screening für MCOPS12 beschleunigt." } },
];

const heroImages = [heroFamily, heroPlayground, heroGuitar];

export default function Home({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const p = lang === "de" ? "/de" : "";
  const [slide, setSlide] = useState(0);
  const slides = tr.home.slides;

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-navy-deep">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
          >
            <div
              key={`zoom-${i}-${i === slide ? slide : "off"}`}
              className={`absolute inset-0 ${i === slide ? "animate-slow-zoom" : ""}`}
            >
              <img
                src={heroImages[i % heroImages.length]}
                alt={`Simon & family — slide ${i + 1}`}
                style={{
                  objectFit: "cover",
                  objectPosition: i === 0 ? "100% 100%" : "center",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  inset: 0,
                }}
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, hsl(var(--navy-deep)/0.4) 0%, hsl(var(--navy-deep)/0.85) 100%)",
              }}
            />
            <div className="relative h-full container-wide flex items-end pb-24 sm:pb-32">
              {i === slide && (
                <div className="max-w-3xl text-white fade-in">
                  <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-balance">
                    {s.title}
                  </h1>
                  {"sub" in s && s.sub && <p className="mt-4 text-xl sm:text-2xl text-white/90 font-light">{s.sub}</p>}
                  {"sub2" in s && (s as any).sub2 && (
                    <p className="mt-1 text-xl sm:text-2xl text-amber font-medium">{(s as any).sub2}</p>
                  )}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {i === 1 && (
                      <Link
                        to={`${p}/donate`}
                        className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition-colors shadow-[var(--shadow-amber)]"
                      >
                        {tr.cta.donateNow} <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                    {i === 2 && (
                      <Link
                        to={`${p}/who-we-are`}
                        className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-navy font-semibold hover:bg-white/90 transition"
                      >
                        {tr.cta.learnMore} <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {/* controls */}
        <div className="absolute bottom-8 left-0 right-0 z-10 container-wide flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-1.5 rounded-full transition-all ${i === slide ? "w-10 bg-amber" : "w-6 bg-white/40"}`}
                aria-label={`slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => setSlide((slide - 1 + slides.length) % slides.length)}
              className="w-10 h-10 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSlide((slide + 1) % slides.length)}
              className="w-10 h-10 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24">
        <div className="container-tight grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionTitle eyebrow={lang === "de" ? "Wie alles begann" : "How it began"} title={tr.home.storyTitle} />
            <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
              <p>{tr.home.storyP1}</p>
              <p className="font-display text-2xl text-navy">{tr.home.storyP2}</p>
              <p>{tr.home.storyP3}</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Placeholder label="Simon and his pony" src={storyPhoto} className="aspect-[4/5]" />
          </Reveal>
        </div>
      </section>

      {/* ASO HIGHLIGHT */}
      <section className="bg-gradient-to-br from-navy to-navy-deep text-white py-24">
        <div className="container-tight">
          <Reveal>
            <SectionTitle eyebrow={lang === "de" ? "Wissenschaft" : "Science"} title={tr.home.asoTitle} light />
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-5 text-lg text-white/85 leading-relaxed max-w-3xl">
              <p>{tr.home.asoP1}</p>
              <p>{tr.home.asoP2}</p>
            </div>
            <Link
              to={`${p}/achievements`}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition"
            >
              {tr.cta.learnMore} <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-teal text-white">
        <div className="container-wide grid sm:grid-cols-3 gap-8">
          {tr.home.stats.map((s, i) => {
            // parse n string to extract prefix/number/suffix
            const match = s.n.match(/^([^\d]*)([\d.,]+)(.*)$/);
            const prefix = match?.[1] ?? "";
            const numStr = match?.[2] ?? s.n;
            const suffix = match?.[3] ?? "";
            const num = parseInt(numStr.replace(/[.,]/g, ""), 10);
            return (
              <Reveal key={i} delay={i * 150} className="text-center">
                <p className="font-display text-6xl md:text-7xl font-bold">
                  {isNaN(num) ? (
                    s.n
                  ) : (
                    <Counter to={num} prefix={prefix} suffix={suffix} duration={2000} />
                  )}
                </p>
                <p className="mt-3 text-white/90 max-w-xs mx-auto">{s.l}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* DONATE BAR */}
      <section className="py-24">
        <div className="container-tight">
          <Reveal>
            <div className="bg-card rounded-3xl border border-border p-8 sm:p-12 shadow-[var(--shadow-card)]">
              <ProgressBar raised={donationGoal.raised} goal={donationGoal.goal} />
              <p className="mt-6 text-lg text-balance">{tr.home.donateBar}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to={`${p}/donate`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition shadow-[var(--shadow-amber)]"
                >
                  {tr.cta.donateNow}
                </Link>
                <a
                  href={socials.gofundme}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white font-semibold hover:bg-navy-deep transition"
                >
                  {tr.cta.gofundme} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-12">
        <div className="container-wide">
          <Reveal>
            <SectionTitle eyebrow={lang === "de" ? "Aktuelles" : "Recent"} title={tr.home.newsTitle} />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {homeNews.map((post, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <article
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-200 h-full"
                >
                  <Placeholder label={`Thumbnail: ${post.cat}`} src={post.img} className="aspect-video !rounded-none" />
                  <div className="p-6">
                    <p className="text-xs text-teal font-semibold uppercase tracking-wider">{post.cat} · {post.date}</p>
                    <h3 className="font-display text-xl font-bold mt-2">
                      {lang === "de" ? post.de.t : post.en.t}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {lang === "de" ? post.de.e : post.en.e}
                    </p>
                    <Link
                      to={`${p}/news`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-teal"
                    >
                      {tr.cta.readMore} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={`${p}/news`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy text-navy font-semibold hover:bg-navy hover:text-white transition"
            >
              {tr.cta.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-24">
        <div className="container-wide">
          <Reveal>
            <SectionTitle
              eyebrow={lang === "de" ? "Gemeinsam stark" : "Stronger together"}
              title={tr.home.partnersTitle}
              center
            />
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {partners.map((partner, idx) => (
              <Reveal key={partner.name} delay={idx * 80}>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noreferrer"
                  title={partner.name}
                  className="group bg-card border border-border rounded-2xl p-4 h-28 flex items-center justify-center text-center hover:border-teal hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-200"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    className={`max-h-full max-w-full object-contain ${partner.name === "EURORDIS" ? "[filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.25))]" : ""}`}
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
