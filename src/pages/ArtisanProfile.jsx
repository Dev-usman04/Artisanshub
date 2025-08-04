import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import artisans from "../data/artisans";

const ArtisanProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artisan = artisans.find((a) => a.id === parseInt(id));

  if (!artisan) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Artisan Not Found</h2>
        <Link to="/directory" className="text-blue-600 mt-4 block hover:underline">
          Back to Directory
        </Link>
      </div>
    );
  }

  const handleBooking = () => {
    // Save artisan info to localStorage (optional)
    localStorage.setItem("selectedArtisan", JSON.stringify(artisan));

    // Redirect user to booking form
    navigate("/book");
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto border p-6 rounded-lg shadow-md">
        <img
          src={artisan.image}
          alt={artisan.name}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <h2 className="text-2xl font-bold mb-2">{artisan.name}</h2>
        <p className="text-gray-700 mb-1"><strong>Skill:</strong> {artisan.skill}</p>
        <p className="text-gray-700 mb-4"><strong>Location:</strong> {artisan.location}</p>
        <p className="text-gray-600 mb-6">
          Get connected with experienced and skilled professionals ready to deliver quality work—from repairs and installations to custom services. Fast, affordable, and always professional.
          📍 Serving homes and businesses in your area!
          📞 Book now and get it done right!
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          onClick={handleBooking}
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default ArtisanProfile;
