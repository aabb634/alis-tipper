
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const IntroSection: React.FC = () => {
  return (
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
  );
};

export default IntroSection;
