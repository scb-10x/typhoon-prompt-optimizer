"use client";

import { GuidelinesContent } from '../../components/GuidelinesContent';
import { Book } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function GuidelinesPage() {
  const { language } = useLanguage();

  // Multilingual page title
  const pageTitle = language === 'th'
    ? "คู่มือการออกแบบ Prompt"
    : "Prompt Engineering Guidelines";

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-subtle">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-noise"></div>

      {/* Background decorations */}
      <div className="absolute top-40 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              <Book className="w-5 h-5" />
            </span>
            <h1 className="text-3xl font-bold text-gradient">{pageTitle}</h1>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-accent/3 rounded-xl"></div>
            <div className="relative z-10 overflow-hidden">
              <GuidelinesContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 