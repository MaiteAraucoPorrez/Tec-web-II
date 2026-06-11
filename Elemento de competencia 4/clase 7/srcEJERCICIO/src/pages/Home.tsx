import { Link } from "react-router-dom";
import travel from '../assets/travel.jpg';

function Home() {
  return (
    <div>

      <h1>TravelBol</h1>

      <img
        src={travel}
      />

      <p>
        Descubre destinos turísticos nacionales e internacionales.
      </p>

      <p>
        Nuestra agencia ofrece paquetes turísticos,
        hospedaje y asesoramiento para tus vacaciones.
      </p>

      <Link to="/destino">
        Ver destino destacado
      </Link>

      <br />

      <Link to="/promociones">
        Ver promociones
      </Link>

    </div>
  );
}

export default Home;