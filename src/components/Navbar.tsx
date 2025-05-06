
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Home, Building, Phone, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AccessibilityMenu from './AccessibilityMenu';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/alis-tipper/alis-tipper/43b38cb7-e58d-48cb-802a-2b2df479b1f6.png" 
            alt="אליס מכולות לוגו" 
            className="h-8 md:h-10 mr-2 rounded-md" 
          />
          <span className="text-lg md:text-2xl font-bold text-soft-blue">אליס מכולות</span>
        </Link>
        
        {/* Desktop Navigation with Accessibility Menu integrated */}
        <div className="hidden md:flex space-x-6 flex-row-reverse items-center">
          <Link to="/" className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300 ml-6">
            <Home className="w-5 h-5 ml-2" />
            <span>בית</span>
          </Link>
          <Link to="/about" className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300 ml-6">
            <Building className="w-5 h-5 ml-2" />
            <span>השירותים שלנו</span>
          </Link>
          <Link to="/contact" className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300 ml-6">
            <Phone className="w-5 h-5 ml-2" />
            <span>צור קשר</span>
          </Link>
          <AccessibilityMenu />
        </div>
        
        {/* Mobile menu with Sheet */}
        <div className="md:hidden">
          <div className="flex items-center gap-2">
            <AccessibilityMenu />
            <Sheet>
              <SheetTrigger asChild>
                <button 
                  className="flex items-center p-2"
                  aria-label="פתח תפריט"
                >
                  <Menu className="w-6 h-6 text-dark-slate" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                <SheetHeader className="text-right mb-6">
                  <SheetTitle className="text-xl font-bold text-soft-blue">תפריט ניווט</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-end space-y-6 py-4">
                  <Link to="/" className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300">
                    <span className="text-lg ms-2">בית</span>
                    <Home className="w-5 h-5" />
                  </Link>
                  <Link to="/about" className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300">
                    <span className="text-lg ms-2">השירותים שלנו</span>
                    <Building className="w-5 h-5" />
                  </Link>
                  <Link to="/contact" className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300">
                    <span className="text-lg ms-2">צור קשר</span>
                    <Phone className="w-5 h-5" />
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
