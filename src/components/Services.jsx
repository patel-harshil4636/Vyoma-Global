import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered card animation
      gsap.fromTo(cardsRef.current,
        {
          y: 100,
          opacity: 0,
          rotationY: 15
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover effects
      cardsRef.current.forEach(card => {
        gsap.to(card, {
          y: -10,
          duration: 0.3,
          paused: true,
          ease: "power2.out"
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: "🌐",
      title: "AI Business Websites",
      benefit: "Convert visitors into customers automatically with intelligent design",
      bestFor: "Startups & Small Businesses",
      features: ["AI Chat Integration", "Smart Analytics", "Auto-optimization"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      benefit: "Native iOS & Android experiences that users love",
      bestFor: "Growing Brands",
      features: ["Cross-platform", "Push Notifications", "Offline Support"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      benefit: "Seamless online shopping experiences that drive sales",
      bestFor: "Product Businesses",
      features: ["Payment Integration", "Inventory Management", "AI Recommendations"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "🤖",
      title: "AI Automation",
      benefit: "Streamline operations with intelligent automation systems",
      bestFor: "Efficiency-Focused",
      features: ["Workflow Automation", "Data Processing", "Smart Bots"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "🚀",
      title: "Web App Development",
      benefit: "Custom solutions for complex business requirements",
      bestFor: "Scale-Ready Businesses",
      features: ["Real-time Features", "Scalable Architecture", "API Integration"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-deepBlue to-deepBlue/95 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-gold font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span>What We Offer</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-6 font-headings"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our{' '}
            <span className="gradient-text bg-gradient-to-r from-gold to-yellow-300">
              Services
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Comprehensive digital solutions powered by cutting-edge AI technology 
            to drive your business growth
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              ref={el => cardsRef.current[index] = el}
              className="group relative cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden h-full">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div 
                    className="text-5xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 font-headings group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-yellow-400 transition-all duration-500">
                    {service.title}
                  </h3>
                  
                  {/* Benefit */}
                  <p className="text-white/80 mb-6 leading-relaxed text-lg flex-grow">
                    {service.benefit}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-sm border border-white/20 backdrop-blur-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-semibold text-lg">
                        Best for: {service.bestFor}
                      </span>
                      <motion.div
                        className="w-8 h-8 bg-gold rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <span className="text-deepBlue font-bold">→</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-gold to-yellow-400 text-deepBlue px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-3">
              <span>Explore All Services</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;