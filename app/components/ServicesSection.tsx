"use client";

import Link from "next/link";
import FadeIn from "./FadeIn"; // Assuming this is your animation component

export default function ServicesSection() {
  const services = [
    { slug: "cloud-solutions", title: "Cloud Solutions", desc: "Scalable cloud infrastructure and migration services." },
    { slug: "custom-development", title: "Custom Development", desc: "Tailored software solutions built with cutting-edge technologies." },
    { slug: "cybersecurity", title: "Cybersecurity", desc: "Comprehensive security solutions to protect your digital assets." },
    { slug: "data-analytics", title: "Data Analytics", desc: "Transform raw data into actionable insights." },
    { slug: "mobile-development", title: "Mobile Development", desc: "Native and cross-platform applications." },
    { slug: "it-consulting", title: "IT Consulting", desc: "Strategic technology consulting to align with your business objectives." }
  ];

  return (
    <section id="services" className="py-24 px-8 lg:px-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Services</h2>
            <p className="text-slate-600 text-lg">Comprehensive IT solutions for your digital transformation.</p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} direction="up" delay={0.1 * index}>
              <Link href={`/services/${service.slug}`} className="block h-full group">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <span className="text-blue-600 font-semibold text-sm">Learn more →</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}