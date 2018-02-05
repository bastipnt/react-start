import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from 'i18next-resource-store-loader!./locales/index';

i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    ns: 'translation',
    defaultNS: 'translation',
    keySeparator: false, // Allow usage of dots in keys
    nsSeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    resources,
  });

export default i18n;
