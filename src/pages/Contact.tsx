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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">צור קשר</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            אנחנו כאן כדי לענות על כל שאלה ולספק מידע נוסף על השירותים שלנו
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-dark-slate">
              דרכים ליצירת קשר
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
