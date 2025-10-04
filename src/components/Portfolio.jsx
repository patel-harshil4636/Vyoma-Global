import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import { Link } from 'react-router-dom';
// Animation variants
const fadeInFromBottom = {
  initial: { 
    opacity: 0, 
    y: 60 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Portfolio Section Component
const PortfolioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce with smooth animations and intuitive UX",
      iframeSrc: "https://coztcafe.netlify.app/",
      delay: 0,
      tech: ["React", "Tailwind", "Framer Motion"],
      icon: "🛒"
    },
    {
      id: 2,
      title: "Creative Portfolio",
      description: "Interactive design with 3D elements and creative layout",
      iframeSrc: "https://luxuriousrealstate.netlify.app/",
      delay: 0.2,
      tech: ["Three.js", "GSAP", "React"],
      icon: "🎨"
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Mobile-first app with real-time features and modern UI",
      iframeSrc: "https://codesandbox.io/embed/new?codemirror=1&highlights=6,7,8,9,10&view=preview",
      delay: 0.4,
      tech: ["React Native", "Firebase", "Node.js"],
      icon: "📱"
    }
  ];

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="lg:col-span-2"
    >
      <motion.h3 
        variants={fadeInFromBottom}
        className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Featured Projects
      </motion.h3>
      
      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={floatAnimation}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            style={{ animationDelay: `${index * 1}s` }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden border border-slate-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <iframe
                src={project.iframeSrc}
                className="w-full h-64 rounded-2xl"
                title={`Project ${project.title}`}
                loading="lazy"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <Link to={project.iframeSrc} >
                <motion.button
                  className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 hover:bg-amber-400"
                  whileHover={{ scale: 1.05 }}
                  
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Project Details */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeInFromBottom}
            className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-400/30 transition-all duration-300 group"
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="text-3xl mb-4">
              {project.icon}
            </div>
            <h4 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h4>
            <p className="text-slate-300 text-sm mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "Affordable & delivered beyond expectations. The attention to detail was impressive!",
      rating: 5,
      numberBg: "bg-amber-400",
      delay: 0
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "Fantastic results that exceeded our KPIs. The design converted visitors into customers.",
      rating: 5,
      numberBg: "bg-amber-400",
      delay: 0.1
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      text: "Smooth process from start to finish. Communication was excellent throughout the project.",
      rating: 4,
      numberBg: "bg-slate-600",
      delay: 0.2
    },
    {
      id: 4,
      name: "Alex Turner",
      text: "Great support even after project completion. Highly recommend for any web development needs.",
      rating: 4,
      numberBg: "bg-slate-600",
      delay: 0.3
    }
  ];

  const stats = [
    { number: "24+", label: "Projects", gradient: "from-blue-500 to-purple-600" },
    { number: "18", label: "Happy Clients", gradient: "from-amber-500 to-orange-600" },
    { number: "3", label: "Years Exp", gradient: "from-green-500 to-teal-600" },
    { number: "100%", label: "Satisfaction", gradient: "from-pink-500 to-rose-600" }
  ];

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="initial"
      animate={inView ? "animate" : "initial"}
    >
      <motion.h3 
        variants={fadeInFromBottom}
        className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"
      >
        Client Feedback
      </motion.h3>
      
      {/* Testimonials */}
      <div className="space-y-6 mb-8">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={fadeInFromBottom}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ delay: testimonial.delay }}
            className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-amber-400/30 transition-all duration-300 group cursor-pointer"
            whileHover={{ 
              x: 8,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center mb-4">
              <motion.div 
                className={`z-10 flex items-center justify-center w-12 h-12 ${testimonial.numberBg} rounded-full text-slate-900 font-bold text-lg group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {testimonial.id}
              </motion.div>
              <div className="flex-1 border-t-2 border-dashed border-slate-600 -ml-4 pl-8 py-2 font-semibold text-lg group-hover:text-amber-400 transition-colors">
                {testimonial.name}
              </div>
            </div>
            <motion.p 
              className="text-slate-300 transition-colors duration-300 group-hover:text-white leading-relaxed"
              whileHover={{ scale: 1.02 }}
            >
              {testimonial.text}
            </motion.p>
            <div className="flex mt-3">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className={`text-lg ${i < testimonial.rating ? 'text-amber-400' : 'text-slate-600'}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: testimonial.delay + i * 0.1 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-2 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeInFromBottom}
            className={`bg-gradient-to-br ${stat.gradient} p-4 rounded-2xl text-center shadow-xl cursor-pointer`}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="text-2xl font-bold mb-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {stat.number}
            </motion.div>
            <div className="text-sm opacity-90">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// Main Component
const ModernPortfolio = () => {
  return (
    <div id='portflio' className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <section className="max-w-7xl w-full grid lg:grid-cols-3 gap-12">
        <PortfolioSection />
        <TestimonialsSection />
      </section>
    </div>
  );
};

export default ModernPortfolio;