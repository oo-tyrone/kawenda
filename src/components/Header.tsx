'use client';

import Link from 'next/link';
import useAppStore from '@/store/useAppStore';

const Header = () => {
  const { locale, setLocale, isMenuOpen, toggleMenu, closeMenu } = useAppStore();
  
  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
    // In a real app, this would redirect to the localized version of the current page
    // For now, we'll just update the store
  };
  
  const navItems = [
    { name: locale === 'zh' ? '首页' : 'Home', href: '/' },
    { name: locale === 'zh' ? '产品' : 'Products', href: '/products' },
    { name: locale === 'zh' ? '解决方案' : 'Solutions', href: '/solutions' },
    { name: locale === 'zh' ? '技术支持' : 'Support', href: '/support' },
    { name: locale === 'zh' ? '关于我们' : 'About', href: '/about' },
    { name: locale === 'zh' ? '联系我们' : 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-2xl font-bold text-blue-600">Kawenda</span>
              <span className="ml-2 text-gray-600">TPMS</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleLocaleChange(locale === 'zh' ? 'en' : 'zh')}
              className="px-3 py-1 border border-gray-300 rounded text-sm"
            >
              {locale === 'zh' ? 'English' : '中文'}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-500 hover:text-blue-600 focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={() => handleLocaleChange(locale === 'zh' ? 'en' : 'zh')}
                className="px-3 py-1 border border-gray-300 rounded text-sm self-start"
              >
                {locale === 'zh' ? 'English' : '中文'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 