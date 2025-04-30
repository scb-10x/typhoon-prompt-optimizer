"use client";

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Language } from '@/lib/i18n/translations';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const { language, changeLanguage, t } = useLanguage();

  const languages: { value: Language; label: string; flag: string }[] = [
    { value: 'en', label: 'English', flag: '🇬🇧' },
    { value: 'th', label: 'ไทย', flag: '🇹🇭' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1.5 text-xs font-medium rounded-lg"
          aria-label={t('languageSwitcher')}
          id="language-switcher-button"
        >
          <Globe size={14} />
          <span className="hidden sm:inline">{language === 'en' ? 'English' : 'ไทย'}</span>
          <span className="sm:hidden">{language === 'en' ? '🇬🇧' : '🇹🇭'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            className={`flex items-center gap-2 ${language === lang.value ? 'font-medium bg-accent/30' : ''}`}
            onClick={() => changeLanguage(lang.value)}
            id={`language-option-${lang.value}`}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 