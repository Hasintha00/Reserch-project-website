import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FitForge AI | Your Trusted Fitness Partner",
  description: "More than a gym — it's a lifestyle. Join FitForge AI for premium fitness programs, Pilates, and certified personal training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
