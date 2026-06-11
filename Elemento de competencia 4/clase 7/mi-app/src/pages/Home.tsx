import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import travel from '../assets/travel.jpg';

function Home() {
  return (
    <main>

      <Helmet>
        
        <title>TravelBol | Agencia de Viajes</title>

        <meta
          name="description"
          content="Descubre destinos turísticos nacionales e internacionales. Paquetes turísticos, hospedaje y asesoramiento para tus vacaciones."
        />

        <meta
          name="keywords"
          content="viajes, turismo, Bolivia, destinos turísticos, paquetes turísticos, hospedaje"
        />

        <meta 
        name="author" 
        content="TravelBol" 
        />

        {/* Open Graph */}

        <meta 
        property="og:title" 
        content="TravelBol | Agencia de Viajes" 
        />

        <meta
          property="og:description"
          content="Descubre destinos turísticos nacionales e internacionales con TravelBol."
        />

        <meta 
        property="og:image" 
        content={travel} 
        />

        <meta 
        property="og:type" 
        content="website" 
        />
        
      </Helmet>

      <header>
        <h1>TravelBol</h1>
      </header>

      <img
        src={travel}
        alt="Paisaje de viaje con el texto Time to Travel"
      />

      <p>
        Descubre destinos turísticos nacionales e internacionales.
      </p>

      <p>
        Nuestra agencia ofrece paquetes turísticos,
        hospedaje y asesoramiento para tus vacaciones.
      </p>

      <nav aria-label="Secciones del sitio">
        <Link to="/destino">Ver destino destacado</Link>
        <br />
        <Link to="/promociones">Ver promociones</Link>
      </nav>

    </main>
  );
}

export default Home;