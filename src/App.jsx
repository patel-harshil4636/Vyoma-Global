import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PlayfulPricingComponent from './components/PricingContact';
import ContactPage from './Pages/Contact';
import {gsap} from 'gsap'
import ModernPortfolio from './components/Portfolio';
import Lenis from 'lenis'
// Helper components for icons to keep the main component clean
const IconWrapper = ({ children }) => (
  <div className="bg-white rounded-full p-3 shadow-md mb-4">{children}</div>
);
 
const CertifiedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 h-6 w-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path>
  </svg>
);

const ClientCenterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 h-6 w-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const ResearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 h-6 w-6">
        <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1V14c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h1.8c.4 0 .8.2 1.1.5.3.3.5.7.5 1.1V22l5.5-2.8c.3-.2.5-.5.5-.9V3.5c0-.4-.2-.8-.5-1.1-.3-.3-.7-.5-1.1-.5z"></path><path d="M4 6h.01"></path><path d="M4 12h.01"></path><path d="M4 18h.01"></path>
    </svg>
);

const PricingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 h-5 w-5">
        <circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path>
    </svg>
);

const MobileSupportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 h-5 w-5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
);

const AiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 h-5 w-5">
        <path d="M12 8V4H8"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M14 2v2"></path><path d="M14 20v2"></path>
    </svg>
);

const CheckIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const SocialIcon = ({ href, children }) => (
    <a href={href} className="text-slate-400 hover:text-amber-400 transition-colors">
        {children}
    </a>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);


