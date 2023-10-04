/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com'], // Add the hostname(s) you want to allow
  },
}

module.exports = nextConfig
