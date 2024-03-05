import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "../globals.css";

export const metadata: Metadata = {
  title: "Mobile First",
  description: "Mobile First Web with Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
