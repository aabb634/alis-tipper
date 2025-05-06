
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 bg-soft-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">צור קשר לקבלת הצעת מחיר לפינוי פסולת</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            אנחנו כאן כדי לענות על כל שאלה ולספק מידע נוסף על שירותי פינוי הפסולת, מכולות ומשאיות המנוף שלנו באזור המרכז
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-dark-slate">
              דרכים ליצירת קשר עם אליס מכולות
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Email */}
              <div className="bg-light-grey p-8 rounded-lg shadow-md text-center flex flex-col items-center animate-bounce-in" style={{ animationDelay: '100ms' }}>
                <div className="bg-soft-blue p-4 rounded-full text-white mb-6 glowing-effect">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-slate">דוא"ל</h3>
                <a href="mailto:info@alistipper.co.il" className="text-soft-blue hover:text-warm-orange transition-colors duration-300 text-lg font-bold">
                  info@alistipper.co.il
                </a>
              </div>
              
              {/* Phone */}
              <div className="bg-light-grey p-8 rounded-lg shadow-md text-center flex flex-col items-center animate-bounce-in" style={{ animationDelay: '200ms' }}>
                <div className="bg-soft-blue p-4 rounded-full text-white mb-6 glowing-effect">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-slate">טלפון</h3>
                <a href="tel:021234567" className="text-soft-blue hover:text-warm-orange transition-colors duration-300 text-lg font-bold">
                  02-1234567
                </a>
                <p className="text-muted-grey mt-2">
                  זמינים: א'-ה', 09:00-17:00
                </p>
              </div>
            </div>

            <div className="mt-12 bg-light-grey p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4 text-dark-slate">אזורי שירות - פינוי פסולת</h3>
              <p className="text-muted-grey mb-4">
                אנו מספקים שירותי פינוי פסולת, מכולות ומשאית מנוף בכל אזור המרכז:
              </p>
              <p className="font-medium">
                תל אביב, ראשון לציון, רחובות, נס ציונה, יבנה, רמת גן, גבעתיים, הרצליה, רעננה, כפר סבא, נתניה והסביבה
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-10 bg-soft-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">מחירים אטרקטיביים לפינוי פסולת החל מ-700 ש"ח</h2>
          <p className="mb-6 text-lg">התקשרו עכשיו לקבלת הצעת מחיר משתלמת לפינוי פסולת</p>
          <a href="tel:021234567" className="inline-block bg-white text-soft-blue px-6 py-3 rounded-lg font-bold text-lg hover:bg-warm-orange hover:text-white transition-colors duration-300">
            חייגו עכשיו: 02-1234567
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
