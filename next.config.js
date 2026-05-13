/** @type {import('next').NextConfig} */
// Triggering Vercel redeploy with latest fixes
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ['10.11.1.100', 'localhost:3000'],
};

module.exports = nextConfig;
