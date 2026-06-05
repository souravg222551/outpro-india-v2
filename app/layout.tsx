import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"], display: "swap" });

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
        {/* Top Navigation */}
        <Navbar /> 
        
        {/* Main Page Content */}
        {children}
        
        {/* Bottom Footer */}
        <Footer />
        
        {/* Official Next.js Analytics (Automatically deferred!) */}
        <GoogleAnalytics gaId="G-ZDX8V8P25T" /> 
      </body>
    </html>
  );
}