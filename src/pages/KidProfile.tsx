import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
  const profile = kidsProfiles.find(k => k.slug === slug);
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

  return (
    <>
      <PageHero
        eyebrow={`${profile.hometown} · ${de ? "Geboren" : "Born"} ${profile.yearOfBirth}`}
        title={profile.name}
      />

      <section className="container-tight pb-24">
        <Link to={backHref} className="inline-flex items-center gap-2 text-teal font-semibold mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> {de ? "Zurück zu Unsere Kinder" : "Back to Meet Our Kids"}
        </Link>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <Placeholder
            label={profile.name}
            src={photoBySlug[profile.slug]}
            className="aspect-[4/5] !rounded-3xl"
          />
          <dl className="space-y-3 text-base bg-card border border-border rounded-3xl p-6">
            <Fact label="Parents" value={profile.parents} />
            {profile.siblings && <Fact label="Siblings" value={profile.siblings} />}
            <Fact label="Year of Birth" value={profile.yearOfBirth} />
            <Fact label="Hometown & Country" value={profile.hometown} />
          </dl>
        </div>

        <article className="prose prose-lg max-w-none mt-12">
          <h2 className="font-display text-3xl font-bold text-navy">{profile.messageTitle}</h2>
          {profile.messageParagraphs.map((p, i) => (
            <p key={i} className="text-foreground/85 leading-relaxed mt-4 whitespace-pre-line">{p}</p>
          ))}

          {profile.dreamsTitle && profile.dreamsParagraphs && (
            <>
              <h3 className="font-display text-2xl font-bold text-navy mt-10">{profile.dreamsTitle}</h3>
              {profile.dreamsParagraphs.map((p, i) => (
                <p key={i} className="text-foreground/85 leading-relaxed mt-4 whitespace-pre-line">{p}</p>
              ))}
            </>
          )}
        </article>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-3">
      <dt className="font-semibold text-navy min-w-[10rem]">{label}:</dt>
      <dd className="text-foreground/80">{value}</dd>
    </div>
  );
}
