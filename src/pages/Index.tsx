
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import ScrollReveal from '@/components/ScrollReveal';
import { Truck, Trash2, Recycle, Building, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  const serviceAreas = [
    {
      icon: <Building />,
      title: "פינוי פסולת תעשייתית",
      description: "פינוי פסולת קבלנית ופסולת בנייה"
    },
    {
      icon: <Trash2 />,
      title: "פינוי פסולת ביתית",
      description: "פינוי תכולות מבתים, משרדים ומפעלים"
    },
    {
      icon: <Truck />,
      title: "משאית מנוף",
      description: "אנו מספקים משאית מנוף לגזם, לפסולת תעשייה, ופסולת מעורבת"
    },
    {
      icon: <Recycle />,
      title: "שרוולים ושינוע ציוד",
      description: "אנו מציעים שרוולים להשכרה ואף מספקים שנוע ציוד מכני כגון בובקטים ועוד ציוד הנדסי זעיר"
    }
  ];

  // Function to handle the parallax effect
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
    <Layout>
      {/* Hero Section with Parallax Effect */}
      <div 
        ref={heroRef}
        className={`${isMobile ? 'h-[40vh]' : 'h-[60vh]'} bg-cover bg-center flex items-center justify-center relative`}
        style={{ 
          backgroundImage: "url('/lovable-uploads/f91c8b96-1bf8-4b92-8e22-618f33f78eb9.jpg')",
          backgroundAttachment: isMobile ? "scroll" : "fixed" 
        }}
      >
        <div className="absolute inset-0 bg-dark-slate bg-opacity-50"></div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">אליס מכולות</h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto animate-fade-in">פתרונות מתקדמים לפינוי פסולת</p>
        </div>
      </div>

      {/* Intro Section with new headline */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-dark-slate">ברוכים הבאים לאליס מכולות</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="text-base md:text-lg text-center max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed text-dark-slate">
              <p className="font-bold mb-4">פתרונות מתקדמים לפינוי פסולת, אנו מספקים:</p>
              <ul className="space-y-2">
                <li>פינוי פסולת תעשייתית וביתית, משאית מנוף לגזם, פסולת תעשייה ופסולת מעורבת</li>
                <li>שרוולים ושינוע ציוד- אנו מציעים שרוולים להשכרה ואף מספקים שנוע ציוד מכני</li>
              </ul>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-base md:text-lg text-center max-w-4xl mx-auto leading-relaxed text-dark-slate">
               כחברה מהמובילות את התחום בישראל, אנו מחזיקים באישורים וברישיונות הרלוונטיים ומפנים את הפסולת לאתרי הטמנה מסודרים כנדרש. בנוסף אנו מספקים משאית מנוף לגזם, לפסולת תעשייה, ופסולת מעורבת. זאת ועוד, אנו מציעים שרוולים להשכרה ואף מספקים שנוע ציוד מכני כגון בובקטים ועוד ציוד הנדסי זעיר, בנוסף אנו עובדים עם מוסדות בטחוניים
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-8 md:py-16 bg-light-grey">
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

      {/* Final CTA Section */}
      <section className="py-10 md:py-16 bg-soft-blue text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">מוכנים לשדרג את פתרונות פינוי הפסולת שלכם?</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-lg max-w-3xl mx-auto mb-6 md:mb-8">
              נשמח לספק לכם שירות ברמה גבוהה ואדיבה שטרם הכרתם
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <a 
              href="/contact" 
              className="inline-block bg-white text-soft-blue px-6 md:px-8 py-3 rounded-lg font-bold text-lg hover:bg-warm-orange hover:text-white transition-colors duration-300 shadow-lg"
            >
              צרו קשר עוד היום
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
