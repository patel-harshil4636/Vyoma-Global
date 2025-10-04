import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹15,000",
      description: "Perfect for new businesses",
      features: ["3-5 Pages", "Basic SEO", "Contact Form", "1 Month Support"],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Growth",
      price: "₹45,000",
      description: "Ideal for scaling businesses",
      features: ["5-10 Pages", "Advanced SEO", "AI Chatbot", "E-Commerce Ready", "3 Months Support"],
      cta: "Choose Growth",
      highlighted: true
    },
    {
      name: "Premium",
      price: "Custom",
      description: "Enterprise-grade solutions",
      features: ["Unlimited Pages", "AI Personalization", "Custom Features", "Priority Support", "Dedicated Manager"],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-deepBlue text-center mb-12 font-headings">
          Simple, Transparent Pricing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-lightGray p-8 rounded-2xl ${
                plan.highlighted ? 'ring-2 ring-gold relative' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-deepBlue px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-deepBlue mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-gold mb-4">{plan.price}</div>
              <p className="text-deepBlue/70 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-gold mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-full font-semibold hover:shadow-lg transition-all ${
                plan.highlighted 
                  ? 'bg-gold text-deepBlue' 
                  : 'bg-deepBlue text-white'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;