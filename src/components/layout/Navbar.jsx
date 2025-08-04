import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">ArtisanHub</Link>
        <nav className="space-x-6 hidden md:block">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/directory" className="hover:text-blue-600">Directory</NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
