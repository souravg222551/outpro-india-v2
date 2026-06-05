import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"], display: "swap" });

// Dynamically load GoogleAnalytics ONLY after the page is interactive
const GoogleAnalytics = dynamic(
  () => import('@next/third-parties/google').then((mod) => mod.GoogleAnalytics),
  { ssr: false } 
);

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
        
        {/* Analytics moved safely INSIDE the body tag! */}
        <GoogleAnalytics gaId="G-ZDX8V8P25T" /> 
      </body>
    </html>
  );
}