import { Link } from "react-router-dom";
import { PageHero } from "./WhoWeAre";
import type { Lang } from "@/content/site";

export default function HowToGetInvolved({ lang }: { lang: Lang }) {
  const p = lang === "de" ? "/de" : "";
  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Familien" : "Families"}
        title={lang === "de" ? "Wie Sie helfen können" : "How to Get Involved"}
        sub={lang === "de"
          ? "Es gibt mehrere Wege, die MCOPS12-Community zu unterstützen:"
          : "There are several ways you can support the MCOPS12 community:"}
      />
      <section className="container-tight pb-12 space-y-6">
        {[
          {
            title: "Join the Natural History Study",
            body: <>If your child has been diagnosed with MCOPS12, participating in the Natural History Study is one of the most impactful things you can do. Contact: <a href="mailto:valerie.chu.hsj@ssss.gouv.qc.ca" className="text-teal font-semibold hover:underline">valerie.chu.hsj@ssss.gouv.qc.ca</a></>,
          },
          {
            title: "Raise Awareness",
            body: "Share our story on social media and tell others about MCOPS12. Every share helps us reach newly diagnosed families and potential supporters.",
          },
          {
            title: "Donate",
            body: "Your donation directly funds research and drug development programs working toward a cure.",
          },
          {
            title: "Connect with the Community",
            body: <>Join our private Facebook support group for MCOPS12 families: <a href="https://www.facebook.com/groups/893614881616734/" target="_blank" rel="noreferrer" className="text-teal font-semibold hover:underline break-all">facebook.com/groups/893614881616734</a></>,
          },
        ].map((item) => (
          <div key={item.title} className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-display text-xl font-bold text-navy">{item.title}</h3>
            <p className="mt-2 text-foreground/80 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </section>
      <section className="container-tight pb-20 flex flex-wrap gap-3">
        <Link to={`${p}/natural-history`} className="px-5 py-3 rounded-full bg-teal text-white font-semibold hover:opacity-90">Join the Natural History Study</Link>
        <Link to={`${p}/raise-awareness`} className="px-5 py-3 rounded-full bg-navy text-white font-semibold hover:opacity-90">Raise Awareness</Link>
        <Link to={`${p}/donate`} className="px-5 py-3 rounded-full bg-amber text-navy font-semibold hover:opacity-90">Donate</Link>
      </section>
    </>
  );
}
