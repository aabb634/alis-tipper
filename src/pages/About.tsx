
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import ServicesImagesSection from '@/components/ServicesImagesSection';
import { Building, Trash2, Truck, Recycle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

const About = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Building className="h-8 w-8 text-soft-blue" />,
      title: "פינוי פסולת תעשייתית",
      description: "אנו מספקים שירותי פינוי פסולת תעשייתית מקצועיים ויעילים. הצוות שלנו מצויד בכלים המתאימים לטיפול בכל סוגי הפסולת התעשייתית, תוך הקפדה על תקנות איכות הסביבה"
    },
    {
      icon: <Trash2 className="h-8 w-8 text-soft-blue" />,
      title: "פינוי פסולת ביתית",
      description: "שירותי פינוי פסולת ביתית שלנו מותאמים לצרכים של בתים פרטיים, דירות ומתחמי מגורים. אנו מבטיחים פינוי מהיר, יעיל ונקי של כל סוגי הפסולת הביתית"
    },
    {
      icon: <Truck className="h-8 w-8 text-soft-blue" />,
      title: "משאית מנוף",
      description: "אנו מפעילים צי של משאיות מנוף מתקדמות לפינוי פסולת בניין, גזם ופסולת כבדה אחרת. המשאיות שלנו מאפשרות גישה למקומות קשים ומספקות פתרון יעיל לפינוי כמויות גדולות של פסולת"
    },
    {
      icon: <Recycle className="h-8 w-8 text-soft-blue" />,
      title: "שרוולים ושינוע ציוד",
      description: "אנו מציעים שירותי השכרת שרוולים לפינוי פסולת בניין ושינוע ציוד מכני כגון בובקטים וציוד הנדסי זעיר אחר. השירותים שלנו מותאמים לצרכי הלקוח ומספקים פתרון מלא לכל צרכי הפינוי והשינוע"
    }
  ];

  return (
    <Layout>
      <div className="py-12 md:py-16 bg-light-grey">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">שירותי פינוי פסולת מקצועיים באזור המרכז</h1>
          
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8 mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-soft-blue">פתרונות מתקדמים לפינוי פסולת בניין ותעשייתית</h2>
            <p className="mb-6">
              חברת אליס מכולות מתמחה בפינוי פסולת קבלנית ופסולת בנייה, פינוי תכולות מבתים, 
              משרדים ומפעלים ומעמידים לרשות לקוחותינו את מערך השירותים המתקדם בתחום בהתבסס 
              על הציוד איכותי והחדשני ביותר בשוק.
            </p>
            <p>
              כחברה מהמובילות בתחום פינוי הפסולת בישראל, אנו מחזיקים באישורים וברישיונות הרלוונטיים 
              ומפנים את הפסולת לאתרי הטמנה מסודרים כנדרש. אנו מציעים מגוון רחב של פתרונות 
              לכל צרכי הפינוי שלכם באזור המרכז, מנתניה ועד יבנה.
            </p>
          </div>
          
          {/* Services cards section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-grey text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Images section */}
          {/* <ServicesImagesSection /> */}
          
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-soft-blue">מי אנחנו - אליס פינוי פסולת</h2>
            <p className="mb-6">
              אליס פינוי פסולת בע"מ לשירותכם! החברה מתמחה בפינוי פסולת קבלנית ופסולת בנייה, פינוי תכולות מבתים, משרדים ומפעלים ומעמידים לרשות לקוחותינו את מערך השירותים המתקדם בתחום בהתבסס על הציוד איכותי והחדשני ביותר בשוק
            </p>
            <p>
              כחברה מהמובילות את תחום פינוי הפסולת באזור המרכז, אנו מחזיקים באישורים וברישיונות הרלוונטיים ומפנים את הפסולת לאתרי הטמנה מסודרים כנדרש. בנוסף אנו מספקים משאית מנוף לגזם, לפסולת תעשייה, ופסולת מעורבת. זאת ועוד, אנו מציעים שרוולים להשכרה ואף מספקים שנוע ציוד מכני כגון בובקטים ועוד ציוד הנדסי זעיר.
            </p>
          </div>

          {/* Additional images section */}
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/alis-tipper/alis-tipper/03e082e2-05a9-43ce-896a-8450882003c8.png" 
                  alt="מכולת פינוי פסולת לאתרי בנייה" 
                  className="w-full h-48 object-cover object-center"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/alis-tipper/alis-tipper/a47c61d1-0cd5-4583-80fd-73838b2c2afb.png" 
                  alt="פינוי פסולת בניין עם משאית מנוף" 
                  className="w-full h-48 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
