'use client';

import { useState } from 'react';
import Link from 'next/link';
import useAppStore from '@/store/useAppStore';

export default function SupportPage() {
  const { locale } = useAppStore();
  const [activeTab, setActiveTab] = useState('faq');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  
  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };
  
  const faqs = [
    {
      id: 'faq-1',
      question: locale === 'zh' ? '如何安装卡文达胎压监测系统？' : 'How to install Kawenda TPMS?',
      answer: locale === 'zh' 
        ? '卡文达胎压监测系统安装简便，只需将传感器安装在轮胎气门嘴上，然后将显示器安装在车内即可。详细安装步骤请参考产品附带的安装手册或观看我们的安装视频教程。' 
        : 'Kawenda TPMS is easy to install. Simply install the sensors on the tire valve stems and then install the display monitor inside the vehicle. For detailed installation steps, please refer to the installation manual included with the product or watch our installation video tutorial.'
    },
    {
      id: 'faq-2',
      question: locale === 'zh' ? '传感器电池寿命有多长？' : 'How long does the sensor battery last?',
      answer: locale === 'zh' 
        ? '卡文达胎压监测系统的传感器采用高品质锂电池，根据不同型号，电池寿命在3-7年之间。当电池电量低时，系统会发出提醒，您可以联系我们的客服更换电池或购买新的传感器。' 
        : 'Kawenda TPMS sensors use high-quality lithium batteries with a battery life between 3-7 years depending on the model. When the battery is low, the system will alert you, and you can contact our customer service to replace the battery or purchase new sensors.'
    },
    {
      id: 'faq-3',
      question: locale === 'zh' ? '系统显示的胎压单位可以更改吗？' : 'Can I change the pressure units displayed by the system?',
      answer: locale === 'zh' 
        ? '是的，卡文达胎压监测系统支持多种压力单位切换，包括bar、psi、kPa等。您可以在系统设置中轻松更改显示单位。' 
        : 'Yes, Kawenda TPMS supports switching between multiple pressure units, including bar, psi, kPa, etc. You can easily change the display units in the system settings.'
    },
    {
      id: 'faq-4',
      question: locale === 'zh' ? '如何判断传感器是否正常工作？' : 'How do I know if the sensors are working properly?',
      answer: locale === 'zh' 
        ? '安装完成后，显示器会实时显示各轮胎的胎压和温度数据。如果某个轮胎的数据显示为"--"或长时间无数据更新，可能表示该传感器出现问题。您可以尝试重新安装或联系我们的技术支持。' 
        : 'After installation, the monitor will display real-time tire pressure and temperature data for each tire. If the data for a tire is displayed as "--" or there is no data update for a long time, it may indicate a problem with that sensor. You can try reinstalling or contact our technical support.'
    },
    {
      id: 'faq-5',
      question: locale === 'zh' ? '胎压监测系统会影响轮胎平衡吗？' : 'Will the TPMS affect tire balance?',
      answer: locale === 'zh' 
        ? '卡文达胎压监测系统的传感器重量轻，一般不会对轮胎平衡产生明显影响。但在高速行驶时，如果感觉到车辆振动，建议到专业轮胎店进行轮胎动平衡检测和调整。' 
        : 'Kawenda TPMS sensors are lightweight and generally do not significantly affect tire balance. However, if you feel vehicle vibration during high-speed driving, it is recommended to go to a professional tire shop for tire dynamic balance testing and adjustment.'
    }
  ];
  
  const documents = [
    {
      id: 'doc-1',
      title: locale === 'zh' ? '用户手册' : 'User Manual',
      description: locale === 'zh' ? '详细的产品使用说明和功能介绍' : 'Detailed product instructions and feature introduction',
      link: '#',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 'doc-2',
      title: locale === 'zh' ? '安装指南' : 'Installation Guide',
      description: locale === 'zh' ? '步骤详解和安装技巧' : 'Step-by-step explanation and installation tips',
      link: '#',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'doc-3',
      title: locale === 'zh' ? '故障排除指南' : 'Troubleshooting Guide',
      description: locale === 'zh' ? '常见问题解决方法' : 'Solutions to common problems',
      link: '#',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'doc-4',
      title: locale === 'zh' ? '产品规格书' : 'Product Specifications',
      description: locale === 'zh' ? '详细的技术参数和性能指标' : 'Detailed technical parameters and performance indicators',
      link: '#',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">
          {locale === 'zh' ? '技术支持' : 'Technical Support'}
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-600">
            {locale === 'zh'
              ? '卡文达致力于为您提供全方位的技术支持和服务。在这里，您可以找到常见问题解答、产品文档、视频教程等资源，帮助您更好地使用我们的产品。'
              : 'Kawenda is committed to providing you with comprehensive technical support and services. Here, you can find FAQs, product documentation, video tutorials, and other resources to help you better use our products.'}
          </p>
        </div>
        
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('faq')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'faq'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {locale === 'zh' ? '常见问题' : 'FAQ'}
              </button>
              <button
                onClick={() => setActiveTab('docs')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'docs'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {locale === 'zh' ? '文档中心' : 'Documentation'}
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'videos'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {locale === 'zh' ? '视频教程' : 'Video Tutorials'}
              </button>
            </nav>
          </div>
          
          <div className="py-6">
            {activeTab === 'faq' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">
                  {locale === 'zh' ? '常见问题解答' : 'Frequently Asked Questions'}
                </h2>
                
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                      >
                        <span className="font-medium">{faq.question}</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${openFaqId === faq.id ? 'transform rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {openFaqId === faq.id && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-700">
                    {locale === 'zh'
                      ? '没有找到您的问题？请联系我们的客服团队获取更多帮助。'
                      : 'Didn\'t find your question? Please contact our customer service team for more help.'}
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block mt-2 text-blue-600 hover:underline"
                  >
                    {locale === 'zh' ? '联系客服' : 'Contact Support'}
                  </Link>
                </div>
              </div>
            )}
            
            {activeTab === 'docs' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">
                  {locale === 'zh' ? '文档中心' : 'Documentation Center'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documents.map((doc) => (
                    <div key={doc.id} className="bg-white p-6 rounded-lg border border-gray-200 flex">
                      <div className="mr-4 flex-shrink-0">
                        {doc.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{doc.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                        <a href={doc.link} className="text-blue-600 hover:underline text-sm flex items-center">
                          <span>{locale === 'zh' ? '下载 PDF' : 'Download PDF'}</span>
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'videos' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">
                  {locale === 'zh' ? '视频教程' : 'Video Tutorials'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">
                        {locale === 'zh' ? '产品安装教程' : 'Product Installation Tutorial'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {locale === 'zh' ? '详细演示如何安装卡文达胎压监测系统' : 'Detailed demonstration of how to install Kawenda TPMS'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">
                        {locale === 'zh' ? '系统设置指南' : 'System Settings Guide'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {locale === 'zh' ? '如何配置和自定义您的胎压监测系统' : 'How to configure and customize your TPMS'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">
                        {locale === 'zh' ? '故障排除指南' : 'Troubleshooting Guide'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {locale === 'zh' ? '解决使用过程中可能遇到的常见问题' : 'Solving common issues you may encounter during use'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-blue-600 text-white rounded-lg p-8">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold mb-2">
                {locale === 'zh' ? '需要更多帮助？' : 'Need More Help?'}
              </h2>
              <p className="text-blue-100">
                {locale === 'zh'
                  ? '我们的技术支持团队随时为您提供专业的帮助和建议。'
                  : 'Our technical support team is always available to provide professional help and advice.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors text-center"
              >
                {locale === 'zh' ? '联系我们' : 'Contact Us'}
              </Link>
              <a 
                href="tel:+8610123456789"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors text-center"
              >
                {locale === 'zh' ? '技术支持热线' : 'Support Hotline'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 