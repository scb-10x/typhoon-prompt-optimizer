"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from './translations';

type LanguageContextType = {
  language: Language;
  t: (key: keyof typeof translations.en) => string;
  changeLanguage: (lang: Language) => void;
};

const defaultLanguage: Language = 'en';

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  t: (key) => key as string,
  changeLanguage: () => {},
});

// Hook for using the context
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // Initialize language from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'th')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Function to change language
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    // Update html lang attribute
    document.documentElement.lang = lang;
  };

  // Translation function
  const t = (key: keyof typeof translations.en): string => {
    // Type assertion here since we know the key exists in both languages
    return translations[language][key] as string;
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}; 