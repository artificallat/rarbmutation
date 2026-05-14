import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { t, partners, donationGoal, socials, type Lang } from "@/content/site";
import { Placeholder, ProgressBar, SectionTitle } from "@/components/site/Bits";
import { Reveal, Counter } from "@/components/site/Reveal";
import heroFamily from "@/assets/family-mountains.jpg";
import heroPlayground from "@/assets/reinhard-simon-playground.jpg";
import heroHorse from "@/assets/simon-horse-mane.jpg";
import heroBeyond from "@/assets/simon-and-beyond.jpg";
import storyPhoto from "@/assets/simon-pony.jpg";
import newsRunForRare from "@/assets/news-run-for-rare-couple.jpg";
import newsHappyNewYear from "@/assets/news-happy-new-year.jpg";
import newsWinter from "@/assets/simon-winter-2026.jpg";

const homeNews = [
  {
    img: newsRunForRare,
    cat: "Community",
    date: "March 2026",
    en: {
      t: "Run for Rare – Run for Simon",
      e: "Our personal motto at the Rare Diseases Run: every kilometre run together turns into momentum for MCOPS12 research.",
    },
    de: {
      t: "Run for Rare – Run for Simon",
      e: "Unser persönliches Motto beim Rare Diseases Run: Jeder gemeinsam gelaufene Kilometer wird zu Rückenwind für die MCOPS12-Forschung.",
    },
  },
  {
    img: newsWinter,
    cat: "Science",
    date: "March 2026",
    en: {
      t: "New RARB-RD preprint: two patient mouse models",
      e: "Nicolas Zinter (MassGeneral / Harvard) shares a preprint introducing two mouse models carrying patient variants p.R387C and p.L402P — a major step for MCOPS12 research.",
    },
    de: {
      t: "Neues RARB-RD Preprint: zwei Patienten-Mausmodelle",
      e: "Nicolas Zinter (MassGeneral / Harvard) stellt ein Preprint mit zwei Mausmodellen vor, die die Patientenvarianten p.R387C und p.L402P tragen — ein wichtiger Schritt für die MCOPS12-Forschung.",
    },
  },
  {
    img: newsHappyNewYear,
    cat: "Community",
    date: "January 2026",
    en: {
      t: "Happy New Year from Cure MCOPS12",
      e: "Stepping into 2026 with heartfelt gratitude to every supporter, family and partner who stood with us — and a clear focus on the year ahead.",
    },
    de: {
      t: "Frohes neues Jahr von Cure MCOPS12",
      e: "Wir starten ins Jahr 2026 mit großer Dankbarkeit an alle Unterstützer:innen, Familien und Partner — und mit klarem Blick auf das, was vor uns liegt.",
    },
  },
];

const heroImages = [heroHorse, heroFamily, heroBeyond, heroPlayground];

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
      <section
        className="relative mt-0 h-[80vh] min-h-[420px] sm:h-[85vh] sm:min-h-[520px] lg:h-[92vh] lg:min-h-[640px] w-full overflow-hidden bg-navy-deep touch-pan-y"
        onTouchStart={(e) => {
          (e.currentTarget as any)._touchStartX = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const startX = (e.currentTarget as any)._touchStartX;
          if (startX == null) return;
          const dx = e.changedTouches[0].clientX - startX;
          if (Math.abs(dx) > 40) {
            if (dx < 0) setSlide((slide + 1) % slides.length);
            else setSlide((slide - 1 + slides.length) % slides.length);
          }
        }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          >
            <div
              key={`zoom-${i}-${i === slide ? slide : "off"}`}
              className={`absolute inset-0 ${i === slide ? "animate-slow-zoom" : ""}`}
            >
              <img
                src={heroImages[i % heroImages.length]}
                alt={`Simon & family — slide ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-cover ${
                  i === 1
                    ? "object-[60%_30%] sm:object-center"
                    : i === 0
                    ? "object-[60%_20%] sm:object-[70%_25%]"
                    : i === 2
                    ? "object-[50%_25%] sm:object-center"
                    : "object-[50%_20%] sm:object-center"
                }`}
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--navy-deep)/0.5) 0%, hsl(var(--navy-deep)/0.3) 40%, hsl(var(--navy-deep)/0.85) 100%)",
              }}
            />
            <div className={`relative h-full container-wide flex items-end ${i === 0 ? "pb-16 sm:pb-20" : "pb-24 sm:pb-32"}`}>
              {i === slide && (
                <div className="max-w-3xl text-white fade-in">
                  <h1 className="font-display font-bold leading-[1.05] text-balance text-4xl sm:text-6xl md:text-7xl">
                    {s.title}
                  </h1>
                  {"sub" in s && s.sub && <p className="mt-4 text-white/90 font-light text-xl sm:text-2xl">{s.sub}</p>}
                  {"sub2" in s && (s as any).sub2 && (
                    <p className="mt-1 text-amber font-medium text-xl sm:text-2xl">{(s as any).sub2}</p>
                  )}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {i === 3 && (
                      <Link
                        to={`${p}/donate`}
                        className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition-colors shadow-[var(--shadow-amber)]"
                      >
                        {tr.cta.donateNow} <ArrowRight className="w-4 h-4" />
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
                  {isNaN(num) ? s.n : <Counter to={num} prefix={prefix} suffix={suffix} duration={2000} />}
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
                <article className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-200 h-full">
                  <Placeholder label={`Thumbnail: ${post.cat}`} src={post.img} className="aspect-video !rounded-none" />
                  <div className="p-6">
                    <p className="text-xs text-teal font-semibold uppercase tracking-wider">
                      {post.cat} · {post.date}
                    </p>
                    <h3 className="font-display text-xl font-bold mt-2">{lang === "de" ? post.de.t : post.en.t}</h3>
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
