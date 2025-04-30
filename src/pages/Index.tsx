import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import ScrollReveal from '@/components/ScrollReveal';
import { Truck, Trash2, Recycle, Building, ArrowRight, Check, Phone, Mail } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

  const whyChooseUs = [
    "קובעים שעה מראש ומגיעים בטווח השעות שנקבעו ללא איחורים",
    "שירות מקצועי ואמין",
    "מחירים נוחים, החל מ700 ש\"ח",
    "השירות יסופק בכל הערים היישובים מנתניה ועד יבנה"
  ];

  const mainServices = [
    "פינוי פסולת תעשייתית וביתית",
    "משאית מנוף לגזם, לפסולת תעשייה, ופסולת מעורבת",
    "שרוולים ושינוע ציוד מכני כגון בובקטים ועוד ציוד הנדסי זעיר"
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
          backgroundImage: "url('/lovable-uploads/a311ffbb-c09b-41a1-9b3d-701df176447e.png')",
          backgroundAttachment: isMobile ? "scroll" : "fixed" 
        }}
      >
        {/* Contact information at top left with clickable links */}
        <div className="absolute top-4 left-4 md:left-8 text-white z-20">
          <div className="flex flex-col items-start space-y-2">
            <a href="tel:021234567" className="flex items-center hover:text-warm-orange transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm md:text-base">טלפון: 021234567</span>
            </a>
            <a href="mailto:info@alistipper.co.il" className="flex items-center hover:text-warm-orange transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm md:text-base">אימייל: info@alistipper.co.il</span>
            </a>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-dark-slate bg-opacity-50"></div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">אליס מכולות</h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto animate-fade-in mb-6">פתרונות מתקדמים לפינוי פסולת</p>
          
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
              שירות מקצועי, אחראי ומהיר, אליס פינוי פסולת בע"מ לשירותכם! החברה מתמחה בפינוי פסולת קבלנית ופסולת בנייה, פינוי תכולות מבתים, משרדים ומפעלים ומעמידים לרשות לקוחותינו את מערך השירותים המתקדם בתחום בהתבסס על הציוד איכותי והחדשני ביותר בשוק. כחברה מהמובילות את התחום בישראל, אנו מחזיקים באישורים וברישיונות הרלוונטיים ומפנים את הפסולת לאתרי הטמנה מסודרים כנדרש. בנוסף אנו מספקים משאית מנוף לגזם, לפסולת תעשייה, ופסולת מעורבת. זאת ועוד, אנו מציעים שרוולים להשכרה ואף מספקים שנוע ציוד מכני כגון בובקטים ועוד ציוד הנדסי זעיר, בנוסף אנו עובדים עם מוסדות בטחוניים
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 md:py-16 bg-light-grey">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-dark-slate">למה לבחור בנו</h2>
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

      {/* Service Areas Section */}
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
