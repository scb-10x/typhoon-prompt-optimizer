import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extracts the result from a response that might contain <think>...</think> tags
 * Also cleans up JSON code blocks, prompt tags, and extra newlines
 * @param text The response text
 * @returns The cleaned response text
 */
export function extractResultFromThinking(text: string): string {
  let result = text;
  
  // Remove thinking tags if present
  if(result.includes('</think>')){
    result = result.split('</think>')[1].trim();
  }
  
  // Remove prompt tags if present
  if(result.includes('<prompt>') || result.includes('</prompt>')){
    result = result.replaceAll('<prompt>', '').replaceAll('</prompt>', '');
  }
  
  return result.trim();
} 