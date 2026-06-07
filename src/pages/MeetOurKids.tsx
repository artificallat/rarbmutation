import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Placeholder } from "@/components/site/Bits";
import { PageHero, HeroAccent } from "@/pages/WhoWeAre";
import { kids, type Lang } from "@/content/site";
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

const kidPhotos: Record<string, string> = {
  "Simon": simonPhoto,
  "Rhett": rhettPhoto,
  "Rayne": raynePhoto,
  "Troy": troyPhoto,
  "Sienna": siennaPhoto,
  "Zayd": zaydPhoto,
  "Atle": atlePhoto,
  "Sophia": sophiaPhoto,
  "Josephine": josephinePhoto,
  "Mia": miaPhoto,
  "Noé": noePhoto,
  "Piper": piperPhoto,
  "Rin": rinPhoto,
  "Stella": stellaPhoto,
};

export default function MeetOurKids({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero eyebrow={de ? "Unsere Kinder" : "Our kids"} title={de ? <>Unsere <HeroAccent>Kinder</HeroAccent></> : <>Meet Our <HeroAccent>Kids</HeroAccent></>}
        sub={de
          ? "Das sind die Gesichter hinter unserer Mission. Jedes Kind mit MCOPS12 hat seine eigene Geschichte – und jede dieser Geschichten ist der Grund, warum wir kämpfen."
          : "These are the faces behind our mission. Every child with MCOPS12 has a unique story — and every story is why we fight."} />

      <section className="container-wide pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kids.map(k => <KidCard key={k.name} kid={k} lang={lang} />)}
        </div>
      </section>
    </>
  );
}

function KidCard({ kid, lang }: { kid: typeof kids[number]; lang: Lang }) {
  const de = lang === "de";
  const slug = kid.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const profileHref = `${de ? "/de" : ""}/meet-our-kids/${slug}`;
  return (
    <article className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300">
      <Link to={profileHref} className="block overflow-hidden">
        <Placeholder
          label={kid.name}
          src={kidPhotos[kid.name]}
          className="aspect-[4/5] !rounded-none transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="p-6">
        <Link to={profileHref}>
          <h3 className="font-display text-2xl font-bold text-navy group-hover:text-teal transition-colors">{kid.name}</h3>
        </Link>
        <p className="text-teal text-sm font-semibold mt-1">{kid.place} · {de ? "Geboren" : "Born"} {kid.year}</p>
        <dl className="mt-4 space-y-1 text-sm text-foreground/75">
          <div><dt className="inline font-semibold text-navy">{de ? "Eltern: " : "Parents: "}</dt><dd className="inline">{kid.parents}</dd></div>
          {kid.siblings !== "—" && <div><dt className="inline font-semibold text-navy">{de ? "Geschwister: " : "Siblings: "}</dt><dd className="inline">{kid.siblings}</dd></div>}
        </dl>
        <Link
          to={profileHref}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:gap-3 transition-all"
        >
          {de ? "Vollständige Geschichte lesen" : "Read full story"}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
