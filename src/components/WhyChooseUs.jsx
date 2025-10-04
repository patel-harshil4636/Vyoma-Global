import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Fast Delivery",
      description: "2-4 weeks average project timeline"
    },
    {
      title: "AI Integrated",
      description: "Smart features included standard"
    },
    {
      title: "Fixed Pricing",
      description: "No hidden costs or surprises"
    },
    {
      title: "Ongoing Support",
      description: "We're here after launch too"
    }
  ];

  return (
    <section className="py-16 bg-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-deepBlue text-center mb-12 font-headings">
          Why Choose Vyoma Global
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl text-center group hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-deepBlue text-lg mb-3">{feature.title}</h3>
              <p className="text-deepBlue/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;