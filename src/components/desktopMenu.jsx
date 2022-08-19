import { Link, useLocation } from "react-router-dom";
import { useMemo } from "preact/hooks";
import {
  UserIcon,
  NewspaperIcon,
  CubeTransparentIcon,
  RssIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";
function DesktopMenu() {
  const location = useLocation();
  const { t } = useTranslation();
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

  return (
    <div className="bg-white dark:bg-[#111111] flex w-fit ml-auto p-6 rounded-xl space-x-4">
      {routes.map((route) => (
        <Link to={`/${route.key}`} key={route.key}>
          <div
            className={`p-3 w-20 h-20 flex flex-col items-center justify-center rounded-xl transition hover:bg-primary hover:text-white ${
              isActive(route)
                ? "bg-primary text-white"
                : "bg-slate-100 dark:bg-[#212425]"
            }`}
          >
            <route.Icon className="h-6 w-6" />
            <span className="font-medium text-xs mt-1">{route.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DesktopMenu;
