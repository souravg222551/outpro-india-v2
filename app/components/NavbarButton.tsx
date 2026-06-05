"use client";

import { useRouter } from "next/navigation";

export default function NavbarButton() {
  const router = useRouter();

  const scrollToContact = () => {
    if (window.location.pathname !== "/") {
      router.push("/#contact");
    } else {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button 
      onClick={scrollToContact} 
      className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition shadow-md shadow-blue-500/20"
    >
      Get Started
    </button>
  );
}