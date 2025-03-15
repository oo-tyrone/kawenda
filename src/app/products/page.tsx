'use client';

import { useEffect } from 'react';
import useAppStore from '@/store/useAppStore';
import useProductStore from '@/store/useProductStore';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const { locale } = useAppStore();
  const { products, fetchProducts, isLoading } = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">
          {locale === 'zh' ? '产品中心' : 'Products'}
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {locale === 'zh' ? '卡文达胎压监测系统' : 'Kawenda Tire Pressure Monitoring Systems'}
          </h2>
          <p className="text-gray-600 mb-4">
            {locale === 'zh'
              ? '卡文达提供全系列胎压监测产品，满足不同车型和使用场景的需求。我们的产品采用先进的传感技术，确保高精度、高可靠性的胎压监测，为您的行车安全保驾护航。'
              : 'Kawenda offers a full range of tire pressure monitoring products to meet the needs of different vehicle types and usage scenarios. Our products use advanced sensor technology to ensure high-precision, high-reliability tire pressure monitoring, safeguarding your driving safety.'}
          </p>
        </div>
        
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
      </div>
    </div>
  );
} 