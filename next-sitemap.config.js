/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kidow.me',
  generateRobotsTxt: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', disallow: ['/404'] }]
  }
}
