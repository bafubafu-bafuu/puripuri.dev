import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://puripuri.dev"),
  title: "ゆーずき (bafubafu) | Web & Server Engineer",
  description: "株式会社DONUTSでミクチャのWeb・サーバー開発を担当しているエンジニア、ゆーずき(bafubafu)のポートフォリオサイトです。",
  openGraph: {
    title: "ゆーずき (bafubafu) | Web & Server Engineer",
    description: "株式会社DONUTSでミクチャのWeb・サーバー開発を担当しているエンジニア、ゆーずき(bafubafu)のポートフォリオサイトです。",
    url: "https://puripuri.dev",
    siteName: "puripuri.dev",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ゆーずき (bafubafu) | Web & Server Engineer",
    description: "株式会社DONUTSでミクチャのWeb・サーバー開発を担当しているエンジニア、ゆーずき(bafubafu)のポートフォリオサイトです。",
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
