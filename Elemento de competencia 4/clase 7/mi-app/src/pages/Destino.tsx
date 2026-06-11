import uyuni from '../assets/uyuni.jpg';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Destino() {
  return (
    <main>

      <Helmet>
        
        <title>Destino destacado: Salar de Uyuni | TravelBol</title>

        <meta
          name="description"
          content="El Salar de Uyuni es el desierto de sal más grande del mundo. Paquetes con transporte, hospedaje y guía turístico incluidos."
        />

        <meta
          name="keywords"
          content="Salar de Uyuni, Bolivia, turismo, desierto de sal, efecto espejo, paquetes turísticos"
        />

        <meta 
        name="author" 
        content="TravelBol" 
        />

        {/* Open Graph */}

        <meta 
        property="og:title" 
        content="Salar de Uyuni | TravelBol" 
        />

        <meta
          property="og:description"
          content="El desierto de sal más grande del mundo. Espectacular efecto espejo en temporada de lluvias."
        />

        <meta 
        property="og:image" 
        content={uyuni} 
        />

        <meta 
        property="og:type" 
        content="website" 
        />

      </Helmet>

      <h1>Salar de Uyuni</h1>

      <img
        src={uyuni}
        alt="Imagen del Salar de Uyuni en Bolivia"
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

      <nav aria-label="Navegación">
        <Link to="/">← Volver al Inicio</Link>
      </nav>

    </main>
  );
}

export default Destino;