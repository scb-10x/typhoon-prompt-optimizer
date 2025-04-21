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
  metadataBase: new URL("https://optimizer.apps.opentyphoon.ai"),
  title: "Typhoon Prompt Optimizer - Craft Better AI Prompts | OpenTyphoon",
  description: "Improve your AI interactions with Typhoon's powerful prompt generation and optimization tools. A demo showcasing what's possible with Typhoon LLM technology.",
  keywords: ["AI prompts", "prompt engineering", "Typhoon AI", "LLM tools", "AI prompt generator", "prompt optimization"],
  authors: [{ name: "Typhoon Team" }],
  creator: "Typhoon",
  publisher: "Typhoon",
  openGraph: {
    type: "website",
    url: "https://optimizer.apps.opentyphoon.ai",
    title: "Typhoon Prompt Optimizer - Craft Better AI Prompts",
    description: "Enhance your AI interactions with advanced prompt engineering tools. A demo showcasing Typhoon's capabilities.",
    siteName: "Typhoon Prompt Optimizer",
    images: [
      {
        url: "/images/og.jpg",
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
    images: ["/images/og.jpg"],
  },
  alternates: {
    canonical: "https://optimizer.apps.opentyphoon.ai",
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
        <link rel="canonical" href="https://optimizer.apps.opentyphoon.ai" />
        <meta name="robots" content="index, follow" />
        <Script id="gtm-script">
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WK925XWL');
    `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WK925XWL"
            height={0} width={0} style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>

        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Typhoon Prompt Optimizer",
              "description": "A tool for generating and optimizing prompts for AI models, showcasing Typhoon's capabilities.",
              "url": "https://optimizer.apps.opentyphoon.ai",
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
