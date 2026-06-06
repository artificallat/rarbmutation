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
import KidProfile from "@/pages/KidProfile";
import Achievements from "@/pages/Achievements";
import Research from "@/pages/Research";
import Network from "@/pages/Network";
import NaturalHistory from "@/pages/NaturalHistory";
import Donate from "@/pages/Donate";
import News from "@/pages/News";
import Vereinsorgane from "@/pages/Vereinsorgane";
import ScientificAdvisoryBoard from "@/pages/ScientificAdvisoryBoard";
import PlainLanguageMcops12 from "@/pages/PlainLanguageMcops12";
import HowToGetInvolved from "@/pages/HowToGetInvolved";
import FundedRDPrograms from "@/pages/FundedRDPrograms";
import DrugRepurposing from "@/pages/DrugRepurposing";
import AsoTherapy from "@/pages/AsoTherapy";
import OurStory from "@/pages/OurStory";
import JoinNaturalHistoryStudy from "@/pages/JoinNaturalHistoryStudy";
import NaturalHistoryStudy from "@/pages/NaturalHistoryStudy";

import NewlyDiagnosed from "@/pages/NewlyDiagnosed";
import RarbGene from "@/pages/RarbGene";
import Mcops12Disease from "@/pages/Mcops12Disease";
import SophiaAndFriends from "@/pages/SophiaAndFriends";
import CureForSienna from "@/pages/CureForSienna";
import Imprint from "@/pages/Imprint";
import Privacy from "@/pages/Privacy";
import NotFound from "./pages/NotFound.tsx";
import type { Lang } from "@/content/site";

const queryClient = new QueryClient();

const pages = (lang: Lang) => (
  <>
    <Route index element={<Home lang={lang} />} />
    <Route path="who-we-are" element={<WhoWeAre lang={lang} />} />
    <Route path="what-is-mcops12" element={<WhatIs lang={lang} />} />
    <Route path="rarb-gene" element={<RarbGene lang={lang} />} />
    <Route path="mcops12-disease" element={<Mcops12Disease lang={lang} />} />
    <Route path="meet-our-kids" element={<MeetOurKids lang={lang} />} />
    <Route path="meet-our-kids/:slug" element={<KidProfile lang={lang} />} />
    <Route path="achievements" element={<Achievements lang={lang} />} />
    <Route path="research" element={<Research lang={lang} />} />
    <Route path="network" element={<Network lang={lang} />} />
    <Route path="natural-history" element={<NaturalHistory lang={lang} />} />
    <Route path="donate" element={<Donate lang={lang} />} />
    <Route path="news" element={<News lang={lang} />} />
    <Route path="vereinsorgane" element={<Vereinsorgane lang={lang} />} />
    <Route path="organisation" element={<Vereinsorgane lang={lang} />} />
    <Route path="scientific-advisory-board" element={<ScientificAdvisoryBoard lang={lang} />} />
    <Route path="plain-language-mcops12" element={<PlainLanguageMcops12 lang={lang} />} />
    <Route path="how-to-get-involved" element={<HowToGetInvolved lang={lang} />} />
    <Route path="funded-rd-programs" element={<FundedRDPrograms lang={lang} />} />
    <Route path="a-cure-for-sophia-and-friends" element={<SophiaAndFriends lang={lang} />} />
    <Route path="a-cure-for-sienna" element={<CureForSienna lang={lang} />} />
    <Route path="drug-repurposing" element={<DrugRepurposing lang={lang} />} />
    <Route path="aso-therapy" element={<AsoTherapy lang={lang} />} />
    <Route path="our-story" element={<OurStory lang={lang} />} />
    <Route path="join-natural-history-study" element={<JoinNaturalHistoryStudy lang={lang} />} />
    <Route path="natural-history-study" element={<NaturalHistoryStudy lang={lang} />} />
    <Route path="raise-awareness" element={<HowToGetInvolved lang={lang} />} />
    <Route path="newly-diagnosed" element={<NewlyDiagnosed lang={lang} />} />
    <Route path="imprint" element={<Imprint lang={lang} />} />
    <Route path="privacy" element={<Privacy lang={lang} />} />
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
