
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Home, Building, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-soft-blue">אליס פינוי פסולת ושינוע בע"מ</span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="flex items-center p-2"
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            <svg className="w-6 h-6 text-dark-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 flex-row-reverse">
          <Link to="/" className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300 ml-6">
            <Home className="w-5 h-5 ml-2" />
            <span>בית</span>
          </Link>
          <Link to="/about" className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300 ml-6">
            <Building className="w-5 h-5 ml-2" />
            <span>אודות</span>
          </Link>
          <Link to="/contact" className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300 ml-6">
            <Phone className="w-5 h-5 ml-2" />
            <span>צור קשר</span>
          </Link>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed left-0 right-0 top-[72px] bg-white shadow-md transition-transform duration-300 ease-in-out transform",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300" onClick={() => setIsOpen(false)}>
            <Home className="w-5 h-5 ml-2" />
            <span className="text-lg">בית</span>
          </Link>
          <Link to="/about" className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300" onClick={() => setIsOpen(false)}>
            <Building className="w-5 h-5 ml-2" />
            <span className="text-lg">אודות</span>
          </Link>
          <Link to="/contact" className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300" onClick={() => setIsOpen(false)}>
            <Phone className="w-5 h-5 ml-2" />
            <span className="text-lg">צור קשר</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
