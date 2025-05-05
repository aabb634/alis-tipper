
import React, { useState, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Accessibility, ZoomIn, ZoomOut, Contrast } from "lucide-react";
import { Button } from '@/components/ui/button';

const AccessibilityMenu = () => {
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState('normal');

  // Update font size
  const changeFontSize = (increase: boolean) => {
    const newSize = increase ? fontSize + 10 : fontSize - 10;
    if (newSize >= 90 && newSize <= 130) {
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  // Toggle high contrast mode
  const toggleContrast = () => {
    const newContrast = contrast === 'normal' ? 'high' : 'normal';
    setContrast(newContrast);
    
    if (newContrast === 'high') {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  // Restore settings on unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.fontSize = '100%';
      document.documentElement.classList.remove('high-contrast');
    };
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center text-dark-slate hover:text-soft-blue transition duration-300 cursor-pointer">
          <Accessibility className="w-5 h-5 ml-2" />
          <span>נגישות</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 text-right" align="end">
        <h3 className="font-bold mb-2">הגדרות נגישות</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-1">גודל טקסט</h4>
            <div className="flex items-center justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => changeFontSize(false)}
                disabled={fontSize <= 90}
                aria-label="הקטן גודל טקסט"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span>{fontSize}%</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => changeFontSize(true)}
                disabled={fontSize >= 130}
                aria-label="הגדל גודל טקסט"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-1">ניגודיות</h4>
            <Button 
              variant={contrast === 'high' ? "default" : "outline"} 
              className="w-full" 
              onClick={toggleContrast}
              aria-pressed={contrast === 'high'}
            >
              <Contrast className="h-4 w-4 ml-2" />
              {contrast === 'normal' ? "הפעל ניגודיות גבוהה" : "כבה ניגודיות גבוהה"}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityMenu;
