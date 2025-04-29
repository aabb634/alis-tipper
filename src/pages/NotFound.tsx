import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollReveal from '@/components/ScrollReveal';

const NotFound = () => {
  const navigate = useNavigate();
  
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen bg-light-grey">
        <ScrollReveal>
          <h1 className="text-4xl font-bold text-dark-slate mb-4">404 - דף לא נמצא</h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg text-muted-grey mb-8">הדף שחיפשתם לא קיים או הוסר.</p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <button
            onClick={() => navigate(-1)}
            className="bg-soft-blue hover:bg-warm-orange text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
          >
            חזור אחורה
          </button>
        </ScrollReveal>
      </div>
    </Layout>
  );
};

export default NotFound;
