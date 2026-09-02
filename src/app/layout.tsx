import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Josuakuru - 19",
  description: "Happy 19th Birthday Josuakuru. A personal editorial experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${newsreader.variable} h-full antialiased bg-ivory text-primary selection:bg-accent selection:text-ivory`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
