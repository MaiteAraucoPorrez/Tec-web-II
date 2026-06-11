import promocion from '../assets/promocion.jpg';
import { Link } from "react-router-dom";

function Promociones() {
  return (
    <div>

      <h1>Promociones de Temporada</h1>

      <img
        src={promocion}
      />

      <ul>

        <li>
          Uyuni 3 días y 2 noches
        </li>

        <li>
          Cusco y Machu Picchu
        </li>

        <li>
          Río de Janeiro
        </li>

        <li>
          Cartagena de Indias
        </li>

      </ul>

      <p>
        Promociones válidas hasta fin de mes.
      </p>

      <Link to="/">
        ← Volver al Inicio
      </Link>

    </div>
  );
}

export default Promociones;