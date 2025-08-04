import React, { useState } from "react";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    // Optionally reset after a few seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

      <form className="max-w-lg space-y-4" onSubmit={handleSubmit}>
        <input className="w-full border p-3 rounded" type="text" placeholder="Your Name" required />
        <input className="w-full border p-3 rounded" type="email" placeholder="Your Email" required />
        <textarea className="w-full border p-3 rounded" rows="5" placeholder="Your Message" required />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>

      {showSuccess && (
        <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default Contact;
