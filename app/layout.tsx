import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrodyPen.com",
  description:
    "Hello! I'm Brody. I'm a passionate software engineer with a love for learning innovative technologies and crafting robust solutions.",
  openGraph: {
    title: "BrodyPen.com",
    description: "Hey, Im Brody Pen!",
    url: "https://brodypen.com",
    siteName: "BrodyPen.com",
    images: [
      {
        url: "https://brodypen.com/opengraph-image.png",
        width: 630,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
