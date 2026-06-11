import uyuni from '../assets/uyuni.jpg';
import { Link } from "react-router-dom";

function Destino() {
  return (
    <div>

      <h1>Salar de Uyuni</h1>

      <img
        src={uyuni}
      />

      <p>
        El Salar de Uyuni es el desierto de sal más grande
        del mundo y uno de los principales atractivos
        turísticos de Bolivia.
      </p>

      <p>
        Durante la temporada de lluvias se produce
        un espectacular efecto espejo que atrae
        visitantes de todo el mundo.
      </p>

      <p>
        Incluye transporte, hospedaje y guía turístico.
      </p>

      <Link to="/">
        ← Volver al Inicio
      </Link>

    </div>
  );
}

export default Destino;