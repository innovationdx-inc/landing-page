/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/png', 'image/webp', 'image/jpeg'],
  },
}

module.exports = nextConfig 