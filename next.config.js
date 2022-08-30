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
      "a.storyblok.com"
    ],
  },
}

module.exports = nextConfig
