import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Copy, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PromptGenerator() {
  const { t } = useLanguage();
  const [taskDescription, setTaskDescription] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generatePrompt = async () => {
    if (!taskDescription.trim()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/generate-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskDescription }),
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedPrompt(data.prompt);
      } else {
        console.error('Error generating prompt:', data.error);
      }
    } catch (error) {
      console.error('Error generating prompt:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-2 text-lg font-medium">
          <div className="bg-primary/10 p-1.5 rounded-full">
            <Sparkles size={18} className="text-primary" />
          </div>
          <h2>{t('taskDescription')}</h2>
        </div>

        <p className="text-muted-foreground">
          {t('taskDescriptionHelp')}
        </p>

        <div className="space-y-5">
          <div className="relative">
            <textarea
              id="taskDescription"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder={t('taskPlaceholder')}
              className="input-stripe w-full min-h-[180px] p-4 placeholder:text-muted-foreground/60 focus:shadow-primary/10 focus:shadow-md transition-all"
              rows={6}
            />
            <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
              {taskDescription.length} {t('characters')}
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={generatePrompt}
              disabled={isLoading || !taskDescription.trim()}
              variant="default"
              showShine={false}
              className="px-6 py-3 h-auto text-white font-medium rounded-xl transition-all shadow-md hover:shadow-lg hover:translate-y-[-1px]"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-1 rounded-full bg-white overflow-hidden">
                    <div className="h-full animate-progress-stripe"></div>
                  </div>
                  <span>{t('generating')}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Zap size={16} />
                  <span>{t('generate')}</span>
                  <ArrowRight size={16} />
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>

      {generatedPrompt && (
        <div className="mt-10 space-y-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl transform -rotate-1 scale-[1.02] -z-10"></div>
          <div className="card-stripe p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <div className="bg-primary/10 p-1.5 rounded-full">
                  <CheckCircle2 size={16} className="text-primary" />
                </div>
                {t('generatedPrompt')}
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="rounded-lg flex items-center gap-1.5 transition-all"
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

            <div className="p-4 rounded-lg bg-muted/50 border">
              <pre className="whitespace-pre-wrap text-sm">{generatedPrompt}</pre>
            </div>

            <div className="mt-4 text-xs text-muted-foreground flex justify-between">
              <span>{generatedPrompt.length} {t('characters')}</span>
              <span className="flex items-center gap-1.5">
                <Sparkles size={10} className="text-primary" />
                {t('generatedUsingAI')}
              </span>
            </div>

            <div className="mt-6 text-xs text-muted-foreground p-3 bg-muted/30 rounded border">
              <p className="whitespace-pre-wrap">
                Disclaimer: The responses generated by this Artificial Intelligence (AI) system are autonomously constructed and do not necessarily reflect the views or positions of the developing organizations, their affiliates, or any of their employees. These AI-generated responses do not represent those of the organizations. The organizations do not endorse, support, sanction, encourage, verify, or agree with the comments, opinions, or statements generated by this AI. The information produced by this AI is not intended to malign any religion, ethnic group, club, organization, company, individual, anyone, or anything. It is not the intent of the organizations to malign any group or individual. The AI operates based on its programming and training data and its responses should not be interpreted as the explicit intent or opinion of the organizations.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 