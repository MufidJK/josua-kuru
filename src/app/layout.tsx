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
  title: "Josuakuru — 19",
  description: "Happy 19th Birthday Josuakuru. A personal editorial experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${newsreader.variable} h-full antialiased bg-[#F7F5F0] text-[#171717] selection:bg-[#7A3038] selection:text-[#F7F5F0]`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
