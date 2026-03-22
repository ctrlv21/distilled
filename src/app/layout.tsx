import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Distilled · AI Community NYC",
  description:
    "A high-signal meetup for the AI community in New York City. Founders, researchers, and builders working at the frontier of AI.",
  metadataBase: new URL("https://www.distilledmeetups.com"),
  openGraph: {
    title: "Distilled · AI Community NYC",
    description:
      "A high-signal meetup for the AI community in New York City. Founders, researchers, and builders working at the frontier of AI.",
    url: "https://www.distilledmeetups.com",
    siteName: "Distilled",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Distilled · AI Community NYC",
    description:
      "A high-signal meetup for the AI community in New York City.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
