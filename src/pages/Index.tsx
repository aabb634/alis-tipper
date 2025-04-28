
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import ScrollReveal from '@/components/ScrollReveal';
import { Trash2, Recycle, Factory, Building, ArrowRight } from 'lucide-react';

const Index = () => {
  const serviceAreas = [
    {
      icon: <Factory />,
      title: "פתרונות תעשייתיים",
      description: "מערכות מתקדמות לטיפול בפסולת תעשייתית וחומרים מסוכנים"
    },
    {
      icon: <Building />,
      title: "מגזר מסחרי",
      description: "פתרונות יעילים לפינוי ומחזור פסולת עבור עסקים ומשרדים"
    },
    {
      icon: <Recycle />,
      title: "מערכות מחזור",
      description: "מכונות חדשניות למיון וטיפול בחומרים ברי מחזור"
    },
    {
      icon: <Trash2 />,
      title: "פסולת ביתית",
      description: "פתרונות מותאמים למבני מגורים ופרויקטים קהילתיים"
    }
  ];

  // Function to handle the parallax effect
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const translateY = scrollPosition * 0.5;
        heroRef.current.style.backgroundPositionY = `${translateY}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section with Parallax Effect */}
      <div 
        ref={heroRef}
        className="h-[60vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80')",
          backgroundAttachment: "fixed" 
        }}
      >
        <div className="absolute inset-0 bg-dark-slate bg-opacity-50"></div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">וויסטמאַסטער</h1>
          <p className="text-xl text-white max-w-3xl mx-auto animate-fade-in">פתרונות מתקדמים לפינוי פסולת</p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8 text-center text-dark-slate">ברוכים הבאים לוויסטמאַסטער</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-lg text-center max-w-4xl mx-auto mb-8 leading-relaxed text-dark-slate">
              אנו בוויסטמאַסטער מספקים פתרונות מובילים בתחום מכונות פינוי הפסולת בישראל. עם ניסיון של למעלה מ-15 שנה, אנו מתמחים באספקת והתקנת מערכות מתקדמות לטיפול בפסולת לכל המגזרים. 
              הצוות המקצועי שלנו מחויב למצוינות, אמינות ושירות ברמה הגבוהה ביותר.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed text-dark-slate">
              אנו מאמינים בקידום פתרונות ידידותיים לסביבה ומציעים מגוון רחב של מערכות חדשניות המתוכננות לענות על הצרכים הספציפיים של לקוחותינו, תוך שמירה על הסביבה והובלת מדיניות קיימות.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-light-grey">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center text-dark-slate">תחומי שירות</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          
          <div className="text-center mt-12">
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
      <section className="py-16 bg-soft-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">מוכנים לשדרג את פתרונות פינוי הפסולת שלכם?</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              הצוות המקצועי שלנו עומד לרשותכם כדי לפתח פתרון מותאם אישית עבור העסק או הארגון שלכם. אנו מחויבים לספק שירות יוצא דופן ופתרונות ברי קיימא שיענו על הצרכים הייחודיים שלכם.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <a 
              href="/contact" 
              className="inline-block bg-white text-soft-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-warm-orange hover:text-white transition-colors duration-300 shadow-lg"
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
