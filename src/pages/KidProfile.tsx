import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";
import { PageHero } from "@/pages/WhoWeAre";
import { Placeholder } from "@/components/site/Bits";
import { kidsProfiles } from "@/content/kidsProfiles";
import type { Lang } from "@/content/site";
import simonPhoto from "@/assets/simon-schulbeginn.jpg";
import rhettPhoto from "@/assets/kids/rhett.webp";
import raynePhoto from "@/assets/kids/rayne.webp";
import troyPhoto from "@/assets/kids/troy.webp";
import siennaPhoto from "@/assets/kids/getimage.webp";
import zaydPhoto from "@/assets/kids/zayd.webp";
import atlePhoto from "@/assets/kids/atle.jpg";
import sophiaPhoto from "@/assets/kids/sophia.webp";
import josephinePhoto from "@/assets/kids/josephine.webp";
import miaPhoto from "@/assets/kids/mia.webp";
import noePhoto from "@/assets/kids/noe.webp";
import piperPhoto from "@/assets/kids/piper.webp";
import rinPhoto from "@/assets/kids/rin.webp";
import stellaPhoto from "@/assets/kids/stella.webp";

const photoBySlug: Record<string, string> = {
  simon: simonPhoto,
  rhett: rhettPhoto,
  rayne: raynePhoto,
  troy: troyPhoto,
  sienna: siennaPhoto,
  zayd: zaydPhoto,
  atle: atlePhoto,
  sophia: sophiaPhoto,
  josephine: josephinePhoto,
  mia: miaPhoto,
  noe: noePhoto,
  piper: piperPhoto,
  rin: rinPhoto,
  stella: stellaPhoto,
};

export default function KidProfile({ lang }: { lang: Lang }) {
  const { slug } = useParams<{ slug: string }>();
  const profile = kidsProfiles.find((k) => k.slug === slug);
  const de = lang === "de";
  const backHref = `${de ? "/de" : ""}/meet-our-kids`;

  if (!profile) {
    return (
      <section className="container-tight py-24">
        <h1 className="font-display text-3xl font-bold text-navy">Not found</h1>
        <Link to={backHref} className="mt-6 inline-flex items-center gap-2 text-teal font-semibold">
          <ArrowLeft className="w-4 h-4" /> {de ? "Zurück zu Unsere Kinder" : "Back to Meet Our Kids"}
        </Link>
      </section>
    );
  }

  const facts: { label: string; value: string }[] = [
    { label: de ? "Eltern" : "Parents", value: profile.parents },
    ...(profile.siblings ? [{ label: de ? "Geschwister" : "Siblings", value: profile.siblings }] : []),
    { label: de ? "Geburtsjahr" : "Year of Birth", value: profile.yearOfBirth },
    { label: de ? "Heimatort & Land" : "Hometown & Country", value: profile.hometown },
  ];

  return (
    <>
      <PageHero
        eyebrow={`${profile.hometown} · ${de ? "Geboren" : "Born"} ${profile.yearOfBirth}`}
        title={profile.name}
      />

      <section className="container-wide pb-24">
        <Link
          to={backHref}
          className="inline-flex items-center gap-2 text-teal font-semibold mb-10 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> {de ? "Zurück zu Unsere Kinder" : "Back to Meet Our Kids"}
        </Link>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Sidebar */}
          <aside className="md:col-span-4 md:sticky md:top-24 space-y-6">
            <div className="relative">
              <div aria-hidden className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-teal/20 via-amber/15 to-transparent blur-xl" />
              <Placeholder
                label={profile.name}
                src={photoBySlug[profile.slug]}
                className="relative aspect-[4/5] !rounded-3xl shadow-[var(--shadow-card)] ring-1 ring-border"
              />
            </div>

            <dl className="bg-card border border-border rounded-3xl p-6 shadow-[var(--shadow-soft)]">
              <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-3.5 h-3.5" />
                {de ? "Über " : "About "}
                {profile.name}
              </p>
              <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 text-sm">
                {facts.map((f, i) => (
                  <div key={f.label} className="contents">
                    <dt className="font-semibold text-navy whitespace-nowrap self-start pt-0.5">
                      {f.label}
                    </dt>
                    <dd className="text-foreground/80 leading-relaxed">{f.value}</dd>
                    {i < facts.length - 1 && (
                      <div aria-hidden className="col-span-2 h-px bg-border/60" />
                    )}
                  </div>
                ))}
              </div>
            </dl>
          </aside>

          {/* Story */}
          <div className="md:col-span-8 space-y-10">
            <article>
              <div className="flex items-start gap-4 mb-6">
                <div aria-hidden className="mt-2 w-1.5 h-12 rounded-full bg-gradient-to-b from-teal to-amber shrink-0" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
                  {profile.messageTitle}
                </h2>
              </div>
              <div className="space-y-5 max-w-prose">
                {profile.messageParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed whitespace-pre-line ${
                      i === 0
                        ? "text-lg text-foreground/90 font-medium"
                        : "text-base text-foreground/80"
                    }`}
                  >
                    {geneFmt(p)}
                  </p>
                ))}
              </div>
            </article>

            {profile.dreamsTitle && profile.dreamsParagraphs && (
              <article className="relative bg-gradient-to-br from-amber/15 via-amber/5 to-transparent border border-amber/30 rounded-3xl p-7 sm:p-9 overflow-hidden">
                <div aria-hidden className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber/20 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-deep font-semibold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    {de ? "Unsere Träume" : "Our Dreams"}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mb-5">
                    {profile.dreamsTitle}
                  </h3>
                  <div className="space-y-4 max-w-prose">
                    {profile.dreamsParagraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-base md:text-lg text-foreground/85 leading-relaxed whitespace-pre-line italic"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
