import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The live site 301s /home to the home page; keep that for SEO.
    return [{ source: "/home", destination: "/", statusCode: 301 }];
  },
};

export default nextConfig;
