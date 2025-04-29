
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-slate text-white py-10 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="text-right">
            <h3 className="text-xl md:text-2xl font-bold text-soft-blue mb-4">אליס מכולות</h3>
            <p className="text-sm text-gray-300">
              פתרונות מתקדמים לפינוי פסולת וניהול משאבים סביבתיים למגזר העסקי והתעשייתי
            </p>
          </div>
          
          {/* Links */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-4 text-white">קישורים</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-soft-blue transition duration-300">דף הבית</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-soft-blue transition duration-300">אודות</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-soft-blue transition duration-300">צור קשר</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-4 text-white">צור קשר</h4>
            <div className="flex items-center mb-2 justify-end">
              <span className="text-gray-300">info@alistipper.co.il</span>
              <Mail className="w-5 h-5 text-soft-blue mr-2" />
            </div>
            <div className="flex items-center mb-2 justify-end">
              <span className="text-gray-300">02-1234567</span>
              <Phone className="w-5 h-5 text-soft-blue mr-2" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} אליס מכולות. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
