import React from 'react';
import { CheckIcon } from './Icons'; // UPDATED: Import from centralized Icons file

// Pricing data remains unchanged
const pricingData = [
  {
    category: "Starter & Small Business",
    description: "Perfect for getting your ideas online with a professional look.",
    plans: [
      { name: "The Digital Start", price: "₹8k - 15k", bestFor: "Individuals or new startups needing a basic, professional online presence.", features: [ "Up to 5 Static Pages", "Modern & Clean Design", "Fully Mobile Responsive", "Contact Form & Social Links", "Basic On-Page SEO", ], timeline: "Timeline: 5-7 Business Days", cta: "Select Plan", highlight: false },
      { name: "Business Foundation (CMS)", price: "₹18k - 30k", bestFor: "Small businesses that need to manage and update their own content.", features: [ "All 'Digital Start' features", "WordPress CMS Integration", "Up to 10 Dynamic Pages", "Blog / News Section", "1 Hour of CMS Training", ], timeline: "Timeline: 10-15 Business Days", cta: "Select Plan", highlight: false },
    ],
  },
  {
    category: "Professional & Growth",
    description: "For established businesses ready to scale and capture more leads.",
    plans: [
      { name: "Business Growth Pro", price: "₹35k - 55k", bestFor: "Businesses wanting a unique design and lead generation features.", features: [ "All 'Business Foundation' features", "Up to 15 Pages", "Custom UI/UX Design Elements", "Advanced Contact Forms", "Google Analytics Setup", ], timeline: "Timeline: 15-20 Business Days", cta: "Choose This One!", highlight: true },
      { name: "The Corporate Hub", price: "₹60k - 80k", bestFor: "Medium-sized companies needing a comprehensive, high-end website.", features: [ "All 'Growth Pro' features", "Up to 25 Pages", "Full Custom UI/UX Design", "Career/Jobs Section", "Multi-language Support", ], timeline: "Timeline: 25-30 Business Days", cta: "Select Plan", highlight: false },
    ],
  },
  // ... other categories are unchanged ...
];

const PricingCard = ({ plan }) => {
    const cardClasses = `relative bg-white  rounded-2xl shadow-lg p-8 flex flex-col transition-all duration-300 ease-in-out ${plan.highlight ? 'border-4 border-amber-500 scale-105 shadow-2xl' : 'border border-slate-200 hover:shadow-xl hover:-translate-y-2'}`;
    const buttonClasses = `w-full text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${plan.highlight ? 'bg-amber-500 hover:bg-amber-600' : 'bg-slate-800 hover:bg-amber-500'}`;

    return (
        <div className={cardClasses}>
            {plan.highlight && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                </div>
            )}
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">{plan.name}</h3>
            {/* IMPROVEMENT: Replaced fixed height with min-height for flexibility */}
            <p className="text-slate-500 text-center text-sm mb-6 min-h-[3rem]">{plan.bestFor}</p>
            <div className="my-6 text-center">
                <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
            </div>
            <ul className="space-y-4 text-slate-600 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon />
                        <span className="ml-3">{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-auto pt-6">
                <p className="text-sm text-slate-400 text-center mb-4">{plan.timeline}</p>
                <button className={buttonClasses}>{plan.cta}</button>
            </div>
        </div>
    );
};

// RENAMED & RESTRUCTURED: The component is now a section, not a full page.
export default function PricingSection() {
  return (
    <section className=''>
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Affordable & Transparent Pricing</h2>
            <p className="text-md text-slate-500 mt-2 max-w-2xl mx-auto">Find the perfect package to elevate your business, or contact us for a custom quote on your project.</p>
        </div>

        {pricingData.map((category, index) => (
        <div key={index} className="mb-16">
            <h3 className="text-2xl font-bold mb-2">{category.category}</h3>
            <p className="text-slate-500 mb-8">{category.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-8 items-stretch">
            {category.plans.map((plan, planIndex) => (
                <PricingCard key={planIndex} plan={plan} />
            ))}
            </div>
        </div>
        ))}

        <div className="text-center mt-16 p-8 bg-slate-100 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-800">Ready to Get Started?</h3>
            <p className="text-slate-600 mt-2 mb-6">Let's build something amazing together.</p>
            <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105">
                Request a Free Consultation
            </button>
        </div>
    </section>
  );
}