"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

// 1. Define the object HERE, inside the file, before the component
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

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  // 2. Now the component can "see" serviceDetails
  const service = serviceDetails[slug as keyof typeof serviceDetails];

  const scrollToContact = () => {
    // If we are not on the home page, go to home first
    if (window.location.pathname !== "/") {
      router.push("/#contact");
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!service) {
    return <div className="p-24 text-center">Service not found.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-8">
        <Link href="/#services" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 mb-8 transition-colors">
          Back to all services
        </Link>
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100 mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{service.title}</h1>
          <p className="text-xl text-slate-600">{service.description}</p>
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Capabilities</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-slate-700">{feature}</li>
            ))}
          </ul>
          <div className="mt-10 pt-8 border-t border-slate-100">
            <button 
              onClick={scrollToContact} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}