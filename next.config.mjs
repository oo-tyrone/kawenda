/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router不支持i18n配置，我们将在应用程序中使用自定义国际化解决方案
  // 参考: https://nextjs.org/docs/app/building-your-application/routing/internationalization
  
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