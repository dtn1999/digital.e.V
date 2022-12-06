/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
  "@fullcalendar/list",
]);

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ["media.graphassets.com", "a.storyblok.com"],
  },
  // i18n: {
  //   //locales: ["en"],
  //   // defaultLocale: "en",
  // },
};

module.exports = withTM({ ...nextConfig });
