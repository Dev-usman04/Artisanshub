import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Find Trusted and registered Artisans in your Area
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We connect you with verified and skilled workers in your neighborhood.
        </p>
        <Link to="/directory" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
          Browse Artisans
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
