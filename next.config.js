/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
