/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    THIRDWEB_CLIENT_ID: process.env.THIRDWEB_CLIENT_ID,
  },
};

module.exports = nextConfig
