import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      icon: "📞",
      title: "Discovery Call",
      duration: "1-2 days",
      description: "Understand your goals"
    },
    {
      icon: "📋",
      title: "Planning",
      duration: "3-5 days",
      description: "Detailed project roadmap"
    },
    {
      icon: "⚡",
      title: "Development",
      duration: "2-4 weeks",
      description: "Build with weekly updates"
    },
    {
      icon: "🎯",
      title: "Launch",
      duration: "1-2 days",
      description: "Go live & support"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-deepBlue text-center mb-12 font-headings">
          Our Simple Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="text-center"
            >
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="font-bold text-deepBlue text-lg mb-2">{step.title}</h3>
              <p className="text-gold font-semibold mb-2">{step.duration}</p>
              <p className="text-deepBlue/70 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;