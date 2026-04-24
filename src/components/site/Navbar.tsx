import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { t, type Lang } from "@/content/site";
import { cn } from "@/lib/utils";

function prefix(lang: Lang) { return lang === "de" ? "/de" : ""; }

export default function Navbar({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const p = prefix(lang);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const otherLang: Lang = lang === "en" ? "de" : "en";
  const otherPath = (() => {
    if (lang === "en") return "/de" + (pathname === "/" ? "" : pathname);
    return pathname.replace(/^\/de/, "") || "/";
  })();

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    cn("text-sm font-medium transition-colors hover:text-navy",
      isActive ? "text-navy" : "text-foreground/70");

  return (
    <header className={cn("sticky top-0 z-40 transition-all", scrolled ? "py-2" : "py-4")}>
      <div className="container-wide">
        <nav className={cn("pill-nav flex items-center justify-between px-4 sm:px-6 py-3 transition-all")}>
          <Link to={`${p}/`} className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-navy to-teal grid place-items-center text-white font-display font-bold">C</div>
            <span className="font-display font-bold text-lg leading-none">Cure<span className="text-teal">MCOPS12</span></span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Dropdown label={tr.nav.about} items={[
              { to: `${p}/who-we-are`, label: tr.nav.whoWeAre },
              { to: `${p}/what-is-mcops12`, label: tr.nav.whatIs },
            ]} />
            <NavLink to={`${p}/meet-our-kids`} className={({isActive}) => cn("px-3 py-2 rounded-full text-sm font-medium hover:bg-muted/60", isActive && "text-navy")}>{tr.nav.kids}</NavLink>
            <Dropdown label={tr.nav.ourWork} items={[
              { to: `${p}/achievements`, label: tr.nav.achievements },
              { to: `${p}/research`, label: tr.nav.research },
              { to: `${p}/research#natural-history`, label: tr.nav.naturalHistory },
              { to: `${p}/achievements#network`, label: tr.nav.network },
            ]} />
            <NavLink to={`${p}/news`} className={({isActive}) => cn("px-3 py-2 rounded-full text-sm font-medium hover:bg-muted/60", isActive && "text-navy")}>{tr.nav.news}</NavLink>
          </div>

          <div className="flex items-center gap-2">
            <Link to={otherPath} className="hidden sm:inline-flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-full hover:bg-muted/60">
              <Globe className="w-4 h-4" /> {otherLang.toUpperCase()}
            </Link>
            <Link to={`${p}/donate`} className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber text-navy font-semibold text-sm hover:bg-amber-deep transition-colors shadow-[var(--shadow-amber)]">
              {tr.cta.donate}
            </Link>
            <button onClick={() => setOpen(o => !o)} className="lg:hidden p-2 rounded-full hover:bg-muted/60" aria-label="Menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl p-4 space-y-1 animate-in fade-in bg-navy text-white shadow-[var(--shadow-card)] border border-navy-deep">
            {[
              { to: `${p}/who-we-are`, label: tr.nav.whoWeAre },
              { to: `${p}/what-is-mcops12`, label: tr.nav.whatIs },
              { to: `${p}/meet-our-kids`, label: tr.nav.kids },
              { to: `${p}/achievements`, label: tr.nav.achievements },
              { to: `${p}/research`, label: tr.nav.research },
              { to: `${p}/news`, label: tr.nav.news },
            ].map(l => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="flex items-center min-h-[48px] px-4 py-3 rounded-lg hover:bg-white/10 text-base font-medium text-white">{l.label}</NavLink>
            ))}
            <Link to={otherPath} onClick={() => setOpen(false)} className="flex items-center min-h-[48px] px-4 py-3 rounded-lg hover:bg-white/10 text-base font-medium text-white">🌐 {otherLang.toUpperCase()}</Link>
            <Link to={`${p}/donate`} onClick={() => setOpen(false)} className="flex items-center justify-center min-h-[48px] px-4 py-3 mt-2 rounded-lg bg-amber text-navy font-semibold text-base hover:bg-amber-deep">{tr.cta.donate}</Link>
          </div>
        )}
      </div>
    </header>
  );
}

function Dropdown({ label, items }: { label: string; items: { to: string; label: string }[] }) {
  return (
    <div className="relative group">
      <button className="px-3 py-2 rounded-full text-sm font-medium hover:bg-muted/60 inline-flex items-center gap-1">
        {label} <ChevronDown className="w-3.5 h-3.5 opacity-60" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <div className="min-w-[260px] bg-background rounded-2xl border border-border shadow-[var(--shadow-card)] p-2">
          {items.map(i => (
            <Link key={i.to} to={i.to} className="block px-3 py-2 rounded-xl text-sm hover:bg-muted/70">{i.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
