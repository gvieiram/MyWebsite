import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import de from './translations/de.json';
import en from './translations/en.json';
import pt_br from './translations/pt_br.json';

const resources = {
  pt_br,
  en,
  de,
};

// export const availableLanguages = Object.keys(resources);

const lngFallback = navigator.language === 'pt-BR' ? 'pt_br' : 'en';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: lngFallback,
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });
