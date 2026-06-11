import { Link } from "react-router-dom";
import reactblog from '../assets/reactblog.jpg';

function Home() {
  return (
    <div>
      <h1>Mi Blog</h1>

      <img src={reactblog} />

      <p>
        Noticias de tecnología
      </p>

      <Link to="/post">
        Ver artículo
      </Link>
    </div>
  );
}

export default Home;