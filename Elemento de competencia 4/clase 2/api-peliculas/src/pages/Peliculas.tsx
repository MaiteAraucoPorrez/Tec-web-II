import { useEffect, useState } from "react";
import { getPeliculas, createPelicula, type Pelicula } from "../services/peliculas";

function Peliculas() {

  // ==========================================
  // ESTADOS
  // ==========================================
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  // ==========================================
  // GET -> CARGAR PELÍCULAS
  // ==========================================
  const loadPeliculas = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getPeliculas();
      setPeliculas(data);
    } catch (error) {
      setError("No se pudieron cargar las películas. Intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  // se ejecuta automáticamente al montar el componente
  useEffect(() => {
    loadPeliculas();
  }, []);

  // ==========================================
  // POST -> REGISTRAR PELÍCULA
  // ==========================================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const nuevaPelicula: Omit<Pelicula, "id"> = {
        title,
        rating: parseFloat(rating),
      };

      const creada = await createPelicula(nuevaPelicula);

      setPeliculas([...peliculas, creada]);

      setTitle("");
      setRating("");

      alert("Película registrada correctamente");
    } catch (error) {
      setError("Error al registrar la película. Intente de nuevo.");
    }
  };

  return (
    <div>
      <h1>Películas</h1>

      <hr />

      <h2>Registrar Película</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "300px" }}
        />

        <input
          type="number"
          placeholder="Rating (0 - 5)"
          value={rating}
          min="0"
          max="5"
          step="0.1"
          onChange={(e) => setRating(e.target.value)}
          required
          style={{ width: "150px" }}
        />

        <button type="submit">
          Guardar
        </button>
      </form>

      <hr />

      <h2>Lista de Películas</h2>

      {loading && <p>Cargando películas...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {peliculas.map((pelicula) => (
            <li key={pelicula.id}>
              <strong>{pelicula.title}</strong> - Rating: {pelicula.rating}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Peliculas;
