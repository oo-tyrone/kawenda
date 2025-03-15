'use client';

import Image from 'next/image';
import Link from 'next/link';
import useAppStore from '@/store/useAppStore';

export default function SolutionsPage() {
  const { locale } = useAppStore();
  
  const solutions = [
    {
      id: 'passenger-vehicles',
      title: locale === 'zh' ? '乘用车解决方案' : 'Passenger Vehicle Solutions',
      description: locale === 'zh' 
        ? '为家用轿车、SUV和小型商务车提供的胎压监测解决方案，确保日常驾驶安全。' 
        : 'Tire pressure monitoring solutions for passenger cars, SUVs, and small commercial vehicles, ensuring daily driving safety.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070',
      features: [
        locale === 'zh' ? '简易安装，即插即用' : 'Easy installation, plug and play',
        locale === 'zh' ? '实时胎压和温度监测' : 'Real-time tire pressure and temperature monitoring',
        locale === 'zh' ? '手机APP远程查看' : 'Remote viewing via mobile app',
        locale === 'zh' ? '低电量和异常警报' : 'Low battery and abnormal alerts'
      ]
    },
    {
      id: 'commercial-fleet',
      title: locale === 'zh' ? '商用车队解决方案' : 'Commercial Fleet Solutions',
      description: locale === 'zh' 
        ? '专为物流公司、客运公司等商用车队设计的胎压监测系统，提高车队管理效率，降低运营成本。' 
        : 'Tire pressure monitoring systems designed for logistics companies, passenger transport companies and other commercial fleets, improving fleet management efficiency and reducing operating costs.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070',
      features: [
        locale === 'zh' ? '集中管理多车监控' : 'Centralized management of multiple vehicles',
        locale === 'zh' ? '云平台数据分析' : 'Cloud platform data analysis',
        locale === 'zh' ? '预测性维护提醒' : 'Predictive maintenance reminders',
        locale === 'zh' ? '与车队管理系统集成' : 'Integration with fleet management systems'
      ]
    },
    {
      id: 'heavy-duty',
      title: locale === 'zh' ? '重型车辆解决方案' : 'Heavy-Duty Vehicle Solutions',
      description: locale === 'zh' 
        ? '针对卡车、工程车辆、矿山设备等重型车辆的专业胎压监测系统，适应恶劣工作环境。' 
        : 'Professional tire pressure monitoring systems for trucks, engineering vehicles, mining equipment and other heavy-duty vehicles, adapting to harsh working environments.',
      image: 'https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=2089',
      features: [
        locale === 'zh' ? '高强度传感器设计' : 'High-strength sensor design',
        locale === 'zh' ? '多轮胎同时监测' : 'Simultaneous monitoring of multiple tires',
        locale === 'zh' ? '耐高温高压环境' : 'Resistant to high temperature and high pressure environments',
        locale === 'zh' ? '延长轮胎使用寿命' : 'Extended tire life'
      ]
    }
  ];
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">
          {locale === 'zh' ? '解决方案' : 'Solutions'}
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">
            {locale === 'zh' ? '卡文达胎压监测解决方案' : 'Kawenda TPMS Solutions'}
          </h2>
          <p className="text-gray-600">
            {locale === 'zh'
              ? '卡文达提供全方位的胎压监测解决方案，覆盖从乘用车到商用车队、重型车辆等各类应用场景。我们的解决方案不仅提供高精度的胎压监测，还能与您的业务系统无缝集成，提高运营效率，降低维护成本。'
              : 'Kawenda provides comprehensive tire pressure monitoring solutions covering various application scenarios from passenger cars to commercial fleets and heavy-duty vehicles. Our solutions not only provide high-precision tire pressure monitoring but can also seamlessly integrate with your business systems to improve operational efficiency and reduce maintenance costs.'}
          </p>
        </div>
        
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-lg shadow-md overflow-hidden`}
            >
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <h3 className="text-lg font-semibold mb-3">
                  {locale === 'zh' ? '主要特点' : 'Key Features'}
                </h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                
                <Link 
                  href={`/solutions/${solution.id}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  {locale === 'zh' ? '了解更多' : 'Learn More'}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {locale === 'zh' ? '需要定制解决方案？' : 'Need a Custom Solution?'}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {locale === 'zh'
              ? '我们的工程师团队可以根据您的具体需求，提供量身定制的胎压监测解决方案。'
              : 'Our team of engineers can provide tailored tire pressure monitoring solutions based on your specific requirements.'}
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            {locale === 'zh' ? '联系我们' : 'Contact Us'}
          </Link>
        </div>
      </div>
    </div>
  );
} 