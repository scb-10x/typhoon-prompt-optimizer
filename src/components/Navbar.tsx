'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Home, Book, Menu, X, Github } from 'lucide-react';

export function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showGithubButton, setShowGithubButton] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const releaseDate = new Date('2025-05-08T17:00:01Z');

    const checkDate = () => {
      const currentDate = new Date();
      setShowGithubButton(currentDate >= releaseDate);
    };

    // Check immediately
    checkDate();

    // Set up interval to check periodically
    const interval = setInterval(checkDate, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 py-4 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Typhoon Prompt Optimizer Homepage" id="nav-logo-link">
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
            id="nav-mobile-menu-toggle"
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
              id="nav-home-link"
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
              id="nav-guidelines-link"
            >
              <Book className="w-4 h-4" aria-hidden="true" />
              {t('guidelines')}
            </Link>
            {showGithubButton && (
              <a
                href="https://github.com/scb-10x/typhoon-prompt-optimizer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors flex items-center gap-1.5 text-gray-600 hover:text-primary"
                id="nav-github-link"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                Source
              </a>
            )}
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
              id="mobile-nav-home-link"
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
              id="mobile-nav-guidelines-link"
            >
              <Book className="w-4 h-4" aria-hidden="true" />
              {t('guidelines')}
            </Link>
            {showGithubButton && (
              <a
                href="https://github.com/scb-10x/typhoon-prompt-optimizer"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 text-gray-600 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
                id="mobile-nav-github-link"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                Source
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
} 