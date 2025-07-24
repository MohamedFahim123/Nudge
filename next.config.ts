import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nudge.valureach.com",
        pathname: "/defaults/**",
      },
      {
        protocol: "https",
        hostname: "nudge.valureach.com",
        pathname: "/storage/**",
      },
    ],
  },
  experimental: {
    turbo: {},
  },
};
export default nextConfig;

