import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Both live sites send /home to the home page (service: 301, store: 308); keep that for SEO.
    const store = [{ type: "host" as const, value: "sales\\..*" }];
    return [
      { source: "/home", has: store, destination: "/", permanent: true },
      { source: "/home", missing: store, destination: "/", statusCode: 301 },
    ];
  },
};

export default nextConfig;
