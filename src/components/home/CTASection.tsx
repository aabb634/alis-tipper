
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-soft-blue text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">מוכנים להזמין מכולה לפינוי פסולת?</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-lg max-w-3xl mx-auto mb-6 md:mb-8">
            צרו קשר עוד היום לקבלת הצעת מחיר לשירותי פינוי פסולת בניין, תעשייתית או ביתית באזור המרכז
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
        <Link 
          to="/contact" 
          className="inline-block bg-white text-soft-blue px-6 md:px-8 py-3 rounded-lg font-bold text-lg hover:bg-warm-orange hover:text-white transition-colors duration-300 shadow-lg"
        >
          הזמנת מכולה לפינוי פסולת
        </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
