import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Directory from "../pages/Directory";
import ArtisanProfile from "../pages/ArtisanProfile";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/directory" element={<Directory />} />
      <Route path="/artisan/:id" element={<ArtisanProfile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
