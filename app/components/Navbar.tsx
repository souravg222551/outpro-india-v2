import Link from 'next/link';
import NavbarButton from './NavbarButton'; // Import the new button

export default function Navbar() {
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

      {/* Use the client button here */}
      <NavbarButton />
    </nav>
  );
}