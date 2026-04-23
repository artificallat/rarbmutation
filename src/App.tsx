import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/site/Layout";
import Home from "@/pages/Home";
import WhoWeAre from "@/pages/WhoWeAre";
import WhatIs from "@/pages/WhatIs";
import MeetOurKids from "@/pages/MeetOurKids";
import Achievements from "@/pages/Achievements";
import Research from "@/pages/Research";
import Donate from "@/pages/Donate";
import News from "@/pages/News";
import NotFound from "./pages/NotFound.tsx";
import type { Lang } from "@/content/site";

const queryClient = new QueryClient();

const pages = (lang: Lang) => (
  <>
    <Route index element={<Home lang={lang} />} />
    <Route path="who-we-are" element={<WhoWeAre lang={lang} />} />
    <Route path="what-is-mcops12" element={<WhatIs lang={lang} />} />
    <Route path="meet-our-kids" element={<MeetOurKids lang={lang} />} />
    <Route path="achievements" element={<Achievements lang={lang} />} />
    <Route path="research" element={<Research lang={lang} />} />
    <Route path="donate" element={<Donate lang={lang} />} />
    <Route path="news" element={<News lang={lang} />} />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout lang="en" />}>{pages("en")}</Route>
          <Route path="/de" element={<Layout lang="de" />}>{pages("de")}</Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
