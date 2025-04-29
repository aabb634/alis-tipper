
import React from 'react';
import Layout from '@/components/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Award, Clock, Users } from 'lucide-react';

const About = () => {
  const reliabilityFeatures = [
    {
      icon: <Shield className="text-soft-blue w-12 h-12" />,
      title: "איכות ובטיחות",
      description: "כל המערכות שלנו עומדות בתקנים המחמירים ביותר של בטיחות ואיכות"
    },
    {
      icon: <Award className="text-soft-blue w-12 h-12" />,
      title: "מומחיות",
      description: "צוות המהנדסים והטכנאים שלנו הוא בעל ניסיון רב ומומחיות בתחום"
    },
    {
      icon: <Clock className="text-soft-blue w-12 h-12" />,
      title: "שירות 24/7",
      description: "מערך תמיכה ושירות זמין בכל שעות היממה למענה מהיר לכל תקלה"
    },
    {
      icon: <Users className="text-soft-blue w-12 h-12" />,
      title: "ליווי אישי",
      description: "אנו מלווים כל לקוח באופן אישי, מהייעוץ הראשוני ועד התקנת המערכת ותחזוקתה"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-soft-blue py-20 text-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">אודות אליס מכולות</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl max-w-3xl mx-auto text-center">
              כבר למעלה מ-15 שנה אנו מספקים פתרונות מתקדמים לניהול פסולת בישראל, 
              בשילוב חדשנות טכנולוגית ומחויבות לשמירה על הסביבה
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ScrollReveal animationType="slide-in">
                <h2 className="text-3xl font-bold mb-6 text-dark-slate">
                  הסיפור שלנו
                </h2>
              </ScrollReveal>
              <ScrollReveal animationType="slide-in" delay={200}>
                <p className="text-lg mb-6 leading-relaxed text-dark-slate">
                  אליס מכולות נוסדה בשנת 2008 מתוך חזון של קבוצת מהנדסים סביבתיים, 
                  שזיהו את הצורך בפתרונות מתקדמים וידידותיים לסביבה עבור ניהול פסולת 
                  בישראל. מתחילה צנועה, גדלנו והפכנו לאחת החברות המובילות בתחום.
                </p>
              </ScrollReveal>
              <ScrollReveal animationType="slide-in" delay={300}>
                <p className="text-lg mb-6 leading-relaxed text-dark-slate">
                  היום, אנו גאים לשרת מגוון רחב של לקוחות - מארגונים ממשלתיים וחברות 
                  גדולות ועד לעסקים קטנים וקהילות מקומיות. המומחיות שלנו משלבת הבנה 
                  עמוקה של צרכי השוק הישראלי יחד עם פתרונות טכנולוגיים מהמתקדמים בעולם.
                </p>
              </ScrollReveal>
              <ScrollReveal animationType="slide-in" delay={400}>
                <p className="text-lg leading-relaxed text-dark-slate">
                  הערכים המובילים אותנו הם מצוינות טכנולוגית, שירות לקוחות יוצא דופן 
                  ומחויבות לקיימות ולהגנה על הסביבה. אנחנו מאמינים שניתן לשלב בין יעילות 
                  עסקית לבין אחריות סביבתית, ומדי יום אנו עובדים כדי להוכיח זאת.
                </p>
              </ScrollReveal>
            </div>
            <div className="order-1 md:order-2">
              <ScrollReveal>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/a311ffbb-c09b-41a1-9b3d-701df176447e.png" 
                    alt="צוות אליס מכולות" 
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-light-grey">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/a311ffbb-c09b-41a1-9b3d-701df176447e.png" 
                    alt="החזון שלנו" 
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal animationType="slide-in">
                <h2 className="text-3xl font-bold mb-6 text-dark-slate">החזון והמשימה שלנו</h2>
              </ScrollReveal>
              <ScrollReveal animationType="slide-in" delay={200}>
                <h3 className="text-xl font-bold mb-3 text-soft-blue">החזון שלנו</h3>
                <p className="text-lg mb-6 leading-relaxed text-dark-slate">
                  אנו שואפים להוביל את המהפכה בתחום ניהול הפסולת בישראל ולהיות 
                  בחירה ראשונה של ארגונים המחויבים לפתרונות סביבתיים חדשניים. 
                  החזון שלנו כולל עולם שבו טכנולוגיה וקיימות הולכות יד ביד.
                </p>
              </ScrollReveal>
              <ScrollReveal animationType="slide-in" delay={300}>
                <h3 className="text-xl font-bold mb-3 text-soft-blue">המשימה שלנו</h3>
                <p className="text-lg mb-6 leading-relaxed text-dark-slate">
                  המשימה שלנו היא לספק פתרונות מתקדמים לניהול פסולת אשר תורמים 
                  הן ליעילות התפעולית של לקוחותינו והן לשמירה על הסביבה. 
                  אנו מחויבים למצוא את האיזון המושלם בין צרכי הלקוח, טכנולוגיה מתקדמת 
                  ואחריות סביבתית.
                </p>
              </ScrollReveal>
              <ScrollReveal animationType="slide-in" delay={400}>
                <p className="text-lg leading-relaxed text-dark-slate">
                  בכל פרויקט, אנו מיישמים גישה של חדשנות מתמדת, מקצועיות חסרת פשרות 
                  וראייה לטווח ארוך. אנו גאים ביכולתנו לספק פתרונות מותאמים אישית 
                  העונים על הצרכים הייחודיים של כל לקוח.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center text-dark-slate">
              למה לבחור בנו?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reliabilityFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-light-grey p-8 rounded-lg shadow-md text-center fade-in-section"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-slate">
                  {feature.title}
                </h3>
                <p className="text-muted-grey">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-warm-orange text-white">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">
              מוכנים להתחיל?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              צוות המומחים שלנו ישמח לענות על כל שאלה ולייעץ לכם לגבי הפתרון 
              המתאים ביותר לצרכים שלכם. יחד, נוכל לבנות עתיד יותר נקי ויעיל.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <a 
              href="/contact" 
              className="inline-block bg-white text-warm-orange px-8 py-3 rounded-lg font-bold text-lg hover:bg-soft-blue hover:text-white transition-colors duration-300 shadow-lg"
            >
              צרו איתנו קשר
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
