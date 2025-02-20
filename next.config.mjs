/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sanna-api.udaipurhiring.com",
      },
    ],
  },
};

export default nextConfig;
