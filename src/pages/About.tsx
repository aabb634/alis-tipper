
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { ScrollArea } from "@/components/ui/scroll-area";
import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Trash2, Recycle, Building } from 'lucide-react';

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
      {/* Hero Section */}
      <div className="bg-soft-blue py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">אודות אליס מכולות</h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              חברה מובילה בתחום פינוי הפסולת והמכולות בישראל
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-dark-slate">מי אנחנו</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="prose max-w-none text-dark-slate space-y-4">
                <p>
                  אליס מכולות הינה חברה מובילה בתחום פינוי הפסולת והמכולות בישראל. החברה הוקמה מתוך חזון לספק שירותי פינוי פסולת איכותיים, מקצועיים ואמינים לכל סוגי הלקוחות - מבתים פרטיים ועד מפעלי תעשייה גדולים
                </p>
                <p>
                  הצוות שלנו מורכב מאנשי מקצוע מנוסים ומיומנים, המחויבים לספק את השירות הטוב ביותר ללקוחותינו. אנו משתמשים בציוד המתקדם ביותר בתעשייה כדי להבטיח שכל עבודת פינוי פסולת מתבצעת ביעילות, במהירות ובבטיחות
                </p>
                <p>
                  אנו מחויבים לאיכות הסביבה ופועלים בהתאם לכל התקנות והחוקים הרלוונטיים. הפסולת שאנו מפנים מועברת לאתרי מיחזור והטמנה מורשים, תוך הקפדה על הפרדת פסולת ומיחזור כאשר הדבר אפשרי
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 md:py-16 bg-light-grey">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-dark-slate">השירותים שלנו</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-dark-slate">{service.title}</h3>
                      <p className="text-muted-grey flex-grow">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-dark-slate">הערכים שלנו</h2>
          </ScrollReveal>
          
          <ScrollArea className="max-h-[500px] max-w-4xl mx-auto pr-4">
            <div className="space-y-6">
              <ScrollReveal delay={150}>
                <div className="border-r-4 border-soft-blue pr-4 text-right">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">מקצועיות</h3>
                  <p className="text-muted-grey">
                    אנו מחויבים לספק שירות מקצועי ברמה הגבוהה ביותר. הצוות שלנו מוכשר ומנוסה, והציוד שלנו הוא המתקדם ביותר בתעשייה
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="border-r-4 border-soft-blue pr-4 text-right">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">אמינות</h3>
                  <p className="text-muted-grey">
                    אנו מקפידים על עמידה בזמנים ובהתחייבויות שלנו. כשאנחנו אומרים שנגיע בשעה מסוימת, אנחנו מתכוונים לכך
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={450}>
                <div className="border-r-4 border-soft-blue pr-4 text-right">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">שירות לקוחות</h3>
                  <p className="text-muted-grey">
                    אנו מאמינים בשירות לקוחות מעולה. אנו זמינים לענות על שאלות, לספק מידע ולפתור בעיות בכל עת
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <div className="border-r-4 border-soft-blue pr-4 text-right">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">אחריות סביבתית</h3>
                  <p className="text-muted-grey">
                    אנו מחויבים לאיכות הסביבה ופועלים בהתאם לכל התקנות והחוקים הרלוונטיים. אנו מקפידים על פינוי פסולת אחראי ומיחזור כאשר הדבר אפשרי
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollArea>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-soft-blue text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">מוכנים להתחיל?</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-lg max-w-2xl mx-auto mb-6">
              צרו איתנו קשר עוד היום לקבלת הצעת מחיר ללא התחייבות עבור שירותי פינוי הפסולת שלנו.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <a 
              href="/contact" 
              className="inline-block bg-white text-soft-blue px-6 md:px-8 py-3 rounded-lg font-bold text-lg hover:bg-warm-orange hover:text-white transition-colors duration-300 shadow-lg"
            >
              צרו קשר עכשיו
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
