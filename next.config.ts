import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["images.unsplash.com", "randomuser.me","cdn.discordapp.com"],
  },
};

export default nextConfig;
