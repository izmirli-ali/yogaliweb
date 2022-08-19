import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        profileDescription: "Professionel Bitch",
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
        aboutmeDescription1: `I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.`,
        aboutmeDescription2: `My aim is to bring across your message and identity in the most
          creative way. I created web design for many famous brand companies.`,
        aboutmeWhatIDo: "What I do!",

        resumeTitle: "Resume",
        resumeEducation: "Education",
        resumeExperience: "Experiments",
        resumeWorkingSkills: "Working Skills",
        resumeKnowledges: "Bilgiler",

        worksTitle: "Portfolio",

        contactTitle: "Contact",
        contactText1: "I'm always open to discussing product",
        contactText2: "design work or partnerships.",
        contactName: "Name",
        contactEmail: "Email",
        contactMessage: "Message",
        contactSend: "Send",
      },
    },
    tr: {
      translation: {
        profileDescription: "Profesyonel Orzbu",
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
        aboutmeDescription1: `I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.`,
        aboutmeDescription2: `My aim is to bring across your message and identity in the most
          creative way. I created web design for many famous brand companies.`,
        aboutmeWhatIDo: "Neler yapıyorum!",

        resumeTitle: "Özgeçmiş",
        resumeEducation: "Eğitim",
        resumeExperience: "Tecrübeler",
        resumeWorkingSkills: "Yetenekler",
        resumeKnowledges: "Bilgiler",

        worksTitle: "Portfolyo",

        contactTitle: "İletişim",
        contactText1: "Ürün tasarımı ve iş ortaklıkları için",
        contactText2: "bana her zaman ulaşabilirsiniiz.",
        contactName: "İsim",
        contactEmail: "Eposta",
        contactMessage: "Mesaj",
        contactSend: "Gönder",
      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
