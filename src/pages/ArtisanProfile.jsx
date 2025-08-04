import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import artisans from "../data/artisans";

const ArtisanProfile = () => {
  const { id } = useParams();
  const artisan = artisans.find((a) => a.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);

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
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
            <h3 className="text-lg font-semibold text-green-600 mb-2">Success!</h3>
            <p className="mb-4">Your booking for {artisan.name} was successful.</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtisanProfile;
