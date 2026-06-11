import type { JSX } from "react";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Esta página no existe en nuestro hotel</p>
      <Link to="/" className="btn-back">Volver al Dashboard</Link>
    </div>
  );
}
