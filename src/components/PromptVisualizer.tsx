import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb, 
  Wand2, 
  ChevronDown, 
  BarChart3, 
  ChevronUp, 
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PromptVisualizer() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'improve' | 'generate'>('improve');
  const [showImproveSteps, setShowImproveSteps] = useState(false);
  const [showGenerateSteps, setShowGenerateSteps] = useState(false);

  const toggleImproveSteps = () => setShowImproveSteps(!showImproveSteps);
  const toggleGenerateSteps = () => setShowGenerateSteps(!showGenerateSteps);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {t('howItWorks')}
        </h2>
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'improve' ? "default" : "outline"}
            onClick={() => setActiveTab('improve')}
            className={`rounded-lg ${activeTab === 'improve' ? "text-white" : ""}`}
          >
            <div className="flex items-center gap-2">
              <Wand2 size={16} />
              <span>{t('improvePrompt')}</span>
            </div>
          </Button>
          <Button
            variant={activeTab === 'generate' ? "default" : "outline"}
            onClick={() => setActiveTab('generate')}
            className={`rounded-lg ${activeTab === 'generate' ? "text-white" : ""}`}
          >
            <div className="flex items-center gap-2">
              <Lightbulb size={16} />
              <span>{t('generatePrompt')}</span>
            </div>
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl transform rotate-1 scale-[1.01]"></div>
        <div className="card-stripe p-6 relative">
          {activeTab === 'improve' ? (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Wand2 size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t('improvePromptAlgorithm')}</h3>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <h4 className="font-medium mb-2">{t('promptInput')}</h4>
                    <p className="text-sm text-muted-foreground">{t('existingPromptDesc')}</p>
                  </div>
                  <div className="flex justify-center">
                    <ChevronDown size={24} className="text-primary" />
                  </div>
                  <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <h4 className="font-medium mb-2">{t('promptAnalysis')}</h4>
                    <p className="text-sm text-muted-foreground">{t('promptAnalysisDesc')}</p>
                  </div>
                  <div className="flex justify-center">
                    <ChevronDown size={24} className="text-primary" />
                  </div>
                  <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <h4 className="font-medium mb-2">{t('improvedVersion')}</h4>
                    <p className="text-sm text-muted-foreground">{t('improvedVersionDesc')}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="border rounded-xl p-4 bg-muted/30">
                    <div className="flex items-center justify-between cursor-pointer" onClick={toggleImproveSteps}>
                      <h4 className="font-medium flex items-center gap-2">
                        <BarChart3 size={16} className="text-primary" />
                        {t('detailedSteps')}
                      </h4>
                      <Button variant="ghost" size="sm">
                        {showImproveSteps ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </Button>
                    </div>
                    
                    {showImproveSteps && (
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="p-2 border rounded bg-background">
                          <p className="font-medium">1. {t('receivePrompt')}</p>
                          <p className="text-muted-foreground">{t('receivePromptDesc')}</p>
                        </div>
                        <div className="p-2 border rounded bg-background">
                          <p className="font-medium">2. {t('analyzePrompt')}</p>
                          <p className="text-muted-foreground">{t('analyzePromptDesc')}</p>
                        </div>
                        <div className="p-2 border rounded bg-background">
                          <p className="font-medium">3. {t('identifyIssues')}</p>
                          <p className="text-muted-foreground">{t('identifyIssuesDesc')}</p>
                        </div>
                        <div className="p-2 border rounded bg-background">
                          <p className="font-medium">4. {t('applyTechniques')}</p>
                          <p className="text-muted-foreground">{t('applyTechniquesDesc')}</p>
                        </div>
                        <div className="p-2 border rounded bg-background">
                          <p className="font-medium">5. {t('enhanceStructure')}</p>
                          <p className="text-muted-foreground">{t('enhanceStructureDesc')}</p>
                        </div>
                        <div className="p-2 border rounded bg-background">
                          <p className="font-medium">6. {t('returnImproved')}</p>
                          <p className="text-muted-foreground">{t('returnImprovedDesc')}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 mt-6">
                <h4 className="font-medium mb-2">{t('technicalDetails')}</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• {t('usesApi')}</li>
                  <li>• {t('modelUsed', { model: 'Typhoon' })}</li>
                  <li>• {t('optimizedPromptTemplate')}</li>
                  <li>• {t('responseProcessing')}</li>
                </ul>
                <div className="mt-3">
                  <a href="https://github.com/typhoon-ai/typhoon-prompt-optimizer" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-sm text-primary flex items-center gap-1 hover:underline">
                    <ExternalLink size={14} />
                    {t('viewSourceCode')}
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Lightbulb size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t('generatePromptAlgorithm')}</h3>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <h4 className="font-medium mb-2">{t('taskInput')}</h4>
                    <p className="text-sm text-muted-foreground">{t('taskInputDesc')}</p>
                  </div>
                  <div className="flex justify-center">
                    <ChevronDown size={24} className="text-primary" />
                  </div>
                  <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <h4 className="font-medium mb-2">{t('taskAnalysis')}</h4>
                    <p className="text-sm text-muted-foreground">{t('taskAnalysisDesc')}</p>
                  </div>
                  <div className="flex justify-center">
                    <ChevronDown size={24} className="text-primary" />
                  </div>
                  <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <h4 className="font-medium mb-2">{t('promptCreation')}</h4>
                    <p className="text-sm text-muted-foreground">{t('promptCreationDesc')}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="border rounded-xl p-4 bg-muted/30">
                    <div className="flex items-center justify-between cursor-pointer" onClick={toggleGenerateSteps}>
                      <h4 className="font-medium flex items-center gap-2">
                        <BarChart3 size={16} className="text-primary" />
                        {t('detailedSteps')}
                      </h4>
                      <Button variant="ghost" size="sm">
                        {showGenerateSteps ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </Button>
                    </div>
                    
                    {showGenerateSteps && (
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="p-2 border rounded bg-background">
                          <p className="font-medium">1. {t('receiveTask')}</p>
                          <p className="text-muted-foreground">{t('receiveTaskDesc')}</p>
                        </div>
                        <div className="p-2 border rounded bg-background">
                          <p className="font-medium">2. {t('analyzeRequirements')}</p>
                          <p className="text-muted-foreground">{t('analyzeRequirementsDesc')}</p>
                        </div>
                        <div className="p-2 border rounded bg-background">
                          <p className="font-medium">3. {t('identifyComponents')}</p>
                          <p className="text-muted-foreground">{t('identifyComponentsDesc')}</p>
                        </div>
                        <div className="p-2 border rounded bg-background">
                          <p className="font-medium">4. {t('structurePrompt')}</p>
                          <p className="text-muted-foreground">{t('structurePromptDesc')}</p>
                        </div>
                        <div className="p-2 border rounded bg-background">
                          <p className="font-medium">5. {t('addDetails')}</p>
                          <p className="text-muted-foreground">{t('addDetailsDesc')}</p>
                        </div>
                        <div className="p-2 border rounded bg-background">
                          <p className="font-medium">6. {t('returnGenerated')}</p>
                          <p className="text-muted-foreground">{t('returnGeneratedDesc')}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 mt-6">
                <h4 className="font-medium mb-2">{t('technicalDetails')}</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• {t('usesApi')}</li>
                  <li>• {t('modelUsed', { model: 'Typhoon' })}</li>
                  <li>• {t('customizedPromptTemplate')}</li>
                  <li>• {t('responseAnalysis')}</li>
                </ul>
                <div className="mt-3">
                  <a href="https://github.com/typhoon-ai/typhoon-prompt-optimizer" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-sm text-primary flex items-center gap-1 hover:underline">
                    <ExternalLink size={14} />
                    {t('viewSourceCode')}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 