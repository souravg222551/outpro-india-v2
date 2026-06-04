export default function PortfolioSection() {
  const projects = [
    {
      company: "RetailCorp",
      title: "E-Commerce Platform Transformation",
      desc: "Migrated legacy systems to modern cloud infrastructure, resulting in 40% faster page loads and 25% increase in conversions.",
      tags: ["Cloud Migration", "E-Commerce", "Performance"],
      img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: false,
    },
    {
      company: "MediTech Solutions",
      title: "Healthcare Data Analytics Solution",
      desc: "Developed a comprehensive analytics platform that improved patient care coordination and reduced operational costs by 30%.",
      tags: ["Data Analytics", "Healthcare", "Custom Development"],
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: true, // Flips layout for alternating look
    },
    {
      company: "FinanceFirst Bank",
      title: "Mobile Banking Application",
      desc: "Created a secure, user-friendly mobile banking app serving over 500,000 active users with 99.9% uptime.",
      tags: ["Mobile Development", "Security", "Finance"],
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: false,
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-8 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Portfolio</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Success stories from clients who trust Outpro.India to deliver transformative technology solutions.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                project.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md group">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              {/* Text Content Side */}
              <div className="w-full lg:w-1/2 text-left">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  {project.company}
                </span>
                <h3 className="text-3xl font-bold text-slate-900 mt-2 mb-4 tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition group text-sm"
                >
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}