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

        
        whatidotitle1: "Video Düzenleme",
        whatidotitle2: "Fotoğraf Düzenleme",
        whatidotitle3: "Fotoğrafçılık",
        whatidotitle4: "Tasarım",
        whatidotitle5: "Yöneticilik",
        whatidotitle6: "İş Geliştirme",

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
