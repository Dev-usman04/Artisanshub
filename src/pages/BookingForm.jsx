import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const updatedBookings = [...existingBookings, formData];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    setSubmitted(true);

    // Optional: Redirect back after 3s
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Complete Your Booking</h2>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
          ✅ Booking submitted and saved successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            type="text"
            placeholder="Your Full Name"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            type="tel"
            placeholder="Phone Number"
            required
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            type="text"
            placeholder="Your Address"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Submit Booking
          </button>
        </form>
      )}
    </section>
  );
};

export default BookingForm;
