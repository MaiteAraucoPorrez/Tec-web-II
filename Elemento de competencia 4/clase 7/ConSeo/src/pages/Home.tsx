import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import reactblog from '../assets/reactblog.jpg';

function Home() {
  return (
    <div>

      <Helmet>

        <title>
          Blog de Tecnología | Inicio
        </title>

        <meta
          name="description"
          content="Noticias modernas sobre React, JavaScript y desarrollo web."
        />

        <meta
          name="keywords"
          content="React, JavaScript, frontend, desarrollo web"
        />

        <meta
          name="author"
          content="Juan Pérez"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="Blog de Tecnología"
        />

        <meta
          property="og:description"
          content="Noticias modernas sobre React y desarrollo frontend."
        />

        <meta
          property="og:image"
          content={reactblog}
        />

        <meta
          property="og:type"
          content="website"
        />

      </Helmet>

      <h1>
        Blog de Tecnología
      </h1>

      <img
        src={reactblog}
        alt="Imagen principal del blog"
      />

      <p>
        Noticias modernas sobre desarrollo web.
      </p>

      <Link to="/post">
        Ver artículo
      </Link>

    </div>
  );
}

export default Home;