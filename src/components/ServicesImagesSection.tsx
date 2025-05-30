
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const ServicesImagesSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-dark-slate">
            מכולות ומשאיות לפינוי פסולת
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/03e082e2-05a9-43ce-896a-8450882003c8.png" 
                alt="מכולות לפינוי פסולת בניין ותעשייתית"  
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4 bg-light-grey">
                <h3 className="font-bold text-lg mb-2">פינוי פסולת תעשייתית ובניין</h3>
                <p className="text-muted-grey text-sm">
                  אנו מספקים מכולות לפינוי פסולת קבלנית ופסולת בנייה בגדלים שונים לכל פרויקט בנייה
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/a47c61d1-0cd5-4583-80fd-73838b2c2afb.png" 
                alt="משאית מנוף לפינוי פסולת בניין וגזם" 
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4 bg-light-grey">
                <h3 className="font-bold text-lg mb-2">משאית מנוף לפינוי פסולת</h3>
                <p className="text-muted-grey text-sm">
                  אנו מספקים משאית מנוף לפינוי גזם, פסולת תעשייה, ופסולת בניין מכל סוג
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServicesImagesSection;
