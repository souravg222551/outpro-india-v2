export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-8 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 tracking-tighter">
            About Outpro<span className="text-blue-600">.India</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We are a leading IT solutions provider committed to delivering excellence through innovation, expertise, and a customer-centric approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Our Mission */}
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:border-blue-100 transition shadow-sm hover:shadow-lg hover:shadow-blue-500/5 group">
            <div className="w-14 h-14 bg-blue-100 rounded-xl mb-8 flex items-center justify-center text-blue-600 group-hover:scale-110 transition">
              {/* Bullseye Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Our Mission</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              To empower businesses with technology solutions that drive sustainable growth and competitive advantage.
            </p>
          </div>

          {/* Card 2: Our Team */}
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:border-blue-100 transition shadow-sm hover:shadow-lg hover:shadow-blue-500/5 group">
            <div className="w-14 h-14 bg-blue-100 rounded-xl mb-8 flex items-center justify-center text-blue-600 group-hover:scale-110 transition">
              {/* Users Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Our Team</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              A diverse group of experts passionate about technology and committed to delivering exceptional results.
            </p>
          </div>

          {/* Card 3: Our Values */}
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:border-blue-100 transition shadow-sm hover:shadow-lg hover:shadow-blue-500/5 group">
            <div className="w-14 h-14 bg-blue-100 rounded-xl mb-8 flex items-center justify-center text-blue-600 group-hover:scale-110 transition">
              {/* Badge Check Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M16.5 18.75h-9m0 0V15.375c0-.621.504-1.125 1.125-1.125h.871M12 9.75h.008v.008H12V9.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Our Values</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Excellence, integrity, innovation, and customer satisfaction are the pillars of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}