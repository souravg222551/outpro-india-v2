import FadeIn from "./FadeIn";

export default function KeyMetrics() {
  const metrics = [
    { id: 1, value: "500+", label: "Projects Delivered" },
    { id: 2, value: "98%", label: "Client Retention Rate" },
    { id: 3, value: "50+", label: "Expert IT Consultants" },
    { id: 4, value: "15+", label: "Years of Excellence" },
  ];

  return (
    <section className="py-16 bg-blue-600 border-t border-blue-500">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-blue-400/30">
          {metrics.map((metric, index) => (
            <FadeIn key={metric.id} direction="up" delay={0.1 * index}>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}