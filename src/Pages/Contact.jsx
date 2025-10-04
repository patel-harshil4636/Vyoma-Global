import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon } from '../components/Icons';

// This is a little block for our contact info. Reusable!
const InfoCard = ({ icon, title, children }) => (
    <motion.div 
        className="bg-white p-6 rounded-2xl shadow-lg flex items-start space-x-4"
        whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        <div className="flex-shrink-0 bg-amber-100 text-amber-500 rounded-full p-3">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-slate-800">{title}</h3>
            <div className="text-slate-500 mt-1">{children}</div>
        </div>
    </motion.div>
);

// This is a block for the form fields. Also reusable!
const FormInput = ({ id, label, type = "text", placeholder }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-semibold text-slate-600 mb-2">{label}</label>
        <input 
            type={type} 
            id={id} 
            name={id}
            placeholder={placeholder}
            className="w-full px-4 py-3 bg-slate-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition"
        />
    </div>
);

export default function ContactPage() {
    // This little guy remembers if the message was sent.
    const [isSubmitted, setIsSubmitted] = useState(false);

    // When the big button is clicked, this runs.
    const handleSubmit = (e) => {
        e.preventDefault(); // This stops the page from reloading.
        setIsSubmitted(true);
        // In a real app, we'd send the form data to a server here!
    };

    return (
        <div className="bg-slate-50 font-sans">
            <div className="container mx-auto px-4 py-16 md:py-24">

                {/* The big, friendly title! */}
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A233E] mb-4 tracking-tight">Get In Touch</h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        We're here to help and answer any question you might have. We look forward to hearing from you!
                    </p>
                </motion.div>

                {/* The cool info blocks and the form are side-by-side */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left side: The info blocks */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                        className="space-y-8"
                    >
                        
                        <InfoCard icon={<PhoneIcon />} title="Call Us">
                            <p>For sales inquiries, please call:</p>
                            <a href="tel:+919409910782" className="font-semibold text-amber-600 hover:underline">+91 94099 10782</a>
                        </InfoCard>
                        <InfoCard icon={<MailIcon />} title="Chat With Us">
                             <p>Drop us an email anytime:</p>
                            <a href="mailto:vyomaglobal01@gmail.com" className="font-semibold text-amber-600 hover:underline">vyomaglobal01@gmail.com</a>
                        </InfoCard>
                    </motion.div>
                    
                    {/* Right side: The easy-peasy form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                        className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl"
                    >
                        {isSubmitted ? (
                            <div className="text-center py-10">
                                <h2 className="text-2xl font-bold text-green-500 mb-2">Thank You!</h2>
                                <p className="text-slate-600">Your message has been sent successfully. We'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
                                <FormInput id="name" label="Full Name" placeholder="John Carter" />
                                <FormInput id="email" label="Email Address" type="email" placeholder="you@example.com" />
                                <FormInput id="subject" label="Subject" placeholder="Regarding Web Development" />
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-600 mb-2">Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        rows="5"
                                        placeholder="Tell us about your project..."
                                        className="w-full px-4 py-3 bg-slate-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition"
                                    ></textarea>
                                </div>
                                <div>
                                    {/* The BIG, awesome button! */}
                                    <button 
                                        type="submit"
                                        className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* The fun map section! */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
                    className="mt-24"
                >
                    <h2 className="text-3xl font-bold text-center text-[#1A233E] mb-8">Find Us Here</h2>
                    <div className="rounded-2xl overflow-hidden shadow-2xl aspect-w-16 aspect-h-9">
                         {/* This is a simple Google Maps embed. Super easy! */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116631.95637286302!2d72.32934244304855!3d23.59397194639992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c4226f9a42b23%3A0x921803730722974b!2sMehsana%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1678886442658!5m2!1sen!2sus" 
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
