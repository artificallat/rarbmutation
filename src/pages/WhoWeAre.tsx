import { Linkedin } from "lucide-react";
import { Placeholder, SectionTitle } from "@/components/site/Bits";
import type { Lang } from "@/content/site";
import reinhardPhoto from "@/assets/reinhard-pell-portrait.jpg";
import edithPhoto from "@/assets/edith-pell-portrait.jpg";
import katriPhoto from "@/assets/katri-rouvali.jpg";
import edithRockenschaubPhoto from "@/assets/edith-rockenschaub.jpeg";
import krezelPhoto from "@/assets/krezel-simon.jpg";
import bowlingPhoto from "@/assets/rodney-bowling.png";
import michaudPhoto from "@/assets/jacques-michaud.jpg";
import ivanaPhoto from "@/assets/volunteers/ivana.jpeg";
import wittneyPhoto from "@/assets/volunteers/wittney.jpeg";
import biswadipPhoto from "@/assets/volunteers/biswadip.jpeg";
import kathiPhoto from "@/assets/volunteers/kathi.jpeg";

const photos: Record<string, string> = {
  "Reinhard Pell": reinhardPhoto,
  "Edith Pell": edithPhoto,
  "Katri Rouvali": katriPhoto,
  "Edith Rockenschaub": edithRockenschaubPhoto,
};

const volunteerPhotos: Record<string, string> = {
  "Ivana Ursić Ivić": ivanaPhoto,
  "Wittney Sadler": wittneyPhoto,
  "Biswadip Sinha": biswadipPhoto,
  "Kathi Carl": kathiPhoto,
};

import ingePhoto from "@/assets/inge-meijer.jpeg";

const sabPhotos: Record<string, string> = {
  "Dr. Wojciech Krezel": krezelPhoto,
  "Rodney A. Bowling Jr, PhD": bowlingPhoto,
  "Jacques L. Michaud, MD, FRCP": michaudPhoto,
  "Inge Meijer, MD, PhD": ingePhoto,
};

const board = [
  { name: "Reinhard Pell", role: { en: "Founder & Chairman", de: "Gründer & Vorsitzender" },
    bio: { en: "Reinhard is from Salzburg, Austria. He obtained a PhD in chemistry and currently leads a development unit in a pharmaceutical company. The devastating diagnosis of his son's ultra-rare disease changed his life. Together with his wife Edith, he founded Cure MCOPS12 to make the impossible possible — finding a therapy for MCOPS12 patients. In his spare time, Reinhard loves alpine hiking, skiing, and swimming with Simon.",
            de: "Reinhard stammt aus Salzburg. Er promovierte in Chemie und leitet heute eine Entwicklungsabteilung in einem Pharmaunternehmen. Die Diagnose der ultra-seltenen Krankheit seines Sohnes veränderte sein Leben. Gemeinsam mit Edith gründete er Cure MCOPS12 – mit dem Ziel, das Unmögliche möglich zu machen. In seiner Freizeit liebt er Bergwandern, Skifahren und Schwimmen mit Simon." },
    linkedin: "https://www.linkedin.com/in/reinhard-pell-88a1657b/", featured: true },
  { name: "Edith Pell", role: { en: "Co-Founder & Vice Chairwoman", de: "Mitgründerin & Stellv. Vorsitzende" },
    bio: { en: "Edith is from Salzburg, Austria. In addition to her work as a social worker, she manages daily life for Simon — from physiotherapy at home to cooking his favorite foods. She believes that determination, community, and science will lead to a cure. When not with family, she hikes and runs in the mountains around Salzburg.",
            de: "Edith stammt aus Salzburg. Neben ihrer Arbeit als Sozialarbeiterin organisiert sie Simons Alltag – von der Physiotherapie zuhause bis zum Kochen seiner Lieblingsgerichte. Sie ist überzeugt: Entschlossenheit, Gemeinschaft und Wissenschaft führen zur Therapie. Wenn sie nicht bei der Familie ist, läuft und wandert sie in den Salzburger Bergen." },
    featured: true },
  { name: "Edith Rockenschaub", role: { en: "Treasurer", de: "Kassierin" },
    bio: { en: "From Hagenberg, Austria. Brings accounting expertise to the role, working as an accounting clerk in a construction company. Childhood friend of Simon's mom. Loves gardening and baking homemade bread.",
            de: "Aus Hagenberg. Bringt ihre Erfahrung als Buchhalterin in einem Bauunternehmen ein. Kindheitsfreundin von Simons Mama. Liebt Gärtnern und das Backen von Brot." },
    linkedin: "https://www.linkedin.com/in/edith-rockenschaub-8272b1231/" },
  { name: "Katri Rouvali", role: { en: "Secretary", de: "Schriftführerin" },
    bio: { en: "Bio to be added.", de: "Biografie folgt." } },
];

