import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: '/', destination: '/preview', permanent: false }];
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
