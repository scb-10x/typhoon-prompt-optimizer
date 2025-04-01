'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Home, Book, Menu, X } from 'lucide-react';

export function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 py-4 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Typhoon Prompt Optimizer Homepage">
          <div className="relative w-8 h-8">
            <Image
              src="/images/logo.svg"
              alt="Typhoon Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-xl text-gradient">Typhoon</span>
          <span className="font-bold text-xl text-gray-800">{t('appName')}</span>
        </Link>

        <div className="flex items-center gap-4">
          <button
            className="md:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <nav className="hidden md:flex gap-6" aria-label="Main navigation">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${pathname === '/'
                ? 'text-primary'
                : 'text-gray-600 hover:text-primary'
                }`}
              aria-current={pathname === '/' ? 'page' : undefined}
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              {t('home')}
            </Link>
            <Link
              href="/guidelines"
              className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${pathname === '/guidelines'
                ? 'text-primary'
                : 'text-gray-600 hover:text-primary'
                }`}
              aria-current={pathname === '/guidelines' ? 'page' : undefined}
            >
              <Book className="w-4 h-4" aria-hidden="true" />
              {t('guidelines')}
            </Link>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-fade-in"
          aria-label="Mobile navigation"
        >
          <nav className="container mx-auto py-4 px-4 sm:px-6 flex flex-col gap-4">
            <Link
              href="/"
              className={`py-2 px-3 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${pathname === '/'
                ? 'bg-primary/10 text-primary'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={pathname === '/' ? 'page' : undefined}
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              {t('home')}
            </Link>
            <Link
              href="/guidelines"
              className={`py-2 px-3 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${pathname === '/guidelines'
                ? 'bg-primary/10 text-primary'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={pathname === '/guidelines' ? 'page' : undefined}
            >
              <Book className="w-4 h-4" aria-hidden="true" />
              {t('guidelines')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 