
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
