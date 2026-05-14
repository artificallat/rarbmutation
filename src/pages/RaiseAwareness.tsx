import { Megaphone, Share2, Users, Heart } from "lucide-react";
import { PageHero } from "./WhoWeAre";
import { SectionTitle } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";

export default function RaiseAwareness({ lang }: { lang: Lang }) {
  const de = lang === "de";

  const ways = de
    ? [
        { icon: Share2, title: "Teile unsere Geschichte", body: "Folge uns auf LinkedIn und Facebook und teile unsere Beiträge mit deinem Netzwerk. Jeder neue Kontakt kann ein nächster Unterstützer sein." },
        { icon: Users, title: "Sprich darüber", body: "Erzähle Freund:innen, Familie und Kolleg:innen von MCOPS12. Persönliche Gespräche erreichen Menschen, die wir online nie sehen würden." },
        { icon: Heart, title: "Unterstütze unsere Aktionen", body: "Beteilige dich an unseren Spendenkampagnen oder organisiere selbst eine kleine Aktion. Jeder Betrag bringt uns näher an eine Therapie." },
      ]
    : [
        { icon: Share2, title: "Share our story", body: "Follow us on LinkedIn and Facebook and share our posts with your network. Every new contact could be the next supporter." },
        { icon: Users, title: "Word of mouth", body: "Tell friends, family and colleagues about MCOPS12. Personal conversations reach people we would never meet online." },
        { icon: Heart, title: "Back our campaigns", body: "Join one of our fundraising campaigns or organise your own small event. Every contribution brings a treatment closer." },
      ];

  return (
    <>
      <PageHero
        eyebrow={de ? "Familien" : "Families"}
        title={de ? "Awareness schaffen" : "Raise Awareness"}
        sub={de
          ? "MCOPS12 ist eine ultra-seltene Erkrankung — die wenigsten Menschen haben je davon gehört. Genau dort kommst du ins Spiel."
          : "MCOPS12 is an ultra-rare disease — most people have never heard of it. That's exactly where you come in."}
      />

      <section className="container-tight pb-12">
        <Reveal>
          <div className="bg-gradient-to-br from-teal to-navy text-white rounded-3xl p-10 md:p-14 shadow-[var(--shadow-card)] flex gap-6 items-start">
            <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/15 items-center justify-center shrink-0">
              <Megaphone className="w-8 h-8" />
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                {de
                  ? "Aufgrund ihrer Seltenheit kennt kaum jemand MCOPS12 — und genau das macht den Unterschied so groß: Jede geteilte Geschichte, jedes Gespräch, jede Spende kann das Leben unserer Kinder verändern."
                  : "Because it's so rare, almost no one knows about MCOPS12 — which is why every shared story, every conversation, every donation can change our children's lives."}
              </p>
              <p className="text-white/90">
                {de
                  ? "Auch ein kleiner Beitrag zählt. Gemeinsam geben wir allen MCOPS12-Patient:innen die Chance auf ein besseres Leben."
                  : "Every little bit makes a difference. Together we can give all MCOPS12 patients a chance at a better life."}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-wide pb-20">
        <SectionTitle eyebrow={de ? "So kannst du helfen" : "How you can help"} title={de ? "Drei Wege, einen Unterschied zu machen" : "Three ways to make a difference"} />
        <div className="grid md:grid-cols-3 gap-6">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={i * 120}>
              <div className="bg-card border border-border rounded-2xl p-7 h-full hover:-translate-y-1 hover:shadow-xl hover:border-teal transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-4 group-hover:bg-teal group-hover:text-white transition-colors">
                  <w.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{w.title}</h3>
                <p className="text-foreground/80 mt-3 leading-relaxed">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href={de ? "/de/donate" : "/donate"} className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3 font-semibold text-navy hover:brightness-95 transition">
            {de ? "Jetzt spenden" : "Donate now"}
          </a>
          <a href={de ? "/de/how-to-get-involved" : "/how-to-get-involved"} className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-semibold text-navy hover:border-teal hover:text-teal transition">
            {de ? "Mehr Möglichkeiten zu helfen" : "More ways to support us"}
          </a>
        </div>
      </section>
    </>
  );
}
