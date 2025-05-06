
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Truck, Trash2, Recycle, Building } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ServicesSection from '@/components/home/ServicesSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const serviceAreas = [
    {
      icon: <Building />,
      title: "פינוי פסולת תעשייתית",
      description: "פינוי פסולת קבלנית ופסולת בנייה מאתרי בנייה בכל אזור המרכז"
    },
    {
      icon: <Trash2 />,
      title: "פינוי פסולת ביתית",
      description: "פינוי תכולות מבתים, משרדים ומפעלים במחירים אטרקטיביים"
    },
    {
      icon: <Truck />,
      title: "משאית מנוף לפינוי גזם",
      description: "אנו מספקים משאית מנוף לגזם, לפסולת תעשייה, ופסולת בניין בכל אזור המרכז"
    },
    {
      icon: <Recycle />,
      title: "שרוולים ושינוע ציוד הנדסי",
      description: "השכרת שרוולים לפינוי פסולת בניין ושינוע ציוד מכני כגון בובקטים וציוד הנדסי זעיר"
    }
  ];

  const whyChooseUs = [
    "קובעים שעה מראש ומגיעים בטווח השעות שנקבעו ללא איחורים",
    "שירות פינוי פסולת מקצועי ואמין - הפינוי מתבצע לאתר מורשה",
    "מחירים נוחים לפינוי פסולת בניין, החל מ-700 ש\"ח",
    "שירות פינוי פסולת מקיף בכל הערים והיישובים מנתניה ועד יבנה"
  ];

  const mainServices = [
    "פינוי פסולת בניין, תעשייתית וביתית באזור מרכז הארץ",
    "משאית מנוף לפינוי גזם, פסולת תעשייה, ופסולת בניין",
    "השכרת שרוולים ושינוע ציוד מכני כגון בובקטים וציוד הנדסי"
  ];

  return (
    <Layout>
      <HeroSection mainServices={mainServices} />
      <IntroSection />
      <WhyChooseUsSection whyChooseUs={whyChooseUs} />
      <ServicesSection serviceAreas={serviceAreas} />
      <CTASection />
    </Layout>
  );
};

export default Index;
