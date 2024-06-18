/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tooptime.com',
      },
    ],
  },
};

export default nextConfig;
