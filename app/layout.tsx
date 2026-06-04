import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        {/* Top Navigation */}
        <Navbar /> 
        
        {/* Main Page Content */}
        {children}
        
        {/* Bottom Footer */}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" /> 
    </html>
  );
}