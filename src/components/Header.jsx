import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Header animation on load
    const tl = gsap.timeline();
    tl.fromTo(logoRef.current, 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(navRef.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.4"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" },
      "-=0.3"
    );

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.header 
      ref={headerRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-deepBlue/10 py-2' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circ.out" }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Premium Logo */}
        <motion.div
          ref={logoRef}
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-gold to-deepBlue rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg font-headings">V</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-deepBlue font-headings tracking-tight">
              Vyoma Global
            </h1>
            <p className="text-xs text-deepBlue/60 font-medium">AI Solutions</p>
          </div>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative text-deepBlue font-medium px-3 py-2 group overflow-hidden"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative z-10">{item.name}</span>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "circOut" }}
              />
              <div className="absolute inset-0 bg-gold/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.button
          ref={ctaRef}
          className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-gold to-yellow-400 text-deepBlue px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(245, 183, 0, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Book Free Call</span>
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "circInOut" }}
          />
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden flex flex-col space-y-1 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-deepBlue block"
            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-deepBlue block"
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-deepBlue block"
            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-deepBlue/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-deepBlue text-lg font-medium py-3 px-4 rounded-xl hover:bg-deepBlue/5 transition-colors"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                className="w-full bg-gradient-to-r from-gold to-yellow-400 text-deepBlue py-4 rounded-xl font-semibold mt-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Call
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;