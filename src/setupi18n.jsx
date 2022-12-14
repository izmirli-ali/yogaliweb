import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        profileDescription: "Video / Photo Editor",
        profilePhone: "Phone",
        profileEmail: "Email",
        profileLocation: "Location",
        profileBirthday: "Birthday",
        profileBirthdayValue: "Nov 10, 2002",
        profileDownloadCV: "Download CV",

        menuAbout: "About",
        menuResume: "Resume",
        menuWorks: "Works",
        menuBlogs: "Blogs",
        menuContact: "Contact",

        aboutmeTitle: "About Me",
        aboutmeDescription1: `I have a predisposition and experience in the fields of management, design and photo editing. Thanks to the department I graduated from, I improved myself a lot in photography and video editing.`,
        aboutmeDescription2: `At the same time, I take part in business development and managerial positions in order to realize a new project with the team I am in. I want to make my skills more experienced and successful in a nice team that I can work with.`,
        aboutmeWhatIDo: "What I do!",

        resumeTitle: "Resume",
        resumeEducation: "Education",
        resumeExperience: "Experiments",
        resumeWorkingSkills: "Working Skills",
        resumeKnowledges: "Knowledge",

        worksTitle: "Portfolio",

        contactTitle: "Contact",
        contactText1: "You can always contact me",
        contactText2: "for offers and partnerships.",
        contactName: "Name",
        contactEmail: "Email",
        contactMessage: "Message",
        contactSend: "Send",

        
        whatidotitle1: "Video Editing",
        whatidotitle2: "Photo Editing",
        whatidotitle3: "Photography",
        whatidotitle4: "Design",
        whatidotitle5: "Management",
        whatidotitle6: "Business Development",

        whatidodes1: "I make personal and brand logo, panel and background designs.",
        whatidodes2: "During my university years, I edited various short films and commercials.",
        whatidodes3: "I am skilled in editing photos that I receive personally and externally.",
        whatidodes4: "I improve myself both as a hobby and as a professional product photographer.",
        whatidodes5: "I am good at thinking from different perspectives , generating new ideas and getting the job done to higher levels.",
        whatidodes6: "I have experience in community management, community communication and analysis. I can moderate communities on various topics",

        workstitle1: "\"Vaquer\" Logo Design",
        workstitle2: "\"Fidel\" Logo Design",
        workstitle3: "\"AG\" Logo Design",
        workstitle4: "\"Zeta\" Logo Design",
        workstitle5: "\"Oxy\" Logo Design",
        workstitle6: "\"Ift\" Logo Design",
        workstitle7: "\"Ali\" Logo Design",
        workstitle8: "\"Lax\" Logo Design",


        resumeEducationt1: "Radio and Television Programming",
        resumeEducationt2: "Diction, speaker and presenter",
        resumeEducationt3: "Digital Logo Design",
        resumeEducationt4: "Video / Photo Editing",
        resumeEducationt5: "Cinema and Television",
        resumeEducationt6: "Graphic Design",
        resumeEducationt7: "Discord Community Manager",


        resumeEducationtime1: "2022 - Present",
        resumeEducationtime2: "2022 - Present",
        resumeEducationtime3: "2020 - Present",
        resumeEducationtime4: "2018 - Present",
        

        resumeEducationdes1: "Afyon Kocatepe University",
        resumeEducationdes2: "Afyonkarahisar Public Education Center",
        resumeEducationdes3: "Freelance",
        resumeEducationdes4: "Freelance",
        resumeEducationdes5: "Istanbul University",
        resumeEducationdes6: "ZEON - Freelance",
      

        resumeskill1: "Design",
        resumeskill2: "Video Editing",
        resumeskill3: "Adobe Design Programs",
        resumeskill4: "Community Communication",
        resumeskill5: "Business Development",

        knowlegde1: "Digital Design",
        knowlegde2: "Social Media",
        knowlegde3: "Office Programs",
        knowlegde4: "Problem Solving",
        knowlegde5: "Analytical Skill",
        knowlegde6: "Team Management",
        knowlegde7: "Community Management",
        knowlegde8: "Website Editor",



      },
    },
    tr: {
      translation: {
        profileDescription: "Video / Foto??raf Edit??r??",
        profilePhone: "Telefon",
        profileEmail: "Eposta",
        profileLocation: "Konum",
        profileBirthday: "Do??um G??n??",
        profileBirthdayValue: "Kas 10, 2002",
        profileDownloadCV: "CV ??ndir",

        menuAbout: "Hakk??mda",
        menuResume: "??zge??mi??",
        menuWorks: "??al????malar??m",
        menuBlogs: "Bloglar??m",
        menuContact: "??leti??im",

        aboutmeTitle: "Hakk??mda",
        aboutmeDescription1: `Y??netim, tasar??m ve foto??raflar d??zenleme alanlar??na yatk??nl??????m ve tecr??bem var. Mezun oldu??um b??l??m sayesinde de foto??raf????l??k ve video d??zenleme konular??nda kendimi olduk??a geli??tirdim.`,
        aboutmeDescription2: `Ayn?? zamanda i??inde bulundu??um ekiple birlikte yeni bir proje ger??ekle??tirebilmek ad??na i?? geli??tirme ve y??netici pozisyonunda yer al??yorum. Kendimi; ??al????abilece??im g??zel bir ekip i??inde, sahip oldu??um yeteneklerde daha deneyimli ve ba??ar??l?? hale getirmek istiyorum.`,
        aboutmeWhatIDo: "Neler yap??yorum!",

        resumeTitle: "??zge??mi??",
        resumeEducation: "E??itim",
        resumeExperience: "Tecr??beler",
        resumeWorkingSkills: "Yetenekler",
        resumeKnowledges: "Bilgiler",

        worksTitle: "Portfolyo",

        contactTitle: "??leti??im",
        contactText1: "Teklif ve i?? ortakl??klar?? i??in",
        contactText2: "bana her zaman ula??abilirsiniiz.",
        contactName: "??sim",
        contactEmail: "Eposta",
        contactMessage: "Mesaj",
        contactSend: "G??nder",


        whatidotitle1: "Video D??zenleme",
        whatidotitle2: "Foto??raf D??zenleme",
        whatidotitle3: "Foto??raf????l??k",
        whatidotitle4: "Tasar??m",
        whatidotitle5: "Y??neticilik",
        whatidotitle6: "???? Geli??tirme",

        whatidodes1: "Ki??iye ??zel veya marka odakl?? logo, panel ve arkaplan tasar??mlar?? yap??yorum.",
        whatidodes2: "??niversite y??llar??m boyunca ??e??itli k??sa film ve reklam filminin d??zenlemesini ger??ekle??tirdim. ",
        whatidodes3: "Ki??isel ve d????ar??dan i?? olarak ald??????m foto??raflar?? d??zenlemede yetenekliyim.",
        whatidodes4: "Hem hobi olarak foto??raf ??ekmeyi hem de profesyonel olarak ??r??n ??ekimi gibi konularda kendimi geli??tiriyorum.",
        whatidodes5: "??ok y??nl?? d??????nme, yeni fikirler ??retme ve yap??lan i??i ??st kademelere atlatma konusunda ba??ar??l??y??m.",
        whatidodes6: "Topululuk y??netimi, topluluk ileti??imi ve analizi konular??nda deneyimliyim. ??e??itli konularda moderasyon sa??layabilirim.",

        workstitle1: "\"Vaquer\" Logo Tasar??m??",
        workstitle2: "\"Fidel\" Logo Tasar??m??",
        workstitle3: "\"AG\" Logo Tasar??m??",
        workstitle4: "\"Zeta\" Logo Tasar??m??",
        workstitle5: "\"Oxy\" Logo Tasar??m??",
        workstitle6: "\"Ift\" Logo Tasar??m??",
        workstitle7: "\"Ali\" Logo Tasar??m??",
        workstitle8: "\"Lax\" Logo Tasar??m??",
        



        resumeEducationt1: "Radyo ve Televizyon programc??l??????",
        resumeEducationt2: "Diksiyon, Spikerlik ve Sunuculuk",
        resumeEducationt3: "Dijital Logo Tasar??m??",
        resumeEducationt4: "Video / Foto??raf D??zenleme",
        resumeEducationt5: "Sinema ve Televizyon",
        resumeEducationt6: "Grafik Tasar??m??",
        resumeEducationt7: "Discord Topluluk Y??neticisi",

        resumeEducationtime1: "2022 - G??n??m??z",
        resumeEducationtime2: "2022 - G??n??m??z",
        resumeEducationtime3: "2020 - G??n??m??z",
        resumeEducationtime4: "2018 - G??n??m??z",

        resumeEducationdes1: "Afyon Kocatepe ??niversitesi",
        resumeEducationdes2: "Afyonkarahisar Halk E??itimi Merkezi",
        resumeEducationdes3: "Serbest ??al????ma",
        resumeEducationdes4: "Serbest ??al????ma",
        resumeEducationdes5: "??stanbul ??niversitesi",
        resumeEducationdes6: "ZEON - Serbest ??al????ma",
        resumeskill1: "Tasar??m",
        resumeskill2: "Video D??zenleme",
        resumeskill3: "Adobe Tasar??m Programlar??",
        resumeskill4: "Topluluk ??leti??imi",
        resumeskill5: "???? geli??tirme",

        knowlegde1: "Dijital Tasar??m",
        knowlegde2: "Sosyal Medya",
        knowlegde3: "Office Programlar??",
        knowlegde4: "Sorun ????zme",
        knowlegde5: "Analitik Beceri",
        knowlegde6: "Ekip Y??netimi",
        knowlegde7: "Topluluk Y??netimi",
        knowlegde8: "Website Edit??rl??????",


      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
