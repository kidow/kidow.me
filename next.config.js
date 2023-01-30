const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true
})

module.exports = withNextra({
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko'
  }
})
