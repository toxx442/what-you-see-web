import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "What You See | Entertainment Australia",
  description:
    "What You See is a modern entertainment brand in Australia, crafting bold visual experiences, immersive events, and creative collaborations.",
  keywords: [
    "entertainment",
    "Australia",
    "events",
    "visual",
    "immersive",
    "What You See",
  ],
  authors: [{ name: "What You See" }],
  openGraph: {
    title: "What You See | Entertainment Australia",
    description:
      "Modern, artistic entertainment experiences and events in Australia.",
    url: "https://whatyousee.com.au",
    siteName: "What You See",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What You See | Entertainment Australia",
    description:
      "Modern, artistic entertainment experiences and events in Australia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
