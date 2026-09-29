import en from "./locales/en";
import mm from "./locales/mm";
import ar from "./locales/ar";
import ru from "./locales/ru";

export const translations = {
  en,
  mm,
  ar,
  ru,
};

export const languages = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    shortName: "EN",
    flag: "🇬🇧",
    direction: "ltr",
  },
  {
    code: "mm",
    name: "Myanmar",
    nativeName: "မြန်မာ",
    shortName: "MM",
    flag: "🇲🇲",
    direction: "ltr",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    shortName: "AR",
    flag: "🇸🇦",
    direction: "rtl",
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    shortName: "RU",
    flag: "🇷🇺",
    direction: "ltr",
  },
];

export const DEFAULT_LANGUAGE = "en";

export const getTranslation = (languageCode) => {
  return translations[languageCode] || translations[DEFAULT_LANGUAGE];
};

export const getLanguage = (languageCode) => {
  return (
    languages.find((language) => language.code === languageCode) ||
    languages[0]
  );
};