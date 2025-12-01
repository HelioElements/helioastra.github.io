import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HelioAstra - AI-Powered Astrology Software",
  description: "Unlock the secrets of the cosmos with revolutionary artificial intelligence that transforms ancient wisdom into personalized astrological insights.",
  keywords: ["astrology", "AI", "artificial intelligence", "horoscope", "birth chart", "astrology software"],
  authors: [{ name: "HelioAstra Team" }],
  creator: "HelioAstra",
  publisher: "HelioAstra",
  openGraph: {
    title: "HelioAstra - AI-Powered Astrology Software",
    description: "Revolutionary AI-powered astrology platform for personalized cosmic insights",
    url: "https://helioastra.github.io",
    siteName: "HelioAstra",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HelioAstra - AI-Powered Astrology Software",
    description: "Revolutionary AI-powered astrology platform for personalized cosmic insights",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://helioastra.github.io" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
