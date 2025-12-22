import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import BackToTop from "@/components/ui/BackToTop";

const renjanis = localFont({
  src: "../public/fonts/Renjanis-Regular.ttf",
  variable: "--font-renjanis",
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clean Girl Esthetics - Facials & Lash Extensions Staten Island",
  description:
    "Transform your look at Clean Girl Esthetics! Professional facials, lash extensions, brow services & skincare treatments in Staten Island, NY. Book your appointment today!",
  keywords:
    "facials Staten Island, lash extensions Staten Island, best facial staten island, best lash extensions staten island, facials near me, lash extensions near me",
  authors: [{ name: "Clean Girl Esthetics" }],
  creator: "Clean Girl Esthetics",
  publisher: "Clean Girl Esthetics",
  metadataBase: new URL("https://cleangirlesthetics.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title:
      "Clean Girl Esthetics - Best Facials & Lash Extensions in Staten Island",
    description:
      "Transform your look at Clean Girl Esthetics! Professional facials, lash extensions, brow services & skincare treatments in Staten Island, NY. Book your appointment today!",
    url: "https://cleangirlesthetics.com",
    siteName: "Clean Girl Esthetics",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Clean Girl Esthetics - Professional Beauty Services in Staten Island",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Clean Girl Esthetics - Best Facials & Lash Extensions in Staten Island",
    description:
      "Transform your look at Clean Girl Esthetics! Professional facials, lash extensions, brow services & skincare treatments in Staten Island, NY. Book your appointment today!",
    images: ["/twitter-image.jpg"],
    creator: "@cleangirlesthetics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${renjanis.variable} ${outfit.variable} antialiased bg-white mt-3 lg:mt-8 `}
      >
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
