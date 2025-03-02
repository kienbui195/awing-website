/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost", "awing-admin.lotusa.net"],
    remotePatterns: [
      {
        hostname: "localhost",
        protocol: "http",
      },
      {
        hostname: "awing-admin.lotusa.net",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
