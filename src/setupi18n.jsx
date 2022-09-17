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


        resumeEducationtime1: "2018 - Present",
        resumeEducationtime2: "2020 - Present",

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
        profileDescription: "Video / Fotoğraf Editörü",
        profilePhone: "Telefon",
        profileEmail: "Eposta",
        profileLocation: "Konum",
        profileBirthday: "Doğum Günü",
        profileBirthdayValue: "Kas 10, 2002",
        profileDownloadCV: "CV İndir",

        menuAbout: "Hakkımda",
        menuResume: "Özgeçmiş",
        menuWorks: "Çalışmalarım",
        menuBlogs: "Bloglarım",
        menuContact: "İletişim",

        aboutmeTitle: "Hakkımda",
        aboutmeDescription1: `Yönetim, tasarım ve fotoğraflar düzenleme alanlarına yatkınlığım ve tecrübem var. Mezun olduğum bölüm sayesinde de fotoğrafçılık ve video düzenleme konularında kendimi oldukça geliştirdim.`,
        aboutmeDescription2: `Aynı zamanda içinde bulunduğum ekiple birlikte yeni bir proje gerçekleştirebilmek adına iş geliştirme ve yönetici pozisyonunda yer alıyorum. Kendimi; çalışabileceğim güzel bir ekip içinde, sahip olduğum yeteneklerde daha deneyimli ve başarılı hale getirmek istiyorum.`,
        aboutmeWhatIDo: "Neler yapıyorum!",

        resumeTitle: "Özgeçmiş",
        resumeEducation: "Eğitim",
        resumeExperience: "Tecrübeler",
        resumeWorkingSkills: "Yetenekler",
        resumeKnowledges: "Bilgiler",

        worksTitle: "Portfolyo",

        contactTitle: "İletişim",
        contactText1: "Teklif ve iş ortaklıkları için",
        contactText2: "bana her zaman ulaşabilirsiniiz.",
        contactName: "İsim",
        contactEmail: "Eposta",
        contactMessage: "Mesaj",
        contactSend: "Gönder",


        whatidotitle1: "Video Düzenleme",
        whatidotitle2: "Fotoğraf Düzenleme",
        whatidotitle3: "Fotoğrafçılık",
        whatidotitle4: "Tasarım",
        whatidotitle5: "Yöneticilik",
        whatidotitle6: "İş Geliştirme",

        whatidodes1: "Kişiye özel veya marka odaklı logo, panel ve arkaplan tasarımları yapıyorum.",
        whatidodes2: "Üniversite yıllarım boyunca çeşitli kısa film ve reklam filminin düzenlemesini gerçekleştirdim. ",
        whatidodes3: "Kişisel ve dışarıdan iş olarak aldığım fotoğrafları düzenlemede yetenekliyim.",
        whatidodes4: "Hem hobi olarak fotoğraf çekmeyi hem de profesyonel olarak ürün çekimi gibi konularda kendimi geliştiriyorum.",
        whatidodes5: "Çok yönlü düşünme, yeni fikirler üretme ve yapılan işi üst kademelere atlatma konusunda başarılıyım.",
        whatidodes6: "Topululuk yönetimi, topluluk iletişimi ve analizi konularında deneyimliyim. Çeşitli konularda moderasyon sağlayabilirim.",

        workstitle1: "\"Vaquer\" Logo Tasarımı",
        workstitle2: "\"Fidel\" Logo Tasarımı",
        workstitle3: "\"AG\" Logo Tasarımı",
        workstitle4: "\"Zeta\" Logo Tasarımı",
        workstitle5: "\"Oxy\" Logo Tasarımı",
        workstitle6: "\"Ift\" Logo Tasarımı",
        workstitle7: "\"Ali\" Logo Tasarımı",
        workstitle8: "\"Lax\" Logo Tasarımı",
        



        resumeEducationt1: "Radyo ve Televizyon programcılığı",
        resumeEducationt2: "Diksiyon, Spikerlik ve Sunuculuk",
        resumeEducationt3: "Dijital Logo Tasarımı",
        resumeEducationt4: "Video / Fotoğraf Düzenleme",
        resumeEducationt5: "Sinema ve Televizyon",
        resumeEducationt6: "Grafik Tasarım",
        resumeEducationt7: "Discord Topluluk Yöneticisi",

        resumeEducationtime1: "2018 - Günümüz",
        resumeEducationtime2: "2020 - Günümüz",

        resumeEducationdes1: "Afyon Kocatepe Üniversitesi",
        resumeEducationdes2: "Afyonkarahisar Halk Eğitimi Merkezi",
        resumeEducationdes3: "Serbest Çalışma",
        resumeEducationdes4: "Serbest Çalışma",
        resumeEducationdes5: "İstanbul Üniversitesi",
        resumeEducationdes6: "ZEON - Serbest Çalışma",
        resumeskill1: "Tasarım",
        resumeskill2: "Video Düzenleme",
        resumeskill3: "Adobe Tasarım Programları",
        resumeskill4: "Topluluk İletişimi",
        resumeskill5: "İş geliştirme",

        knowlegde1: "Dijital Tasarım",
        knowlegde2: "Sosyal Medya",
        knowlegde3: "Office Programları",
        knowlegde4: "Sorun Çözme",
        knowlegde5: "Analitik Beceri",
        knowlegde6: "Ekip Yönetimi",
        knowlegde7: "Topluluk Yönetimi",
        knowlegde8: "Website Editörlüğü",


      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
