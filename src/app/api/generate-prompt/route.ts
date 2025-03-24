import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { extractResultFromThinking } from '@/lib/utils';
import { OPENAI_API_KEY, TYPHOON_BASE_URL, TYPHOON_MODEL } from '@/app/const';

// Initialize OpenAI client with Typhoon API endpoint
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  baseURL: TYPHOON_BASE_URL, // Typhoon API endpoint
});

export async function POST(request: Request) {
  try {
    const { taskDescription } = await request.json();

    if (!taskDescription || taskDescription.trim() === '') {
      return NextResponse.json(
        { error: 'Task description is required' },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: TYPHOON_MODEL,
      messages: [
        {
          role: 'user',
          content: `You are an expert prompt engineer tasked with creating effective prompts for language models. Your goal is to generate a clear, concise, and comprehensive prompt based on a given task description. This prompt should ensure that the language model can follow instructions as accurately as possible.

Here is the task description:
<task_description>
${taskDescription}
</task_description>

To create an effective prompt, follow these guidelines:

1. Analyze the task description carefully to understand the core requirements and objectives.
2. Break down the task into clear, sequential steps if applicable.
3. Identify any potential ambiguities or edge cases and address them in your prompt.
4. Use clear and concise language, avoiding unnecessary complexity.
5. Include any relevant context or background information that may be helpful for the language model.
6. Specify the desired output format and any constraints or requirements.
7. If appropriate, provide a brief example of the expected input and output.

Your generated prompt should be structured in a way that guides the language model through the task logically and effectively. Consider using numbered steps, bullet points, or other organizational elements to enhance clarity.

Remember to include any necessary input variables in the format {{VARIABLE_NAME}} within your prompt. These will be replaced with actual values when the prompt is used.

Output your generated prompt within <prompt> tags. Do not include any explanations, comments, or additional text outside of these tags. The content within the <prompt> tags should be ready to use as-is with a language model.

Now, based on the task description provided, generate an effective prompt for a language model:

<prompt>Remember to focus on the specific details of the task described above and tailor your prompt generation accordingly. Your goal is to create a prompt that will enable the LLM to complete the given task with high accuracy and reliability.`
        }
      ],
      temperature: 0.6,
      max_tokens: 2048,
    });

    let generatedPrompt = response.choices[0]?.message?.content || '';
    
    // Process the response to handle thinking tags
    generatedPrompt = extractResultFromThinking(generatedPrompt);

    return NextResponse.json({ prompt: generatedPrompt });
  } catch (error) {
    console.error('Error generating prompt:', error);
    return NextResponse.json(
      { error: 'Failed to generate prompt' },
      { status: 500 }
    );
  }
} 