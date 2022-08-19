import PersonalCard from "../components/personalCard";
import {
  PencilIcon,
  TerminalIcon,
  PhotographIcon,
  CameraIcon,
  CogIcon,
  CodeIcon,
} from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";

import PortfolioImage1 from "../assets/portfolio-1.jpg";
import PortfolioImage2 from "../assets/portfolio-2.jpg";
import PortfolioImage3 from "../assets/portfolio-3.jpg";
import PortfolioImage4 from "../assets/portfolio-4.jpg";

function PortfolioItem({ work, onClick }) {
  return (
    <div
      className={`border-2 rounded-xl border-white/10 p-6 ${work.light} dark:bg-transparent h-fit group cursor-pointer`}
    >
      <div className="overflow-hidden rounded-xl ">
        <img
          src={work.image}
          className="w-full h-auto object-cover object-center group-hover:scale-110 transition"
        />
      </div>
      <p className="text-sm text-black/50 dark:text-white/50 mt-4">
        {work.category}
      </p>
      <h4 className="text-xl mt-2">{work.title}</h4>
    </div>
  );
}

function Works() {
  const { t } = useTranslation();

  const works = [
    {
      category: "UI/UX",
      title: "Chul urina",
      light: "bg-[#D566FF]/10",
      image: PortfolioImage1,
    },
    {
      category: "Web Design",
      title: "Aura Dione",
      light: "bg-[#DDA10C]/10",
      image: PortfolioImage2,
    },
    {
      category: "Logo",
      title: "Chul Urina",
      light: "bg-[#8774FF]/10",
      image: PortfolioImage3,
    },
    {
      category: "Video",
      title: "Chul Urina",
      light: "bg-[#FF6080]/10",
      image: PortfolioImage4,
    },
  ];
  return (
    <div>
      <div className="flex items-center space-x-4">
        <h1 className="text-4xl font-semibold">{t("worksTitle")}</h1>
        <div className="w-48 h-[2px] bg-primary rounded-full"></div>
      </div>

      <div className="mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-8 flex-1">
            {works
              .filter((_, i) => i % 2 === 0)
              .map((work, i) => (
                <PortfolioItem work={work} key={i} />
              ))}
          </div>
          <div className="flex flex-col gap-8 flex-1">
            {works
              .filter((_, i) => i % 2 === 1)
              .map((work, i) => (
                <PortfolioItem work={work} key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
