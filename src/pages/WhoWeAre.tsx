import { Linkedin } from "lucide-react";
import { Placeholder, SectionTitle } from "@/components/site/Bits";
import communityImage from "@/assets/whoweare-community.jpg";
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
import valeriePhoto from "@/assets/sab/valerie-chu.jpg";

const sabPhotos: Record<string, string> = {
  "Dr. Wojciech Krezel": krezelPhoto,
  "Rodney A. Bowling Jr, PhD": bowlingPhoto,
  "Jacques L. Michaud, MD, FRCP": michaudPhoto,
  "Inge Meijer, MD, PhD": ingePhoto,
  "Valerie Chu, MD": valeriePhoto,
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
    linkedin: "https://www.linkedin.com/in/edith-rockenschaub-8272b1231/", featured: true },
  { name: "Katri Rouvali", role: { en: "Secretary", de: "Schriftführerin" },
    bio: { en: "Katri is a Finnish expatriate based in Salzburg, Austria. Her international career in drug development brought her to the same company as Reinhard, forming a lifelong friendship with the Pell family. She has over 20 years of experience in pharmaceutical product development, having worked as a scientist, project manager, and leader, with specialization in parenteral drug products for both small molecules and biologics. Driven by a passion for turning seemingly impossible challenges into achievable outcomes, she supports Cure MCOPS12. Outside of her professional work, Katri enjoys sports especially alpine skiing, participating in international sports event management, and knitting at home—often while following winter sports or motorsport on television. Despite living abroad, she remains deeply connected to her Finnish roots, which continue to shape her values, resilience, and outlook on life.",
            de: "Katri ist eine finnische Auswanderin und lebt in Salzburg, Österreich. Ihre internationale Karriere in der Wirkstoffentwicklung führte sie in dasselbe Unternehmen wie Reinhard und begründete eine lebenslange Freundschaft mit der Familie Pell. Sie verfügt über mehr als 20 Jahre Erfahrung in der pharmazeutischen Produktentwicklung – als Wissenschaftlerin, Projektmanagerin und Führungskraft, mit Spezialisierung auf parenterale Arzneiformen für niedermolekulare Wirkstoffe und Biologika. Angetrieben von der Leidenschaft, scheinbar Unmögliches möglich zu machen, unterstützt sie Cure MCOPS12. Privat liebt Katri den Sport, insbesondere alpines Skifahren, engagiert sich im internationalen Sportevent-Management und strickt zu Hause – oft während sie Wintersport oder Motorsport im Fernsehen verfolgt. Trotz ihres Lebens im Ausland bleibt sie ihren finnischen Wurzeln tief verbunden, die ihre Werte, Widerstandskraft und Lebenseinstellung weiterhin prägen." }, featured: true },
];

const volunteers = [
  { name: "Ivana Ursić Ivić", role: { en: "Volunteer", de: "Volontärin" },
    bio: { en: "Engineer and drug development specialist from Split, Croatia. Inspired by Reinhard's commitment to securing therapy for all MCOPS12 patients.",
            de: "Ingenieurin und Spezialistin für Wirkstoffentwicklung aus Split, Kroatien. Inspiriert von Reinhards Einsatz für eine Therapie für alle MCOPS12-Patient:innen." },
    linkedin: "https://www.linkedin.com/in/ivana-ursi%C4%87-ivi%C4%87-7ba114113" },
  { name: "Kathi Carl", role: { en: "Volunteer", de: "Volontärin" },
    bio: { en: "Chemist and project manager from Thuringia, Germany. Motivated as a mother to support families doing everything possible for their children.",
            de: "Chemikerin und Projektmanagerin aus Thüringen. Als Mutter motiviert, Familien zu unterstützen, die alles für ihre Kinder geben." } },
];

const sab = [
  { name: "Dr. Wojciech Krezel", title: "Research Director, IGBMC", url: "https://www.igbmc.fr/en/recherche/teams/brain-development-and-physiology" },
  { name: "Rodney A. Bowling Jr, PhD", title: "Chief Scientific Officer, RareLabs (A Division of AlphaRose Therapeutics)", bio: "Dr. Rodney A. Bowling Jr. serves as the Chief Science Officer of RareLabs (A division of AlphaRose Therapeutics) and To Cure A Rose Foundation (TCAR), dedicating his career to leading scientific strategy and therapeutic development for children with rare monogenic diseases. He earned his Ph.D. in Medical Sciences in 2008 from the Texas A&M University Health Science Center, Institute of Biosciences and Technology. Over his career, Dr. Bowling has directed large scientific teams through the complex design, optimization, and advancement of RNA- and gene-based therapies, successfully guiding numerous programs through FDA and international clinical trials. Applying his extensive translational expertise to MCOPS12, Dr. Bowling and his team delivered critical foundational work for Simon's ASO therapy — identifying ideal target sites and screening allele-specific ASOs, resulting in several promising candidates." },
  { name: "Jacques L. Michaud, MD, FRCP", title: "Director, Centre de recherche Azrieli du CHU Sainte-Justine; Professor of Pediatrics and Neurosciences, Université de Montréal", url: "https://www.chusj.org/Biography?id=66412bca-6e3c-4bee-b1e6-30d8c88d07d7&lang=en" },
  { name: "Inge Meijer, MD, PhD", title: "Child Neurologist, CHU Sainte-Justine; Assistant Clinical Professor, Department of Neurosciences and Department of Pediatrics, Université de Montréal", url: "https://www.chusj.org/Biography?id=a9ea81e4-2dfc-4d16-9d9c-fb47fa484f65&lang=en" },
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
                objectFit="contain"
                objectPosition="center"
                className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[280px] sm:max-h-[300px] md:max-h-[320px] !rounded-none shrink-0 bg-muted"
              />
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-bold text-navy">{b.name}</h3>
                <p className="text-teal font-semibold mt-1">{b.role[lang]}</p>
                <p className="text-foreground/75 mt-4 leading-relaxed">{b.bio[lang]}</p>
                {b.linkedin && (
                  <a href={b.linkedin} target="_blank" rel="noreferrer" className="mt-4 self-start inline-flex items-center gap-1 text-xs font-semibold text-navy hover:text-teal"><Linkedin className="w-3.5 h-3.5"/> LinkedIn</a>
                )}
              </div>
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
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/40 to-background pt-16 pb-12">
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-teal/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-amber/10 blur-3xl" />
      <div className="container-tight relative">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3 animate-fade-in">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-navy text-balance animate-fade-in">
          {title}
        </h1>
        {sub && (
          <p className="mt-6 text-lg md:text-xl text-foreground/75 max-w-3xl leading-relaxed animate-fade-in">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
