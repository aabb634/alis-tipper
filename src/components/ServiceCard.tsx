
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef} 
      className={cn(
        "bg-white p-6 rounded-lg shadow-md card-hover fade-in-section",
        "hover:border-soft-blue border-2 border-transparent transition-all duration-300"
      )}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-soft-blue mb-4 text-4xl">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-dark-slate">{title}</h3>
        <p className="text-muted-grey">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
