import PersonalCard from "../components/personalCard";
import {
  PencilAltIcon,
  TerminalIcon,
  PhotographIcon,
  CameraIcon,
  CogIcon,
  LightBulbIcon,
  FilmIcon,

} from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const serviceList = [
    {
      icon: PencilAltIcon,
      color: "text-[#DDA10C]",
      light: "bg-[#DDA10C]/10",
      title: t("whatidotitle4"),
      description: t("whatidodes1"),
    },
    {
      icon: FilmIcon,
      color: "text-[#D566FF]",
      light: "bg-[#D566FF]/10",
      title: t("whatidotitle1"),
      description: t("whatidodes2"),
    
    },
    {
      icon: CogIcon,
      color: "text-[#FF75D8]",
      light: "bg-[#FF75D8]/10",
      title: t("whatidotitle5"),
      description: t("whatidodes6"),
    },
    {
      icon: LightBulbIcon,
      color: "text-[#269FFF]",
      light: "bg-[#269FFF]/10",
      title: t("whatidotitle6"),
      description: t("whatidodes5"),
    },
    {
      icon: CameraIcon,
      color: "text-[#FF6080]",
      light: "bg-[#FF6080]/10",
      title: t("whatidotitle3"),
      description: t("whatidodes4"),
    },
   
    {
      icon: PhotographIcon,
      color: "text-[#8774FF]",
      light: "bg-[#8774FF]/10",
      title: t("whatidotitle2"),
      description: t("whatidodes3"),
    },
   
  ];

  return (
    <div>
      <div className="flex items-center space-x-4">
        <h1 className="text-4xl font-semibold">{t("aboutmeTitle")}</h1>
        <div className="w-48 h-[2px] bg-primary rounded-full"></div>
      </div>

      <div className="mt-8">
        <div className="block lg:hidden">
          <PersonalCard />
        </div>
        <p className="mt-4 text-lg text-black/50 dark:text-white/50">
          {t("aboutmeDescription1")}
        </p>
        <p className="mt-4 text-lg text-black/50 dark:text-white/50">
          {t("aboutmeDescription2")}
        </p>

        <div className="mt-16 ">
          <h2 className="text-3xl font-semibold">{t("aboutmeWhatIDo")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
            {serviceList.map((service) => (
              <div
                className={`flex items-start border-2 rounded-xl border-white/10 p-6 space-x-4 ${service.light} dark:bg-transparent`}
              >
                <div>
                  <service.icon className={`w-12 h-12 ${service.color}`} />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">{service.title}</h4>
                  <p className="mt-4 text-lg text-black/50 dark:text-white/50">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
