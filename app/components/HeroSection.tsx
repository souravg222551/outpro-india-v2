import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-32 px-8 lg:px-24 bg-[#1e40af] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Section - Loads Instantly */}
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            Transform Your Business with <br className="hidden md:block" /> Innovative IT Solutions
          </h1>
          
          <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-xl">
            Outpro.India delivers cutting-edge technology services that drive growth, efficiency, and digital transformation for businesses worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-lg hover:bg-slate-50 transition shadow-lg flex items-center justify-center gap-2">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <button className="px-8 py-3.5 bg-transparent text-white font-semibold rounded-lg border border-white/30 hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section - Hyper-Optimized for Mobile */}
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
          <Image 
  src="/hero-bg.jpg" /* Changed from the long Unsplash URL */
  alt="Outpro.India Team Collaboration" 
  fill
  priority
  fetchPriority="high"
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>
            
           
        </div>

      </div>
    </section>
  );
}