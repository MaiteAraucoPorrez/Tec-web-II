import type { JSX } from "react";
import { Link } from "react-router-dom";

function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <div className="logo">EcoSite</div>

      <div className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar;