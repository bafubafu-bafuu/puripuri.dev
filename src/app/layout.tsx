import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://puripuri.dev"),
  title: "bafubafu",
  description: "DONUTSで「ミクチャ」のWeb・サーバー開発を担当しています。",
  openGraph: {
    title: "bafubafu",
    description: "DONUTSで「ミクチャ」のWeb・サーバー開発を担当しています。",
    url: "https://puripuri.dev",
    siteName: "puripuri.dev",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "bafubafu",
    description: "DONUTSで「ミクチャ」のWeb・サーバー開発を担当しています。",
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
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
