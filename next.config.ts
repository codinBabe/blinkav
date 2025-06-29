import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // enables static export
  trailingSlash: true, // optional: makes all routes end with a slash
  images: { unoptimized: true } // optional: disables Next.js image optimization
};

export default nextConfig;
