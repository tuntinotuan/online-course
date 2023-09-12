import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HEADER_EN from "./locales/en/header.json";
import HEADER_VI from "./locales/vi/header.json";
import HOME_EN from "./locales/en/home.json";
import HOME_VI from "./locales/vi/home.json";
import FOOTER_EN from "./locales/en/footer.json";
import FOOTER_VI from "./locales/vi/footer.json";

export const locales = {
  en: "English",
  vi: "Tiếng Việt",
  日本語: "日本語",
};

const i18nStorage = localStorage.getItem("i18nextLng");

const resources = {
  en: {
    header: HEADER_EN,
    home: HOME_EN,
    footer: FOOTER_EN,
  },
  vi: {
    header: HEADER_VI,
    home: HOME_VI,
    footer: FOOTER_VI,
  },
};
const defaultNS = "header";
i18n.use(initReactI18next).init({
  resources,
  lng: i18nStorage || "en",
  ns: ["header", "home", "footer"],
  fallbackLng: "en",
  defaultNS,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
