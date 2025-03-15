'use client';

import { create } from 'zustand';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  features: string[];
  specifications: Record<string, string>;
}

interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  selectProduct: (id: string) => void;
}

const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  selectedProduct: null,
  isLoading: false,
  error: null,
  
  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      // This would be an actual API call in production
      // For now, we'll simulate a delay and return mock data
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockProducts: Product[] = [
        {
          id: 'tpms-001',
          name: 'Kawenda TPMS-X1',
          description: '高精度汽车胎压监测系统，适用于乘用车',
          imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964',
          features: ['实时监测', '高精度传感器', '低功耗设计', '简易安装'],
          specifications: {
            '精度': '±0.1 bar',
            '电池寿命': '5年',
            '工作温度': '-40°C 至 85°C',
            '防水等级': 'IP67'
          }
        },
        {
          id: 'tpms-002',
          name: 'Kawenda TPMS-X2 Pro',
          description: '专业级胎压监测系统，适用于商用车和重型卡车',
          imageUrl: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=1974',
          features: ['高负载监测', '远程数据传输', '车队管理集成', '耐用设计'],
          specifications: {
            '精度': '±0.05 bar',
            '电池寿命': '7年',
            '工作温度': '-45°C 至 105°C',
            '防水等级': 'IP68'
          }
        }
      ];
      
      set({ products: mockProducts, isLoading: false });
    } catch (error) {
      set({ error: '获取产品数据失败', isLoading: false });
      console.error('Failed to fetch products:', error);
    }
  },
  
  selectProduct: (id: string) => {
    const product = get().products.find(p => p.id === id) || null;
    set({ selectedProduct: product });
  }
}));

export default useProductStore; 