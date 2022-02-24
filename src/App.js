import React from 'react';
import 'hover.css/css/hover-min.css';
import { Routes, Route } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import AsStone from './pages/AsStone';
import Services from './pages/Services';
import References from './pages/References';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/aboutus" element={<AsStone />} />
        <Route path="/services" element={<Services />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
