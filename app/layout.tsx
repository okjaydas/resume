import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Janmejaya Das | Software Engineer",
  description:
    "Janmejaya Das — Software Engineer with 13+ years of experience in backend architecture, cloud migrations, AI/LLM integration, and engineering leadership at Microsoft, Amazon, and Razorpay.",
  keywords: [
    "Janmejaya Das",
    "Software Engineer",
    "Senior Software Engineer",
    "Staff Software Engineer",
    "Lead Software Engineer",
    "Principal Software Engineer",
    "Microsoft",
    "Azure",
    "Full-Stack",
    "Cloud Architecture",
    "LLM",
    "AI",
    "System Design",
  ],
  metadataBase: new URL("https://janmejaydas.vercel.app"),
  openGraph: {
    title: "Janmejaya Das | Software Engineer",
    description:
      "13+ years driving backend architecture, cloud migrations, and AI integration at Microsoft, Amazon & Razorpay.",
    url: "https://janmejaydas.vercel.app",
    siteName: "Janmejaya Das — Resume",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/avatar.jpg",
        width: 512,
        height: 512,
        alt: "Janmejaya Das",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Janmejaya Das | Software Engineer",
    description:
      "13+ years driving backend architecture, cloud migrations, and AI integration at Microsoft, Amazon & Razorpay.",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="460247bf-2010-41c1-8788-1dc1e94a8aa2"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
