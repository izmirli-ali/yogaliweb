import { useState, useMemo } from "preact/hooks";
import useThemeStore from "../store/themeStore";
import {
  SunIcon,
  MoonIcon,
  MenuIcon,
  XIcon,
  UserIcon,
  NewspaperIcon,
  CubeTransparentIcon,
  RssIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./logo";
import { useTranslation } from "react-i18next";
import useLanguageStore from "../store/languageStore";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const language = useLanguageStore((state) => state.lang);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const langs = ["en", "tr"];

  const onClickThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const onClickMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const onClickLangToggle = () => {
    const newLanguage = langs[(langs.indexOf(language) + 1) % langs.length];

    localStorage.setItem("language", newLanguage);
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const routes = [
    {
      main: true,
      key: "about",
      title: t("menuAbout"),
      Icon: UserIcon,
    },
    {
      key: "resume",
      title: t("menuResume"),
      Icon: NewspaperIcon,
    },
    {
      key: "works",
      title: t("menuWorks"),
      Icon: CubeTransparentIcon,
    },
    // {
    //   key: "blogs",
    //   title: t("menuBlogs"),
    //   Icon: RssIcon,
    // },
    {
      key: "contact",
      title: t("menuContact"),
      Icon: UserGroupIcon,
    },
  ];

  const activeRoute = useMemo(() => {
    const mainRoute = routes[0];
    const key = location.pathname.split("/").at(-1);
    if (key === "") return mainRoute;

    return (
      routes.find((route) => route.key.toLowerCase() === key.toLowerCase()) ||
      mainRoute
    );
  }, [location]);

  const isActive = (route) => route.key === activeRoute?.key;
  const onClickLink = (item) => {
    setMenuOpen(false);
    navigate(`/${item.key}`);
  };

  return (
    <div className="px-4 py-4 md:py-8 bg-slate-100 dark:bg-black lg:dark:bg-transparent lg:bg-transparent lg:px-0 lg:py-12 flex items-center justify-between relative">
      <div
        className={`w-8 h-8 md:w-12 md:h-12 ${
          theme === "dark" ? "text-white" : "text-black transition"
        }`}
      >
        <Logo />
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onClickLangToggle}
          className="bg-white hover:text-white dark:bg-[#1D1D1D] dark:hover:bg-primary hover:bg-primary transition p-3 rounded-full"
        >
          {language.toUpperCase()}
        </button>

        <button
          onClick={onClickThemeToggle}
          className="bg-white hover:text-white dark:bg-[#1D1D1D] dark:hover:bg-primary hover:bg-primary transition p-3 rounded-full"
        >
          {theme === "light" && <MoonIcon className="w-4 h-4 md:w-6 md:h-6" />}
          {theme === "dark" && <SunIcon className="w-4 h-4 md:w-6 md:h-6" />}
        </button>

        <button
          onClick={onClickMenuToggle}
          className="bg-primary text-white transition p-3 rounded-full block lg:hidden"
        >
          {isMenuOpen && <XIcon className="w-4 h-4 md:w-6 md:h-6" />}
          {!isMenuOpen && <MenuIcon className="w-4 h-4 md:w-6 md:h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full rounded-b-xl overflow-hidden block lg:hidden shadow">
          {routes.map((route) => (
            <div
              onClick={() => onClickLink(route)}
              className={`p-3 flex items-center gap-2 transition bg-slate-100 dark:bg-[#1D1D1D] hover:text-primary dark:hover:text-primary cursor-pointer ${
                isActive(route)
                  ? "text-primary dark:text-primary"
                  : " text-black dark:text-white"
              }`}
            >
              <route.Icon className="h-6 w-6" />
              <span className="font-medium text-xs">{route.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
