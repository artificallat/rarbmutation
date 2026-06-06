import { FlaskConical, Heart, Mail, Facebook, Linkedin, HandHeart, Users, Sparkles, ArrowDown, Quote } from "lucide-react";
import { socials } from "@/content/site";
import { SectionTitle } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";

export default function NewlyDiagnosed({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      {/* Hero — light themed */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/40 via-background to-background">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-teal/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-amber/15 blur-3xl" />

        <div className="container-wide relative pt-20 pb-24 md:pt-24 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-teal/30 px-4 py-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-teal" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-teal">{de ? "Familien" : "Families"}</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance text-navy">
                {de ? "Frisch " : "Newly "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-amber to-amber/70 bg-clip-text text-transparent">
                    {de ? "diagnostiziert" : "Diagnosed"}
                  </span>
                </span>
                <span className="text-navy">?</span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/75 max-w-xl leading-relaxed">
                {de
                  ? "Willkommen in der MCOPS12-Community — ihr seid nicht allein. Hier sind die ersten Schritte, die anderen Familien geholfen haben."
                  : "Welcome to the MCOPS12 community — you are not alone. Here are the first steps that have helped other families."}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#connect" className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-semibold text-navy hover:brightness-95 transition shadow-lg shadow-amber/30">
                  <Users className="w-4 h-4" /> {de ? "Mit der Community vernetzen" : "Connect with the community"}
                </a>
                <a href="#next-steps" className="inline-flex items-center gap-2 rounded-full bg-white border border-navy/20 px-6 py-3 font-semibold text-navy hover:border-navy/40 hover:bg-muted/40 transition">
                  <ArrowDown className="w-4 h-4" /> {de ? "Nächste Schritte" : "See next steps"}
                </a>
              </div>
            </div>

            {/* Reassurance card */}
            <div className="lg:col-span-5 animate-fade-in">
              <div className="relative rounded-3xl bg-white border border-border p-8 shadow-xl">
                <Quote className="w-10 h-10 text-teal mb-4" />
                <p className="font-display text-2xl md:text-3xl font-bold leading-snug text-navy text-balance">
                  {de
                    ? "Das Wichtigste: Ihr seid damit nicht allein."
                    : "Most importantly, you are not facing this alone."}
                </p>
                <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-display text-2xl font-bold text-teal">3</div>
                    <div className="text-[11px] uppercase tracking-wider text-foreground/60 mt-1">{de ? "Organisationen" : "Organisations"}</div>
                  </div>
                  <div className="border-x border-border">
                    <div className="font-display text-2xl font-bold text-teal">1</div>
                    <div className="text-[11px] uppercase tracking-wider text-foreground/60 mt-1">{de ? "Community" : "Community"}</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-teal">∞</div>
                    <div className="text-[11px] uppercase tracking-wider text-foreground/60 mt-1">{de ? "Support" : "Support"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro letter — refined */}
      <section id="next-steps" className="container-tight py-16 md:py-20">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <div className="md:sticky md:top-28">
                <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">{de ? "Ein Brief" : "A letter"}</p>
                <p className="font-display text-xl text-navy font-bold mt-2">
                  {de ? "An eure Familie" : "To your family"}
                </p>
                <div className="hidden md:block mt-4 h-px w-12 bg-teal" />
              </div>
            </div>
            <div className="md:col-span-9 space-y-5 text-foreground/85 leading-relaxed text-lg">
              <p className="font-display text-xl text-navy font-semibold">
                {de ? "Liebe frisch diagnostizierte Familie," : "Dear newly diagnosed family,"}
              </p>
              <p>
                {de
                  ? <>Willkommen in der MCOPS12-Community. Auch wenn diese Diagnose vielleicht nicht das war, was ihr erwartet habt, werdet ihr Teil eines Netzwerks von Familien, die ähnliche Erfahrungen und Wissen teilen. Viele von uns erinnern sich noch genau an den Moment, als wir die MCOPS12-Diagnose (<em>RARB</em>-Genmutation) erhalten haben, und an die Fragen und Unsicherheiten, die damit einhergingen.</>
                  : <>Welcome to the MCOPS12 community. While this diagnosis may not be something you anticipated, you are joining a network of families who share similar experiences and knowledge. Many of us remember the moment of receiving a MCOPS12 (<em>RARB</em> gene mutation) diagnosis and the questions and uncertainties that came with it.</>}
              </p>
              <p>
                {de
                  ? "Auch wenn das Leben jetzt eine andere Richtung nimmt als ursprünglich geplant, finden viele Familien entlang des Weges wertvolle Verbindungen und Unterstützung."
                  : "Although life may now take a different direction than originally planned, many families find meaningful connections and valuable support along the way."}
              </p>
              <div className="border-l-4 border-amber bg-amber/5 rounded-r-2xl px-6 py-4">
                <p className="font-display text-lg md:text-xl font-bold text-navy">
                  {de
                    ? "Wie geht es weiter? Im Folgenden findet ihr Informationen und Schritte, die vielen MCOPS12-Familien früh geholfen haben."
                    : "What comes next? Below you will find information and steps that many MCOPS12 families have found helpful early on."}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <div id="connect" />


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
          <div className="space-y-6">
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
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Share our story */}
              <div className="group relative bg-gradient-to-br from-teal/5 to-teal/10 border border-teal/20 rounded-3xl p-8 space-y-5 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-teal/15 text-teal flex items-center justify-center">
                  <HandHeart className="w-7 h-7" />
                </div>
                <h4 className="font-display text-xl font-bold text-navy">
                  {de ? "Teile unsere Geschichte" : "Share our story"}
                </h4>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {de
                    ? "Folgt uns auf LinkedIn und Facebook und teilt unsere Beiträge. Jeder neue Kontakt kann der nächste Unterstützer sein."
                    : "Follow us on LinkedIn and Facebook and share our posts with your network. Every new contact could be the next supporter."}
                </p>
                <div className="flex gap-3 pt-2">
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white hover:bg-teal transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white hover:bg-teal transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Back our campaign */}
              <div className="group relative bg-gradient-to-br from-amber/10 to-amber/20 border border-amber/30 rounded-3xl p-8 space-y-5 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-amber/25 text-navy flex items-center justify-center">
                  <Heart className="w-7 h-7" />
                </div>
                <h4 className="font-display text-xl font-bold text-navy">
                  {de ? "Unterstütze unsere Kampagne" : "Back our campaign"}
                </h4>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {de
                    ? "Jede Spende bringt uns der Heilung näher. Hilf mit, die Forschung zu MCOPS12 voranzubringen."
                    : "Every donation brings us closer to a cure. Help fund the research that drives MCOPS12 forward."}
                </p>
                <div className="pt-2">
                  <a
                    href={de ? "/de/donate" : "/donate"}
                    className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-semibold text-navy hover:brightness-95 transition shadow-sm"
                  >
                    {de ? "Jetzt spenden" : "Donate now"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
