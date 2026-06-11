import promocion from '../assets/promocion.jpg';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Promociones() {
  return (
    <main>

      <Helmet>

        <title>Promociones de Temporada | TravelBol</title>

        <meta
          name="description"
          content="Aprovecha nuestras promociones: Uyuni, Cusco y Machu Picchu, Río de Janeiro y Cartagena de Indias. ¡Válidas hasta fin de mes!"
        />

        <meta
          name="keywords"
          content="promociones viajes, Uyuni, Cusco, Machu Picchu, Río de Janeiro, Cartagena, paquetes turísticos, ofertas"
        />

        <meta 
        name="author" 
        content="TravelBol" 
        />

        {/* Open Graph */}

        <meta 
        property="og:title" 
        content="Promociones de Temporada | TravelBol" 
        />

        <meta
          property="og:description"
          content="Ofertas en Uyuni, Cusco, Río de Janeiro y Cartagena. ¡Válidas hasta fin de mes!"
        />

        <meta 
        property="og:image" 
        content={promocion} 
        />

        <meta 
        property="og:type" 
        content="website" 
        />

      </Helmet>

      <h1>Promociones de Temporada</h1>

      <img
        src={promocion}
        alt="Imagen promocional de viajes"
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

      <nav aria-label="Navegación">
        <Link to="/">← Volver al Inicio</Link>
      </nav>

    </main>
  );
}

export default Promociones;