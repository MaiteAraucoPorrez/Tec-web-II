import { Helmet } from "react-helmet-async";
import reactblog from '../assets/reactblog.jpg';

function Post() {
  return (
    <div>

      <Helmet>

        <title>
          React | Blog de Tecnología
        </title>

        <meta
          name="description"
          content="Novedades y evolución de React y el SEO."
        />

        <meta
          property="og:title"
          content="React y SEO"
        />

        <meta
          property="og:description"
          content="Artículo sobre las novedades de React."
        />

        <meta
          property="og:image"
          content={reactblog}
        />

      </Helmet>

      <h1>
        React 2026
      </h1>

      <img
        src={reactblog}
        alt="Imagen del artículo React en la actualidad"
      />

      <p>
        React y el SEO en la actualidad.
      </p>

    </div>
  );
}

export default Post;