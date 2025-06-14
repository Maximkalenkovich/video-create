import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    resources: {
      en: {
        translation: {
          upload: "Upload Video",
          start: "Start",
          end: "End",
          download: "Download Clip",
          trimming: "Trimming...",
          chooseVideo: "Choose Video",
        },
      },
      ru: {
        translation: {
          upload: "Выберите видео",
          start: "Начало",
          end: "Конец",
          download: "Скачать фрагмент",
          trimming: "Идет обрезка...",
          chooseVideo: "Выберите видео",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
