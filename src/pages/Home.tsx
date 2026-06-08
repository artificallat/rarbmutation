import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Linkedin } from "lucide-react";
import { t, partners, donationGoal, socials, type Lang } from "@/content/site";
import { Placeholder, ProgressBar, SectionTitle } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { geneFmt } from "@/lib/gene";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import heroFamily from "@/assets/family-mountains.jpg";
import heroHorse from "@/assets/simon-horse-mane.jpg";
import heroBeyond from "@/assets/simon-and-beyond.jpg";
import heroFairyLights from "@/assets/simon-fairy-lights.jpg";
import storyPhoto from "@/assets/simon-pony.jpg";
import newsRunForRare from "@/assets/news-run-for-rare-couple-v2.png.asset.json";
import newsHappyNewYear from "@/assets/news-happy-new-year.png.asset.json";

const LINKEDIN_URL = "https://www.linkedin.com/company/cure-mcops12/";

const homeNews = [
  {
    img: newsRunForRare.url,
    cat: "Community",
    date: "March 2026",
    href: LINKEDIN_URL,
    en: {
      t: "RUN FOR RARE – RUN FOR SIMON",
      e: "Das war unser persönliches Motto beim Rare Diseases Run, bei dem Menschen mit seltenen Erkrankungen ins Rampenlicht gerückt werden. Gemeinsam für eine bessere Welt zu laufen ist zwar genauso anstrengend – macht aber glücklich.",
    },
    de: {
      t: "RUN FOR RARE – RUN FOR SIMON",
      e: "Das war unser persönliches Motto beim Rare Diseases Run, bei dem Menschen mit seltenen Erkrankungen ins Rampenlicht gerückt werden. Gemeinsam für eine bessere Welt zu laufen ist zwar genauso anstrengend – macht aber glücklich.",
    },
  },
  {
    img: null,
    cat: "Research",
    date: "March 2026",
    href: LINKEDIN_URL,
    en: {
      t: "New preprint on RARB-related disorder",
      e: `Hi #MCOPS12 community,

please take a moment to read Nicolas' recent post about a new publication on the MCOPS12/RARB-related disorder (preprint available on bioRxiv: https://lnkd.in/dGydAhC9).

This is a seminal contribution to advancing our understanding of the underlying disease mechanisms of MCOPS12. It also highlights that allele-selective silencing of the mutant RARB gene (e.g. by an allele-selective ASO) represents a promising strategy for developing a disease-modifying therapy.

We are truly grateful for the excellent collaboration with Dr. Wojciech Krezel's team at the IGBMC and Dr. Jacques Michaud's team at Centre de recherche Azrieli du CHU Sainte-Justine.

It has been a pleasure to support you, Nicolas Zinter, PhD, in your PhD journey and to help make this pivotal work a reality.`,
    },
    de: {
      t: "New preprint on RARB-related disorder",
      e: `Hi #MCOPS12 community,

please take a moment to read Nicolas' recent post about a new publication on the MCOPS12/RARB-related disorder (preprint available on bioRxiv: https://lnkd.in/dGydAhC9).

This is a seminal contribution to advancing our understanding of the underlying disease mechanisms of MCOPS12. It also highlights that allele-selective silencing of the mutant RARB gene (e.g. by an allele-selective ASO) represents a promising strategy for developing a disease-modifying therapy.

We are truly grateful for the excellent collaboration with Dr. Wojciech Krezel's team at the IGBMC and Dr. Jacques Michaud's team at Centre de recherche Azrieli du CHU Sainte-Justine.

It has been a pleasure to support you, Nicolas Zinter, PhD, in your PhD journey and to help make this pivotal work a reality.`,
    },
  },
  {
    img: newsHappyNewYear.url,
    objectPosition: "center top",
    cat: "Community",
    date: "January 2026",
    href: LINKEDIN_URL,
    en: {
      t: "Happy New Year from Cure MCOPS12!",
      e: `Happy New Year from Cure MCOPS12!

As we step into 2026, we want to express our heartfelt gratitude to all our donors for their unwavering support. Together, we've accomplished incredible milestones in 2025:

👉 €56,000 in donations

👉 Proof of concept for Simon's allele-selective Antisense Oligonucleotide (ASO) therapy – we identified several promising ASO candidates that can knock down the mutant RARB gene while preserving the wild-type 😊

👉 Expanded our MCOPS12 Natural History Study – now with 35 patients enrolled

👉 Significant progress in lipidomics biomarker research using the MCOPS12 mouse model

👉 Advanced drug repurposing studies in the MCOPS12 mouse model

👉 Active participation in key events – EURORDIS OpenAcademy 2025, the N=1 Collaborative Annual Meeting, and our very first MCOPS12 Families Conference in Montréal

Looking ahead, 2026 will be a transformative year! We are launching new drug development initiatives in close collaboration with our partners and MCOPS12 warriors: A Cure for Sophia and Friends and A Cure for Sienna.

Stay tuned for exciting updates coming soon!

#HappyNewYear #CureMCOPS12 #ACureforSophiaandFriends #ACureforSienna`,
    },
    de: {
      t: "Happy New Year von Cure MCOPS12!",
      e: `Happy New Year from Cure MCOPS12!

As we step into 2026, we want to express our heartfelt gratitude to all our donors for their unwavering support. Together, we've accomplished incredible milestones in 2025:

👉 €56,000 in donations

👉 Proof of concept for Simon's allele-selective Antisense Oligonucleotide (ASO) therapy – we identified several promising ASO candidates that can knock down the mutant RARB gene while preserving the wild-type 😊

👉 Expanded our MCOPS12 Natural History Study – now with 35 patients enrolled

👉 Significant progress in lipidomics biomarker research using the MCOPS12 mouse model

👉 Advanced drug repurposing studies in the MCOPS12 mouse model

👉 Active participation in key events – EURORDIS OpenAcademy 2025, the N=1 Collaborative Annual Meeting, and our very first MCOPS12 Families Conference in Montréal

Looking ahead, 2026 will be a transformative year! We are launching new drug development initiatives in close collaboration with our partners and MCOPS12 warriors: A Cure for Sophia and Friends and A Cure for Sienna.

Stay tuned for exciting updates coming soon!

#HappyNewYear #CureMCOPS12 #ACureforSophiaandFriends #ACureforSienna`,
    },
  },
];

