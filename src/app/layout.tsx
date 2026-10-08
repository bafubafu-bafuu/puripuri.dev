import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "puripuri.dev",
  description: "Personal website",
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
