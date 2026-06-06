import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyDonate from "./StickyDonate";
import RouteSeo from "./RouteSeo";
import type { Lang } from "@/content/site";

export default function Layout({ lang }: { lang: Lang }) {
  const { pathname } = useLocation();
  // Reset scroll on nav
  if (typeof window !== "undefined") {
    queueMicrotask(() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }));
  }
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden" key={pathname}>
      <RouteSeo lang={lang} />
      <Navbar lang={lang} />
      <main className="flex-1 pb-24 md:pb-0">
        <Outlet />
      </main>
      <Footer lang={lang} />
      <StickyDonate lang={lang} />
    </div>
  );
}
