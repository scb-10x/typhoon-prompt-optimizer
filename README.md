# Typhoon Prompt Optimizer

## Introduction

[Typhoon Prompt Optimizer](https://optimizer.apps.opentyphoon.ai) is a web application designed to help users create and refine prompts for Large Language Models (LLMs). It transforms task descriptions into effective prompts and enhances existing prompts to generate better AI responses.

This project is part of [Typhoon Application Week](https://apps.opentyphoon.ai), showcasing the capabilities of the [Typhoon platform](https://opentyphoon.ai). Please note that this application is not maintained for production use and is not production-ready. Use at your own risk.

## Highlighted Features + Typhoon Integration

- **Smart Prompt Generation**: Typhoon's reasoning model analyzes task descriptions to create optimized prompts tailored to specific LLM requirements, ensuring clear instructions and proper context.

- **Prompt Enhancement**: Existing prompts are refined by Typhoon, which identifies weaknesses, ambiguities, or potential improvements to make the prompt more effective.

- **Context-Aware Suggestions**: Typhoon provides specific suggestions based on the prompt's purpose, adapting its recommendations to different types of tasks (creative writing, coding, data analysis, etc.).

- **Best Practice Implementation**: Prompts are automatically structured following industry best practices for prompt engineering, powered by Typhoon's knowledge of effective prompt patterns.

- **Interactive Refinement**: The application leverages Typhoon's capabilities to provide real-time feedback as users modify prompts, creating an iterative improvement process.

## Getting Started (Local Development)

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Typhoon API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/typhoon-prompt-optimizer.git
   cd typhoon-prompt-optimizer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Typhoon API key:
   ```
   TYPHOON_API_KEY=your_typhoon_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.

## Connect With Us

- Website: [Typhoon](https://opentyphoon.ai)
- GitHub: [SCB 10X](https://github.com/scb-10x)
- Hugging Face: [SCB 10X](https://huggingface.co/scb10x)
- Discord: [Join our community](https://discord.com/invite/9F6nrFXyNt)
- X (formerly Twitter): [Typhoon](https://x.com/opentyphoon)
