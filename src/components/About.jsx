import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const badges = [
    { title: "Founder-Led", description: "Direct oversight for quality" },
    { title: "AI First", description: "Smart, efficient solutions" },
    { title: "On-Time Delivery", description: "We respect your timeline" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <blockquote className="text-2xl text-deepBlue mb-12 max-w-2xl mx-auto">
          "As founder Harshil Patel, I ensure every project delivers real business impact, not just code."
        </blockquote>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-lightGray p-6 rounded-2xl"
            >
              <h3 className="font-bold text-deepBlue text-lg mb-2">{badge.title}</h3>
              <p className="text-deepBlue/70">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;