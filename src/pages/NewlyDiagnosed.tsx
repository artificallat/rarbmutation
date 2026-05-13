import { Users, FlaskConical, Heart, Mail, Facebook } from "lucide-react";
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

      <section className="container-tight pb-12 space-y-6 text-foreground/85 leading-relaxed text-lg">
        <p>
          {de
            ? "Liebe frisch diagnostizierte Familie, willkommen in der MCOPS12-Community. Diese Diagnose habt ihr euch sicher nicht ausgesucht — aber ihr werdet Teil eines Netzwerks von Familien, die ähnliche Wege gehen. Viele von uns erinnern sich noch genau an den Moment, als wir zum ersten Mal von der RARB-Genmutation gehört haben, und an die vielen Fragen, die mit ihr kamen."
            : "Dear newly diagnosed family, welcome to the MCOPS12 community. This diagnosis is likely not what you expected — but you are joining a network of families who share similar experiences. Many of us still remember the moment we first heard about the RARB gene mutation and the questions that came with it."}
        </p>
        <p>
          {de
            ? "Das Leben nimmt jetzt vielleicht eine andere Richtung als geplant. Trotzdem entstehen oft tiefe Verbindungen und wertvolle Unterstützung entlang des Weges. Das Wichtigste: Ihr seid damit nicht alleine."
            : "Life may now take a different direction than originally planned, but families often find meaningful connections and valuable support along the way. Most importantly, you are not facing this alone."}
        </p>
        <p>
          {de
            ? "Im Folgenden findet ihr die ersten Schritte, die anderen MCOPS12-Familien geholfen haben."
            : "Below are the first steps that many MCOPS12 families have found helpful early on."}
        </p>
      </section>

      <section className="container-wide pb-12">
        <SectionTitle eyebrow="01" title={de ? "Vernetzt euch" : "Get connected"} />
        <Reveal>
          <div className="bg-card border border-border rounded-3xl p-8 space-y-6">
            <p className="text-foreground/85 leading-relaxed">
              {de
                ? "Wir haben eine private Facebook-Gruppe für betroffene Familien. Tritt bei und tausche dich mit anderen aus."
                : "We have a private Facebook group for MCOPS12 families. Join the community and connect with others."}
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
                  ? "Du kannst dich auch direkt an uns oder an unsere Partnerorganisationen wenden:"
                  : "You can also reach out directly to us or to our partner organisations:"}
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { name: "Cure MCOPS12", emails: ["epell@rarbmutation.org", "rpell@rarbmutation.org"] },
                  { name: "A Cure for Sophia and Friends", emails: ["Outreach@aCureforSophiaandFriends.com"] },
                  { name: "A Cure for Sienna", emails: ["acureforsienna@gmail.com"] },
                ].map(o => (
                  <div key={o.name} className="rounded-2xl border border-border p-4">
                    <p className="font-display font-bold text-navy">{o.name}</p>
                    <ul className="mt-2 space-y-1">
                      {o.emails.map(e => (
                        <li key={e}>
                          <a href={`mailto:${e}`} className="text-teal text-sm font-semibold hover:underline break-all inline-flex items-center gap-1">
                            <Mail className="w-3 h-3" /> {e}
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
              <h3 className="font-display text-2xl font-bold">{de ? "MCOPS12 Natural History Study" : "MCOPS12 Natural History Study"}</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              {de
                ? "Cure MCOPS12, A Cure for Sophia and Friends und A Cure for Sienna haben gemeinsam mit dem CHU Sainte-Justine (Montréal, Kanada) ein Patientenregister und eine Natural History Study aufgebaut. Die Studie läuft seit 2024."
                : "Cure MCOPS12, A Cure for Sophia and Friends and A Cure for Sienna have partnered with CHU Sainte-Justine (Montréal, Canada) to establish a patient registry and conduct a natural history study. The study has been underway since 2024."}
            </p>
            <p className="text-white/85 leading-relaxed">
              {de
                ? "Daten werden über Fragebögen, klinische Untersuchungen und das Hochladen medizinischer Befunde gesammelt. Seit 2026 umfasst die Studie zusätzlich Biomarker-Forschung mit EEG sowie metabolomischen und proteomischen Analysen von Blutplasmaproben."
                : "Data is collected through questionnaires, clinical assessments and uploads of medical records. In 2026, the study was expanded to include biomarker research, comprising EEG as well as metabolomic and proteomic analyses of patient blood plasma samples."}
            </p>
            <p className="text-white/85 leading-relaxed">
              {de
                ? "Eure Teilnahme ist entscheidend, um zu verstehen, wie sich die Erkrankung über die Zeit verändert."
                : "Your participation is crucial to improving our understanding of disease phenotypes and how they change over time."}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/join-natural-history-study" className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-semibold text-navy hover:brightness-95 transition">
                {de ? "Zur Studienseite" : "Join the Natural History Study"}
              </a>
              <a href="mailto:valerie.chu.hsj@ssss.gouv.qc.ca" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                <Mail className="w-4 h-4" /> valerie.chu.hsj@ssss.gouv.qc.ca
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-wide pb-20">
        <SectionTitle eyebrow="03" title={de ? "Etwas bewegen" : "Make a difference"} />
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
                ? "Den größten Hebel haben unsere Familien beim Sichtbar-Machen der Erkrankung und beim Sammeln von Spenden. Da MCOPS12 ultra-selten ist, liegt es an uns, sie bekannt zu machen — und Forschung braucht Mittel, um voranzukommen. Du kannst zum Beispiel deine eigene Spendenaktion organisieren oder bestehende Kampagnen unterstützen."
                : "The largest impacts our families can make are by spreading awareness and by fundraising. Since MCOPS12 is ultra-rare, it is up to us to make it known — and research needs funding to keep moving forward. For instance, you can organise your own fundraising event or support an ongoing campaign."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/raise-awareness" className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-semibold text-white hover:brightness-95 transition">
                <Users className="w-4 h-4" /> {de ? "Awareness schaffen" : "Raise Awareness"}
              </a>
              <a href="/donate" className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-semibold text-navy hover:brightness-95 transition">
                {de ? "Jetzt spenden" : "Donate"}
              </a>
              <a href="https://give.rarevillage.org/campaign/a-cure-for-sophia-and-friends/c531407" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-navy hover:border-teal hover:text-teal transition">
                {de ? "Beispiel-Kampagne" : "Example campaign"}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
