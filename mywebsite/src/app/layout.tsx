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

export const metadata: Metadata = {
  title: "Shota Matsu | Software Developer",
  description:
    "Shota Matsuのポートフォリオサイト。フルスタック開発、Webアプリケーション制作の実績を紹介しています。",
  keywords: ["Software Developer", "Engineer", "Portfolio", "Shota Matsu"],
  authors: [{ name: "Shota Matsu" }],
  openGraph: {
    title: "Shota Matsu | Software Developer",
    description: "Shota Matsuのポートフォリオサイト",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shota Matsu | Software Developer",
    description: "Shota Matsuのポートフォリオサイト",
    creator: "@MatusTT12",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
