import Link from "next/link";
import { notFound } from "next/navigation";
import ConsultationButton from "@/components/ConsultationButton"; // Using the new button

const serviceDetails = {
  "cloud-solutions": {
    title: "Cloud Solutions",
    description: "Modernize your infrastructure with our secure, scalable cloud migration and management services.",
    features: ["AWS & Azure Migration", "Cloud Security Posture Management", "Serverless Architecture", "24/7 Monitoring"],
  },
  "custom-development": {
    title: "Custom Development",
    description: "Tailored enterprise software built with modern tech stacks to solve your specific business challenges.",
    features: ["Web Applications", "API Development & Integration", "Legacy System Modernization", "UI/UX Design"],
  },
  "cybersecurity": {
    title: "Cybersecurity",
    description: "Protect your sensitive data and maintain compliance with our enterprise-grade security solutions.",
    features: ["Vulnerability Assessments", "Zero Trust Architecture", "Endpoint Protection", "Compliance Auditing"],
  },
  "data-analytics": {
    title: "Data Analytics",
    description: "Turn raw data into actionable business intelligence to drive smarter, faster decision-making.",
    features: ["Business Intelligence Dashboards", "Predictive Analytics", "Data Warehousing", "Machine Learning Models"],
  },
  "mobile-development": {
    title: "Mobile Development",
    description: "Engage your customers anywhere with high-performance native and cross-platform mobile apps.",
    features: ["iOS Development", "Android Development", "React Native / Flutter", "App Store Optimization"],
  },
  "it-consulting": {
    title: "IT Consulting",
    description: "Align your technology strategy with your business goals through our expert advisory services.",
    features: ["Digital Transformation Strategy", "IT Infrastructure Audits", "Vendor Management", "Technology Roadmaps"],
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = serviceDetails[resolvedParams.slug as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-8">
        
        <Link href="/#services" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 mb-8 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to all services
        </Link>

        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100 mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            {service.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Capabilities</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-slate-700">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="mt-10 pt-8 border-t border-slate-100">
            <ConsultationButton />
          </div>
        </div>

      </div>
    </div>
  );
}