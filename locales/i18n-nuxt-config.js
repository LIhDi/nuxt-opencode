const I18N = {
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_cookie_lang',
    alwaysRedirect: true
  },
  useCookie: true,
  alwaysRedirect: true,
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en/index.js'
    },
    {
      code: 'pt',
      iso: 'pt-PT',
      name: 'Português',
      file: 'pt/index.js'
    }
  ],
  lazy: true,
  seo: false,
  langDir: '/locales/',
  defaultLocale: 'pt',
  parsePages: false
}

module.exports = {
  I18N
}
