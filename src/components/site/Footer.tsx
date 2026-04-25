import { Link } from "react-router-dom";
import { Linkedin, Facebook, Twitter, Mail } from "lucide-react";
import { t, socials, type Lang } from "@/content/site";
import logo from "@/assets/logo.png";

export default function Footer({ lang }: { lang: Lang }) {
  const tr = t[lang].footer;
  const p = lang === "de" ? "/de" : "";
  return (
    <footer className="bg-navy-deep text-white/80 mt-24">
      <div className="container-wide py-16 grid md:grid-cols-3 gap-12">
        <div>
          <Link to={`${p}/`} className="inline-flex items-center mb-4 bg-white rounded-xl px-3 py-2" aria-label="Cure MCOPS12 — Home">
            <img src={logo} alt="Cure MCOPS12" className="h-10 w-auto" />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">{tr.tagline}</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="text-white font-sans font-semibold text-base mb-2">{tr.contact}</p>
          <a href={`mailto:${socials.email}`} className="inline-flex items-center gap-2 hover:text-amber"><Mail className="w-4 h-4" />{socials.email}</a>
          <p className="pt-2">{tr.org}</p>
          <p className="text-white/60">{tr.reg}</p>
        </div>
        <div>
          <p className="text-white font-sans font-semibold text-base mb-3">{tr.follow}</p>
          <div className="flex gap-3">
            {[
              { Icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
              { Icon: Facebook, href: socials.facebook, label: "Facebook" },
              { Icon: Twitter, href: socials.twitter, label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                 className="w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-amber hover:text-navy-deep transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>{tr.rights}</p>
          <div className="flex items-center gap-5">
            <Link to={`${p}/imprint`} className="hover:text-amber transition-colors">
              {lang === "de" ? "Impressum" : "Imprint"}
            </Link>
            <Link to={`${p}/privacy`} className="hover:text-amber transition-colors">
              {lang === "de" ? "Datenschutz" : "Privacy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
