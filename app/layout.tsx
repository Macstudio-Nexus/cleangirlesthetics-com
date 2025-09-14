import type { Metadata } from "next";
import { Dancing_Script, Prata } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Clean Girl Esthetics - Best Facials & Lash Extensions in Staten Island",
  description: "Transform your look at Clean Girl Esthetics! Professional facials, lash extensions, brow services & skincare treatments in Staten Island, NY. Book your appointment today!",
  keywords: "facials Staten Island, lash extensions Staten Island, best facial staten island, best lash extensions staten island, facials near me, lash extensions near me",
  authors: [{ name: "Clean Girl Esthetics" }],
  creator: "Clean Girl Esthetics",
  publisher: "Clean Girl Esthetics",
  metadataBase: new URL('https://cleangirlesthetics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Clean Girl Esthetics - Best Facials & Lash Extensions in Staten Island",
    description: "Transform your look at Clean Girl Esthetics! Professional facials, lash extensions, brow services & skincare treatments in Staten Island, NY. Book your appointment today!",
    url: 'https://cleangirlesthetics.com',
    siteName: 'Clean Girl Esthetics',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Clean Girl Esthetics - Professional Beauty Services in Staten Island',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Clean Girl Esthetics - Best Facials & Lash Extensions in Staten Island",
    description: "Transform your look at Clean Girl Esthetics! Professional facials, lash extensions, brow services & skincare treatments in Staten Island, NY. Book your appointment today!",
    images: ['/twitter-image.jpg'],
    creator: '@cleangirlesthetics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'beauty',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${prata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
