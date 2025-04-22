import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mukesh Ambani",
      role: "Mumbai, India",
      content:
        "The glass railings from Imperio have completely transformed our balcony. The installation was quick and professional, and the quality is outstanding.",
      rating: 5,
    },
    {
      name: "Rakesh Jhunjhunwala",
      role: "Mumbai, India",
      content:
        "I've recommended Imperio Railing Systems to several clients, and they've never disappointed. Their attention to detail and customer service is exceptional.",
      rating: 5,
    },
    {
      name: "Salman Khan",
      role: "Mumbai, India",
      content:
        "We've used Imperio for multiple projects. Their railings add significant value to our properties, and their team is always reliable and professional.",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-gray-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-none">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-500"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-6 italic text-black">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-black">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
