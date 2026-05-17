import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chandler Bolton | Cloud & Integrations Engineer",
  description:
    "Portfolio showcasing cloud infrastructure, system architecture, and enterprise integration work.",

  openGraph: {
    title: "Chandler Bolton | Cloud & Integrations Engineer",
    description:
      "Cloud infrastructure, API integrations, and distributed systems engineering portfolio.",
    url: "https://www.chandler-bolton-portfolio.dev",
    siteName: "Chandler Bolton Portfolio",
    images: [
      {
        url: "public/images/profile-pic.png",
        width: 1200,
        height: 630,
        alt: "Chandler Bolton Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chandler Bolton | Cloud & Integrations Engineer",
    description:
      "Cloud infrastructure, API integrations, and distributed systems engineering portfolio.",
    images: ["public/images/profile-pic.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
