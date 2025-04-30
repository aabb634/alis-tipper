
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  serviceAreas: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ serviceAreas }) => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-dark-slate">תחומי שירות</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {serviceAreas.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 150}
            />
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <ScrollReveal delay={600}>
            <a href="/about" className="inline-flex items-center text-soft-blue hover:text-warm-orange transition-colors duration-300 font-bold text-lg group">
              <span>למידע נוסף על השירותים שלנו</span>
              <ArrowRight className="mr-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
