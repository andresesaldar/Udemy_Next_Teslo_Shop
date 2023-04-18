/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
  rewrites: () => [
    {
      source: "/api/mock/:path*",
      destination: process.env.BASE_URL + "/:path*",
    }
  ]
}

module.exports = nextConfig
