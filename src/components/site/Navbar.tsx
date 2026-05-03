import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { t, type Lang } from "@/content/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

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
    <header className={cn("sticky top-0 z-40 transition-all", scrolled ? "py-2" : "py-0")}>
      <div className={cn("transition-all", scrolled ? "container-wide" : "max-w-none px-0")}>
        <nav className={cn(
          "flex items-center justify-between transition-all",
          scrolled
            ? "pill-nav px-4 sm:px-6 py-3 rounded-full"
            : "px-5 sm:px-8 py-4 rounded-none bg-background/80 backdrop-blur-md border-b border-border/60"
        )}>
          <Link to={`${p}/`} className="flex items-center shrink-0" aria-label="Cure MCOPS12 — Home">
            <img src={logo} alt="Cure MCOPS12" className="h-10 sm:h-11 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <NavLink to={`${p}/`} end className={({isActive}) => cn("px-3 py-2 rounded-full text-sm font-medium hover:bg-muted/60", isActive && "text-navy")}>{tr.nav.home}</NavLink>
            <Dropdown label={tr.nav.about} items={[
              { to: `${p}/who-we-are`, label: tr.nav.whoWeAre },
              { to: `${p}/what-is-mcops12`, label: tr.nav.whatIs },
            ]} />
            <NavLink to={`${p}/meet-our-kids`} className={({isActive}) => cn("px-3 py-2 rounded-full text-sm font-medium hover:bg-muted/60", isActive && "text-navy")}>{tr.nav.kids}</NavLink>
            <Dropdown label={tr.nav.ourWork} items={[
              { to: `${p}/achievements`, label: tr.nav.achievements },
              { to: `${p}/network`, label: tr.nav.network },
              { to: `${p}/research`, label: tr.nav.research },
              { to: `${p}/natural-history`, label: tr.nav.naturalHistory },
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
          <div
            className="lg:hidden mt-2 rounded-2xl p-4 space-y-1 shadow-[var(--shadow-card)]"
            style={{ backgroundColor: "hsl(var(--navy))", color: "#ffffff" }}
          >
            {[
              { to: `${p}/`, label: tr.nav.home },
              { to: `${p}/who-we-are`, label: tr.nav.whoWeAre },
              { to: `${p}/what-is-mcops12`, label: tr.nav.whatIs },
              { to: `${p}/meet-our-kids`, label: tr.nav.kids },
              { to: `${p}/achievements`, label: tr.nav.achievements },
              { to: `${p}/research`, label: tr.nav.research },
              { to: `${p}/news`, label: tr.nav.news },
            ].map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="flex items-center min-h-[48px] px-4 py-3 rounded-lg text-base font-medium"
                style={{ color: "#ffffff" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to={otherPath}
              onClick={() => setOpen(false)}
              className="flex items-center min-h-[48px] px-4 py-3 rounded-lg text-base font-medium"
              style={{ color: "#ffffff" }}
            >
              🌐 {otherLang.toUpperCase()}
            </Link>
            <Link
              to={`${p}/donate`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center min-h-[48px] px-4 py-3 mt-2 rounded-lg font-semibold text-base"
              style={{ backgroundColor: "hsl(var(--amber))", color: "hsl(var(--navy))" }}
            >
              {tr.cta.donate}
            </Link>
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
