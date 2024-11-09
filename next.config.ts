import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['fonts.gstatic.com'], // Add any other domains you need
    unoptimized: true // Only if you're deploying statically
  },
  eslint: {
    ignoreDuringBuilds: false, // Set to true if you want to bypass ESLint during builds
  },
};

export default nextConfig;
