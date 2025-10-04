import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const links = ["Home", "Services", "Portfolio", "Pricing", "Contact"];
  const social = ["LinkedIn", "Instagram", "Twitter"];

  return (
    <footer className="bg-deepBlue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="h-8 w-32 bg-white/20 rounded flex items-center justify-center text-white font-bold mb-4">
              VYOMA
            </div>
            <p className="text-white/70 max-w-md">
              Building the future of business with AI-powered web solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {social.map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="text-white/70 hover:text-gold transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50">
          © 2024 Vyoma Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;