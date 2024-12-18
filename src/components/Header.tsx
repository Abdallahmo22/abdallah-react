import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { buttonStyles } from '../styles/buttonStyles';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // دالة لإغلاق القائمة عند الضغط على أي رابط
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // التحقق من أنه يوجد عنصر بالـ id
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    
    // إغلاق القائمة في شاشات الموبايل
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-gray-900 cursor-pointer tracking-widest">
            <span className="text-blue-700 text-4xl">A</span>bdallah<span className="text-blue-700">.</span>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {['About', 'Services', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleLinkClick(e, item.toLowerCase())}
                className="text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 px-2 py-1 rounded-md hover:bg-indigo-50"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            {[
              { icon: Github, href: 'https://github.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Mail, href: 'mailto:john@example.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={buttonStyles.icon}
              >
                <social.icon size={20} className="text-gray-500 hover:text-indigo-600" />
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {/* أيقونة القائمة */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            {/* محتوى القائمة يظهر عند فتح القائمة */}
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center justify-center space-y-4 py-8">
                {['About', 'Services', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleLinkClick(e, item.toLowerCase())}
                    className="text-gray-700 hover:text-indigo-600 text-lg font-semibold transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
