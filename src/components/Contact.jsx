import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    contact: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thanks! We\'ll contact you within 24 hours.');
  };

  return (
    <section id="contact" className="py-16 bg-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-deepBlue text-center mb-12 font-headings">
          Start Your Project Today
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-custom">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-deepBlue font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-deepBlue/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="business" className="block text-deepBlue font-semibold mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-deepBlue/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact" className="block text-deepBlue font-semibold mb-2">
                Email or Phone *
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-deepBlue/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-deepBlue font-semibold mb-2">
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-deepBlue/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="">Select Budget Range</option>
                <option value="Under ₹50,000">Under ₹50,000</option>
                <option value="₹50,000 - ₹2,00,000">₹50,000 - ₹2,00,000</option>
                <option value="Over ₹2,00,000">Over ₹2,00,000</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-deepBlue font-semibold mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-deepBlue/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-deepBlue py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;