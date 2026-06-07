import { Linkedin } from "lucide-react";
import { PageHero } from "./WhoWeAre";
import { SectionTitle } from "@/components/site/Bits";
import type { Lang } from "@/content/site";
import reinhardPhoto from "@/assets/reinhard-pell-portrait.jpg";
import edithPhoto from "@/assets/edith-pell-portrait.jpg";
import katriPhoto from "@/assets/katri-rouvali.jpg";
import edithRockenschaubPhoto from "@/assets/edith-rockenschaub.jpeg";
import ivanaPhoto from "@/assets/volunteers/ivana.jpeg";
import kathiPhoto from "@/assets/volunteers/kathi.jpeg";

const photos: Record<string, string> = {
  "Reinhard Pell": reinhardPhoto,
  "Edith Pell": edithPhoto,
  "Katri Rouvali": katriPhoto,
  "Edith Rockenschaub": edithRockenschaubPhoto,
  "Ivana Ursić Ivić": ivanaPhoto,
  "Kathi Carl": kathiPhoto,
};

const team = [
  { name: "Reinhard Pell", role: "Founder & Chairman", linkedin: "https://www.linkedin.com/in/reinhard-pell-88a1657b/" },
  { name: "Edith Pell", role: "Co-Founder & Vice Chairwoman" },
  { name: "Katri Rouvali", role: "Secretary" },
  { name: "Edith Rockenschaub", role: "Treasurer", linkedin: "https://www.linkedin.com/in/edith-rockenschaub-8272b1231/" },
];

const volunteers = [
  { name: "Ivana Ursić Ivić", role: "Volunteer", linkedin: "https://www.linkedin.com/in/ivana-ursi%C4%87-ivi%C4%87-7ba114113" },
  { name: "Kathi Carl", role: "Volunteer" },
];

function Card({ name, role, linkedin }: { name: string; role: string; linkedin?: string }) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 flex flex-col items-center text-center">
      {photos[name] ? (
        <img src={photos[name]} alt={name}
          style={{ width: 120, height: 120, objectFit: "cover", objectPosition: "center top", borderRadius: "9999px" }}
          className="mb-4" />
      ) : (
        <div className="placeholder-img mb-4 text-xs" style={{ width: 120, height: 120, borderRadius: "9999px" }}>{name.split(" ")[0]}</div>
      )}
      <h4 className="font-display text-xl font-bold text-navy">{name}</h4>
      <p className="text-teal font-semibold text-sm mt-1">{role}</p>
      {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-navy hover:text-teal"><Linkedin className="w-3.5 h-3.5"/> LinkedIn</a>}
    </div>
  );
}

export default function Vereinsorgane({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Über uns" : "About us"}
        title={lang === "de" ? <>Verein / <HeroAccent>Organisation</HeroAccent></> : <>Association <HeroAccent>Organs</HeroAccent></>}
        sub="Cure MCOPS12 — Verein zur Förderung einer Therapieentwicklung für MCOPS12 Patienten."
      />
      <section className="container-tight pb-12">
        <div className="bg-card rounded-2xl border border-border p-6 text-foreground/80 leading-relaxed">
          <p><strong>ZVR-Zahl:</strong> 1002067031</p>
          <p><strong>Address:</strong> 4963 St. Peter am Hart, Austria</p>
          <p><strong>Founded:</strong> 2020</p>
        </div>
      </section>
      <section className="container-wide py-12">
        <SectionTitle eyebrow={lang === "de" ? "Vorstand" : "Board"} title={lang === "de" ? "Vorstandsmitglieder" : "Board Members"} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(t => <Card key={t.name} {...t} />)}
        </div>
      </section>
      <section className="container-wide pb-20">
        <SectionTitle eyebrow="Team" title={lang === "de" ? "Volontär:innen" : "Volunteers"} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {volunteers.map(v => <Card key={v.name} {...v} />)}
        </div>
      </section>
    </>
  );
}
