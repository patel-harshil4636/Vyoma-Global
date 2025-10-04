import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Raj Sharma",
      company: "TechStart Inc",
      quote: "Vyoma delivered our e-commerce platform in 3 weeks - 40% faster than competitors!",
      demo: true
    },
    {
      name: "Priya Patel",
      company: "Wellness Co",
      quote: "The AI features actually work - our conversion rate doubled post-launch.",
      demo: true
    },
    {
      name: "Amit Kumar",
      company: "SaaS Pro",
      quote: "Fixed pricing meant no surprises. Highly recommend for budget-conscious founders.",
      demo: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-deepBlue text-center mb-12 font-headings">
          What Our Clients Say
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-custom"
            >
              <p className="text-deepBlue text-lg mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-deepBlue">{testimonials[currentTestimonial].name}</p>
                  <p className="text-deepBlue/70 text-sm">{testimonials[currentTestimonial].company}</p>
                </div>
                <span className="bg-gold text-deepBlue px-3 py-1 rounded-full text-sm">
                  Demo
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-deepBlue' : 'bg-deepBlue/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;