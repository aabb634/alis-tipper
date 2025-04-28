
import React from 'react';
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="bg-light-grey p-8 rounded-lg shadow-md text-center flex flex-col items-center animate-bounce-in" style={{ animationDelay: '100ms' }}>
                <div className="bg-soft-blue p-4 rounded-full text-white mb-6 glowing-effect">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-slate">דוא"ל</h3>
                <a href="mailto:info@wastemaster.co.il" className="text-soft-blue hover:text-warm-orange transition-colors duration-300 text-lg font-bold">
                  info@wastemaster.co.il
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
              
              {/* Address */}
              <div className="bg-light-grey p-8 rounded-lg shadow-md text-center flex flex-col items-center animate-bounce-in" style={{ animationDelay: '300ms' }}>
                <div className="bg-soft-blue p-4 rounded-full text-white mb-6 glowing-effect">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-slate">כתובת</h3>
                <address className="text-muted-grey not-italic">
                  רחוב האומן 17,<br />
                  אזור התעשייה,<br />
                  ירושלים 9342211
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-light-grey">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-dark-slate animate-fade-in">
              שלחו לנו הודעה
            </h2>
            
            <form className="bg-white p-8 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-dark-slate mb-2 font-medium">שם מלא</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue" 
                    placeholder="הכנס את שמך"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-dark-slate mb-2 font-medium">חברה</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue" 
                    placeholder="שם החברה שלך"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-dark-slate mb-2 font-medium">דוא"ל</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue" 
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-dark-slate mb-2 font-medium">טלפון</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue" 
                    placeholder="050-1234567"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-dark-slate mb-2 font-medium">נושא</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue" 
                  placeholder="במה נוכל לעזור לך?"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-dark-slate mb-2 font-medium">הודעה</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue resize-none" 
                  placeholder="פרט את הפנייה שלך..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-soft-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-warm-orange transition-colors duration-300 shadow-md"
              >
                שלח הודעה
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-dark-slate">
            המיקום שלנו
          </h2>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-96 animate-fade-in">
            {/* Replace with actual map or an image of a map location */}
            <div className="w-full h-full bg-light-grey flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-soft-blue mx-auto mb-4" />
                <p className="text-dark-slate font-bold text-xl">רחוב האומן 17, אזור התעשייה, ירושלים</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
