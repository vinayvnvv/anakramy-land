import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
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
