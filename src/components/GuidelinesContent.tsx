"use client";

import ReactMarkdown from "react-markdown";
import { CheckCircle, XCircle } from "lucide-react";
import { guidelinesMarkdown } from "../guidelines/content";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Custom components for markdown rendering
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: any = {
  // Style headings
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h2: (props: any) => (
    <h2 className="text-3xl font-bold mb-6 text-gradient" {...props} />
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h3: (props: any) => (
    <h3
      className="text-2xl font-semibold mt-10 mb-4 text-primary/90"
      {...props}
    />
  ),

  // Style code blocks
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: (props: any) => {
    const { inline, className, children } = props;
    const match = /language-(\w+)/.exec(className || "");
    const isExample =
      !inline &&
      !match &&
      children &&
      (String(children).includes("❌") ||
        String(children).includes("✅") ||
        String(children).includes("Prompt"));

    if (inline) {
      return (
        <code
          className="bg-primary/10 text-primary px-1 py-0.5 rounded"
          {...props}
        />
      );
    }

    if (isExample) {
      const lines = String(children).split("\n");
      const hasLongLines = lines.some((line) => line.length > 80);

      return (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4 overflow-hidden">
          <div className={`${hasLongLines ? "overflow-x-auto" : ""}`}>
            <div className={`${hasLongLines ? "min-w-max" : ""}`}>
              {lines.map((line, i) => {
                if (line.trim().startsWith("❌")) {
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-2 mb-2 text-red-500"
                    >
                      <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-700 font-mono">
                        {line.replace("❌", "").trim()}
                      </div>
                    </div>
                  );
                } else if (line.trim().startsWith("✅")) {
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-2 mb-2 text-green-500"
                    >
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-700 font-mono">
                        {line.replace("✅", "").trim()}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={i}
                      className="text-gray-700 font-mono whitespace-pre"
                    >
                      {line}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      );
    }

    // For code blocks with language syntax highlighting or regular code blocks
    return (
      <div className="markdown-code-block">
        <pre className="text-sm text-gray-800 whitespace-pre">
          <code className={className} {...props} />
        </pre>
      </div>
    );
  },

  // Style pre elements to ensure proper scrolling
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pre: (props: any) => <pre className="overflow-x-auto" {...props} />,

  // Style paragraphs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  p: (props: any) => (
    <p
      className="text-gray-700 mb-4 leading-relaxed"
      {...props}
    />
  ),

  // Style strong text
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  strong: (props: any) => (
    <strong className="font-semibold text-primary/90" {...props} />
  ),

  // Style links
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  a: (props: any) => (
    <a
      className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
      {...props}
    />
  ),
};

export function GuidelinesContent() {
  const { language } = useLanguage();
  // Select the appropriate markdown content based on the language
  const content = language === 'th' ? guidelinesMarkdown.th : guidelinesMarkdown.en;

  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
