'use client';

import { useState } from 'react';
import useAppStore from '@/store/useAppStore';

export default function ContactPage() {
  const { locale } = useAppStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    try {
      // 这里是模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 模拟成功提交
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const officeLocations = [
    {
      city: locale === 'zh' ? '深圳（总部）' : 'Shenzhen (HQ)',
      address: locale === 'zh' 
        ? '广东省深圳市南山区科技园南区高新南七道数字技术大厦A座15楼' 
        : '15th Floor, Building A, Digital Technology Tower, Hi-Tech South 7th Road, Nanshan District, Shenzhen, Guangdong, China',
      phone: '+86 755 8888 7777',
      email: 'info@kawenda.com'
    },
    {
      city: locale === 'zh' ? '上海' : 'Shanghai',
      address: locale === 'zh' 
        ? '上海市浦东新区张江高科技园区科苑路88号' 
        : '88 Keyuan Road, Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai, China',
      phone: '+86 21 5888 7777',
      email: 'shanghai@kawenda.com'
    },
    {
      city: locale === 'zh' ? '慕尼黑' : 'Munich',
      address: locale === 'zh' 
        ? '德国慕尼黑创新园区科技大道123号' 
        : '123 Technology Avenue, Innovation Park, Munich, Germany',
      phone: '+49 89 1234 5678',
      email: 'europe@kawenda.com'
    }
  ];
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">
          {locale === 'zh' ? '联系我们' : 'Contact Us'}
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <p className="text-gray-600">
            {locale === 'zh'
              ? '无论您是想了解更多关于我们产品的信息，还是需要技术支持，或者有意向与我们建立业务合作，我们都随时欢迎您的咨询。请通过以下方式联系我们，我们的团队将尽快回复您。'
              : 'Whether you want to learn more about our products, need technical support, or are interested in establishing business cooperation with us, we always welcome your inquiries. Please contact us through the following methods, and our team will get back to you as soon as possible.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* 联系表单 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">
                {locale === 'zh' ? '发送消息' : 'Send a Message'}
              </h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
                  {locale === 'zh'
                    ? '感谢您的留言！我们的团队将尽快与您联系。'
                    : 'Thank you for your message! Our team will contact you as soon as possible.'}
                </div>
              )}
              
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                  {locale === 'zh'
                    ? '提交失败，请稍后再试或直接致电联系我们。'
                    : 'Submission failed, please try again later or contact us directly by phone.'}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'zh' ? '姓名' : 'Name'} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'zh' ? '电子邮箱' : 'Email'} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'zh' ? '电话' : 'Phone'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'zh' ? '公司' : 'Company'}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {locale === 'zh' ? '主题' : 'Subject'} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">
                      {locale === 'zh' ? '-- 请选择 --' : '-- Please select --'}
                    </option>
                    <option value="product">
                      {locale === 'zh' ? '产品咨询' : 'Product Inquiry'}
                    </option>
                    <option value="support">
                      {locale === 'zh' ? '技术支持' : 'Technical Support'}
                    </option>
                    <option value="partnership">
                      {locale === 'zh' ? '合作洽谈' : 'Partnership'}
                    </option>
                    <option value="career">
                      {locale === 'zh' ? '加入我们' : 'Join Us'}
                    </option>
                    <option value="other">
                      {locale === 'zh' ? '其他' : 'Other'}
                    </option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {locale === 'zh' ? '留言' : 'Message'} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-blue-600 text-white rounded-md font-medium transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting
                    ? locale === 'zh' ? '提交中...' : 'Submitting...'
                    : locale === 'zh' ? '提交' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
          
          {/* 联系信息 */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">
                {locale === 'zh' ? '全球办公室' : 'Global Offices'}
              </h2>
              
              <div className="space-y-6">
                {officeLocations.map((office) => (
                  <div key={office.city} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-lg mb-2">{office.city}</h3>
                    <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{office.email}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">
                {locale === 'zh' ? '关注我们' : 'Follow Us'}
              </h2>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* 地图 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {locale === 'zh' ? '我们的位置' : 'Our Location'}
          </h2>
          
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              {locale === 'zh' 
                ? '此处将显示地图（实际项目中可集成Google Maps或百度地图）' 
                : 'Map will be displayed here (Google Maps or Baidu Maps can be integrated in the actual project)'}
            </p>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            {locale === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">
                {locale === 'zh' ? '如何获取产品报价？' : 'How can I get a product quote?'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'zh'
                  ? '您可以通过上方的联系表单提交产品咨询，或直接联系我们的销售团队。我们会根据您的具体需求提供定制化的报价方案。'
                  : 'You can submit a product inquiry through the contact form above, or directly contact our sales team. We will provide a customized quotation based on your specific requirements.'}
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">
                {locale === 'zh' ? '产品是否提供保修？' : 'Do the products come with a warranty?'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'zh'
                  ? '是的，我们所有产品均提供标准2年保修服务。同时，我们也提供延长保修和定制化维护方案，详情请咨询我们的客服团队。'
                  : 'Yes, all our products come with a standard 2-year warranty. We also offer extended warranty and customized maintenance plans. Please consult our customer service team for details.'}
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">
                {locale === 'zh' ? '如何成为卡文达的经销商？' : 'How can I become a Kawenda distributor?'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'zh'
                  ? '我们欢迎有实力的合作伙伴加入我们的全球经销网络。请通过联系表单选择"合作洽谈"主题提交您的申请，我们的业务发展团队将与您联系。'
                  : 'We welcome capable partners to join our global distribution network. Please submit your application through the contact form by selecting the "Partnership" subject, and our business development team will contact you.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 