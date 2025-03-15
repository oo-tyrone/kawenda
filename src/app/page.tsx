'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import useAppStore from '@/store/useAppStore';
import useProductStore from "@/store/useProductStore";
import ProductCard from '@/components/ProductCard';
import TirePressureChart from '@/components/TirePressureChart';
import Carousel from '@/components/Carousel';

export default function Home() {
  const { locale } = useAppStore();
  const { products, fetchProducts, isLoading } = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Carousel items
  const carouselItems = [
    {
      id: 'slide-1',
      imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
      title: {
        zh: '卡文达汽车胎压监测系统',
        en: 'Kawenda Tire Pressure Monitoring System'
      },
      description: {
        zh: '为您的行车安全保驾护航，提供实时胎压监测解决方案',
        en: 'Ensuring your driving safety with real-time tire pressure monitoring solutions'
      },
      buttonText: {
        zh: '浏览产品',
        en: 'Browse Products'
      },
      buttonLink: '/products'
    },
    {
      id: 'slide-2',
      imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083',
      title: {
        zh: '高精度监测技术',
        en: 'High-Precision Monitoring Technology'
      },
      description: {
        zh: '采用先进传感器技术，精确监测胎压变化，确保行车安全',
        en: 'Using advanced sensor technology to accurately monitor tire pressure changes and ensure driving safety'
      },
      buttonText: {
        zh: '了解技术',
        en: 'Learn About Technology'
      },
      buttonLink: '/solutions'
    },
    {
      id: 'slide-3',
      imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070',
      title: {
        zh: '专业解决方案',
        en: 'Professional Solutions'
      },
      description: {
        zh: '针对不同车型和使用场景，提供定制化胎压监测解决方案',
        en: 'Providing customized tire pressure monitoring solutions for different vehicle types and usage scenarios'
      },
      buttonText: {
        zh: '查看解决方案',
        en: 'View Solutions'
      },
      buttonLink: '/solutions'
    }
  ];
  
  return (
    <div className="flex flex-col">
      {/* Hero Carousel Section */}
      <Carousel items={carouselItems} />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {locale === 'zh' ? '为什么选择卡文达' : 'Why Choose Kawenda'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {locale === 'zh' ? '高精度监测' : 'High Precision Monitoring'}
              </h3>
              <p className="text-gray-600">
                {locale === 'zh'
                  ? '精确到0.1bar的胎压监测，确保您随时掌握轮胎状态'
                  : 'Tire pressure monitoring accurate to 0.1bar, ensuring you always know your tire status'}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {locale === 'zh' ? '实时警报' : 'Real-time Alerts'}
              </h3>
              <p className="text-gray-600">
                {locale === 'zh'
                  ? '当胎压异常时立即发出警报，防患于未然'
                  : 'Immediate alerts when tire pressure is abnormal, preventing potential issues'}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {locale === 'zh' ? '简易安装' : 'Easy Installation'}
              </h3>
              <p className="text-gray-600">
                {locale === 'zh'
                  ? '无需专业工具，几分钟即可完成安装'
                  : 'No professional tools required, installation completed in minutes'}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {locale === 'zh' ? '我们的产品' : 'Our Products'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {locale === 'zh'
              ? '卡文达提供全系列胎压监测产品，满足不同车型和使用场景的需求'
              : 'Kawenda offers a full range of tire pressure monitoring products to meet the needs of different vehicle types and usage scenarios'}
          </p>
          
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  features={product.features}
                />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link 
              href="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              {locale === 'zh' ? '查看全部产品' : 'View All Products'}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {locale === 'zh' ? '数据可视化' : 'Data Visualization'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {locale === 'zh'
              ? '通过直观的图表实时监控您的轮胎状态'
              : 'Monitor your tire status in real-time through intuitive charts'}
          </p>
          
          <div className="max-w-4xl mx-auto">
            <TirePressureChart />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'zh' ? '准备好提升您的行车安全了吗？' : 'Ready to enhance your driving safety?'}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {locale === 'zh'
              ? '联系我们获取更多信息或立即购买卡文达胎压监测系统'
              : 'Contact us for more information or purchase Kawenda TPMS now'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              {locale === 'zh' ? '联系我们' : 'Contact Us'}
            </Link>
            <Link 
              href="/products"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              {locale === 'zh' ? '立即购买' : 'Buy Now'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
