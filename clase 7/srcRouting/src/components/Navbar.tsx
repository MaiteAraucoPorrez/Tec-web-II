import { Link } from "react-router-dom";
// Componente Link permite navegar entre rutas sin recargar la página

function Navbar(): JSX.Element {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/nosotros">Nosotros</Link> |{" "}
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;