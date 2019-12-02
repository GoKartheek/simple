const NextI18Next = require('next-i18next').default

const options = {
  defaultNS: 'translation',
  defaultLanguage: 'en',
  otherLanguages: ['de', 'es'],
  localePath: "static/locales",
  // localeSubpaths: {},
  localeSubpaths: {
    en: 'en',
    de: 'de',
    es: 'es'
  },
  keySeparator: "/", // to allow use keyes from oneSky like "some.some1.name"
};

module.exports = new NextI18Next(options)
