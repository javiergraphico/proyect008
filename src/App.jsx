import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Services from "./pages/Services";
import Porfolio from "./pages/Porfolio";
import Contacto from "./pages/Contacto";
import Skill from "./pages/Skill";
import Experiencia from "./pages/Experiencia";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/services" element={<Services />} />
        <Route path="/porfolio" element={<Porfolio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
