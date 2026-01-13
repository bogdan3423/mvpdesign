'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { categories, getFirstProductBySubcategorySlug } from '@/data/products';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProduseDropdownOpen, setIsProduseDropdownOpen] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const openProduseDropdown = () => {
    clearHoverTimeout();
    setIsProduseDropdownOpen(true);
  };

  const closeProduseDropdownWithDelay = () => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setIsProduseDropdownOpen(false);
    }, 200);
  };

  useEffect(() => () => clearHoverTimeout(), []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4 border-b border-gray-200">
          {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="MVP DESIGN Logo"
            width={70}
            height={28}
            className="h-5 w-auto"
            priority
            sizes="70px"
          />
        </Link>          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Acasă
            </Link>
            
            {/* Produse Mega Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={openProduseDropdown}
              onMouseLeave={closeProduseDropdownWithDelay}
            >
              <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors flex items-center">
                Produse
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mega Dropdown Menu - Optimized Layout */}
              {isProduseDropdownOpen && (
                <div
                  className="fixed left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-2xl rounded-sm border border-gray-200 z-50"
                  style={{ top: '73px' }}
                  onMouseEnter={openProduseDropdown}
                  onMouseLeave={closeProduseDropdownWithDelay}
                >
                  <div className="p-5 grid grid-cols-3 gap-x-6 gap-y-4 w-[900px]">
                    {/* Column 1 - Printuri clasice / Xerox */}
                    <div className="space-y-2">
                      <Link href={`/produse/${categories[0].slug}`}>
                        <h3 className="font-bold text-gray-900 text-[14px] mb-2 pb-1 border-b border-gray-200 hover:text-orange-500 transition-colors cursor-pointer">
                          {categories[0].name}
                        </h3>
                      </Link>
                      <ul className="space-y-1">
                        {categories[0].subcategories.map((subcategory) => {
                          return (
                            <li key={subcategory.slug}>
                              <Link
                                href={`/produse/${subcategory.slug}`}
                                className="text-[12px] text-gray-600 hover:text-orange-500 transition-colors block leading-relaxed"
                              >
                                {subcategory.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Column 2 - Academic, Papetarie, Textile */}
                    <div className="space-y-4">
                      {/* Lucrări academice */}
                      <div className="space-y-2">
                        <Link href={`/produse/${categories[1].slug}`}>
                          <h3 className="font-bold text-gray-900 text-[14px] mb-2 pb-1 border-b border-gray-200 hover:text-orange-500 transition-colors cursor-pointer">
                            {categories[1].name}
                          </h3>
                        </Link>
                        <ul className="space-y-1">
                          {categories[1].subcategories.map((subcategory) => {
                            return (
                              <li key={subcategory.slug}>
                                <Link
                                  href={`/produse/${subcategory.slug}`}
                                  className="text-[12px] text-gray-600 hover:text-orange-500 transition-colors block leading-relaxed"
                                >
                                  {subcategory.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Papetărie & Office */}
                      <div className="space-y-2">
                        <Link href={`/produse/${categories[2].slug}`}>
                          <h3 className="font-bold text-gray-900 text-[14px] mb-2 pb-1 border-b border-gray-200 hover:text-orange-500 transition-colors cursor-pointer">
                            {categories[2].name}
                          </h3>
                        </Link>
                        <ul className="space-y-1">
                          {categories[2].subcategories.map((subcategory) => {
                            return (
                              <li key={subcategory.slug}>
                                <Link
                                  href={`/produse/${subcategory.slug}`}
                                  className="text-[12px] text-gray-600 hover:text-orange-500 transition-colors block leading-relaxed"
                                >
                                  {subcategory.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Textile & Produse promoționale */}
                      <div className="space-y-2">
                        <Link href={`/produse/${categories[3].slug}`}>
                          <h3 className="font-bold text-gray-900 text-[14px] mb-2 pb-1 border-b border-gray-200 hover:text-orange-500 transition-colors cursor-pointer">
                            {categories[3].name}
                          </h3>
                        </Link>
                        <ul className="space-y-1">
                          {categories[3].subcategories.map((subcategory) => {
                            return (
                              <li key={subcategory.slug}>
                                <Link
                                  href={`/produse/${subcategory.slug}`}
                                  className="text-[12px] text-gray-600 hover:text-orange-500 transition-colors block leading-relaxed"
                                >
                                  {subcategory.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* Column 3 - Evenimente, Publicitate */}
                    <div className="space-y-4">
                      {/* Evenimente & Cadouri */}
                      <div className="space-y-2">
                        <Link href={`/produse/${categories[4].slug}`}>
                          <h3 className="font-bold text-gray-900 text-[14px] mb-2 pb-1 border-b border-gray-200 hover:text-orange-500 transition-colors cursor-pointer">
                            {categories[4].name}
                          </h3>
                        </Link>
                        <ul className="space-y-1">
                          {categories[4].subcategories.map((subcategory) => {
                            return (
                              <li key={subcategory.slug}>
                                <Link
                                  href={`/produse/${subcategory.slug}`}
                                  className="text-[12px] text-gray-600 hover:text-orange-500 transition-colors block leading-relaxed"
                                >
                                  {subcategory.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Publicitate & Expunere */}
                      <div className="space-y-2">
                        <Link href={`/produse/${categories[5].slug}`}>
                          <h3 className="font-bold text-gray-900 text-[14px] mb-2 pb-1 border-b border-gray-200 hover:text-orange-500 transition-colors cursor-pointer">
                            {categories[5].name}
                          </h3>
                        </Link>
                        <ul className="space-y-1">
                          {categories[5].subcategories.map((subcategory) => {
                            return (
                              <li key={subcategory.slug}>
                                <Link
                                  href={`/produse/${subcategory.slug}`}
                                  className="text-[12px] text-gray-600 hover:text-orange-500 transition-colors block leading-relaxed"
                                >
                                  {subcategory.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/editura" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Editura
            </Link>
            <Link href="/lucrari-diploma" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Lucrări Diplomă
            </Link>
            <Link href="/design" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Design
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Despre Noi
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+40756181046" 
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-medium">+40 756 181 046</span>
            </a>
            <a 
              href="mailto:orders@mvpdesign.ro" 
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Comandă Acum
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-orange-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-4 max-h-[70vh] overflow-y-auto">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-orange-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Acasă
            </Link>
            
            {/* Mobile Produse with Subcategories */}
            <div className="space-y-2">
              <div className="font-bold text-orange-500 text-sm uppercase">Produse</div>
              {categories.map((category) => (
                <div key={category.slug} className="pl-4 space-y-1">
                  <Link href={`/produse/${category.slug}`} onClick={() => setIsMenuOpen(false)}>
                    <div className="font-semibold text-gray-800 text-xs uppercase hover:text-orange-500 transition-colors cursor-pointer">
                      {category.name}
                    </div>
                  </Link>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <Link
                        key={subcategory.slug}
                        href={`/produse/${subcategory.slug}`}
                        className="block text-sm text-gray-600 hover:text-orange-500 pl-2 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subcategory.name}
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
            
            <Link 
              href="/editura" 
              className="block text-gray-700 hover:text-orange-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Editura
            </Link>
            <Link 
              href="/lucrari-diploma" 
              className="block text-gray-700 hover:text-orange-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Lucrări Diplomă
            </Link>
            <Link 
              href="/design" 
              className="block text-gray-700 hover:text-orange-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Design
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-700 hover:text-orange-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Despre Noi
            </Link>
            <Link 
              href="/contact" 
              className="block text-gray-700 hover:text-orange-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <a 
                href="tel:+40123456789" 
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-medium">+40 756 181 046</span>
              </a>
              <a 
                href="mailto:orders@mvpdesign.ro" 
                className="block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-center"
              >
                Comandă Acum
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
