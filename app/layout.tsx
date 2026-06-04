import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Outpro.India | Corporate IT Solutions",
  description: "Transform your business with cutting-edge IT solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
      {/* Replace G-XXXXXXXXXX with your actual GA4 Measurement ID */}
      <GoogleAnalytics gaId="G-XXXXXXXXXX" /> 
    </html>
  );
}