
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import ServicesImagesSection from '@/components/ServicesImagesSection';

const About = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="py-12 md:py-16 bg-light-grey">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">השירותים שלנו</h1>
          
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8 mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-soft-blue">שירותי פינוי פסולת</h2>
            <p className="mb-6">
              חברת אליס מכולות מתמחה בפינוי פסולת קבלנית ופסולת בנייה, פינוי תכולות מבתים, 
              משרדים ומפעלים ומעמידים לרשות לקוחותינו את מערך השירותים המתקדם בתחום בהתבסס 
              על הציוד איכותי והחדשני ביותר בשוק.
            </p>
            <p>
              כחברה מהמובילות את התחום בישראל, אנו מחזיקים באישורים וברישיונות הרלוונטיים 
              ומפנים את הפסולת לאתרי הטמנה מסודרים כנדרש. אנו מציעים מגוון רחב של פתרונות 
              לכל צרכי הפינוי שלכם.
            </p>
          </div>
          
          {/* Images section */}
          <ServicesImagesSection />
          
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-soft-blue">מי אנחנו</h2>
            <p className="mb-6">
              אליס פינוי פסולת בע"מ לשירותכם! החברה מתמחה בפינוי פסולת קבלנית ופסולת בנייה, פינוי תכולות מבתים, משרדים ומפעלים ומעמידים לרשות לקוחותינו את מערך השירותים המתקדם בתחום בהתבסס על הציוד איכותי והחדשני ביותר בשוק
            </p>
            <p>
              כחברה מהמובילות את התחום בישראל, אנו מחזיקים באישורים וברישיונות הרלוונטיים ומפנים את הפסולת לאתרי הטמנה מסודרים כנדרש. בנוסף אנו מספקים משאית מנוף לגזם, לפסולת תעשייה, ופסולת מעורבת. זאת ועוד, אנו מציעים שרוולים להשכרה ואף מספקים שנוע ציוד מכני כגון בובקטים ועוד ציוד הנדסי זעיר.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
