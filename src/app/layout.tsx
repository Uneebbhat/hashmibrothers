import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/src/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Online HashmiBrother's Pharmacy | Get all the medical products you need",
  description:
    "Online HashmiBrother's Pharmacy is a online pharmacy that provides all the medical products you need. We have a wide range of products including medicines, supplements, and personal care items. Our products are carefully selected to ensure quality and safety. We also offer online ordering and delivery services. Visit us today and get all the medical products you need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
