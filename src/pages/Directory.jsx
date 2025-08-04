import React from "react";
import { Link } from "react-router-dom";
import artisans from "../data/artisans";

const Directory = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Artisan Directory</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {artisans.map((artisan) => (
          <Link
            to={`/artisan/${artisan.id}`}
            key={artisan.id}
            className="block border p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={artisan.image}
              alt={artisan.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-bold">{artisan.name}</h3>
            <p>{artisan.skill}</p>
            <p className="text-sm text-gray-600">{artisan.location}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Directory;
