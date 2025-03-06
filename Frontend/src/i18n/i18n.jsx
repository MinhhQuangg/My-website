import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HOME_EN from "../locales/en/about.json";
import NAVBAR_EN from "../locales/en/navBar.json";
import INTRO_EN from "../locales/en/intro.json";
import TOOL_EN from "../locales/en/tool.json";
import HOME_VI from "../locales/vi/about.json";
import NAVBAR_VI from "../locales/vi/navBar.json";
import INTRO_VI from "../locales/vi/intro.json";
import TOOL_VI from "../locales/vi/tool.json";

const resources = {
  en: {
    home: HOME_EN,
    nav: NAVBAR_EN,
    intro: INTRO_EN,
    tool: TOOL_EN,
  },
  vi: {
    home: HOME_VI,
    nav: NAVBAR_VI,
    intro: INTRO_VI,
    tool: TOOL_VI,
  },
};
const defaultNS = "home";

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  ns: ["home", "nav", "intro", "tool"],
  defaultNS,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
