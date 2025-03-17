"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, Gem, Zap } from 'lucide-react';

export function FloatingFeature() {
  return (
    <div className="hidden lg:block absolute -right-60 top-1/4 z-10">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative"
      >
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8">
          <div className="w-full h-full rounded-full bg-gradient-primary opacity-20 blur-sm"></div>
        </div>
        
        <div className="absolute -bottom-3 -right-3 w-6 h-6">
          <div className="w-full h-full rounded-full bg-accent opacity-20 blur-sm"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-xl"></div>
        <div className="relative backdrop-blur-sm bg-card/90 border border-gray-200 shadow-xl rounded-xl p-6 w-64">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-1 w-5 bg-gradient-primary rounded-full"></div>
                <h3 className="font-medium text-sm text-primary">Key Features</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 bg-primary/10 p-1.5 rounded-full">
                    <Sparkles size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Generate Prompts</h4>
                    <p className="text-xs text-muted-foreground mt-1">Create powerful prompts from simple descriptions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 bg-primary/10 p-1.5 rounded-full">
                    <Wand2 size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Improve Prompts</h4>
                    <p className="text-xs text-muted-foreground mt-1">Enhance existing prompts for better results</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 bg-primary/10 p-1.5 rounded-full">
                    <Gem size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">AI-Powered</h4>
                    <p className="text-xs text-muted-foreground mt-1">Leverages advanced language models</p>
                  </div>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-primary/5 via-primary/20 to-accent/5 my-2"></div>
                
                <div className="text-xs text-muted-foreground pt-1">
                  <span className="font-medium text-primary flex items-center gap-1.5">
                    <Zap size={10} />
                    Pro tip:
                  </span> Be specific in your task descriptions for better results.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 