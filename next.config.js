/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "media.graphassets.com",
      "images.unsplash.com",
      "picsum.photos",
      "images.pexels.com",
      "www.pexels.com",
      "i.imgur.com",
      "digitalebildungfueralle.org",
      "promo-theme.com",
      "a.storyblok.com",
    ],
  },
};

module.exports = nextConfig;
