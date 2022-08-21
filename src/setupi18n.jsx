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

        
        whatidotitle1: "Video düzenleme",
        whatidotitle2: "Fotoğraf düzenleme",
        whatidotitle3: "Fotoğrafçılık",
        whatidotitle4: "Tasarım",
        whatidotitle5: "Yöneticilik",
        whatidotitle6: "İş geliştirme",

        whatidodes1: "açıklama1",
        whatidodes2: "açıklama2",
        whatidodes3: "açıklama3",
        whatidodes4: "açıklama4",
        whatidodes5: "açıklama5",
        whatidodes6: "açıklama6",

        workstitle1: "\"Vaquer\" logo design",
        workstitle2: "\"Fidel\" logo design",
        workstitle3: "\"AG\" logo design",
        workstitle4: "\"Zeta\" logo design",
        workstitle5: "\"Oxy\" logo design",
        workstitle6: "\"Ift\" logo design",
        workstitle7: "\"Ali\" logo design",
        workstitle8: "\"Lax\" logo design",

      },
    },
    tr: {
      translation: {
        profileDescription: "Video / Fotoğraf Düzenleyicisi",
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
        aboutmeDescription1: `Blablablabla`,
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


        whatidotitle1: "Video düzenleme",
        whatidotitle2: "Fotoğraf düzenleme",
        whatidotitle3: "Fotoğrafçılık",
        whatidotitle4: "Tasarım",
        whatidotitle5: "Yöneticilik",
        whatidotitle6: "İş geliştirme",

        whatidodes1: "açıklama1",
        whatidodes2: "açıklama2",
        whatidodes3: "açıklama3",
        whatidodes4: "açıklama4",
        whatidodes5: "açıklama5",
        whatidodes6: "açıklama6",

        workstitle1: "\"Vaquer\" logo tasarımı",
        workstitle2: "\"Fidel\" logo tasarımı",
        workstitle3: "\"AG\" logo tasarımı",
        workstitle4: "\"Zeta\" logo tasarımı",
        workstitle5: "\"Oxy\" logo tasarımı",
        workstitle6: "\"Ift\" logo tasarımı",
        workstitle7: "\"Ali\" logo tasarımı",
        workstitle8: "\"Lax\" logo tasarımı",
        
      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