const volunteers = [
  { name: "Ivana Ursić Ivić", role: { en: "Volunteer", de: "Volontärin" },
    bio: { en: "Engineer and drug development specialist from Split, Croatia. Inspired by Reinhard's commitment to securing therapy for all MCOPS12 patients.",
            de: "Ingenieurin und Spezialistin für Wirkstoffentwicklung aus Split, Kroatien. Inspiriert von Reinhards Einsatz für eine Therapie für alle MCOPS12-Patient:innen." },
    linkedin: "https://www.linkedin.com/in/ivana-ursi%C4%87-ivi%C4%87-7ba114113" },
  { name: "Kathi Carl", role: { en: "Volunteer", de: "Volontärin" },
    bio: { en: "Chemist and project manager from Thuringia, Germany. Motivated as a mother to support families doing everything possible for their children.",
            de: "Chemikerin und Projektmanagerin aus Thüringen. Als Mutter motiviert, Familien zu unterstützen, die alles für ihre Kinder geben." } },
  { name: "Wittney Sadler", role: { en: "Fundraising Expert", de: "Fundraising-Expertin" },
    bio: { en: "Based in Vienna, Austria. Passionate about making a difference and giving voice to the voiceless.",
            de: "Lebt in Wien. Setzt sich leidenschaftlich dafür ein, denen eine Stimme zu geben, die keine haben." },
    linkedin: "https://www.linkedin.com/in/wittney-sadler-4b4628114" },
  { name: "Biswadip Sinha", role: { en: "Volunteer", de: "Volontär" },
    bio: { en: "Pharmacist and team leader in pharmaceutical development, originally from Kolkata, India, based in Thuringia, Germany.",
            de: "Pharmazeut und Teamleiter in der pharmazeutischen Entwicklung, ursprünglich aus Kolkata, lebt in Thüringen." },
    linkedin: "https://www.linkedin.com/in/biswadipsinha" },
];

const sab = [
  { name: "Dr. Wojciech Krezel", title: "Research Director, IGBMC", url: "https://www.igbmc.fr/en/igbmc/a-propos-de-ligbmc/directory/wojciech-krezel" },
  { name: "Rodney A. Bowling Jr, PhD", title: "Chief Scientific Officer, TCAR Rare Labs (AlphaRose Therapeutics)" },
  { name: "Jacques L. Michaud, MD, FRCP", title: "Director, Centre de recherche Azrieli du CHU Sainte-Justine; Université de Montréal", url: "https://www.chusj.org/Biography?id=66412bca-6e3c-4bee-b1e6-30d8c88d07d7&lang=en" },
  { name: "Inge Meijer, MD, PhD", title: "Child Neurologist, CHU Sainte-Justine; Université de Montréal" },
];

