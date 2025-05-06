
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Check } from 'lucide-react';

interface WhyChooseUsSectionProps {
  whyChooseUs: string[];
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ whyChooseUs }) => {
  return (
    <section className="py-8 md:py-16 bg-light-grey">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-dark-slate">למה לבחור בשירותי פינוי הפסולת שלנו</h2>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="shrink-0 bg-soft-blue bg-opacity-20 p-1.5 rounded-full mr-3">
                    <Check className="h-5 w-5 text-soft-blue" />
                  </div>
                  <span className="text-dark-slate">{item}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
