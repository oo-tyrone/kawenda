'use client';

import Image from 'next/image';
import Link from 'next/link';
import useAppStore from '@/store/useAppStore';

export default function AboutPage() {
  const { locale } = useAppStore();
  
  // 公司发展历程
  const milestones = [
    {
      year: '2010',
      title: {
        zh: '公司成立',
        en: 'Company Founded'
      },
      description: {
        zh: '卡文达科技有限公司在深圳成立，专注于汽车安全监测系统的研发。',
        en: 'Kawenda Technology Co., Ltd. was founded in Shenzhen, focusing on the research and development of automotive safety monitoring systems.'
      }
    },
    {
      year: '2012',
      title: {
        zh: '首款产品发布',
        en: 'First Product Launch'
      },
      description: {
        zh: '推出首款胎压监测系统TPMS-X1，获得市场广泛认可。',
        en: 'Launched the first tire pressure monitoring system TPMS-X1, which gained widespread market recognition.'
      }
    },
    {
      year: '2015',
      title: {
        zh: '国际市场拓展',
        en: 'International Market Expansion'
      },
      description: {
        zh: '产品出口到欧洲、北美等地区，建立国际销售网络。',
        en: 'Products were exported to Europe, North America and other regions, establishing an international sales network.'
      }
    },
    {
      year: '2018',
      title: {
        zh: '技术突破',
        en: 'Technological Breakthrough'
      },
      description: {
        zh: '研发出新一代高精度传感器技术，精度提升50%，能耗降低30%。',
        en: 'Developed a new generation of high-precision sensor technology, improving accuracy by 50% and reducing energy consumption by 30%.'
      }
    },
    {
      year: '2020',
      title: {
        zh: '智能化升级',
        en: 'Intelligent Upgrade'
      },
      description: {
        zh: '推出基于云平台的智能胎压监测系统，实现远程监控和大数据分析。',
        en: 'Launched a cloud-based intelligent tire pressure monitoring system, enabling remote monitoring and big data analysis.'
      }
    },
    {
      year: '2023',
      title: {
        zh: '全球战略合作',
        en: 'Global Strategic Cooperation'
      },
      description: {
        zh: '与多家国际汽车制造商建立战略合作伙伴关系，产品进入OEM市场。',
        en: 'Established strategic partnerships with several international automobile manufacturers, entering the OEM market.'
      }
    }
  ];
  
  // 管理团队
  const teamMembers = [
    {
      name: {
        zh: '张明',
        en: 'Zhang Ming'
      },
      position: {
        zh: '创始人兼首席执行官',
        en: 'Founder & CEO'
      },
      bio: {
        zh: '拥有20年汽车电子行业经验，曾在多家知名企业担任高管职位。带领卡文达从创立至今，始终专注于为客户提供最优质的产品和服务。',
        en: 'With 20 years of experience in the automotive electronics industry, he has held executive positions in several well-known companies. He has led Kawenda since its inception, always focusing on providing customers with the highest quality products and services.'
      },
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070'
    },
    {
      name: {
        zh: '李婷',
        en: 'Li Ting'
      },
      position: {
        zh: '首席技术官',
        en: 'CTO'
      },
      bio: {
        zh: '电子工程博士，拥有多项传感器技术专利。负责卡文达的技术研发和产品创新，带领研发团队不断突破技术瓶颈。',
        en: 'With a Ph.D. in Electronic Engineering and multiple sensor technology patents, she is responsible for Kawenda\'s technological R&D and product innovation, leading the R&D team to continuously break through technical bottlenecks.'
      },
      imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070'
    },
    {
      name: {
        zh: '王强',
        en: 'Wang Qiang'
      },
      position: {
        zh: '全球销售副总裁',
        en: 'VP of Global Sales'
      },
      bio: {
        zh: '拥有丰富的国际市场开拓经验，曾成功带领团队进入多个新兴市场。负责卡文达的全球销售网络建设和客户关系管理。',
        en: 'With rich experience in international market development, he has successfully led teams to enter multiple emerging markets. He is responsible for Kawenda\'s global sales network construction and customer relationship management.'
      },
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149'
    }
  ];
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">
          {locale === 'zh' ? '关于我们' : 'About Us'}
        </h1>
        
        {/* 公司简介 */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-80 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                  alt={locale === 'zh' ? '卡文达总部' : 'Kawenda Headquarters'}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-4">
                  {locale === 'zh' ? '公司简介' : 'Company Profile'}
                </h2>
                <p className="text-gray-600 mb-4">
                  {locale === 'zh'
                    ? '卡文达科技有限公司成立于2010年，是一家专注于汽车安全监测系统研发和生产的高新技术企业。公司总部位于中国深圳，在北京、上海、德国慕尼黑和美国底特律设有分支机构。'
                    : 'Kawenda Technology Co., Ltd., founded in 2010, is a high-tech enterprise focusing on the research, development, and production of automotive safety monitoring systems. The company is headquartered in Shenzhen, China, with branches in Beijing, Shanghai, Munich, Germany, and Detroit, USA.'}
                </p>
                <p className="text-gray-600 mb-4">
                  {locale === 'zh'
                    ? '作为胎压监测系统领域的领先企业，卡文达始终坚持"安全、创新、品质"的核心理念，致力于为全球客户提供高精度、高可靠性的胎压监测解决方案，保障行车安全。'
                    : 'As a leading enterprise in the field of tire pressure monitoring systems, Kawenda has always adhered to the core concept of "Safety, Innovation, and Quality", committed to providing high-precision, high-reliability tire pressure monitoring solutions for global customers to ensure driving safety.'}
                </p>
                <p className="text-gray-600">
                  {locale === 'zh'
                    ? '目前，卡文达的产品已广泛应用于乘用车、商用车队和重型车辆等多个领域，销售网络覆盖全球30多个国家和地区，年销售额超过2亿元人民币。'
                    : 'Currently, Kawenda\'s products are widely used in passenger cars, commercial fleets, and heavy-duty vehicles, with a sales network covering more than 30 countries and regions worldwide, and annual sales exceeding 200 million RMB.'}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* 发展历程 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            {locale === 'zh' ? '发展历程' : 'Our Journey'}
          </h2>
          
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-blue-200 transform md:translate-x-0 translate-x-4"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 p-4 md:p-8 md:text-right md:pr-16">
                      {index % 2 === 0 ? (
                        <div className="md:hidden absolute left-0 top-5 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center transform -translate-x-4">
                          <span className="text-sm font-bold">{milestone.year}</span>
                        </div>
                      ) : null}
                      {index % 2 !== 0 || !index ? (
                        <>
                          <div className="hidden md:block absolute left-0 top-5 md:left-auto md:right-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center transform md:translate-x-4 -translate-x-4">
                            <span className="text-sm font-bold">{milestone.year}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 ml-8 md:ml-0">
                            {locale === 'zh' ? milestone.title.zh : milestone.title.en}
                          </h3>
                          <p className="text-gray-600 ml-8 md:ml-0">
                            {locale === 'zh' ? milestone.description.zh : milestone.description.en}
                          </p>
                        </>
                      ) : null}
                    </div>
                    <div className="md:w-1/2 p-4 md:p-8 md:pl-16">
                      {index % 2 !== 0 ? (
                        <div className="md:hidden absolute left-0 top-5 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center transform -translate-x-4">
                          <span className="text-sm font-bold">{milestone.year}</span>
                        </div>
                      ) : null}
                      {index % 2 === 0 ? (
                        <>
                          <div className="hidden md:block absolute left-1/2 top-5 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center transform -translate-x-4">
                            <span className="text-sm font-bold">{milestone.year}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 ml-8 md:ml-0">
                            {locale === 'zh' ? milestone.title.zh : milestone.title.en}
                          </h3>
                          <p className="text-gray-600 ml-8 md:ml-0">
                            {locale === 'zh' ? milestone.description.zh : milestone.description.en}
                          </p>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 管理团队 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            {locale === 'zh' ? '管理团队' : 'Leadership Team'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={locale === 'zh' ? member.name.zh : member.name.en} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.imageUrl}
                    alt={locale === 'zh' ? member.name.zh : member.name.en}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">
                    {locale === 'zh' ? member.name.zh : member.name.en}
                  </h3>
                  <p className="text-blue-600 mb-4">
                    {locale === 'zh' ? member.position.zh : member.position.en}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {locale === 'zh' ? member.bio.zh : member.bio.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* 企业文化 */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              {locale === 'zh' ? '企业文化' : 'Corporate Culture'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {locale === 'zh' ? '使命' : 'Mission'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {locale === 'zh'
                    ? '通过创新科技，为全球用户提供可靠的汽车安全监测解决方案，让每一次行驶都更加安全。'
                    : 'To provide reliable automotive safety monitoring solutions for global users through innovative technology, making every journey safer.'}
                </p>
                
                <h3 className="text-xl font-semibold mb-4">
                  {locale === 'zh' ? '愿景' : 'Vision'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'zh'
                    ? '成为全球领先的汽车安全监测系统提供商，引领行业技术发展，创造更安全的驾驶环境。'
                    : 'To become a global leading provider of automotive safety monitoring systems, leading the technological development of the industry and creating a safer driving environment.'}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {locale === 'zh' ? '核心价值观' : 'Core Values'}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {locale === 'zh' ? '安全至上' : 'Safety First'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {locale === 'zh'
                          ? '将用户安全放在首位，确保产品的可靠性和稳定性。'
                          : 'Putting user safety first, ensuring the reliability and stability of products.'}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {locale === 'zh' ? '持续创新' : 'Continuous Innovation'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {locale === 'zh'
                          ? '不断探索新技术，推动产品和服务的创新升级。'
                          : 'Continuously exploring new technologies and promoting innovative upgrades of products and services.'}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {locale === 'zh' ? '品质卓越' : 'Excellence in Quality'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {locale === 'zh'
                          ? '严格把控产品质量，追求卓越的用户体验。'
                          : 'Strictly controlling product quality and pursuing excellent user experience.'}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {locale === 'zh' ? '客户导向' : 'Customer Oriented'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {locale === 'zh'
                          ? '以客户需求为中心，提供专业、贴心的服务。'
                          : 'Focusing on customer needs and providing professional and caring services.'}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* 联系我们 */}
        <section>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {locale === 'zh' ? '加入我们' : 'Join Us'}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {locale === 'zh'
                ? '卡文达始终欢迎优秀人才的加入。如果您对汽车安全技术充满热情，期待与我们一起创造更安全的驾驶未来，请联系我们。'
                : 'Kawenda always welcomes outstanding talents. If you are passionate about automotive safety technology and look forward to creating a safer driving future with us, please contact us.'}
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              {locale === 'zh' ? '联系我们' : 'Contact Us'}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 