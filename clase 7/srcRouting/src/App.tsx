import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importamos componentes de React Router:
// BrowserRouter: habilita el sistema de rutas en navegador
// Routes: contenedor de todas las rutas
// Route: define cada ruta individual

// Importamos componente y paginas
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;