
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-light-grey px-4">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl font-bold text-soft-blue mb-4">404</h1>
          <p className="text-2xl text-dark-slate mb-8">הדף המבוקש לא נמצא</p>
          <Link
            to="/"
            className="bg-soft-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-warm-orange transition-colors duration-300"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
