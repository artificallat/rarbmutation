import { Link } from "react-router-dom";
import { Eye, Activity, Footprints, MessageCircle, Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import { PageHero } from "./WhoWeAre";
import { Reveal } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";
import { geneFmt } from "@/lib/gene";

export default function PlainLanguageMcops12({ lang }: { lang: Lang }) {
  const de = lang === "de";
  const p = de ? "/de" : "";

  const symptoms = de
    ? [
        { icon: Eye, t: "Kleinere Augen", d: "Manche Kinder haben ein oder beide Augen, die kleiner sind als üblich (Mikrophthalmie)." },
        { icon: Activity, t: "Niedriger Muskeltonus", d: "Die Muskeln sind ‚weicher' als normal — das nennt man Hypotonie." },
        { icon: Footprints, t: "Bewegung wird schwerer", d: "Mit der Zeit kommen Bewegungsstörungen wie Dystonie oder Spastik hinzu." },
        { icon: MessageCircle, t: "Sprechen & Lernen", d: "Sprache und Lernen entwickeln sich langsamer als bei anderen Kindern." },
      ]
    : [
        { icon: Eye, t: "Smaller eyes", d: "Some children have one or both eyes that are smaller than usual (microphthalmia)." },
        { icon: Activity, t: "Low muscle tone", d: "Muscles feel ‘softer' than normal — this is called hypotonia." },
        { icon: Footprints, t: "Movement gets harder", d: "Over time, movement disorders such as dystonia or spasticity may appear." },
        { icon: MessageCircle, t: "Speech & learning", d: "Speech and learning develop more slowly than in other children." },
      ];

  const faqs = de
    ? [
        { q: "Was bedeutet MCOPS12 genau?", a: "MCOPS12 ist eine sehr seltene Erkrankung, die beeinflusst, wie sich Gehirn und Augen entwickeln. Sie wird durch eine Veränderung im RARB-Gen verursacht." },
        { q: "Wo kommt die Mutation her?", a: "In den meisten Fällen entsteht die Veränderung neu beim Kind — sie wird nicht von den Eltern vererbt. Das nennt man eine ‚de-novo'-Mutation." },
        { q: "Sind alle Kinder gleich betroffen?", a: "Nein. Jedes Kind ist anders: Manche haben mehr Symptome, andere weniger. Auch die Schwere kann sehr unterschiedlich sein." },
        { q: "Gibt es eine Behandlung?", a: "Aktuell gibt es noch keine zugelassene Therapie. Genau daran arbeiten wir — gemeinsam mit Forschungsteams auf der ganzen Welt." },
      ]
    : [
        { q: "What does MCOPS12 actually mean?", a: "MCOPS12 is a very rare condition that affects how the brain and eyes develop. It is caused by a change in a gene called RARB." },
        { q: "Where does the mutation come from?", a: "In most cases the change happens spontaneously in the child — it is not inherited from the parents. This is called a ‘de novo' mutation." },
        { q: "Are all children affected the same way?", a: "No. Every child is different: some have more symptoms, others fewer. The severity can vary a lot too." },
        { q: "Is there a treatment?", a: "There is no approved treatment yet. That is exactly what we are working on — together with research teams around the world." },
      ];

  return (
    <>
      <PageHero
        eyebrow={de ? "Familien" : "Families"}
        title={de ? "Was ist MCOPS12? — Leicht verständlich" : "What is MCOPS12? — In Plain Language"}
      />

      {/* Hero statement */}
      <section className="container-tight pb-12">
        <Reveal>
          <div className="bg-gradient-to-br from-teal to-[hsl(173_58%_28%)] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <Sparkles className="w-10 h-10 text-amber mb-4" />
            <p className="font-display text-2xl sm:text-3xl leading-snug text-balance">
              {de
                ? "MCOPS12 ist eine sehr seltene Erkrankung, die beeinflusst, wie sich das Gehirn und die Augen eines Kindes entwickeln."
                : "MCOPS12 is a very rare condition that affects how a child's brain and eyes develop."}
            </p>
            <p className="mt-4 text-white/85 text-lg">
              {de
                ? "Sie entsteht durch eine kleine Veränderung in einem Gen namens RARB."
                : "It is caused by a small change in a gene called RARB."}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Symptoms */}
      <section className="container-tight pb-16">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-2">
            {de ? "Was kann man bei einem Kind mit MCOPS12 sehen?" : "What can you see in a child with MCOPS12?"}
          </h2>
          <p className="text-foreground/70 mb-8">
            {de ? "Nicht jedes Kind hat alles davon — und nicht gleich stark." : "Not every child has all of these — and not to the same degree."}
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {symptoms.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.t} delay={i * 100}>
                <div className="group bg-card border border-border rounded-2xl p-6 h-full hover:border-teal hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-amber/15 text-amber flex items-center justify-center mb-4 group-hover:bg-amber group-hover:text-navy group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy">{s.t}</h3>
                  <p className="mt-2 text-foreground/80 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="bg-muted/40 py-16">
        <div className="container-tight">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-2 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-teal" />
              {de ? "Häufige Fragen" : "Common questions"}
            </h2>
            <p className="text-foreground/70 mb-8">
              {de ? "Klick eine Frage an, um die Antwort zu sehen." : "Tap a question to reveal the answer."}
            </p>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <details className="group bg-card border border-border rounded-2xl p-5 hover:border-teal transition-colors open:border-teal open:shadow-xl">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display text-lg font-bold text-navy">
                    <span>{f.q}</span>
                    <span className="w-8 h-8 rounded-full bg-teal/10 text-teal flex items-center justify-center group-open:bg-teal group-open:text-white group-open:rotate-45 transition-all duration-300 text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{geneFmt(f.a)}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call-out: working on it */}
      <section className="container-tight py-16">
        <Reveal>
          <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-3xl p-8 sm:p-12 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold mb-3">
              {de ? "Es gibt Hoffnung" : "There is hope"}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-balance">
              {de
                ? "Es gibt noch keine Therapie — aber wir arbeiten Tag für Tag daran."
                : "There is no treatment yet — but we are working on it every day."}
            </h3>
            <Link
              to={`${p}/research`}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition"
            >
              {de ? "Unsere Forschung ansehen" : "See our research"} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Next steps */}
      <section className="container-tight pb-20">
        <div className="grid sm:grid-cols-2 gap-5">
          <Reveal>
            <Link to={`${p}/what-is-mcops12`} className="group block bg-card border border-border rounded-2xl p-6 hover:border-teal hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">{de ? "Mehr erfahren" : "Learn more"}</p>
              <h4 className="font-display text-xl font-bold text-navy mt-1">{de ? "Wissenschaftliche Details" : "Scientific details"}</h4>
              <p className="text-foreground/75 mt-2">{de ? "Was ist MCOPS12? — die ausführliche Version mit allen medizinischen Details." : "What is MCOPS12? — the in-depth version with all medical details."}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-teal font-semibold group-hover:gap-2 transition-all">→</span>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Link to={`${p}/newly-diagnosed`} className="group block bg-card border border-border rounded-2xl p-6 hover:border-teal hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">{de ? "Neu diagnostiziert?" : "Newly diagnosed?"}</p>
              <h4 className="font-display text-xl font-bold text-navy mt-1">{de ? "Familien-Hub" : "Family hub"}</h4>
              <p className="text-foreground/75 mt-2">{de ? "Du bist nicht allein. Hier findest du andere Familien und erste Schritte." : "You are not alone. Find other families and first steps here."}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-teal font-semibold group-hover:gap-2 transition-all">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
