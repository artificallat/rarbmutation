import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { t, type Lang } from "@/content/site";

export default function StickyDonate({ lang }: { lang: Lang }) {
  const p = lang === "de" ? "/de" : "";
  return (
    <Link to={`${p}/donate`}
      className="sm:hidden fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber text-navy font-semibold shadow-[var(--shadow-amber)]">
      <Heart className="w-4 h-4 fill-navy" /> {t[lang].cta.donate}
    </Link>
  );
}
