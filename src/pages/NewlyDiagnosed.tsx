import { FlaskConical, Heart, Mail, Facebook, Linkedin, HandHeart } from "lucide-react";
import { socials } from "@/content/site";
import { PageHero } from "./WhoWeAre";
import { SectionTitle } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";

export default function NewlyDiagnosed({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero
        eyebrow={de ? "Familien" : "Families"}
        title={de ? "Frisch diagnostiziert" : "Newly Diagnosed"}
        sub={de
          ? "Willkommen in der MCOPS12-Community — du bist nicht allein."
          : "Welcome to the MCOPS12 community — you are not alone."}
      />

      <section className="container-tight pb-12 space-y-5 text-foreground/85 leading-relaxed text-lg">
        <p>{de ? "Liebe frisch diagnostizierte Familie," : "Dear newly diagnosed family,"}</p>
        <p>
          {de
            ? <>Willkommen in der MCOPS12-Community. Auch wenn diese Diagnose vielleicht nicht das war, was ihr erwartet habt, werdet ihr Teil eines Netzwerks von Familien, die ähnliche Erfahrungen und Wissen teilen. Viele von uns erinnern sich noch genau an den Moment, als wir die MCOPS12-Diagnose (<em>RARB</em>-Genmutation) erhalten haben, und an die Fragen und Unsicherheiten, die damit einhergingen. Auch wenn das Leben jetzt eine andere Richtung nimmt als ursprünglich geplant, finden viele Familien entlang des Weges wertvolle Verbindungen und Unterstützung.</>
            : <>Welcome to the MCOPS12 community. While this diagnosis may not be something you anticipated, you are joining a network of families who share similar experiences and knowledge. Many of us remember the moment of receiving a MCOPS12 (<em>RARB</em> gene mutation) diagnosis and the questions and uncertainties that came with it. Although life may now take a different direction than originally planned, many families find meaningful connections and valuable support along the way.</>}
        </p>
        <p className="font-bold text-navy">
          {de ? "Das Wichtigste: Ihr seid damit nicht allein." : "Most importantly, you are not facing this alone."}
        </p>
        <p>
          {de
            ? "Wie geht es weiter? Im Folgenden findet ihr Informationen und Schritte, die vielen MCOPS12-Familien früh geholfen haben."
            : "What comes next? Below you will find information and steps that many MCOPS12 families have found helpful early on."}
        </p>
      </section>

      <section className="container-wide pb-12">
        <SectionTitle eyebrow="01" title={de ? "Vernetzt euch mit der Community" : "Connect with the community"} />
        <Reveal>
          <div className="bg-card border border-border rounded-3xl p-8 space-y-6">
            <p className="text-foreground/85 leading-relaxed">
              {de
                ? "Wir haben eine private Facebook-Gruppe (MCOPS12 Patient Families – Support Group). Klickt hier, tretet der Community bei und vernetzt euch mit anderen Familien."
                : "We have a private facebook page (MCOPS12 Patient Families – Support Group). Click here, join the community and connect with other families."}
            </p>
            <a
              href="https://www.facebook.com/groups/893614881616734/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-semibold text-white hover:brightness-95 transition"
            >
              <Facebook className="w-4 h-4" /> MCOPS12 Patient Families — Support Group
            </a>

            <div className="pt-4 border-t border-border space-y-4">
              <p className="text-foreground/85">
                {de
                  ? "Zusätzlich könnt ihr euch auch direkt an uns oder an unsere Partnerorganisationen A Cure for Sophia and Friends in den USA und A Cure for Sienna in Australien wenden."
                  : "In addition, you can also directly reach out either to us or to our partner organizations A Cure for Sophia and Friends in the United States and A Cure for Sienna in Australia."}
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { name: "Cure MCOPS12", contacts: [{ label: "Edith Pell", email: "epell@rarbmutation.org" }, { label: "Reinhard Pell", email: "rpell@rarbmutation.org" }] },
                  { name: "A Cure for Sophia and Friends", contacts: [{ label: "", email: "Outreach@aCureforSophiaandFriends.com" }] },
                  { name: "A Cure for Sienna", contacts: [{ label: "", email: "acureforsienna@gmail.com" }] },
                ].map(o => (
                  <div key={o.name} className="rounded-2xl border border-border p-4">
                    <p className="font-display font-bold text-navy">{o.name}</p>
                    <ul className="mt-2 space-y-1">
                      {o.contacts.map(c => (
                        <li key={c.email} className="text-sm">
                          {c.label && <span className="text-foreground/70">{c.label}: </span>}
                          <a href={`mailto:${c.email}`} className="text-teal font-semibold hover:underline break-all inline-flex items-center gap-1">
                            <Mail className="w-3 h-3" /> {c.email}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-wide pb-12">
        <SectionTitle eyebrow="02" title={de ? "An der Forschung teilnehmen" : "Participate in research"} />
        <Reveal>
          <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-3xl p-8 md:p-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber/20 text-amber flex items-center justify-center">
                <FlaskConical className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold">MCOPS12 Natural History Study</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              {de
                ? "Cure MCOPS12, A Cure for Sophia and Friends und A Cure for Sienna haben sich mit dem CHU Sainte-Justine (Montréal, Kanada) zusammengeschlossen, um ein Patientenregister aufzubauen und eine Natural History Study durchzuführen. Die Studie läuft seit 2024."
                : "Cure MCOPS12, A Cure for Sophia and Friends, and A Cure for Sienna have partnered with CHU Sainte-Justine (Montréal, Canada) to establish a patient registry and conduct a natural history study. The study has been underway since 2024."}
            </p>
            <p className="text-white/85 leading-relaxed">
              {de
                ? "Daten werden über verschiedene Wege erhoben — Fragebögen, klinische Untersuchungen und das Hochladen medizinischer Befunde. 2026 wurde die Studie um Biomarker-Forschung erweitert, darunter EEG sowie metabolomische und proteomische Analysen von Blutplasmaproben der Patient:innen."
                : "Data are collected through multiple approaches, including questionnaires, clinical assessments, and the upload of medical records. In 2026, the study was expanded to include biomarker research, comprising EEG as well as metabolomic and proteomic analyses of patient blood plasma samples."}
            </p>
            <p className="text-white/90 leading-relaxed font-semibold">
              {de
                ? "Eure Teilnahme ist entscheidend, um zu verstehen, wie sich die Erkrankung über die Zeit verändert."
                : "Your participation is crucial to improving our understanding of disease phenotypes and how they change over time."}{" "}
              <span className="font-normal text-white/85">
                {de ? "Mehr Infos: " : "To learn more, click "}
                <a href="/join-natural-history-study" className="underline hover:text-amber">
                  {de ? "Zur Natural History Study" : "Join The Natural History Study"}
                </a>.
              </span>
            </p>
            <div className="pt-4 border-t border-white/20 space-y-2">
              <p className="text-white/90">
                <span className="font-bold">{de ? "Interesse?" : "Interested?"}</span>{" "}
                {de
                  ? "Kontaktiert Valerie Chu, genetische Beraterin und Studienkoordinatorin am CHU Sainte-Justine."
                  : "Contact Valerie Chu, genetic counsellor and study coordinator, CHU Sainte-Justine"}
              </p>
              <a href="mailto:valerie.chu.hsj@ssss.gouv.qc.ca" className="inline-flex items-center gap-2 text-amber hover:underline font-semibold">
                <Mail className="w-4 h-4" /> valerie.chu.hsj@ssss.gouv.qc.ca
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-wide pb-20">
        <SectionTitle eyebrow="03" title={de ? "Awareness schaffen" : "Raise awareness"} />
        <Reveal>
          <div className="bg-card border border-border rounded-3xl p-8 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal flex items-center justify-center">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy">{de ? "Awareness und Fundraising" : "Awareness and fundraising"}</h3>
            </div>
            <p className="text-foreground/85 leading-relaxed">
              {de
                ? "Den größten Hebel haben unsere Familien beim Sichtbar-Machen der Erkrankung und beim Sammeln von Spenden. Da MCOPS12 ultra-selten ist, liegt es an uns, sie bekannt zu machen — und Forschung braucht Mittel, um voranzukommen."
                : "The largest impacts our families can make are by spreading awareness and by fundraising. Since MCOPS12 is ultra-rare, it is up to us to make it known — and research needs funding to keep moving forward."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={de ? "/de/meet-our-kids" : "/meet-our-kids"} className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-semibold text-white hover:brightness-95 transition">
                <Users className="w-4 h-4" /> {de ? "Awareness schaffen" : "Raise Awareness"}
              </a>
              <a href={de ? "/de/donate" : "/donate"} className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-semibold text-navy hover:brightness-95 transition">
                {de ? "Jetzt spenden" : "Donate"}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
