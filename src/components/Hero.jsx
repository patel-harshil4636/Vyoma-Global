import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    // GSAP animation for continuous globe rotation
    gsap.to(globeRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <section className="min-h-screen bg-lightGray pt-20 pb-16 flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-deepBlue mb-6 font-headings">
            AI-Powered Websites That Drive Growth
          </h1>
          <p className="text-xl text-deepBlue/80 mb-8">
            Affordable, modern web solutions for ambitious founders. Get your business online in days, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gold text-deepBlue px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
              Start Your Project
            </button>
            <button className="border-2 border-deepBlue text-deepBlue px-8 py-3 rounded-full font-semibold hover:bg-deepBlue hover:text-white transition-all">
              View Portfolio
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          ref={globeRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Globe Placeholder */}
          <div className="w-full max-w-md mx-auto h-80 bg-gradient-to-br from-deepBlue to-gold rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-semibold">3D Globe Animation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;