import PersonalCard from "../components/personalCard";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";

function Resume() {
  const { t } = useTranslation();
  const educationList = [
     {
      timespan: t("resumeEducationtime5"),
      title: t("resumeEducationt8"),
      light: "bg-[#DDA10C]/10",
      description: t("resumeEducationdes7"),
    },
    {
      timespan: t("resumeEducationtime2"),
      title: t("resumeEducationt5"),
      light: "bg-[#DDA10C]/10",
      description: t("resumeEducationdes1"),
    },
    {
      timespan: t("resumeEducationtime1"),
      title: t("resumeEducationt6"),
      light: "bg-[#DDA10C]/10",
      description: t("resumeEducationdes5"),
    },
    {
      timespan: "2022",
      title: t("resumeEducationt2"),
      light: "bg-[#DDA10C]/10",
      description: t("resumeEducationdes2"),
    },
    {
      timespan: "2020 - 2022",
      title: t("resumeEducationt1"),
      light: "bg-[#D566FF]/10",
      description: t("resumeEducationdes1"),
    }
    
   
  ];

  const experienceList = [
    {
      timespan: t("resumeEducationtime3"),
      title: t("resumeEducationt7"),
      light: "bg-[#FF75D8]/10",
      description: t("resumeEducationdes6"),
    },
    {
      timespan: t("resumeEducationtime4"),
      title: t("resumeEducationt3"),
      light: "bg-[#FF6080]/10",
      description: t("resumeEducationdes3"),
    },
    {
      timespan: t("resumeEducationtime4"),
      title: t("resumeEducationt4"),
      light: "bg-[#FF75D8]/10",
      description: t("resumeEducationdes4"),
    }
   
    
  ];

  const skillList = [
    {
      name: t("resumeskill1"),
      amount: 90,
      color: "bg-primary",
    },
    {
      name: t("resumeskill2"),
      amount: 75,
      color: "bg-[#9272D4]",
    },
    {
      name: t("resumeskill3"),
      amount: 90,
      color: "bg-[#5185D4]",
    },
    {
      name: t("resumeskill4"),
      amount: 85,
      color: "bg-[#CA56F2]",
    },
    {
      name: t("resumeskill5"),
      amount: 90,
      color: "bg-[#DC9D00]",
    },
  ];

  const knowledgeList = [
    t("knowlegde1"),
    t("knowlegde2"),
    t("knowlegde3"),
    t("knowlegde4"),
    t("knowlegde5"),
    t("knowlegde6"),
    t("knowlegde7"),
   // "Kurumlar Arası İletişim",
    t("knowlegde8"),
  ];

  return (
    <div>
      <div className="flex items-center space-x-4">
        <h1 className="text-4xl font-semibold">{t("resumeTitle")}</h1>
        <div className="w-48 h-[2px] bg-primary rounded-full"></div>
      </div>

      <div className="mt-8">
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
            <div>
              <div className="flex space-x-2 items-center">
                <AcademicCapIcon className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-medium">{t("resumeEducation")}</h2>
              </div>
              <div className="mt-4 space-y-6">
                {educationList.map((education) => (
                  <div
                    className={`border-2 rounded-xl border-white/10 p-6 ${education.light} dark:bg-transparent`}
                  >
                    <p className="text-sm text-black/50 dark:text-white/50">
                      {education.timespan}
                    </p>
                    <h4 className="text-xl mt-2">{education.title}</h4>
                    <p className="mt-2 text-lg text-black/50 dark:text-white/50">
                      {education.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex space-x-2 items-center">
                <BriefcaseIcon className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-medium">
                  {t("resumeExperience")}
                </h2>
              </div>
              <div className="mt-4 space-y-6">
                {experienceList.map((experience) => (
                  <div
                    className={`border-2 rounded-xl border-white/10 p-6 ${experience.light} dark:bg-transparent`}
                  >
                    <p className="text-sm text-black/50 dark:text-white/50">
                      {experience.timespan}
                    </p>
                    <h4 className="text-xl mt-2">{experience.title}</h4>
                    <p className="mt-2 text-lg text-black/50 dark:text-white/50">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
            <div>
              <h2 className="text-2xl font-medium">
                {t("resumeWorkingSkills")}
              </h2>
              <div className="mt-4 space-y-8">
                {skillList.map((skill) => (
                  <div>
                    <div className="flex justify-between text-black/50 dark:text-white/50 font-medium">
                      <p>{skill.name}</p>
                      <p className="pr-6">{skill.amount + "%"}</p>
                    </div>
                    <div className="mt-2 h-1 bg-slate-100 dark:bg-[#1C1C1C] relative rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full ${skill.color}`}
                        style={{ width: skill.amount + "%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-medium">{t("resumeKnowledges")}</h2>
              <div className="mt-4 flex gap-4 flex-wrap">
                {knowledgeList.map((knowledge) => (
                  <div className="py-3 px-5 bg-slate-100 dark:bg-[#1C1C1C] text-black/60 dark:text-white/50 rounded-xl">
                    {knowledge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
