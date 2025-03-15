import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
    localeDetection: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.cavenda.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
