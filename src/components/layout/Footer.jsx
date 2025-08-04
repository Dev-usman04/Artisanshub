import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-center py-6 text-sm text-black-600">
      © {new Date().getFullYear()} ArtisanHub. All rights reserved.
    </footer>
  );
};

export default Footer;
