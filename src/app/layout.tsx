import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://puripuri.dev"),
  title: "ぷりぷりのウェブサイト",
  description: "ぷりぷりのウェブサイト。DONUTSで「ミクチャ」のWeb・サーバー開発をしています。",
  openGraph: {
    title: "ぷりぷりのウェブサイト",
    description: "ぷりぷりのウェブサイト。DONUTSで「ミクチャ」のWeb・サーバー開発をしています。",
    url: "https://puripuri.dev",
    siteName: "ぷりぷり",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ぷりぷりのウェブサイト",
    description: "ぷりぷりのウェブサイト。DONUTSで「ミクチャ」のWeb・サーバー開発をしています。",
    creator: "@bafubafu_bafuu",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJp.variable}`}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="ぷりぷりのウェブサイト RSS"
          href="/feed.xml"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4875418035439889"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
