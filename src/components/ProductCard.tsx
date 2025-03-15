'use client';

import Image from 'next/image';
import Link from 'next/link';
import useAppStore from '@/store/useAppStore';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  features: string[];
}

const ProductCard = ({ id, name, description, imageUrl, features }: ProductCardProps) => {
  const { locale } = useAppStore();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            {locale === 'zh' ? '主要特点' : 'Key Features'}
          </h4>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <Link 
          href={`/products/${id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          {locale === 'zh' ? '了解更多' : 'Learn More'}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard; 