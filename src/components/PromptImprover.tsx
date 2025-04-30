import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wand2, Copy, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PromptImprover() {
  const { t } = useLanguage();
  const [existingPrompt, setExistingPrompt] = useState('');
  const [improvedPrompt, setImprovedPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const improvePrompt = async () => {
    if (!existingPrompt.trim()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/improve-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: existingPrompt }),
      });

      const data = await response.json();

      if (response.ok) {
        setImprovedPrompt(data.improvedPrompt);
      } else {
        console.error('Error improving prompt:', data.error);
      }
    } catch (error) {
      console.error('Error improving prompt:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(improvedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-2 text-lg font-medium">
          <div className="bg-primary/10 p-1.5 rounded-full">
            <Wand2 size={18} className="text-primary" />
          </div>
          <h2>{t('currentPrompt')}</h2>
        </div>

        <p className="text-muted-foreground">
          {t('currentPromptHelp')}
        </p>

        <div className="space-y-5">
          <div className="relative">
            <textarea
              id="existingPrompt"
              value={existingPrompt}
              onChange={(e) => setExistingPrompt(e.target.value)}
              placeholder={t('promptPlaceholder')}
              className="input-stripe w-full min-h-[180px] p-4 placeholder:text-muted-foreground/60 focus:shadow-primary/10 focus:shadow-md transition-all"
              rows={6}
            />
            <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
              {existingPrompt.length} {t('characters')}
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={improvePrompt}
              disabled={isLoading || !existingPrompt.trim()}
              variant="default"
              showShine={false}
              className="px-6 py-3 h-auto text-white font-medium rounded-xl transition-all shadow-md hover:shadow-lg hover:translate-y-[-1px]"
              id="improve-prompt-button"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-1 rounded-full bg-white overflow-hidden">
                    <div className="h-full animate-progress-stripe"></div>
                  </div>
                  <span>{t('improving')}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Wand2 size={16} className="text-white" />
                  <span>{t('improve')}</span>
                  <ArrowRight size={16} />
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>

      {improvedPrompt && (
        <div className="mt-10 space-y-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl transform -rotate-1 scale-[1.02] -z-10"></div>
          <div className="card-stripe p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <div className="bg-primary/10 p-1.5 rounded-full">
                  <CheckCircle2 size={16} className="text-primary" />
                </div>
                {t('improvedPrompt')}
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="rounded-lg flex items-center gap-1.5 transition-all"
                id="copy-improved-prompt-button"
              >
                {copied ? (
                  <span>{t('copied')}</span>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>{t('copy')}</span>
                  </>
                )}
              </Button>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 border" id="improved-prompt-result">
              <pre className="whitespace-pre-wrap text-sm">{improvedPrompt}</pre>
            </div>

            <div className="mt-4 text-xs text-muted-foreground flex justify-between">
              <span>{improvedPrompt.length} {t('characters')}</span>
              <span className="flex items-center gap-1.5">
                <Sparkles size={10} className="text-primary" />
                {t('enhancedWithAI')}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 