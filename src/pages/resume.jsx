import PersonalCard from "../components/personalCard";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";

function Resume() {
  const { t } = useTranslation();
  const educationList = [
    {
      timespan: "2020 - 2022",
      title: "Radyo ve Televizyon Programcılığı",
      light: "bg-[#D566FF]/10",
      description: "Afyon Kocatepe Üniversitesi",
    },
    {
      timespan: "2022",
      title: "Diksiyon, Spikerlik ve Sunuculuk",
      light: "bg-[#DDA10C]/10",
      description: "Afyonkarahisar Halk Eğitimi Merkezi",
    }
  ];

  const experienceList = [
    {
      timespan: "2017-2021",
      title: "Computer Science",
      light: "bg-[#FF6080]/10",
      description: "Imperialize Technical Institute",
    },
    {
      timespan: "2015-2017",
      title: "Cr. Web Developer",
      light: "bg-[#FF75D8]/10",
      description: "ib-themes ltd.",
    },
  ];

  const skillList = [
    {
      name: "Tasarım",
      amount: 90,
      color: "bg-primary",
    },
    {
      name: "Video Düzenleme",
      amount: 75,
      color: "bg-[#9272D4]",
    },
    {
      name: "Adobe Tasarım Programları",
      amount: 90,
      color: "bg-[#5185D4]",
    },
    {
      name: "Topluluk İletişimi",
      amount: 85,
      color: "bg-[#CA56F2]",
    },
    {
      name: "İş Geliştirme",
      amount: 90,
      color: "bg-[#DC9D00]",
    },
  ];

  const knowledgeList = [
    "Dijital tasarım",
    "Sosyal medya",
    "Print",
    "Time Management",
    "Flexibility",
    "Print",
    "Orospuluk",
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
