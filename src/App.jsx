import { useEffect, useState } from "react";

import {
  DEFAULT_LANGUAGE,
  getLanguage,
  getTranslation,
  languages,
} from "./translations";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import MiningSection from "./components/MiningSection";
import TokenomicsSection from "./components/TokenomicsSection";
import RoadmapSection from "./components/RoadmapSection";
import WhitepaperSection from "./components/WhitepaperSection";
import FAQSection from "./components/FAQSection";
import CommunitySection from "./components/CommunitySection";
import SecuritySection from "./components/SecuritySection";
import UpdatesSection from "./components/UpdatesSection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [languageCode, setLanguageCode] = useState(() => {
    const savedLanguage = localStorage.getItem("mai-language");

    const isSupported = languages.some(
      (language) => language.code === savedLanguage
    );

    return isSupported ? savedLanguage : DEFAULT_LANGUAGE;
  });

  const t = getTranslation(languageCode);
  const currentLanguage = getLanguage(languageCode);

  useEffect(() => {
    localStorage.setItem("mai-language", languageCode);

    document.documentElement.lang = languageCode;
    document.documentElement.dir = currentLanguage.direction;
  }, [languageCode, currentLanguage.direction]);

  const changeLanguage = (code) => {
    const isSupported = languages.some(
      (language) => language.code === code
    );

    if (!isSupported) {
      return;
    }

    setLanguageCode(code);
  };

  return (
    <div
      className={`mai-app ${
        currentLanguage.direction === "rtl" ? "rtl" : "ltr"
      }`}
    >
      <Navbar
        t={t}
        languages={languages}
        languageCode={languageCode}
        currentLanguage={currentLanguage}
        changeLanguage={changeLanguage}
      />

      <Hero t={t} />
      <AboutSection t={t} />
      <MiningSection t={t} />
      <TokenomicsSection t={t} />
      <RoadmapSection t={t} />
      <UpdatesSection t={t} />
      <WhitepaperSection t={t} />
      <FAQSection t={t} />
      <CommunitySection t={t} />
      <SecuritySection t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;