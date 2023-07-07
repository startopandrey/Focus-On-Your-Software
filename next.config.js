const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  api: {
    responseLimit: false,
  },
  images: {
    domains: ['www.warketolog.com', "static.tildacdn.com", "unscrambl.com","img.freepik.com","www.censhare.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
      },
    ],
  },
  i18n,
};

module.exports = nextConfig;
