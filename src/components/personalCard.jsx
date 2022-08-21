import ProfilePhoto from "../assets/profile-yogali.webp";
import {
  DeviceMobileIcon,
  MailIcon,
  LocationMarkerIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import CV from "../assets/test.pdf";
import { useTranslation } from "react-i18next";

function PersonalCard() {
  const { t } = useTranslation();

  return (
    <div className="lg:bg-white p-6 lg:dark:bg-[#111] bg-transparent dark:bg-transparent flex flex-col items-center rounded-2xl">
      <img
        src={ProfilePhoto}
        className="w-56 h-56 lg:-mt-36 rounded-2xl shadow-lg object-cover object-center"
      />
      <h1 className="text-2xl font-bold mt-6">Ali ihsancan UYSAL</h1>
      <p className="text-gray-400 mt-4 font-medium">
        <span className="bg-transparent dark:bg-[#1D1D1D] px-4 py-2 rounded-lg">
          {t("profileDescription")}
        </span>
      </p>

      <div className="mt-4 flex gap-3">
        <a
          href="https://facebook.com/aliyogali"
          target="_blank"
          className="bg-gray-100 dark:bg-[#212425] text-[#1773EA] hover:bg-primary dark:hover:bg-primary hover:text-white transition w-10 h-10 flex justify-center items-center rounded-lg"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="currentColor"
          >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg>
        </a>

        <a
          href="https://facebook.com/aliyogali"
          target="_blank"
          className="bg-gray-100 dark:bg-[#212425] text-[#1C9CEA] hover:bg-primary dark:hover:bg-primary hover:text-white transition w-10 h-10 flex justify-center items-center rounded-lg"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 160 256"
            fill="currentColor"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </svg>
        </a>

        <a
          href="https://www.instagram.com/aliihsancanuysal/"
          target="_blank"
          className="bg-gray-100 dark:bg-[#212425] text-[#E14A84] hover:bg-primary dark:hover:bg-primary hover:text-white transition w-10 h-10 flex justify-center items-center rounded-lg"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 160 256"
            fill="currentColor"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </svg>
            </svg>
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/aliihsancanuysal/"
          target="_blank"
          className="bg-gray-100 dark:bg-[#212425] text-[#1773EA] hover:bg-primary dark:hover:bg-primary hover:text-white transition w-10 h-10 flex justify-center items-center rounded-lg"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 160 256"
            fill="currentColor"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </svg>
          </svg>
        </a>
      </div>

      <div className="bg-gray-100 dark:bg-[#1D1D1D] w-full mt-6 p-4 rounded-2xl space-y-4">
        <div className="flex">
          <div className="bg-white dark:bg-black p-2 rounded-lg shadow text-primary dark:hover:bg-primary hover:bg-primary hover:text-white transition">
            <DeviceMobileIcon className="w-6 h-6" />
          </div>
          <div className="ml-3">
            <p className="text-xs font-semibold text-gray-500">
              {t("profilePhone")}
            </p>
            <p className="font-medium">
              <a href="tel:905377781883" className="hover:text-primary">
                +90 537 778 1883
              </a>
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="bg-white dark:bg-black p-2 rounded-lg shadow text-[#6AB5B9] dark:hover:bg-primary hover:bg-primary hover:text-white transition">
            <MailIcon className="w-6 h-6" />
          </div>
          <div className="ml-3">
            <p className="text-xs font-semibold text-gray-500">
              {t("profileEmail")}
            </p>
            <p className="font-medium">
              <a
                href="mailto:aliihsancanuysal@gmail.com"
                className="hover:text-primary"
              >
                aliihsancanuysal@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="bg-white dark:bg-black p-2 rounded-lg shadow text-[#DD667E] dark:hover:bg-primary hover:bg-primary hover:text-white transition">
            <LocationMarkerIcon className="w-6 h-6" />
          </div>
          <div className="ml-3">
            <p className="text-xs font-semibold text-gray-500">
              {t("profileLocation")}
            </p>
            <p className="font-medium">
              <a>Bornova / İzmir</a>
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="bg-white dark:bg-black p-2 rounded-lg shadow text-[#C17CEB] dark:hover:bg-primary hover:bg-primary hover:text-white transition">
            <CalendarIcon className="w-6 h-6" />
          </div>
          <div className="ml-3">
            <p className="text-xs font-semibold text-gray-500">
              {t("profileBirthday")}
            </p>
            <p className="font-medium">
              <a>{t("profileBirthdayValue")}</a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <a
          href={CV}
          target="_blank"
          className="block px-8 py-3 bg-primary text-white rounded-full"
        >
          {t("profileDownloadCV")}
        </a>
      </div>
    </div>
  );
}

export default PersonalCard;
