import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { Navbar } from "@/components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prompts.opentyphoon.ai"),
  title: "Typhoon Prompt Optimizer - Craft Better AI Prompts | OpenTyphoon",
  description: "Improve your AI interactions with Typhoon's powerful prompt generation and optimization tools. A demo showcasing what's possible with Typhoon LLM technology.",
  keywords: ["AI prompts", "prompt engineering", "Typhoon AI", "LLM tools", "AI prompt generator", "prompt optimization"],
  authors: [{ name: "OpenTyphoon Team" }],
  creator: "OpenTyphoon",
  publisher: "OpenTyphoon",
  openGraph: {
    type: "website",
    url: "https://prompts.opentyphoon.ai",
    title: "Typhoon Prompt Optimizer - Craft Better AI Prompts",
    description: "Enhance your AI interactions with advanced prompt engineering tools. A demo showcasing Typhoon's capabilities.",
    siteName: "Typhoon Prompt Optimizer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Typhoon Prompt Optimizer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@opentyphoon",
    creator: "@opentyphoon",
    title: "Typhoon Prompt Optimizer - AI Prompt Engineering Tools",
    description: "Generate and optimize prompts for AI models with Typhoon's demonstration tools.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://prompts.opentyphoon.ai",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://prompts.opentyphoon.ai" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Typhoon Prompt Optimizer",
              "description": "A tool for generating and optimizing prompts for AI models, showcasing Typhoon's capabilities.",
              "url": "https://prompts.opentyphoon.ai",
              "applicationCategory": "AITools",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "publisher": {
                "@type": "Organization",
                "name": "OpenTyphoon",
                "url": "https://opentyphoon.ai"
              },
              "creator": {
                "@type": "Organization",
                "name": "OpenTyphoon",
                "url": "https://opentyphoon.ai"
              }
            }
          `}
        </Script>
        <LanguageProvider>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
