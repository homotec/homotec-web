import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.playadorada.es',
      },
      {
        protocol: 'https',
        hostname: 'www.gimenoalcala.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sestepa.com',
      },
    ],
  },
};

export default nextConfig;
