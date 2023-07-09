/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // TODO: enable when you in production mode
  images: {
    domains: ['i.ibb.co'], // this is for image from external source
  }
}

module.exports = nextConfig
