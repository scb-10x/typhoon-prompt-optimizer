import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { extractResultFromThinking } from '@/lib/utils';
import { TYPHOON_API_KEY, TYPHOON_BASE_URL, TYPHOON_MODEL } from '@/app/const';
import { guidelinesMarkdown } from '@/guidelines/content';

// Initialize OpenAI client with Typhoon API endpoint
const openai = new OpenAI({
  apiKey: TYPHOON_API_KEY,
  baseURL: TYPHOON_BASE_URL, // Typhoon API endpoint
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || prompt.trim() === '') {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: TYPHOON_MODEL,
      messages: [
        {
          role: 'user',
          content: `You are an expert prompt engineer tasked with improving a prompt for a language model (LLM). Your goal is to enhance the given prompt to ensure the LLM can follow instructions as accurately and effectively as possible. Here are your instructions:

1. Carefully analyze the current prompt provided to you. Consider its strengths and weaknesses, paying attention to clarity, specificity, and potential ambiguities.

2. The current prompt is as follows:
<current_prompt>
${prompt}
</current_prompt>
${guidelinesMarkdown['en']}

Remember, your goal is to create a prompt that will result in the most accurate and effective response from the LLM. Focus on clarity, specificity, and comprehensiveness in your improved version.
<prompt>`
        }
      ],
      temperature: 0.6,
      max_tokens: 2048,
    });

    let improvedPrompt = response.choices[0]?.message?.content || '';
    
    // Process the response to handle thinking tags
    improvedPrompt = extractResultFromThinking(improvedPrompt);

    return NextResponse.json({ improvedPrompt });
  } catch (error) {
    console.error('Error improving prompt:', error);
    return NextResponse.json(
      { error: 'Failed to improve prompt' },
      { status: 500 }
    );
  }
} 