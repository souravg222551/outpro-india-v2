import FadeIn from "./FadeIn";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Outpro.India transformed our entire infrastructure. Their expertise and dedication exceeded our expectations. The results speak for themselves.",
      name: "Sarah Johnson",
      role: "CTO, RetailCorp",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Working with Outpro.India was a game-changer for our organization. Their data analytics solution has revolutionized how we operate.",
      name: "Michael Chen",
      role: "CEO, MediTech Solutions",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The mobile banking app they developed has become an integral part of our customer experience. Outstanding quality and support.",
      name: "Emily Rodriguez",
      role: "VP Technology, FinanceFirst Bank",
      img: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const StarRating = () => (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-24 px-8 lg:px-24 bg-blue-600 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <FadeIn direction="up">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Client Testimonials</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Hear what our clients have to say about working with us.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} direction="up" delay={0.2 * index}>
              <div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col justify-between h-full">
                <div>
                  <StarRating />
                  <p className="text-slate-600 text-base leading-relaxed italic mb-8">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                  />
                  <div>
                    <div className="text-slate-900 font-bold text-sm">{testimonial.name}</div>
                    <div className="text-slate-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}