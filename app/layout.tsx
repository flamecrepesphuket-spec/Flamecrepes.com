import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Flame Crepes Phuket | Modern Breakfast & Crepe Café",
  description: "Flame Crepes Phuket is a modern breakfast and crepe café with fresh ingredients, premium products, large portions, and fast service.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
