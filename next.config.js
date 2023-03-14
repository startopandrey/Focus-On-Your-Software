const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.warketolog.com', "static.tildacdn.com"],
  },
  i18n,
};

module.exports = nextConfig;
