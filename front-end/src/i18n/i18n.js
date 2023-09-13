import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HEADER_EN from "./locales/en/header.json";
import HEADER_VI from "./locales/vi/header.json";
import HOME_EN from "./locales/en/home.json";
import HOME_VI from "./locales/vi/home.json";
import FOOTER_EN from "./locales/en/footer.json";
import FOOTER_VI from "./locales/vi/footer.json";
import AUTHEN_EN from "./locales/en/authen.json";
import AUTHEN_VI from "./locales/vi/authen.json";
import CATEGORY_EN from "./locales/en/category.json";
import CATEGORY_VI from "./locales/vi/category.json";
import NOTFOUND_EN from "./locales/en/notfound.json";
import NOTFOUND_VI from "./locales/vi/notfound.json";
import PROFILE_EN from "./locales/en/profile.json";
import PROFILE_VI from "./locales/vi/profile.json";
import SEARCH_EN from "./locales/en/search.json";
import SEARCH_VI from "./locales/vi/search.json";

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
    authen: AUTHEN_EN,
    category: CATEGORY_EN,
    notfound: NOTFOUND_EN,
    profile: PROFILE_EN,
    search: SEARCH_EN,
  },
  vi: {
    header: HEADER_VI,
    home: HOME_VI,
    footer: FOOTER_VI,
    authen: AUTHEN_VI,
    category: CATEGORY_VI,
    notfound: NOTFOUND_VI,
    profile: PROFILE_VI,
    search: SEARCH_VI,
  },
};
const defaultNS = "header";
i18n.use(initReactI18next).init({
  resources,
  lng: i18nStorage || "en",
  ns: [
    "header",
    "home",
    "footer",
    "authen",
    "category",
    "notfound",
    "profile",
    "search",
  ],
  fallbackLng: "en",
  defaultNS,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
