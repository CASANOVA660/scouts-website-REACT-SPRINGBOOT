import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import ReactCountryFlag from 'react-country-flag';

const navItems = [
  { name: 'Team', href: '/team' },
  { name: 'Historic', href: '/historic' },
  { name: 'Contact', href: '/contact' },
  { name: 'News', href: '/news' },
  { name: 'Events', href: '/events' },
];

const languages = [
  { code: 'en', name: 'English', flag: 'US' },
  { code: 'fr', name: 'Français', flag: 'FR' },
  { code: 'ar', name: 'العربية', flag: 'TN' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Permanent Red Top Bar */}
      <div className="fixed top-0 w-full z-50 bg-red-700 h-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Left Section - Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-white hover:text-yellow-200 transition-colors"
              >
                <GlobeAltIcon className="h-4 w-4" />
                <span className="text-sm">{languages.find(lang => lang.code === currentLang)?.name}</span>
                <ReactCountryFlag countryCode={languages.find(lang => lang.code === currentLang)?.flag} svg className="w-4 h-4" />
              </button>

              {isLangMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={cn(
                          "flex items-center space-x-3 w-full px-4 py-2 text-sm",
                          currentLang === lang.code ? "bg-red-50 text-red-900" : "text-gray-700 hover:bg-red-50 hover:text-red-900"
                        )}
                      >
                        <ReactCountryFlag countryCode={lang.flag} svg />
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Center Section - Logo and Name when scrolled */}
            {scrolled && (
              <div className="flex items-center space-x-2">
                <Link to="/" className="flex items-center">
                  <img
                    src="/scouts-website-REACT-SPRINGBOOT/images/logo.jpg"
                    alt="Scouts Logo"
                    className="h-8 w-auto"
                  />
                </Link>
                <span className="text-white font-medium">|</span>
                <span className="text-white font-medium">Sodwicks Scouts</span>
              </div>
            )}

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-200 transition-colors">
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-200 transition-colors">
                  <FaInstagram className="h-5 w-5" />
                </a>
              </div>

              {/* Menu Button - Only visible when scrolled */}
              {scrolled && (
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="text-white hover:text-yellow-200 transition-colors p-2"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Only visible when not scrolled */}
      <div className={cn(
        "fixed w-full z-40 bg-white shadow-lg transition-all duration-300",
        scrolled ? "opacity-0 pointer-events-none" : "opacity-100 top-10"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Name */}
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center">
                <img
                  src="/scouts-website-REACT-SPRINGBOOT/images/logo.jpg"
                  alt="Scouts Logo"
                  className="h-12 w-auto"
                />

              </Link>
              <span className="text-gray-700 font-medium">|</span>
              <span className="text-gray-700 font-medium">Sodwicks Scouts</span>
            </div>

            {/* Navigation Items */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button - Only visible when not scrolled */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-gray-700 hover:text-red-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Side Menu */}
      <div className={cn(
        "fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "fixed inset-y-0 right-0 w-64 bg-white transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex justify-center space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600">
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}