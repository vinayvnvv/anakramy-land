import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ph-files.imgix.net",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
