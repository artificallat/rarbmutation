import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Megaphone, Coins, Users } from "lucide-react";
import { PageHero } from "./WhoWeAre";
import { Reveal } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";

export default function HowToGetInvolved({ lang }: { lang: Lang }) {
  const de = lang === "de";
  const p = de ? "/de" : "";

  const actions = [
    {
      icon: HeartHandshake,
      tone: "teal" as const,
      title: de ? "Naturverlaufsstudie beitreten" : "Join the Natural History Study",
      body: de
        ? "Wenn Ihr Kind die Diagnose MCOPS12 erhalten hat, ist die Teilnahme an der Naturverlaufsstudie einer der wirkungsvollsten Schritte. Kontakt:"
        : "If your child has been diagnosed with MCOPS12, joining the Natural History Study is one of the most impactful steps you can take. Contact:",
      cta: { kind: "mail" as const, label: "valerie.chu.hsj@ssss.gouv.qc.ca", href: "mailto:valerie.chu.hsj@ssss.gouv.qc.ca" },
      page: { label: de ? "Mehr zur Studie" : "More about the study", to: `${p}/natural-history` },
    },
    {
      icon: Megaphone,
      tone: "amber" as const,
      title: de ? "Bewusstsein schaffen" : "Raise awareness",
      body: de
        ? "Teilen Sie unsere Geschichte in den sozialen Medien und sprechen Sie über MCOPS12. Jeder Beitrag hilft uns, neu diagnostizierte Familien und neue Unterstützer:innen zu erreichen."
        : "Share our story on social media and tell others about MCOPS12. Every share helps us reach newly diagnosed families and new supporters.",
      page: { label: de ? "So unterstützen Sie" : "Awareness toolkit", to: `${p}/raise-awareness` },
    },
    {
      icon: Coins,
      tone: "teal" as const,
      title: de ? "Spenden" : "Donate",
      body: de
        ? "Ihre Spende fließt direkt in Forschung und Wirkstoffentwicklung — auf dem Weg zu einer Therapie für MCOPS12."
        : "Your donation goes directly into research and drug-development programmes on the path toward a cure.",
      page: { label: de ? "Jetzt spenden" : "Donate now", to: `${p}/donate` },
    },
    {
      icon: Users,
      tone: "amber" as const,
      title: de ? "Mit der Community vernetzen" : "Connect with the community",
      body: de
        ? "Treten Sie unserer privaten Facebook-Gruppe für MCOPS12-Familien bei — Erfahrungen teilen, Fragen stellen, einander tragen."
        : "Join our private Facebook support group for MCOPS12 families — share experiences, ask questions, support each other.",
      cta: { kind: "link" as const, label: "facebook.com/groups/893614881616734", href: "https://www.facebook.com/groups/893614881616734/" },
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={de ? "Familien" : "Families"}
        title={de ? "Wie Sie helfen können" : "How to Get Involved"}
        sub={de
          ? "Es gibt viele Wege, die MCOPS12-Community zu unterstützen — und jeder einzelne zählt."
          : "There are many ways to support the MCOPS12 community — and every single one counts."}
      />

      <section className="container-tight pb-12 pt-4">
        <div className="grid md:grid-cols-2 gap-6">
          {actions.map((a, i) => {
            const Icon = a.icon;
            const teal = a.tone === "teal";
            return (
              <Reveal key={a.title} delay={i * 120}>
                <div className="group relative bg-card border border-border rounded-3xl p-7 h-full hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-teal transition-all duration-300 flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${teal ? "bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white" : "bg-amber/15 text-amber group-hover:bg-amber group-hover:text-navy"} group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="w-7 h-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy">{a.title}</h3>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{a.body}</p>

                  {a.cta && (
                    <a
                      href={a.cta.href}
                      target={a.cta.kind === "link" ? "_blank" : undefined}
                      rel={a.cta.kind === "link" ? "noreferrer" : undefined}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline break-all"
                    >
                      {a.cta.label}
                    </a>
                  )}

                  {a.page && (
                    <Link
                      to={a.page.to}
                      className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-teal transition-colors"
                    >
                      {a.page.label}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-tight pb-20">
        <Reveal>
          <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              {de ? "Bereit, den nächsten Schritt zu gehen?" : "Ready to take the next step?"}
            </h3>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              {de
                ? "Wählen Sie den Weg, der für Sie am besten passt — wir freuen uns auf Sie."
                : "Pick the path that fits you best — we'd love to hear from you."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to={`${p}/natural-history`} className="px-5 py-3 rounded-full bg-teal text-white font-semibold hover:opacity-90 transition">
                {de ? "Naturverlaufsstudie" : "Natural History Study"}
              </Link>
              <Link to={`${p}/raise-awareness`} className="px-5 py-3 rounded-full bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition">
                {de ? "Bewusstsein schaffen" : "Raise Awareness"}
              </Link>
              <Link to={`${p}/donate`} className="px-5 py-3 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition">
                {de ? "Spenden" : "Donate"}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