// Main App Component
export default function App() {

  const globeRef = useRef(null);
  const heroTextRef = useRef(null);

  // Lenis and GSAP setup
  useEffect(() => {
    let tl; // timeline instance
    let globeTween; // tween instance

    // Function to load a script dynamically
    
    // Load scripts and then initialize animations
    
      // Lenis smooth scrolling initialization
      const lenis = new Lenis({
        lerp: 10,
        duration: 1.2,
        // easing: (t) => Math.min(2, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
        smoothWheel:true
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // GSAP animations
      const globe = globeRef.current;
      const heroText = heroTextRef.current.children;

      // Ensure elements exist before animating
      if (globe && heroText.length > 0) {
        // Globe continuous rotation
        globeTween = gsap.to(globe, {
          rotation: 360,
          duration: 30,
          repeat: -1,
          ease: "none",
        });

        // Hero text reveal animation
        tl = gsap.timeline();
        tl.fromTo(heroText, 
          {
            y: 0,
            opacity: 0,
            
          },
          {
            y: 50,
            opacity: 1,
            stagger: 0.2,
            duration: 0.5,
            ease: "power3.out"
        });
      }
    
    // Cleanup function
    return () => {
      if (tl) tl.kill();
      if (globeTween) globeTween.kill();
      // Scripts will remain in the document, which is generally fine for this use case.
    };
  }, []);

  // Framer Motion variant for scroll animations
  const fadeInFromBottom = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeInOut" },
    viewport: { once: true },
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-700">
      {/* Removed max-w-7xl mx-auto p-4 md:p-8 container */}
      <div className="bg-white rounded-none shadow-2xl shadow-slate-200 overflow-hidden">
        
        {/* Hero Section */}
        <header className="relative bg-[#1A233E] text-white p-6 md:p-8 lg:p-12 rounded-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_20%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_15%)] opacity-50"></div>
          
          <nav className="relative z-10 flex justify-between items-center mb-16 md:mb-24">
            <div className="text-2xl font-bold flex  items-center"><img src=".\Vyoma Global.png" className='aspect-video w-1/6 object-cover object-top rounded-md ' alt="" /> <span className="text-amber-400  m-0.5"><sup>Vyoma</sup>|<sub>Global</sub></span></div>
            <div className="hidden lg:flex items-center space-x-4 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <a href="#" className="hover:text-amber-400 transition-colors px-3 py-1">About</a>
              <a href="#" className="hover:text-amber-400 transition-colors px-3 py-1">Services</a>
              <a href="#portflio" className="hover:text-amber-400 transition-colors px-3 py-1">Portfolio</a>
            </div>
            <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-6 rounded-full transition-transform hover:scale-105">
              Get Started
            </button>
          </nav>

          <div className="relative z-10 grid md:grid-cols-2 items-center gap-8">
            <div ref={heroTextRef} className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                We build AI powered websites & apps that are affordable and modern.
              </h1>
              <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105">
                Request a Demo
              </button>
            </div>
            <div className="relative h-64 md:h-96 flex items-center justify-center">
                <div ref={globeRef} className="absolute w-full h-full">
                    {/* Wireframe sphere */}
                    <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-4 border-2 border-blue-400/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
                    <div className="absolute inset-8 border-t-2 border-blue-400/50 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute inset-8 border-l-2 border-blue-400/50 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>
                    
                    {/* Low-poly gold object */}
                    <div className="absolute inset-1/4 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full opacity-80" style={{filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.5))'}}>
                          <defs>
                              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{stopColor: '#FBBF24', stopOpacity: 1}} />
                              <stop offset="100%" style={{stopColor: '#F59E0B', stopOpacity: 1}} />
                              </linearGradient>
                          </defs>
                          <path d="M50 0 L100 25 L85 75 L50 100 L15 75 L0 25 Z" fill="url(#goldGradient)" />
                          <path d="M50 0 L15 25 L50 40 Z" fill="#FDE68A" opacity="0.7"/>
                          <path d="M50 0 L85 25 L50 40 Z" fill="#FCD34D" opacity="0.7"/>
                          <path d="M100 25 L85 75 L50 40 Z" fill="#FBBF24" opacity="0.7"/>
                          <path d="M15 75 L0 25 L50 40 Z" fill="#FBBF24" opacity="0.7"/>
                          <path d="M50 100 L15 75 L50 60 Z" fill="#FDE68A" opacity="0.7"/>
                          <path d="M50 100 L85 75 L50 60 Z" fill="#FCD34D" opacity="0.7"/>
                        </svg>
                    </div>
                </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 md:p-8 lg:p-12 grid gap-12 md:gap-16">
          
          {/* About, Services, Why Us Section */}
          <section className="grid lg:grid-cols-3 gap-8">
            <motion.div {...fadeInFromBottom} className="text-center flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="flex flex-col items-center p-2"><IconWrapper><CertifiedIcon /></IconWrapper><span className="text-xs">Certified AI Partner</span></div>
                    <div className="flex flex-col items-center p-2"><IconWrapper><ClientCenterIcon /></IconWrapper><span className="text-xs">Client Center</span></div>
                    <div className="flex flex-col items-center p-2"><IconWrapper><ResearchIcon /></IconWrapper><span className="text-xs">Research Approach</span></div>
                </div>
            </motion.div>
            
            <motion.div {...fadeInFromBottom} className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-center lg:text-left">Services</h3>
              <div className="grid md:grid-cols-3 gap-4 p-4 bg-slate-100 rounded-xl">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <h4 className="font-semibold text-sm mb-2">Web Development</h4>
                    <p className="text-xs text-slate-500">Modern, responsive websites.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border-2 border-amber-400">
                    <h4 className="font-semibold text-sm mb-2">Mobile App Dev</h4>
                    <p className="text-xs text-slate-500">iOS and Android solutions.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <h4 className="font-semibold text-sm mb-2">Cloud Strategy</h4>
                    <p className="text-xs text-slate-500">Scalable cloud infrastructure.</p>
                  </div>
              </div>
            </motion.div>

            <motion.div {...fadeInFromBottom} className="lg:col-span-3">
               <h3 className="text-xl font-bold mb-4 text-center">Why Choose Us</h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="flex items-center space-x-2 bg-slate-100 p-3 rounded-lg"><PricingIcon /> <span className="text-sm">Affordable Pricing</span></div>
                  <div className="flex items-center space-x-2 bg-slate-100 p-3 rounded-lg"><MobileSupportIcon /> <span className="text-sm">Mobile Support</span></div>
                  <div className="flex items-center space-x-2 bg-slate-100 p-3 rounded-lg"><AiIcon /> <span className="text-sm">Cutting-Edge AI</span></div>
                  <div className="flex items-center space-x-2 bg-slate-100 p-3 rounded-lg"><ClientCenterIcon /> <span className="text-sm">Client Focused</span></div>
               </div>
            </motion.div>
          </section>
          
          <hr className="border-slate-200" />

          {/* Portfolio & Testimonials Section */}
 
          <ModernPortfolio></ModernPortfolio>


          <hr className="border-slate-200" />

          {/* Pricing & Contact Section */}
          <PlayfulPricingComponent></PlayfulPricingComponent>



        <ContactPage />

        </main>
      </div>
    </div>
  );
}