import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend"; 

const Languages = ["en", "uz", "ru"];

i18n
  .use(Backend) 
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng: "uz", 
    debug: true,
    supportedLngs: Languages,
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", 
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
