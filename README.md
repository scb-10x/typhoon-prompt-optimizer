# Typhoon Prompt Optimizer

A modern web application for optimizing prompts for Large Language Models (LLMs). This tool helps you generate effective prompts from task descriptions and improve existing prompts for better AI interactions.

## Features

- **Generate Prompts**: Convert task descriptions into optimized prompts for LLMs
- **Improve Prompts**: Enhance existing prompts for better results
- **Modern UI**: Clean, responsive interface with dark mode support
- **Powered by AI**: Uses Typhoon Reasoning Model to generate and improve prompts

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Typhoon API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/scb-10x/typhoon-prompt-optimizer.git
   cd typhoon-prompt-optimizer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   TYPHOON_API_KEY=your_openai_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

### Generating a Prompt

1. Navigate to the "Generate Prompt" tab
2. Enter a detailed task description in the text area
3. Click the "Generate Prompt" button
4. Copy the generated prompt using the "Copy" button

### Improving an Existing Prompt

1. Navigate to the "Improve Prompt" tab
2. Paste your existing prompt in the text area
3. Click the "Improve Prompt" button
4. Copy the improved prompt using the "Copy" button

## Technologies Used

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Typhoon API

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Typhoon for providing the API
- Vercel for hosting
- Next.js team for the amazing framework
