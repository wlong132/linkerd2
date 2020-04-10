import i18n from 'i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  .use(initReactI18next)
  .init({
    resources: { en, es },
    lng: navigator.language.split('-')[0],
    fallbackLng: 'en',
    defaultNS: 'common',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    nsSeparator: '::',
    useSuspense: false,
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      nsMode: 'fallback',
    },
  });


export default i18n;