const heroImages = [heroHorse, heroFamily, heroFairyLights, heroBeyond];

export default function Home({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const p = lang === "de" ? "/de" : "";
  const [slide, setSlide] = useState(0);
  const [openPost, setOpenPost] = useState<number | null>(null);
  const slides = tr.home.slides;

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <>
      {/* HERO */}
      <section
        className="relative -mt-px h-[calc(100svh-72px+1px)] sm:mt-0 sm:h-[85vh] sm:min-h-[520px] lg:h-[92vh] lg:min-h-[640px] w-full overflow-hidden bg-navy-deep touch-pan-y"
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
                  <h1 className="font-display font-bold leading-[1.1] text-balance text-3xl sm:text-5xl md:text-7xl">
                    {s.title}
                  </h1>
                  {"sub" in s && s.sub && <p className="mt-4 text-white/90 font-light text-base sm:text-xl md:text-2xl">{s.sub}</p>}
                  {"sub2" in s && (s as any).sub2 && (
                    <p className="mt-1 text-amber font-medium text-base sm:text-xl md:text-2xl">{(s as any).sub2}</p>
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
             <p className="whitespace-pre-line">{geneFmt(tr.home.storyP1)}</p>
             <p className="font-display text-2xl text-navy">{tr.home.storyP2}</p>
             <p>{geneFmt(tr.home.storyP3)}</p>
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
             <p>{geneFmt(tr.home.asoP1)}</p>
             <p>{geneFmt(tr.home.asoP2)}</p>
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

      {/* DONATE BAR (replaces stats) */}
      <section className="py-24 bg-teal">
        <div className="container-tight">
          <Reveal>
            <div className="bg-white rounded-3xl border border-border p-8 sm:p-12 shadow-[var(--shadow-card)]">
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
          <div className="grid md:grid-cols-3 gap-7">
            {homeNews.map((post, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <article className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-teal transition-all duration-300 h-full flex flex-col">
                  {post.img ? (
                    <div className="overflow-hidden">
                      <Placeholder
                        label={`Thumbnail: ${post.cat}`}
                        src={post.img}
                        objectPosition={(post as any).objectPosition || "center"}
                        className="aspect-[4/3] !rounded-none transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-gradient-to-br from-teal/15 via-navy/5 to-coral/10 flex items-center justify-center p-6">
                      <Linkedin className="w-16 h-16 text-teal/70" strokeWidth={1.5} />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs text-teal font-semibold uppercase tracking-wider">
                      {post.cat} · {post.date}
                    </p>
                    <h3 className="font-display text-xl font-bold mt-2">{lang === "de" ? post.de.t : post.en.t}</h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-3 whitespace-pre-line">
                      {geneFmt(lang === "de" ? post.de.e : post.en.e)}
                    </p>
                    <button
                      type="button"
                      onClick={() => setOpenPost(idx)}
                      className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-teal transition-colors self-start"
                    >
                      {tr.cta.readMore} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Dialog open={openPost !== null} onOpenChange={(o) => !o && setOpenPost(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            {openPost !== null && (() => {
              const post = homeNews[openPost];
              const body = lang === "de" ? post.de : post.en;
              return (
                <>
                  <DialogHeader>
                    <p className="text-xs text-teal font-semibold uppercase tracking-wider">
                      {post.cat} · {post.date}
                    </p>
                    <DialogTitle className="font-display text-2xl font-bold leading-tight">
                      {body.t}
                    </DialogTitle>
                  </DialogHeader>
                  {post.img && (
                    <img
                      src={post.img}
                      alt={body.t}
                      className="w-full rounded-2xl object-cover max-h-80"
                      style={{ objectPosition: (post as any).objectPosition || "center" }}
                    />
                  )}
                  <div className="text-base text-foreground/85 whitespace-pre-line leading-relaxed">
                    {geneFmt(body.e)}
                  </div>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 self-start mt-2 px-5 py-2.5 rounded-full bg-[#0a66c2] text-white font-semibold hover:bg-[#084d92] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    {lang === "de" ? "Auf LinkedIn ansehen" : "View on LinkedIn"}
                  </a>
                </>
              );
            })()}
          </DialogContent>
        </Dialog>
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
