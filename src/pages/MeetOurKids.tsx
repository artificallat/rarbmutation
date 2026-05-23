import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Placeholder } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
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
      <PageHero eyebrow={de ? "Unsere Kinder" : "Our kids"} title={de ? "Unsere Kinder" : "Meet Our Kids"}
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
  const [open, setOpen] = useState(false);
  const de = lang === "de";
  const slug = kid.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const profileHref = `${de ? "/de" : ""}/meet-our-kids/${slug}`;
  return (
    <article className="bg-card rounded-3xl overflow-hidden border border-border hover:shadow-[var(--shadow-card)] transition-shadow">
      <Link to={profileHref}>
        <Placeholder label={kid.name} src={kidPhotos[kid.name]} className="aspect-[4/5] !rounded-none" />
      </Link>
      <div className="p-6">
        <Link to={profileHref}>
          <h3 className="font-display text-2xl font-bold text-navy hover:text-teal transition-colors">{kid.name}</h3>
        </Link>
        <p className="text-teal text-sm font-semibold mt-1">{kid.place} · {de ? "Geboren" : "Born"} {kid.year}</p>
        <dl className="mt-4 space-y-1 text-sm text-foreground/75">
          <div><dt className="inline font-semibold text-navy">{de ? "Eltern: " : "Parents: "}</dt><dd className="inline">{kid.parents}</dd></div>
          {kid.siblings !== "—" && <div><dt className="inline font-semibold text-navy">{de ? "Geschwister: " : "Siblings: "}</dt><dd className="inline">{kid.siblings}</dd></div>}
        </dl>
        <div className={`grid transition-all ${open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <p className="text-sm leading-relaxed text-foreground/80">{de ? kid.storyDe : kid.storyEn}</p>
            <p className="mt-4 text-sm font-semibold text-navy">{de ? `Was wir uns für ${kid.name.split(" ")[0]} wünschen:` : `What are our dreams for ${kid.name.split(" ")[0]}?`}</p>
            <p className="text-sm italic text-foreground/75 mt-1">{de ? kid.dreamDe : kid.dreamEn}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <button onClick={() => setOpen(o => !o)} className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-teal">
            {open ? (de ? "Weniger" : "Show less") : (de ? "Kurzgeschichte" : "Short story")}
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          <Link to={profileHref} className="inline-flex items-center gap-1 text-sm font-semibold text-teal hover:underline">
            {de ? "Vollständige Geschichte" : "Full story"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
