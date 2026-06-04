"use client";

import Link from 'next/link';

export default function Navbar() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center py-5 px-8 lg:px-24 bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="text-2xl font-black text-slate-900 tracking-tighter">
        Outpro<span className="text-blue-600">.India</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
        <Link href="/#about" className="hover:text-blue-600 transition">About</Link>
        <Link href="/#services" className="hover:text-blue-600 transition">Services</Link>
        <Link href="/#portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
      </div>

      <button 
        onClick={scrollToContact} 
        className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition shadow-md shadow-blue-500/20"
      >
        Get Started
      </button>
    </nav>
  );
}