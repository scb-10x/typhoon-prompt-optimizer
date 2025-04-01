"use client";

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PromptGenerator from '@/components/PromptGenerator';
import PromptImprover from '@/components/PromptImprover';
import PromptVisualizer from '@/components/PromptVisualizer';
import { FloatingFeature } from '@/components/floating-feature';
import { Zap, Lightbulb, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FaGithub, FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { SiHuggingface } from 'react-icons/si';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-subtle">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-noise"></div>

      {/* Background decorations */}
      <div className="absolute top-40 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-300/10 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-purple-300/10 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container relative mx-auto pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block mb-3">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" />
                {t('poweredBy')}
              </span>
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-6">
            <span className="text-gradient">
              {t('title')}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Floating feature card */}
          <FloatingFeature />

          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl transform rotate-1 scale-[1.01]"></div>
          <div className="card-stripe relative p-8 sm:p-10">
            <Tabs defaultValue="generate" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-10 p-1 gap-1">
                <TabsTrigger value="generate" className="text-large py-3 group">
                  <span className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 group-data-[state=active]:text-primary" />
                    {t('generatePrompt')}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="improve" className="text-large py-3 group">
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 group-data-[state=active]:text-primary" />
                    {t('improvePrompt')}
                  </span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="generate" className="pt-2">
                <PromptGenerator />
              </TabsContent>
              <TabsContent value="improve" className="pt-2">
                <PromptImprover />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Visualization Section */}
        <div className="relative max-w-4xl mx-auto mt-20">
          <PromptVisualizer />
        </div>

        {/* New Footer Section */}
        <footer className="bg-gray-50 py-8 mt-24 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Left side: BuiltWithTyphoon and Terms */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
                <a
                  href="https://opentyphoon.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                >
                  #BuiltWithTyphoon
                </a>
                <span className="hidden sm:inline">|</span>
                <a
                  href="https://opentyphoon.ai/tac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition-colors"
                >
                  Terms and Conditions
                </a>
              </div>

              {/* Right side: Social Icons */}
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/scb-10x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://discord.gg/9F6nrFXyNt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Discord"
                >
                  <FaDiscord className="h-5 w-5" />
                </a>
                <a
                  href="https://huggingface.co/scb10x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Hugging Face"
                >
                  <SiHuggingface className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/opentyphoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="X (formerly Twitter)"
                >
                  <FaXTwitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
