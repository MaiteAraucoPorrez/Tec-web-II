import type { JSX } from "react";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link className="btn" to="/">
        Volver al Inicio
      </Link>
    </div>
  );
}
