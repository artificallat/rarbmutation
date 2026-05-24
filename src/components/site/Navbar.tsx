import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Globe, Menu, X } from "lucide-react";
import { t, type Lang } from "@/content/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

function prefix(lang: Lang) { return lang === "de" ? "/de" : ""; }

type NavItem = { to: string; label: string; children?: NavItem[] };

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

  const isActive = (path: string) => {
    const current = pathname.replace(/^\/de/, "") || "/";
    const target = path.replace(/^\/de/, "") || "/";
    return current === target;
  };

  const aboutItems: NavItem[] = [
    { to: `${p}/who-we-are`, label: tr.nav.whoWeAre, children: [
      { to: `${p}/vereinsorgane`, label: tr.nav.vereinsorgane },
      { to: `${p}/scientific-advisory-board`, label: tr.nav.scientificAdvisoryBoard },
    ]},
    { to: `${p}/what-is-mcops12`, label: tr.nav.whatIs, children: [
      { to: `${p}/rarb-gene`, label: tr.nav.gene },
      { to: `${p}/mcops12-disease`, label: tr.nav.disease },
    ]},
  ];
  const achievementsItems: NavItem[] = [
    { to: `${p}/network`, label: tr.nav.network },
    { to: `${p}/funded-rd-programs`, label: tr.nav.fundedRD, children: [
      { to: `${p}/a-cure-for-sophia-and-friends`, label: tr.nav.sophiaProgram },
      { to: `${p}/a-cure-for-sienna`, label: tr.nav.siennaProgram },
    ]},
    { to: `${p}/aso-therapy`, label: tr.nav.asoTherapy },
  ];
  const familiesItems: NavItem[] = [
    { to: `${p}/plain-language-mcops12`, label: tr.nav.plainLanguage, children: [
      { to: `${p}/plain-language-mcops12`, label: tr.nav.descriptionMcops12 },
    ]},
    { to: `${p}/newly-diagnosed`, label: tr.nav.newlyDiagnosed },
    { to: `${p}/how-to-get-involved`, label: tr.nav.howToGetInvolved },
    { to: `${p}/join-natural-history-study`, label: tr.nav.joinNaturalHistory },
    { to: `${p}/raise-awareness`, label: tr.nav.raiseAwareness },
    { to: `${p}/meet-our-kids`, label: tr.nav.kids },
  ];

  const cliniciansItems: NavItem[] = [
    { to: `${p}/research`, label: tr.nav.research },
    { to: `${p}/natural-history-study`, label: tr.nav.naturalHistory },
    { to: `${p}/drug-repurposing`, label: tr.nav.drugRepurposing },
    { to: `${p}/aso-therapy`, label: tr.nav.asoTherapy },
  ];

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
            <Dropdown label={tr.nav.about} items={aboutItems} />
            <Dropdown label={tr.nav.achievements} items={achievementsItems} />
            <Dropdown label={tr.nav.families} items={familiesItems} />
            <Dropdown label={tr.nav.clinicians} items={cliniciansItems} />
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
            className="lg:hidden mt-2 rounded-2xl p-2 shadow-[var(--shadow-card)] max-h-[80vh] overflow-y-auto"
            style={{ backgroundColor: "hsl(var(--navy))", color: "#ffffff" }}
          >
            <Link to={`${p}/`} onClick={() => setOpen(false)} className={cn("flex items-center min-h-[44px] px-3 py-2 rounded-lg text-sm font-medium", isActive(`${p}/`) ? "text-amber" : "text-white")}>{tr.nav.home}</Link>

            <MobileGroup label={tr.nav.about} items={aboutItems} onNavigate={() => setOpen(false)} isActive={isActive} />
            <MobileGroup label={tr.nav.achievements} items={achievementsItems} onNavigate={() => setOpen(false)} isActive={isActive} />
            <MobileGroup label={tr.nav.families} items={familiesItems} onNavigate={() => setOpen(false)} isActive={isActive} />
            <MobileGroup label={tr.nav.clinicians} items={cliniciansItems} onNavigate={() => setOpen(false)} isActive={isActive} />

            <Link
              to={otherPath}
              onClick={() => setOpen(false)}
              className="flex items-center min-h-[44px] px-3 py-2 mt-1 rounded-lg text-sm font-medium"
              style={{ color: "#ffffff" }}
            >
              🌐 {otherLang.toUpperCase()}
            </Link>
            <Link
              to={`${p}/donate`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center min-h-[44px] px-3 py-2 mt-2 rounded-lg font-semibold text-sm"
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

function Dropdown({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <div className="relative group">
      <button className="px-3 py-2 rounded-full text-sm font-medium hover:bg-muted/60 inline-flex items-center gap-1">
        {label} <ChevronDown className="w-3.5 h-3.5 opacity-60" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <div className="min-w-[260px] bg-background rounded-2xl border border-border shadow-[var(--shadow-card)] p-2">
          {items.map(i => (
            <DropdownItem key={i.label} item={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DropdownItem({ item }: { item: NavItem }) {
  if (!item.children?.length) {
    return (
      <Link to={item.to} className="block px-3 py-2 rounded-xl text-sm hover:bg-muted/70">{item.label}</Link>
    );
  }
  return (
    <div className="relative group/sub">
      <Link
        to={item.to}
        className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-sm hover:bg-muted/70"
      >
        {item.label}
        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
      </Link>
      <div className="absolute left-full top-0 pl-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
        <div className="min-w-[240px] bg-background rounded-2xl border border-border shadow-[var(--shadow-card)] p-2">
          {item.children.map(c => (
            <Link key={c.label} to={c.to} className="block px-3 py-2 rounded-xl text-sm hover:bg-muted/70">{c.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({ label, items, onNavigate, isActive }: {
  label: string; items: NavItem[]; onNavigate: () => void; isActive: (p: string) => boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-1">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between min-h-[44px] px-3 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider opacity-80"
      >
        <span>{label}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="pl-1">
          {items.map(i => (
            <MobileSubGroup key={i.label} item={i} onNavigate={onNavigate} isActive={isActive} />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileSubGroup({ item, onNavigate, isActive }: {
  item: NavItem; onNavigate: () => void; isActive: (p: string) => boolean;
}) {
  const [open, setOpen] = useState(false);
  if (!item.children?.length) {
    return (
      <Link to={item.to} onClick={onNavigate} className={cn("flex items-center min-h-[40px] px-3 py-2 rounded-lg text-sm font-medium", isActive(item.to) ? "text-amber" : "text-white")}>{item.label}</Link>
    );
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={cn("w-full flex items-center justify-between min-h-[40px] px-3 py-2 rounded-lg text-sm font-medium", isActive(item.to) ? "text-amber" : "text-white")}
      >
        <span>{item.label}</span>
        <ChevronRight className={cn("w-4 h-4 transition-transform", open && "rotate-90")} />
      </button>
      {open && (
        <div>
          <Link to={item.to} onClick={onNavigate} className="flex items-center min-h-[36px] pl-7 pr-3 py-1 rounded-lg text-xs font-medium text-white/70">↳ {item.label}</Link>
          {item.children.map(c => (
            <Link key={c.label} to={c.to} onClick={onNavigate} className="flex items-center min-h-[36px] pl-7 pr-3 py-1 rounded-lg text-xs font-medium text-white/80">↳ {c.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
}