export default function WhoWeAre({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Über uns" : "About us"}
        title={lang === "de" ? "Wer wir sind" : "Who We Are"}
        sub={lang === "de"
          ? "Cure MCOPS12 ist ein österreichischer Verein, der das Leben von MCOPS12-Patient:innen verbessert und die Forschung zu einer Therapie beschleunigt. Wir sind außerdem eine Plattform für Familien, Forschende und medizinische Fachkräfte."
          : "Cure MCOPS12 is an Austrian nonprofit organization dedicated to improving the lives of those affected by Syndromic Microphthalmia 12 (MCOPS12) and accelerating research to find a cure. We also provide a platform for connection between families, researchers, and healthcare professionals."} />

      <section className="container-tight pb-16">
        <div className="bg-gradient-to-br from-teal to-[hsl(173_58%_28%)] text-white rounded-3xl p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold">{lang === "de" ? "Unsere Mission" : "Our Mission"}</p>
          <p className="mt-3 font-display text-2xl md:text-3xl leading-snug text-balance">
            {lang === "de"
              ? "Unsere Mission ist es, Bewusstsein und Mittel zu schaffen, um wissenschaftliche Forschung und Wirkstoffentwicklung zu unterstützen – mit dem Ziel, eine Therapie für MCOPS12-Patient:innen zu ermöglichen."
              : "Our mission is to raise awareness and funding to support scientific research and drug development that will ultimately result in a cure for MCOPS12 patients."}
          </p>
        </div>
      </section>

      {/* Featured board */}
      <section className="container-wide py-16">
        <SectionTitle eyebrow={lang === "de" ? "Vorstand" : "Board"} title={lang === "de" ? "Vorstandsmitglieder" : "Board Members"} />
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {board.filter(b => b.featured).map(b => (
            <div key={b.name} className="bg-card rounded-3xl overflow-hidden border border-border flex flex-col h-full">
              <Placeholder
                label={b.name}
                src={photos[b.name]}
                objectPosition="center top"
                className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[280px] sm:max-h-[300px] md:max-h-[320px] !rounded-none shrink-0"
              />
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-bold text-navy">{b.name}</h3>
                <p className="text-teal font-semibold mt-1">{b.role[lang]}</p>
                <p className="text-foreground/75 mt-4 leading-relaxed">{b.bio[lang]}</p>
                {b.linkedin && (
                  <a href={b.linkedin} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-teal"><Linkedin className="w-4 h-4"/> LinkedIn</a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {board.filter(b => !b.featured).map(b => (
            <div key={b.name} className="bg-card rounded-2xl border border-border p-6 flex flex-col items-center text-center h-full">
              {photos[b.name] ? (
                <img
                  src={photos[b.name]}
                  alt={b.name}
                  style={{ width: 120, height: 120, objectFit: "cover", objectPosition: "center top", borderRadius: "9999px", display: "block" }}
                  className="mb-4"
                />
              ) : (
                <div className="placeholder-img mb-4 text-xs" style={{ width: 120, height: 120, borderRadius: "9999px" }}>
                  {b.name.split(" ")[0]}
                </div>
              )}
              <h4 className="font-display text-xl font-bold text-navy">{b.name}</h4>
              <p className="text-teal font-semibold text-sm mt-1">{b.role[lang]}</p>
              <p className="text-sm text-foreground/75 mt-3 leading-relaxed">{b.bio[lang]}</p>
              {b.linkedin && <a href={b.linkedin} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-navy hover:text-teal"><Linkedin className="w-3.5 h-3.5"/> LinkedIn</a>}
            </div>
          ))}
        </div>
      </section>

      {/* Volunteers */}
      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionTitle eyebrow={lang === "de" ? "Team" : "Team"} title={lang === "de" ? "Unsere Volontär:innen" : "Volunteers"} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteers.map(v => {
              const photo = volunteerPhotos[v.name];
              return (
                <div key={v.name} className="group relative bg-card rounded-2xl border border-border p-6 text-center overflow-hidden">
                  {photo ? (
                    <img src={photo} alt={v.name}
                      style={{ width: 112, height: 112, objectFit: "cover", objectPosition: "center top", borderRadius: "9999px" }}
                      className="mx-auto mb-4" />
                  ) : (
                    <div className="placeholder-img w-28 h-28 mx-auto !rounded-full mb-4 text-xs">{v.name.split(" ")[0]}</div>
                  )}
                  <h4 className="font-display text-lg font-bold text-navy">{v.name}</h4>
                  <p className="text-sm text-teal font-semibold">{v.role[lang]}</p>
                  <div className="absolute inset-0 bg-navy text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center text-left">
                    <p className="text-sm leading-relaxed">{v.bio[lang]}</p>
                    {v.linkedin && <a href={v.linkedin} target="_blank" rel="noreferrer" className="mt-3 self-start inline-flex items-center gap-1 text-xs font-semibold text-amber"><Linkedin className="w-3.5 h-3.5"/> LinkedIn</a>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SAB */}
      <section className="container-wide py-20">
        <SectionTitle eyebrow={lang === "de" ? "Wissenschaft" : "Science"} title={lang === "de" ? "Wissenschaftlicher Beirat" : "Scientific Advisory Board"} />
        <div className="grid sm:grid-cols-2 gap-6">
          {sab.map(s => {
            const photo = sabPhotos[s.name];
            const Tag: any = s.url ? "a" : "div";
            const props = s.url ? { href: s.url, target: "_blank", rel: "noreferrer" } : {};
            return (
              <Tag key={s.name} {...props}
                className={`bg-card rounded-2xl border border-border p-6 flex gap-5 items-start ${s.url ? "hover:border-teal hover:shadow-[var(--shadow-card)]" : ""} transition`}>
                {photo ? (
                  <img src={photo} alt={s.name}
                    style={{ width: 88, height: 88, objectFit: "cover", objectPosition: "center top", borderRadius: "9999px" }}
                    className="shrink-0" />
                ) : (
                  <div className="placeholder-img shrink-0 text-xs" style={{ width: 88, height: 88, borderRadius: "9999px" }}>
                    {s.name.split(" ")[0]}
                  </div>
                )}
                <div>
                  <h4 className="font-display text-xl font-bold text-navy">{s.name}</h4>
                  <p className="text-sm text-foreground/75 mt-2">{s.title}</p>
                </div>
              </Tag>
            );
          })}
        </div>
      </section>
    </>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <section className="bg-gradient-to-b from-muted/40 to-background pt-16 pb-12">
      <div className="container-tight">
        {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3">{eyebrow}</p>}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-navy text-balance">{title}</h1>
        {sub && <p className="mt-6 text-lg md:text-xl text-foreground/75 max-w-3xl leading-relaxed">{sub}</p>}
      </div>
    </section>
  );
}
