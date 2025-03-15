'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import useAppStore from '@/store/useAppStore';
import useProductStore from '@/store/useProductStore';
import TirePressureChart from '@/components/TirePressureChart';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { locale } = useAppStore();
  const { products, selectedProduct, fetchProducts, selectProduct } = useProductStore();
  
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
    
    if (typeof id === 'string') {
      selectProduct(id);
    }
  }, [id, products, fetchProducts, selectProduct]);
  
  if (!selectedProduct) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link 
            href="/products"
            className="text-blue-600 hover:underline flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {locale === 'zh' ? '返回产品列表' : 'Back to Products'}
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-full">
                <Image
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-4">{selectedProduct.name}</h1>
              <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">
                  {locale === 'zh' ? '产品特点' : 'Features'}
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">
                  {locale === 'zh' ? '技术规格' : 'Specifications'}
                </h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                    <div key={key} className="flex py-2 border-b border-gray-200 last:border-0">
                      <span className="w-1/3 font-medium">{key}</span>
                      <span className="w-2/3 text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  {locale === 'zh' ? '立即购买' : 'Buy Now'}
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium transition-colors">
                  {locale === 'zh' ? '联系销售' : 'Contact Sales'}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            {locale === 'zh' ? '实时监测数据演示' : 'Real-time Monitoring Demo'}
          </h2>
          <TirePressureChart />
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            {locale === 'zh' ? '相关资源' : 'Related Resources'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-semibold mb-2">
                {locale === 'zh' ? '用户手册' : 'User Manual'}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {locale === 'zh' ? '下载产品详细使用说明' : 'Download detailed product instructions'}
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                {locale === 'zh' ? '下载 PDF' : 'Download PDF'}
              </a>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-semibold mb-2">
                {locale === 'zh' ? '安装视频' : 'Installation Video'}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {locale === 'zh' ? '观看产品安装教程' : 'Watch product installation tutorial'}
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                {locale === 'zh' ? '观看视频' : 'Watch Video'}
              </a>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-semibold mb-2">
                {locale === 'zh' ? '常见问题' : 'FAQ'}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {locale === 'zh' ? '查看常见问题解答' : 'View frequently asked questions'}
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                {locale === 'zh' ? '浏览FAQ' : 'Browse FAQ'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 