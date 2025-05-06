
import React, { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import ScrollReveal from '@/components/ScrollReveal';

interface HeroSectionProps {
  mainServices: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ mainServices }) => {
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && !isMobile) {
        const scrollPosition = window.scrollY;
        const translateY = scrollPosition * 0.5;
        heroRef.current.style.backgroundPositionY = `${translateY}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <div 
      ref={heroRef}
      className={`${isMobile ? 'h-[40vh]' : 'h-[60vh]'} bg-cover bg-center flex items-center justify-center relative`}
      style={{ 
        backgroundImage: "url('/alis-tipper/alis-tipper/a311ffbb-c09b-41a1-9b3d-701df176447e.png')",
        backgroundAttachment: isMobile ? "scroll" : "fixed" 
      }}
    >
      {/* Remove the phone information section */}
      
      <div className="absolute inset-0 bg-dark-slate bg-opacity-50"></div>
      <div className={`container mx-auto px-6 z-10 text-center ${isMobile ? 'pt-16' : ''}`}>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">אליס מכולות - פינוי פסולת מקצועי</h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto animate-fade-in mb-6">פתרונות מתקדמים לפינוי פסולת בניין ותעשייתית באזור המרכז</p>
        
        {/* Checkmarked list under main title */}
        <div className="max-w-xl mx-auto">
          <ul className="space-y-2">
            {mainServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <li className="flex items-center justify-center md:justify-start">
                  <div className="shrink-0 bg-green-500 bg-opacity-20 p-1 rounded-full mr-2">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white text-sm md:text-base">{service}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
