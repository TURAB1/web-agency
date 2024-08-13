import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.tsx";
import NotFound from "../pages/NotFound.tsx";
import Services from "../pages/Services.tsx"; 
import Contact from "../pages/Contact.tsx";
import AboutSection from "../components/UI/AboutSection.tsx";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about-us" element={<AboutSection aboutClass="aboutUs" />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
     
    </Routes>
  );
};

export default Routers;
