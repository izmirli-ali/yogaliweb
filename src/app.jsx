import { Routes, Route } from "react-router-dom";
import useThemeStore from "./store/themeStore";
import Header from "./components/header";
import PersonalCard from "./components/personalCard";
import DesktopMenu from "./components/desktopMenu";

import AboutPage from "./pages/about";
import ResumePage from "./pages/resume";
import WorksPage from "./pages/works";
import ContactPage from "./pages/contact";
import { useEffect, useState } from "preact/hooks";
import useLanguageStore from "./store/languageStore";
import { useTranslation } from "react-i18next";

export function App() {
  const setTheme = useThemeStore((state) => state.setTheme);
  const theme = useThemeStore((state) => state.theme);
  const { i18n } = useTranslation();

  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const lang = localStorage.getItem("language");

    if (theme === "light") setTheme("light");
    if (lang) setLanguage(lang), i18n.changeLanguage(lang);

    setAppLoaded(true);
  });

  return (
    <div className={`${theme === "dark" && "dark"}`}>
      {appLoaded && (
        <div className="min-h-screen bg-[#DDE4EE] text-black dark:bg-[#222222] dark:text-white">
          <div className="max-w-7xl mx-auto">
            <Header />
            <div className="lg:mt-48 grid grid-cols-12 lg:gap-12 lg:pb-20">
              <div className="col-span-4 hidden lg:block sticky h-fit top-40">
                <PersonalCard />
                <div className="h-56"></div>
              </div>
              <div className="col-st col-span-12 lg:col-span-8">
                <div className="hidden lg:block">
                  <DesktopMenu />
                </div>
                <div className="px-4 py-6 md:p-6 lg:p-12 lg:mt-8 bg-white dark:bg-[#111111] lg:rounded-xl">
                  <Routes>
                    <Route path="/" element={<AboutPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/works" element={<WorksPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
