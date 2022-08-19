import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex items-center space-x-4">
        <h1 className="text-4xl font-semibold">{t("contactTitle")}</h1>
        <div className="w-48 h-[2px] bg-primary rounded-full"></div>
      </div>

      <div className="mt-8">
        <div className="p-4 md:p-12 lg:p-16">
          <p className="text-2xl">{t("contactText1")}</p>
          <p className="text-2xl font-semibold">{t("contactText2")}</p>

          <div className="mt-8">
            <form
              action="https://mailthis.to/aliihsancanuysal@gmail.com"
              method="POST"
            >
              <TextBox
                name="name"
                placeholder={t("contactName")}
                full
                required
              />
              <TextBox
                name="email"
                placeholder={t("contactEmail")}
                full
                type="email"
                required
              />
              <TextBox
                name="message"
                placeholder={t("contactMessage")}
                full
                required
              />
              <div className="mt-4">
                <Button
                  type="submit"
                  className="px-8 py-2 bg-transparent border-2 text-black dark:text-white font-medium hover:bg-primary hover:text-white hover:border-transparent transition"
                  rounded
                >
                  {t("contactSend")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
